"use strict";(self.webpackChunkproduct_knowledge_tractusx_github_io=self.webpackChunkproduct_knowledge_tractusx_github_io||[]).push([[3085],{14247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(67294),l=t(86010),r=t(10833),c=t(35281),i=t(56866),o=t(83140),s=t(39407);const m="mdxPageWrapper_j9I6";function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return a.createElement(r.FG,{className:(0,l.Z)(f??c.k.wrapper.mdxPages,c.k.page.mdxPage)},a.createElement(r.d,{title:t,description:d}),a.createElement(i.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m)},a.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},a.createElement("article",null,a.createElement(o.Z,null,a.createElement(n,null)))),!v&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},39407:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(87462),l=t(67294),r=t(86010),c=t(38011);const i="tableOfContents_bqdL";function o(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",n)},l.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},38011:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),l=t(67294),r=t(86668),c=t(39665),i=t(96841);function o(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const s=l.memo(o);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const v=(0,r.L)(),g=d??v.tableOfContents.minHeadingLevel,h=u??v.tableOfContents.maxHeadingLevel,L=(0,c.b)({toc:n,minHeadingLevel:g,maxHeadingLevel:h}),p=(0,l.useMemo)((()=>{if(o&&m)return{linkClassName:o,linkActiveClassName:m,minHeadingLevel:g,maxHeadingLevel:h}}),[o,m,g,h]);return(0,i.S)(p),l.createElement(s,(0,a.Z)({toc:L,className:t,linkClassName:o},f))}},96841:(e,n,t)=>{t.d(n,{S:()=>o});var a=t(67294),l=t(86668);function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function i(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function o(e){const n=(0,a.useRef)(void 0),t=i();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=c(o,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}},39665:(e,n,t)=>{t.d(n,{a:()=>r,b:()=>i});var a=t(67294);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function r(e){return(0,a.useMemo)((()=>l(e)),[e])}function c(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>c({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}}}]);