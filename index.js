import{a as w,S as v,i as n}from"./assets/vendor-SA7bT8CU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const b="48351408-02e53158b06e38a55e8232091",S="https://pixabay.com/api/";async function u(s,r){return(await w.get(S,{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new v(".gallery a");function y(s){const r=s.map(e=>`
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
    `).join("");f.insertAdjacentHTML("beforeend",r),q.refresh()}function M(){f.innerHTML=""}function p(){h.classList.remove("hidden")}function c(){h.classList.add("hidden")}function B(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}const $=document.querySelector(".form"),P=document.querySelector(".load-more");let a=1,L="",l=0;$.addEventListener("submit",O);P.addEventListener("click",x);async function O(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a search word!"});return}L=r,a=1,M(),g(),p();try{const e=await u(r,a);if(e.hits.length===0){c(),n.error({message:"No images found"});return}y(e.hits),l=Math.ceil(e.totalHits/15),a<l?B():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong"})}finally{c()}}async function x(){a+=1,p();try{const s=await u(L,a);y(s.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),a>=l&&(g(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Something went wrong"})}finally{c()}}
//# sourceMappingURL=index.js.map
