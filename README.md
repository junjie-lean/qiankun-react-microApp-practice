
## 什么是微前端

- 微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略.
- 微前端特点
  1. 子应用开发技术栈无关,主框架不限制子应用所用的前端框架,子应用除了在主框架下运行外,本身自己可独立运行.
  2. 独立开发及部署,子应用不在主框架项目体系内进行开发,子应用的项目维护也不涉及到主框架的变更.
  3. 独立运行,每个子应用之间不存在互相干扰的情况.

微前端不是一个新的技术名词,在2016年就有相关的技术概念,当时微前端实践均为iframe内嵌的方式来实现.

## 什么样的场景适合微前端架构

- 在项目内集成外部其他项目(第三方对接)
- 为缩短庞大项目开发周期,将功能拆分给不同技术团队进行开发
- 不同的前端产品需要集成到某个平台内(门户类)
- 其他...  


## iframe? no!

利用iframe来进行微前端技术实践,固然是可行,但是有非常大的维护难度! 

[这里]('https://www.yuque.com/kuitos/gky7yw/gesexv')有一篇文章介绍了为什么不用iframe来做技术解决方案. 

首先,利用iframe加载多个子应用的时候,会阻断主应用的onload渲染,导致主应用界面卡顿,降低用户体验.  

其次,在iframe架构中,子应用和子应用之间,子应用和主应用之间的数据交互解决方案一般是通过postMessage来实现,维护难度较大.  

再次,iframe架构中,UI不同步,比如子应用中的模态框,就不能做到真正的全屏弹窗,如果通过postMessage让主应用来弹窗的话,虽然可以做到全屏弹框,但是往往模态框内还有其他回调操作,处理这些回调操作又需要把数据利用postMessage传回子应用,这样的话就不能适应灵活的场景和需求.  

综合以上因素,我觉得iframe不适合现有的微前端技术架构.


## qiankun概念及特点介绍

[qiankun]('https://qiankun.umijs.org')是一个基于single-spa的微前端实现库,由蚂蚁金服开发并维护,目前qiankun在蚂蚁金服内部服务了超过 200+ 线上应用,有一定的稳定性.  
qiankun的特点:

- qiankun作为主应用开发的基座,并不要求子应用的技术栈,只要它适配于任何基于通用模块定义规范（Universal Module Definition）导出的应用,即可作为子应用,即:子应用可以是以react或者vue或者AngularJS开发的单页应用,也可以是后端MVC全栈开发或者jQuery的DOM式开发模式,甚至是next.js或nuxt.js服务端渲染开发模式,qiankun都可以进行很好的适配.  
- qiankun可以除了可以像iframe一样,很轻松的接入子应用以外,还确保了在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度的同时也不阻塞主应用的渲染.  
- qiankun通过抽离子应用DOM注入主应用,但是又做到了子应用之间的css样式隔离,同时还提供能js沙箱机制,隔离了js的runtime.  
- qiankun基于观察者模式封装了一套数据交互方案,使主应用和子应用之间的数据交互逻辑变得非常清晰可控.

## qiankun实例

#### 子应用端:  

1. 目前基于react web端的脚手架已支持直接作为子应用开发,可以做到开箱即用;
2. 非react web端的项目需要做如下改动:  
   - 在项目的入口文件处,也就是webpack的入口文件,增加并暴露出三个生命周期函数:
  
    ```
	
      import ReactDOM from 'react-dom';
      import App from 'provider';
      
		  function render(props = {}) {
			  const DOM = document.getElementById("microAppContainer3000");
			  ReactDOM.render(<App {...props} />, DOM);
		  }

      //作为独立应用,也可以渲染,作为独立应用时,不再调用其他生命周期函数
      if (!window.__POWERED_BY_QIANKUN__) {
        render();
      }

      //主应用在引导该应用注入的时候调用该函数
      export async function bootstrap() {
        render(props);
      }

      //主应用在挂载当前子应用的时候调用该函数,并注册全局状态change事件
      export async function mount(props) {
        props.onGlobalStateChange((state) => {
          render(props);
        });
        render(props);
      }

      //主应用在卸载当前子应用的时候的函数调用
      export async function unmount() {
          const DOM = document.getElementById("microAppContainer3000");
          ReactDOM.unmountComponentAtNode(DOM);
      }

    ```  

  - 需要采用hash路由模式并适配主应用的路由规则.
  - 需要添加适配全局状态管理机制的代码.
  - 子应用的webpack导出配置需要增加umd规范:  
  
    ```javascript
          // 需要在package.json里增加projectName字段
          const projectName  = require('package.json').projectName;
          module.export  = {
            //...
              output:{
                filename:"index.js",
                library: `${projectName}-[name]`,
                libraryTarget: "umd",
                jsonpFunction: `webapckJsonp_${projectName}`,
              }
            //..
          }
    ```

  
3. 子应用需要注意的事项  
   
  - 不能在子应用模式中修改document.title
  - 慎用sessionStorage和localStorage,防止全局缓存污染,推荐redux-persist.
  - 后端服务地址不能再通过相对路径来取,需要在主应用通过接口的方式来请求,并下发给子应用,同步下发的还有baseHash,token,orgcode等等信息.
  - 由于主应用是通过fetch方式获取子应用所有文件,所以子应用需要支持跨域,即部署的时候需要增加静态文件跨域响应头, 开发模式中,需要在webpack.devserver的配置中增加:
      ```javascript
        moudles.export  = {
          //...
          headers: {
             "Access-Control-Allow-Origin": "*",
          }
          //...
        }
      ```
  - 文件命名,建议在开发过程中,对文件命名实行规范,方便在集成时进行调错.

#### 主应用端:

1. 主应用需要维护的是当前状态下的子应用列表,并且在子应用需要时提供可靠的全局数据.  
2. qiankun支持两种在主应用中注册子应用的方式,
   - 调用` loadMicroApp(app,config?) `方法来启动子应用,这种方式不能监听子应用路由方式,适合调试模式以及子应用页面较为单一简单的情况下使用.
   - 调用` registerMicroApps(apps) `方法来注册子应用,通过将微应用关联到一些 url 规则的方式,实现当浏览器 url 发生变化时,自动加载相应的微应用的功能.适用于 route-based 场景. 由于目前我们的项目均是基于前端router-base的方式实现,通过registerMicroApps这种方法来注册子应用是非常适合当前的开发模式.
   ```javascript
    //主应用的入口文件
    import { registerMicroApps, start } from "qiankun";


    //创建全局标识,由于子应用共享全局window对象,所以子应用判断是否运行在qiankun环境下由此配置
    window.__POWERED_BY_QIANKUN__ = true;

    //实际开发中,子应用注册列表可以通过后端动态返回,从而做到权限动态控制
    registerMicroApps([
      {
        name: "react app 3000",
        entry: "//localhost:3000",
        container: "#microContainer3000",
        activeRule: (location) =>  location.hash.indexOf("micro/3000") > -1,
        props: {
          baseHash: "/micro/3000",
        },
      },
      {
        name: "react app 4000",
        entry: "//localhost:4000",
        container: "#microContainer4000",
        activeRule: (location) => location.hash.indexOf("micro/4000") > -1,
        props: {
          baseHash: "/micro/4000",
        },
      },
    ]);

   ```  

#### 举例说明  
现在有A平台,部署地址为:http://www.a.com, 其html结构如下:

```html
  <html>
    <body>
        <div>A平台</div>
        <div id="content"></div>
    </body>
  <html>
```
有B应用,部署地址为:http://www.b.com, 其html结构如下:

```html
  <html>
    <body>
        <div id="app-root">B应用</div>
    </body>
  <html>
```

按照常规iframe集成方法将B应用集成到A平台内,A平台的最终产出的html节点:

```html
  <html>
    <body>
        <div>A平台</div>
        <div id="content">
            <iframe src="http://www.b.com">
        </div>
    </body>
  <html>
```

按照qiankun的集成方法将B应用集成到A平台内的:A平台的最终产出的html节点:

```html
  <html>
    <body>
        <div>A平台</div>
        <div id="content">
          <div id="qiankun-microapp-warpper">
            <div id="app-root">
              B应用
            </div>
          </div>
        </div>
    </body>
  <html>
```

同时qiankun还可以兼容iframe:

```html
  <html>
    <body>
        <div>A平台</div>
        <div id="content">
          <div id="qiankun-microapp-warpper">
            <div id="app-root">
              B应用
            </div>
          </div>
          <iframe src="www.baidu.com">
        </div>
    </body>
  <html>
```

