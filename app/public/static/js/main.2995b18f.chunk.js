(this.webpackJsonpl7=this.webpackJsonpl7||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(33),c=a.n(n),o=a(8),l=(a(39),a(40),a(2)),i=a(14),d=a(10),u=a(11),h=a(15),m=a(13),j=a(12),b=a.n(j),p=a(0),g=function(e){var t=e.itemsCount,a=e.pageSize,s=e.currentPage,r=e.onPageChange,n=Math.ceil(t/a);if(1===n)return null;var c=b.a.range(1,n+1);return Object(p.jsx)("nav",{children:Object(p.jsx)("ul",{className:"pagination pagination-sm",children:c.map((function(e,t){return Object(p.jsx)("li",{className:e===s?"page-item active":"page-item",children:Object(p.jsx)("a",{style:{cursor:"pointer"},className:"page-link",onClick:function(){return r(e)},children:e})},t)}))})})};var O=function(e){var t=e.items,a=e.onDelete,s=e.onSort,r=e.sortIcon;return Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsxs)("th",{className:"clicakble",onClick:function(){return s("title")},scope:"col",children:["Nr ",r("title")]}),Object(p.jsxs)("th",{className:"clicakble",onClick:function(){return s("text")},scope:"col",children:["Text ",r("text")]}),Object(p.jsx)("th",{scope:"col",children:"Image"}),Object(p.jsx)("th",{scope:"col"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.title}),Object(p.jsx)("td",{children:e.text}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{style:{width:"50px",height:"50px"},src:e.image,alt:t})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(){return a(e)},className:"btn btn-danger",children:"Delete"})})]},t)}))})]})},x=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handleDelete=function(e){var t=s.state.items.filter((function(t){return t.id!==e.id}));s.setState({items:t})},s.handlePageChange=function(e){s.setState({currentPage:e})},s.handleSort=function(e){var t=Object(i.a)({},s.state.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="asc"),s.setState({sortColumn:t})},s.renderSortIcon=function(e){return console.log(s.state.sortColumn.order),e!==s.state.sortColumn.path?null:"asc"===s.state.sortColumn.order?Object(p.jsx)("i",{className:"fa fa-sort-asc"}):"desc"===s.state.sortColumn.order?Object(p.jsx)("i",{className:"fa fa-sort-desc"}):void 0},s.state={error:null,isLoaded:!1,items:[],pageSize:4,currentPage:1,sortColumn:{path:"title",order:"asc"}},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://blogtai.herokuapp.com/api/posts").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t}),console.log(t)}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.pageSize,s=e.currentPage,n=e.sortColumn;if(!t.length)return Object(p.jsx)("p",{children:"Brak wpis\xf3w"});var c=function(e,t,a){var s=(t-1)*a;return b()(e).slice(s).take(a).value()}(b.a.orderBy(t,[n.path],[n.order]),s,a);return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)(O,{items:c,sortIcon:this.renderSortIcon,onDelete:this.handleDelete,onSort:this.handleSort}),Object(p.jsx)(g,{itemsCount:t.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onPageChange:this.handlePageChange})]})}}]),a}(s.Component),v=function(){return Object(p.jsxs)("div",{className:"jumbotron",children:[Object(p.jsx)("h1",{className:"display-4",children:"404 - Not found!"}),Object(p.jsx)("p",{className:"lead",children:"Page you are looking for does not exist."}),Object(p.jsx)("hr",{className:"my-4"}),Object(p.jsx)("p",{children:"Go back to Home"}),Object(p.jsx)(o.b,{className:"btn btn-primary btn-lg",to:"/",role:"button",children:"Home"})]})},f=function(){return Object(p.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"display-4",children:"Home"}),Object(p.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, aut autem delectus ea error esse est eveniet expedita fugiat illo libero magni maxime mollitia optio quasi ratione rem repellendus sunt."})]})})},N=a(24),w=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={account:{username:"",password:""},errors:{}},e.handleChangeRoute=function(){e.props.history.push("/"),window.location.reload()},e.validate=function(){var t={},a=e.state.account;return""===a.username.trim()&&(t.username="Username is required!"),""===a.password.trim()&&(t.password="Password is required!"),0===Object.keys(t).length?null:t},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||N({method:"post",url:"http://localhost:3001/api/user/auth",data:{login:e.state.account.username,password:e.state.account.password}}).then((function(t){localStorage.setItem("token",t.data.token),e.handleChangeRoute()})).catch((function(t){var a={password:"Given username does't exists or password is wrong!"};e.setState({errors:a||{}}),console.log(t)}))},e.handleChange=function(t){var a=Object(i.a)({},e.state.account);a[t.currentTarget.name]=t.currentTarget.value,e.setState({account:a})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Email address"}),Object(p.jsx)("input",{value:this.state.account.username,name:"username",onChange:this.handleChange,type:"text",className:"form-control",id:"username","aria-describedby":"emailHelp",placeholder:"Username"}),this.state.errors.username&&Object(p.jsx)("div",{className:"alert alert-danger",children:this.state.errors.username})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{value:this.state.account.password,name:"password",onChange:this.handleChange,type:"password",className:"form-control",id:"password",placeholder:"Password"}),this.state.errors.password&&Object(p.jsx)("div",{className:"alert alert-danger",children:this.state.errors.password})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})]})}}]),a}(s.Component),C=a(24),S=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={account:{username:"",email:"",password:""},errors:{}},e.handleChangeRoute=function(){e.props.history.push("/"),window.location.reload()},e.validate=function(){var t={},a=e.state.account;return""===a.username.trim()&&(t.username="Username is required!"),""===a.email.trim()&&(t.password="Email is required!"),""===a.password.trim()&&(t.password="Password is required!"),0===Object.keys(t).length?null:t},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||(console.log(e.state),C({method:"post",url:"https://pr04.herokuapp.com/api/user/create",data:{name:e.state.account.username,email:e.state.account.email,password:e.state.account.password}}).then((function(t){e.handleChangeRoute()})).catch((function(t){var a={password:"Given username does't exists or password is wrong!"};e.setState({errors:a||{}}),console.log(t)})))},e.handleChange=function(t){var a=Object(i.a)({},e.state.account);a[t.currentTarget.name]=t.currentTarget.value,e.setState({account:a})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Sign Up"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Name"}),Object(p.jsx)("input",{value:this.state.account.username,name:"username",onChange:this.handleChange,type:"text",className:"form-control",id:"username","aria-describedby":"emailHelp",placeholder:"Username"}),this.state.errors.username&&Object(p.jsx)("div",{className:"alert alert-danger",children:this.state.errors.username})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(p.jsx)("input",{value:this.state.account.email,name:"email",onChange:this.handleChange,type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Email"}),this.state.errors.email&&Object(p.jsx)("div",{className:"alert alert-danger",children:this.state.errors.email})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{value:this.state.account.password,name:"password",onChange:this.handleChange,type:"password",className:"form-control",id:"password",placeholder:"Password"}),this.state.errors.password&&Object(p.jsx)("div",{className:"alert alert-danger",children:this.state.errors.password})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"SignUp"})]})]})}}]),a}(s.Component),y=a(17),k=function(){var e=Object(y.a)(localStorage.getItem("token")),t=Object(y.b)(localStorage.getItem("token"));return Object(p.jsxs)("div",{children:[e&&Object(p.jsxs)("h4",{style:{float:"left"},children:["User: ",e.name]}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsxs)("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:[Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)(o.b,{to:"/",className:"nav-link",id:"pills-home-tab","data-toggle":"pill",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Home"})}),Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)(o.b,{to:"/posts",className:"nav-link",id:"pills-home-tab","data-toggle":"pill",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Posts"})})]}),Object(p.jsxs)("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:[t&&Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)(o.b,{to:"/login",className:"nav-link",id:"pills-home-tab","data-toggle":"pill",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Login"})}),t&&Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)(o.b,{to:"/signUp",className:"nav-link",id:"pills-home-tab","data-toggle":"pill",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"SignUp"})}),!t&&Object(p.jsx)("li",{className:"nav-item",role:"presentation",children:Object(p.jsx)("a",{href:"/",className:"nav-link",id:"pills-home-tab","data-toggle":"pill",role:"tab","aria-controls":"pills-home","aria-selected":"true",onClick:function(){return localStorage.removeItem("token")},children:"LogOut"})})]})]})})]})};var P=function(){return Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)(k,{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/login",component:w}),Object(p.jsx)(l.b,{path:"/signUp",component:S}),Object(p.jsx)(l.b,{path:"/posts",render:function(e){return console.log(localStorage.getItem("token")),Object(y.b)(localStorage.getItem("token"))?Object(p.jsx)(l.a,{to:"/"}):Object(p.jsx)(x,{})}}),Object(p.jsx)(l.b,{path:"/not-found",component:v}),Object(p.jsx)(l.b,{path:"/",exact:!0,component:f}),Object(p.jsx)(l.a,{to:"/not-found"})]})})})]})},I=(a(65),a(66),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))});c.a.render(Object(p.jsx)(o.a,{children:Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(P,{})})}),document.getElementById("root")),I()}},[[67,1,2]]]);
//# sourceMappingURL=main.2995b18f.chunk.js.map