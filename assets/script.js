/* fade-in on scroll */
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target);}}),{threshold:.15});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));

/* smooth in-page links */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
  });
});

/* mailto handler */
const f=document.querySelector('.contact');
if(f){
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const d=new FormData(f);
    const s=`${d.get('topic')||'General'} inquiry — ${d.get('name')}`;
    const b=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nTopic: ${d.get('topic')}\n\n${d.get('msg')}`;
    window.location=`mailto:siglosdexterlloyd85@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
  });
}
