(()=>{var e={};e.id=365,e.ids=[365],e.modules={788:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eo});var n=r(5512),o=r(8009),s=r(1412),a=r(6004),i=r(9217),l=r(9952),u=r(96),d=r(830),c=r(447),f=r(3024),p=r(9018),m="rovingFocusGroup.onEntryFocus",g={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[x,h,b]=(0,i.N)(v),[w,y]=(0,a.A)(v,[b]),[j,N]=w(v),_=o.forwardRef((e,t)=>(0,n.jsx)(x.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(x.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(A,{...e,ref:t})})}));_.displayName=v;var A=o.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:i=!1,dir:u,currentTabStopId:v,defaultCurrentTabStopId:x,onCurrentTabStopIdChange:b,onEntryFocus:w,preventScrollOnEntryFocus:y=!1,...N}=e,_=o.useRef(null),A=(0,l.s)(t,_),T=(0,p.jH)(u),[E=null,I]=(0,f.i)({prop:v,defaultProp:x,onChange:b}),[D,F]=o.useState(!1),P=(0,c.c)(w),C=h(r),k=o.useRef(!1),[M,O]=o.useState(0);return o.useEffect(()=>{let e=_.current;if(e)return e.addEventListener(m,P),()=>e.removeEventListener(m,P)},[P]),(0,n.jsx)(j,{scope:r,orientation:a,dir:T,loop:i,currentTabStopId:E,onItemFocus:o.useCallback(e=>I(e),[I]),onItemShiftTab:o.useCallback(()=>F(!0),[]),onFocusableItemAdd:o.useCallback(()=>O(e=>e+1),[]),onFocusableItemRemove:o.useCallback(()=>O(e=>e-1),[]),children:(0,n.jsx)(d.sG.div,{tabIndex:D||0===M?-1:0,"data-orientation":a,...N,ref:A,style:{outline:"none",...e.style},onMouseDown:(0,s.m)(e.onMouseDown,()=>{k.current=!0}),onFocus:(0,s.m)(e.onFocus,e=>{let t=!k.current;if(e.target===e.currentTarget&&t&&!D){let t=new CustomEvent(m,g);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=C().filter(e=>e.focusable);R([e.find(e=>e.active),e.find(e=>e.id===E),...e].filter(Boolean).map(e=>e.ref.current),y)}}k.current=!1}),onBlur:(0,s.m)(e.onBlur,()=>F(!1))})})}),T="RovingFocusGroupItem",E=o.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:i=!1,tabStopId:l,...c}=e,f=(0,u.B)(),p=l||f,m=N(T,r),g=m.currentTabStopId===p,v=h(r),{onFocusableItemAdd:b,onFocusableItemRemove:w}=m;return o.useEffect(()=>{if(a)return b(),()=>w()},[a,b,w]),(0,n.jsx)(x.ItemSlot,{scope:r,id:p,focusable:a,active:i,children:(0,n.jsx)(d.sG.span,{tabIndex:g?0:-1,"data-orientation":m.orientation,...c,ref:t,onMouseDown:(0,s.m)(e.onMouseDown,e=>{a?m.onItemFocus(p):e.preventDefault()}),onFocus:(0,s.m)(e.onFocus,()=>m.onItemFocus(p)),onKeyDown:(0,s.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return I[o]}(e,m.orientation,m.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=v().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=m.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>R(r))}})})})});E.displayName=T;var I={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function R(e,t=!1){let r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var D=r(9397),F=e=>{let{present:t,children:r}=e,n=function(e){var t,r;let[n,s]=o.useState(),a=o.useRef({}),i=o.useRef(e),l=o.useRef("none"),[u,d]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>r[e][t]??e,t));return o.useEffect(()=>{let e=P(a.current);l.current="mounted"===u?e:"none"},[u]),(0,D.N)(()=>{let t=a.current,r=i.current;if(r!==e){let n=l.current,o=P(t);e?d("MOUNT"):"none"===o||t?.display==="none"?d("UNMOUNT"):r&&n!==o?d("ANIMATION_OUT"):d("UNMOUNT"),i.current=e}},[e,d]),(0,D.N)(()=>{if(n){let e;let t=n.ownerDocument.defaultView??window,r=r=>{let o=P(a.current).includes(r.animationName);if(r.target===n&&o&&(d("ANIMATION_END"),!i.current)){let r=n.style.animationFillMode;n.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=r)})}},o=e=>{e.target===n&&(l.current=P(a.current))};return n.addEventListener("animationstart",o),n.addEventListener("animationcancel",r),n.addEventListener("animationend",r),()=>{t.clearTimeout(e),n.removeEventListener("animationstart",o),n.removeEventListener("animationcancel",r),n.removeEventListener("animationend",r)}}d("ANIMATION_END")},[n,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(a.current=getComputedStyle(e)),s(e)},[])}}(t),s="function"==typeof r?r({present:n.isPresent}):o.Children.only(r),a=(0,l.s)(n.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof r||n.isPresent?o.cloneElement(s,{ref:a}):null};function P(e){return e?.animationName||"none"}F.displayName="Presence";var C="Tabs",[k,M]=(0,a.A)(C,[y]),O=y(),[S,U]=k(C),G=o.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,onValueChange:s,defaultValue:a,orientation:i="horizontal",dir:l,activationMode:c="automatic",...m}=e,g=(0,p.jH)(l),[v,x]=(0,f.i)({prop:o,onChange:s,defaultProp:a});return(0,n.jsx)(S,{scope:r,baseId:(0,u.B)(),value:v,onValueChange:x,orientation:i,dir:g,activationMode:c,children:(0,n.jsx)(d.sG.div,{dir:g,"data-orientation":i,...m,ref:t})})});G.displayName=C;var L="TabsList",K=o.forwardRef((e,t)=>{let{__scopeTabs:r,loop:o=!0,...s}=e,a=U(L,r),i=O(r);return(0,n.jsx)(_,{asChild:!0,...i,orientation:a.orientation,dir:a.dir,loop:o,children:(0,n.jsx)(d.sG.div,{role:"tablist","aria-orientation":a.orientation,...s,ref:t})})});K.displayName=L;var q="TabsTrigger",$=o.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,disabled:a=!1,...i}=e,l=U(q,r),u=O(r),c=B(l.baseId,o),f=W(l.baseId,o),p=o===l.value;return(0,n.jsx)(E,{asChild:!0,...u,focusable:!a,active:p,children:(0,n.jsx)(d.sG.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":f,"data-state":p?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:t,onMouseDown:(0,s.m)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():l.onValueChange(o)}),onKeyDown:(0,s.m)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&l.onValueChange(o)}),onFocus:(0,s.m)(e.onFocus,()=>{let e="manual"!==l.activationMode;p||a||!e||l.onValueChange(o)})})})});$.displayName=q;var z="TabsContent",V=o.forwardRef((e,t)=>{let{__scopeTabs:r,value:s,forceMount:a,children:i,...l}=e,u=U(z,r),c=B(u.baseId,s),f=W(u.baseId,s),p=s===u.value,m=o.useRef(p);return o.useEffect(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,n.jsx)(F,{present:a||p,children:({present:r})=>(0,n.jsx)(d.sG.div,{"data-state":p?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":c,hidden:!r,id:f,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:r&&i})})});function B(e,t){return`${e}-trigger-${t}`}function W(e,t){return`${e}-content-${t}`}V.displayName=z;var H=r(124);function J({className:e,...t}){return(0,n.jsx)(G,{"data-slot":"tabs",className:(0,H.cn)("flex flex-col gap-2",e),...t})}function X({className:e,...t}){return(0,n.jsx)(K,{"data-slot":"tabs-list",className:(0,H.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",e),...t})}function Q({className:e,...t}){return(0,n.jsx)($,{"data-slot":"tabs-trigger",className:(0,H.cn)("data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function Y({className:e,...t}){return(0,n.jsx)(V,{"data-slot":"tabs-content",className:(0,H.cn)("flex-1 outline-none",e),...t})}var Z=r(84),ee=r(8409),et=r(2907),er=r(331),en=r(9334);let eo=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ee.A,{}),(0,n.jsx)(()=>{let{user:e,login:t}=(0,er.J)();(0,o.useEffect)(()=>{e&&(0,en.redirect)(`/me/${e.role}`)},[e]);let[r,s]=(0,o.useState)({login:"",password:""}),[a,i]=(0,o.useState)({login:"",password:""}),[l,u]=(0,o.useState)(""),[d,c]=(0,o.useState)(!1);function f(e){return"login_login"==e.target.id?s({...r,login:e.target.value}):"password_login"==e.target.id?s({...r,password:e.target.value}):"login_reg"==e.target.id?i({...a,login:e.target.value}):"password_reg"==e.target.id?i({...a,password:e.target.value}):void 0}function p(e){e.preventDefault();let n=e.target.id;return"login"==n?t(JSON.stringify(r),n):"registration"==n?t(JSON.stringify(a),n):void 0}return(0,o.useEffect)(()=>{a.password==l?c(!0):c(!1)},[a.password,l]),(0,n.jsx)("div",{className:"w-[100vw] h-[100vh] py-[100px] flex items-center justify-center",children:(0,n.jsxs)(J,{defaultValue:"login",className:" rounded-sm w-1/3 h-2/3 items-center justify-center flex gap-y-0",children:[(0,n.jsxs)(X,{className:"h-1/6 bg-black/50 rounded-b-none rounded-t-sm flex justify-between lg:justify-center lg:gap-x-24 text-white w-full",children:[(0,n.jsx)(Q,{className:"rounded-xs",value:"login",children:"Вход"}),(0,n.jsx)(Q,{className:"rounded-xs",value:"registration",children:"Регистрация"})]}),(0,n.jsx)(Y,{className:"h-5/6 w-full bg-black/25 rounded-b-sm",value:"login",children:(0,n.jsxs)("form",{id:"login",onSubmit:p,className:"h-full w-full px-24 py-12 flex flex-col justify-between text-white",children:[(0,n.jsxs)("div",{className:"w-full flex flex-col gap-y-4",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-y-1",children:[(0,n.jsx)("label",{htmlFor:"login_login",children:"Имя пользователя"}),(0,n.jsx)("input",{value:r.login,onChange:f,id:"login_login",className:"border border-white/25 rounded-sm p-1"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-y-1",children:[(0,n.jsx)("label",{htmlFor:"password_login",children:"Пароль"}),(0,n.jsx)("input",{type:"password",value:r.password,onChange:f,id:"password_login",className:"border border-white/25 rounded-sm p-1"})]})]}),(0,n.jsx)(et.$,{variant:"secondary",children:"Войти"})]})}),(0,n.jsx)(Y,{className:"h-5/6 w-full bg-black/25 rounded-b-sm",value:"registration",children:(0,n.jsxs)("form",{id:"registration",onSubmit:p,className:"h-full w-full px-24 py-8 flex flex-col justify-between text-white",children:[(0,n.jsxs)("div",{className:"w-full flex flex-col gap-y-4",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-y-1",children:[(0,n.jsx)("label",{htmlFor:"login_reg",children:"Имя пользователя"}),(0,n.jsx)("input",{id:"login_reg",value:a.login,onChange:f,className:"border border-white/25 rounded-sm p-1"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-y-1",children:[(0,n.jsx)("label",{htmlFor:"password_reg",children:"Пароль"}),(0,n.jsx)("input",{id:"password_reg",type:"password",value:a.password,onChange:f,className:"border border-white/25 rounded-sm p-1"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-y-1",children:[(0,n.jsx)("label",{htmlFor:"confirm",children:"Подтвердите пароль"}),(0,n.jsx)("input",{type:"password",value:l,onChange:e=>u(e.target.value),id:"confirm",className:"border border-white/25 rounded-sm p-1"})]})]}),(0,n.jsx)(et.$,{disabled:!d,variant:"secondary",children:"Регистрация и вход"})]})})]})})},{}),(0,n.jsx)(Z.A,{})]})},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1189:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/anton/Desktop/florette_front/app/auth/page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/anton/Desktop/florette_front/app/auth/page.js","default")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3293:(e,t,r)=>{Promise.resolve().then(r.bind(r,1189))},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},7641:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u});var n=r(260),o=r(8203),s=r(5155),a=r.n(s),i=r(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u={children:["",{children:["auth",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1189)),"/Users/anton/Desktop/florette_front/app/auth/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9019)),"/Users/anton/Desktop/florette_front/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["/Users/anton/Desktop/florette_front/app/auth/page.js"],c={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/auth/page",pathname:"/auth",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},8557:(e,t,r)=>{Promise.resolve().then(r.bind(r,788))},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,581,553,666,881],()=>r(7641));module.exports=n})();