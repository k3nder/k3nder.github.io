import{r as c,R as i}from"./index.CSLRt44l.js";var f={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=c,_=Symbol.for("react.element"),d=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,m=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,s){var r,n={},o=null,a=null;s!==void 0&&(o=""+s),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)y.call(e,r)&&!v.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:_,type:t,key:o,ref:a,props:n,_owner:m.current}}l.Fragment=d;l.jsx=p;l.jsxs=p;f.exports=l;var x=f.exports;const b=({text:t})=>{const[e,s]=i.useState("");return i.useEffect(()=>{let r=0;const n=setInterval(()=>{r<t.length-1?(e!=t&&s(o=>o+t[r]),r++):clearInterval(n)},100);return()=>clearInterval(n)},[t]),x.jsx("p",{className:'text-lg font-bold border-b-2 border-gray-500 inline-block"',children:e})};export{b as default};
