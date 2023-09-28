import{s,u as l,a as d,j as e,i as u}from"./index-2284a490.js";import{S as t,B as m,H as r,P as x}from"./index-7de91544.js";const f=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  padding-block: 8rem;
  min-height: 100vh;
`,h=s.div`
  text-align: center;

  & > *:not(:first-child) {
    margin-top: 0.75em;
  }
`,p=s.div`
  justify-self: start;
  position: absolute;
  left: 0;
  z-index: 50;

  @media (min-width: 40em) {
    left: initial;
  }
`;function k(){const i=l(),o=d(),a=()=>o(-1);function c(n){return u(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:typeof n=="string"?n:(console.error(n),"Unknown error")}return e.jsx("main",{children:e.jsx(t,{paddingBlock:0,color:"neutral-900",backgroundColor:"neutral-100",children:e.jsxs(t.Container,{children:[e.jsx(p,{children:e.jsx(m,{direction:"left",onClick:a,children:"Back to Home"})}),e.jsx(f,{children:e.jsxs(h,{children:[e.jsx(r,{as:"h1",size:"xl",color:"brand-400",children:"Oops!"}),e.jsx(x,{size:"base",color:"neutral-900",children:"Sorry, an unexpected error has occurred."}),e.jsx(r,{as:"h2",size:"md",color:"neutral-900",children:c(i)})]})})]})})})}export{k as default};
