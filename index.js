import{a as g,S as y,i as d}from"./assets/vendor-CnmvSTPy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function L(o){return g.get("https://pixabay.com/api/",{params:{key:"50866310-f6e992bbe1b9ca34c705df120",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const p=document.querySelector("ul.gallery"),f=document.querySelector("span.loader");function $(o){m(),p.innerHTML=o.map(({webformatURL:a,largeImageURL:s,tags:e,preview:t=a,original:i=s,description:h=e,likes:n,views:l,comments:c,downloads:u})=>`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${t}"
        data-source="${i}"
        alt="${h}"
      />
    </a>
      <!--<div class="image-info">
      <span>likes: ${n}</span>
      <span>vievs: ${l}</span>
      <span>comments: ${c}</span>
      <span">downloads: ${u}</span>
      </div>-->
      <ul class="image-info">
        <li><h4>Likes</h4><p>${n}</p></li>
        <li><h4>Views</h4><p>${l}</p></li>
        <li><h4>Comments</h4><p>${c}</p></li>
        <li><h4>Downloads</h4><p>${u}</p></li>
      </ul>
  </li>`).join(""),new y(".gallery a",{}).refresh()}function m(){p.innerHTML=""}function b(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}const S=document.querySelector("form.form");S.addEventListener("submit",o=>{o.preventDefault(),o.target.elements[0].value?(m(),b(),L(o.target.elements[0].value).then(r=>{if(v(),$(r.data.hits),!r.data.total)throw new Error("Sorry, there are no images matching your search query. Please try again!")}).catch(r=>{d.error({message:String(r),position:"topRight"})})):d.error({message:"red",position:"topRight"})});
//# sourceMappingURL=index.js.map
