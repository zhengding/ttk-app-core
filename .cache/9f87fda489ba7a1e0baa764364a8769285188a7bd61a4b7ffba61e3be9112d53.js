{"source":"webpackJsonp([32],{776:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var u,r=p(n(0)),a=p(n(9)),i=p(n(7)),o=p(n(8)),f=p(n(10)),d=p(n(11)),c=n(1),s=(p(c),n(56)),l=p(n(252));function p(e){return e&&e.__esModule?e:{default:e}}var h=(0,s.wrapper)(l.default)(u=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,o.default)(t,[{key:\"render\",value:function(){return this.props.monkeyKing((0,r.default)({},this.props,{path:\"root\"}))}}]),t}(c.Component))||u;t.default=h,e.exports=t.default},777:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r=u(n(0)),a=u(n(35)),i=u(n(36)),o=u(n(7));t.default=function(e){var t=new f.action(e),n=new c((0,r.default)({},e,{metaAction:t})),u=(0,r.default)({},t,n);return t.config({metaHandlers:u}),u};u(n(1));var f=n(56),d=u(n(183));u(n(13));function u(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){var u=this;(0,o.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;u.component=t,(u.injections=n).reduce(\"init\"),u.load()},this.load=(0,i.default)(a.default.mark(function e(){var t;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.webapi.analysis.query();case 2:t=e.sent,u.injections.reduce(\"load\",t);case 4:case\"end\":return e.stop()}},e,u)})),this.metaAction=t.metaAction,this.config=d.default.current,this.webapi=this.config.webapi};e.exports=t.default},778:function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var u=d(n(0)),r=d(n(7));t.default=function(e){var t=new i.reducer(e),n=new c((0,u.default)({},e,{metaReducer:t}));return(0,u.default)({},t,n)};var a=n(14),i=n(56),o=d(n(183)),f=n(253);function d(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){var u=this;(0,r.default)(this,e),this.init=function(e,t){var n=(0,f.getInitState)();return u.metaReducer.init(e,n)},this.load=function(e,t){return e=u.metaReducer.sf(e,\"data\",(0,a.fromJS)(t))},this.metaReducer=t.metaReducer,this.config=o.default.current};e.exports=t.default}});"}