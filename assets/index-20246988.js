import{r as d,s as b,j as e,n as _,L as B}from"./index-a537efd6.js";import{i as $,m as E,S as u,H as f,P as v,B as P}from"./index-4157d496.js";import{F as G}from"./index-4b5669d5.js";function H(i,r,s){var o;if(typeof i=="string"){let a=document;r&&($(!!r.current),a=r.current),s?((o=s[i])!==null&&o!==void 0||(s[i]=a.querySelectorAll(i)),i=s[i]):i=a.querySelectorAll(i)}else i instanceof Element&&(i=[i]);return Array.from(i||[])}const A={some:0,all:1};function S(i,r,{root:s,margin:o,amount:a="some"}={}){const c=H(i),n=new WeakMap,m=p=>{p.forEach(t=>{const l=n.get(t.target);if(t.isIntersecting!==!!l)if(t.isIntersecting){const w=r(t);typeof w=="function"?n.set(t.target,w):g.unobserve(t.target)}else l&&(l(t),n.delete(t.target))})},g=new IntersectionObserver(m,{root:s,rootMargin:o,threshold:typeof a=="number"?a:A[a]});return c.forEach(p=>g.observe(p)),()=>g.disconnect()}function C(i,{root:r,margin:s,amount:o,once:a=!1}={}){const[c,n]=d.useState(!1);return d.useEffect(()=>{if(!i.current||a&&c)return;const m=()=>(n(!0),a?void 0:()=>n(!1)),g={root:r&&r.current||void 0,margin:s,amount:o};return S(i.current,m,g)},[r,i,s,a]),c}const k={mobile:320,tablet:640,desktop:960};function D(i,r){return r?`(max-width: ${k[i]/16}em)`:`(min-width: ${k[i]/16}em)`}const z=b.picture`
  height: 100%;
  user-select: none;
  overflow: hidden;
`,L={idle:{opacity:1,transition:{duration:1,ease:"easeOut"}},loading:{opacity:[.5,1],filter:"blur(8px)",transition:{repeat:1/0,repeatType:"mirror",duration:2,ease:"easeInOut"}}};function x({srcSet:i,srcFallback:r,alt:s,lazy:o=!0}){const[a,c]=d.useState(!1),n=d.useRef(null),m=d.useRef(r);d.useEffect(()=>(window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)),[]);const g=()=>{var t,l;m.current=((t=n.current)==null?void 0:t.currentSrc)||"",c(((l=n.current)==null?void 0:l.complete)||!1)},p=()=>{var t,l,w;m.current!==((t=n.current)==null?void 0:t.currentSrc)?(c(!1),m.current=((l=n.current)==null?void 0:l.currentSrc)||m.current):c(((w=n.current)==null?void 0:w.complete)||!1)};return e.jsxs(z,{$isLoading:!a,children:[i.map(t=>e.jsx("source",{onLoad:g,media:D(t.device),type:t.type||"",srcSet:t.src+(t.srcDensity?`, ${t.srcDensity} 2x`:"")},t.src)),e.jsx(E.img,{ref:n,src:r,alt:s,onLoad:g,loading:o?"lazy":"eager",variants:L,initial:"idle",animate:a?"idle":"loading"})]})}const I=b.article`
  ${({$black:i})=>i?_`
          background-color: var(--color-neutral-900);
          color: var(--color-neutral-100);
          padding: 3rem 1.5rem;

          ::selection {
            background-color: var(--color-brand-400);
            color: var(--color-neutral-900);
          }

          @media (min-width: 40em) {
            padding: 2rem 1.75rem;
          }

          @media (min-width: 60em) {
            padding: 3rem;
          }
        `:_`
          background-color: var(--color-neutral-100);
          color: var(--color-neutral-900);
          padding-block: 1rem;
        `};

  & > * {
    color: inherit;
  }

  & > :not(:first-child) {
    margin-top: 1.5rem;

    @media (min-width: 60em) {
      margin-top: 2rem;
    }
  }
`;I.defaultProps={$black:!1};const O=b.div`
  display: grid;
  grid-template-columns: inherit;
  column-gap: inherit;

  row-gap: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    transition: scale 350ms;

    &:hover {
      scale: 1.05;
    }
  }

  @media (min-width: 40em) {
    grid-template-rows:
      minmax(min-content, 25rem)
      minmax(min-content, 19.5625rem)
      minmax(min-content, 23.5625rem);
    row-gap: 0.625rem;

    article {
      display: grid;
      place-content: center;
      height: 100%;
    }

    & > :nth-child(1) {
      grid-area: 1 / 6 / span 1 / span 7;
    }
    & > :nth-child(2) {
      grid-area: 1 / 1 / span 1 / span 4;
    }
    & > :nth-child(3) {
      grid-area: 2 / 1 / span 2 / span 7;
    }
    & > :nth-child(4) {
      grid-area: 2 / 8 / span 1 / span 5;
    }
    & > :nth-child(5) {
      grid-area: 3 / 8 / span 1 / span 5;
    }
  }

  @media (min-width: 60em) {
    row-gap: 1.875rem;

    & > :nth-child(1) {
      grid-area: 1 / 6 / span 1 / span 7;
    }
    & > :nth-child(2) {
      grid-area: 1 / 1 / span 1 / span 4;
    }
    & > :nth-child(3) {
      grid-area: 2 / 1 / span 2 / span 7;
    }
    & > :nth-child(4) {
      grid-area: 2 / 8 / span 1 / span 5;
    }
    & > :nth-child(5) {
      grid-area: 3 / 8 / span 1 / span 5;
    }
  }
`,M="/art-gallery-website/assets/image-grid-1-be35930b.jpg",R="/art-gallery-website/assets/image-grid-1-37c76646.webp",F="/art-gallery-website/assets/image-grid-1@2x-3ecffd3b.webp",T="/art-gallery-website/assets/image-grid-1-a3e623df.webp",V="/art-gallery-website/assets/image-grid-1@2x-ada06ce4.webp",J="/art-gallery-website/assets/image-grid-2-e5f639ca.jpg",q="/art-gallery-website/assets/image-grid-2-d2c67047.webp",K="/art-gallery-website/assets/image-grid-2@2x-1f620588.webp",N="/art-gallery-website/assets/image-grid-2-ac58c510.webp",Y="/art-gallery-website/assets/image-grid-2@2x-b9286df7.webp",Q="/art-gallery-website/assets/image-grid-3-2d036211.jpg",U="/art-gallery-website/assets/image-grid-3-94779e93.webp",X="/art-gallery-website/assets/image-grid-3@2x-ae4d77c8.webp",Z="/art-gallery-website/assets/image-grid-3-c2b88159.webp",ee="/art-gallery-website/assets/image-grid-3@2x-ee2e835c.webp",ie={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:.5,staggerChildren:.35,delayChildren:.5}}},te={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};function re({children:i,htmlElement:r="div"}){const s=E[r];return e.jsx(s,{variants:te,children:i})}function h({children:i,htmlElement:r="div"}){const s=E[r],o=d.useRef(null),a=C(o),[c,n]=d.useState("hidden");return d.useEffect(()=>{a&&n("show")},[a]),e.jsx(s,{ref:o,variants:ie,initial:"hidden",animate:c,children:i})}h.Child=re;function ae(){return e.jsx(u,{paddingBlock:120,paddingBlockMedia:{desktop:180},children:e.jsx(u.Container,{children:e.jsx(h,{children:e.jsxs(u.Wrapper,{$grid:!0,children:[e.jsx(f,{as:"h2",size:"lg",className:"sr-only",children:"About"}),e.jsxs(O,{children:[e.jsx(h.Child,{children:e.jsx(x,{srcFallback:M,alt:"Art gallery image 1",srcSet:[{device:"tablet",type:"image/webp",src:T,srcDensity:V},{device:"mobile",type:"image/webp",src:R,srcDensity:F}]})}),e.jsx(h.Child,{children:e.jsxs(I,{children:[e.jsx(f,{as:"h3",size:"md",transform:"uppercase",children:"Your day at the gallery"}),e.jsx(v,{size:"base",children:"Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process."})]})}),e.jsx(h.Child,{children:e.jsx(x,{srcFallback:J,alt:"Art gallery image 2",srcSet:[{device:"tablet",type:"image/webp",src:N,srcDensity:Y},{device:"mobile",type:"image/webp",src:q,srcDensity:K}]})}),e.jsx(h.Child,{children:e.jsx(x,{srcFallback:Q,alt:"Art gallery image 3",srcSet:[{device:"tablet",type:"image/webp",src:Z,srcDensity:ee},{device:"mobile",type:"image/webp",src:U,srcDensity:X}]})}),e.jsx(h.Child,{children:e.jsxs(I,{$black:!0,children:[e.jsx(f,{as:"h3",size:"md",transform:"uppercase",children:"Come & be inspired"}),e.jsx(v,{size:"base",children:"We’re excited to welcome you to our gallery and see how our collections influence you."})]})})]})]})})})})}const y={maxWidth:"none",maxHeight:240},W={maxWidth:"none",maxHeight:700},j={maxWidth:540,maxHeight:800},se=b(u.Wrapper)`
  row-gap: 2rem;
`,ne=b.div`
  height: ${`${y.maxHeight/16}rem`};
  background-color: #fff;

  img {
    position: absolute;
    inset-inline: 0;

    width: 100%;
    height: 100%;
    max-height: ${`${y.maxHeight/16}rem`};
    max-width: ${y.maxWidth};
    object-fit: cover;
    object-position: bottom;
  }

  @media (min-width: 40em) {
    grid-column-end: 8;
    grid-row: 1;
    height: ${`${W.maxHeight/16}rem`};

    position: relative;
    z-index: -1;

    img {
      inset-inline: initial;
      right: 0;
      width: calc(100% + 2.5rem);
      max-height: ${`${W.maxHeight/16}rem`};
    }
  }

  @media (min-width: 60em) {
    height: ${`${j.maxHeight/16}rem`};
    grid-column: 4 / -4;
    background-color: var(--color-neutral-100);

    img {
      max-height: ${`${j.maxHeight/16}rem`};
      max-width: ${`${j.maxWidth/16}rem`};
      width: 100%;
    }
  }
`,oe=b.div`
  display: grid;
  row-gap: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: inherit;
    justify-content: start;
    align-items: start;
  }

  @media (min-width: 40em) {
    grid-column-start: 7;
    row-gap: 3rem;

    grid-row: 1;
    align-self: center;
  }

  @media (min-width: 60em) {
    grid-column-start: 1;
    grid-template-columns: inherit;
    column-gap: inherit;
    align-self: start;
    padding-top: ${`${190/16}rem`};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 50%;
      width: 50%;
      height: 100%;
      background-color: var(--color-neutral-900);
      z-index: -20;
    }

    h1 {
      grid-column: span 6;
      mix-blend-mode: difference;
      color: var(--color-neutral-100);
      white-space: nowrap;
    }

    & > div {
      grid-column: 9 / -1;
      gap: 4rem;
      max-width: 21.875rem;
    }
  }
`,ce="/art-gallery-website/assets/image-hero-75393153.jpg",le="/art-gallery-website/assets/image-hero-335b136f.webp",de="/art-gallery-website/assets/image-hero@2x-ff9276a5.webp",me="/art-gallery-website/assets/image-hero-048a7edf.webp",ge="/art-gallery-website/assets/image-hero@2x-f0c3dc8c.webp",he="/art-gallery-website/assets/image-hero-31cd7e89.webp",pe="/art-gallery-website/assets/image-hero@2x-5029cc83.webp";function ue(){return e.jsx(u,{paddingBlock:0,children:e.jsx(u.Container,{children:e.jsxs(se,{$grid:!0,children:[e.jsx(ne,{children:e.jsx(x,{srcFallback:ce,alt:"Two people looking at a photograph of an old lady in an art gallery",lazy:!1,srcSet:[{device:"desktop",src:le,srcDensity:de,type:"image/webp"},{device:"tablet",src:me,srcDensity:ge,type:"image/webp"},{device:"mobile",src:he,srcDensity:pe,type:"image/webp"}]})}),e.jsxs(oe,{children:[e.jsxs(f,{as:"h1",size:"xl",transform:"uppercase",children:["Modern ",e.jsx("br",{})," Art Gallery"]}),e.jsxs("div",{children:[e.jsx(v,{size:"base",children:"The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out."}),e.jsx(P,{direction:"right",as:B,href:"/location",children:"Our location"})]})]})]})})})}function xe(){return e.jsxs(e.Fragment,{children:[e.jsxs("main",{children:[e.jsx(ue,{}),e.jsx(ae,{})]}),e.jsx(G,{colorDark:!0})]})}export{xe as default};
