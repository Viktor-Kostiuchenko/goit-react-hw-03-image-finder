(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={gallery:"ImageDataView_gallery__12_82",item:"ImageDataView_item__2TnC1",grid:"ImageDataView_grid__em7dL",gridItem:"ImageDataView_gridItem__4RV1V"}},11:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__vgg45",button:"SearchForm_button__1Re_y",searchIcon:"SearchForm_searchIcon__3lbM2",input:"SearchForm_input__23yHf"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__B1Xay",modal:"Modal_modal__35upx",buttonClose:"Modal_buttonClose__2EvTQ",iconClose:"Modal_iconClose__3MZ35"}},15:function(e,t,a){e.exports={enterData:"ImageGallery_enterData__3mYxT"}},17:function(e,t,a){e.exports={image:"ImageGalleryItem_image__2Ooha"}},20:function(e,t,a){e.exports={loader:"ImagePending_loader__2CdD7"}},24:function(e,t,a){e.exports={toTop:"ScrollUp_toTop__3CH6y"}},26:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3LNNx"}},27:function(e,t,a){e.exports={section:"Section_section__1C1Yp"}},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),s=a(4),i=a(5),l=a(7),u=a(6),m=a(8),d=a(16),h=a(3),g=a.n(h),p=a(17),b=a.n(p),j=a(2);function f(e){var t=e.smallImg,a=e.largeImg,n=e.alt,r=e.openModal;return Object(j.jsx)("img",{onClick:function(){return r(a,n)},className:b.a.image,src:t,alt:n})}g.a.propTypes={smallImg:g.a.string.isRequired,largeImg:g.a.string.isRequired,alt:g.a.string.isRequired,openModal:g.a.func.isRequired};var v=a(18);function O(e){var t=e.imagesArray,a=e.loadMore;return Object(j.jsx)(v.a,{dataLength:t.length,next:a,hasMore:!0})}var y=a(10),_=a.n(y);function x(e){var t=e.imagesArray,a=e.openModal,n=e.loadMore;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"".concat(_.a.gallery," ").concat(_.a.grid),children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(j.jsx)("li",{className:"".concat(_.a.item," ").concat(_.a.gridItem),children:Object(j.jsx)(f,{smallImg:n,largeImg:r,alt:o,openModal:a})},t)}))}),Object(j.jsx)(O,{imagesArray:t,loadMore:n})]})}var w=a(19),N=a.n(w),I=a(20),C=a.n(I),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)(N.a,{className:C.a.loader,type:"Grid",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(n.Component),S=a(14),k=a.n(S),F=a(21);function D(){return(D=Object(F.a)(k.a.mark((function e(t,a){var n,r,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pixabay.com/api/","23833327-aee66bbf86a23c3fb1d188dcb",n=new URLSearchParams({q:t,per_page:12,image_type:"photo",orientation:"horizontal",page:a}),r="".concat("https://pixabay.com/api/","?key=").concat("23833327-aee66bbf86a23c3fb1d188dcb","&").concat(n),e.prev=4,e.next=7,fetch(r);case 7:return o=e.sent,e.next=10,o.json();case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(4),alert("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(t));case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}var A={fetchImages:function(e,t){return D.apply(this,arguments)}},T=A,L=a(15),R=a.n(L),E="idle",U="pending",q="resolved",P="rejected",V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imagesArray:[],page:1,status:E},e.loadMore=function(){var t=e.props.imageName,a=e.state.page;T.fetchImages(t,a).then((function(t){0!==t.hits.length||0===t.totalHits?e.setState((function(e){var a=e.imagesArray;return{imagesArray:[].concat(Object(d.a)(a),Object(d.a)(t.hits)),status:q}})):m.b.warning("Nothing more found")})),e.updatePage()},e.updatePage=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imageName,r=this.props.imageName,o=this.state.page;n!==r&&(this.setState({status:U}),setTimeout((function(){T.fetchImages(r,o).then((function(e){var t=e.hits,n=e.totalHits;0!==t.length||0!==n?(1===o&&m.b.success("Found ".concat(n," images")),a.setState({imagesArray:t,status:q})):m.b.error("Oops nothing found")})).catch((function(e){return a.setState({error:e,status:P})})),a.updatePage()}),2e3))}},{key:"render",value:function(){var e=this.state,t=e.imagesArray,a=e.status,n=this.props.openModal;switch(a){case"pending":return Object(j.jsx)(M,{});case"resolved":return Object(j.jsx)(x,{imagesArray:t,openModal:n,loadMore:this.loadMore});case"idle":default:return Object(j.jsx)("h2",{className:R.a.enterData,children:"Enter data to search..."});case"rejected":return m.b.error("Ooops")}}}]),a}(n.Component),B=a(22),H=a(13),G=a.n(H),K=document.querySelector("#modal-root"),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.onBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this,t=this.props.modalImg,a=t.src,n=t.alt;return Object(o.createPortal)(Object(j.jsxs)("div",{className:G.a.overlay,onClick:this.onBackdropClick,children:[Object(j.jsx)("button",{type:"button",className:G.a.buttonClose,onClick:function(){return e.props.onClose()},children:Object(j.jsx)(B.a,{style:{color:"white",width:30,height:30}})}),Object(j.jsx)("div",{className:G.a.modal,children:Object(j.jsx)("img",{src:a,alt:n})})]}),K)}}]),a}(n.Component),Y=a(23),z=a.n(Y),Q=(a(55),a(24)),W=a.n(Q);function X(){return Object(j.jsx)(z.a,{showUnder:160,duration:500,style:{right:60,bottom:42},children:Object(j.jsx)("div",{className:W.a.toTop})})}var Z=a(25),$=a(11),ee=a.n($),te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.onNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.onSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):m.b.warning("Enter sth")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.imageName;return Object(j.jsxs)("form",{onSubmit:this.onSubmit,className:ee.a.searchForm,children:[Object(j.jsx)("button",{type:"submit",className:ee.a.button,children:Object(j.jsx)(Z.a,{className:ee.a.searchIcon})}),Object(j.jsx)("input",{className:ee.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.onNameChange})]})}}]),a}(n.Component),ae=a(26),ne=a.n(ae);function re(e){var t=e.onSubmit;return Object(j.jsx)("header",{className:ne.a.searchbar,children:Object(j.jsx)(te,{onSubmit:t})})}var oe=a(27),ce=a.n(oe);function se(e){var t=e.children;return Object(j.jsx)("section",{className:ce.a.section,children:t})}var ie=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:"",showModal:!1,modalImg:{src:"",alt:""}},e.onFormSubmit=function(t){e.setState({imageName:t})},e.toggleModal=function(t,a){e.setState((function(e){return{showModal:!e.showModal,modalImg:{src:t,alt:a}}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.imageName,a=e.showModal,n=e.modalImg;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(se,{children:Object(j.jsx)(re,{onSubmit:this.onFormSubmit})}),Object(j.jsxs)(se,{children:[Object(j.jsx)(V,{imageName:t,openModal:this.toggleModal}),Object(j.jsx)(X,{})]}),a&&Object(j.jsx)(J,{onClose:this.toggleModal,modalImg:n}),Object(j.jsx)(m.a,{autoClose:3e3})]})}}]),a}(n.Component);a(56);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(ie,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.7046c465.chunk.js.map