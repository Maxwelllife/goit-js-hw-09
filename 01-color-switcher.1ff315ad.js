!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),bodyStyle:document.body.style};t.start.addEventListener("click",(function(){timeoutId=setInterval((function(){t.bodyStyle.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(timeoutId),t.start.disabled=!1,t.stop.disabled=!0})),t.stop.disabled=!0}();
//# sourceMappingURL=01-color-switcher.1ff315ad.js.map
