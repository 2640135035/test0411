function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      var flag = true;
      for (var attr in json) {
        var iCur = 0;
        if (attr == 'opacity') {
          iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
          iCur = parseInt(getStyle(obj, attr));
        }
        var iSpeed = (parseInt(json[attr]) - iCur) / 10;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur != json[attr]) {
          flag = false;
          if (attr == "opacity") {
            obj.style.opacity = (iCur + iSpeed) / 100;
            obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
          } else {
            obj.style[attr] = (iCur + iSpeed) + "px";
          }
        }
      }

      if (flag) {
        clearInterval(obj.timer);
        fn && fn()
      }

    }, 10)
  }

  function getStyle(obj, attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    } else {
      return getComputedStyle(obj, null)[attr];
    }
  }
  new F().init()