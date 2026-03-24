import{a as v,S as b,i as n}from"./assets/vendor-SA7bT8CU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const S="48351408-02e53158b06e38a55e8232091",M="https://pixabay.com/api/";async function u(o,r){return(await v.get(M,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new b(".gallery a");function y(o){const r=o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p>Likes ${e.likes}</p>
          <p>Views ${e.views}</p>
          <p>Comments ${e.comments}</p>
          <p>Downloads ${e.downloads}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),q.refresh()}function B(){f.innerHTML=""}function p(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}function g(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}const $=document.querySelector(".form"),P=document.querySelector(".load-more");let a=1,w="",i=0;$.addEventListener("submit",O);P.addEventListener("click",x);async function O(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a search word!"});return}w=r,a=1,B(),L(),p();try{const e=await u(r,a);if(e.hits.length===0){l(),n.error({message:"No images found"});return}y(e.hits),i=Math.ceil(e.totalHits/15),a<i?g():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong"})}finally{l()}}async function x(){L(),p(),a+=1;try{const o=await u(w,a);y(o.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),i=Math.ceil(o.totalHits/15),a<i?g():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong"})}finally{l()}}
//# sourceMappingURL=index.js.map
