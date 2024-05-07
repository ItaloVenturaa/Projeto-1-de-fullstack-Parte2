(self.webpackChunkprojeto2=self.webpackChunkprojeto2||[]).push([[480],{480:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Y});var s=a(43),r=a(139),o=a.n(r),n=a(173),l=a.n(n),i=a(579);const c={type:l().string,tooltip:l().bool,as:l().elementType},d=s.forwardRef(((e,t)=>{let{as:a="div",className:s,type:r="valid",tooltip:n=!1,...l}=e;return(0,i.jsx)(a,{...l,ref:t,className:o()(s,"".concat(r,"-").concat(n?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const f=d,u=s.createContext({});var m=a(852);const p=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,className:n,type:l="checkbox",isValid:c=!1,isInvalid:d=!1,as:f="input",...p}=e;const{controlId:b}=(0,s.useContext)(u);return r=(0,m.oU)(r,"form-check-input"),(0,i.jsx)(f,{...p,ref:t,type:l,id:a||b,className:o()(n,r,c&&"is-valid",d&&"is-invalid")})}));p.displayName="FormCheckInput";const b=p,x=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,htmlFor:n,...l}=e;const{controlId:c}=(0,s.useContext)(u);return a=(0,m.oU)(a,"form-check-label"),(0,i.jsx)("label",{...l,ref:t,htmlFor:n||c,className:o()(r,a)})}));x.displayName="FormCheckLabel";const y=x;const h=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,bsSwitchPrefix:n,inline:l=!1,reverse:c=!1,disabled:d=!1,isValid:p=!1,isInvalid:x=!1,feedbackTooltip:h=!1,feedback:v,feedbackType:N,className:j,style:g,title:I="",type:w="checkbox",label:k,children:C,as:F="input",...P}=e;r=(0,m.oU)(r,"form-check"),n=(0,m.oU)(n,"form-switch");const{controlId:R}=(0,s.useContext)(u),O=(0,s.useMemo)((()=>({controlId:a||R})),[R,a]),T=!C&&null!=k&&!1!==k||function(e,t){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===t))}(C,y),S=(0,i.jsx)(b,{...P,type:"switch"===w?"checkbox":w,ref:t,isValid:p,isInvalid:x,disabled:d,as:F});return(0,i.jsx)(u.Provider,{value:O,children:(0,i.jsx)("div",{style:g,className:o()(j,T&&r,l&&"".concat(r,"-inline"),c&&"".concat(r,"-reverse"),"switch"===w&&n),children:C||(0,i.jsxs)(i.Fragment,{children:[S,T&&(0,i.jsx)(y,{title:I,children:k}),v&&(0,i.jsx)(f,{type:N,tooltip:h,children:v})]})})})}));h.displayName="FormCheck";const v=Object.assign(h,{Input:b,Label:y});a(440);const N=s.forwardRef(((e,t)=>{let{bsPrefix:a,type:r,size:n,htmlSize:l,id:c,className:d,isValid:f=!1,isInvalid:p=!1,plaintext:b,readOnly:x,as:y="input",...h}=e;const{controlId:v}=(0,s.useContext)(u);return a=(0,m.oU)(a,"form-control"),(0,i.jsx)(y,{...h,type:r,size:l,ref:t,readOnly:x,id:c||v,className:o()(d,b?"".concat(a,"-plaintext"):a,n&&"".concat(a,"-").concat(n),"color"===r&&"".concat(a,"-color"),f&&"is-valid",p&&"is-invalid")})}));N.displayName="FormControl";const j=Object.assign(N,{Feedback:f}),g=s.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:r="div",...n}=e;return s=(0,m.oU)(s,"form-floating"),(0,i.jsx)(r,{ref:t,className:o()(a,s),...n})}));g.displayName="FormFloating";const I=g,w=s.forwardRef(((e,t)=>{let{controlId:a,as:r="div",...o}=e;const n=(0,s.useMemo)((()=>({controlId:a})),[a]);return(0,i.jsx)(u.Provider,{value:n,children:(0,i.jsx)(r,{...o,ref:t})})}));w.displayName="FormGroup";const k=w;var C=a(602);const F=s.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:r,column:n=!1,visuallyHidden:l=!1,className:c,htmlFor:d,...f}=e;const{controlId:p}=(0,s.useContext)(u);r=(0,m.oU)(r,"form-label");let b="col-form-label";"string"===typeof n&&(b="".concat(b," ").concat(b,"-").concat(n));const x=o()(c,r,l&&"visually-hidden",n&&b);return d=d||p,n?(0,i.jsx)(C.A,{ref:t,as:"label",className:x,htmlFor:d,...f}):(0,i.jsx)(a,{ref:t,className:x,htmlFor:d,...f})}));F.displayName="FormLabel";const P=F,R=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,id:n,...l}=e;const{controlId:c}=(0,s.useContext)(u);return a=(0,m.oU)(a,"form-range"),(0,i.jsx)("input",{...l,type:"range",ref:t,className:o()(r,a),id:n||c})}));R.displayName="FormRange";const O=R,T=s.forwardRef(((e,t)=>{let{bsPrefix:a,size:r,htmlSize:n,className:l,isValid:c=!1,isInvalid:d=!1,id:f,...p}=e;const{controlId:b}=(0,s.useContext)(u);return a=(0,m.oU)(a,"form-select"),(0,i.jsx)("select",{...p,size:n,ref:t,className:o()(l,a,r&&"".concat(a,"-").concat(r),c&&"is-valid",d&&"is-invalid"),id:f||b})}));T.displayName="FormSelect";const S=T,U=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:r="small",muted:n,...l}=e;return a=(0,m.oU)(a,"form-text"),(0,i.jsx)(r,{...l,ref:t,className:o()(s,a,n&&"text-muted")})}));U.displayName="FormText";const L=U,_=s.forwardRef(((e,t)=>(0,i.jsx)(v,{...e,ref:t,type:"switch"})));_.displayName="Switch";const z=Object.assign(_,{Input:v.Input,Label:v.Label}),V=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,children:r,controlId:n,label:l,...c}=e;return a=(0,m.oU)(a,"form-floating"),(0,i.jsxs)(k,{ref:t,className:o()(s,a),controlId:n,...c,children:[r,(0,i.jsx)("label",{htmlFor:n,children:l})]})}));V.displayName="FloatingLabel";const D=V,E={_ref:l().any,validated:l().bool,as:l().elementType},q=s.forwardRef(((e,t)=>{let{className:a,validated:s,as:r="form",...n}=e;return(0,i.jsx)(r,{...n,ref:t,className:o()(a,s&&"was-validated")})}));q.displayName="Form",q.propTypes=E;const A=Object.assign(q,{Group:k,Control:j,Floating:I,Check:v,Switch:z,Label:P,Text:L,Range:O,Select:S,FloatingLabel:D}),G=["as","disabled"];function B(e){let{tagName:t,disabled:a,href:s,target:r,rel:o,role:n,onClick:l,tabIndex:i=0,type:c}=e;t||(t=null!=s||null!=r||null!=o?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:a},d];const f=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),a?e.stopPropagation():null==l||l(e)};return"a"===t&&(s||(s="#"),a&&(s=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:a?void 0:i,href:s,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},d]}const M=s.forwardRef(((e,t)=>{let{as:a,disabled:s}=e,r=function(e,t){if(null==e)return{};var a,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,G);const[o,{tagName:n}]=B(Object.assign({tagName:a,disabled:s},r));return(0,i.jsx)(n,Object.assign({},r,o,{ref:t}))}));M.displayName="Button";const W=s.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:r="primary",size:n,active:l=!1,disabled:c=!1,className:d,...f}=e;const u=(0,m.oU)(s,"btn"),[p,{tagName:b}]=B({tagName:a,disabled:c,...f}),x=b;return(0,i.jsx)(x,{...p,...f,ref:t,disabled:c,className:o()(d,u,l&&"active",r&&"".concat(u,"-").concat(r),n&&"".concat(u,"-").concat(n),f.href&&c&&"disabled")})}));W.displayName="Button";const H=W;var K=a(423);a(612);const Y=function(){const{handleSearch:e}=(0,K.S)(),[t,a]=(0,s.useState)(""),[r,o]=(0,s.useState)(""),[n,l]=(0,s.useState)(null);return(0,i.jsxs)(A,{onSubmit:async a=>{a.preventDefault();try{l(null),e(t,r)}catch(n){l(n.message),console.error(n)}},children:[(0,i.jsxs)(A.Group,{controlId:"agentInput",children:[(0,i.jsx)(A.Label,{children:"Pesquisar Agente:"}),(0,i.jsx)(A.Control,{type:"text",value:t,onChange:e=>a(e.target.value)})]}),(0,i.jsxs)(A.Group,{controlId:"mapInput",children:[(0,i.jsx)(A.Label,{children:"Pesquisar Mapa:"}),(0,i.jsx)(A.Control,{type:"text",value:r,onChange:e=>o(e.target.value)})]}),(0,i.jsx)(H,{variant:"primary",type:"submit",children:"Pesquisar"}),(0,i.jsx)("br",{}),n&&(0,i.jsx)("p",{className:"error",children:n})]})}},497:(e,t,a)=>{"use strict";var s=a(218);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,o,n){if(n!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return a.PropTypes=a,a}},173:(e,t,a)=>{e.exports=a(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},440:e=>{"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=480.e2d72306.chunk.js.map