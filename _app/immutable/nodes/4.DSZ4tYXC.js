import{s as P,n as L,o as se,f as le,d as H}from"../chunks/scheduler.Cewbzyqj.js";import{S as V,i as U,e as m,c as d,v as $,D as k,g as v,d as r,a as w,m as u,w as te,C as q,s as A,k as W,f as S,l as Y,n as j,h as _,q as F,o as K,r as Q,t as ae,b as ie}from"../chunks/index.CDFuW_O7.js";import{e as G}from"../chunks/each.D6YF6ztN.js";/* empty css                                                      */function ne(n){let s,i='<swiper-slide><img src="/assets/home/staff/Vissotto.png" alt="" class="svelte-1t6i3l7"/> <p class="svelte-1t6i3l7"><strong>GUILHERME VISSOTTO</strong><br/>DESIGN</p></swiper-slide> <swiper-slide><img src="/assets/home/staff/Marina.png" alt="" class="svelte-1t6i3l7"/> <p class="svelte-1t6i3l7"><strong>MARINA BANKER</strong><br/>ILLUSTRATION</p></swiper-slide> <swiper-slide><img src="/assets/home/staff/Teo.png" alt="" class="svelte-1t6i3l7"/> <p class="svelte-1t6i3l7"><strong>TEODORA RIBEIRO</strong><br/>COPYWRIGHTING</p></swiper-slide> <swiper-slide><img src="/assets/home/staff/Fred.png" alt="" class="svelte-1t6i3l7"/> <p class="svelte-1t6i3l7"><strong>FREDERICO BAZANO</strong><br/>WEB DEVELOPMENT</p></swiper-slide> <swiper-slide><img src="/assets/home/staff/Vissotto.png" alt="" class="svelte-1t6i3l7"/> <p class="svelte-1t6i3l7"><strong>GUILHERME VISSOTTO</strong><br/>DESIGN</p></swiper-slide> <swiper-slide><img src="/assets/home/staff/Marina.png" alt="" class="svelte-1t6i3l7"/> <p class="svelte-1t6i3l7"><strong>MARINA BANKER</strong><br/>ILLUSTRATION</p></swiper-slide> <swiper-slide><img src="/assets/home/staff/Teo.png" alt="" class="svelte-1t6i3l7"/> <p class="svelte-1t6i3l7"><strong>TEODORA RIBEIRO</strong><br/>COPYWRIGHTING</p></swiper-slide> <swiper-slide><img src="/assets/home/staff/Fred.png" alt="" class="svelte-1t6i3l7"/> <p class="svelte-1t6i3l7"><strong>FREDERICO BAZANO</strong><br/>WEB DEVELOPMENT</p></swiper-slide>';return{c(){s=m("swiper-container"),s.innerHTML=i,this.h()},l(e){s=d(e,"SWIPER-CONTAINER",{init:!0,class:!0,"data-svelte-h":!0}),$(s)!=="svelte-13vwdz8"&&(s.innerHTML=i),this.h()},h(){k(s,"init","false"),k(s,"class","swiper-wrapper")},m(e,l){v(e,s,l),n[1](s)},p:L,i:L,o:L,d(e){e&&r(s),n[1](null)}}}function re(n,s,i){let e;se(()=>{setTimeout(()=>{Object.assign(e,{slidesPerView:1.6,spaceBetween:20,loop:!0,autoplay:{delay:200},speed:2500,allowTouchMove:!1,breakpoints:{540:{slidesPerView:2.6,spaceBetween:20},992:{slidesPerView:3.6,spaceBetween:30}}}),e.initialize()},0)});function l(o){le[o?"unshift":"push"](()=>{e=o,i(0,e)})}return[e,l]}class oe extends V{constructor(s){super(),U(this,s,re,ne,P,{})}}function Z(n,s,i){const e=n.slice();return e[2]=s[i],e[4]=i,e}function J(n){let s,i;return{c(){s=m("img"),this.h()},l(e){s=d(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){H(s.src,i=n[2])||u(s,"src",i),u(s,"alt",""),u(s,"class","svelte-ufcug9"),q(s,"active",n[4]==n[0])},m(e,l){v(e,s,l)},p(e,l){l&1&&q(s,"active",e[4]==e[0])},d(e){e&&r(s)}}}function ce(n){let s,i=G(n[1]),e=[];for(let l=0;l<i.length;l+=1)e[l]=J(Z(n,i,l));return{c(){s=m("section");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){s=d(l,"SECTION",{class:!0});var o=w(s);for(let a=0;a<e.length;a+=1)e[a].l(o);o.forEach(r),this.h()},h(){u(s,"class","hero svelte-ufcug9")},m(l,o){v(l,s,o);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(s,null)},p(l,[o]){if(o&3){i=G(l[1]);let a;for(a=0;a<i.length;a+=1){const b=Z(l,i,a);e[a]?e[a].p(b,o):(e[a]=J(b),e[a].c(),e[a].m(s,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=i.length}},i:L,o:L,d(l){l&&r(s),te(e,l)}}}function pe(n,s,i){const e=["/assets/home/hero/01.png","/assets/home/hero/02.png","/assets/home/hero/03.png","/assets/home/hero/04.png","/assets/home/hero/05.png"];let l=0;return se(()=>{setInterval(()=>{i(0,l=(l+1)%e.length)},2e3)}),[l,e]}class ue extends V{constructor(s){super(),U(this,s,pe,ce,P,{})}}function X(n,s,i){const e=n.slice();return e[2]=s[i],e}function ee(n){let s,i,e,l,o,a,b,C,f,E,y=n[2].name+"",N,R,g,z="EM BREVE",I;return{c(){s=m("li"),i=m("div"),e=m("img"),o=A(),a=m("img"),C=A(),f=m("div"),E=m("strong"),N=ae(y),R=A(),g=m("span"),g.textContent=z,I=A(),this.h()},l(D){s=d(D,"LI",{});var T=w(s);i=d(T,"DIV",{class:!0});var O=w(i);e=d(O,"IMG",{src:!0,alt:!0,class:!0}),o=S(O),a=d(O,"IMG",{src:!0,alt:!0,class:!0}),O.forEach(r),C=S(T),f=d(T,"DIV",{class:!0});var c=w(f);E=d(c,"STRONG",{});var t=w(E);N=ie(t,y),t.forEach(r),R=S(c),g=d(c,"SPAN",{"data-svelte-h":!0}),$(g)!=="svelte-tm7ihq"&&(g.textContent=z),c.forEach(r),I=S(T),T.forEach(r),this.h()},h(){H(e.src,l="/assets/home/featured/"+n[2].slug+"_01.png")||u(e,"src",l),u(e,"alt",""),u(e,"class","svelte-el6yzh"),H(a.src,b="/assets/home/featured/"+n[2].slug+"_02.png")||u(a,"src",b),u(a,"alt",""),u(a,"class","svelte-el6yzh"),u(i,"class","images svelte-el6yzh"),u(f,"class","bottom svelte-el6yzh")},m(D,T){v(D,s,T),_(s,i),_(i,e),_(i,o),_(i,a),_(s,C),_(s,f),_(f,E),_(E,N),_(f,R),_(f,g),_(s,I)},p:L,d(D){D&&r(s)}}}function he(n){let s,i='<h1 class="svelte-el6yzh">EVERYTHING <br/> <span class="no-break">IS DESIGN</span>, <span class="no-break">WE DESIGN</span> <br/> EVERYTHING <br/> ©</h1>',e,l,o,a,b=`<div class="left svelte-el6yzh"><h2 class="svelte-el6yzh">BEYOND STANDARDS,<br/>
            CREATING TIMELESS BRANDS</h2> <span class="arrow svelte-el6yzh">↓</span></div> <div class="right svelte-el6yzh"><p class="svelte-el6yzh">Com mais de 10 anos de experiência, formamos um time colaborativo, dinâmico e ágil que atua de ponta a ponta em processos completos como design, ilustração, redação e web design. Desenvolvemos cases que externalizam a essência dos propósitos, aliando beleza, planejamento &amp; exclusividade. Nossos trabalhos estão presentes em grandes capitais e já conquistamos mais de 15 países, lançando mais de 150 marcas impactantes e alcançando uma diversidade incrível de nichos. <br/><br/> Muito além da estética, o design planejado é um dos primeiros e principais elementos fundamentais da sua estratégia de branding.</p> <div class="middle svelte-el6yzh"><span class="svelte-el6yzh">BRASIL &amp; WORLDWIDE</span> <span class="svelte-el6yzh">+150 PROJETOS</span> <span class="svelte-el6yzh">+10.000 ALUNOS</span></div> <ul class="services svelte-el6yzh"><li>LOGO</li> <li>BRAND IDENTITY</li> <li>ART DIRECTION</li> <li>STRATEGY</li> <li>VERBAL GUIDES</li> <li>BRANDING</li> <li>NAMING</li> <li>WEB</li> <li>PACKAGING</li> <li>ILLUSTRATION</li> <li>3D</li> <li>MOTION</li></ul></div>`,C,f,E,y,N,R,g,z,I,D=`<div class="container svelte-el6yzh"><p class="svelte-el6yzh">LET’S CREATE A NEW CHAPTER<br class="desktop-only"/>
            FOR YOUR COMPANY</p></div>`,T;l=new ue({});let O=G(n[0]),c=[];for(let t=0;t<O.length;t+=1)c[t]=ee(X(n,O,t));return g=new oe({}),{c(){s=m("section"),s.innerHTML=i,e=A(),W(l.$$.fragment),o=A(),a=m("section"),a.innerHTML=b,C=A(),f=m("section"),E=m("ul");for(let t=0;t<c.length;t+=1)c[t].c();y=A(),N=m("section"),R=m("div"),W(g.$$.fragment),z=A(),I=m("section"),I.innerHTML=D,this.h()},l(t){s=d(t,"SECTION",{class:!0,"data-svelte-h":!0}),$(s)!=="svelte-o78j5i"&&(s.innerHTML=i),e=S(t),Y(l.$$.fragment,t),o=S(t),a=d(t,"SECTION",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-1fqfzjd"&&(a.innerHTML=b),C=S(t),f=d(t,"SECTION",{class:!0});var h=w(f);E=d(h,"UL",{class:!0});var p=w(E);for(let B=0;B<c.length;B+=1)c[B].l(p);p.forEach(r),h.forEach(r),y=S(t),N=d(t,"SECTION",{class:!0});var M=w(N);R=d(M,"DIV",{class:!0});var x=w(R);Y(g.$$.fragment,x),x.forEach(r),M.forEach(r),z=S(t),I=d(t,"SECTION",{class:!0,"data-svelte-h":!0}),$(I)!=="svelte-jsev4u"&&(I.innerHTML=D),this.h()},h(){u(s,"class","insert1 gutter svelte-el6yzh"),u(a,"class","infocard svelte-el6yzh"),u(E,"class","featured-grid svelte-el6yzh"),u(f,"class","featured svelte-el6yzh"),u(R,"class","container svelte-el6yzh"),u(N,"class","carousel svelte-el6yzh"),u(I,"class","ending svelte-el6yzh")},m(t,h){v(t,s,h),v(t,e,h),j(l,t,h),v(t,o,h),v(t,a,h),v(t,C,h),v(t,f,h),_(f,E);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(E,null);v(t,y,h),v(t,N,h),_(N,R),j(g,R,null),v(t,z,h),v(t,I,h),T=!0},p(t,[h]){if(h&1){O=G(t[0]);let p;for(p=0;p<O.length;p+=1){const M=X(t,O,p);c[p]?c[p].p(M,h):(c[p]=ee(M),c[p].c(),c[p].m(E,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=O.length}},i(t){T||(F(l.$$.fragment,t),F(g.$$.fragment,t),T=!0)},o(t){K(l.$$.fragment,t),K(g.$$.fragment,t),T=!1},d(t){t&&(r(s),r(e),r(o),r(a),r(C),r(f),r(y),r(N),r(z),r(I)),Q(l,t),te(c,t),Q(g)}}}function me(n,s,i){let{data:e}=s,l=[{name:"RITZMER",slug:"Ritzmer"},{name:"IQONIC",slug:"Iqonic"},{name:"TUPAN",slug:"Tupan"},{name:"ALBUQUERQUE & PACHECO",slug:"Albuquerque"},{name:"NORWIE",slug:"Norwie"},{name:"SENIOR BANK",slug:"Senior"},{name:"MAURO STUDIOS",slug:"Mauro"},{name:"TAKEDOWN LEGENDS",slug:"TDL"}];return n.$$set=o=>{"data"in o&&i(1,e=o.data)},[l,e]}class Ee extends V{constructor(s){super(),U(this,s,me,he,P,{data:1})}}export{Ee as component};
