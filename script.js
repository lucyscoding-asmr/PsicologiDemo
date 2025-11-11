// fade-in
const fades=document.querySelectorAll('.fade');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
  });
},{threshold:.2});
fades.forEach(f=>obs.observe(f));

// mobile nav
const nav=document.querySelector('.nav');
const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelectorAll('.nav-menu a');
if(nav && navToggle){
  navToggle.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded',isOpen);
  });
  navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
      if(nav.classList.contains('open')){
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
      }
    });
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.parentElement;
    item.classList.toggle('open');
    const p=item.querySelector('div');
    if(item.classList.contains('open')) p.style.maxHeight=p.scrollHeight+'px';
    else p.style.maxHeight=0;
  });
});
