// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

const withoutQiankunProps = { baseHash: "", isPoweredByQianKun: false };

const render = (props = withoutQiankunProps) => {
  var app = new Vue({
    el: "#microAppContainer4000",
    components: { App },
    data: { token: "未设置" },
    template: `
      <div>
        <App v-bind:primaryToken="token"/>
      </div>
    `
  });
  props.onGlobalStateChange &&
    props.onGlobalStateChange(state => {
      app.token = state.token;
    }, true);
  return app;
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  //   console.log("作为子应用初始化的时候调用一次,后续不再调用!");
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  //...
}
