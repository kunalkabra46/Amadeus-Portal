//tags #{"iataCode":"PR", "scriptType": "FRP", "versions":["pr_v3.7", "pr_v_new_ibe_3.5"],"hardcode":false}#
(function () {
  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  var newIbe = document.URL.match(/booking.philippineairlines/g)
  if (newIbe){
    s.src = 'https://www.securitytrfx.com/js/pr/pr_v_new_ibe_3.5.js'
  } else {
    s.src = 'https://www.securitytrfx.com/js/pr/pr_v3.7.js'
  }
  var x = document.getElementsByTagName('script')[0]
  x.parentNode.insertBefore(s, x)
})()