import{F as W,S as k,i as x,s as E,l as g,m as v,n as h,h as c,p as u,b as p,E as b,G as X,H as C,r as Q,a as I,u as R,c as N,I as P,J as $,e as U,K as D,L as M,w as T,x as V,y as B,M as Y,N as Z,f as w,t as y,B as A,O as ee,P as te,Q as se,R as ae,o as le,T as j}from"../chunks/index-763cb326.js";import{g as q}from"../chunks/fetcher-e2c40373.js";import{t as z,l as H}from"../chunks/stores-17f45a5a.js";import"../chunks/index-211dbb97.js";const re=()=>{const n=W("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session,updated:n.updated}},ne={subscribe(n){return re().page.subscribe(n)}};function G(n,e,l){const t=n.slice();return t[2]=e[l],t}function J(n){let e,l=n[2].title+"",t,s;return{c(){e=g("a"),t=Q(l),s=I(),this.h()},l(r){e=v(r,"A",{href:!0,class:!0});var a=h(e);t=R(a,l),s=N(a),a.forEach(c),this.h()},h(){u(e,"href",n[2].path),u(e,"class","navi"),P(e,"active",n[0].url.pathname===n[2].path)},m(r,a){p(r,e,a),$(e,t),$(e,s)},p(r,a){a&3&&P(e,"active",r[0].url.pathname===r[2].path)},d(r){r&&c(e)}}}function oe(n){let e,l=n[1],t=[];for(let s=0;s<l.length;s+=1)t[s]=J(G(n,l,s));return{c(){e=g("nav");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=v(s,"NAV",{class:!0});var r=h(e);for(let a=0;a<t.length;a+=1)t[a].l(r);r.forEach(c),this.h()},h(){u(e,"class","flex flex-row gap-2")},m(s,r){p(s,e,r);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(s,[r]){if(r&3){l=s[1];let a;for(a=0;a<l.length;a+=1){const i=G(s,l,a);t[a]?t[a].p(i,r):(t[a]=J(i),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:b,o:b,d(s){s&&c(e),X(t,s)}}}function ie(n,e,l){let t;return C(n,ne,r=>l(0,t=r)),[t,[{title:"Home",path:"/"},{title:"About",path:"/about"}]]}class ce extends k{constructor(e){super(),x(this,e,ie,oe,E,{})}}function ue(n){let e,l;return{c(){e=D("svg"),l=D("path"),this.h()},l(t){e=M(t,"svg",{xmlns:!0,viewBox:!0,fill:!0});var s=h(e);l=M(s,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),h(l).forEach(c),s.forEach(c),this.h()},h(){u(l,"fill-rule","evenodd"),u(l,"d","M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"),u(l,"clip-rule","evenodd"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 20 20"),u(e,"fill","currentColor")},m(t,s){p(t,e,s),$(e,l)},d(t){t&&c(e)}}}function fe(n){let e,l;return{c(){e=D("svg"),l=D("path"),this.h()},l(t){e=M(t,"svg",{xmlns:!0,viewBox:!0,fill:!0});var s=h(e);l=M(s,"path",{d:!0}),h(l).forEach(c),s.forEach(c),this.h()},h(){u(l,"d","M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 20 20"),u(e,"fill","currentColor")},m(t,s){p(t,e,s),$(e,l)},d(t){t&&c(e)}}}function he(n){let e;function l(r,a){return r[0]?fe:ue}let t=l(n),s=t(n);return{c(){s.c(),e=U()},l(r){s.l(r),e=U()},m(r,a){s.m(r,a),p(r,e,a)},p(r,[a]){t!==(t=l(r))&&(s.d(1),s=t(r),s&&(s.c(),s.m(e.parentNode,e)))},i:b,o:b,d(r){s.d(r),r&&c(e)}}}function _e(n,e,l){let t,s;return C(n,z,r=>l(1,s=r)),n.$$.update=()=>{n.$$.dirty&2&&l(0,t=s==="dark")},[t,s]}class pe extends k{constructor(e){super(),x(this,e,_e,he,E,{})}}function me(n){let e,l,t,s,r;return l=new pe({}),{c(){e=g("button"),T(l.$$.fragment)},l(a){e=v(a,"BUTTON",{});var i=h(e);V(l.$$.fragment,i),i.forEach(c)},m(a,i){p(a,e,i),B(l,e,null),t=!0,s||(r=Y(e,"click",Z(n[0])),s=!0)},p:b,i(a){t||(w(l.$$.fragment,a),t=!0)},o(a){y(l.$$.fragment,a),t=!1},d(a){a&&c(e),A(l),s=!1,r()}}}function de(n,e,l){let t,s;C(n,z,a=>l(1,s=a));function r(){t?z.set("light"):z.set("dark"),window.document.body.classList.toggle("dark")}return n.$$.update=()=>{n.$$.dirty&2&&(t=s==="dark")},[r,s]}class ge extends k{constructor(e){super(),x(this,e,de,me,E,{})}}function ve(n){let e,l,t,s,r,a;return l=new ce({}),r=new ge({}),{c(){e=g("div"),T(l.$$.fragment),t=I(),s=g("div"),T(r.$$.fragment),this.h()},l(i){e=v(i,"DIV",{class:!0});var m=h(e);V(l.$$.fragment,m),t=N(m),s=v(m,"DIV",{class:!0});var d=h(s);V(r.$$.fragment,d),d.forEach(c),m.forEach(c),this.h()},h(){u(s,"class","items-end flex align-middle gap-1"),u(e,"class","nav flex flex-row p-3 justify-between")},m(i,m){p(i,e,m),B(l,e,null),$(e,t),$(e,s),B(r,s,null),a=!0},p:b,i(i){a||(w(l.$$.fragment,i),w(r.$$.fragment,i),a=!0)},o(i){y(l.$$.fragment,i),y(r.$$.fragment,i),a=!1},d(i){i&&c(e),A(l),A(r)}}}class $e extends k{constructor(e){super(),x(this,e,null,ve,E,{})}}function be(n){let e,l,t,s,r,a,i,m,d;e=new $e({});const S=n[1].default,f=ee(S,n,n[0],null);return{c(){T(e.$$.fragment),l=I(),t=g("div"),s=g("div"),f&&f.c(),r=I(),a=g("div"),i=g("p"),m=Q("\xA92022 by dianghazy@gmail.com"),this.h()},l(o){V(e.$$.fragment,o),l=N(o),t=v(o,"DIV",{class:!0});var _=h(t);s=v(_,"DIV",{class:!0});var L=h(s);f&&f.l(L),L.forEach(c),_.forEach(c),r=N(o),a=v(o,"DIV",{class:!0});var F=h(a);i=v(F,"P",{});var O=h(i);m=R(O,"\xA92022 by dianghazy@gmail.com"),O.forEach(c),F.forEach(c),this.h()},h(){u(s,"class","text-center"),u(t,"class","relative flex h-screen w-screen flex-col items-center overflow-scroll py-5"),u(a,"class","footer text-center pb-5 shadow-lg")},m(o,_){B(e,o,_),p(o,l,_),p(o,t,_),$(t,s),f&&f.m(s,null),p(o,r,_),p(o,a,_),$(a,i),$(i,m),d=!0},p(o,[_]){f&&f.p&&(!d||_&1)&&te(f,S,o,o[0],d?ae(S,o[0],_,null):se(o[0]),null)},i(o){d||(w(e.$$.fragment,o),w(f,o),d=!0)},o(o){y(e.$$.fragment,o),y(f,o),d=!1},d(o){A(e,o),o&&c(l),o&&c(t),f&&f.d(o),o&&c(r),o&&c(a)}}}const K="https://gzback.herokuapp.com/api/";function we(n,e,l){let t;C(n,H,a=>l(2,t=a));let{$$slots:s={},$$scope:r}=e;return le(async()=>{window.document.body.classList.add("dark"),(t.logprior==0||t.logprior.length<1)&&j(H,t.logprior=await q(K+"logs/prior"),t),t.loglikelihood.length<1&&j(H,t.loglikelihood=await q(K+"logs/likelihoods"),t)}),n.$$set=a=>{"$$scope"in a&&l(0,r=a.$$scope)},[r,s]}class ze extends k{constructor(e){super(),x(this,e,we,be,E,{})}}export{ze as default};
