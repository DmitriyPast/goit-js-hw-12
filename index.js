import{a as b,S as w,i as n}from"./assets/vendor-CnmvSTPy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function u(o,e=1){return b.get("https://pixabay.com/api/",{params:{key:"50866310-f6e992bbe1b9ca34c705df120",q:o,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const S=new w(".gallery a",{captionsData:"alt"}),h=document.querySelector("ul.gallery");function m(o){d(),h.insertAdjacentHTML("beforeend",o.map(({webformatURL:e,largeImageURL:a,tags:s,likes:t,views:r,comments:i,downloads:L})=>`<li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${e}"
        data-source="${a}"
        alt="${s}"
      />
    </a>
      <ul class="image-info">
        <li><h4>Likes</h4><p>${t}</p></li>
        <li><h4>Views</h4><p>${r}</p></li>
        <li><h4>Comments</h4><p>${i}</p></li>
        <li><h4>Downloads</h4><p>${L}</p></li>
      </ul>
  </li>`).join("")),S.refresh()}const v=()=>h.innerHTML="",g=document.querySelector("span.loader"),f=()=>g.classList.remove("hidden"),d=()=>g.classList.add("hidden"),p=document.querySelector("button.load-more"),y=()=>p.classList.remove("hidden"),q=()=>p.classList.add("hidden"),M=document.querySelector("form.form");let l=1,c="";M.addEventListener("submit",async o=>{if(o.preventDefault(),l=1,o.target.elements[0].value.trim()){c=o.target.elements[0].value.trim(),v(),f();try{const e=await u(c,l++),{data:{hits:a,total:s,totalHits:t}}=e;if(Math.ceil(s/15)>=l?y():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),m(e.data.hits),!e.data.total)throw new Error("Sorry, there are no images matching your search query. Please try again!")}catch(e){console.log(e),n.error({message:String(e),position:"topRight"})}d()}else n.error({message:"red",position:"topRight"})});const $=document.querySelector("button.load-more");$.addEventListener("click",async()=>{if(q(),f(),c)try{const e=await u(c,l++),{data:{hits:a,total:s,totalHits:t}}=e;if(Math.ceil(s/15)>=l?y():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),m(e.data.hits),!e.data.total)throw new Error("Sorry, there are no images matching your search query. Please try again!")}catch(e){console.log(e),n.error({message:String(e),position:"topRight"})}d();const o=document.querySelector("li.gallery-item");window.scrollBy(0,o.getBoundingClientRect().height*2)});
//# sourceMappingURL=index.js.map
