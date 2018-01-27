import HProgress from './src/main.vue'

const progress = {
  install: function (Vue) {
    Vue.component(HProgress.name, HProgress)
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(progress)
}
export default progress