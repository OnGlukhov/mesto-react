(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(3),a(1)),i=a(5),l=a.n(i),p=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:l.a,alt:"\u041c\u0435\u0441\u0442\u0430 \u0420\u043e\u0441\u0441\u0438\u0438"}))},u=a(6),m=a(7),_=new(function(){function e(t){var a=t.baseUrl,n=t.headers,r=void 0===n?{}:n;Object(u.a)(this,e),this.baseUrl=a,this.headers=r}return Object(m.a)(e,[{key:"_checkPromise",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._checkPromise(t)}))}},{key:"newCardAdd",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.Place,link:e.Url})}).then((function(e){return t._checkPromise(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._checkPromise(t)}))}},{key:"patchProfileInfo",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.popup__text_type_author,about:e.popup__text_type_profession})}).then((function(e){return t._checkPromise(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkPromise(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return t._checkPromise(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkPromise(e)}))}},{key:"addAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._checkPromise(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"bfafbae2-07a3-48fe-808e-9f17604e2a09","Content-Type":"application/json"}});var d=function(e){var t=e.card,a=e.onCardClick;return r.a.createElement("div",{className:"element"},r.a.createElement("button",{className:"element__delete",type:"button"}),r.a.createElement("img",{onClick:function(){a(t)},className:"element__img",alt:t.name,src:t.link}),r.a.createElement("div",{className:"element__cell"},r.a.createElement("p",{className:"element__title"},t.name),r.a.createElement("div",{className:"element__likes"},r.a.createElement("button",{className:"element__like",type:"submit"}),r.a.createElement("p",{className:"element__like_length"},t.likes.length))))},h=function(e){var t=r.a.useState(),a=Object(s.a)(t,2),n=a[0],o=a[1],c=r.a.useState(),i=Object(s.a)(c,2),l=i[0],p=i[1],u=r.a.useState(),m=Object(s.a)(u,2),h=m[0],f=m[1],E=r.a.useState([]),b=Object(s.a)(E,2),v=b[0],y=b[1];return r.a.useEffect((function(){_.getUserInfo().then((function(e){!function(e){o(e.name),p(e.about),f(e.avatar)}(e)})),_.getInitialCards().then((function(e){y(e)}))}),[]),r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("button",{className:"profile__avatar_button",typt:"button",onClick:e.onEditAvatar,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"},r.a.createElement("img",{src:h,className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__info-name"},r.a.createElement("h1",{className:"profile__info-author"},n),r.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile})),r.a.createElement("p",{className:"profile__info-profession"},l)),r.a.createElement("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})),r.a.createElement("section",{className:"elements"},v&&v.map((function(t){return r.a.createElement(d,{key:t._id,card:t,onCardClick:e.clickImages})}))),r.a.createElement("section",{className:"popups"}))},f=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){return r.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},r.a.createElement("form",{name:"popup__container_type_".concat(e.name),className:"popup__container popup__container_type_".concat(e.name)},r.a.createElement("button",{onClick:e.onClose,type:"button",className:"popup__close popup__close_type_edit"}),r.a.createElement("h3",{className:"popup__title"},e.title),e.children))};var b=function(e){return r.a.createElement("section",{className:"popup popup__type_img ".concat(e.isOpen?"popup_opened":"")},r.a.createElement("div",{className:"popup__container_img"},r.a.createElement("button",{onClick:e.onClose,className:"popup__close popup__close_img",type:"button"}),r.a.createElement("img",{className:"popup__photo",src:e.image.link,alt:e.image.name}),r.a.createElement("p",{className:"popup__caption"},e.image.name)))};var v=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(s.a)(o,2),i=c[0],l=c[1],u=r.a.useState(!1),m=Object(s.a)(u,2),_=m[0],d=m[1],v=r.a.useState(!1),y=Object(s.a)(v,2),N=y[0],k=y[1],g=r.a.useState({}),C=Object(s.a)(g,2),x=C[0],O=C[1];function P(){d(!1),n(!1),l(!1),k(!1),O({})}return r.a.createElement("div",{className:"root"},r.a.createElement(p,null),r.a.createElement(h,{onEditProfile:function(){n(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){d(!0)},clickImages:function(e){O(e),k(!0)}}),r.a.createElement(f,null),r.a.createElement(E,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:a,onClose:P},r.a.createElement("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"popup__text_type_author",className:"popup__text popup__text_type_author",minLength:"2",maxLength:"40",required:!0,id:"author-card"}),r.a.createElement("span",{id:"author-card-error",className:"error"}),r.a.createElement("input",{type:"text",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",name:"popup__text_type_profession",className:"popup__text popup__text_type_profession",minLength:"2",maxLength:"200",required:!0,id:"profession-card"}),r.a.createElement("span",{id:"profession-card-error",className:"error"}),r.a.createElement("button",{className:"popup__button popup__button_type_edit",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement(E,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:i,onClose:P},r.a.createElement("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"Place",minLength:"2",required:!0,className:"popup__text popup__text_type_place",id:"place-card"}),r.a.createElement("span",{id:"place-card-error",className:"error"}),r.a.createElement("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"Url",required:!0,className:"popup__text popup__text_type_url",id:"url-card"}),r.a.createElement("span",{id:"url-card-error",className:"error"}),r.a.createElement("button",{className:"popup__button popup__button_disabled popup__button_type_add",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement(E,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:_,onClose:P},r.a.createElement("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",required:!0,className:"popup__text popup__text_type_avatar",id:"url-avatar"}),r.a.createElement("span",{id:"url-avatar-error",className:"error"}),r.a.createElement("button",{className:"popup__button popup__button_disabled popup__button_type_avatar",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement(b,{isOpen:N,onClose:P,image:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){},5:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.27b74d56.chunk.js.map