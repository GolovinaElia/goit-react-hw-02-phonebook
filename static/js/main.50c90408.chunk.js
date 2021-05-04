(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={phonebook:"App_phonebook__1RNk4"}},13:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(t,e,n){t.exports={container:"ContactForm_container__1-Ctw"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),s=n.n(o),r=n(14),i=n(4),l=n(5),u=n(7),b=n(6),m=n(11),d=n.n(m),h=n(12),j=n(2),f=n.n(j),p=n(0),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:f.a.container,children:Object(p.jsxs)("form",{className:f.a.containerForm,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:f.a.containerLabel,children:["Name",Object(p.jsx)("input",{className:f.a.input,type:"text",autoComplete:"off",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:f.a.containerLabel,children:["Number",Object(p.jsx)("input",{className:f.a.input,type:"tel",autoComplete:"off",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=n(3),x=n.n(O),v=n(23),N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("div",{className:x.a.contacts,children:Object(p.jsx)("ul",{className:x.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)("li",{className:x.a.contactsItem,children:Object(p.jsxs)("p",{className:x.a.contactsForm,children:[Object(p.jsx)("span",{className:x.a.contactsName,children:a}),": ",c,Object(p.jsx)("button",{className:x.a.buttonContacts,type:"button",onClick:function(){return n(e)},children:"Delete"})]})},Object(v.a)())}))})})},g=n(8),_=n.n(g),y=function(t){var e=t.value,n=t.onChange;return Object(p.jsx)("div",{className:_.a.filter,children:Object(p.jsxs)("label",{className:_.a.filterLabel,children:["Find contact by name",Object(p.jsx)("input",{className:_.a.filterInput,type:"text",autoComplete:"off",name:"name",value:e,onChange:n})]})})},S=n(13),k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:S,filter:""},t.addContacts=function(e){var n=e.name;t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[e])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getVisibleContact();return Object(p.jsxs)("div",{className:d.a.phonebook,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{onSubmit:this.addContacts}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(y,{value:this.state.filter,onChange:this.changeFilter}),Object(p.jsx)(N,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(20);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={contacts:"ContactList_contacts__NM5vP",buttonContacts:"ContactList_buttonContacts__2jJs-"}},8:function(t,e,n){t.exports={filter:"Filter_filter__2SNJU",filterInput:"Filter_filterInput__7cCWg"}}},[[21,1,2]]]);
//# sourceMappingURL=main.50c90408.chunk.js.map