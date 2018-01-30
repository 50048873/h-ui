import HDetail1 from './main.vue'

const _HDetail1 = {
  install: function (Vue) {
    Vue.component(HDetail1.name, HDetail1)
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(_HDetail1)
}
export default _HDetail1