/* Fade-in observer */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target);}});
},{threshold:.15});
document.querySelectorAll('.fade').forEach(el=>obs.observe(el));

/* Smooth in-page scroll */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const tgt=document.querySelector(a.getAttribute('href'));
    if(tgt){e.preventDefault();tgt.scrollIntoView({behavior:'smooth'});}
  });
});

/* Mail-to handler on forms (if present) */
const form=document.querySelector('form[data-mail]');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const d=new FormData(form);
    const subj=`${d.get('topic')||'General'} inquiry — ${d.get('name')}`;
    const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nTopic: ${d.get('topic')}\n\n${d.get('msg')}`;
    window.location=`mailto:siglosdexterlloyd85@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  });
}
