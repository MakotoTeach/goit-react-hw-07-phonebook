(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__3hvlz",nameLine:"ContactListItem_nameLine__Rwk0u",listItemBtn:"ContactListItem_listItemBtn__UUd1-"}},17:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__2Tcqj",filterInput:"Filter_filterInput__3e3H6 input_input__3hF-y",title:"Filter_title__iPKfu"}},21:function(t,e,n){t.exports={wrapper:"Layout_wrapper__1EHq2",container:"Layout_container__3HtPe"}},36:function(t,e,n){t.exports={list:"ContactList_list__hLq5T"}},39:function(t,e,n){t.exports=n(91)},8:function(t,e,n){t.exports={submitForm:"AddContactForm_submitForm__3eOTN",formLabel:"AddContactForm_formLabel__2y-9T",formInput:"AddContactForm_formInput__3DnRs input_input__3hF-y",formButton:"AddContactForm_formButton__30fbH"}},90:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),u=n(6),s=n(9),l=n(10),i=n(12),m=n(11),b=n(13),d=Object(a.createContext)(),f={light:{headerBg:"#F7B30C",fontColor:"black",bodybg:"#ebe3fc",layoutbg:"white"},dark:{headerBg:"#3c3c3c",fontColor:"white",bodybg:"black",layoutbg:"#1a181c"}},h=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).toggleTheme=function(){var t="dark"===n.state.themeType?"light":"dark";n.setState({themeType:t,theme:f[t]})},n.state={themeType:"light",theme:f.light,toggleTheme:n.toggleTheme},n}return Object(b.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("theme");if(t){var e=JSON.parse(t);this.setState({themeType:e,theme:f[e]})}}},{key:"componentDidUpdate",value:function(t,e){e.themeType!==this.state.themeType&&localStorage.setItem("theme",JSON.stringify(this.state.themeType))}},{key:"render",value:function(){return c.a.createElement(d.Provider,{value:this.state},this.props.children)}}]),e}(a.Component);h.Consumer=d.Consumer;var p=function(t){return function(e){return c.a.createElement(h.Consumer,null,(function(n){return c.a.createElement(t,Object.assign({},e,n))}))}},g=p((function(t){var e=t.themeType,n=t.toggleTheme;return c.a.createElement("div",{className:"theme-selector"},c.a.createElement("span",{className:"label"},"Toogle theme(",e,")"),c.a.createElement("label",{className:"switch"},c.a.createElement("input",{type:"checkbox",checked:"light"===e,onChange:n}),c.a.createElement("span",{className:"slider round"})))})),C=n(21),v=n.n(C),j=p((function(t){var e=t.children,n=t.theme;return c.a.createElement("div",{className:v.a.wrapper,style:{background:n.bodybg}},c.a.createElement("div",{className:v.a.container,style:{color:n.fontColor,background:n.layoutbg}},c.a.createElement(g,null),c.a.createElement("h1",null,"Phonebook"),e))})),O=n(34),E=n(2),y={addContactRequest:Object(E.b)("contacts/addRequest"),addContactSuccess:Object(E.b)("contacts/addSuccess"),addContactError:Object(E.b)("contacts/addError"),removeContactRequest:Object(E.b)("contacts/removeRequest"),removeContactSuccess:Object(E.b)("contacts/removeSuccess"),removeContactError:Object(E.b)("contacts/removeError"),getContactsRequest:Object(E.b)("contacts/getRequest"),getContactsSuccess:Object(E.b)("contacts/getSuccess"),getContactsError:Object(E.b)("contacts/getError"),changeFilter:Object(E.b)("contacts/changeFilter")},_=n(7),S=n.n(_);S.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/v1",S.a.defaults.headers.common.Authorization="23d3ca50-1209-4518-b35d-a5f4505fa444",S.a.defaults.headers.post["Content-Type"]="application/json";var k={addContact:function(t,e){return function(n){n(y.addContactRequest()),S.a.post("/contacts",{name:t,number:e}).then((function(t){var e=t.data;return n(y.addContactSuccess(e))})).catch((function(t){return n(y.addContactError(t))}))}},getContacts:function(){return function(t){t(y.getContactsRequest()),S.a.get("/contacts").then((function(e){var n=e.data;return t(y.getContactsSuccess(n))})).catch((function(e){return t(y.getContactsError(e))}))}},removeContact:function(t){return function(e){e(y.removeContactRequest()),S.a.delete("/contacts/".concat(t)).then((function(){return e(y.removeContactSuccess(t))})).catch((function(t){return e(y.removeContactError(t))}))}}},L=n(24),N=function(t){return t.contacts.items},F=function(t){return t.contacts.filter},I={getLoading:function(t){return t.contacts.loading},getFilter:F,getVisibleContacts:Object(L.a)([N,F],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContactById:Object(L.a)([function(t,e){return e},N],(function(t,e){return e.find((function(e){return e.id===t}))}))},R=n(16),T=n.n(R);var w=Object(u.b)((function(t,e){var n=I.getContactById(t,e.id);return Object(O.a)({},n)}),(function(t,e){return{onRemove:function(){return t(k.removeContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.onRemove;return c.a.createElement("li",{className:T.a.listItem},c.a.createElement("div",{className:T.a.nameLine},c.a.createElement("p",null,e,":"),c.a.createElement("p",null,n)),c.a.createElement("button",{className:T.a.listItemBtn,type:"button",onClick:a},"Delete"))})),q=n(36),x=n.n(q);var B=Object(u.b)((function(t){return{contacts:I.getVisibleContacts(t)}}))((function(t){var e=t.contacts;return c.a.createElement("ul",{className:x.a.list},e.map((function(t){var e=t.id;return c.a.createElement(w,{key:e,id:e})})))})),A=n(3),D=n(8),H=n.n(D),J=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(A.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(n.state.name,n.state.number),n.setState({name:"",number:""})},n}return Object(b.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:H.a.submitForm,onSubmit:this.handleSubmit},c.a.createElement("label",{className:H.a.formLabel},"Name",c.a.createElement("input",{autoComplete:"off",className:H.a.formInput,type:"text",name:"name",value:e,onChange:this.handleChange})),c.a.createElement("label",{className:H.a.formLabel},"Number",c.a.createElement("input",{autoComplete:"off",className:H.a.formInput,type:"text",name:"number",value:n,onChange:this.handleChange})),c.a.createElement("button",{className:H.a.formButton,type:"submit"},"Add contact"))}}]),e}(a.Component),P={onAddContact:k.addContact},U=Object(u.b)(null,P)(J),G=n(17),z=n.n(G),M={onChangeFilter:y.changeFilter},V=Object(u.b)((function(t){return{value:I.getFilter(t)}}),M)((function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("h2",{className:z.a.title},"Contacts"),c.a.createElement("label",{className:z.a.filterLabel},"Find contact by name",c.a.createElement("input",{className:z.a.filterInput,type:"text",value:e,onChange:function(t){return n(t.target.value)}})))})),K=n(37),Q=n.n(K);n(89);var W,X,Y=function(){return c.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement(Q.a,{type:"Grid",color:"blue",height:180,width:180}))},Z=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.onGetContacts()}},{key:"render",value:function(){return c.a.createElement(h,null,c.a.createElement(j,null,this.props.isLoadingContacts?c.a.createElement(Y,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(U,null),c.a.createElement(V,null),c.a.createElement(B,null))))}}]),e}(a.Component),$={onGetContacts:k.getContacts},tt=Object(u.b)((function(t){return{isLoadingContacts:I.getLoading(t)}}),$)(Z),et=n(38),nt=n(5),at=Object(E.c)([],(W={},Object(A.a)(W,y.getContactsSuccess,(function(t,e){return e.payload})),Object(A.a)(W,y.addContactSuccess,(function(t,e){return[].concat(Object(et.a)(t),[e.payload])})),Object(A.a)(W,y.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),W)),ct=Object(E.c)("",Object(A.a)({},y.changeFilter,(function(t,e){return e.payload}))),rt=Object(E.c)(!1,(X={},Object(A.a)(X,y.getContactsRequest,(function(){return!0})),Object(A.a)(X,y.getContactsSuccess,(function(){return!1})),Object(A.a)(X,y.getContactsError,(function(){return!1})),Object(A.a)(X,y.addContactRequest,(function(){return!0})),Object(A.a)(X,y.addContactSuccess,(function(){return!1})),Object(A.a)(X,y.addContactError,(function(){return!1})),Object(A.a)(X,y.removeContactRequest,(function(){return!0})),Object(A.a)(X,y.removeContactSuccess,(function(){return!1})),Object(A.a)(X,y.removeContactError,(function(){return!1})),X)),ot=Object(nt.combineReducers)({items:at,filter:ct,loading:rt}),ut=Object(E.a)({reducer:{contacts:ot}});n(90);o.a.render(c.a.createElement(u.a,{store:ut},c.a.createElement(tt,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.047dd3f3.chunk.js.map