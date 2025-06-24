import{a as y,S as g,i as l}from"./assets/vendor-CnmvSTPy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function L(t,o=1){return(await y.get("https://pixabay.com/api/",{params:{key:"50866310-f6e992bbe1b9ca34c705df120",q:t,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const b=new g(".gallery a",{captionsData:"alt"}),u=document.querySelector("ul.gallery");function w(t){u.insertAdjacentHTML("beforeend",t.map(({webformatURL:o,largeImageURL:a,tags:i,likes:e,views:r,comments:s,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${o}"
        data-source="${a}"
        alt="${i}"
      />
    </a>
      <ul class="image-info">
        <li><h4>Likes</h4><p>${e}</p></li>
        <li><h4>Views</h4><p>${r}</p></li>
        <li><h4>Comments</h4><p>${s}</p></li>
        <li><h4>Downloads</h4><p>${f}</p></li>
      </ul>
  </li>`).join("")),b.refresh()}const S=()=>u.innerHTML="",h=document.querySelector("span.loader"),q=()=>h.classList.remove("hidden"),v=()=>h.classList.add("hidden"),m=document.querySelector("button.load-more"),M=()=>m.classList.remove("hidden"),$=()=>m.classList.add("hidden"),P=document.querySelector("form.form");let n=1,c="",d=0;P.addEventListener("submit",t=>{if(t.preventDefault(),n=1,d=0,c=t.target.elements[0].value.trim(),c)S(),p();else return l.error({message:"Enter search query.",position:"topRight"})});const B=document.querySelector("button.load-more");B.addEventListener("click",()=>{$(),p().then(()=>{const t=document.querySelector("li.gallery-item");window.scrollBy({top:t.getBoundingClientRect().height*2,behavior:"smooth"})})});async function p(){q();try{const t=await L(c,n);if(d=Math.ceil(t.total/15),t.total)w(t.hits);else throw new Error("Sorry, there are no images matching your search query. Please try again!");d>n?n++&&M():l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){l.error({message:String(t),position:"topRight"})}v()}
//# sourceMappingURL=index.js.map
