export default {
  debounce: function(fn, ms = 1000) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, ms)
    }
  }
}