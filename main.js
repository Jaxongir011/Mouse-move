let circle=document.querySelector('.circle');
window.addEventListener('mousemove',function(mp){
   circle.style.transform=`translate(${mp.clientX}px,${mp.clientY}px)`
})