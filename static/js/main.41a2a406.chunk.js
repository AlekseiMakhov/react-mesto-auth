(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),i=n.n(o),c=n(19),s=n.n(c),r=(n(32),n(25)),l=n(2),u=n(4),d=n(20),p=n(6),j=n(3),b=n.n(j),m=n.p+"static/media/logo.c2821b38.svg";var h=function(e){var t=e.isMobile,n=e.email,o=e.loggedIn,i=e.isSignInLocation,c=e.setSignInScreen,s=e.resetSignInScreen,r=e.handleSignOut,l=e.isExpanded,u=e.expand;return t?Object(a.jsxs)("header",{className:b()("header-mobile",{"header-mobile__expanded":l}),children:[Object(a.jsx)("img",{className:"header-mobile__logo",src:m,alt:"\u041b\u043e\u0433\u043e"}),l&&Object(a.jsx)("p",{className:"header-mobile__text header-mobile__text_type_email",children:n}),o&&l&&Object(a.jsx)(p.b,{className:b()("header-mobile__text",{"header-mobile__text_type_signout":l}),onClick:r,to:"/signin",children:"\u0412\u044b\u0439\u0442\u0438"}),!o&&i&&Object(a.jsx)(p.b,{className:"header-mobile__text",onClick:s,to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),!o&&!i&&Object(a.jsx)(p.b,{className:"header-mobile__text",onClick:c,to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"}),l&&Object(a.jsx)("div",{className:"header-mobile__line"}),o&&Object(a.jsx)("button",{className:b()("header-mobile__menu-button",{"header-mobile__menu-button_type_close":l}),onClick:u})]}):Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",src:m,alt:"\u041b\u043e\u0433\u043e"}),Object(a.jsx)("p",{className:"header__text",children:n}),o&&Object(a.jsx)(p.b,{className:"header__text",onClick:r,to:"/signin",children:"\u0412\u044b\u0439\u0442\u0438"}),!o&&i&&Object(a.jsx)(p.b,{className:"header__text",onClick:s,to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),!o&&!i&&Object(a.jsx)(p.b,{className:"header__text",onClick:c,to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})]})},O=Object(o.createContext)();var _=function(e){var t=e.card,n=e.onCardClick,i=e.onLikeButtonClick,c=e.onCardDeleteClick,s=Object(o.useContext)(O),r=t.owner._id===s._id,l="element__trash-button ".concat(r?"element__trash-button_visible":""),u=t.likes.some((function(e){return e._id===s._id})),d="like__button ".concat(u?"like__button_pressed":"");return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"element",id:t.id,children:[Object(a.jsx)("img",{className:"element__image",src:t.link,alt:"".concat(t.name,".\u0424\u043e\u0442\u043e"),onClick:function(){n(t)}}),Object(a.jsx)("button",{type:"button",className:l,onClick:function(e){return c(t)}}),Object(a.jsx)("h3",{className:"element__text",children:t.name}),Object(a.jsxs)("div",{className:"like",children:[Object(a.jsx)("button",{type:"button",className:d,onClick:function(e){return i(t)}}),Object(a.jsx)("p",{className:"like__count",children:t.likes.length})]})]})})};var f=function(e){var t=e.onEditProfile,n=e.onEditAvatar,i=e.onAddPlace,c=e.onCardClick,s=e.onCardLike,r=e.onDeleteCard,l=e.cards,u=Object(o.useContext)(O);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"avatar",onClick:n,children:[Object(a.jsx)("img",{className:"avatar__img",src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("div",{className:"avatar__edit-icon"})]}),Object(a.jsxs)("div",{className:"profile-info",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"profile-info__name",children:u.name}),Object(a.jsx)("p",{className:"profile-info__description",children:u.about})]}),Object(a.jsx)("button",{type:"button",className:"profile-info__edit-button",onClick:t})]}),Object(a.jsx)("button",{type:"button",className:"add-image-button",onClick:i})]}),Object(a.jsx)("section",{className:"elements",children:l.map((function(e){return Object(a.jsx)(_,{card:e,onCardClick:c,onLikeButtonClick:s,onCardDeleteClick:r},e._id)}))})]})};var x=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__logo",children:"\xa9 2020 Mesto Russia"})})},v=Object(o.createContext)(),g=Object(o.createContext)();var C=function(e){var t=e.name,n=e.title,i=e.children,c=e.isOpen,s=e.onClose,r=e.onSubmit,l=e.noClose,u=Object(o.useContext)(g),d=Object(o.useContext)(v);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:b()("popup popup_type_".concat(t),{popup_opened:c}),onClick:s,children:Object(a.jsxs)("form",{className:"popup-form",name:t,onSubmit:r,onClick:l,children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-form__close-button",onClick:s}),Object(a.jsx)("h3",{className:"popup-form__title",children:n}),i,Object(a.jsx)("button",{className:b()("popup-form__submit-button",{"popup-form__submit-button_disabled":!u.isValid}),children:d})]})})})};var N=function(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,c=e.noClose,s=e.onInput,r=Object(o.useContext)(g),l=Object(o.useRef)(""),u=Object(o.useRef)("");return Object(o.useEffect)((function(e){!t&&l.current.parentElement.reset()}),[t]),Object(a.jsx)(C,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:s,ref:u,name:"name",id:"0",type:"text",minLength:"1",maxLength:"40",className:b()("popup-form__text-input",{"popup-form__text-input_type_error":!r.validation[0]}),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(a.jsx)("span",{id:"image-input-error",className:b()("popup-form__error-text",{"popup-form__error-text_show":!r.validation[0]}),children:r.validationText[0]}),Object(a.jsx)("input",{onInput:s,ref:l,name:"link",id:"1",type:"url",className:b()("popup-form__text-input",{"popup-form__text-input_type_error":!r.validation[1]}),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"link-input-error",className:b()("popup-form__error-text",{"popup-form__error-text_show":!r.validation[1]}),children:r.validationText[1]})]}),isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r.isValid&&i({link:l.current.value,name:u.current.value})},noClose:c})};var k=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,c=e.noClose,s=e.onInput,r=Object(o.useContext)(g),l=Object(o.useRef)("");return Object(o.useEffect)((function(e){!t&&l.current.parentElement.reset()}),[t]),Object(a.jsx)(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:s,name:"avatar",ref:l,id:"avatar0",type:"url",className:b()("popup-form__text-input",{"popup-form__text-input_type_error":!r.validation[0]}),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"avatar-error",className:b()("popup-form__error-text",{"popup-form__error-text_show":!r.validation[0]}),children:r.validationText[0]})]}),isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r.isValid&&i({avatar:l.current.value})},noClose:c})};var y=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,c=e.noClose,s=e.onInput,r=Object(o.useContext)(O),u=Object(o.useContext)(g),d=Object(o.useState)(r.name),p=Object(l.a)(d,2),j=p[0],m=p[1],h=Object(o.useState)(r.about),_=Object(l.a)(h,2),f=_[0],x=_[1];return Object(o.useEffect)((function(e){m(r.name),x(r.about)}),[r]),Object(a.jsx)(C,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:s,name:"name",id:"name0",type:"text",minLength:"2",maxLength:"40",value:j,onChange:function(e){return m(e.target.value)},className:b()("popup-form__text-input",{"popup-form__text-input_type_error":!u.validation[0]}),placeholder:"\u0418\u043c\u044f",required:!0}),Object(a.jsx)("span",{id:"name-input-error",className:b()("popup-form__error-text",{"popup-form__error-text_show":!u.validation[0]}),children:u.validationText[0]}),Object(a.jsx)("input",{onInput:s,name:"about",id:"about1",type:"text",minLength:"2",maxLength:"200",value:f,onChange:function(e){return x(e.target.value)},className:b()("popup-form__text-input",{"popup-form__text-input_type_error":!u.validation[1]}),placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0}),Object(a.jsx)("span",{id:"about-input-error",className:b()("popup-form__error-text",{"popup-form__error-text_show":!u.validation[1]}),children:u.validationText[1]})]}),isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),u.isValid&&i({name:j,about:f})},noClose:c})};var S=function(e){var t=e.isOpen,n=e.onClose,o=e.card,i=e.noClose;return Object(a.jsx)("section",{id:"view-image",className:b()("popup popup_type_dark",{popup_opened:t}),onClick:n,children:Object(a.jsxs)("div",{className:"popup-image",onClick:i,children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-image__close-button",onClick:n}),Object(a.jsx)("img",{className:"popup-image__image",src:o.link,alt:"".concat(o.name).\u0424\u043e\u0442\u043e}),Object(a.jsx)("h3",{className:"popup-image__title",children:o.name})]})})};var I=function(e){var t=e.isOpen,n=e.onClose,o=e.noClose,i=e.onDeleteCard,c=e.card;return Object(a.jsx)(C,{name:"submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i(c)},noClose:o})},E=n(22),w=n(23),T=new(function(){function e(t){Object(E.a)(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}return Object(w.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText))}))}},{key:"editProfileInfo",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"getProfileInfo",value:function(){return this._sendRequest("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editAvatar",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"createNewCard",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeLikeStatus",value:function(e,t){return this._sendRequest("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("".concat(this._baseUrl,"/cards"),{headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"83172f60-a4ab-4f2a-9396-1325bbd21612","Content-Type":"application/json"}}),L="https://auth.nomoreparties.co";var P=function(e){var t=e.setOpen,n=e.onLogin,i=Object(o.useState)(""),c=Object(l.a)(i,2),s=c[0],r=c[1],d=Object(o.useState)(""),p=Object(l.a)(d,2),j=p[0],b=p[1],m=Object(u.g)();return Object(a.jsxs)("form",{name:"login",className:"sign",onSubmit:function(e){e.preventDefault(),s&&j&&function(e,t){return fetch("".concat(L,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e})).catch((function(e){return console.log(e)}))}(s,j).then((function(e){e.token?(r(""),b(""),n(),m.push("/cards")):(t(!1),console.log(e.error))})).catch((function(e){console.log(e),t(!1)}))},children:[Object(a.jsx)("h2",{className:"sign__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsx)("input",{name:"email",id:"email",type:"email",value:s,onChange:function(e){return r(e.target.value)},className:"sign__input",placeholder:"Email",required:!0}),Object(a.jsx)("input",{name:"password",id:"password",type:"password",minLength:"6",value:j,onChange:function(e){return b(e.target.value)},className:"sign__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(a.jsx)("button",{type:"submit",className:"sign__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})};var q=function(e){var t=e.setOpen,n=e.setSignInScreen,i=Object(o.useState)(""),c=Object(l.a)(i,2),s=c[0],r=c[1],d=Object(o.useState)(""),p=Object(l.a)(d,2),j=p[0],b=p[1],m=Object(u.g)();return Object(a.jsxs)("form",{name:"login",className:"sign",onSubmit:function(e){e.preventDefault(),s&&j&&function(e,t){return fetch("".concat(L,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(s,j).then((function(e){var a;(null===(a=e.data)||void 0===a?void 0:a._id)?(r(""),b(""),t(!0),m.push("/signin"),n()):(t(!1),console.log(e.error))})).catch((function(e){console.log(e),t(!1)}))},children:[Object(a.jsx)("h2",{className:"sign__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsx)("input",{name:"email",id:"email",type:"email",value:s,onChange:function(e){return r(e.target.value)},className:"sign__input",placeholder:"Email",required:!0}),Object(a.jsx)("input",{name:"password",id:"password",type:"password",minLength:"6",value:j,onChange:function(e){return b(e.target.value)},className:"sign__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(a.jsx)("button",{type:"submit",className:"sign__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)("p",{className:"sign__text",onClick:function(e){m.push("/signin"),n()},children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})},U=n(26),A=n(24),D=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return Object(a.jsx)(u.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(U.a)({},n)):Object(a.jsx)(u.a,{to:"./signin"})}})};var R=function(e){var t=e.isOpen,n=e.success,o=e.noClose,i=e.onClose;return Object(a.jsx)("section",{className:b()("popup",{popup_opened:t}),onClick:i,children:Object(a.jsxs)("div",{className:"popup-info",onClick:o,children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-info__close-button",onClick:i}),Object(a.jsx)("div",{className:b()("popup-info__icon",{"popup-info__icon_type_abort":!n})}),Object(a.jsx)("p",{className:"popup-info__message",children:n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})})};var V=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)(!1),s=Object(l.a)(c,2),p=s[0],j=s[1],b=Object(o.useState)(!1),m=Object(l.a)(b,2),_=m[0],C=m[1],E=Object(o.useState)(!1),w=Object(l.a)(E,2),U=w[0],A=w[1],V=Object(o.useState)(!1),J=Object(l.a)(V,2),M=J[0],F=J[1],B=Object(o.useState)(!1),z=Object(l.a)(B,2),H=z[0],G=z[1],Q=Object(o.useState)(!1),K=Object(l.a)(Q,2),W=K[0],X=K[1],Y=Object(o.useState)(""),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(o.useState)({}),ne=Object(l.a)(te,2),ae=ne[0],oe=ne[1],ie=Object(o.useState)([]),ce=Object(l.a)(ie,2),se=ce[0],re=ce[1],le=Object(o.useState)({}),ue=Object(l.a)(le,2),de=ue[0],pe=ue[1],je=Object(o.useState)(!0),be=Object(l.a)(je,2),me=be[0],he=be[1],Oe=Object(o.useState)(""),_e=Object(l.a)(Oe,2),fe=_e[0],xe=_e[1],ve=Object(o.useState)({validation:[!0,!0],validationText:["",""],isValid:!1}),ge=Object(l.a)(ve,2),Ce=ge[0],Ne=ge[1],ke=Object(u.g)(),ye=Object(o.useState)(!1),Se=Object(l.a)(ye,2),Ie=Se[0],Ee=Se[1],we=Object(d.useMediaQuery)({query:"(max-width: 620px)"}),Te=Object(o.useState)(!1),Le=Object(l.a)(Te,2),Pe=Le[0],qe=Le[1];function Ue(e){var t=Ce.validation,n=Ce.validationText,a=Number(e.target.id[e.target.id.length-1]),o=0;t[a]=e.target.validity.valid,n[a]=e.target.validationMessage;for(var i=0;i<t.length;i++)o+=Number(t[i]);Ne({validation:t,validationText:n,isValid:o===t.length})}function Ae(e){"Escape"===e.key&&Re()}function De(e){e.stopPropagation()}function Re(){i(!1),j(!1),C(!1),A(!1),X(!1),F(!1),document.removeEventListener("keydown",Ae),Ne({validation:[],validationText:[],isValid:!1}),oe({})}Object(o.useEffect)((function(){Promise.all([T.getProfileInfo(),T.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];pe(n),re(a)})).catch((function(e){console.log(e)}))}),[H]);var Ve=function(){localStorage.getItem("token")&&function(e){return fetch("".concat(L,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))}(localStorage.getItem("token")).then((function(e){var t;(null===(t=e.data)||void 0===t?void 0:t.email)&&(G(!0),xe(e.data.email),ke.push("/cards"))}))};Object(o.useEffect)((function(){Ve()}),[]),Object(o.useEffect)((function(){he("/signin"===ke.location.pathname)}),[]);var Je=function(e){Ee(e),F(!0)};return Object(a.jsxs)(O.Provider,{value:de,children:[Object(a.jsx)(h,{isMobile:we,isExpanded:Pe,email:fe,loggedIn:H,isSignInLocation:me,setSignInScreen:function(){return he(!0)},resetSignInScreen:function(){return he(!1)},handleSignOut:function(){localStorage.removeItem("token"),xe(""),G(!1),qe(!1)},resetEmail:function(){return xe("")},expand:function(){return qe(!Pe)}}),Object(a.jsxs)(g.Provider,{value:Ce,children:[Object(a.jsxs)(u.d,{children:[Object(a.jsx)(D,{path:"/cards",loggedIn:H,component:f,onEditProfile:function(){j(!0),ee("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),Ne({validation:[!0,!0],validationText:["",""],isValid:!0}),document.addEventListener("keydown",Ae)},onEditAvatar:function(){i(!0),ee("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),Ne({validation:[!0],validationText:[""],isValid:!1}),document.addEventListener("keydown",Ae)},onAddPlace:function(){C(!0),ee("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),Ne({validation:[!0,!0],validationText:["",""],isValid:!1}),document.addEventListener("keydown",Ae)},onCardClick:function(e){X(!0),oe(e),document.addEventListener("keydown",Ae)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===de._id}));T.changeLikeStatus(e._id,!t).then((function(t){var n=se.map((function(n){return n._id===e._id?t:n}));re(n)})).catch((function(e){console.log(e)}))},onDeleteCard:function(e){A(!0),ee("\u0414\u0430"),Ne({validation:[],validationText:[],isValid:!0}),oe(e),document.addEventListener("keydown",Ae)},cards:se}),Object(a.jsx)(u.b,{path:"/signup",children:Object(a.jsx)(q,{setOpen:Je,setSignInScreen:function(){return he(!0)}})}),Object(a.jsx)(u.b,{path:"/signin",children:Object(a.jsx)(P,{setOpen:Je,onLogin:function(e){Ve()}})}),Object(a.jsx)(u.b,{path:"/",children:H?Object(a.jsx)(u.a,{to:"/cards"}):Object(a.jsx)(u.a,{to:"/signin"})})]}),Object(a.jsx)(x,{}),Object(a.jsxs)(v.Provider,{value:$,children:[Object(a.jsx)(y,{isOpen:p,onClose:Re,onUpdateUser:function(e){ee("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),T.editProfileInfo(e).then((function(e){pe(e),Re()})).catch((function(e){console.log(e)}))},noClose:De,onInput:Ue}),Object(a.jsx)(k,{isOpen:n,onClose:Re,onUpdateAvatar:function(e){ee("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),T.editAvatar(e.avatar).then((function(e){pe(e),Re()})).catch((function(e){console.log(e)}))},noClose:De,onInput:Ue}),Object(a.jsx)(N,{isOpen:_,onClose:Re,onAddPlace:function(e){ee("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),T.createNewCard(e).then((function(e){re([e].concat(Object(r.a)(se))),Re()})).catch((function(e){console.log(e)}))},noClose:De,onInput:Ue}),Object(a.jsx)(I,{isOpen:U,onClose:Re,noClose:De,onDeleteCard:function(e){ee("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),T.deleteCard(e._id).then((function(){var t=se.filter((function(t){return t._id!==e._id}));re(t),Re()})).catch((function(e){console.log(e)}))},card:ae})]})]}),Object(a.jsx)(S,{isOpen:W,onClose:Re,card:ae,noClose:De}),Object(a.jsx)(R,{success:Ie,isOpen:M,onClose:Re,noClose:De})]})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(V,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.41a2a406.chunk.js.map