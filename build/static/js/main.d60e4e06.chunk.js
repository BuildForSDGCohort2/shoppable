(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),i=(t(25),t(6)),m=t(1),s=t(15),o=t(16),u=t(19),d=t(18),E={products:[{_id:"1",name:"Slim shirt",category:"Shirts",image:"/images/d1.jpg",price:60,brand:"Nike",rating:4.5,numReviews:10},{_id:"2",name:"Fit shirt",category:"Shirts",image:"/images/d1.jpg",price:70,brand:"Nike",rating:5,numReviews:10},{_id:"3",name:"Khaki pants",category:"pants",image:"/images/d1.jpg",price:3.5,brand:"Nike",rating:4.5,numReviews:10}]},p=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",{className:"products"},E.products.map((function(e){return l.a.createElement("li",null,l.a.createElement("div",{className:"product"},l.a.createElement(i.b,{to:"/product/"+e._id}," ",l.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),l.a.createElement("div",{className:"product-name"}," ",l.a.createElement(i.b,{to:"/product/"+e._id}," ",e.name," ")),l.a.createElement("div",{className:"product-brand"}," ",e.brand," "),l.a.createElement("div",{className:"product-price"}," ",e.price," "),l.a.createElement("div",{className:"product-rating"}," ",e.rating," Stars ",e.numReviews," ")))}))))}}]),t}(n.Component);var h=function(e){console.log(e.match.params.id);var a=E.products.find((function(a){return a._id===e.match.params.id}));return l.a.createElement("div",null,l.a.createElement("div",{className:"back-to-result"},l.a.createElement(i.b,{to:"/"}," Back to result")),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"details-image"},l.a.createElement("img",{src:a.image,alt:"product"})),l.a.createElement("div",{className:"details-info"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h4",null,a.name)),l.a.createElement("li",null,a.rating," Stars (",a.numReviews," Reviews)"),l.a.createElement("li",null,"Price: $",l.a.createElement("b",null,a.price)),l.a.createElement("li",null,"Description:",l.a.createElement("div",null," ",a.description," ")))),l.a.createElement("div",{className:"details-action"},l.a.createElement("ul",null,l.a.createElement("li",null,"Price: $",l.a.createElement("b",null,a.price)),l.a.createElement("li",null,"Status: ",a.status),l.a.createElement("li",null,"Qty: ",l.a.createElement("select",null,l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"))),l.a.createElement("li",null," ",l.a.createElement("button",{className:"button"},"Add to Cart")," ")))))};var g=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"grid-container"},l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"brand"},l.a.createElement("button",{onClick:function(){document.querySelector(".sidebar").classList.add("open")}}," Menu "),l.a.createElement(i.b,{to:"/"}," Shoppable ")),l.a.createElement("div",{className:"header-links"},l.a.createElement("a",{href:"cart.html"},"Cart"),l.a.createElement("a",{href:"signin.html"},"Sign in"))),l.a.createElement("aside",{className:"sidebar"},l.a.createElement("h3",null,"Shopping Categories"),l.a.createElement("button",{className:"sidebar-close-button",onClick:function(){document.querySelector(".sidebar").classList.remove("open")}}," X "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"fashion.html"}," Fashion")),l.a.createElement("li",null,l.a.createElement("a",{href:"kitchen.html"}," Kitchen")),l.a.createElement("li",null,l.a.createElement("a",{href:"sports.html"}," Sports")))),l.a.createElement("main",{className:"main"},l.a.createElement("div",{className:"content"},l.a.createElement(m.a,{path:"/",exact:!0,component:p}),l.a.createElement(m.a,{path:"/product/:id",component:h}))),l.a.createElement("footer",{className:"footer"}," All rights reserved")))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d60e4e06.chunk.js.map