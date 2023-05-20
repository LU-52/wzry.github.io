window.onload = function(){
    var vidio=document.getElementById("vidio"); //获取video
  document.body.addEventListener('mousedowmo', function(){
    vidio.muted = false;
  }, false);  //点击事件，点击页面即可开启声音
}