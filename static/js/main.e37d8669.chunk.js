(this["webpackJsonpfake-array-generator"]=this["webpackJsonpfake-array-generator"]||[]).push([[0],{214:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(8),a=n.n(o),i=n(7),u=n(2),s=n(0);function j(e){var t=e.data,n=t.id,c=t.key,o=t.value,a=Object(u.e)((function(e){return e.updatePropItem})),j=Object(u.e)((function(e){return e.deleteProp})),d=Object(u.f)((function(e){return e.propItems.length})),l=Object(r.useState)(c),b=Object(i.a)(l,2),p=b[0],O=b[1],f=Object(r.useState)(o),h=Object(i.a)(f,2),x=h[0],m=h[1];Object(r.useEffect)((function(){a({id:n,key:p,value:x})}),[p,x,n]);return Object(s.jsxs)("div",{className:"record",children:[Object(s.jsx)("input",{type:"text",placeholder:"Key ".concat(n),value:p,onChange:function(e){return O(e.target.value)}}),Object(s.jsx)("input",{type:"text",placeholder:"Value ".concat(n),value:x,onChange:function(e){return m(e.target.value)}}),Object(s.jsx)("button",{onClick:function(){j(n)},hidden:d<=1,style:{border:"none",background:"transparent",cursor:"pointer",fill:"#fff"},children:Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[Object(s.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),Object(s.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})})]})}var d=function(){var e=Object(u.f)((function(e){return e.count})),t=Object(u.f)((function(e){return e.propItems})),n=t[t.length-1].id,r=Object(u.f)((function(e){return e.isAutoID})),c=Object(u.e)((function(e){return e.addPropItem})),o=Object(u.e)((function(e){return e.setCount})),a=Object(u.e)((function(e){return e.changeAutoID}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Setting:"}),Object(s.jsxs)("label",{children:[Object(s.jsx)("p",{children:"Count of items in array:"}),Object(s.jsx)("input",{type:"text",placeholder:"Length of Array",value:e,onChange:function(e){return e.target.value<=200&&o(Number(e.target.value))}})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{htmlFor:"auto_id",children:[Object(s.jsx)("input",{type:"radio",name:"id-type",id:"auto_id",onChange:function(){return a(!0)},checked:r}),"Auto ID"]}),Object(s.jsxs)("label",{htmlFor:"random_id",children:[Object(s.jsx)("input",{type:"radio",name:"id-type",id:"random_id",onChange:function(){return a(!1)},checked:!r}),"Random ID"]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)(j,{data:e},e.id)}))}),Object(s.jsx)("button",{className:"add-another",onClick:function(){c({id:n+1,key:"",value:""})},children:"+ Add another?"})]})},l=n(12),b=n(221),p=n(219),O=n(9),f=n(220),h=function(){var e=Object(u.f)((function(e){return e.record})),t=Object(u.f)((function(e){return e.count})),n=Object(u.f)((function(e){return e.isAutoID})),r=function(){for(var r=[],c=0;c<t;c++)r.push(Object(l.a)({id:n?c+1:Object(f.a)()},e));return r};return Object(s.jsxs)("div",{className:"code-area",children:[Object(s.jsx)(b.a,{language:"javascript",style:p.a,children:JSON.stringify(r(),null,2)}),Object(s.jsx)(O.CopyToClipboard,{text:JSON.stringify(r(),null,2),title:"Copy to clipboard",children:Object(s.jsx)("span",{className:"copy-btn",role:"img","aria-label":"copy",children:"\ud83d\udcc4"})})]})};function x(){return Object(s.jsx)("h1",{children:"Fake Array Generator"})}n(213),n(214);var m=Object(u.d)({count:1,isAutoID:!0,propItems:[{id:1,key:"name",value:"John Doe"},{id:2,key:"age",value:28}],record:Object(u.c)((function(e){var t={};return e.propItems.map((function(e){return t[e.key]=e.value})),t})),updatePropItem:Object(u.b)((function(e,t){var n=t.id,r=t.key,c=t.value,o=[];e.propItems.forEach((function(e){e.id===n?o.push({id:n,key:r,value:c}):o.push(e)})),e.propItems=o})),setCount:Object(u.b)((function(e,t){e.count=t})),addPropItem:Object(u.b)((function(e,t){e.propItems.push(t)})),changeAutoID:Object(u.b)((function(e,t){e.isAutoID=t})),deleteProp:Object(u.b)((function(e,t){e.propItems=e.propItems.filter((function(e){return e.id!==t}))}))});var v=function(){return Object(s.jsx)(u.a,{store:m,children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"section",children:[Object(s.jsx)(x,{}),Object(s.jsx)(d,{})]}),Object(s.jsx)("div",{className:"section",children:Object(s.jsx)(h,{})})]})})};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.e37d8669.chunk.js.map