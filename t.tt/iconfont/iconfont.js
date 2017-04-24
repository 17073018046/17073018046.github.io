;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gerenzhongxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M932.534857 891.757714c0 0.036571 0 0.073143 0 0.109714 0 22.491429-17.664 40.704-39.424 40.704L130.852571 932.571429c-21.76 0-39.424-18.212571-39.424-40.704 0-0.036571 0-0.073143 0-0.109714L91.428571 891.757714c0 0 0-148.333714 104.96-202.276571 66.450286-34.121143 40.850286-6.436571 122.404571-41.362286 81.554286-34.852571 100.864-47.030857 100.864-47.030857l0.768-80.384c0 0-30.537143-24.137143-40.045714-99.730286-19.126857 5.705143-25.417143-23.186286-26.550857-41.545143C352.841143 361.691429 342.820571 306.249143 366.116571 311.259429c-4.754286-37.010286-8.192-70.4-6.509714-88.100571 5.851429-62.098286 63.780571-126.976 153.014857-131.730286 104.96 4.717714 146.541714 69.558857 152.393143 131.657143 1.718857 17.700571-2.048 51.126857-6.802286 88.064 23.332571-4.937143 13.165714 50.432 12.032 68.169143-1.024 18.395429-7.497143 47.140571-26.550857 41.472-9.545143 75.629714-40.082286 99.547429-40.082286 99.547429l0.731429 79.945143c0 0 19.309714 11.373714 100.864 46.262857 81.554286 34.925714 55.990857 8.813714 122.404571 42.934857C932.571429 743.460571 932.571429 891.757714 932.534857 891.757714L932.534857 891.757714z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rectangle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 65.710584c244.559948 0 442.882829 199.807698 442.882829 446.289416 0 246.480694-198.322881 446.289416-442.882829 446.289416-244.560972 0-442.881806-199.808722-442.881806-446.289416C69.116659 265.518283 267.438517 65.710584 511.999488 65.710584z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gou" viewBox="0 0 1366 1024">' +
    '' +
    '<path d="M1209.571556 29.809778 472.177778 793.372444 163.726222 475.249778c-37.660444-39.822222-97.735111-39.822222-135.509333 0-37.546667 39.936-37.546667 103.424 0 135.168l368.753778 381.724444C419.498667 1008.184889 442.140444 1024 464.554667 1024c22.641778 0 52.792889-7.964444 67.811556-31.744l805.205333-827.164444c37.546667-39.822222 37.546667-103.424 0-135.281778C1307.306667-9.898667 1247.345778-9.898667 1209.571556 29.809778L1209.571556 29.809778zM1209.571556 29.809778"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cart-on" viewBox="0 0 1155 1024">' +
    '' +
    '<path d="M840.205128 1024c-49.887179 0-91.897436-42.010256-91.897436-91.897436S790.317949 840.205128 840.205128 840.205128s91.897436 42.010256 91.897436 91.897436S890.092308 1024 840.205128 1024z m0-131.282051c-21.005128 0-39.384615 18.379487-39.384615 39.384615S819.2 971.487179 840.205128 971.487179s39.384615-18.379487 39.384616-39.384615S861.210256 892.717949 840.205128 892.717949zM446.358974 1024c-49.887179 0-91.897436-42.010256-91.897436-91.897436S396.471795 840.205128 446.358974 840.205128s91.897436 42.010256 91.897436 91.897436S496.246154 1024 446.358974 1024z m0-131.282051c-21.005128 0-39.384615 18.379487-39.384615 39.384615S425.353846 971.487179 446.358974 971.487179s39.384615-18.379487 39.384616-39.384615S467.364103 892.717949 446.358974 892.717949zM1150.030769 275.692308c-2.625641-7.876923-13.128205-13.128205-21.005128-13.128205H228.430769L128.65641 15.753846C126.030769 5.251282 115.528205 0 105.025641 0H26.25641C10.502564 0 0 10.502564 0 26.25641s10.502564 26.25641 26.25641 26.256411h60.389744L183.794872 299.323077l183.794872 472.615385c5.251282 10.502564 13.128205 15.753846 23.630769 15.753846h525.128205c10.502564 0 18.379487-5.251282 23.630769-15.753846l210.051282-472.615385c5.251282-7.876923 5.251282-18.379487 0-23.630769zM840.205128 656.410256H472.615385c-15.753846 0-26.25641-10.502564-26.256411-26.25641s10.502564-26.25641 26.256411-26.25641h367.589743c15.753846 0 26.25641 10.502564 26.25641 26.25641s-10.502564 26.25641-26.25641 26.25641z m105.025641-157.538461H420.102564c-15.753846 0-26.25641-10.502564-26.25641-26.25641s10.502564-26.25641 26.25641-26.256411h525.128205c15.753846 0 26.25641 10.502564 26.25641 26.256411s-10.502564 26.25641-26.25641 26.25641z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)