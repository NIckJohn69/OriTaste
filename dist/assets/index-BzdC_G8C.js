(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const y=[{id:1,name:"Premium Almonds",price:1800,unit:"1 kg",image:"/images/almonds.png",category:"Nuts"},{id:2,name:"Cashews",price:2100,unit:"1 kg",image:"/images/cashews.png",category:"Nuts"},{id:3,name:"Walnuts",price:2500,unit:"1 kg",image:"/images/walnuts.png",category:"Nuts"},{id:4,name:"Raisins",price:800,unit:"1 kg",image:"/images/raisins.png",category:"Dry Fruits"},{id:5,name:"Pistachios",price:2200,unit:"1 kg",image:"/images/pistachios.png",category:"Nuts"},{id:6,name:"Dried Figs",price:1500,unit:"1 kg",image:"/images/figs.png",category:"Dry Fruits"},{id:7,name:"Premium Dates",price:1200,unit:"1 kg",image:"/images/dates.png",category:"Dry Fruits"},{id:8,name:"Pumpkin Seeds",price:1400,unit:"1 kg",image:"/images/pumpkin.png",category:"Dry Fruits"},{id:9,name:"Sunflower Seeds",price:500,unit:"1 kg",image:"/images/sunflower.png",category:"Dry Fruits"}];let i=[];const S=document.getElementById("product-grid"),h=document.getElementById("view-all-btn"),b=document.getElementById("view-all-btn-mobile"),N=document.getElementById("cart-toggle"),F=document.getElementById("cart-close"),C=document.getElementById("cart-sidebar"),E=document.getElementById("cart-overlay"),$=document.getElementById("cart-items"),d=document.getElementById("cart-count"),D=document.getElementById("cart-total"),k=document.getElementById("checkout-btn"),T=document.getElementById("start-shopping-btn"),H=document.getElementById("toast-container"),w=document.getElementById("order-modal"),v=document.getElementById("order-modal-overlay"),q=document.getElementById("close-order-modal"),P=document.getElementById("order-form"),l=t=>t.toLocaleString("en-US");window.updatePriceDisplay=t=>{const e=y.find(o=>o.id===t),n=document.getElementById(`weight-${t}`),s=parseFloat(n.value),a=document.getElementById(`price-${t}`);a&&(a.textContent=`NPR ${l(e.price*s)}`)};let g=!1;const M=()=>{const t=g?y:y.slice(0,4);S.innerHTML=t.map(e=>{const n=e.image?e.image:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><rect width='100%' height='100%' fill='%23F8F5F1'/></svg>";return`
    <div class="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div class="relative h-56 bg-brand-light overflow-hidden flex items-center justify-center p-4">
        ${e.image?`<img src="${n}" onerror="this.style.display='none'" class="object-cover w-full h-full rounded-xl mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="${e.name}">`:'<i data-lucide="nut" class="w-16 h-16 text-brand-primary/20"></i>'}
        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-md text-brand-dark uppercase tracking-wider">
          ${e.category}
        </div>
      </div>
      <div class="p-6 flex flex-col flex-1">
        <h3 class="font-serif font-bold text-lg text-brand-dark mb-1 leading-tight line-clamp-2">${e.name}</h3>
        <div class="mb-4 mt-1">
          <select id="weight-${e.id}" onchange="updatePriceDisplay(${e.id})" class="text-sm border border-gray-200 rounded-md py-1 px-2 focus:outline-none focus:border-brand-primary bg-gray-50 text-brand-dark cursor-pointer hover:bg-gray-100 transition-colors">
            <option value="1">1 kg</option>
            <option value="0.5">0.5 kg</option>
          </select>
        </div>
        <div class="mt-auto flex items-center justify-between">
          <span id="price-${e.id}" class="font-bold text-lg">NPR ${l(e.price)}</span>
          <button onclick="addToCart(${e.id})" class="w-10 h-10 rounded-full bg-brand-light text-brand-dark flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
            <i data-lucide="plus" class="w-5 h-5 pointer-events-none"></i>
          </button>
        </div>
      </div>
    </div>
  `}).join(""),window.lucide&&window.lucide.createIcons()},A=t=>{const e=document.createElement("div");e.className="bg-brand-dark text-white px-6 py-3 rounded-xl shadow-lg transform translate-x-full opacity-0 transition-all duration-300 flex items-center gap-3 font-medium text-sm",e.innerHTML=`<i data-lucide="check-circle" class="w-4 h-4 text-brand-primary"></i> ${t}`,H.appendChild(e),window.lucide&&window.lucide.createIcons(),requestAnimationFrame(()=>{e.classList.remove("translate-x-full","opacity-0")}),setTimeout(()=>{e.classList.add("translate-x-full","opacity-0"),setTimeout(()=>{e.remove()},300)},3e3)};window.addToCart=t=>{const e=y.find(m=>m.id===t),n=document.getElementById(`weight-${t}`),s=n?parseFloat(n.value):1,a=s===1?"1 kg":"0.5 kg",o=e.price*s,c=`${t}-${s}`,p=i.find(m=>m.cartItemId===c);p?p.quantity+=1:i.push({cartItemId:c,product:e,quantity:1,weight:s,unitLabel:a,price:o}),x(),A(`${e.name} (${a}) added to cart`)};window.updateQuantity=(t,e)=>{const n=i.findIndex(s=>s.cartItemId===t);n>-1&&(i[n].quantity+=e,i[n].quantity<=0&&i.splice(n,1),x())};window.removeFromCart=t=>{i=i.filter(e=>e.cartItemId!==t),x()};const x=()=>{const t=i.reduce((n,s)=>n+s.quantity,0),e=i.reduce((n,s)=>n+s.price*s.quantity,0);t>0?(d.classList.remove("scale-0"),d.classList.add("scale-100"),d.textContent=t,d.classList.add("animate-bounce-short"),setTimeout(()=>d.classList.remove("animate-bounce-short"),300)):(d.classList.remove("scale-100"),d.classList.add("scale-0")),D.textContent=l(e),i.length===0?($.innerHTML=`
      <div class="h-full flex flex-col items-center justify-center text-brand-dark/50 gap-4 opacity-70">
        <i data-lucide="shopping-cart" class="w-16 h-16 mb-2"></i>
        <p>Your cart is empty.</p>
        <button onclick="document.getElementById('cart-close').click(); document.getElementById('shop').scrollIntoView({behavior: 'smooth'})" class="mt-4 px-6 py-2 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primaryDark transition-colors">Start Shopping</button>
      </div>
    `,k.disabled=!0):($.innerHTML=i.map(n=>`
      <div class="flex gap-4 items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm animate-fade-in">
        <div class="w-16 h-16 bg-brand-light rounded-lg flex items-center justify-center overflow-hidden">
           ${n.product.image?`<img src="${n.product.image}" class="w-full h-full object-cover">`:'<i data-lucide="nut" class="w-8 h-8 text-brand-primary/20"></i>'}
        </div>
        <div class="flex-1">
          <h4 class="font-medium text-sm text-brand-dark leading-tight">${n.product.name}</h4>
          <span class="text-xs text-gray-500">${n.unitLabel}</span>
          <div class="font-bold text-brand-dark text-sm mt-1">NPR ${l(n.price*n.quantity)}</div>
        </div>
        <div class="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50 w-8">
          <button onclick="updateQuantity('${n.cartItemId}', 1)" class="w-full h-7 flex flex-col items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
             <i data-lucide="plus" class="w-3 h-3 pointer-events-none"></i>
          </button>
          <span class="text-xs font-semibold w-full text-center py-1 bg-white border-y border-gray-200">${n.quantity}</span>
          <button onclick="updateQuantity('${n.cartItemId}', -1)" class="w-full h-7 flex flex-col items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
            <i data-lucide="minus" class="w-3 h-3 pointer-events-none"></i>
          </button>
        </div>
      </div>
    `).join(""),k.disabled=!1),window.lucide&&window.lucide.createIcons()},j=t=>{t&&t.preventDefault(),g=!g,M();const e='Show Less <i data-lucide="arrow-up" class="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"></i>',n='View All <i data-lucide="arrow-right" class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"></i>',s='View All <i data-lucide="arrow-down" class="w-4 h-4 transform group-hover:translate-y-1 transition-transform"></i>';h&&(h.innerHTML=g?e:n),b&&(b.innerHTML=g?e:s),window.lucide&&window.lucide.createIcons()};h&&h.addEventListener("click",j);b&&b.addEventListener("click",j);const R=()=>{E.classList.remove("opacity-0","pointer-events-none"),C.classList.remove("translate-x-full")},L=()=>{E.classList.add("opacity-0","pointer-events-none"),C.classList.add("translate-x-full")},V=()=>{L(),v.classList.remove("opacity-0","pointer-events-none"),setTimeout(()=>{w.classList.remove("scale-95","opacity-0"),w.classList.add("scale-100","opacity-100")},10)},B=()=>{w.classList.remove("scale-100","opacity-100"),w.classList.add("scale-95","opacity-0"),setTimeout(()=>{v.classList.add("opacity-0","pointer-events-none")},300)};N.addEventListener("click",R);F.addEventListener("click",L);E.addEventListener("click",L);k.addEventListener("click",()=>{i.length>0&&V()});q.addEventListener("click",B);v.addEventListener("click",t=>{t.target===v&&B()});P.addEventListener("submit",async t=>{t.preventDefault();const e=P.querySelector('button[type="submit"]'),n=e.innerHTML;e.innerHTML='<span class="animate-pulse">Processing Order...</span>',e.disabled=!0;const s=document.getElementById("name").value,a=document.getElementById("phone").value,o=document.getElementById("address").value,c=i.map(r=>`${r.quantity}x ${r.product.name} [${r.unitLabel}] (NPR ${l(r.price*r.quantity)})`).join("\\n"),p=i.reduce((r,u)=>r+u.price*u.quantity,0),m={_subject:`New Order from ${s} - Ori Taste!`,Name:s,Phone:a,Address:o,Total_Amount:`NPR ${l(p)}`,Order_Details:c};try{const r=await fetch("https://formsubmit.co/ajax/nickjohnpokharel13@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(m)}),u=await r.json();u.success!=="true"&&r.status!==200&&console.warn("FormSubmit notice:",u),B(),i=[],x(),setTimeout(()=>{const f=document.createElement("div");f.className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center z-50 animate-fade-in-up text-center w-11/12 max-w-sm",f.innerHTML=`
        <div class="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
          <i data-lucide="check" class="w-8 h-8"></i>
        </div>
        <h3 class="font-serif text-2xl font-bold mb-2">Order Confirmed!</h3>
        <p class="text-gray-500 text-sm mb-6">Thank you, ${s.split(" ")[0]}. We will contact you shortly to confirm delivery.</p>
        <button id="close-success" class="px-8 py-3 w-full bg-brand-dark text-white rounded-full font-medium hover:bg-brand-dark/90 transition-colors">Continue Shopping</button>
      `,document.body.appendChild(f);const I=document.createElement("div");I.className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 fade-in",document.body.appendChild(I),window.lucide&&window.lucide.createIcons(),document.getElementById("close-success").addEventListener("click",()=>{f.remove(),I.remove()})},500)}catch(r){console.error("Error submitting order:",r),alert("There was an issue submitting your order. Please check your internet connection and try again.")}finally{e.innerHTML=n,e.disabled=!1}});window.addEventListener("scroll",()=>{const t=document.getElementById("navbar");window.scrollY>20?(t.classList.add("shadow-md","py-3"),t.classList.remove("py-4")):(t.classList.remove("shadow-md","py-3"),t.classList.add("py-4"))});T&&T.addEventListener("click",()=>{L(),document.getElementById("shop").scrollIntoView({behavior:"smooth"})});const O=document.createElement("style");O.innerHTML=`
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translate(-50%, -40%); }
    to { opacity: 1; transform: translate(-50%, -50%); }
  }
  .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
  .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
  @keyframes bounce-short {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  .animate-bounce-short { animation: bounce-short 0.3s ease-out; }
`;document.head.appendChild(O);document.addEventListener("DOMContentLoaded",()=>{M()});
