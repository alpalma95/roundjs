(function(a,_){typeof exports=="object"&&typeof module<"u"?_(exports):typeof define=="function"&&define.amd?define(["exports"],_):(a=typeof globalThis<"u"?globalThis:a||self,_(a.apajs={}))})(this,function(a){"use strict";let{isArray:_}=Array,{fromEntries:Oe,entries:Be,keys:ee}=Object,{parse:T}=JSON,te=e=>_(e)?e.map(t=>typeof t=="string"?document.createTextNode(t):t):typeof e=="string"?document.createTextNode(e):e;class le extends HTMLElement{constructor(){super(),this.ctx={}}connectedCallback(){this.getAttributeNames().forEach(n=>{if(!n.startsWith(":"))return;let i={};i[n.slice(1)]=T(this.getAttribute(n)),this.ctx.props=i});let t=this.shadowRoot??this,l=te(this.ctx.render(this.ctx));_(l)?l.forEach(n=>t.appendChild(n)):t.appendChild(l),this.ctx.onInit&&this.ctx.onInit(this)}attributeChangedCallback(t,l,n){this.ctx.watch&&this.ctx.watch(t.slice(1),T(l),T(n),this)}disconnectedCallback(){this.ctx.onDestroy&&this.ctx.onDestroy(this)}}let ne=e=>{for(let t of ee(e))typeof e[t]=="function"&&(e[t]=e[t].bind(e));return e},ie=(e,t,l={})=>{window.customElements.define(e,class extends le{static get observedAttributes(){return l.observed??[]}constructor(){super(),this.ctx=ne(t),this.ctx.getHost=()=>this,l.shadow&&this.attachShadow({mode:l.shadow})}})};function oe(e){for(var t,l,n=arguments,i=1,o="",r="",s=[0],d=function(f){i===1&&(f||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(f?n[f]:o):i===3&&(f||o)?(s[1]=f?n[f]:o,i=2):i===2&&o==="..."&&f?s[2]=Object.assign(s[2]||{},n[f]):i===2&&o&&!f?(s[2]=s[2]||{})[o]=!0:i>=5&&(i===5?((s[2]=s[2]||{})[l]=f?o?o+n[f]:n[f]:o,i=6):(f||o)&&(s[2][l]+=f?o+n[f]:o)),o=""},c=0;c<e.length;c++){c&&(i===1&&d(),d(c));for(var g=0;g<e[c].length;g++)t=e[c][g],i===1?t==="<"?(d(),s=[s,"",null],i=3):o+=t:i===4?o==="--"&&t===">"?(i=1,o=""):o=t+o[0]:r?t===r?r="":o+=t:t==='"'||t==="'"?r=t:t===">"?(d(),i=1):i&&(t==="="?(i=5,l=o,o=""):t==="/"&&(i<5||e[c][g+1]===">")?(d(),i===3&&(s=s[0]),i=s,(s=s[0]).push(this.apply(null,i.slice(1))),i=0):t===" "||t==="	"||t===`
`||t==="\r"?(d(),i=2):o+=t),i===3&&o==="!--"&&(i=4,s=s[0])}return d(),s.length>2?s.slice(1):s[1]}let $=Object,p,h=$.getPrototypeOf,k=document,C,u,y,D={isConnected:1},se=1e3,w,F={},de=h(D),K=h(h),G=(e,t,l,n)=>(e??(setTimeout(l,n),new Set)).add(t),I=(e,t,l)=>{let n=u;u=t;try{return e(l)}catch(i){return console.error(i),l}finally{u=n}},x=e=>e.filter(t=>{var l;return(l=t._dom)==null?void 0:l.isConnected}),M=e=>w=G(w,e,()=>{for(let t of w)t._bindings=x(t._bindings),t._listeners=x(t._listeners);w=p},se),P={get val(){return u==null||u.add(this),this._val},get oldVal(){return u==null||u.add(this),this._oldVal},set val(e){let t=this;if(e!==t._val){t._val=e;let l=[...t._listeners=x(t._listeners)];for(let n of l)H(n.f,n.s,n._dom),n._dom=p;t._bindings.length?C=G(C,t,ce):t._oldVal=e}}},W=e=>({__proto__:P,_val:e,_oldVal:e,_bindings:[],_listeners:[]}),R=e=>h(e??0)===P,re=e=>R(e)?e.val:e,fe=e=>R(e)?e.oldVal:e,v=(e,t)=>{let l=new Set,n={f:e},i=y;y=[];let o=I(e,l,t);o=(o??k).nodeType?o:new Text(o);for(let r of l)M(r),r._bindings.push(n);for(let r of y)r._dom=o;return y=i,n._dom=o},H=(e,t=W(),l)=>{let n=new Set,i={f:e,s:t};i._dom=l??(y==null?void 0:y.push(i))??D,t.val=I(e,n);for(let o of n)M(o),o._listeners.push(i);return t},J=(e,...t)=>{for(let l of t.flat(1/0)){let n=h(l??0),i=n===P?v(()=>l.val):n===K?v(l):l;i!=p&&e.append(i)}return e},ae=e=>(e._isBindingFunc=1,e),L=e=>new Proxy((t,...l)=>{var r;let[n,...i]=h(l[0]??0)===de?l:[{},...l],o=e?k.createElementNS(e,t):k.createElement(t);for(let[s,d]of $.entries(n)){let c=B=>B?$.getOwnPropertyDescriptor(B,s)??c(h(B)):p,g=t+","+s,f=F[g]??(F[g]=((r=c(h(o)))==null?void 0:r.set)??0),O=f?f.bind(o):o.setAttribute.bind(o,s),j=h(d??0);j===P?v(()=>(O(d.val),o)):j===K&&(!s.startsWith("on")||d._isBindingFunc)?v(()=>(O(d()),o)):O(d)}return J(o,...i)},{get:(t,l)=>t.bind(p,l)}),q=(e,t)=>t?t!==e&&e.replaceWith(t):e.remove(),ce=()=>{let e=[...C].filter(t=>t._val!==t._oldVal);C=p;for(let t of new Set(e.flatMap(l=>l._bindings=x(l._bindings))))q(t._dom,v(t.f,t._dom)),t._dom=p;for(let t of e)t._oldVal=t._val},he=(e,t)=>q(e,v(t,e));const z={add:J,_:ae,tags:L(),tagsNS:L,state:W,val:re,oldVal:fe,derive:H,hydrate:he};let{fromEntries:ue,entries:pe,keys:ye,getPrototypeOf:Q}=Object,{get:ge,set:U,deleteProperty:X,ownKeys:_e}=Reflect,S=Symbol,{state:E,derive:ve,add:Se,tags:De}=z,me=Q(E()),be,m=S(),Ce=S(),we=S(),N=S(),b=S(),V=S(),Y=e=>e!=null&&e[we]?ve(()=>A(e())):E(A(e)),A=e=>{if(!(e instanceof Object)||e[m])return e;let t=new Proxy((e[m]=ue(pe(e).map(([l,n])=>[l,Y(n)])),e[Ce]=e,e[N]=[],e[b]=E(1),e),{get:(l,n)=>Q(l[m][n]??0)===me?l[m][n].val:(n==="length"&&l[b].val,ge(l,n,t)),set(l,n,i){let o=l[m];if(n in o)return o[n].val=A(i),1;let r=n in l;if(U(l,n,i))return r||U(o,n,Y(i))&&(++l[b].val,Ae(t,n,o[n])),1},deleteProperty:(l,n)=>(X(l[m],n)&&Te(l,n),X(l,n)&&++l[b].val),ownKeys:l=>(l[b].val,_e(l))});return t},Z=e=>e[N]=e[N].filter(t=>t._containerDom.isConnected),xe=(e,t,l,n)=>()=>{let i=n(l,()=>delete e[t]);return i[V]=t,i},Pe=(e,t,l,{_containerDom:n,f:i},o)=>{if(Se(n,xe(e,t,l,i)),!o&&Array.isArray(e)&&t!=e.length-1){let r={};for(let d of n.childNodes)r[d[V]]=d;let s=n.firstChild;for(let d of ye(e))s===r[d]?s=s.nextSibling:n.insertBefore(r[d],s)}},Ae=(e,t,l)=>Z(e).forEach(Pe.bind(be,e,t,l)),Te=(e,t)=>{var l;for(let n of Z(e))(l=[...n._containerDom.childNodes].find(i=>i[V]===t))==null||l.remove()},{state:$e,derive:ke,tags:Ee}=z;function Ne(e,t,...l){const n=Ee[e];return t?n(t,...l):n(...l)}const Ve=oe.bind(Ne);a.defineComponent=ie,a.derive=ke,a.html=Ve,a.reactive=A,a.state=$e,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
