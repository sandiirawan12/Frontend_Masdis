"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7384],{37384:function(e,s,n){var i=n(59499),a=n(45046),t=n(10684),l=n(97985),r=n(32701),d=n(25617),c=n(67294),o=n(11163),h=n(62816),u=n(30381),m=n.n(u),x=n(44681),j=n(72132),v=n(96035),p=n(17255),b=n(34264),f=n(58719),g=n(37342),N=n(16385),y=n(86455),k=n.n(y),w=n(27),S=(n(17563),n(85893));function P(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}function R(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?P(Object(n),!0).forEach((function(s){(0,i.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}var Z={hotel:v.Z,flight:p.Z,product:f.Z};s.Z=function(){var e,s,n,u,v,p,f,y,P,A,O,C,M,T,D,L,I,_,B,E,Y,F,H=(0,d.v9)((function(e){return e.token})).access_token,K=(0,o.useRouter)(),U=(0,c.useState)(),q=U[0],z=U[1],J=(0,c.useState)(!0),G=J[0],Q=J[1],W=(0,c.useState)({days:0,hours:0,minutes:0,seconds:0}),V=W[0],X=W[1],$=(0,c.useState)(),ee=$[0],se=$[1],ne=(0,c.useState)(!1),ie=ne[0],ae=ne[1],te=(0,c.useState)(!1),le=te[0],re=te[1],de=(0,c.useState)(""),ce=de[0],oe=de[1],he=(0,c.useState)(1),ue=he[0],me=he[1],xe=(0,c.useState)(!1),je=xe[0],ve=xe[1],pe=(0,c.useState)([]),be=pe[0],fe=pe[1],ge=(0,c.useState)(!1),Ne=ge[0],ye=ge[1],ke=(0,c.useState)(0),we=ke[0],Se=ke[1],Pe=(0,c.useState)(0),Re=Pe[0],Ze=Pe[1],Ae=(0,c.useState)({kebersihan:0,kenyamanan:0,lokasi:0,fasilitas:0,staff:0,harga:0,layanan:0,parkir:0,makanan:0}),Oe=Ae[0],Ce=Ae[1],Me=(0,c.useState)([]),Te=Me[0],De=Me[1],Le=(0,c.useState)({}),Ie=Le[0],_e=Le[1],Be=function(e,s){Ce((function(n){return R(R({},n),{},(0,i.Z)({},e,s))}))},Ee=(0,c.useState)({title_review:"",content_review:""}),Ye=Ee[0],Fe=Ee[1],He=function(e){var s=e.target,n=s.value,a=s.name;Fe((function(e){return R(R({},e),{},(0,i.Z)({},a,n))}))},Ke=function(){var e=ce;try{""===e?j.Am.error("Token tidak boleh kosong"):k().fire({title:"Apakah Anda sudah yakin?",text:"Dengan menyetujuinya, Anda yakin untuk melanjutkan pemesanan ini.",icon:"info",buttons:["Tidak, batalkan!","Ya, saya yakin!"],dangerMode:!1}).then((function(s){s?k().fire({title:"Pesanan diproses!",text:"Pesanan Anda sedang kami proses.!",icon:"success",closeOnClickOutside:!1,closeOnEsc:!1,timer:15e3,showConfirmButton:!1}).then((function(){var s={product:q.product,key:q.codeId,token:e},n=q.period.codeId,i={note:"B2B",tags:q.product,id_order:[n.toString()],idOrder:[n.toString()]};h.Z.submitIssued(H,s).then((function(e){e.success?(console.log("body",JSON.stringify(i)),h.Z.submitInvoice(H,i).then((function(e){k().fire({title:"Berhasil!",text:"Pesanan Anda berhasil!",icon:"success",closeOnClickOutside:!1,closeOnEsc:!1,showConfirmButton:!1,timer:2e3}).then((function(){window.location.reload()}))}))):j.Am.error('Pesanan Gagal Dipesan "'+e.message+'"')}))})):k().fire("Dibatalkan","Anda membatalkan untuk melakukan pemesanan ini.","error")}))}catch(s){console.error(s)}},Ue=function(){se((function(e){return!e}))};(0,c.useEffect)((function(){q&&setInterval((function(){var e,s=Date.parse(m()(null===q||void 0===q||null===(e=q.status)||void 0===e?void 0:e.timelimit,"DD MMM YYYY HH:mm").toDate())-Date.parse(new Date);if(s<0)X({days:0,hours:0,minutes:0,seconds:0});else{var n=Math.floor(s/1e3%60),i=Math.floor(s/1e3/60%60),a=Math.floor(s/36e5%24),t=Math.floor(s/864e5);X({days:t,hours:a,minutes:i,seconds:n})}}),1e3)}),[q]),(0,c.useEffect)((function(){Q(!0),K.isReady&&h.Z.getPurchase(H,{key:K.query.id}).then((function(e){e.success&&z(e.data),Q(!1)}))}),[K.query.id,Ne]);var qe=function(e){fe(e),ve((function(e){return!e}))},ze=function(){k().fire({title:"Anda yakin ingin membatalkan pesanan?",icon:"info",text:q.room.cancellationPolicy,confirmButtonText:"Yakin",confirmButtonColor:"#0070BA"}).then((function(e){e.isConfirmed&&(null===q||void 0===q||!q.isRefund||Ie.accountNumber&&Ie.customerName&&Ie.customerName&&Ie.reason?h.Z.createCancellation(H,R(R({},Ie),{},{key:K.query.id,product:q.product})).then((function(e){e.success?(j.Am.success("Pembatalan berhasil"),window.location.reload()):j.Am.error(e.message)})):j.Am.error("Data tidak lengkap"))}))};(0,c.useEffect)((function(){w.Z.getPayments(H).then((function(e){e.success&&De(e.data)}))}),[]);var Je=function(e){var s=e.target,n=s.name,a=s.value;_e((function(e){return R(R({},e),{},(0,i.Z)({},n,a))}))};if(G)return(0,S.jsxs)("div",{style:{height:"50vh",marginBottom:"5rem"},className:"d-flex flex-column align-items-center justify-content-center",children:[(0,S.jsx)("img",{src:"https://cdn.masterdiskon.com/masterdiskon/assets/front/img/src/pulse-spinner.svg"}),(0,S.jsx)("h4",{children:"Sedang menyiapkan data..."})]});if(!q)return(0,S.jsx)("div",{style:{height:"50vh",marginBottom:"5rem"},className:"d-flex flex-column align-items-center justify-content-center",children:(0,S.jsx)("h4",{children:"Data pesanan tidak ditemukan"})});var Ge=Z[q.product];return(0,S.jsxs)(S.Fragment,{children:[m()(Date()).isBefore(m()(null===q||void 0===q||null===(e=q.status)||void 0===e?void 0:e.timelimit,"DD MMM YYYY HH:mm"))&&3===q.status.id&&(0,S.jsx)("section",{id:"timer",className:"bg-danger py-2",children:(0,S.jsx)("div",{className:"container",children:(0,S.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[(0,S.jsx)("span",{className:"mr-3 text-white",children:"Batas Pembayaran"}),(0,S.jsxs)("span",{id:"hitungmundur",className:"d-flex",children:[(0,S.jsxs)("div",{className:"rounded bg-light opacity-50 border border-dark text-center p-1 mr-2",children:[(0,S.jsx)("b",{children:(0,S.jsx)("span",{className:"angka",children:V.hours})})," h "]}),(0,S.jsxs)("div",{className:"rounded bg-white opacity-50 border border-dark text-center p-1 mr-2",children:[(0,S.jsx)("b",{children:(0,S.jsx)("span",{className:"angka",children:V.minutes})})," m "]}),(0,S.jsxs)("div",{className:"rounded bg-white opacity-50 border border-dark text-center p-1 mr-2",children:[(0,S.jsx)("b",{children:(0,S.jsx)("span",{className:"angka",children:V.seconds})})," s "]})]})]})})}),(0,S.jsx)("section",{className:"my-3",children:(0,S.jsx)("div",{className:"container",children:(0,S.jsxs)("div",{className:"row",children:[(0,S.jsxs)("div",{className:"col-md-8 kotak-md-1 px-0-sm",children:[q.isCancel&&(0,S.jsx)("button",{onClick:function(){return null!==q&&void 0!==q&&q.isRefund?ae((function(e){return!e})):ze()},type:"button",className:"btn mb-3 btn-danger btn-md btn-block",children:"Batalkan Pesanan"}),(0,S.jsxs)("div",{className:"card mb-4",style:{borderRadius:"15px"},children:[(0,S.jsx)("div",{className:"card-header py-3",children:(0,S.jsx)("h6",{className:"font-weight-bold text-primary",children:"Detail Pesanan"})}),13===q.status.id?(0,S.jsx)("div",{className:"card-body border-bottom bg-danger py-2 bayar-disini rounded-bottom text-white",children:(0,S.jsx)(b.Z,{clickable:le,handleOpenPayment:Ue,handleSubmitIssued:Ke,purchase:q,setClickable:re,setTokenIssued:oe})}):(0,S.jsx)("div",{className:"card-body border-bottom bg-warning py-2 bayar-disini rounded-bottom",children:(0,S.jsx)(b.Z,{clickable:le,handleOpenPayment:Ue,handleSubmitIssued:Ke,purchase:q,setClickable:re,setTokenIssued:oe})})]}),(0,S.jsxs)("div",{className:"card mb-4",style:{borderRadius:"20px"},children:[(0,S.jsx)("div",{className:"card-header border-top",children:(0,S.jsx)("span",{className:"card-title",children:(0,S.jsx)("b",{children:"Produk"})})}),(0,S.jsxs)("div",{className:"card-product",children:[(0,S.jsx)(Ge,{purchase:q}),(0,S.jsx)("hr",{}),q.guest&&(0,S.jsxs)("div",{className:"card-body",children:[(0,S.jsx)("h5",{children:"Tamu"}),(0,S.jsx)("div",{className:"table-responsive",children:(0,S.jsxs)("table",{id:"myTable",className:"table m-0 table-striped table-hover table-sm",children:[(0,S.jsx)("thead",{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)("th",{children:"No"}),(null===(s=q.guest[0])||void 0===s?void 0:s.title)&&(0,S.jsx)("th",{children:"Title"}),(0,S.jsx)("th",{children:"Nama"}),(null===(n=q.guest[0])||void 0===n?void 0:n.dob)&&(0,S.jsx)("th",{children:"Tanggal Lahir"}),(null===(u=q.guest[0])||void 0===u?void 0:u.type)&&(0,S.jsx)("th",{children:"Tipe"}),(null===(v=q.guest[0])||void 0===v?void 0:v.identificationNumber)&&(0,S.jsx)("th",{children:"NIK"}),(null===(p=q.guest[0])||void 0===p||null===(f=p.passport)||void 0===f?void 0:f.nat)&&(0,S.jsx)("th",{children:"Negara"}),(null===(y=q.guest[0])||void 0===y||null===(P=y.passport)||void 0===P?void 0:P.doi)&&(0,S.jsx)("th",{children:"Passport Issue"}),(null===(A=q.guest[0])||void 0===A||null===(O=A.passport)||void 0===O?void 0:O.doe)&&(0,S.jsx)("th",{children:"Expired Passport"}),(null===(C=q.guest[0])||void 0===C?void 0:C.ssr)&&(0,S.jsx)("th",{children:"Addon"})]})}),(0,S.jsx)("tbody",{children:q.guest.map((function(e,s){var n,i,a,t,l,r;return(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{children:++s}),(null===e||void 0===e?void 0:e.title)&&(0,S.jsx)("td",{children:null===e||void 0===e?void 0:e.title}),(0,S.jsxs)("td",{children:[e.firstName," ",e.lastName]}),(null===e||void 0===e?void 0:e.dob)&&(0,S.jsx)("td",{children:e.dob}),(null===e||void 0===e?void 0:e.type)&&(0,S.jsx)("td",{children:e.type}),(null===e||void 0===e?void 0:e.identificationNumber)&&(0,S.jsx)("td",{children:e.identificationNumber}),(null===e||void 0===e||null===(n=e.passport)||void 0===n?void 0:n.nat)&&(0,S.jsx)("td",{children:null===e||void 0===e||null===(i=e.passport)||void 0===i?void 0:i.nat}),(null===e||void 0===e||null===(a=e.passport)||void 0===a?void 0:a.doi)&&(0,S.jsx)("td",{children:null===e||void 0===e||null===(t=e.passport)||void 0===t?void 0:t.doi}),(null===e||void 0===e||null===(l=e.passport)||void 0===l?void 0:l.doe)&&(0,S.jsx)("td",{children:null===e||void 0===e||null===(r=e.passport)||void 0===r?void 0:r.doe}),(null===e||void 0===e?void 0:e.ssr)&&(0,S.jsx)("td",{children:(0,S.jsx)("button",{onClick:function(){return qe(e.ssr)},type:"button",className:"btn btn-sm btn-primary",children:"Check"})})]},s)}))})]})})]}),(0,S.jsx)("hr",{}),"flight"===q.product&&(0,S.jsxs)("div",{className:"card-body",children:[(0,S.jsx)("h5",{children:(0,S.jsx)("b",{children:"Tarif"})}),(0,S.jsx)("div",{className:"table-responsive",children:(0,S.jsxs)("table",{className:"table table-bordered mb-0",children:[(0,S.jsx)("thead",{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)("th",{children:"No"}),(0,S.jsx)("th",{children:"Type"}),(0,S.jsx)("th",{children:"Qty"}),(0,S.jsx)("th",{children:"Price"}),(0,S.jsx)("th",{children:"Fee"}),(0,S.jsx)("th",{children:"Tax"}),(0,S.jsx)("th",{children:"Addons"}),(0,S.jsx)("th",{children:"Total"})]})}),(0,S.jsx)("tbody",{className:"price-flight-list",children:null===(M=function(){if(q){var e=Object.keys(null===q||void 0===q?void 0:q.price.perpax),s=null===q||void 0===q?void 0:q.price.perpax;return e=e.map((function(e){for(var n,i=0;i<s[e].count;i++)n=R(R({},s[e]),{},{type:e});return n}))}}())||void 0===M?void 0:M.map((function(e,s){return(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{children:++s}),(0,S.jsx)("td",{children:e.type}),(0,S.jsx)("td",{children:e.count}),(0,S.jsxs)("td",{children:["Rp",e.subtotal.toLocaleString()]}),(0,S.jsxs)("td",{children:["Rp",e.fee.toLocaleString()]}),(0,S.jsxs)("td",{children:["Rp",e.tax.toLocaleString()]}),(0,S.jsxs)("td",{children:["Rp",e.addon.toLocaleString()]}),(0,S.jsxs)("td",{children:["Rp",e.total.toLocaleString()]})]})}))})]})})]})]}),(0,S.jsx)("div",{className:"card-header",children:(0,S.jsx)("span",{className:"card-title",children:"Kontak"})}),(0,S.jsx)("div",{className:"card-body",children:(0,S.jsxs)("div",{className:"row",children:[(0,S.jsx)("div",{className:"col-md-4",children:(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{children:(0,S.jsx)("strong",{children:"Nama"})}),(0,S.jsxs)("p",{children:[null===q||void 0===q?void 0:q.contact.firstName," ",null===q||void 0===q?void 0:q.contact.lastName]})]})}),(0,S.jsx)("div",{className:"col-md-4",children:(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{children:(0,S.jsx)("strong",{children:"Telepon"})}),(0,S.jsxs)("p",{children:["+",null===q||void 0===q?void 0:q.contact.phoneCode," ",null===q||void 0===q?void 0:q.contact.phone]})]})}),(0,S.jsx)("div",{className:"col-md-4",children:(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{children:(0,S.jsx)("strong",{children:"Email"})}),(0,S.jsx)("p",{children:null===q||void 0===q?void 0:q.contact.email})]})})]})})]}),"hotel"===q.product&&9===q.status.id&&(0,S.jsx)("div",{className:"row",children:(0,S.jsx)("div",{className:"col-12",children:(0,S.jsx)("div",{class:"card",children:(0,S.jsxs)("div",{class:"card-body",children:[(0,S.jsx)("h4",{children:"Ulasan"}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Judul Ulasan"}),(0,S.jsx)("input",{type:"text",onChange:He,name:"title_review",value:Ye.title_review,className:"form-control"})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Isi Ulasan"}),(0,S.jsx)("textarea",{onChange:He,name:"content_review",value:Ye.content_review,className:"form-control",rows:3})]}),(0,S.jsxs)("div",{className:"row",children:[(0,S.jsxs)("div",{className:"col-md-4",children:[(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Rating"}),(0,S.jsx)(g.Z,{rating:we,setRating:Se})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"HelpFull"}),(0,S.jsx)(g.Z,{rating:Re,setRating:Ze})]})]}),(0,S.jsxs)("div",{className:"col-md-4",children:[(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Kebersihan"}),(0,S.jsx)(g.Z,{rating:Oe.kebersihan,setRating:function(e){return Be("kebersihan",e)}})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Kenyamanan"}),(0,S.jsx)(g.Z,{rating:Oe.kenyamanan,setRating:function(e){return Be("kenyamanan",e)}})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Lokasi"}),(0,S.jsx)(g.Z,{rating:Oe.lokasi,setRating:function(e){return Be("lokasi",e)}})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Layanan"}),(0,S.jsx)(g.Z,{rating:Oe.layanan,setRating:function(e){return Be("layanan",e)}})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Makanan"}),(0,S.jsx)(g.Z,{rating:Oe.makanan,setRating:function(e){return Be("makanan",e)}})]})]}),(0,S.jsxs)("div",{className:"col-md-4",children:[(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Fasilitas"}),(0,S.jsx)(g.Z,{rating:Oe.fasilitas,setRating:function(e){return Be("fasilitas",e)}})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Staff"}),(0,S.jsx)(g.Z,{rating:Oe.staff,setRating:function(e){return Be("staff",e)}})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Harga"}),(0,S.jsx)(g.Z,{rating:Oe.harga,setRating:function(e){return Be("harga",e)}})]}),(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Parkir"}),(0,S.jsx)(g.Z,{rating:Oe.parkir,setRating:function(e){return Be("parkir",e)}})]})]})]}),(0,S.jsx)("div",{className:"d-flex justify-content-end w-100",children:(0,S.jsx)("button",{type:"button",onClick:function(){var e=R(R({},Ye),{},{id_order:K.query.id,id_review_type:2,helpful:Re,rating:we,fullreview:Oe});N.Z.addReview(e,H).then((function(e){e.success?j.Am.success("Ulasan berhasil dikirim"):j.Am.error("Ulasan tidak lengap")}))},className:"btn btn-primary",children:"Submit"})})]})})})})]}),(0,S.jsxs)("div",{className:"col-md-4 kotak-md-2 order-1 px-0-sm",children:[(0,S.jsxs)("div",{className:"card shadow card-body mb-3 border-0 bg-primary text-white",children:[(0,S.jsx)("p",{className:"mb-0",children:(0,S.jsx)("small",{children:"TOTAL PEMBELIAN"})}),(0,S.jsxs)("h3",{children:[" ",(0,S.jsxs)("b",{children:["Rp",null===q||void 0===q?void 0:q.price.total.toLocaleString()]})]})]}),0!=(null===q||void 0===q?void 0:q.codeinv)?(0,S.jsx)("div",{className:"card-body border-bottom bg-warning py-2 bayar-disini rounded-bottom",children:(0,S.jsx)("div",{className:"row",children:(0,S.jsx)("div",{className:"col-md-12",children:(0,S.jsx)("div",{className:"form-group",children:(0,S.jsx)("a",{href:"https://cdn.masterdiskon.com/masterdiskon/order/invoice/2023/"+(null===q||void 0===q?void 0:q.codeinv)+".pdf?",target:"_blank",type:"button",class:"btn btn-block btn-primary  ",children:"Cetak Invoice"})})})})}):(0,S.jsx)(S.Fragment,{}),(0,S.jsxs)("div",{className:"card shadow mb-3 border-0",children:[(0,S.jsxs)("div",{className:"card-body border-bottom",children:[(0,S.jsx)("p",{className:"mb-0 text-muted",children:(0,S.jsx)("small",{children:"NO PESANAN"})}),(0,S.jsx)("span",{children:null===q||void 0===q?void 0:q.code})]}),(0,S.jsxs)("div",{className:"card-body border-bottom",children:[(0,S.jsx)("p",{className:"mb-0 text-muted",children:(0,S.jsx)("small",{children:"STATUS PESANAN"})}),(0,S.jsx)("p",{className:"badge badge-".concat(null===q||void 0===q?void 0:q.status.color," mb-0"),children:null===q||void 0===q?void 0:q.status.name}),(0,S.jsx)("p",{className:"mb-0",children:null===q||void 0===q?void 0:q.status.description})]}),(0,S.jsxs)("div",{className:"card-body border-bottom",children:[(0,S.jsx)("p",{className:"mb-0 text-muted",children:(0,S.jsx)("small",{children:"RIWAYAT PESANAN"})}),(0,S.jsx)("div",{className:"riwayat-pesanan",children:null===q||void 0===q?void 0:q.status.history.map((function(e){return(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:e.status})}),(0,S.jsx)("span",{children:e.date})]})}))})]}),(0,S.jsxs)("div",{className:"card-body",children:[(0,S.jsx)("p",{className:"mb-0 text-muted",children:(0,S.jsx)("small",{children:"RINCIAN PEMBAYARAN"})}),(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:"Subtotal"})}),(0,S.jsxs)("span",{children:["Rp",null===q||void 0===q?void 0:q.price.subtotal.toLocaleString()]})]}),"flight"===q.product?(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:"Pajak dan lainnya "})}),(0,S.jsxs)("span",{className:"tax-and-more",children:["Rp",((null===q||void 0===q?void 0:q.price.tax)+(null===q||void 0===q?void 0:q.price.iwjr)+(null===q||void 0===q?void 0:q.price.fee2)).toLocaleString()]})]}):(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:"Pajak"})}),(0,S.jsx)("span",{className:"text_fee",children:(0,S.jsxs)("strong",{children:["Rp",((null===q||void 0===q?void 0:q.price.total)-(null===q||void 0===q?void 0:q.price.subtotal)).toLocaleString()]})})]}),"flight"===q.product&&(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:"Tambahan"})}),(0,S.jsxs)("span",{className:"extra-flight",children:["Rp",null===q||void 0===q?void 0:q.price.addon]})]}),(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:"Biaya Penanganan"})}),(0,S.jsxs)("span",{children:["Rp",null===q||void 0===q?void 0:q.price.fee.toLocaleString()]})]}),(null===q||void 0===q?void 0:q.price.point)>0&&(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:(0,S.jsx)("small",{children:"Point digunakan"})})}),(0,S.jsxs)("span",{className:"text-danger",children:["-",null===q||void 0===q?void 0:q.price.point.toLocaleString()]})]}),(null===q||void 0===q?void 0:q.price.discount)>0&&(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:(0,S.jsx)("small",{children:"Diskon"})})}),(0,S.jsxs)("span",{className:"text-danger",children:["-Rp",null===q||void 0===q?void 0:q.price.discount.toLocaleString()]})]}),(0,S.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[(0,S.jsx)("span",{children:(0,S.jsx)("strong",{children:"Total tagihan"})}),(0,S.jsxs)("b",{children:["Rp",null===q||void 0===q?void 0:q.price.total.toLocaleString()]})]})]})]}),(0,S.jsx)("div",{className:"list-group-item ",children:(0,S.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("b",{children:null===q||void 0===q||null===(T=q.payments)||void 0===T?void 0:T.id}),(0,S.jsx)("p",{className:"mb-0",children:(0,S.jsx)("span",{className:"badge badge-success",children:null===q||void 0===q||null===(D=q.payments)||void 0===D||null===(L=D.history[0])||void 0===L?void 0:L.status})})]}),(0,S.jsx)("div",{className:"text-right",children:(0,S.jsx)("small",{children:null===q||void 0===q||null===(I=q.payments)||void 0===I||null===(_=I.history[0])||void 0===_?void 0:_.date})})]})})]})]})})}),(0,S.jsxs)(a.Z,{isOpen:ee,toggle:Ue,centered:!0,size:"lg",children:[(0,S.jsx)(t.Z,{children:(0,S.jsx)(x.Z,{handleChangePaymentMethod:function(e){me(e)},paymentMethodSelected:null!==q&&void 0!==q&&null!==(B=q.payments)&&void 0!==B&&null!==(E=B.selected)&&void 0!==E&&E.id?null===q||void 0===q||null===(Y=q.payments)||void 0===Y||null===(F=Y.selected)||void 0===F?void 0:F.id:ue,flightRepricing:q})}),(0,S.jsx)(l.Z,{children:(0,S.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){h.Z.changePaymentMethod(H,{product:q.product,key:K.query.id,paymentMethod:ue}).then((function(e){e.success?j.Am.success("Metode pembayaran berhasil diubah"):j.Am.error("Metode pembayaran sudah tidak diubah"),ye((function(e){return!e})),Ue()}))},children:"Simpan perubahan"})})]}),(0,S.jsxs)(a.Z,{isOpen:je,centered:!0,size:"lg",children:[(0,S.jsx)(r.Z,{toggle:function(){return qe([])},children:(0,S.jsx)("h4",{children:"Additional Details of Baggage and Meal"})}),(0,S.jsx)(t.Z,{children:(0,S.jsxs)("table",{className:"table",children:[(0,S.jsx)("thead",{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)("th",{children:"No"}),(0,S.jsx)("th",{children:"Tipe"}),(0,S.jsx)("th",{children:"Nama"}),(0,S.jsx)("th",{children:"Harga"})]})}),(0,S.jsx)("tbody",{children:be.map((function(e,s){return(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{scope:"row",children:++s}),(0,S.jsx)("td",{children:e.ssrType}),(0,S.jsx)("td",{children:"meal"===e.ssrType?e.code.split("=")[0]:"".concat(Math.floor(e.code.split(";")[0]),"Kg")}),(0,S.jsx)("td",{children:"meal"===e.ssrType?"Rp".concat(Math.floor(e.code.split("=")[1]).toLocaleString()):"Rp".concat(Math.floor(e.code.split(";")[1]).toLocaleString())})]})}))})]})})]}),(0,S.jsxs)(a.Z,{isOpen:ie,toggle:function(){return ae((function(e){return!e}))},centered:!0,size:"md",children:[(0,S.jsx)(r.Z,{toggle:function(){return ae((function(e){return!e}))},children:(0,S.jsx)("h5",{className:"font-weight-bold",children:"Form Refund"})}),(0,S.jsx)(t.Z,{children:(0,S.jsxs)("div",{className:"row",children:[(0,S.jsx)("div",{className:"col-12",children:(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"No Rekening"}),(0,S.jsx)("input",{onChange:Je,name:"accountNumber",value:Ie.accountNumber,type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"Masukan no rekening anda..."})]})}),(0,S.jsx)("div",{className:"col-12",children:(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Pemilik Rekening"}),(0,S.jsx)("input",{onChange:Je,name:"customerName",value:Ie.customerName,type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"Masukan nama pemilik rekening..."})]})}),(0,S.jsx)("div",{className:"col-12",children:(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{children:"Bank"}),(0,S.jsx)("select",{onChange:Je,value:Ie.idPayment,class:"form-control",name:"idPayment",id:"",children:Te.map((function(e){return(0,S.jsx)("option",{value:e.id_payment,children:e.bank_name})}))})]})}),(0,S.jsx)("div",{className:"col-12",children:(0,S.jsxs)("div",{className:"form-group",children:[(0,S.jsx)("label",{htmlFor:!0,children:"Alasan Pembatalan"}),(0,S.jsx)("textarea",{onChange:Je,name:"reason",value:Ie.reason,className:"form-control",rows:3,placeholder:"Masukan alasan pembatalan..."})]})}),(0,S.jsx)("div",{className:"col-12 d-flex justify-content-end",children:(0,S.jsx)("button",{type:"button",onClick:ze,className:"btn btn-primary",children:"Kirim"})})]})})]})]})}}}]);