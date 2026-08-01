
document.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
 const btn=document.querySelector(".menu-toggle"),menu=document.querySelector(".site-menu");
 if(btn&&menu){
  btn.addEventListener("click",()=>{const open=menu.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));});
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");btn.setAttribute("aria-expanded","false");}));
 }
 document.querySelectorAll("[data-email-form]").forEach(form=>{
  form.addEventListener("submit",e=>{
   e.preventDefault();
   const recipient=form.dataset.recipient;
   const status=form.querySelector(".form-status");
   if(!recipient||recipient.includes("YOUR_EMAIL")){
    if(status){status.textContent="Replace YOUR_EMAIL@example.com with the Foundation's official email address before publishing.";status.classList.add("show");}
    return;
   }
   const data=new FormData(form),lines=[];
   data.forEach((v,k)=>lines.push(`${k}: ${v}`));
   const title=document.title.split("|")[0].trim();
   window.location.href=`mailto:${recipient}?subject=${encodeURIComponent(title+" Website Enquiry")}&body=${encodeURIComponent(lines.join("\n\n"))}`;
  });
 });
});
