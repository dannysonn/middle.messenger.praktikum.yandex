!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},l=a.parcelRequire0866;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,a.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){t[e]=a},a.parcelRequire0866=l);var r=l("B6MBH"),o=l("SQFUA"),i=l("h409t"),s=l("a1h7Y"),m=l("epFSm"),p=l("hFPsI"),d=l("50Ae5"),u=e(l("5Q9z9")).template({compiler:[8,">= 4.3.0"],main:function(e,a,n,t,l){var r,o,i=null!=a?a:e.nullContext||{},s=e.hooks.helperMissing,m="function",p=e.lookupProperty||function(e,a){if(Object.prototype.hasOwnProperty.call(e,a))return e[a]};return'<div>\r\n    <aside class="profile__sidebar">\r\n        <button class="profile__btn"></button>\r\n    </aside>\r\n\r\n    <div class="profile__wrapper">\r\n        <nav class="profile__header">\r\n            <img class="profile__avatar" src="https://via.placeholder.com/150">\r\n            <div class="profile__name">Elon</div>\r\n        </nav>\r\n\r\n        <main class="profile__content">\r\n            '+(null!=(r=(void 0===(o=null!=(o=p(n,"form")||(null!=a?p(a,"form"):a))?o:s)?"undefined":(0,d.default)(o))===m?o.call(i,{name:"form",hash:{},data:l,loc:{start:{line:13,column:12},end:{line:13,column:22}}}):o)?r:"")+'\r\n        </main>\r\n\r\n        <footer class="profile__footer">\r\n            '+(null!=(r=(void 0===(o=null!=(o=p(n,"buttons")||(null!=a?p(a,"buttons"):a))?o:s)?"undefined":(0,d.default)(o))===m?o.call(i,{name:"buttons",hash:{},data:l,loc:{start:{line:17,column:12},end:{line:17,column:25}}}):o)?r:"")+"\r\n        </footer>\r\n    </div>\r\n</div>"},useData:!0}),_=function(e){"use strict";(0,i.default)(n,e);var a=(0,m.default)(n);function n(e){return(0,r.default)(this,n),a.call(this,e)}return(0,o.default)(n,[{key:"render",value:function(){return this.compile(u,(0,s.default)({},this.props))}}]),n}(p.default),f=l("1Wp6p"),c=l("dLogV"),h=l("gQduW"),b=l("dEHY4"),w=l("lEmY7"),C=l("bLtr4"),v=[new(0,c.default)({class:"profile__footer-item",text:"Change data",events:{click:function(){(0,f.renderDom)(E),(0,b.initInputsListEvents)()}}}),new(0,c.default)({class:"profile__footer-item",text:"Change password",events:{click:function(){(0,f.renderDom)(x),(0,b.initInputsListEvents)()}}}),new(0,c.default)({class:"profile__footer-item profile__footer-item--logout",text:"Logout"})],g=[new(0,c.default)({class:"profile__footer-item",text:"Save data",formId:"profileForm"})],F=[new(0,c.default)({class:"profile__footer-item",text:"Save password",formId:"profileForm"})],y=[new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__email",label:"Email",type:"email",placeholder:"programmer2000@google.com",name:"email",hasLineBreak:!1,readonly:!0}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__login",label:"Login",type:"login",placeholder:"programmer2000",name:"login",hasLineBreak:!1,readonly:!0}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__name",label:"Name",type:"name",placeholder:"Elon",name:"first_name",hasLineBreak:!1,readonly:!0}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__surname",label:"Surname",type:"surname",placeholder:"Musk",name:"second_name",hasLineBreak:!1,readonly:!0}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__phone",label:"Phone",type:"phone",placeholder:"999-99-999",name:"phone",hasLineBreak:!1,readonly:!0})],L=[new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__email",label:"Email",type:"email",placeholder:"programmer2000@google.com",name:"email",hasLineBreak:!1}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__login",label:"Login",type:"login",placeholder:"programmer2000",name:"login",hasLineBreak:!1}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__name",label:"Name",type:"name",placeholder:"Elon",name:"first_name",hasLineBreak:!1}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__surname",label:"Surname",type:"surname",placeholder:"Musk",name:"second_name",hasLineBreak:!1}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__phone",label:"Phone",type:"phone",placeholder:"999-99-999",name:"phone",hasLineBreak:!1})],k=[new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__password",label:"Password",type:"password",placeholder:"**********",name:"password",hasLineBreak:!1}),new(0,h.default)({wrapperClass:"profile__item",labelClass:"content__item-label",inputClass:"content__item-data",id:"authForm__password-second",label:"Password (one more)",type:"password",placeholder:"**********",name:"second_password",hasLineBreak:!1})],B=new _({form:new(0,C.Form)({formId:"profileForm",inputs:y.map((function(e){return e}))}),buttons:v.map((function(e){return e}))}),E=new _({form:new(0,C.Form)({formId:"profileForm",events:{submit:function(e){e.preventDefault(),(0,w.validateForm)(),(0,f.renderDom)(B)}},inputs:L.map((function(e){return e}))}),buttons:g.map((function(e){return e}))}),x=new _({form:new(0,C.Form)({formId:"profileForm",inputs:k.map((function(e){return e})),events:{submit:function(e){e.preventDefault(),(0,w.validateForm)(),(0,f.renderDom)(B)}}}),buttons:F.map((function(e){return e}))});document.addEventListener("DOMContentLoaded",(function(){(0,f.renderDom)(B)}))}();
//# sourceMappingURL=profile.29759baf.js.map
