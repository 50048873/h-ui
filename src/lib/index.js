import HAlert from './progress/index.js'
import HProgress from './progress/index.js'

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
export default {
	alert,
	progress
}