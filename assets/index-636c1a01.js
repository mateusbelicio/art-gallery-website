import{s as o,j as e,n as l,L as c}from"./index-b48a4dff.js";import{I as t,S as n,H as d,P as h}from"./index-d4059ad7.js";const m=o.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.25rem;
`,i=o.a`
  transition: color 300ms;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;

  &:hover {
    color: var(--color-hover);
  }

  &:focus-visible {
    outline: 3px solid var(--color-hover);
    outline-offset: 3px;
  }
`;function g(){return e.jsxs(m,{children:[e.jsx("li",{children:e.jsx(i,{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"Link to facebook",children:e.jsx(t,{name:"facebook",width:20,height:20})})}),e.jsx("li",{children:e.jsx(i,{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"Link to instagram",children:e.jsx(t,{name:"instagram",width:20,height:20})})}),e.jsx("li",{children:e.jsx(i,{href:"https://twitter.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"Link to twitter",children:e.jsx(t,{name:"twitter",width:20,height:20})})})]})}const a=o.footer`
  --color-hover: ${({$colorDark:r})=>r?"var(--color-brand-400)":"var(--color-neutral-100)"};

  ${({$colorDark:r})=>r&&l`
      ::selection {
        background-color: var(--color-brand-400);
        color: var(--color-neutral-900);
      }
    `}
`;a.defaultProps={$colorDark:!1};const f=o.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.5rem;

  p {
    max-width: 36ch;
  }

  @media (min-width: 40em) {
    flex-direction: row;
    gap: 4rem;
    justify-content: space-between;
  }
`,p=o.div`
  display: grid;
  row-gap: 2.5rem;

  @media (min-width: 40em) {
    grid-template-columns: 8fr 4fr;
    gap: 1.875rem;
    justify-content: space-between;
    align-items: start;

    ul {
      justify-self: end;
    }
  }
`,x=o(c)`
  flex-shrink: 0;

  &:focus-visible {
    outline: 3px solid var(--color-hover);
    outline-offset: 3px;
  }

  @media (min-width: 60em) {
    img {
      height: 3.625rem;
    }
  }
`,u="/art-gallery-website/assets/logo-light-8bffda0c.svg",j="/art-gallery-website/assets/logo-dark-1e0b5681.svg";function v({colorDark:r=!1}){const s=r?u:j;return e.jsx(a,{$colorDark:r,children:e.jsx(n,{paddingBlock:48,paddingBlockMedia:{tablet:56,desktop:80},color:r?"neutral-100":"neutral-900",backgroundColor:r?"neutral-900":"brand-400",children:e.jsx(n.Container,{children:e.jsxs(p,{children:[e.jsxs(f,{children:[e.jsx(d,{as:"h4",size:"md",className:"sr-only",children:"Footer"}),e.jsx(x,{to:"/#",children:e.jsx("img",{src:s,alt:"Art Gallery logo"})}),e.jsx(h,{size:"small",color:`neutral-${r?"100":"900"}`,children:"The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA."})]}),e.jsx(g,{})]})})})})}export{v as F};
