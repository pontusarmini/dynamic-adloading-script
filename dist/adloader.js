!function(t,e){var n=window.srcDoc;"function"==typeof define&&define.amd?define(["exports"],function(o){e(o,n),t.srcDoc=o}):"object"==typeof exports?e(exports,n):(t.srcDoc={},e(t.srcDoc,n))}(this,function(t,e){var n,o,r,i=!!("srcdoc"in document.createElement("iframe")),c="Polyfill may not function in the presence of the `sandbox` attribute. Consider using the `force` option.",s=/\ballow-same-origin\b/,a=function(t,e){var n=t.getAttribute("sandbox");"string"!=typeof n||s.test(n)||(e&&e.force?t.removeAttribute("sandbox"):e&&!1===e.force||(r(c),t.setAttribute("data-srcdoc-polyfill",c)))},d={compliant:function(t,e,n){e&&(a(t,n),t.setAttribute("srcdoc",e))},legacy:function(t,e,n){var o;t&&t.getAttribute&&(e?t.setAttribute("srcdoc",e):e=t.getAttribute("srcdoc"),e&&(a(t,n),o="javascript: window.frameElement.getAttribute('srcdoc');",t.contentWindow&&(t.contentWindow.location=o),t.setAttribute("src",o)))}},u=t;if(r=window.console&&window.console.error?function(t){window.console.error("[srcdoc-polyfill] "+t)}:function(){},u.set=d.compliant,u.noConflict=function(){return window.srcDoc=e,u},!i)for(u.set=d.legacy,o=document.getElementsByTagName("iframe"),n=o.length;n--;)u.set(o[n])}),function(){var t=document.scripts[document.scripts.length-1].parentNode,e=new XMLHttpRequest,n=t.dataset.ad,o="https://delivered-by-madington.com/client/"+(n.startsWith("/")?n.substring(1):n);e.onreadystatechange=function(){4==e.readyState&&200==e.status&&function(e){var n=document.createElement("iframe");n.setAttribute("frameborder",0),n.setAttribute("scrolling","no"),n.setAttribute("marginwidth","0"),n.setAttribute("marginheight","0"),n.setAttribute("allowtransparency","1"),n.setAttribute("src","about:blank"),n.setAttribute("srcdoc",e),n.setAttribute("width",t.dataset.width),n.setAttribute("height",t.dataset.height),t&&(t.appendChild(n),srcDoc.set(n,e))}(e.responseText)},e.open("GET",o,!0),e.send()}();