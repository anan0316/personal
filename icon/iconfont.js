;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-next" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M720.434176 493.97248 692.840448 466.369536 692.836352 466.373632 329.438208 102.967296 301.826048 130.57024 665.237504 493.97248 302.9248 856.285184 330.518528 883.888128 692.836352 521.570304 692.840448 521.575424Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M528.475741 99.654674c-230.720755 0-417.729963 161.638377-417.729963 361.024473 0 97.81477 45.175899 186.374758 118.262474 251.344468l-32.43676 176.424128 223.528959-79.472006c34.641985 8.036024 70.811766 12.726859 108.37529 12.726859 230.734058 0 417.742243-161.606655 417.742243-361.021403C946.216961 261.293051 759.210823 99.654674 528.475741 99.654674zM528.475741 785.604448c-12.836353 0-25.484418-0.557702-37.974893-1.683339-22.464641-1.945305-44.162826-5.836939-65.272609-11.022031l-58.373479 20.751626 0 0-126.114303 44.889373 26.596751-144.420227c-9.426697-7.846712-18.180058-16.166191-26.644847-24.758893-54.954613-56.471153-88.194668-129.137149-88.194668-208.682833 0-179.456185 168.326706-324.905858 375.977024-324.905858 207.66362 0 375.990327 145.449673 375.990327 324.905858C904.466068 640.133286 736.140385 785.604448 528.475741 785.604448z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-next1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M300.8 947.2c-3.84 0-6.4-1.28-8.96-3.84-5.12-5.12-5.12-12.8 0-17.92L705.28 512 291.84 98.56c-5.12-5.12-5.12-12.8 0-17.92s12.8-5.12 17.92 0l422.4 422.4c5.12 5.12 5.12 12.8 0 17.92l-422.4 422.4C307.2 945.92 304.64 947.2 300.8 947.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-birdxiaoniao" viewBox="0 0 1027 1024">' +
    '' +
    '<path d="M1025.1264 98.7136C992.1536 145.5104 957.5424 181.9648 921.1904 207.872l0 26.0096c0 152.4736-54.1696 290.2016-162.4064 413.2864C650.4448 770.2528 505.344 831.6928 323.3792 831.6928c-117.8624 0-225.28-31.232-322.2528-93.5936 10.3424 1.7408 26.8288 2.56 49.3568 2.56 97.0752 0 184.5248-30.3104 262.4512-90.9312-45.056-1.6384-85.8112-15.9744-122.1632-42.9056C154.4192 579.9936 129.3312 545.792 115.5072 504.2176c17.3056 3.4816 30.3104 5.2224 39.0144 5.2224 19.0464 0 38.0928-2.56 57.1392-7.7824C163.1232 492.9536 122.88 469.0944 90.8288 430.08c-32.0512-39.0144-48.128-83.5584-48.128-133.8368L42.7008 291.1232C77.312 310.1696 108.544 319.6928 136.2944 319.6928 75.6736 278.1184 45.2608 219.2384 45.2608 142.9504c0-39.8336 8.704-74.4448 26.0096-103.936 112.64 136.9088 257.3312 209.6128 434.0736 218.3168C501.8624 236.544 500.1216 220.8768 500.1216 210.5344c0-58.88 20.3776-108.7488 61.0304-149.4016C601.9072 20.3776 651.776 0 710.656 0c62.3616 0 113.4592 21.7088 153.2928 64.9216C912.4864 54.5792 956.7232 38.0928 996.5568 15.5648 980.8896 65.8432 950.5792 103.936 905.5232 129.9456 945.4592 124.7232 985.2928 114.3808 1025.1264 98.7136z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tongji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M156.655899 835.889715c-13.780865 0-24.986067-11.205203-24.986067-24.986067L131.669832 210.334449c0-13.787004 11.205203-24.997324 24.986067-24.997324 13.784958 0 24.993231 11.209296 24.993231 24.997324l0 575.581084L867.389126 785.915533c13.780865 0 24.981974 11.208273 24.981974 24.989137 0 13.780865-11.20111 24.986067-24.981974 24.986067L156.655899 835.890738 156.655899 835.889715zM237.592256 700.905394c-5.418406 0-10.588149-1.723248-14.948457-4.980431-11.035334-8.264221-13.294794-23.955598-5.03876-34.986839l163.902954-218.975247c4.773723-6.365988 12.068873-10.019191 20.030196-10.019191 4.984524 0 9.80532 1.469468 13.936407 4.259l147.394978 99.254561 259.725346-206.900234c4.469801-3.566222 9.845229-5.448082 15.548114-5.448082 7.661494 0 14.788821 3.431146 19.558451 9.419534 4.160763 5.213745 6.03239 11.742439 5.29254 18.380626-0.750083 6.627954-4.040013 12.57234-9.259898 16.737196L579.677379 585.968665c-4.393054 3.511987-9.920954 5.441942-15.569604 5.441942-4.991688 0-9.819646-1.469468-13.957897-4.254907l-142.867872-96.211249-149.658532 199.938682C252.856915 697.252191 245.554602 700.905394 237.592256 700.905394L237.592256 700.905394zM237.592256 700.905394"  ></path>' +
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