import FocusTrap from './FocusTrap'

let Vue = {}

let focusTrapPlugin = {
  install (_Vue) {
    Vue = _Vue
    Vue.component('focus-trap', FocusTrap)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('focus-trap', FocusTrap)
}
export default focusTrapPlugin
export {FocusTrap}
