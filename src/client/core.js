import 'vite/modulepreload-polyfill'
window.__vite_plugin_react_preamble_installed__ = true;

console.log('Loading plugins...', 3);


function load(src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function () {
  }

  script.type = "module";
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  head.appendChild(script)
}

load("http://127.0.0.1:3000/@vite/client")
load("http://127.0.0.1:3000/src/client/main.tsx")
load("http://127.0.0.1:3000/src/client/client.ts")

export default {}