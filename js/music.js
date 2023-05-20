var audio = document.getElementById("bg-music");
      var btnControl = document.getElementById("music-control");

      // 根据音乐状态更新控制按钮文字
      function updateButton() {
        if (audio.paused) {
          btnControl.innerHTML = "开启BGM";
        } else {
          btnControl.innerHTML = "关闭BGM";
        }
      }

      // 实现音乐播放/暂停控制
      function playPause() {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
        updateButton(); // 更新按钮状态
      }

      // 在页面加载后，为按钮添加点击事件
      window.addEventListener("load", function() {
        btnControl.addEventListener("click", playPause);
        updateButton(); // 初始化按钮状态
      });