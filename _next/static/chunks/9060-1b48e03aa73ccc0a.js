"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9060],{79060:function(e,t,n){n.d(t,{Z:function(){return Y}});var s=n(59499),o=n(67294),i=n(1954),r=n(17563),l=n(16819),a=n(21897),c=n(25617),d=n(86733),u=n(30071),m=n(30381),p=n.n(m),f=n(27906),h=n(94184),x=n.n(h),g=n(86704),b=n(91592),j=n(42365),y=(n(28951),n(85893));var v=function(e){var t=e.passanger,n=e.addPassanger,s=e.reducedPassanger,r=(0,o.useState)(!1),l=r[0],a=r[1];return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(g.Z,{isOpen:l,toggle:function(){a((function(e){return!e}))},children:[(0,y.jsxs)(b.Z,{tag:"div","data-toggle":"dropdown",className:"input-group",children:[(0,y.jsx)("div",{className:"input-group-append",children:(0,y.jsx)("span",{className:"input-group-text text-primary",children:(0,y.jsx)(i.JO,{icon:"heroicons:user-group"})})}),(0,y.jsx)("input",{type:"text",readOnly:!0,value:"".concat(function(){var e=0;return Object.keys(t).forEach((function(n){e+=Number(t[n])})),e}()," Penumpang"),className:"form-control"})]}),(0,y.jsxs)(j.Z,{right:!0,className:"px-3",children:[(0,y.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{children:(0,y.jsx)("b",{children:"Dewasa"})}),(0,y.jsx)("br",{}),(0,y.jsx)("small",{className:"text-muted",children:" > 12 thn"})]}),(0,y.jsxs)("div",{className:"input-group w-50 mb-2 cariqty",children:[(0,y.jsx)("div",{className:"input-group-prepend",children:(0,y.jsx)("button",{onClick:function(){return s("adult")},className:"btn btn-outline-secondary form-control flight_minus",type:"button",children:"-"})}),(0,y.jsx)("input",{type:"text",className:"form-control text-center numberonly hitung flight_dropdewasa",value:t.adult,readOnly:!0}),(0,y.jsx)("div",{className:"input-group-append",children:(0,y.jsx)("button",{onClick:function(){return n("adult")},className:"btn btn-outline-secondary form-control flight_plus",type:"button",children:"+"})})]})]}),(0,y.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{children:(0,y.jsx)("b",{children:"Anak-anak"})}),(0,y.jsx)("br",{}),(0,y.jsx)("small",{className:"text-muted",children:"2-12 thn"})]}),(0,y.jsxs)("div",{className:"input-group w-50 mb-2 cariqty",children:[(0,y.jsx)("div",{className:"input-group-prepend",children:(0,y.jsx)("button",{onClick:function(){return s("child")},className:"btn btn-outline-secondary form-control flight_minus0",type:"button",children:"-"})}),(0,y.jsx)("input",{value:t.child,type:"text",className:"form-control text-center numberonly hitung flight_dropanak",name:"anak",readOnly:!0}),(0,y.jsx)("div",{className:"input-group-append",children:(0,y.jsx)("button",{onClick:function(){return n("child")},className:"btn btn-outline-secondary form-control flight_plus",type:"button",children:"+"})})]})]}),(0,y.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{children:(0,y.jsx)("b",{children:"Bayi"})}),(0,y.jsx)("br",{}),(0,y.jsx)("small",{className:"text-muted",children:"0-2 thn"})]}),(0,y.jsxs)("div",{className:"input-group w-50 mb-2 cariqty",children:[(0,y.jsx)("div",{className:"input-group-prepend",children:(0,y.jsx)("button",{onClick:function(){return s("infant")},className:"btn btn-outline-secondary form-control flight_minus0",type:"button",children:"-"})}),(0,y.jsx)("input",{value:t.infant,type:"text",className:"form-control text-center numberonly hitung flight_dropbayi",readOnly:!0}),(0,y.jsx)("div",{className:"input-group-append",children:(0,y.jsx)("button",{onClick:function(){return n("infant")},className:"btn btn-outline-secondary form-control flight_plus",type:"button",children:"+"})})]})]})]})]})})},w=n(11163),N=(n(77837),n(25675)),k=n(186),D=(n(96486),n(76457));function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={border:"none",height:"auto",width:"100%",boxShadow:"none",paddingLeft:0,marginTop:"-5px",background:"transparent"},P=k.default.li.withConfig({displayName:"WidgetFlight__ListItemStyled",componentId:"sc-100sjwh-0"})(["height:83px !important;padding-bottom:0 !important;"]),Y=function(e){var t,n,m=e.options,h=e.handleChangeOptions,g=(0,c.v9)((function(e){return e.token})).access_token,b=(0,w.useRouter)(),j=(0,o.useRef)(_.debounce((function(e,t,n){f.Z.getAutocomplete(e,{product:"flight",q:t}).then((function(e){e.success&&n("options",e.data),n("isLoading",!1)}))}),2e3)).current,k=(0,o.useRef)(_.debounce((function(e,t,n){f.Z.getAutocomplete(e,{product:"flight",q:t}).then((function(e){e.success&&n("options",e.data),n("isLoading",!1)}))}),2e3)).current,O=(0,o.useState)({options:[],isLoading:!1,keyword:null!==(t=null===m||void 0===m?void 0:m.from)&&void 0!==t?t:"",selected:[]}),Y=O[0],F=O[1],Z=(0,o.useState)({options:[],isLoading:!1,keyword:null!==(n=null===m||void 0===m?void 0:m.to)&&void 0!==n?n:"",selected:[]}),M=Z[0],E=Z[1],I=(0,o.useState)({from:null!==m&&void 0!==m&&m.dateFrom?ie(m.dateFrom):p()(new Date).add(1,"days").toDate(),to:null!==m&&void 0!==m&&m.dateTo?ie(m.dateTo):null!==m&&void 0!==m&&m.dateFrom?p()(ie(m.dateFrom)).add(1,"days").toDate():p()(new Date).add(2,"days").toDate()}),L=I[0],T=I[1],q=(0,o.useState)({adult:null!==m&&void 0!==m&&m.adult?m.adult:1,child:null!==m&&void 0!==m&&m.child?m.child:0,infant:null!==m&&void 0!==m&&m.infant?m.infant:0}),B=q[0],K=q[1],A=(0,o.useState)(null!==m&&void 0!==m&&m.classCabin?m.classCabin:""),R=A[0],z=A[1],J=(0,o.useState)(!1),U=J[0],W=J[1],G=(0,o.useRef)(),H=(0,o.useState)(!(null===m||void 0===m||!m.dateTo)),Q=H[0],V=H[1],X=(0,o.useState)(!(null===m||void 0===m||!m.direct)&&!m.direct),$=X[0],ee=X[1],te=function(e,t){F((function(n){return C(C({},n),{},(0,s.Z)({},e,t))}))},ne=function(e,t){E((function(n){return C(C({},n),{},(0,s.Z)({},e,t))}))};(0,o.useEffect)((function(){null!==m&&void 0!==m&&m.from&&f.Z.getAutocomplete(g,{product:"flight",q:null===m||void 0===m?void 0:m.from}).then((function(e){e.success&&te("selected",e.data.filter((function(e){return e.id===m.from})))}))}),[null===m||void 0===m?void 0:m.from]),(0,o.useEffect)((function(){null!==m&&void 0!==m&&m.to&&f.Z.getAutocomplete(g,{product:"flight",q:null===m||void 0===m?void 0:m.to}).then((function(e){e.success&&ne("selected",e.data.filter((function(e){return e.id===m.to})))}))}),[null===m||void 0===m?void 0:m.to]),(0,o.useEffect)((function(){te("isLoading",!0),(Y.keyword.length>2||Y.keyword.length<1)&&j(g,Y.keyword,te)}),[Y.keyword,j]),(0,o.useEffect)((function(){ne("isLoading",!0),(M.keyword.length>2||M.keyword.length<1)&&k(g,M.keyword,ne)}),[M.keyword,k]);var se=Q?{start:L.from,end:L.to}:{start:L.from},oe=function(){V((function(e){return!e}))};function ie(e){var t=e.split("-");return new Date(t[2],t[1]-1,t[0])}return(0,y.jsxs)("div",{style:{padding:"15px",color:"white",background:"linear-gradient(90deg, rgba(9,113,185,1) 0%, rgba(53,142,230,1) 50%, rgba(41,193,209,1) 100%)",borderRadius:"20px"},children:[(0,y.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,y.jsxs)("div",{className:"d-flex",children:[(0,y.jsxs)("div",{className:"custom-control custom-radio mx-2",children:[(0,y.jsx)("input",{type:"radio",onChange:oe,className:"custom-control-input form-widget form-isreturn",id:"oneway",checked:!Q}),(0,y.jsx)("label",{className:"custom-control-label font-weight-bold",htmlFor:"oneway",children:"One Way"})]}),(0,y.jsxs)("div",{className:"custom-control custom-radio mx-2",children:[(0,y.jsx)("input",{checked:Q,onChange:oe,type:"radio",className:"custom-control-input form-widget ",id:"pulangterbang"}),(0,y.jsx)("label",{className:"custom-control-label font-weight-bold",htmlFor:"pulangterbang",children:"Round Trip"})]}),(0,y.jsxs)("div",{className:"custom-control custom-checkbox mx-2",children:[(0,y.jsx)("input",{type:"checkbox",checked:$,onChange:function(){return ee(!$)},className:"custom-control-input",id:"directOnly"}),(0,y.jsx)("label",{className:"custom-control-label",htmlFor:"directOnly",children:"Direct Only"})]})]}),(0,y.jsxs)("div",{className:"d-flex",children:[(0,y.jsx)("div",{className:"mx-2",children:(0,y.jsx)(v,{passanger:B,addPassanger:function(e){K((function(t){return C(C({},t),{},(0,s.Z)({},e,Number(t[e])+1))}))},reducedPassanger:function(e){("adult"===e&&B[e]>1||"adult"!==e&&B[e]>0)&&K((function(t){return C(C({},t),{},(0,s.Z)({},e,Number(t[e])-1))}))}})}),(0,y.jsx)("div",{className:"mx-2",children:(0,y.jsxs)("select",{className:"form-control",value:R,onChange:function(e){return z(e.target.value)},children:[(0,y.jsx)("option",{value:"",selected:"true",children:"Semua Cabin"}),(0,y.jsx)("option",{value:"E",children:"Ekonomi"}),(0,y.jsx)("option",{value:"S",children:"Premium Ekonomi"}),(0,y.jsx)("option",{value:"B",children:"Bisnis"}),(0,y.jsx)("option",{value:"F",children:"First"})]})})]})]}),(0,y.jsxs)("ul",{className:"list-group list-group-horizontal text-dark list-menu",children:[(0,y.jsx)(P,{className:x()("list-group-item pb-0",{"w-25":Q,"w-35":!Q}),children:(0,y.jsxs)("div",{className:"form-group mb-2",children:[(0,y.jsx)("label",{className:"mb-0 font-weight-bold",children:"Dari"}),(0,y.jsx)(a.pY,{id:"from",inputProps:{style:S,placeholder:"Kota atau bandara"},selected:Y.selected,onChange:function(e){return te("selected",e)},filterBy:function(){return!0},labelKey:"text",onSearch:function(){},onInputChange:function(e){return te("keyword",e)},options:Y.options,renderMenuItemChildren:function(e){return Y.isLoading?(0,y.jsx)("span",{className:"d-flex justify-content-between align-items-center py-2 px-1",children:(0,y.jsx)(D.Z,{type:"text",rows:1})}):(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("span",{className:"d-flex justify-content-between align-items-center ",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("strong",{style:{textOverflow:"ellipsis",width:"220px",fontSize:"16px",display:"inline-block",whiteSpace:"break-spaces"},children:e.text}),(0,y.jsx)("br",{}),(0,y.jsxs)("small",{style:{width:"100%",display:"inline-block",whiteSpace:"break-spaces"},children:[e.city,", ",e.country_name]})]}),(0,y.jsx)("span",{className:"badge bg-primary text-uppercase text-white ml-1",children:e.id})]})})}})]})}),(0,y.jsxs)(P,{className:x()("list-group-item pb-0",{"w-25":Q,"w-35":!Q}),children:[(0,y.jsx)("div",{className:"exchange-flight p-1 bg-white",children:(0,y.jsx)("button",{onClick:function(){ne("selected",Y.selected),ne("keyword",Y.keyword),te("keyword",M.keyword),te("selected",M.selected),W((function(e){return!e}))},type:"button",className:x()("btn rounded-circle btn-primary btn-exchange-flight p-0",{rotate:U}),children:(0,y.jsx)(i.JO,{icon:l.Z,style:{verticalAlign:"middle",marginTop:"-4.7px"}})})}),(0,y.jsxs)("div",{className:"form-group mb-2 ml-2",children:[(0,y.jsx)("label",{className:"mb-0 font-weight-bold",children:"Ke"}),(0,y.jsx)(a.pY,{id:"to",inputProps:{placeholder:"Kota atau bandara tujuan",style:S},selected:M.selected,onChange:function(e){return ne("selected",e)},filterBy:function(){return!0},labelKey:"text",onSearch:function(){},onInputChange:function(e){return ne("keyword",e)},options:M.options,renderMenuItemChildren:function(e){return M.isLoading?(0,y.jsx)("span",{className:"d-flex justify-content-between align-items-center py-2 px-1",children:(0,y.jsx)(D.Z,{type:"text",rows:1})}):(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("span",{className:"d-flex justify-content-between align-items-center ",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("strong",{style:{textOverflow:"ellipsis",width:"220px",fontSize:"16px",display:"inline-block",whiteSpace:"break-spaces"},children:e.text}),(0,y.jsx)("br",{}),(0,y.jsxs)("small",{style:{width:"100%",display:"inline-block",whiteSpace:"break-spaces"},children:[e.city,", ",e.country_name]})]}),(0,y.jsx)("span",{className:"badge bg-primary text-uppercase text-white ml-1",children:e.id})]})})}})]})]}),(0,y.jsx)(P,{className:"list-group-item pb-0",style:{width:"20%"},children:(0,y.jsxs)("div",{className:x()("form-group mb-2 InputFromTo",{range:Q}),children:[(0,y.jsx)("label",{className:"mb-0 d-block font-weight-bold",children:"Berangkat"}),(0,y.jsx)(d.default,{value:L.from,formatDate:u.formatDate,format:"ddd, DD MMM YYYY",parseDate:u.parseDate,dayPickerProps:{disabledDays:{before:new Date},selectedDays:[L.from,Q&&{from:L.from,to:L.to}],modifiers:se,numberOfMonths:Q?2:1,locale:"id",localeUtils:u.default,onDayClick:function(){var e;return!Q&&(null===(e=G.current)||void 0===e?void 0:e.getInput().focus())}},onDayChange:function(e){p()(e).isBefore(L.to)?T((function(t){return C(C({},t),{},{from:e})})):T((function(t){return C(C({},t),{},{from:e,to:p()(e).add(1,"days").toDate()})}))},inputProps:{className:"form-control w-100",readOnly:!0,style:S}})]})}),Q&&(0,y.jsx)(P,{style:{width:"20%"},className:x()("list-group-item pb-0 InputFromTo range InputFromTo-to"),children:(0,y.jsxs)("div",{className:"form-group mb-2",children:[(0,y.jsx)("label",{className:"mb-0 font-weight-bold",children:"Pulang"}),(0,y.jsx)(d.default,{ref:G,format:"ddd, DD MMM YYYY",value:L.to,formatDate:u.formatDate,parseDate:u.parseDate,dayPickerProps:{selectedDays:[L.from,{from:L.from,to:L.to}],disabledDays:[{before:L.from},{before:new Date}],modifiers:se,localeUtils:u.default,month:L.from,fromMonth:L.from,locale:"id",numberOfMonths:2},onDayChange:function(e){T((function(t){return C(C({},t),{},{to:e})}))},style:{width:"200px"},inputProps:{className:"form-control bg-transparent",readOnly:!0,style:S}})]})}),(0,y.jsx)(P,{className:"list-group-item p-0 bg-warning w-20 tombolcari",children:(0,y.jsxs)("button",{onClick:function(){if(0===Y.selected.length&&alert("Kota asal belum diisi"),0===M.selected.length&&alert("Kota tujuan belum diisi"),Y.selected.length>0&&M.selected.length>0){var e=C(C({},B),{},{from:Y.selected[0].id,to:M.selected[0].id,dateFrom:p()(L.from).format("DD-MM-YYYY"),dateTo:Q?p()(L.to).format("DD-MM-YYYY"):"",classCabin:R,direct:$});h&&h(e),b.push("/product/flight?".concat(r.stringify(e)))}},className:"btn btn-transparent d-flex justify-content-center align-items-center font-weight-bold h-100 btn-block",children:[(0,y.jsx)("div",{style:{width:"25px",height:"25px",position:"relative"},className:"d-inline-block",children:(0,y.jsx)(N.default,{layout:"fill",src:"https://cdn.masterdiskon.com/masterdiskon/icon/fe/luv.png"})}),"Search"]})})]})]})}}}]);