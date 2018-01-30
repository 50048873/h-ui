import Vue from 'vue'
import HDetail1 from './detail1/main.vue'
import HProgress from './progress/src/main.vue'

const _HDetail1 = {
  install: function (Vue) {
    Vue.component(HDetail1.name, HDetail1)
  }
};

const progress = {
  install: function (Vue) {
    Vue.component(HProgress.name, HProgress)
  }
};

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(_HDetail1)
  window.Vue.use(progress)
}

const numToWord = function(num) { 
	return num
}

Vue.prototype.$numToWord = numToWord;

export {_HDetail1, progress, numToWord}