(this["webpackJsonpiss-tracker"]=this["webpackJsonpiss-tracker"]||[]).push([[0],{32:function(t,e,i){},44:function(t,e,i){"use strict";i.r(e);var n=i(7),s=i(33),c=i.n(s),r=(i(32),i(12)),a=i(14),o=i(34),j=i(47),b=i(49),l=i(48),p=i(50),u=i(22),O=i(11);function d(){return Object(O.jsx)("div",{children:Object(O.jsx)("a",{class:"article-link",href:"https://github.com/awilliamson10",children:"Github"})})}function x(){var t=Object(n.useRef)(),e=Object(a.c)(o.a,"models/ISS.glb");return Object(a.b)((function(){t.current.rotation.y-=2e-4})),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(n.Suspense,{fallback:"loading...",children:Object(O.jsx)("primitive",{ref:t,object:e.scene,scale:[.009,.009,.009]})})})}function h(){var t=Object(n.useRef)();Object(a.b)((function(){var e="1 25544U 98067A   21166.54383293  .00001317  00000-0  32085-4 0  9997\n    2 25544  51.6442 350.8519 0003487  96.6281 300.6517 15.48988341288347",i=Object(u.b)(e.split("\n")[0].trim(),e.split("\n")[1].trim()),n=new Date,s=Object(u.a)(i,n);t.current.position.x=.005*s.position.x,t.current.position.y=.005*s.position.y,t.current.position.z=.005*s.position.z,t.current.rotation.y+=2e-5}));var e=Object(j.a)(["images/2k_earth_daymap.jpg"]),i=Object(r.a)(e,1)[0];return Object(O.jsxs)("mesh",{ref:t,children:[Object(O.jsx)("sphereGeometry",{args:[5,32,32]}),Object(O.jsx)("meshStandardMaterial",{map:i})]})}var m=function(){var t="1 25544U 98067A   21166.54383293  .00001317  00000-0  32085-4 0  9997\n                   2 25544  51.6442 350.8519 0003487  96.6281 300.6517 15.48988341288347",e=Object(u.b)(t.split("\n")[0].trim(),t.split("\n")[1].trim()),i=new Date,s=Object(u.a)(e,i);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(a.a,{camera:{position:[.005*-s.position.x,.005*-s.position.y,.005*-s.position.z],fov:20},children:[Object(O.jsx)(n.Suspense,{fallback:"loading...",children:Object(O.jsx)(x,{})}),Object(O.jsx)("ambientLight",{intensity:.4}),Object(O.jsx)("directionalLight",{position:[10,10,0],intensity:1}),Object(O.jsx)(n.Suspense,{fallback:"loading...",children:Object(O.jsx)(h,{planet:{xRadius:.005*s.position.x,yRadius:.005*s.position.y,zRadius:.005*s.position.z}})}),Object(O.jsx)(b.a,{}),Object(O.jsx)(l.a,{radius:100,depth:50,count:5e4,factor:6,saturation:0,fade:!0})]}),Object(O.jsx)(p.a,{}),Object(O.jsx)(d,{})]})};c.a.render(Object(O.jsx)(m,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.bf6501d9.chunk.js.map