(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3165],{13639:function(e,t){t.Z={body:'<path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" fill="currentColor"/>',width:448,height:512}},68579:function(e,t,n){"use strict";var i=n(59499),s=n(1954),r=n(13639),c=n(85893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.title,n=e.onBack,i=e.children,a=e.style;return(0,c.jsx)("nav",{className:"navbar sticky-top navbar-expand-sm d-flex justify-content-center align-items-center navbar-light py-3",style:l({background:"#006FB9",color:"white"},a),children:(0,c.jsxs)("div",{className:"row",style:{width:"100%",margin:"-8px 0"},children:[(0,c.jsx)("div",{className:"col-2 d-flex align-items-center",children:(0,c.jsx)(s.JO,{icon:r.Z,onClick:n})}),t?(0,c.jsx)("div",{style:{textAlign:"center"},className:"col-8 d-flex justify-content-center align-items-center",children:(0,c.jsx)("div",{className:"font-weight-bold",children:t})}):i]})})}},46608:function(e,t,n){"use strict";n.r(t);var i=n(16385),s=n(68579),r=n(30454),c=n(25675),a=n(41664),l=n(11163),o=n(67294),d=n(25617),u=n(1852),h=n(186),m=n(85893);function f(){var e,t,n=(0,o.useState)(),r=n[0],h=n[1],f=(0,o.useState)([]),p=f[0],g=f[1],v=(0,l.useRouter)(),j=(0,u.useMediaQuery)({query:"(max-width:1224px)"}),b=(0,d.v9)((function(e){return e.token})).access_token;return(0,o.useEffect)((function(){v.isReady&&i.Z.getDetailVendorOffice(b,v.query.slug).then((function(e){e.success&&h(e.data)}))}),[v.query.slug]),(0,o.useEffect)((function(){i.Z.getVendorOffices(b).then((function(e){e.success&&g(e.data)}))}),[]),(0,m.jsxs)(m.Fragment,{children:[j&&(0,m.jsx)(s.Z,{title:null===r||void 0===r?void 0:r.name,onBack:function(){return v.back()}}),(0,m.jsxs)("div",{className:"container my-4",children:[!j&&(0,m.jsx)("h4",{children:null===r||void 0===r?void 0:r.name}),(0,m.jsxs)("div",{className:"form-row",children:[(0,m.jsx)("div",{className:"col-3 d-none d-md-flex",children:(0,m.jsx)(x,{children:p.map((function(e){return(0,m.jsx)("li",{className:v.query.slug==e.id?"active":"",children:(0,m.jsx)(a.default,{href:"/product/office/".concat(e.id),children:(0,m.jsx)("a",{children:e.name})})})}))})}),(0,m.jsx)("div",{className:"col-12 col-md-9",children:(0,m.jsx)("div",{className:"row",children:r&&(null===r||void 0===r||null===(e=r.items)||void 0===e?void 0:e.length)>0?null===r||void 0===r||null===(t=r.items)||void 0===t?void 0:t.map((function(e){return(0,m.jsx)("div",{className:"col-md-12 mb-2",children:(0,m.jsx)("div",{className:"card text-left",style:{borderRadius:"20px"},children:(0,m.jsx)("div",{className:"card-body p-1",children:(0,m.jsxs)("div",{className:"form-row w-100",children:[(0,m.jsx)("div",{className:"col-md-4",children:(0,m.jsx)("img",{style:{borderRadius:"20px",background:"gray",width:"100%",height:"150px",objectFit:"cover"},src:e.image,alt:""})}),(0,m.jsxs)("div",{className:"col-md-8 d-md-flex justify-content-between align-items-center flex-row  px-2",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{className:"card-title text-primary font-weight-bold mb-2",children:e.name}),(0,m.jsxs)("p",{className:"card-text",children:[(0,m.jsx)("div",{className:"d-inline-block",style:{width:"20px",height:"20px",position:"relative"},children:(0,m.jsx)(c.default,{src:"https://cdn.masterdiskon.com/masterdiskon/icon/fe/location.png",layout:"fill"})}),e.address]})]}),(0,m.jsxs)("div",{className:"text-right my-3 my-md-0",children:[(0,m.jsxs)("h6",{className:"mb-2 font-weight-bold",children:["Rp",e.price.toLocaleString()," / ",e.unit]}),(0,m.jsx)("a",{name:"",id:"",class:"btn btn-sm btn-warning",href:"https://api.whatsapp.com/send?phone=6282255003535&text=Halo%20Masdis,%20Saya%20mau%20bertanya%20mengenai%20Lapangan%20PADANG%20GOLF%20HALIM",role:"button",children:"Lanjut bertanya"})]})]})]})})})})})):(0,m.jsxs)("div",{className:"col-12",children:[(0,m.jsx)("div",{style:{width:"100%",height:"55vh",position:"relative"},children:(0,m.jsx)(c.default,{src:"https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/no-room.svg",layout:"fill"})}),(0,m.jsx)("h5",{className:"text-center",children:"Data Tidak Ditemukan"})]})})})]})]})]})}var x=h.default.ul.withConfig({displayName:"slug__NavRoot",componentId:"sc-1ng3tm9-0"})(["min-height:500px;width:100%;background:rgb(93,156,209);border-radius:15px;box-shadow:10px 10px 10px -10px rgba(0,0,0,.5);padding:15px;list-style-type:none;font-size:16px;li{color:#0070BA;font-weight:bold;margin:10px 0;background:white;padding:10px;border-radius:15px;cursor:pointer;transition:all ease .3s;text-transform:capitalize;a{color:inherit;display:block;}&:hover,&.active{color:white;background:#0070BA;}}"]);f.Layout={desktop:r.Z,mobile:o.Fragment},t.default=f},24048:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/office/[slug]",function(){return n(46608)}])}},function(e){e.O(0,[1954,186,7381,542,5496,454,6385,9774,2888,179],(function(){return t=24048,e(e.s=t);var t}));var t=e.O();_N_E=t}]);