// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('hue.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('hue.dev');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__52551__delegate = function (x){
if(cljs.core.truth_(hue.core.mount_root)){
return cljs.core.apply.call(null,hue.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hue.core/mount-root' is missing");
}
};
var G__52551 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__52552__i = 0, G__52552__a = new Array(arguments.length -  0);
while (G__52552__i < G__52552__a.length) {G__52552__a[G__52552__i] = arguments[G__52552__i + 0]; ++G__52552__i;}
  x = new cljs.core.IndexedSeq(G__52552__a,0);
} 
return G__52551__delegate.call(this,x);};
G__52551.cljs$lang$maxFixedArity = 0;
G__52551.cljs$lang$applyTo = (function (arglist__52553){
var x = cljs.core.seq(arglist__52553);
return G__52551__delegate(x);
});
G__52551.cljs$core$IFn$_invoke$arity$variadic = G__52551__delegate;
return G__52551;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1495231295117