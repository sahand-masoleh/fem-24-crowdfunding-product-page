const Fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};Fe();function j(){}function Ie(t,e){for(const n in e)t[n]=e[n];return t}function Pe(t){return t()}function ve(){return Object.create(null)}function F(t){t.forEach(Pe)}function De(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ee;function J(t,e){return ee||(ee=document.createElement("a")),ee.href=e,t===ee.href}function Re(t){return Object.keys(t).length===0}function He(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ie(t,e,n){t.$$.on_destroy.push(He(e,n))}function d(t,e){t.appendChild(e)}function B(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function Ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function b(){return E(" ")}function fe(){return E("")}function P(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ue(t){return Array.from(t.childNodes)}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function we(t,e){t.value=e==null?"":e}function Ge(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,o,e),i}let V;function Q(t){V=t}function Ke(){if(!V)throw new Error("Function called outside component initialization");return V}function ae(){const t=Ke();return(e,n,{cancelable:o=!1}={})=>{const i=t.$$.callbacks[e];if(i){const c=Ge(e,n,{cancelable:o});return i.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function re(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(o=>o.call(this,e))}const W=[],ce=[],ne=[],de=[],We=Promise.resolve();let ue=!1;function Je(){ue||(ue=!0,We.then(Le))}function me(t){ne.push(t)}function Qe(t){de.push(t)}const se=new Set;let te=0;function Le(){const t=V;do{for(;te<W.length;){const e=W[te];te++,Q(e),Ve(e.$$)}for(Q(null),W.length=0,te=0;ce.length;)ce.pop()();for(let e=0;e<ne.length;e+=1){const n=ne[e];se.has(n)||(se.add(n),n())}ne.length=0}while(W.length);for(;de.length;)de.pop()();ue=!1,se.clear(),Q(t)}function Ve(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(me)}}const oe=new Set;let U;function _e(){U={r:0,c:[],p:U}}function pe(){U.r||F(U.c),U=U.p}function O(t,e){t&&t.i&&(oe.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(oe.has(t))return;oe.add(t),U.c.push(()=>{oe.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function Xe(t,e){const n={},o={},i={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const a in r)a in l||(o[a]=1);for(const a in l)i[a]||(n[a]=l[a],i[a]=1);t[c]=l}else for(const a in r)i[a]=1}for(const r in o)r in n||(n[r]=void 0);return n}function Ze(t){return typeof t=="object"&&t!==null?t:{}}function et(t,e,n){const o=t.$$.props[e];o!==void 0&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function H(t){t&&t.c()}function Y(t,e,n,o){const{fragment:i,on_mount:c,on_destroy:r,after_update:l}=t.$$;i&&i.m(e,n),o||me(()=>{const a=c.map(Pe).filter(De);r?r.push(...a):F(a),t.$$.on_mount=[]}),l.forEach(me)}function q(t,e){const n=t.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){t.$$.dirty[0]===-1&&(W.push(t),Je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,o,i,c,r,l=[-1]){const a=V;Q(t);const s=t.$$={fragment:null,ctx:null,props:c,update:j,not_equal:i,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ve(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};r&&r(s.root);let m=!1;if(s.ctx=n?n(t,e.props||{},(p,f,...h)=>{const y=h.length?h[0]:f;return s.ctx&&i(s.ctx[p],s.ctx[p]=y)&&(!s.skip_bound&&s.bound[p]&&s.bound[p](y),m&&tt(t,p)),f}):[],s.update(),m=!0,F(s.before_update),s.fragment=o?o(s.ctx):!1,e.target){if(e.hydrate){const p=Ue(e.target);s.fragment&&s.fragment.l(p),p.forEach(C)}else s.fragment&&s.fragment.c();e.intro&&O(t.$$.fragment),Y(t,e.target,e.anchor,e.customElement),Le()}Q(a)}class D{$destroy(){q(this,1),this.$destroy=j}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!Re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var nt="/assets/logo.b20c5b2b.svg",ye="/assets/icon-hamburger.6b5cecbe.svg",xe="/assets/icon-close-menu.acfc848e.svg";function $e(t){let e,n,o,i,c;return{c(){e=_("div"),n=b(),o=_("div"),o.innerHTML=`<p class="nav__item">About</p> 
		<p class="nav__item">Discover</p> 
		<p class="nav__item">Get Started</p>`,u(e,"class","nav__curtain"),u(o,"class","nav__menu nav__menu--modal")},m(r,l){B(r,e,l),B(r,n,l),B(r,o,l),i||(c=[P(e,"click",t[1]),P(o,"click",t[1])],i=!0)},p:j,d(r){r&&C(e),r&&C(n),r&&C(o),i=!1,F(c)}}}function ot(t){let e,n,o,i,c,r,l,a,s,m,p,f,h,y,x=t[0]&&$e(t);return{c(){e=_("div"),n=_("nav"),o=_("img"),c=b(),r=_("div"),r.innerHTML=`<p class="nav__item">About</p> 
			<p class="nav__item">Discover</p> 
			<p class="nav__item">Get Started</p>`,l=b(),a=_("button"),s=_("img"),p=b(),x&&x.c(),f=fe(),J(o.src,i=nt)||u(o,"src",i),u(o,"alt","crowfund logo"),u(o,"class","nav__logo"),u(r,"class","nav__menu nav__menu--desktop"),J(s.src,m=t[0]?xe:ye)||u(s,"src",m),u(s,"alt",""),u(a,"class","nav__hamburger"),u(n,"class","nav"),u(e,"class","nav-container")},m(g,M){B(g,e,M),d(e,n),d(n,o),d(n,c),d(n,r),d(n,l),d(n,a),d(a,s),B(g,p,M),x&&x.m(g,M),B(g,f,M),h||(y=P(a,"click",t[1]),h=!0)},p(g,[M]){M&1&&!J(s.src,m=g[0]?xe:ye)&&u(s,"src",m),g[0]?x?x.p(g,M):(x=$e(g),x.c(),x.m(f.parentNode,f)):x&&(x.d(1),x=null)},i:j,o:j,d(g){g&&C(e),g&&C(p),x&&x.d(g),g&&C(f),h=!1,y()}}}function it(t,e,n){let{isMenuOpen:o=!1}=e;function i(){n(0,o=!o)}return t.$$set=c=>{"isMenuOpen"in c&&n(0,o=c.isMenuOpen)},[o,i]}class rt extends D{constructor(e){super(),I(this,e,it,ot,L,{isMenuOpen:0})}}var at="/assets/logo-mastercraft.dd7a2278.svg";function lt(t){let e,n,o,i,c,r,l,a,s,m,p,f,h,y,x,g,M=t[0]?"Bookmarked":"Bookmark",w,S,$,z,k;return{c(){e=_("section"),n=_("img"),i=b(),c=_("h1"),c.textContent="Mastercraft Bamboo Monitor Riser",r=b(),l=_("p"),l.textContent="A beautiful & handcrafted monitor stand to reduce neck and eye strain.",a=b(),s=_("div"),m=_("button"),m.textContent="Back this project",p=b(),f=_("button"),h=_("div"),x=b(),g=_("p"),w=E(M),J(n.src,o=at)||u(n,"src",o),u(n,"alt","mastercraft logo"),u(n,"class","intro__logo"),u(c,"class","intro__title"),u(l,"class","intro__text"),u(m,"class","intro__button"),u(h,"class",y=`intro__bookmark-icon ${t[0]?"intro__bookmark-icon--done":"intro__bookmark-icon--undone"}`),u(g,"class",S=`intro__bookmark-label ${t[0]?"intro__bookmark-label--done":"intro__bookmark-label--undone"}`),u(f,"class",$=`intro__bookmark ${t[0]?"intro__bookmark--done":"intro__bookmark--undone"}`),u(s,"class","intro__button-container"),u(e,"class","intro")},m(v,T){B(v,e,T),d(e,n),d(e,i),d(e,c),d(e,r),d(e,l),d(e,a),d(e,s),d(s,m),d(s,p),d(s,f),d(f,h),d(f,x),d(f,g),d(g,w),z||(k=[P(m,"click",t[2]),P(f,"click",t[1])],z=!0)},p(v,[T]){T&1&&y!==(y=`intro__bookmark-icon ${v[0]?"intro__bookmark-icon--done":"intro__bookmark-icon--undone"}`)&&u(h,"class",y),T&1&&M!==(M=v[0]?"Bookmarked":"Bookmark")&&N(w,M),T&1&&S!==(S=`intro__bookmark-label ${v[0]?"intro__bookmark-label--done":"intro__bookmark-label--undone"}`)&&u(g,"class",S),T&1&&$!==($=`intro__bookmark ${v[0]?"intro__bookmark--done":"intro__bookmark--undone"}`)&&u(f,"class",$)},i:j,o:j,d(v){v&&C(e),z=!1,F(k)}}}function st(t,e,n){let o=!1;function i(){n(0,o=!o)}const c=ae();function r(){c("open-modal")}return[o,i,r]}class ct extends D{constructor(e){super(),I(this,e,st,lt,L,{})}}const G=[];function be(t,e=j){let n;const o=new Set;function i(l){if(L(t,l)&&(t=l,n)){const a=!G.length;for(const s of o)s[1](),G.push(s,t);if(a){for(let s=0;s<G.length;s+=2)G[s][0](G[s+1]);G.length=0}}}function c(l){i(l(t))}function r(l,a=j){const s=[l,a];return o.add(s),o.size===1&&(n=e(i)||j),l(t),()=>{o.delete(s),o.size===0&&(n(),n=null)}}return{set:i,update:c,subscribe:r}}let dt=[{value:"none",name:"Pledge with no reward",text:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."},{value:"bamboo",name:"Bamboo Stand",min:25,text:"You get an ergonomic stand made of natural bamboo. You\u2019ve helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",left:101},{value:"black",name:"Black Edition Stand",min:75,text:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",left:64},{value:"mahogany",name:"Mahogany Special Edition",min:"200",text:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",left:0}];const he=be(dt),Te=be(89914),Ye=be(5007);function ut(t){let e,n,o,i,c,r,l,a,s,m,p,f,h,y,x,g,M,w,S,$,z;return{c(){e=_("section"),n=_("div"),o=_("p"),i=E(t[2]),c=b(),r=_("p"),r.textContent="of $100,000 backed",l=b(),a=_("hr"),s=b(),m=_("div"),p=_("p"),f=E(t[1]),h=b(),y=_("p"),y.textContent="total backers",x=b(),g=_("hr"),M=b(),w=_("div"),w.innerHTML=`<p class="stats__num">56</p> 
		<p class="stats__desc">days left</p>`,S=b(),$=_("div"),u(o,"class","stats__num"),u(r,"class","stats__desc"),u(n,"class","stats__container"),u(a,"class","stats__divider"),u(p,"class","stats__num"),u(y,"class","stats__desc"),u(m,"class","stats__container"),u(g,"class","stats__divider"),u(w,"class","stats__container"),u($,"style",z=`--width: ${t[0]*100/1e5}%`),u($,"class","stats__bar"),u(e,"class","stats")},m(k,v){B(k,e,v),d(e,n),d(n,o),d(o,i),d(n,c),d(n,r),d(e,l),d(e,a),d(e,s),d(e,m),d(m,p),d(p,f),d(m,h),d(m,y),d(e,x),d(e,g),d(e,M),d(e,w),d(e,S),d(e,$)},p(k,[v]){v&4&&N(i,k[2]),v&2&&N(f,k[1]),v&1&&z!==(z=`--width: ${k[0]*100/1e5}%`)&&u($,"style",z)},i:j,o:j,d(k){k&&C(e)}}}function mt(t,e,n){let o,i,c,r;return ie(t,Ye,l=>n(3,c=l)),ie(t,Te,l=>n(0,r=l)),t.$$.update=()=>{t.$$.dirty&1&&n(2,o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(r)),t.$$.dirty&8&&n(1,i=new Intl.NumberFormat("en-US",{style:"decimal"}).format(c))},[r,i,o,c]}class ft extends D{constructor(e){super(),I(this,e,mt,ut,L,{})}}function ze(t,e,n){const o=t.slice();return o[4]=e[n].name,o[5]=e[n].value,o[6]=e[n].min,o[7]=e[n].text,o[8]=e[n].left,o[10]=n,o}function Me(t){let e,n,o=t[4]+"",i,c,r,l,a=t[6]+"",s,m,p,f,h=t[7]+"",y,x,g,M,w=t[8]+"",S,$,z,k,v,T,X,ge,Z,le,ke;function qe(){return t[2](t[5])}return{c(){e=_("div"),n=_("h3"),i=E(o),c=b(),r=_("span"),l=E("Pledge $"),s=E(a),m=E(" or more"),p=b(),f=_("p"),y=E(h),x=b(),g=_("div"),M=_("span"),S=E(w),$=b(),z=_("span"),z.textContent="left",k=b(),v=_("button"),T=E("Select Reward"),ge=b(),u(n,"class","about-option__title"),u(r,"class","about-option__min"),u(f,"class","about-option__text"),u(M,"class","about-option__left-num"),u(z,"class","about-option__left-text"),u(g,"class","about-option__left-container"),u(v,"class",X=`about-option__button ${t[8]>1?"about-option__button--enabled":"about-option__button--disabled"}`),u(e,"class",Z=`about-option ${t[8]<1?"about-option--disabled":""}`)},m(K,R){B(K,e,R),d(e,n),d(n,i),d(e,c),d(e,r),d(r,l),d(r,s),d(r,m),d(e,p),d(e,f),d(f,y),d(e,x),d(e,g),d(g,M),d(M,S),d(g,$),d(g,z),d(e,k),d(e,v),d(v,T),d(e,ge),le||(ke=P(v,"click",qe),le=!0)},p(K,R){t=K,R&1&&o!==(o=t[4]+"")&&N(i,o),R&1&&a!==(a=t[6]+"")&&N(s,a),R&1&&h!==(h=t[7]+"")&&N(y,h),R&1&&w!==(w=t[8]+"")&&N(S,w),R&1&&X!==(X=`about-option__button ${t[8]>1?"about-option__button--enabled":"about-option__button--disabled"}`)&&u(v,"class",X),R&1&&Z!==(Z=`about-option ${t[8]<1?"about-option--disabled":""}`)&&u(e,"class",Z)},d(K){K&&C(e),le=!1,ke()}}}function Se(t){let e,n=t[6]&&Me(t);return{c(){n&&n.c(),e=fe()},m(o,i){n&&n.m(o,i),B(o,e,i)},p(o,i){o[6]?n?n.p(o,i):(n=Me(o),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(o){n&&n.d(o),o&&C(e)}}}function _t(t){let e,n,o,i,c,r,l,a=t[0],s=[];for(let m=0;m<a.length;m+=1)s[m]=Se(ze(t,a,m));return{c(){e=_("section"),n=_("h2"),n.textContent="About this project",o=b(),i=_("p"),i.textContent=`The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that\r
		elevates your screen to a more comfortable viewing height. Placing your\r
		monitor at eye level has the potential to improve your posture and make you\r
		more comfortable while at work, helping you stay focused on the task at\r
		hand.`,c=b(),r=_("p"),r.textContent=`Featuring artisan craftsmanship, the simplicity of design creates extra desk\r
		space below your computer to allow notepads, pens, and USB sticks to be\r
		stored under the stand.`,l=b();for(let m=0;m<s.length;m+=1)s[m].c();u(n,"class","about__title"),u(i,"class","about__text"),u(r,"class","about__text"),u(e,"class","about")},m(m,p){B(m,e,p),d(e,n),d(e,o),d(e,i),d(e,c),d(e,r),d(e,l);for(let f=0;f<s.length;f+=1)s[f].m(e,null)},p(m,[p]){if(p&3){a=m[0];let f;for(f=0;f<a.length;f+=1){const h=ze(m,a,f);s[f]?s[f].p(h,p):(s[f]=Se(h),s[f].c(),s[f].m(e,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=a.length}},i:j,o:j,d(m){m&&C(e),Ne(s,m)}}}function pt(t,e,n){let o;ie(t,he,l=>n(0,o=l));const i=ae();function c(l){i("open-modal",{value:l})}return[o,c,l=>c(l)]}class bt extends D{constructor(e){super(),I(this,e,pt,_t,L,{})}}function ht(t){let e,n,o,i,c,r,l;return n=new ct({}),n.$on("open-modal",t[0]),i=new ft({}),r=new bt({}),r.$on("open-modal",t[1]),{c(){e=_("main"),H(n.$$.fragment),o=b(),H(i.$$.fragment),c=b(),H(r.$$.fragment),u(e,"class","main")},m(a,s){B(a,e,s),Y(n,e,null),d(e,o),Y(i,e,null),d(e,c),Y(r,e,null),l=!0},p:j,i(a){l||(O(n.$$.fragment,a),O(i.$$.fragment,a),O(r.$$.fragment,a),l=!0)},o(a){A(n.$$.fragment,a),A(i.$$.fragment,a),A(r.$$.fragment,a),l=!1},d(a){a&&C(e),q(n),q(i),q(r)}}}function gt(t){function e(o){re.call(this,t,o)}function n(o){re.call(this,t,o)}return[e,n]}class kt extends D{constructor(e){super(),I(this,e,gt,ht,L,{})}}var vt="/assets/icon-check.dee20d60.svg";function Ce(t){let e,n,o,i;return{c(){e=_("p"),n=E("Pledge $"),o=E(t[3]),i=E(" or more"),u(e,"class","modal-option__min")},m(c,r){B(c,e,r),d(e,n),d(e,o),d(e,i)},p(c,r){r&8&&N(o,c[3])},d(c){c&&C(e)}}}function je(t){let e,n,o,i,c;return{c(){e=_("div"),n=_("span"),o=E(t[5]),i=b(),c=_("span"),c.textContent="left",u(n,"class","modal-option__left-num"),u(c,"class","modal-option__left-text"),u(e,"class","modal-option__left")},m(r,l){B(r,e,l),d(e,n),d(n,o),d(e,i),d(e,c)},p(r,l){l&32&&N(o,r[5])},d(r){r&&C(e)}}}function Be(t){let e,n,o,i,c,r,l,a,s,m,p;return{c(){e=_("div"),n=_("p"),n.textContent="Enter your pledge",o=b(),i=_("div"),c=_("input"),r=b(),l=_("button"),a=E("Continue"),u(n,"class","modal-option__command"),u(c,"type","text"),u(c,"class","modal-option__input"),u(i,"class","modal-option__input-container"),l.disabled=s=!t[7]||t[5]<1,u(l,"class","modal-option__button"),u(e,"class","modal-option__payment")},m(f,h){B(f,e,h),d(e,n),d(e,o),d(e,i),d(i,c),we(c,t[6]),d(e,r),d(e,l),d(l,a),m||(p=[P(c,"input",t[12]),P(l,"click",t[9])],m=!0)},p(f,h){h&64&&c.value!==f[6]&&we(c,f[6]),h&160&&s!==(s=!f[7]||f[5]<1)&&(l.disabled=s)},d(f){f&&C(e),m=!1,F(p)}}}function wt(t){let e,n,o,i,c,r,l,a,s,m,p,f,h,y,x,g,M,w,S=t[3]&&Ce(t),$=t[5]!=null&&je(t),z=t[0]===t[1]&&Be(t);return{c(){e=_("section"),n=_("div"),o=_("div"),i=_("input"),r=b(),l=_("div"),a=_("h3"),s=E(t[2]),m=b(),S&&S.c(),p=b(),f=_("p"),h=E(t[4]),y=b(),$&&$.c(),x=b(),z&&z.c(),u(i,"type","radio"),u(i,"name","pledge"),u(i,"id",t[1]),i.__value=t[1],i.value=i.__value,u(i,"class","modal-option__radio"),t[11][0].push(i),u(o,"class",c=`modal-option__radio-container ${t[0]==t[1]?"modal-option__radio-container--checked":"modal-option__radio-container--unchecked"}`),u(a,"class","modal-option__title"),u(l,"class","modal-option__title-container"),u(f,"class","modal-option__text"),u(n,"class","modal-option__main"),u(e,"class",g=`modal-option ${t[0]==t[1]?"modal-option--selected":t[5]<1?"modal-option--disabled":"modal-option--unselected"}`)},m(k,v){B(k,e,v),d(e,n),d(n,o),d(o,i),i.checked=i.__value===t[0],d(n,r),d(n,l),d(l,a),d(a,s),d(l,m),S&&S.m(l,null),d(n,p),d(n,f),d(f,h),d(n,y),$&&$.m(n,null),d(e,x),z&&z.m(e,null),M||(w=[P(i,"change",t[10]),P(e,"click",t[13])],M=!0)},p(k,[v]){v&2&&u(i,"id",k[1]),v&2&&(i.__value=k[1],i.value=i.__value),v&1&&(i.checked=i.__value===k[0]),v&3&&c!==(c=`modal-option__radio-container ${k[0]==k[1]?"modal-option__radio-container--checked":"modal-option__radio-container--unchecked"}`)&&u(o,"class",c),v&4&&N(s,k[2]),k[3]?S?S.p(k,v):(S=Ce(k),S.c(),S.m(l,null)):S&&(S.d(1),S=null),v&16&&N(h,k[4]),k[5]!=null?$?$.p(k,v):($=je(k),$.c(),$.m(n,null)):$&&($.d(1),$=null),k[0]===k[1]?z?z.p(k,v):(z=Be(k),z.c(),z.m(e,null)):z&&(z.d(1),z=null),v&35&&g!==(g=`modal-option ${k[0]==k[1]?"modal-option--selected":k[5]<1?"modal-option--disabled":"modal-option--unselected"}`)&&u(e,"class",g)},i:j,o:j,d(k){k&&C(e),t[11][0].splice(t[11][0].indexOf(i),1),S&&S.d(),$&&$.d(),z&&z.d(),M=!1,F(w)}}}function yt(t,e,n){let o,{value:i}=e,{name:c}=e,{min:r}=e,{text:l}=e,{left:a}=e,{checked:s}=e;function m(w){n(0,s=w)}let p;const f=ae();function h(){(!r||p>=r)&&f("pledge",{value:i,pledge:p})}const y=[[]];function x(){s=this.__value,n(0,s)}function g(){p=this.value,n(6,p)}const M=()=>(a>0||a==null)&&m(i);return t.$$set=w=>{"value"in w&&n(1,i=w.value),"name"in w&&n(2,c=w.name),"min"in w&&n(3,r=w.min),"text"in w&&n(4,l=w.text),"left"in w&&n(5,a=w.left),"checked"in w&&n(0,s=w.checked)},t.$$.update=()=>{t.$$.dirty&72&&n(7,o=r?p>=r:p>0)},[s,i,c,r,l,a,p,o,m,h,x,y,g,M]}class xt extends D{constructor(e){super(),I(this,e,yt,wt,L,{value:1,name:2,min:3,text:4,left:5,checked:0})}}function Ee(t,e,n){const o=t.slice();return o[5]=e[n],o}function Oe(t){let e,n,o;const i=[t[5]];function c(l){t[2](l)}let r={};for(let l=0;l<i.length;l+=1)r=Ie(r,i[l]);return t[0]!==void 0&&(r.checked=t[0]),e=new xt({props:r}),ce.push(()=>et(e,"checked",c)),e.$on("pledge",t[3]),e.$on("open-modal",t[4]),{c(){H(e.$$.fragment)},m(l,a){Y(e,l,a),o=!0},p(l,a){const s=a&2?Xe(i,[Ze(l[5])]):{};!n&&a&1&&(n=!0,s.checked=l[0],Qe(()=>n=!1)),e.$set(s)},i(l){o||(O(e.$$.fragment,l),o=!0)},o(l){A(e.$$.fragment,l),o=!1},d(l){q(e,l)}}}function $t(t){let e,n,o=t[1],i=[];for(let r=0;r<o.length;r+=1)i[r]=Oe(Ee(t,o,r));const c=r=>A(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=fe()},m(r,l){for(let a=0;a<i.length;a+=1)i[a].m(r,l);B(r,e,l),n=!0},p(r,[l]){if(l&3){o=r[1];let a;for(a=0;a<o.length;a+=1){const s=Ee(r,o,a);i[a]?(i[a].p(s,l),O(i[a],1)):(i[a]=Oe(s),i[a].c(),O(i[a],1),i[a].m(e.parentNode,e))}for(_e(),a=o.length;a<i.length;a+=1)c(a);pe()}},i(r){if(!n){for(let l=0;l<o.length;l+=1)O(i[l]);n=!0}},o(r){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)A(i[l]);n=!1},d(r){Ne(i,r),r&&C(e)}}}function zt(t,e,n){let o;ie(t,he,a=>n(1,o=a));let{checked:i}=e;function c(a){i=a,n(0,i)}function r(a){re.call(this,t,a)}function l(a){re.call(this,t,a)}return t.$$set=a=>{"checked"in a&&n(0,i=a.checked)},[i,o,c,r,l]}class Mt extends D{constructor(e){super(),I(this,e,zt,$t,L,{checked:0})}}function St(t){let e,n,o,i,c,r,l,a,s,m,p;return{c(){e=_("div"),n=_("img"),i=b(),c=_("h2"),c.textContent="Thanks for your support!",r=b(),l=_("p"),l.textContent=`Your pledge brings us one step closer to sharing Mastercraft Bamboo\r
				Monitor Riser worldwide. You will get an email once our campaign is\r
				completed.`,a=b(),s=_("button"),s.textContent="Got it!",J(n.src,o=vt)||u(n,"src",o),u(n,"alt",""),u(n,"class","thankyou__icon"),u(c,"class","thankyou__title"),u(l,"class","thankyou__text"),u(s,"class","thankyou__button"),u(e,"class","thankyou")},m(f,h){B(f,e,h),d(e,n),d(e,i),d(e,c),d(e,r),d(e,l),d(e,a),d(e,s),m||(p=P(s,"click",t[2]),m=!0)},p:j,i:j,o:j,d(f){f&&C(e),m=!1,p()}}}function Ct(t){let e,n,o,i,c,r,l,a,s,m,p;return a=new Mt({props:{checked:t[1]}}),a.$on("pledge",t[3]),{c(){e=_("div"),n=_("h2"),o=E(`Back this project\r
				`),i=_("button"),c=b(),r=_("p"),r.textContent=`Want to support us in bringing Mastercraft Bamboo Monitor Riser out in\r
				the world?`,l=b(),H(a.$$.fragment),u(i,"class","pledge__close"),u(n,"class","pledge__title"),u(r,"class","pledge__text"),u(e,"class","pledge")},m(f,h){B(f,e,h),d(e,n),d(n,o),d(n,i),d(e,c),d(e,r),d(e,l),Y(a,e,null),s=!0,m||(p=P(i,"click",t[2]),m=!0)},p(f,h){const y={};h&2&&(y.checked=f[1]),a.$set(y)},i(f){s||(O(a.$$.fragment,f),s=!0)},o(f){A(a.$$.fragment,f),s=!1},d(f){f&&C(e),q(a),m=!1,p()}}}function jt(t){let e,n,o,i;const c=[Ct,St],r=[];function l(a,s){return a[0]?1:0}return n=l(t),o=r[n]=c[n](t),{c(){e=_("div"),o.c(),u(e,"class","pledge__curtain")},m(a,s){B(a,e,s),r[n].m(e,null),i=!0},p(a,[s]){let m=n;n=l(a),n===m?r[n].p(a,s):(_e(),A(r[m],1,1,()=>{r[m]=null}),pe(),o=r[n],o?o.p(a,s):(o=r[n]=c[n](a),o.c()),O(o,1),o.m(e,null))},i(a){i||(O(o),i=!0)},o(a){A(o),i=!1},d(a){a&&C(e),r[n].d()}}}function Bt(t,e,n){const o=ae();function i(){o("close-modal")}let{checked:c}=e,{hasSubmitted:r=!1}=e;function l(a){const{value:s,pledge:m}=a.detail;s!=="none"&&he.update(p=>{let f=p.findIndex(y=>y.value===s),h=p.slice();return h[f].left--,h}),Te.update(p=>p+m*1),Ye.update(p=>p+1),n(0,r=!0)}return t.$$set=a=>{"checked"in a&&n(1,c=a.checked),"hasSubmitted"in a&&n(0,r=a.hasSubmitted)},[r,c,i,l]}class Et extends D{constructor(e){super(),I(this,e,Bt,jt,L,{checked:1,hasSubmitted:0})}}function Ae(t){let e,n;return e=new Et({props:{checked:t[1]}}),e.$on("close-modal",t[3]),{c(){H(e.$$.fragment)},m(o,i){Y(e,o,i),n=!0},p(o,i){const c={};i&2&&(c.checked=o[1]),e.$set(c)},i(o){n||(O(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){q(e,o)}}}function Ot(t){let e,n,o,i,c,r,l,a;n=new rt({}),i=new kt({}),i.$on("open-modal",t[2]);let s=t[0]&&Ae(t);return{c(){e=_("div"),H(n.$$.fragment),o=b(),H(i.$$.fragment),c=b(),s&&s.c(),r=b(),l=_("footer"),l.innerHTML=`Challenge by <a href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by
		<a href="https://www.frontendmentor.io/profile/sahand-masoleh" target="_blank" rel="noopener noreferrer">Sahand Masoleh</a>`,u(l,"class","footer"),u(e,"class","app")},m(m,p){B(m,e,p),Y(n,e,null),d(e,o),Y(i,e,null),d(e,c),s&&s.m(e,null),d(e,r),d(e,l),a=!0},p(m,[p]){m[0]?s?(s.p(m,p),p&1&&O(s,1)):(s=Ae(m),s.c(),O(s,1),s.m(e,r)):s&&(_e(),A(s,1,1,()=>{s=null}),pe())},i(m){a||(O(n.$$.fragment,m),O(i.$$.fragment,m),O(s),a=!0)},o(m){A(n.$$.fragment,m),A(i.$$.fragment,m),A(s),a=!1},d(m){m&&C(e),q(n),q(i),s&&s.d()}}}function At(t,e,n){let{isModalOpen:o=!1}=e,{checked:i}=e;function c(l){var a;n(1,i=(a=l.detail)==null?void 0:a.value),n(0,o=!0),document.querySelector("body").style.overflow="hidden"}function r(){n(0,o=!1),document.querySelector("body").style.overflow="auto"}return t.$$set=l=>{"isModalOpen"in l&&n(0,o=l.isModalOpen),"checked"in l&&n(1,i=l.checked)},[o,i,c,r]}class Pt extends D{constructor(e){super(),I(this,e,At,Ot,L,{isModalOpen:0,checked:1})}}new Pt({target:document.getElementById("body")});
