{"source":"webpackJsonp([18],{839:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var r,a=l(n(0)),u=l(n(9)),o=l(n(7)),i=l(n(8)),c=l(n(10)),s=l(n(11)),f=n(1),d=(l(f),n(56)),p=l(n(294));function l(e){return e&&e.__esModule?e:{default:e}}var h=(0,d.wrapper)(p.default)(r=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,a.default)({},this.props,{path:\"root\"}))}}]),t}(f.Component))||r;t.default=h,e.exports=t.default},840:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var l=u(n(0)),h=u(n(15)),m=u(n(35)),o=u(n(36)),i=u(n(7)),r=u(n(8));t.default=function(e){var t=new a.action(e),n=new f((0,l.default)({},e,{metaAction:t})),r=(0,l.default)({},t,n);return t.config({metaHandlers:r}),r};u(n(1));var a=n(56),c=n(14),s=(u(n(13)),u(n(203)));function u(e){return e&&e.__esModule?e:{default:e}}var f=function(){function u(e){var n,t,r,a,p=this;(0,i.default)(this,u),this.gf=function(e){var t=p.metaAction.gf(e);return t=t&&t.toJS()||null},this.onInit=function(e){var t=e.component,n=e.injections;p.component=t,p.injections=n,p.component.props.setOkListener&&p.component.props.setOkListener(p.onOk),p.loadOperations(),p.component.props.id?(n.reduce(\"init\"),p.load()):n.reduce(\"init\",{parentId:p.component.props.parentId}),p.parentMenuFocus()},this.load=(0,o.default)(m.default.mark(function e(){var t,n;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.webapi.menu.findFullById(p.component.props.id);case 2:t=e.sent,n=t.operations&&t.operations.map(function(e){return e.operationId}),p.selectOperations(n),p.injections.reduce(\"load\",t);case 6:case\"end\":return e.stop()}},e,p)})),this.loadOperations=(0,o.default)(m.default.mark(function e(){var t,n;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.webapi.operation.query({});case 2:t=e.sent,n=t.map(function(e){return{label:e.name,value:e.id}}),p.injections.reduce(\"loadOperations\",{operations:t,options:n});case 5:case\"end\":return e.stop()}},e,p)})),this.onOk=(0,o.default)(m.default.mark(function e(){return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.save();case 2:return e.abrupt(\"return\",e.sent);case 3:case\"end\":return e.stop()}},e,p)})),this.save=(0,o.default)(m.default.mark(function e(){var r,t,n,a,u;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.metaAction.gf(\"data.form\").toJS(),e.next=3,p.check([{path:\"data.form.name\",value:r.name},{path:\"data.form.code\",value:r.code}]);case 3:if(e.sent){e.next=6;break}return e.abrupt(\"return\",!1);case 6:if(t=p.gf(\"data.other.selectedOperations\")||[],n=t.map(function(t){var e={menuId:r.id,operationId:t};if(r.operations){var n=r.operations.find(function(e){return e.operationId==t});n&&(e.id=n.id)}return e}),r.operations=n,r.parentId=null==r.parentId?0:r.parentId,!r.id){e.next=18;break}return e.next=13,p.webapi.menu.update(r);case 13:return a=e.sent,p.metaAction.toast(\"success\",\"修改成功\"),e.abrupt(\"return\",a);case 18:return e.next=20,p.webapi.menu.create(r);case 20:return u=e.sent,p.metaAction.toast(\"success\",\"新增成功\"),e.abrupt(\"return\",u);case 23:case\"end\":return e.stop()}},e,p)})),this.fieldChange=(n=(0,o.default)(m.default.mark(function e(t,n){return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.check([{path:t,value:n}]);case 2:case\"end\":return e.stop()}},e,p)})),function(e,t){return n.apply(this,arguments)}),this.check=(t=(0,o.default)(m.default.mark(function e(t){var n,r,a,u,o,i,c,s,f,d;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt(\"return\");case 2:n=[],a=!(r=!0),u=void 0,e.prev=6,o=(0,h.default)(t);case 8:if(r=(i=o.next()).done){e.next=31;break}if(c=i.value,s=(0,l.default)({},c),\"data.form.nickname\"!=c.path){e.next=20;break}return e.t0=l.default,e.t1=s,e.next=16,p.checkName(c.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=27;break;case 20:if(\"data.form.code\"!=c.path){e.next=27;break}return e.t3=l.default,e.t4=s,e.next=25,p.checkCode(c.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5);case 27:n.push(s);case 28:r=!0,e.next=8;break;case 31:e.next=37;break;case 33:e.prev=33,e.t6=e.catch(6),a=!0,u=e.t6;case 37:e.prev=37,e.prev=38,!r&&o.return&&o.return();case 40:if(e.prev=40,!a){e.next=43;break}throw u;case 43:return e.finish(40);case 44:return e.finish(37);case 45:return f={},d=!0,n.forEach(function(e){f[e.path]=e.value,f[e.errorPath]=e.message,e.message&&(d=!1)}),p.metaAction.sfs(f),e.abrupt(\"return\",d);case 50:case\"end\":return e.stop()}},e,p,[[6,33,37,45],[38,,40,44]])})),function(e){return t.apply(this,arguments)}),this.checkCode=(r=(0,o.default)(m.default.mark(function e(t){var n;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(n=\"请录入编码\"),e.abrupt(\"return\",{errorPath:\"data.other.error.code\",message:n});case 2:case\"end\":return e.stop()}},e,p)})),function(e){return r.apply(this,arguments)}),this.checkName=(a=(0,o.default)(m.default.mark(function e(t){var n;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(n=\"请录入名称\"),e.abrupt(\"return\",{errorPath:\"data.other.error.name\",message:n});case 2:case\"end\":return e.stop()}},e,p)})),function(e){return a.apply(this,arguments)}),this.selectOperations=function(e){var t=p.gf(\"data.operations\")||[],n=p.gf(\"data.other.selectedOperations\")||[];if(n.length>e.length){var r=n.filter(function(t){return!e.find(function(e){return e==t})});e=p.clearSubOperation(e,r,t)}else e=p.addDependentOperation(e,t);p.injections.reduce(\"selectOperations\",e)},this.parentMenuFocus=(0,o.default)(m.default.mark(function e(){var t;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.webapi.menu.query({});case 2:t=e.sent,p.metaAction.sf(\"data.other.parents\",(0,c.fromJS)(t));case 4:case\"end\":return e.stop()}},e,p)})),this.parentMenuChange=function(t){var e=p.metaAction.gf(\"data.other.parents\").find(function(e){return e.get(\"id\")==t});p.metaAction.sf(\"data.form.parent\",e),p.metaAction.sf(\"data.form.parentId\",e.get(\"id\"))},this.metaAction=e.metaAction,this.config=s.default.current,this.webapi=this.config.webapi}return(0,r.default)(u,[{key:\"addDependentOperation\",value:function(r,a){for(var e=function(e){var t=r[e],n=a.find(function(e){return e.id==t&&e.dependentId});n&&!r.find(function(e){return e==n.dependentId})&&r.push(n.dependentId)},t=0;t<r.length;t++)e(t);return r}},{key:\"clearSubOperation\",value:function(n,r,a){for(var e=function(e){var t=r[e];a.filter(function(e){return e.dependentId==t}).forEach(function(t){var e=n.findIndex(function(e){return e==t.id});-1!=e&&delete n[e],r.find(function(e){return e==t.id})||r.push(t.id)})},t=0;t<r.length;t++)e(t);return n.filter(function(e){return e})}}]),u}();e.exports=t.default},841:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r,a,u=f(n(0)),o=f(n(7));t.default=function(e){var t=new c.reducer(e),n=new d((0,u.default)({},e,{metaReducer:t}));return(0,u.default)({},t,n)};var i=n(14),c=n(56),s=(f(n(203)),f(n(13)),n(295));function f(e){return e&&e.__esModule?e:{default:e}}var d=(r=function e(t){(0,o.default)(this,e),a.call(this),this.metaReducer=t.metaReducer},a=function(){var a=this;this.init=function(e,t){var n=(0,s.getInitState)();return t&&t.parentId&&(n.data.form.parentId=t.parentId),a.metaReducer.init(e,n)},this.load=function(e,t){return a.metaReducer.sf(e,\"data.form\",(0,i.fromJS)(t))},this.loadOperations=function(e,t){var n=t.operations,r=t.options;return e=a.metaReducer.sf(e,\"data.other.options\",(0,i.fromJS)(r)),a.metaReducer.sf(e,\"data.operations\",(0,i.fromJS)(n))},this.selectOperations=function(e,t){return a.metaReducer.sf(e,\"data.other.selectedOperations\",(0,i.fromJS)(t))}},r);e.exports=t.default}});"}