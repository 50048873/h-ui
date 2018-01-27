import HAlert from './src/main.vue'

const alert = {
  install: function (Vue) {
    Vue.component(HAlert.name, HAlert)
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(alert)
}
export default alert