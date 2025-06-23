import{a as g,S as y,i as n}from"./assets/vendor-CnmvSTPy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function L(e,r=1){return await g.get("https://pixabay.com/api/",{params:{key:"50866310-f6e992bbe1b9ca34c705df120",q:e,page:r,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const b=new y(".gallery a",{captionsData:"alt"}),c=document.querySelector("ul.gallery");function w(e){u(),c.insertAdjacentHTML("beforeend",e.map(({webformatURL:r,largeImageURL:s,tags:a,likes:t,views:o,comments:i,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img
        class="gallery-image"
        src="${r}"
        data-source="${s}"
        alt="${a}"
      />
    </a>
      <ul class="image-info">
        <li><h4>Likes</h4><p>${t}</p></li>
        <li><h4>Views</h4><p>${o}</p></li>
        <li><h4>Comments</h4><p>${i}</p></li>
        <li><h4>Downloads</h4><p>${f}</p></li>
      </ul>
  </li>`).join("")),b.refresh()}const v=()=>c.innerHTML="",d=document.querySelector("span.loader"),S=()=>d.classList.remove("hidden"),u=()=>d.classList.add("hidden"),m=document.querySelector("button.load-more"),q=()=>m.classList.remove("hidden"),M=()=>m.classList.add("hidden"),$=document.querySelector("form.form");let l=1,h="";$.addEventListener("submit",e=>{e.preventDefault(),l=1,e.target.elements[0].value.trim()?(h=e.target.elements[0].value.trim(),v(),p()):n.error({message:"red",position:"topRight"})});const B=document.querySelector("button.load-more");B.addEventListener("click",()=>{M(),p().then(()=>{const e=document.querySelector("li.gallery-item");window.scrollBy({top:e.getBoundingClientRect().height*2,behavior:"smooth"})})});async function p(){S();try{const e=await L(h,l++),{data:{hits:r,total:s,totalHits:a}}=e;if(Math.ceil(s/15)>=l?q():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),w(e.data.hits),!e.data.total)throw new Error("Sorry, there are no images matching your search query. Please try again!")}catch(e){console.log(e),n.error({message:String(e),position:"topRight"})}u()}
//# sourceMappingURL=index.js.map
