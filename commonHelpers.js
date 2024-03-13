import{S as b,a as L,i as u}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const w=new b(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelector(".gallery");function S({webformatURL:r,largeImageURL:t,tags:i,likes:s,views:e,comments:o,downloads:n}){return` 
  <li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img class="gallery-image" src="${r}" alt="${i}" />
      <div class="wrap">
        <p><b>Likes:</b> </br>${s}</p>
        <p><b>Views:</b> </br>${e}</p>
        <p><b>Coments:</b> </br>${o}</p>
        <p><b>Downloads:</b> </br>${n}</p>
      </div>
    </a>
  </li>`}function v(r){return r.map(S).join("")}function p(r,t){r.insertAdjacentHTML("beforeend",v(t)),w.refresh()}const E="https://pixabay.com/api/",P="42803538-255c2e80da4c06c2048b9f703";let $=1,q=15;async function m(r){const t={key:P,q:r,_page:$,_limit:q,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await L.get(`${E}/`,{params:t})).data}const C=document.querySelector(".search-form"),c=document.querySelector(".loader"),f=document.querySelector(".gallery"),a=document.querySelector(".load-more-btn");h();let l,d=1;C.addEventListener("submit",async r=>{if(r.preventDefault(),f.innerHTML="",d=1,l=r.target.elements.search.value.trim(),l===""){u.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",message:"Please enter a search query",position:"topRight"});return}g();try{const t=await m(l,d);if(t.hits.length===0)return h(),u.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});p(f,t.hits),M()}catch(t){console.log(t)}finally{y()}r.target.reset()});function g(){c&&(c.style.display="block")}function y(){c&&(c.style.display="none")}function h(){a&&(a.style.display="none")}function M(){a&&(a.style.display="block")}a.addEventListener("click",async r=>{g(),d+=1;const t=await m(l);p(f,t.hits),y()});function B(){window.scrollBy({top:window.innerHeight,behavior:"smooth"})}a.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map
