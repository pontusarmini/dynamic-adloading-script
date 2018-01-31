/*! srcdoc-polyfill - v1.0.0 - 2017-01-29
* http://github.com/jugglinmike/srcdoc-polyfill/
* Copyright (c) 2017 Mike Pennisi; Licensed MIT */
!function(a,b){var c=window.srcDoc;"function"==typeof define&&define.amd?define(["exports"],function(d){b(d,c),a.srcDoc=d}):"object"==typeof exports?b(exports,c):(a.srcDoc={},b(a.srcDoc,c))}(this,function(a,b){var c,d,e,f=!!("srcdoc"in document.createElement("iframe")),g="Polyfill may not function in the presence of the `sandbox` attribute. Consider using the `force` option.",h=/\ballow-same-origin\b/,i=function(a,b){var c=a.getAttribute("sandbox");"string"!=typeof c||h.test(c)||(b&&b.force?a.removeAttribute("sandbox"):b&&b.force===!1||(e(g),a.setAttribute("data-srcdoc-polyfill",g)))},j={compliant:function(a,b,c){b&&(i(a,c),a.setAttribute("srcdoc",b))},legacy:function(a,b,c){var d;a&&a.getAttribute&&(b?a.setAttribute("srcdoc",b):b=a.getAttribute("srcdoc"),b&&(i(a,c),d="javascript: window.frameElement.getAttribute('srcdoc');",a.contentWindow&&(a.contentWindow.location=d),a.setAttribute("src",d)))}},k=a;if(e=window.console&&window.console.error?function(a){window.console.error("[srcdoc-polyfill] "+a)}:function(){},k.set=j.compliant,k.noConflict=function(){return window.srcDoc=b,k},!f)for(k.set=j.legacy,d=document.getElementsByTagName("iframe"),c=d.length;c--;)k.set(d[c])});

(function() {
  var parentTag = document.scripts[document.scripts.length - 1].parentNode,
      xmlhttp = new XMLHttpRequest,
      baseUrl = 'https://delivered-by-madington.com/client/',
      adString = parentTag.dataset.ad,
      path = adString.startsWith('/') ? adString.substring(1) : adString,
      adUrl = baseUrl + path;

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          loadFrame(xmlhttp.responseText)
      }
  };
  xmlhttp.open("GET", adUrl, true);
  xmlhttp.send();

  function loadFrame(html) {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", 0);
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("marginwidth", "0");
      iframe.setAttribute("marginheight", "0");
      iframe.setAttribute("allowtransparency", "1");
      iframe.setAttribute("src", "about:blank");
      iframe.setAttribute("srcdoc", html);
      iframe.setAttribute("width", parentTag.dataset.width);
      iframe.setAttribute("height", parentTag.dataset.height);

      if(parentTag){
        parentTag.appendChild(iframe);
        srcDoc.set(iframe, html); // shim old browsers
      }
  }
})();
