import{S as C,a as w,i as s}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const L=new C(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");const y=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{v()});function S({webformatURL:o,largeImageURL:e,tags:n,likes:a,views:t,comments:r,downloads:d}){return` 
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${o}" alt="${n}" />
      <div class="wrap">
        <p><b>Likes:</b> </br>${a}</p>
        <p><b>Views:</b> </br>${t}</p>
        <p><b>Coments:</b> </br>${r}</p>
        <p><b>Downloads:</b> </br>${d}</p>
      </div>
    </a>
  </li>`}function P(o){return o.map(S).join("")}function p(o,e){o.insertAdjacentHTML("beforeend",P(e)),L.refresh()}function v(){y&&(y.style.display="none")}const $="https://pixabay.com/api/",k="42803538-255c2e80da4c06c2048b9f703";let q=15;async function m(o,e){const n={key:k,q:o,page:e,per_page:q,image_type:"photo",orientation:"horizontal",safesearch:!0},a=await w.get(`${$}/`,{params:n});return a.data.totalHits===0?{hits:[]}:a.data}const E=document.querySelector(".search-form"),i=document.querySelector(".loader"),g=document.querySelector(".gallery"),c=document.querySelector(".load-more-btn");u();let l,f=1;i.style.display="none";E.addEventListener("submit",async o=>{if(o.preventDefault(),g.innerHTML="",f=1,l=o.target.elements.search.value.trim(),l===""){s.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}i.style.display="block";try{const e=await m(l,f);if(e.hits.length===0)return u(),s.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:`No results found for "${l}". Please try another search.`,position:"topRight"});p(g,e.hits),R()}catch(e){console.log(e),s.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{i.style.display="none"}});c.addEventListener("click",async o=>{h(),f+=1;try{const e=await m(l,f);if(e.hits.length===0){u(),s.info({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#2980b9",message:"You reached the end of results.",position:"topRight"});return}p(g,e.hits)}catch(e){console.log(e),s.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}});function h(){i&&(i.style.display="none")}function b(){i&&(i.style.display="none")}function u(){c&&(c.style.display="none")}function R(){c&&(c.style.display="block")}c.addEventListener("click",async o=>{h(),f+=1;try{const e=await m(l,f);if(e.hits.length===0)return u(),s.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"No more images to load.",position:"topRight"});p(g,e.hits);const n=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}catch(e){console.log(e),s.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=commonHelpers.js.map
