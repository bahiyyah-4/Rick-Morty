(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{10:function(e,t,a){e.exports={card:"Cards_card__1mYho",img:"Cards_img__2yixB",badge:"Cards_badge__3mz1U",content:"Cards_content__3EzPT"}},13:function(e,t,a){e.exports={input:"Search_input__3l9R-",btn:"Search_btn__3Tnnf"}},24:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(17),r=a.n(n),i=(a(24),a(5)),l=a.n(i),o=a(7),d=a(3),j=(a(26),a(27),a(6)),b=a(10),m=a.n(b),u=a(0),x=function(e){var t,a=e.results,c=e.page;return console.log(a),t=a?a.map((function(e){var t=e.id,a=e.name,s=e.image,n=e.location,r=e.status;return Object(u.jsxs)(j.b,{style:{textDecoration:"none"},to:"".concat(c).concat(t),className:"col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark",children:[Object(u.jsxs)("div",{className:"{styles.cards}d-flex flex-column justify-content-center",children:[Object(u.jsx)("img",{src:s,alt:"",className:"".concat(m.a.img," img-fluid ")}),Object(u.jsxs)("div",{style:{padding:"10px"},className:"content",children:[Object(u.jsx)("div",{className:"fs-4 fw-bold mb-4 ",children:a}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("div",{className:"fs-6 ",children:"last location "}),Object(u.jsx)("div",{className:"fs-5",children:n.name})]})]})]}),"Dead"===r?Object(u.jsx)("div",{className:"".concat(m.a.badge," position-absolute badge bg-danger "),children:r}):"Alive"===r?Object(u.jsx)("div",{className:"".concat(m.a.badge," position-absolute badge bg-success "),children:r}):Object(u.jsx)("div",{className:"".concat(m.a.badge," position-absolute badge bg-secondary "),children:r})]},t)})):"no characters found :(",Object(u.jsx)(u.Fragment,{children:t})},h=function(e){var t=e.name,a=e.index,c=e.items,s=e.task,n=e.setPageNumber;return Object(u.jsxs)("div",{children:[Object(u.jsx)("style",{jsx:!0,children:'\n                .x:checked + label{\n                    background-color: #0b5ed7;\n                    color: white;\n                }\n                input[type="radio"]{\n                    display:none;\n                }\n                '}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("input",{onClick:function(){n(1),s(c)},className:"form-check-input x",type:"radio",name:t,id:"".concat(t,"-").concat(a)}),Object(u.jsx)("label",{class:"btn btn-outline-primary",for:"".concat(t,"-").concat(a),children:c})]})]})},p=function(e){var t=e.setPageNumber,a=e.setGender;return Object(u.jsxs)("div",{className:"accordion-item",children:[Object(u.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(u.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",children:"Gender"})}),Object(u.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse ","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(u.jsx)("div",{className:"accordion-body d-flex flex-wrap  gap-3",children:["female","male"," genderless","unknown"].map((function(e,c){return Object(u.jsx)(h,{task:a,setPageNumber:t,name:"gender",index:c,items:e},c)}))})})]})},O=function(e){var t=e.setPageNumber,a=e.setSpecies;return Object(u.jsxs)("div",{className:"accordion-item",children:[Object(u.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(u.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Species"})}),Object(u.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(u.jsx)("div",{className:"accordion-body d-flex flex-wrap  gap-3",children:["Human","Alien","Humanoid","Poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Cronenberg","Planet"].map((function(e,c){return Object(u.jsx)(h,{task:a,setPageNumber:t,name:"speciec",index:c,items:e},c)}))})})]})},f=function(e){var t=e.setStatus,a=e.setPageNumber;return Object(u.jsxs)("div",{className:"accordion-item",children:[Object(u.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(u.jsx)("button",{className:"accordion-button ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"true","aria-controls":"collapseThree",children:"Status"})}),Object(u.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse show","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(u.jsx)("div",{className:"accordion-body d-flex flex-wrap  gap-3",children:["Alive","Dead","Unknown"].map((function(e,c){return Object(u.jsx)(h,{task:t,setPageNumber:a,name:"status",index:c,items:e},c)}))})})]})},g=function(e){var t=e.setStatus,a=e.setPageNumber,c=e.setGender,s=e.setSpecies;return Object(u.jsxs)("div",{className:"col-lg-3 col-12 mb-5",children:[Object(u.jsx)("div",{className:"text-center fw-bold fs-4 mb-2",children:"Filters"}),Object(u.jsx)("div",{onClick:function(){t(""),a(""),c(""),s(""),window.location.reload(!1)},style:{cursor:"pointer"},className:"text-center text-primary text-decoration-underline mb-4",children:"Clear filters"}),Object(u.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(u.jsx)(f,{setPageNumber:a,setStatus:t}),Object(u.jsx)(O,{setSpecies:s,setPageNumber:a}),Object(u.jsx)(p,{setGender:c,setPageNumber:a})]})]})},v=(a(49),function(){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-4",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)(j.b,{to:"/",className:"fs-3 ubuntu navbar-brand",children:["Rick & Morty ",Object(u.jsx)("span",{className:"text-primary",children:"WiKi"})," "]}),Object(u.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(u.jsx)("style",{jsx:!0,children:'\n             button[aria-expanded="false"] > .close{\n                 display : none;\n             }\n             button[aria-expanded="true"] > .open{\n                display : none;\n            }\n            \n            '}),Object(u.jsx)("i",{class:"fas fa-bars open fw-bold text-dark"}),Object(u.jsx)("i",{class:"fas fa-times close  fw-bold text-dark"})]}),Object(u.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:Object(u.jsxs)("div",{className:"navbar-nav fs-5",children:[Object(u.jsx)(j.c,{activeClassName:"active",to:"/",className:"nav-link",children:"characters"}),Object(u.jsx)(j.c,{to:"/episodes",className:"nav-link",children:"Episodes"}),Object(u.jsx)(j.c,{to:"/location",className:"nav-link",children:"Location"})]})})]})})}),N=a(18),w=a.n(N),y=function(e){var t=e.info,a=e.pageNumber,s=e.setPageNumber,n=Object(c.useState)(window.innerWidth),r=Object(d.a)(n,2),i=(r[0],r[1]),l=function(){i(window.innerWidth)};return Object(c.useEffect)((function(){return window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}}),[]),Object(u.jsx)(w.a,{className:"pagination justify-content-center gap-4 my-4",forcePage:1===a?0:a-1,nextLabel:"Next ",previousLabel:"Prev",nextclassNameName:"btn btn-primary ",previousclassNameName:"btn btn-primary",pageclassNameName:"page-item",pageLinkclassNameName:"page-link",activeclassNameName:"active",onPageChange:function(e){s(e.selected+1)},pageCount:null===t||void 0===t?void 0:t.pages})},k=a(13),S=a.n(k),P=function(e){var t=e.setSearch,a=e.setPageNumber;return Object(u.jsxs)("form",{className:"d-flex flex-sm-rows flex-column align-items-center  justify-content-center gap-4 mb-5",children:[Object(u.jsx)("input",{onChange:function(e){a(1),t(e.target.value)},placeholder:"Search for Characters",type:"text",className:S.a.input}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault()},className:"".concat(S.a.btn,"   btn btn-primary fs-5"),children:"Search"})]})},C=a(2),_=a(19),E=function(e){var t=e.total,a=e.name,c=e.setID;return Object(u.jsx)("div",{class:"input-group mb-3",children:Object(u.jsxs)("select",{onChange:function(e){return c(e.target.value)},class:"form-select",id:a,children:[Object(u.jsx)("option",{value:"1",selected:!0,children:"Choose..."}),Object(_.a)(Array(t).keys()).map((function(e){return Object(u.jsxs)("option",{value:e+1,children:[a,"- ",e+1]})}))]})})},T=function(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(d.a)(n,2),i=r[0],j=r[1],b=Object(c.useState)([]),m=Object(d.a)(b,2),h=m[0],p=m[1],O=i.air_date,f=i.name,g="https://rickandmortyapi.com/api/episode/".concat(a);return Object(c.useEffect)((function(){Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g).then((function(e){return e.json()}));case 2:return t=e.sent,j(t),e.next=6,Promise.all(t.characters.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 6:a=e.sent,p(a);case 8:case"end":return e.stop()}}),e)})))()}),[g]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row mb-4",children:[Object(u.jsxs)("h1",{className:"text-center mb-4",children:["Episode :"," ",Object(u.jsx)("span",{className:"text-primary",children:""===f?"Unknown":f})]}),Object(u.jsxs)("h5",{className:"text-center",children:["Air Date: ",""===O?"Unknown":O]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-lg-3 col-12",children:[Object(u.jsx)("h4",{className:"text-center mb-4",children:"Pick Episodes "}),Object(u.jsx)(E,{setID:s,name:"Episode",total:51})]}),Object(u.jsx)("div",{className:"col-lg-8 col-12",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(x,{page:"/episodes/",results:h})})})]})]})},A=function(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(d.a)(n,2),i=r[0],j=r[1],b=Object(c.useState)([]),m=Object(d.a)(b,2),h=m[0],p=m[1],O=i.name,f=i.type,g=i.dimension,v="https://rickandmortyapi.com/api/location/".concat(a);return Object(c.useEffect)((function(){Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v).then((function(e){return e.json()}));case 2:return t=e.sent,j(t),e.next=6,Promise.all(t.residents.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 6:a=e.sent,p(a);case 8:case"end":return e.stop()}}),e)})))()}),[v]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row mb-4",children:[Object(u.jsxs)("h1",{className:"text-center mb-4",children:["Location :"," ",Object(u.jsx)("span",{className:"text-primary",children:""===O?"Unknown":O})]}),Object(u.jsxs)("h5",{className:"text-center",children:["Dimension : ",""===g?"Unknown":g]}),Object(u.jsxs)("h6",{className:"text-center",children:["Type : ",""===f?"Unknown":f]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-lg-3 col-12",children:[Object(u.jsx)("h4",{className:"text-center mb-4",children:"Pick Location "}),Object(u.jsx)(E,{setID:s,name:"location",total:126})]}),Object(u.jsx)("div",{className:"col-lg-8 col-12",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(x,{page:"/location/",results:h})})})]})]})},D=function(){var e=Object(C.g)().id,t=Object(c.useState)([]),a=Object(d.a)(t,2),s=a[0],n=a[1],r=s.name,i=s.image,j=s.location,b=s.origin,m=s.gender,x=s.species,h=s.status,p=s.type,O="https://rickandmortyapi.com/api/character/".concat(e);return Object(c.useEffect)((function(){Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O).then((function(e){return e.json()}));case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})))()}),[O]),Object(u.jsx)("div",{className:"container d-flex justify-content-center",children:Object(u.jsxs)("div",{className:"d-flex flex-column gap-3",children:[Object(u.jsx)("h1",{className:"text-center",children:r}),Object(u.jsx)("img",{src:i,alt:"",className:"img-fluid"}),"Dead"===h?Object(u.jsx)("div",{className:"badge bg-danger fs-5",children:h}):"Alive"===h?Object(u.jsx)("div",{className:"badge bg-success fs-5",children:h}):Object(u.jsx)("div",{className:"badge bg-secondary fs-5",children:h}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("span",{className:"fw-bold",children:" Gender:  "}),m]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("span",{className:"fw-bold",children:" species:  "}),x]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("span",{className:"fw-bold",children:" type:  "}),""===p?"Unknow":p]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("span",{className:"fw-bold",children:" location:  "}),null===j||void 0===j?void 0:j.name]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("span",{className:"fw-bold",children:" origin:  "}),null===b||void 0===b?void 0:b.name]})]})]})})};var L=function(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(d.a)(n,2),i=r[0],j=r[1],b=Object(c.useState)(""),m=Object(d.a)(b,2),h=m[0],p=m[1],O=Object(c.useState)(""),f=Object(d.a)(O,2),v=f[0],N=f[1],w=Object(c.useState)(""),k=Object(d.a)(w,2),S=k[0],C=k[1],_=Object(c.useState)([]),E=Object(d.a)(_,2),T=E[0],A=E[1],D=T.info,L=T.results,U="https://rickandmortyapi.com/api/character/?page=".concat(a,"&name=").concat(i,"&status=").concat(h,"&gender=").concat(v,"&species=").concat(S);return Object(c.useEffect)((function(){Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(U).then((function(e){return e.json()}));case 2:t=e.sent,A(t);case 4:case"end":return e.stop()}}),e)})))()}),[U]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"text-center mb-4",children:"characters"}),Object(u.jsx)(P,{setPageNumber:s,setSearch:j}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(g,{setSpecies:C,setGender:N,setStatus:p,setPageNumber:s}),Object(u.jsx)("div",{className:"col-lg-8 col-12",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(x,{page:"/",results:L})})})]})}),Object(u.jsx)(y,{info:D,pageNumber:a,setPageNumber:s})]})},U=function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(v,{})}),Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{path:"/",element:Object(u.jsx)(L,{})}),Object(u.jsx)(C.a,{path:"/:id",element:Object(u.jsx)(D,{})}),Object(u.jsx)(C.a,{path:"/episodes",element:Object(u.jsx)(T,{})}),Object(u.jsx)(C.a,{path:"/episodes/:id",element:Object(u.jsx)(D,{})}),Object(u.jsx)(C.a,{path:"/location",element:Object(u.jsx)(A,{})}),Object(u.jsx)(C.a,{path:"/location/:id",element:Object(u.jsx)(D,{})})]})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(U,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.36fea119.chunk.js.map