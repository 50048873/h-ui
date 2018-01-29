import Vue from 'vue'
import HAlert from './alert/src/main.vue'
import HProgress from './progress/src/main.vue'

const alert = {
  install: function (Vue) {
    Vue.component(HAlert.name, HAlert)
  }
};

const progress = {
  install: function (Vue) {
    Vue.component(HProgress.name, HProgress)
  }
};

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(alert)
  window.Vue.use(progress)
}

const numToWord = function(num) { 
	return num
}

Vue.prototype.$numToWord = numToWord;

export {alert, progress, numToWord}