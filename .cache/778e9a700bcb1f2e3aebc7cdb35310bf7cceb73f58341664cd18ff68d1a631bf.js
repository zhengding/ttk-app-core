{"source":"webpackJsonp([6],{851:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var r,a=p(n(0)),o=p(n(9)),i=p(n(7)),u=p(n(8)),d=p(n(10)),c=p(n(11)),l=n(1),f=(p(l),n(56)),s=p(n(302));function p(e){return e&&e.__esModule?e:{default:e}}var m=(0,f.wrapper)(s.default)(r=function(e){function t(){return(0,i.default)(this,t),(0,d.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,a.default)({},this.props,{path:\"root\"}))}}]),t}(l.Component))||r;t.default=m,e.exports=t.default},852:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var a=c(n(0)),o=c(n(35)),r=c(n(36)),i=c(n(7));t.default=function(e){var t=new u.action(e),n=new s((0,a.default)({},e,{metaAction:t})),r=(0,a.default)({},t,n);return t.config({metaHandlers:r}),r};var l=c(n(1)),u=n(56),d=(n(14),c(n(206))),f=(c(n(13)),n(42));function c(e){return e&&e.__esModule?e:{default:e}}var s=function e(t){var n,c=this;(0,i.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;c.component=t,(c.injections=n).reduce(\"init\"),c.init()},this.init=(0,r.default)(o.default.mark(function e(){var t;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.webapi.role.init();case 2:(t=e.sent).operations.forEach(function(n){n.count=0,t.menus.forEach(function(e){var t=e.operations?e.operations.filter(function(e){return e.operationId==n.id}).length:0;n.count+=t})}),t.filter={roleId:t.roles.length&&t.roles[0].id},c.injections.reduce(\"loadInit\",t);case 6:case\"end\":return e.stop()}},e,c)})),this.getOperationColumns=function(){var o=c.metaAction.gf(\"data.other.filter.roleId\"),e=c.metaAction.gf(\"data.operations\").toJS(),i=c.metaAction.gf(\"data.menus\").toJS(),u=c.metaAction.gf(\"data.menuOperations\");u=u?u.toJS():[];var t=f.DataGrid.Column,d=f.DataGrid.Cell,n=[l.default.createElement(t,{name:\"name\",columnKey:\"name\",flexGrow:1,width:200,header:l.default.createElement(d,{name:\"header\"},\"菜单\"),cell:function(e){return l.default.createElement(d,{align:\"center\"},(i[e.rowIndex].parentId,\"\"+i[e.rowIndex].name))}})];return e.forEach(function(a){var e=l.default.createElement(t,{name:a.id,columnKey:a.id,flexGrow:1,width:200,header:l.default.createElement(d,{name:\"header\"},l.default.createElement(f.Checkbox,{disabled:!o,checked:c.isSelectedAll(a,u),onChange:c.selectAll(a)},a.name)),cell:function(e){var t=i[e.rowIndex],n=t.operations||[{operationId:0}];if(!t.appName||\"null\"==t.appName||!n.find(function(e){return e.operationId==a.id}))return l.default.createElement(d,null);var r=!!u.find(function(e){return e.menuId==t.id&&e.operationId==a.id});return l.default.createElement(d,null,l.default.createElement(f.Checkbox,{disabled:!o,checked:r,onChange:c.selectOperation(t,a)}))}});n.push(e)}),n},this.isSelectedAll=function(t,e){return t.count==e.filter(function(e){return e&&e.operationId==t.id}).length},this.loadRole=(0,r.default)(o.default.mark(function e(){var t,n;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.metaAction.gf(\"data.other.filter\").toJS(),e.next=3,c.init(t);case 3:return e.next=5,c.webapi.roleMenuOperation.query(t);case 5:n=e.sent,c.injections.reduce(\"loadRoleMenuOperation\",{menuOperations:n,filter:t});case 7:case\"end\":return e.stop()}},e,c)})),this.getListRowsCount=function(){return c.metaAction.gf(\"data.menus\").size},this.selectRole=(n=(0,r.default)(o.default.mark(function e(t){var n,r,a=t.selectedKeys;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n={roleId:a[0]},0!=a.length){e.next=4;break}return c.injections.reduce(\"loadRoleMenuOperation\",{menuOperations:[],filter:n}),e.abrupt(\"return\");case 4:return e.next=6,c.webapi.roleMenuOperation.query(n);case 6:r=e.sent,c.injections.reduce(\"loadRoleMenuOperation\",{menuOperations:r,filter:n});case 8:case\"end\":return e.stop()}},e,c)})),function(e){return n.apply(this,arguments)}),this.selectAll=function(a){return function(e){var t=c.metaAction.gf(\"data.menus\").toJS(),n=c.updateOperation(t,a,e.target.checked);c.injections.reduce(\"loadRoleMenuOperation\",{menuOperations:n});var r=c.metaAction.gf(\"data.other.filter\").toJS().roleId;c.webapi.roleMenuOperation.save({roleId:r,menuOperations:n})}},this.selectOperation=function(r,a){return function(e){var t=c.updateOperation([r],a,e.target.checked);c.injections.reduce(\"loadRoleMenuOperation\",{menuOperations:t});var n=c.metaAction.gf(\"data.other.filter\").toJS().roleId;c.webapi.roleMenuOperation.save({roleId:n,menuOperations:t})}},this.updateOperation=function(e,n,r,a,o){if(o&&n){if(1==o[\"_\"+n.id])return;o[\"_\"+n.id]=!0}var i=c.metaAction.gf(\"data.other.filter.roleId\"),t=c.metaAction.gf(\"data.operations\").toJS();(a=a||c.metaAction.gf(\"data.menuOperations\")||[])&&a.toJS&&(a=a.toJS());var u=t.filter(function(e){return e.id==n.dependentId}),d=t.filter(function(e){return e.dependentId==n.id});return e.forEach(function(t){var e=a.findIndex(function(e){return e&&e.menuId==t.id&&e.operationId==n.id});r&&-1==e?(t.operations&&t.operations.find(function(e){return e.operationId==n.id})&&a.push({menuId:t.id,operationId:n.id,roleId:i}),u.forEach(function(e){return c.updateOperation([t],e,r,a,o||{})})):r||-1==e||(delete a[e],d.forEach(function(e){return c.updateOperation([t],e,r,a,o||{})}))}),a.filter(function(e){return e})},this.loopMenuChildren=function(e){return e&&e.map(function(e){var t=e.id,n=e.name;return l.default.createElement(f.Menu.Item,{key:t},n)})},this.addRole=(0,r.default)(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.metaAction.modal(\"show\",{title:\"新增\",children:c.metaAction.loadApp(\"ttk-edf-app-role\",{store:c.component.props.store})});case 2:e.sent&&c.loadRole();case 4:case\"end\":return e.stop()}},e,c)})),this.modifyRole=(0,r.default)(o.default.mark(function e(){var t;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.metaAction.gf(\"data.other.filter.roleId\")){e.next=4;break}return c.metaAction.toast(\"error\",\"请选修改项\"),e.abrupt(\"return\");case 4:return e.next=6,c.metaAction.modal(\"show\",{title:\"修改\",children:c.metaAction.loadApp(\"ttk-edf-app-role\",{store:c.component.props.store,id:t})});case 6:e.sent&&c.loadRole();case 8:case\"end\":return e.stop()}},e,c)})),this.delRole=(0,r.default)(o.default.mark(function e(){var t;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.metaAction.gf(\"data.other.filter.roleId\")){e.next=4;break}return c.metaAction.toast(\"error\",\"请选删除项\"),e.abrupt(\"return\");case 4:return e.next=6,c.metaAction.modal(\"confirm\",{title:\"删除\",content:\"确认删除?\"});case 6:if(!e.sent){e.next=13;break}return e.next=10,c.webapi.role.delete({id:t});case 10:e.sent,c.metaAction.toast(\"success\",\"删除类型成功\"),c.init();case 13:case\"end\":return e.stop()}},e,c)})),this.metaAction=t.metaAction,this.config=d.default.current,this.webapi=this.config.webapi};e.exports=t.default},853:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r=c(n(0)),o=c(n(869)),i=c(n(7));t.default=function(e){var t=new a.reducer(e),n=new l((0,r.default)({},e,{metaReducer:t}));return(0,r.default)({},t,n)};var u=n(14),a=n(56),d=(c(n(206)),n(303));function c(e){return e&&e.__esModule?e:{default:e}}var l=function e(t){var a=this;(0,i.default)(this,e),this.init=function(e,t){return a.metaReducer.init(e,(0,d.getInitState)())},this.loadInit=function(e,t){return e=a.metaReducer.sf(e,\"data.roles\",(0,u.fromJS)(t.roles)),e=a.metaReducer.sf(e,\"data.menus\",(0,u.fromJS)(t.menus)),e=a.metaReducer.sf(e,\"data.operations\",(0,u.fromJS)(t.operations)),e=a.metaReducer.sf(e,\"data.menuOperations\",(0,u.fromJS)(t.menuOperations)),e=a.metaReducer.sf(e,\"data.other.filter\",(0,u.fromJS)(t.filter))},this.loadRole=function(e,t){return e=a.metaReducer.sf(e,\"data.roles\",(0,u.fromJS)(t))},this.loadRoleMenuOperation=function(e,t){var n=t.menuOperations,r=t.filter;return e=a.metaReducer.sf(e,\"data.menuOperations\",(0,u.fromJS)((0,o.default)(n))),r&&(e=a.metaReducer.sf(e,\"data.other.filter\",(0,u.fromJS)(r))),e},this.metaReducer=t.metaReducer};e.exports=t.default},869:function(e,t,n){e.exports=n(5)(593)}});"}