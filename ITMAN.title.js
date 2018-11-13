(function() {
  const defaults = {
    opacity: 1,
    url: "",
    className: "itman-title",
    text: "",
    top: "0.6rem",
    bottom: "",
    left: "0.6rem",
    right: "",
    fontSize: "1rem"
  };

  const extend = function() {
    let args, target, i, object, property;
    args = Array.prototype.slice.call(arguments);
    target = args.shift() || {};
    for (i in args) {
      object = args[i];
      for (property in object) {
        if (object.hasOwnProperty(property)) {
          if (typeof object[property] === "object") {
            target[property] = extend(target[property], object[property]);
          } else {
            target[property] = object[property];
          }
        }
      }
    }
    return target;
  };

  let div;

  // 使用 .registerPlugin 和 extend 把自訂內容綁進videojs
  // .registerPlugin() 第一個參數名稱會對應之後新建進videojs原形鏈上的方法名稱
  videojs.registerPlugin("ITMAN_title", function(settings) {
    let options, player, video, img, link;
    options = extend(defaults, settings);

    player = this.el();
    video = this.el().getElementsByTagName("video")[0];

    // 創建浮水印相關元素的 div 和添加 class 樣式
    if (!div) {
      div = document.createElement("div");
      options.className === "itman-title"
        ? (div.className = options.className)
        : (div.className = "itman-title " + options.className);
    } else {
      // 如果 div 已存在 就清空 div 內容
      div.innerHTML = "";
    }

    // 設定標題文字或添加 a 標籤
    if (options.text && options.url) {
      link = document.createElement("a");
      link.href = options.url;
      link.target = "_blank";
      link.textContent = options.text;
      link.style.fontSize = options.fontSize;
      div.appendChild(link);
      player.appendChild(div);
    } else if (options.text) {
      span = document.createElement("span");
      span.textContent = options.text;
      span.style.fontSize = options.fontSize;
      div.appendChild(span);
      player.appendChild(div);
    }

    // div & title 位置
    if (options.top && !options.bottom) div.style.top = options.top;
    if (options.left && !options.right) div.style.left = options.left;
    if (options.bottom) div.style.bottom = options.bottom;
    if (options.right) div.style.right = options.right;

    // 透明度
    div.style.opacity = options.opacity;
  });
})();
