const header=document.querySelector('.site-header');
let lastY=window.scrollY;
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(y>lastY && y>180) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
  lastY=y;
},{passive:true});
