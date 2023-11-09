(function(a,_){typeof exports=="object"&&typeof module<"u"?_(exports):typeof define=="function"&&define.amd?define(["exports"],_):(a=typeof globalThis<"u"?globalThis:a||self,_(a.apajs={}))})(this,function(a){"use strict";let{isArray:_}=Array,{createTextNode:I}=document,{fromEntries:Oe,entries:Ie,keys:ie}=Object,{parse:$}=JSON,ne=t=>_(t)?t.map(e=>typeof e=="string"?I(e):e):typeof t=="string"?I(t):t;class W extends HTMLElement{constructor(){super()}connectedCallback(){this.getAttributeNames().forEach(n=>{if(!n.startsWith(":"))return;let l={};l[n.slice(1)]=$(this.getAttribute(n)),this.ctx?this.ctx.props=l:this.props=l});let e=this.shadowRoot?this.shadowRoot:this,i=ne(this.render());_(i)?i.forEach(n=>e.appendChild(n)):e.appendChild(i),this.onInit()}attributeChangedCallback(e,i,n){e.startsWith(":")?this.props[e.slice(1)]=n:this[e]=n,this.watch(e.slice(1),$(i),$(n))}disconnectedCallback(){this.onDestroy()}watch(e,i,n){this.ctx.watch&&this.ctx.watch(e,i,n,this)}onInit(){this.ctx.onInit&&this.ctx.onInit(this)}onDestroy(){this.ctx.onDestroy&&this.ctx.onDestroy(this)}render(){return this.ctx.render(this.ctx)}}let le=t=>{for(let e of ie(t))typeof t[e]=="function"&&(t[e]=t[e].bind(t));return t},se=(t,e,i={})=>{window.customElements.define(t,class extends W{static get observedAttributes(){return i.observed??[]}constructor(){super(),this.ctx=le(e),this.ctx.getHost=()=>this,i.shadow&&this.attachShadow({mode:i.shadow})}})};function oe(t){for(var e,i,n=arguments,l=1,s="",d="",o=[0],r=function(f){l===1&&(f||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(f?n[f]:s):l===3&&(f||s)?(o[1]=f?n[f]:s,l=2):l===2&&s==="..."&&f?o[2]=Object.assign(o[2]||{},n[f]):l===2&&s&&!f?(o[2]=o[2]||{})[s]=!0:l>=5&&(l===5?((o[2]=o[2]||{})[i]=f?s?s+n[f]:n[f]:s,l=6):(f||s)&&(o[2][i]+=f?s+n[f]:s)),s=""},h=0;h<t.length;h++){h&&(l===1&&r(),r(h));for(var g=0;g<t[h].length;g++)e=t[h][g],l===1?e==="<"?(r(),o=[o,"",null],l=3):s+=e:l===4?s==="--"&&e===">"?(l=1,s=""):s=e+s[0]:d?e===d?d="":s+=e:e==='"'||e==="'"?d=e:e===">"?(r(),l=1):l&&(e==="="?(l=5,i=s,s=""):e==="/"&&(l<5||t[h][g+1]===">")?(r(),l===3&&(o=o[0]),l=o,(o=o[0]).push(this.apply(null,l.slice(1))),l=0):e===" "||e==="	"||e===`
`||e==="\r"?(r(),l=2):s+=e),l===3&&s==="!--"&&(l=4,o=o[0])}return r(),o.length>2?o.slice(1):o[1]}let T=Object,p,c=T.getPrototypeOf,k=document,w,u,y,B={isConnected:1},re=1e3,C,F={},de=c(B),K=c(c),R=(t,e,i,n)=>(t??(setTimeout(i,n),new Set)).add(e),G=(t,e,i)=>{let n=u;u=e;try{return t(i)}catch(l){return console.error(l),i}finally{u=n}},x=t=>t.filter(e=>{var i;return(i=e._dom)==null?void 0:i.isConnected}),M=t=>C=R(C,t,()=>{for(let e of C)e._bindings=x(e._bindings),e._listeners=x(e._listeners);C=p},re),P={get val(){return u==null||u.add(this),this._val},get oldVal(){return u==null||u.add(this),this._oldVal},set val(t){let e=this;if(t!==e._val){e._val=t;let i=[...e._listeners=x(e._listeners)];for(let n of i)L(n.f,n.s,n._dom),n._dom=p;e._bindings.length?w=R(w,e,ce):e._oldVal=t}}},H=t=>({__proto__:P,_val:t,_oldVal:t,_bindings:[],_listeners:[]}),J=t=>c(t??0)===P,fe=t=>J(t)?t.val:t,ae=t=>J(t)?t.oldVal:t,v=(t,e)=>{let i=new Set,n={f:t},l=y;y=[];let s=G(t,i,e);s=(s??k).nodeType?s:new Text(s);for(let d of i)M(d),d._bindings.push(n);for(let d of y)d._dom=s;return y=l,n._dom=s},L=(t,e=H(),i)=>{let n=new Set,l={f:t,s:e};l._dom=i??(y==null?void 0:y.push(l))??B,e.val=G(t,n);for(let s of n)M(s),s._listeners.push(l);return e},q=(t,...e)=>{for(let i of e.flat(1/0)){let n=c(i??0),l=n===P?v(()=>i.val):n===K?v(i):i;l!=p&&t.append(l)}return t},he=t=>(t._isBindingFunc=1,t),z=t=>new Proxy((e,...i)=>{var d;let[n,...l]=c(i[0]??0)===de?i:[{},...i],s=t?k.createElementNS(t,e):k.createElement(e);for(let[o,r]of T.entries(n)){let h=O=>O?T.getOwnPropertyDescriptor(O,o)??h(c(O)):p,g=e+","+o,f=F[g]??(F[g]=((d=h(c(s)))==null?void 0:d.set)??0),D=f?f.bind(s):s.setAttribute.bind(s,o),te=c(r??0);te===P?v(()=>(D(r.val),s)):te===K&&(!o.startsWith("on")||r._isBindingFunc)?v(()=>(D(r()),s)):D(r)}return q(s,...l)},{get:(e,i)=>e.bind(p,i)}),Q=(t,e)=>e?e!==t&&t.replaceWith(e):t.remove(),ce=()=>{let t=[...w].filter(e=>e._val!==e._oldVal);w=p;for(let e of new Set(t.flatMap(i=>i._bindings=x(i._bindings))))Q(e._dom,v(e.f,e._dom)),e._dom=p;for(let e of t)e._oldVal=e._val},ue=(t,e)=>Q(t,v(e,t));const U={add:q,_:he,tags:z(),tagsNS:z,state:H,val:fe,oldVal:ae,derive:L,hydrate:ue};let{fromEntries:pe,entries:ye,keys:ge,getPrototypeOf:X}=Object,{get:_e,set:Y,deleteProperty:Z,ownKeys:ve}=Reflect,S=Symbol,{state:E,derive:Se,add:me,tags:We}=U,be=X(E()),we,m=S(),Ce=S(),xe=S(),N=S(),b=S(),V=S(),j=t=>t!=null&&t[xe]?Se(()=>A(t())):E(A(t)),A=t=>{if(!(t instanceof Object)||t[m])return t;let e=new Proxy((t[m]=pe(ye(t).map(([i,n])=>[i,j(n)])),t[Ce]=t,t[N]=[],t[b]=E(1),t),{get:(i,n)=>X(i[m][n]??0)===be?i[m][n].val:(n==="length"&&i[b].val,_e(i,n,e)),set(i,n,l){let s=i[m];if(n in s)return s[n].val=A(l),1;let d=n in i;if(Y(i,n,l))return d||Y(s,n,j(l))&&(++i[b].val,$e(e,n,s[n])),1},deleteProperty:(i,n)=>(Z(i[m],n)&&Te(i,n),Z(i,n)&&++i[b].val),ownKeys:i=>(i[b].val,ve(i))});return e},ee=t=>t[N]=t[N].filter(e=>e._containerDom.isConnected),Pe=(t,e,i,n)=>()=>{let l=n(i,()=>delete t[e]);return l[V]=e,l},Ae=(t,e,i,{_containerDom:n,f:l},s)=>{if(me(n,Pe(t,e,i,l)),!s&&Array.isArray(t)&&e!=t.length-1){let d={};for(let r of n.childNodes)d[r[V]]=r;let o=n.firstChild;for(let r of ge(t))o===d[r]?o=o.nextSibling:n.insertBefore(d[r],o)}},$e=(t,e,i)=>ee(t).forEach(Ae.bind(we,t,e,i)),Te=(t,e)=>{var i;for(let n of ee(t))(i=[...n._containerDom.childNodes].find(l=>l[V]===e))==null||i.remove()},{state:ke,derive:Ee,tags:Ne}=U;function Ve(t,e,...i){const n=Ne[t];return e?n(e,...i):n(...i)}const De=oe.bind(Ve);a.ReactiveWC=W,a.defineComponent=se,a.derive=Ee,a.html=De,a.reactive=A,a.state=ke,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
