(()=>{var e={};e.id=100,e.ids=[100],e.modules={84:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var s=r(5512),l=r(124),n=r(3393),a=r.n(n),o=r(8531),i=r.n(o);let c=()=>(0,s.jsxs)("footer",{className:"w-[100vw] lg:h-[120px] px-4 lg:px-12 py-4 text-white bg-[#293230] flex flex-col gap-y-8 lg:flex-row lg:items-center justify-between",children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("h2",{className:(0,l.cn)(a().className,"uppercase text-4xl text-left"),children:"Florette"})}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row gap-y-6 gap-x-24",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,s.jsx)("h3",{className:"underline",children:"Адрес"}),(0,s.jsx)("p",{children:"Красноярск, ул. Маяковского, 21"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,s.jsx)("h3",{className:"underline",children:"Телефон"}),(0,s.jsx)("p",{children:"+7 (123) 123 11 22"})]})]})]})},124:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(2281),l=r(4805);function n(...e){return(0,l.QP)((0,s.$)(e))}},240:(e,t,r)=>{Promise.resolve().then(r.bind(r,8464))},331:(e,t,r)=>{"use strict";r.d(t,{J:()=>c,O:()=>i});var s=r(5512),l=r(8009),n=r(814),a=r(9334);let o=(0,l.createContext)(),i=({children:e})=>{let[t,r]=(0,l.useState)(void 0);return(0,l.useEffect)(()=>{let e=localStorage.getItem("user");r(e?(0,n.s)(e):void 0)},[]),(0,s.jsx)(o.Provider,{value:{user:t,login:function(e,t){return console.log(e),fetch(`http://45.12.145.247:3001/${t}`,{method:"post",body:e,headers:{"Content-Type":"application/json"}}).then(e=>200==e.status&&e.json()).then(e=>{let{token:t}=e;t&&localStorage.setItem("user",t)}).then(()=>{r((0,n.s)(localStorage.getItem("user")))}).catch(e=>{console.log(e)}),(0,a.redirect)("/me")},logout:()=>{localStorage.removeItem("user"),r(),(0,a.redirect)("/")}},children:e})},c=()=>(0,l.useContext)(o)},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2252:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,1601,23)),Promise.resolve().then(r.t.bind(r,8921,23))},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3479:(e,t,r)=>{"use strict";r.d(t,{T:()=>o});var s=r(5512),l=r(8009),n=r(4732),a=r(124);let o=l.forwardRef(({className:e,label:t,labelPosition:r="top",...o},i)=>{let c=Array.isArray(o.value)?o.value:[o.min,o.max];return(0,s.jsxs)(n.bL,{ref:i,className:(0,a.cn)("relative flex w-full touch-none select-none items-center",e),...o,children:[(0,s.jsx)(n.CC,{className:"relative h-1 w-full grow overflow-hidden rounded-full bg-white/25",children:(0,s.jsx)(n.Q6,{className:"absolute h-full bg-white"})}),c.map((e,o)=>(0,s.jsx)(l.Fragment,{children:(0,s.jsx)(n.zi,{className:"relative block h-2 w-2 rounded-full bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",children:t&&(0,s.jsx)("span",{className:(0,a.cn)("absolute flex w-full text-xs justify-center","top"===r&&"-top-5","bottom"===r&&"top-4"),children:t(e)})})},o))]})});o.displayName="DualRangeSlider"},3873:e=>{"use strict";e.exports=require("path")},4780:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var s=r(5512),l=r(8009),n=r(84),a=r(8409),o=r(124),i=r(3479),c=r(8531),d=r.n(c),h=r(9690),x=r(9334);let p=e=>(0,s.jsxs)(d(),{href:`/catalog/${e.id}`,className:"group h-[360px] lg:w-[30%] bg-red-50 relative",children:[(0,s.jsx)("img",{className:"w-full h-full object-cover group-hover:blur-[1px] transition-all",src:e.src}),(0,s.jsxs)("div",{className:"absolute bottom-0 h-[40%] w-full p-4 bg-black/40 flex flex-col justify-between",children:[(0,s.jsx)("h3",{className:"text-2xl font-light uppercase",children:e.name}),(0,s.jsxs)("h4",{className:"text-2xl ",children:[new Intl.NumberFormat("ru-RU",{maximumSignificantDigits:3}).format(e.price)," ₽"]})]})]}),u=({data:e,apply:t})=>{let[r,n]=(0,l.useState)(0),[a,c]=(0,l.useState)(999999);(0,l.useEffect)(()=>{let t;void 0!==e&&e.length>0&&(n(Math.min(...t=e.map(e=>e.price))),c(Math.max(...t)))},[e]);let[d,h]=(0,l.useState)([0,15e3]);return(0,s.jsxs)("div",{className:"w-full lg:w-1/4 h-full lg:pr-4 lg:border-r lg:border-[#fff]/25 flex flex-col gap-y-6 lg:p-y-24",children:[(0,s.jsxs)("div",{className:"w-full flex flex-col gap-y-4",children:[(0,s.jsx)("h3",{className:"uppercase lg:text-xl",children:"Категории"}),(0,s.jsxs)("ul",{className:"flex flex-wrap text-xs lg:text-lg lg:flex-col gap-y-2",children:[(0,s.jsx)("li",{role:"button",onClick:()=>{(0,x.redirect)("/catalog/author")},className:(0,o.cn)("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black"),children:"Авторские букеты"}),(0,s.jsx)("li",{role:"button",onClick:()=>{(0,x.redirect)("/catalog/mono")},className:(0,o.cn)("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black"),children:"Монокомпозиции"}),(0,s.jsx)("li",{role:"button",onClick:()=>{(0,x.redirect)("/catalog/orchids")},className:(0,o.cn)("cursor-pointer px-4 py-2 rounded-sm  hover:bg-white hover transition-all hover:text-black"),children:"Орхидеи"}),(0,s.jsx)("li",{role:"button",onClick:()=>{(0,x.redirect)("/catalog/dry")},className:(0,o.cn)("cursor-pointer px-4 py-2 rounded-sm  bg-[#ccc] transition-all text-black"),children:"Сухоцветы"})]})]}),(0,s.jsxs)("div",{className:"w-full flex items-center flex-col gap-y-4",children:[(0,s.jsx)("h3",{className:"uppercase lg:text-xl",children:"Цена"}),(0,s.jsxs)("div",{className:"w-full flex justify-between gap-x-2",children:[(0,s.jsx)("p",{className:"shrink-0",children:"₽"}),(0,s.jsx)(i.T,{onValueChange:e=>{t(d),h(e)},min:0,max:15e3,step:100,defaultValue:[0,15e3],value:[d[0],d[1]],label:e=>""+e}),(0,s.jsx)("p",{className:"shrink-0",children:"₽₽₽"})]})]})]})},m=({data:e})=>(0,s.jsxs)("div",{className:"w-full lg:w-3/4 lg:pl-4 lg:h-full lg:overflow-scroll flex flex-wrap gap-x-[3.3%] gap-y-4 lg:gap-y-12 hideyscroll",children:[e&&e.length>0&&e.map((e,t)=>(0,s.jsx)(p,{id:e.id,name:e.name,src:"http://45.12.145.247:3001/"+e.img,price:e.price},t)),void 0===e&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.E,{className:"h-[360px] w-[30%] rounded-none"}),(0,s.jsx)(h.E,{className:"h-[360px] w-[30%] rounded-none"}),(0,s.jsx)(h.E,{className:"h-[360px] w-[30%] rounded-none"}),(0,s.jsx)(h.E,{className:"h-[360px] w-[30%] rounded-none"}),(0,s.jsx)(h.E,{className:"h-[360px] w-[30%] rounded-none"}),(0,s.jsx)(h.E,{className:"h-[360px] w-[30%] rounded-none"}),(0,s.jsx)(h.E,{className:"h-[360px] w-[30%] rounded-none"}),(0,s.jsx)(h.E,{className:"h-[360px] w-[30%] rounded-none"})]})]}),f=()=>{let[e,t]=(0,l.useState)(void 0),[r,n]=(0,l.useState)(void 0);return(0,l.useEffect)(()=>{fetch("http://45.12.145.247:3001/category/4").then(e=>e.json()).then(e=>{t(e.products),n(e.products)}).catch(e=>console.log(e))},[]),(0,s.jsxs)("div",{className:"text-white w-[100vw] min-h-[100vh] lg:h-[100vh] pt-[calc(100px+1rem)] px-4 lg:px-24 gap-y-6  pb-4 flex flex-col lg:flex-row",children:[(0,s.jsx)(u,{data:e,apply:e=>{let s=[...r];t(s=s.filter(t=>t.price>e[0]&&t.price<e[1]))}}),(0,s.jsx)(m,{data:e})]})},g=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{}),(0,s.jsx)(f,{}),(0,s.jsx)(n.A,{})]})},5088:(e,t,r)=>{Promise.resolve().then(r.bind(r,4780))},6055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(8077);let l=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},6080:()=>{},6167:(e,t,r)=>{Promise.resolve().then(r.bind(r,9479))},8343:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,pages:()=>d,routeModule:()=>x,tree:()=>c});var s=r(260),l=r(8203),n=r(5155),a=r.n(n),o=r(7292),i={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let c={children:["",{children:["catalog",{children:["dry",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8464)),"/Users/anton/Desktop/florette_front/app/catalog/dry/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9019)),"/Users/anton/Desktop/florette_front/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["/Users/anton/Desktop/florette_front/app/catalog/dry/page.js"],h={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:l.RouteKind.APP_PAGE,page:"/catalog/dry/page",pathname:"/catalog/dry",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8409:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var s=r(5512),l=r(124),n=r(3393),a=r.n(n),o=r(4269),i=r(6438),c=r(8531),d=r.n(c);r(9334);var h=r(8009),x=r(331);let p=()=>{let[e,t]=(0,h.useState)(!1),{user:r}=(0,x.J)();function n(){t(!e)}return(0,s.jsxs)("nav",{className:"z-[99] h-[100px] w-[100vw] flex bg-transparent backdrop-blur-[2px] border-b border-black/5 justify-between items-center px-2 lg:px-12 text-white fixed top-0",children:[(0,s.jsx)(d(),{href:"/",children:(0,s.jsx)("h2",{className:(0,l.cn)(a().className," uppercase text-3xl lg:text-4xl hover:text-[#dadada] transition-all"),children:"Florette"})}),(0,s.jsxs)("ul",{className:"lg:flex items-center gap-x-12 font-light hidden",children:[(0,s.jsx)("li",{className:"hover:text-[#ccc] transition-all",children:(0,s.jsx)(d(),{href:"/",children:"Главная"})}),(0,s.jsx)("li",{className:"hover:text-[#ccc] transition-all",children:(0,s.jsx)(d(),{href:"/#about_us",children:"О нас"})}),(0,s.jsx)("li",{className:"hover:text-[#ccc] transition-all",children:(0,s.jsx)(d(),{href:"/catalog",children:"Каталог"})}),r&&"user"==r.role&&(0,s.jsx)("li",{className:"hover:text-[#ccc] transition-all",children:(0,s.jsx)(d(),{href:"/me/user/basket",children:"Корзина"})}),(0,s.jsx)("li",{className:"hover:text-[#ccc] transition-all",children:(0,s.jsx)(d(),{href:r?"/me":"/auth",children:"Личный кабинет"})})]}),(0,s.jsxs)("div",{id:"nav_mob_panel",className:(0,l.cn)("lg:hidden flex flex-col gap-y-40 py-8 pl-8 pr-4 h-[100vh] w-[80vw] absolute top-0 bg-black/90 transition-all",e?"right-0":"right-[-80vw]"),children:[(0,s.jsx)(o.A,{onClick:n,size:32,className:"shrink-0 self-end",strokeWidth:1.5}),(0,s.jsxs)("ul",{className:"flex flex-col gap-y-8 font-light",children:[(0,s.jsx)("li",{children:(0,s.jsx)(d(),{onClick:n,href:"/",children:"Главная"})}),(0,s.jsx)("li",{children:(0,s.jsx)(d(),{onClick:n,href:"/#about_us",children:"О нас"})}),(0,s.jsx)("li",{children:(0,s.jsx)(d(),{onClick:n,href:"/catalog",children:"Каталог"})}),r&&"user"==r.role&&(0,s.jsx)("li",{className:"hover:text-[#ccc] transition-all",children:(0,s.jsx)(d(),{href:"/me/user/basket",children:"Корзина"})}),(0,s.jsx)("li",{children:(0,s.jsx)(d(),{onClick:n,href:r?"/me":"/auth",children:"Личный кабинет"})})]})]}),(0,s.jsx)(i.A,{className:"lg:hidden",onClick:n})]})}},8464:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/anton/Desktop/florette_front/app/catalog/dry/page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/anton/Desktop/florette_front/app/catalog/dry/page.js","default")},8684:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,8429,23)),Promise.resolve().then(r.t.bind(r,1365,23))},9019:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/anton/Desktop/florette_front/app/layout.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/anton/Desktop/florette_front/app/layout.js","default")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9215:(e,t,r)=>{Promise.resolve().then(r.bind(r,9019))},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9479:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5512),l=r(6667),n=r.n(l);r(6080);var a=r(331);function o({children:e}){return(0,s.jsxs)("html",{lang:"ru",children:[(0,s.jsx)("title",{children:"Florette - Доставка цветов в Красноярске"}),(0,s.jsx)("body",{className:` ${n().variable}  antialiased bg-[#5B635C]`,children:(0,s.jsx)(a.O,{children:e})})]})}},9551:e=>{"use strict";e.exports=require("url")},9690:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var s=r(5512),l=r(124);function n({className:e,...t}){return(0,s.jsx)("div",{"data-slot":"skeleton",className:(0,l.cn)("bg-primary/10 animate-pulse rounded-md",e),...t})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,581,553,666,732],()=>r(8343));module.exports=s})();