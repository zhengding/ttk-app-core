{"source":"webpackJsonp([48],{719:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var a,r=l(n(0)),o=l(n(9)),c=l(n(7)),u=l(n(8)),s=l(n(10)),i=l(n(11)),d=n(1),p=(l(d),n(56)),f=l(n(214));function l(e){return e&&e.__esModule?e:{default:e}}var m=(0,p.wrapper)(f.default)(a=function(e){function t(){return(0,c.default)(this,t),(0,s.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,r.default)({},this.props,{path:\"root\"}))}}]),t}(d.Component))||a;t.default=m,e.exports=t.default},720:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var a,r,o=f(n(0)),s=f(n(35)),c=f(n(36)),u=f(n(7));t.default=function(e){var t=new i.action(e),n=p.FormDecorator.actionCreator((0,o.default)({},e,{metaAction:t})),a=new l((0,o.default)({},e,{metaAction:t,voucherAction:n})),r=(0,o.default)({},t,n,a);return t.config({metaHandlers:r}),r};f(n(1));var i=n(56),d=f(n(165)),p=n(42);function f(e){return e&&e.__esModule?e:{default:e}}var l=(a=function e(t){(0,u.default)(this,e),r.call(this),this.metaAction=t.metaAction,this.config=d.default.current,this.voucherAction=t.voucherAction,this.webapi=this.config.webapi},r=function(){var u=this;this.onInit=function(e){var t=e.component,n=e.injections;u.voucherAction.onInit({component:t,injections:n}),u.component=t,u.injections=n,u.component.props.setOkListener&&u.component.props.setOkListener(u.onOk),n.reduce(\"init\",{isPop:u.component.props.isPop}),u.load()},this.load=(0,c.default)(s.default.mark(function e(){var t,n,a,r,o,c;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},n={},a=void 0,r=u.metaAction.context.get(\"currentOrg\"),e.next=3,u.webapi.bankaccount.accountAttr();case 3:if((o=e.sent)&&(t.accountAttr=o),!u.component.props.personId&&0!==u.component.props.personId){e.next=11;break}return e.next=8,u.webapi.bankaccount.query(u.component.props.personId);case 8:n=e.sent,e.next=14;break;case 11:return e.next=13,u.webapi.bankaccount.getCode();case 13:a=e.sent;case 14:return e.next=16,u.webapi.bankaccount.haveMonthlyClosing({});case 16:c=e.sent,t.haveMonthlyClosing=c,a&&(t.code=a),n&&(t.response=n),t.enabledTime=r.enabledYear+\"-\"+r.enabledMonth,u.injections.reduce(\"load\",t);case 22:case\"end\":return e.stop()}},e,u)})),this.onOk=(0,c.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.save();case 2:return e.abrupt(\"return\",e.sent);case 3:case\"end\":return e.stop()}},e,u)})),this.updateDisabled=function(){var e=!1;return(u.component.props.personId||0===u.component.props.personId)&&(e=!0),e},this.save=(0,c.default)(s.default.mark(function e(){var t,n,a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.metaAction.gf(\"data.form\").toJS(),u.component.props.id,e.next=4,u.voucherAction.check([{path:\"data.form.bankAccountType\",value:t.bankAccountType},{path:\"data.form.code\",value:t.code},{path:\"data.form.name\",value:t.name},{path:\"data.form.beginningBalance\",value:t.beginningBalance}],u.check);case 4:if(e.sent){e.next=8;break}return u.metaAction.toast(\"warning\",\"请按页面提示信息修改信息后才可提交\"),e.abrupt(\"return\",!1);case 8:if(n=void 0,(a={bankAccountTypeId:t.bankAccountType.id,isDefault:t.isDefault,isEnable:t.isEnable}).code=t.code?t.code.trim():\"\",a.name=t.name?t.name.trim():\"\",a.bankName=t.bankName?t.bankName:\"\",a.ts=t.ts?t.ts:\"\",a.beginningBalance=t.beginningBalance||0==t.beginningBalance||\"\"==t.beginningBalance?t.beginningBalance:\"\",t.bankAccountType&&delete t.bankAccountType,a.isReturnValue=!0,!u.component.props.personId&&0!==u.component.props.personId){e.next=23;break}return a.id=u.component.props.personId,e.next=20,u.webapi.bankaccount.update(a);case 20:n=e.sent,e.next=26;break;case 23:return e.next=25,u.webapi.bankaccount.create(a);case 25:n=e.sent;case 26:if(!n||!n.error){e.next=31;break}return u.metaAction.toast(\"error\",n.error.message),e.abrupt(\"return\",!1);case 31:return u.metaAction.toast(\"success\",\"保存成功\"),e.abrupt(\"return\",n);case 33:case\"end\":return e.stop()}},e,u)})),this.changeCheck=function(e){var t=u.metaAction.gf(\"data.form\").toJS();1==e?u.voucherAction.check([{path:\"data.form.code\",value:t.code}],u.check):u.voucherAction.check([{path:\"data.form.name\",value:t.name}],u.check)},this.check=function(e){if(e&&e.path)return\"data.form.bankAccountType\"==e.path?{errorPath:\"data.other.error.bankAccountType\",message:e.value&&e.value.id?\"\":\"请录入账户类型\"}:\"data.form.code\"==e.path?{errorPath:\"data.other.error.code\",message:e.value&&e.value.trim()?\"\":\"请录入编码\"}:\"data.form.name\"==e.path?{errorPath:\"data.other.error.name\",message:e.value&&e.value.trim()?\"\":\"请录入开户银行名称\"}:\"data.form.beginningBalance\"==e.path&&e.value?{errorPath:\"data.other.error.beginningBalance\",message:1e12<e.value||e.value<-1e12?\"最大整数位为12位\":\"\"}:void 0},this.fieldChange=function(e,t){u.voucherAction.fieldChange(e,t,u.check)}},a);e.exports=t.default},721:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var a,r,o=f(n(0)),c=f(n(18)),u=f(n(7));t.default=function(e){var t=new i.reducer(e),n=new l((0,o.default)({},e,{metaReducer:t}));return(0,o.default)({},t,n)};var s=n(14),i=n(56),d=f(n(165)),p=n(215);function f(e){return e&&e.__esModule?e:{default:e}}var l=(a=function e(t){(0,u.default)(this,e),r.call(this),this.metaReducer=t.metaReducer,this.config=d.default.current},r=function(){var a=this;this.init=function(e,t){var n=(0,p.getInitState)();return a.metaReducer.init(e,n)},this.load=function(e,t){return t.response&&(t.response&&(0==(0,c.default)(t.response).length?(t.response.isEnable=!0,e=a.metaReducer.sf(e,\"data.form\",(0,s.fromJS)(t.response)),e=a.metaReducer.sf(e,\"data.form.bankAccountType.id\",\"\")):e=a.metaReducer.sf(e,\"data.form\",(0,s.fromJS)(t.response))),t.response.bankAccountTypeId&&(e=a.metaReducer.sf(e,\"data.form.bankAccountType\",(0,s.fromJS)({id:t.response.bankAccountTypeId,name:t.response.bankAccountTypeName})))),e=a.metaReducer.sf(e,\"data.other.haveMonthlyClosing\",(0,s.fromJS)(t.haveMonthlyClosing)),t.code&&(e=a.metaReducer.sf(e,\"data.form.code\",(0,s.fromJS)(t.code))),t.accountAttr&&(e=a.metaReducer.sf(e,\"data.other.bankAccountType\",(0,s.fromJS)(t.accountAttr))),t.enabledTime&&(e=a.metaReducer.sf(e,\"data.form.earlyMonths\",(0,s.fromJS)(t.enabledTime))),e}},a);e.exports=t.default}});"}