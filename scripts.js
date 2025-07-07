/* --------  fade-in on scroll  -------- */
const faders=[...document.querySelectorAll(".fade")];
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target);}});
},{threshold:.15});
faders.forEach(el=>io.observe(el));

/* --------  smooth section links  -------- */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const tgt=document.querySelector(a.getAttribute("href"));
    if(tgt){ e.preventDefault(); tgt.scrollIntoView({behavior:"smooth",block:"start"});}
  });
});

/* --------  contact form mailto helper  -------- */
const form=document.querySelector(".contact");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const fd=new FormData(form);
    const subj=`${fd.get("topic")||"General"} inquiry from ${fd.get("name")}`;
    const body=`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nTopic: ${fd.get("topic")}\n\n${fd.get("msg")}`;
    window.location=`mailto:siglosdexterlloyd85@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  });
}
