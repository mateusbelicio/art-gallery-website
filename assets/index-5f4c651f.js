import{s,r as c,j as e,n as j,L as k}from"./index-b48a4dff.js";import{m as W,S as a,H as d,P as b,B as $}from"./index-d4059ad7.js";import{F as P}from"./index-636c1a01.js";const v={mobile:320,tablet:640,desktop:960};function B(i,o){return o?`(max-width: ${v[i]/16}em)`:`(min-width: ${v[i]/16}em)`}const G=s.picture`
  height: 100%;
  user-select: none;
  overflow: hidden;
`,H={idle:{opacity:1,transition:{duration:1,ease:"easeOut"}},loading:{opacity:[.5,1],filter:"blur(8px)",transition:{repeat:1/0,repeatType:"mirror",duration:2,ease:"easeInOut"}}};function m({srcSet:i,srcFallback:o,alt:I,lazy:E=!0}){const[w,g]=c.useState(!1),t=c.useRef(null),l=c.useRef(o);c.useEffect(()=>(window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[]);const x=()=>{var r,n;l.current=((r=t.current)==null?void 0:r.currentSrc)||"",g(((n=t.current)==null?void 0:n.complete)||!1)},y=()=>{var r,n,f;l.current!==((r=t.current)==null?void 0:r.currentSrc)?(g(!1),l.current=((n=t.current)==null?void 0:n.currentSrc)||l.current):g(((f=t.current)==null?void 0:f.complete)||!1)};return e.jsxs(G,{$isLoading:!w,children:[i.map(r=>e.jsx("source",{onLoad:x,media:B(r.device),type:r.type||"",srcSet:r.src+(r.srcDensity?`, ${r.srcDensity} 2x`:"")},r.src)),e.jsx(W.img,{ref:t,src:o,alt:I,onLoad:x,loading:E?"lazy":"eager",variants:H,initial:"idle",animate:w?"idle":"loading"})]})}const u=s.article`
  ${({$black:i})=>i?j`
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
        `:j`
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
`;u.defaultProps={$black:!1};const D=s.div`
  display: grid;
  grid-template-columns: inherit;
  column-gap: inherit;

  row-gap: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 40em) {
    grid-template-rows:
      minmax(min-content, 25rem)
      minmax(min-content, 19.5625rem)
      minmax(min-content, 23.5625rem);
    row-gap: 0.625rem;

    & > article {
      display: grid;
      place-content: center;
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
`,A="/art-gallery-website/assets/image-grid-1-be35930b.jpg",S="/art-gallery-website/assets/image-grid-1-37c76646.webp",z="/art-gallery-website/assets/image-grid-1@2x-3ecffd3b.webp",L="/art-gallery-website/assets/image-grid-1-a3e623df.webp",O="/art-gallery-website/assets/image-grid-1@2x-ada06ce4.webp",M="/art-gallery-website/assets/image-grid-2-e5f639ca.jpg",R="/art-gallery-website/assets/image-grid-2-d2c67047.webp",F="/art-gallery-website/assets/image-grid-2@2x-1f620588.webp",T="/art-gallery-website/assets/image-grid-2-ac58c510.webp",C="/art-gallery-website/assets/image-grid-2@2x-b9286df7.webp",J="/art-gallery-website/assets/image-grid-3-2d036211.jpg",K="/art-gallery-website/assets/image-grid-3-94779e93.webp",N="/art-gallery-website/assets/image-grid-3@2x-ae4d77c8.webp",V="/art-gallery-website/assets/image-grid-3-c2b88159.webp",Y="/art-gallery-website/assets/image-grid-3@2x-ee2e835c.webp";function q(){return e.jsx(a,{paddingBlock:120,paddingBlockMedia:{desktop:180},children:e.jsx(a.Container,{children:e.jsxs(a.Wrapper,{$grid:!0,children:[e.jsx(d,{as:"h2",size:"lg",className:"sr-only",children:"About"}),e.jsxs(D,{children:[e.jsx(m,{srcFallback:A,alt:"Art gallery image 1",srcSet:[{device:"tablet",type:"image/webp",src:L,srcDensity:O},{device:"mobile",type:"image/webp",src:S,srcDensity:z}]}),e.jsxs(u,{children:[e.jsx(d,{as:"h3",size:"md",transform:"uppercase",children:"Your day at the gallery"}),e.jsx(b,{size:"base",children:"Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process."})]}),e.jsx(m,{srcFallback:M,alt:"Art gallery image 2",srcSet:[{device:"tablet",type:"image/webp",src:T,srcDensity:C},{device:"mobile",type:"image/webp",src:R,srcDensity:F}]}),e.jsx(m,{srcFallback:J,alt:"Art gallery image 3",srcSet:[{device:"tablet",type:"image/webp",src:V,srcDensity:Y},{device:"mobile",type:"image/webp",src:K,srcDensity:N}]}),e.jsxs(u,{$black:!0,children:[e.jsx(d,{as:"h3",size:"md",transform:"uppercase",children:"Come & be inspired"}),e.jsx(b,{size:"base",children:"We’re excited to welcome you to our gallery and see how our collections influence you."})]})]})]})})})}const p={maxWidth:"none",maxHeight:240},_={maxWidth:"none",maxHeight:700},h={maxWidth:540,maxHeight:800},Q=s(a.Wrapper)`
  row-gap: 2rem;
`,U=s.div`
  height: ${`${p.maxHeight/16}rem`};
  background-color: #fff;

  img {
    position: absolute;
    inset-inline: 0;

    width: 100%;
    height: 100%;
    max-height: ${`${p.maxHeight/16}rem`};
    max-width: ${p.maxWidth};
    object-fit: cover;
    object-position: bottom;
  }

  @media (min-width: 40em) {
    grid-column-end: 8;
    grid-row: 1;
    height: ${`${_.maxHeight/16}rem`};

    position: relative;
    z-index: -1;

    img {
      inset-inline: initial;
      right: 0;
      width: calc(100% + 2.5rem);
      max-height: ${`${_.maxHeight/16}rem`};
    }
  }

  @media (min-width: 60em) {
    height: ${`${h.maxHeight/16}rem`};
    grid-column: 4 / -4;
    background-color: var(--color-neutral-100);

    img {
      max-height: ${`${h.maxHeight/16}rem`};
      max-width: ${`${h.maxWidth/16}rem`};
      width: 100%;
    }
  }
`,X=s.div`
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
`,Z="/art-gallery-website/assets/image-hero-75393153.jpg",ee="/art-gallery-website/assets/image-hero-335b136f.webp",re="/art-gallery-website/assets/image-hero@2x-ff9276a5.webp",ie="/art-gallery-website/assets/image-hero-048a7edf.webp",te="/art-gallery-website/assets/image-hero@2x-f0c3dc8c.webp",ae="/art-gallery-website/assets/image-hero-31cd7e89.webp",se="/art-gallery-website/assets/image-hero@2x-5029cc83.webp";function ne(){return e.jsx(a,{paddingBlock:0,children:e.jsx(a.Container,{children:e.jsxs(Q,{$grid:!0,children:[e.jsx(U,{children:e.jsx(m,{srcFallback:Z,alt:"Two people looking at a photograph of an old lady in an art gallery",lazy:!1,srcSet:[{device:"desktop",src:ee,srcDensity:re,type:"image/webp"},{device:"tablet",src:ie,srcDensity:te,type:"image/webp"},{device:"mobile",src:ae,srcDensity:se,type:"image/webp"}]})}),e.jsxs(X,{children:[e.jsxs(d,{as:"h1",size:"xl",transform:"uppercase",children:["Modern ",e.jsx("br",{})," Art Gallery"]}),e.jsxs("div",{children:[e.jsx(b,{size:"base",children:"The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out."}),e.jsx($,{direction:"right",as:k,href:"/location",children:"Our location"})]})]})]})})})}function de(){return e.jsxs(e.Fragment,{children:[e.jsxs("main",{children:[e.jsx(ne,{}),e.jsx(q,{})]}),e.jsx(P,{colorDark:!0})]})}export{de as default};
