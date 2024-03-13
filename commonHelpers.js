import{S as b,a as L,i as c}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const w=new b(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");const p=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{P()});function C({webformatURL:r,largeImageURL:e,tags:s,likes:n,views:t,comments:o,downloads:i}){return` 
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${r}" alt="${s}" />
      <div class="wrap">
        <p><b>Likes:</b> </br>${n}</p>
        <p><b>Views:</b> </br>${t}</p>
        <p><b>Coments:</b> </br>${o}</p>
        <p><b>Downloads:</b> </br>${i}</p>
      </div>
    </a>
  </li>`}function S(r){return r.map(C).join("")}function m(r,e){r.insertAdjacentHTML("beforeend",S(e)),w.refresh()}function P(){p&&(p.style.display="none")}const $="https://pixabay.com/api/",v="42803538-255c2e80da4c06c2048b9f703";let q=15;async function y(r,e){const s={key:v,q:r,page:e,per_page:q,image_type:"photo",orientation:"horizontal",safesearch:!0},n=await L.get(`${$}/`,{params:s});return n.data.totalHits===0?{hits:[]}:n.data}const k=document.querySelector(".search-form"),a=document.querySelector(".loader"),u=document.querySelector(".gallery"),f=document.querySelector(".load-more-btn");g();let l,d=1;a.style.display="none";k.addEventListener("submit",async r=>{if(r.preventDefault(),u.innerHTML="",d=1,l=r.target.elements.search.value.trim(),l===""){c.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}a.style.display="block";try{const e=await y(l,d);if(e.hits.length===0)return g(),c.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:`No results found for "${l}". Please try another search.`,position:"topRight"});m(u,e.hits),M()}catch(e){console.log(e),c.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Something went wrong.Please try again later.",position:"topRight"})}finally{h()}});f.addEventListener("click",async r=>{E(),d+=1;try{const e=await y(l,d);if(e.hits.length===0){g(),c.info({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#2980b9",message:"You reached the end of results.",position:"topRight"});return}m(u,e.hits),window.scrollBy({top:2*document.querySelector(".gallery-item").getBoundingClientRect().height,behavior:"smooth"})}catch(e){console.log(e),c.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h()}});function E(){a&&(a.style.display="block")}function h(){a&&(a.style.display="none")}function g(){f&&(f.style.display="none")}function M(){f&&(f.style.display="block")}
//# sourceMappingURL=commonHelpers.js.map
