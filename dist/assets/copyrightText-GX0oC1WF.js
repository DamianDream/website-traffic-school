const o=()=>{const t=document.querySelector("[copyright-date]");if(!t){console.error("Not found copyright year Node",t);return}const e=new Date(Date.now()).getFullYear();t.textContent=e};o();
