var bao = document.getElementsByClassName('bao-box')[0];
var txt = document.getElementsByClassName('txt')[0];
var txt1 = document.getElementsByClassName('txt1')[0];
var bottom = document.getElementsByClassName('bottom')[0];
var font = document.getElementsByClassName('font')[0];
var fonts = document.getElementsByClassName('font2')[0];
 bao.addEventListener('touchstart',function () {
     txt.style.display = 'none';
     txt1.style.display = 'none';
     bao.style.animation = 'shake .7s linear';
     font.style.display = 'none';
     timer=setTimeout(function () {
         bao.style.top = '3rem';
         bao.style.backgroundPosition = 'center -1.28rem';
         bottom.style.display = 'block';
         fonts.style.display = 'block';
     },700);

 },false);
