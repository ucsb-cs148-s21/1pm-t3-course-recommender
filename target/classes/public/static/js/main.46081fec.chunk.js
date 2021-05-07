(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{43:function(e,t,r){},44:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var n,c,i,s,a=r(0),C=r.n(a),d=r(31),u=r.n(d),o=(r(43),r(44),r(13)),j=r(9),p=r(14),m=p.a.nav(n||(n=Object(o.a)(["\n  background: #f4bc1c;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 500px;\n"]))),S=Object(p.a)(j.b)(c||(c=Object(o.a)(["\n  color: #203354;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 1rem 2rem;\n  height: 100%;\n  // cursor: pointer;\n  font-size: 18px;\n\n  &.active {\n    font-weight: 1000;\n  }\n"]))),l=p.a.nav(i||(i=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n\n  // @media screen and (max-width: 768px) {\n  //   display: none;\n  }\n"]))),b=Object(p.a)(j.b)(s||(s=Object(o.a)(["\n  border-radius: 5px;\n  background: #203354;\n  padding: 10px 20px;\n  color: #fff;\n  // cursor: pointer;\n  // transition: all 0.2s ease-in-out;\n  // text-decoration: none;\n\n  &:hover {\n    background: #fff;\n    color: #000;\n  }\n"]))),P=r(1),M=function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(m,{children:[Object(P.jsx)(S,{to:"/Survey",activeStyle:!0,children:" Home "}),Object(P.jsx)(S,{to:"/Input",activeStyle:!0,children:" Course List "}),Object(P.jsx)(S,{to:"/Result",activeStyle:!0,children:" Recommended Course "}),Object(P.jsxs)(l,{children:[" ",Object(P.jsx)(b,{to:"/SignIn",children:"Sign In"})," "]})]})})},h=r(15),x=r(16),O=r(38),f=r(36),N=r(35),g=r.n(N),q=new(function(){function e(){Object(h.a)(this,e)}return Object(x.a)(e,[{key:"getCourses",value:function(){return g.a.get("https://ucsb-course-recommender.herokuapp.com/api/courses")}}]),e}()),v=function(e){Object(O.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).state={courses:[]},n}return Object(x.a)(r,[{key:"componentDidMount",value:function(){var e=this;q.getCourses().then((function(t){e.setState({courses:t.data})}))}},{key:"render",value:function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{className:"text-center",children:" Courses List"}),Object(P.jsxs)("table",{className:"table table-striped",children:[Object(P.jsx)("thead",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:" Course Id"}),Object(P.jsx)("td",{children:" Course courseName"}),Object(P.jsx)("td",{children:" Course department"}),Object(P.jsx)("td",{children:" Course prerequisite"})]})}),Object(P.jsx)("tbody",{children:this.state.courses.map((function(e){return Object(P.jsxs)("tr",{children:[Object(P.jsxs)("td",{children:[" ",e.id]}),Object(P.jsxs)("td",{children:[" ",e.courseName]}),Object(P.jsxs)("td",{children:[" ",e.department]}),Object(P.jsxs)("td",{children:[" ",e.prerequisite]})]},e.id)}))})]})]})}}]),r}(C.a.Component);function y(e,t){return t.includes(e)}var k=function(){for(var e=[{id:1,courseName:"CMPSC 8",department:"CMPSC",prerequisite:""},{id:2,courseName:"CMPSC 16",department:"CMPSC",prerequisite:"CMPSC 8"},{id:3,courseName:"CMPSC 24",department:"CMPSC",prerequisite:"CMPSC 16"},{id:4,courseName:"CMPSC 32",department:"CMPSC",prerequisite:"CMPSC 24"},{id:5,courseName:"CMPSC 40",department:"CMPSC",prerequisite:"CMPSC 16"},{id:6,courseName:"CMPSC 48",department:"CMPSC",prerequisite:"CMPSC 16"},{id:7,courseName:"CMPSC 64",department:"CMPSC",prerequisite:"CMPSC 16"},{id:8,courseName:"CMPSC 111",department:"CMPSC",prerequisite:"CMPSC 24"},{id:9,courseName:"CMPSC 130A",department:"CMPSC",prerequisite:"CMPSC 40"},{id:10,courseName:"CMPSC 130B",department:"CMPSC",prerequisite:"CMPSC 130A"},{id:11,courseName:"CMPSC 138",department:"CMPSC",prerequisite:"CMPSC 40"},{id:12,courseName:"CMPSC 154",department:"CMPSC",prerequisite:"CMPSC 64"},{id:13,courseName:"CMPSC 160",department:"CMPSC",prerequisite:"CMPSC 138"},{id:14,courseName:"CMPSC 162",department:"CMPSC",prerequisite:"CMPSC 138"},{id:15,courseName:"CMPSC 170",department:"CMPSC",prerequisite:"CMPSC 154"}],t=JSON.parse(localStorage.getItem("selectedCourses")),r=[],n=0;n<e.length;++n){for(var c=!1,i=0;i<t.length;++i)if(e[n].courseName==t[i]){c=!0;break}c||y(e[n].prerequisite,t)&&r.push(e[n])}return Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{className:"text-center",children:" Here's a list of course you can take"}),Object(P.jsxs)("table",{className:"table table-striped",children:[Object(P.jsx)("thead",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:" Course Id"}),Object(P.jsx)("td",{children:" CourseName"}),Object(P.jsx)("td",{children:" Department"}),Object(P.jsx)("td",{children:" Prerequisite"})]})}),Object(P.jsx)("tbody",{children:r.map((function(e){return Object(P.jsxs)("tr",{children:[Object(P.jsxs)("td",{children:[" ",e.id]}),Object(P.jsxs)("td",{children:[" ",e.courseName]}),Object(P.jsxs)("td",{children:[" ",e.department]}),Object(P.jsxs)("td",{children:[" ",e.prerequisite]})]},e.id)}))})]})]})},I=r(37),F=r(2),w=function(){var e=Object(a.useState)([]),t=Object(I.a)(e,2),r=t[0],n=t[1],c=Object(F.f)(),i=function(e){var t=e.target,c=t.value;t.checked;r.find((function(e){return e===c}));var i=r;i.push(c),n(i)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h1",{children:"Header"}),Object(P.jsxs)("form",{onSubmit:function(e){e.preventDefault();e.target.value;localStorage.removeItem(r),localStorage.setItem("selectedCourses",JSON.stringify(r)),c.push("/Result")},children:[Object(P.jsx)("h5",{children:"Enter the courses you have taken:"}),[{id:1,courseName:"CMPSC 8",department:"CMPSC",prerequisite:""},{id:2,courseName:"CMPSC 16",department:"CMPSC",prerequisite:"CMPSC 8"},{id:3,courseName:"CMPSC 24",department:"CMPSC",prerequisite:"CMPSC 16"},{id:4,courseName:"CMPSC 32",department:"CMPSC",prerequisite:"CMPSC 24"},{id:5,courseName:"CMPSC 40",department:"CMPSC",prerequisite:"CMPSC 16"},{id:6,courseName:"CMPSC 48",department:"CMPSC",prerequisite:"CMPSC 16"},{id:7,courseName:"CMPSC 64",department:"CMPSC",prerequisite:"CMPSC 16"},{id:8,courseName:"CMPSC 111",department:"CMPSC",prerequisite:"CMPSC 24"},{id:9,courseName:"CMPSC 130A",department:"CMPSC",prerequisite:"CMPSC 40"},{id:10,courseName:"CMPSC 130B",department:"CMPSC",prerequisite:"CMPSC 130A"},{id:11,courseName:"CMPSC 138",department:"CMPSC",prerequisite:"CMPSC 40"},{id:12,courseName:"CMPSC 154",department:"CMPSC",prerequisite:"CMPSC 64"},{id:13,courseName:"CMPSC 160",department:"CMPSC",prerequisite:"CMPSC 138"},{id:14,courseName:"CMPSC 162",department:"CMPSC",prerequisite:"CMPSC 138"},{id:15,courseName:"CMPSC 170",department:"CMPSC",prerequisite:"CMPSC 154"}].map((function(e,t){var r=e.id,n=e.courseName;e.department,e.prerequisite;return Object(P.jsxs)("div",{children:[Object(P.jsx)("input",{type:"checkbox",id:"course-id-".concat(r),name:n,value:n,onChange:i}),Object(P.jsx)("label",{htmlFor:n,children:n})]},"course-".concat(t))})),Object(P.jsx)("input",{type:"submit",value:"Submit"})]})]})};var A=function(){return Object(P.jsxs)(j.a,{children:[Object(P.jsx)(M,{}),Object(P.jsxs)(F.c,{children:[Object(P.jsx)(F.a,{path:"/",exact:!0,component:w}),Object(P.jsx)(F.a,{path:"/Survey",component:w}),Object(P.jsx)(F.a,{path:"/Input",component:v}),Object(P.jsx)(F.a,{path:"/Result",component:k})]})]})},B=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,70)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),i(e),s(e)}))};r(68);u.a.render(Object(P.jsx)(C.a.StrictMode,{children:Object(P.jsx)(A,{})}),document.getElementById("root")),B()}},[[69,1,2]]]);
//# sourceMappingURL=main.46081fec.chunk.js.map