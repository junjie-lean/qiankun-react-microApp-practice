### 什么是微前端架构,我觉得这篇[文章](http://www.ayqy.net/blog/micro-frontends/)可以很好的说明.  

微前端架构解决了什么问题?  
- 高开发粒度:把一个体量较大的项目分别拆分成多个子应用,同时分配给多个开发组同时进行开发.在我们公司有业务可以拆分给不同前端组来处理.甚至项目时间节点紧张的时候,可以把部分业务外包出去给其他公司来做,通过配置化,对项目做到增量更新,从而不用担心整个项目因为某个子应用未开发完,而影响整体项目进度.

- 独立部署:我们公司基于docker部署,每个子应用可以独立于每个docker image中,部署时只需要关注本身子应用,对整体项目及其他项目中的子应用不产生影响.

### 关于蚂蚁金服微前端框架[qiankun](https://qiankun.umijs.org/zh/guide)的介绍!

我觉得微前端框架qiankun解决了什么问题?

- 技术栈无关:主框架可以是vue,可以是react,子框架可以是vue,也可以是react.

- 数据共享:提供了方便的api来处理子应用与父框架之间的数据流向. 


先上代码: 
[实践demo地址](https://github.com/junjie-lean/qiankun-react-microApp-practice)

主要目录结构:  

- main
- 3000
- 4000

其中,main是用create-react-app创建,3000和4000是用自己搭的(react-hook脚手架)[https://github.com/junjie-lean/jf-web-app-hook]环境创建.