// Compiled by ClojureScript 1.9.521 {}
goog.provide('hue.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('secretary.core');
goog.require('accountant.core');
hue.core.first_hue = reagent.core.atom.call(null,(Math.round((cljs.core.rand.call(null) * (10000))) / (10000)));
hue.core.saturation = reagent.core.atom.call(null,0.4);
hue.core.value = reagent.core.atom.call(null,(1));
hue.core.n = reagent.core.atom.call(null,((4) + cljs.core.rand_int.call(null,(4))));
hue.core.hsvtorgb = (function hue$core$hsvtorgb(color){
var vec__52527 = color;
var hue__$1 = cljs.core.nth.call(null,vec__52527,(0),null);
var s = cljs.core.nth.call(null,vec__52527,(1),null);
var v = cljs.core.nth.call(null,vec__52527,(2),null);
var i = Math.floor((hue__$1 * (6)));
var f = ((hue__$1 * (6)) - i);
var p = (v * ((1) - s));
var q = (v * ((1) - (f * s)));
var t = (v * ((1) - (((1) - f) * s)));
var vec__52530 = (function (){var G__52533 = cljs.core.mod.call(null,i,(6));
switch (G__52533) {
case (0):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,t,p], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,t,p], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,v,t], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,q,v], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,p,v], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,p,q], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,i,(6)))].join('')));

}
})();
var r = cljs.core.nth.call(null,vec__52530,(0),null);
var g = cljs.core.nth.call(null,vec__52530,(1),null);
var b = cljs.core.nth.call(null,vec__52530,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((255) * r),((255) * g),((255) * b)], null);
});
hue.core.rgba = (function hue$core$rgba(color,a){
var color__$1 = cljs.core.map.call(null,(function (x){
return goog.string.format("%.2f",x);
}),color);
var vec__52538 = color__$1;
var r = cljs.core.nth.call(null,vec__52538,(0),null);
var g = cljs.core.nth.call(null,vec__52538,(1),null);
var b = cljs.core.nth.call(null,vec__52538,(2),null);
if(cljs.core._EQ_.call(null,a,(1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgba("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
}
});
hue.core.allcolors = (function hue$core$allcolors(hue__$1,saturation,value,alpha,number){
var hue__$2 = cljs.core.mod.call(null,(hue__$1 * 1.61803398875),(1));
if(cljs.core._EQ_.call(null,number,(0))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,hue.core.rgba.call(null,hue.core.hsvtorgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue__$2,saturation,value], null)),alpha),hue.core.allcolors.call(null,hue__$2,saturation,value,alpha,(number - (1))));
}
});
hue.core.templates = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inset 0 30px 0 ","inset 30px 0 0 ","inset 0 -30px 0 ","inset -30px 0 0 "], null);
hue.core.shadow = (function hue$core$shadow(colors){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.map.call(null,cljs.core.str,hue.core.templates,colors))))].join('');
});
hue.core.generate_shadow = (function hue$core$generate_shadow(f){
var thecolors = hue.core.allcolors.call(null,cljs.core.deref.call(null,hue.core.first_hue),cljs.core.deref.call(null,hue.core.saturation),cljs.core.deref.call(null,hue.core.value),0.6,cljs.core.deref.call(null,hue.core.n));
var shadows = hue.core.shadow.call(null,f.call(null,thecolors));
cljs.core.println.call(null,shadows);

return shadows;
});
hue.core.slider = (function hue$core$slider(title,a,bottom,top,step){
var set_atom = (function (e){
return cljs.core.swap_BANG_.call(null,a,(function (x){
return e.target.value;
}));
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider","div.slider",1951581386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"dial","dial",1238392184),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,a),new cljs.core.Keyword(null,"max","max",61366548),top,new cljs.core.Keyword(null,"min","min",444991522),bottom,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"on-change","on-change",-732046149),set_atom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.deref.call(null,a)], null)], null);
});
hue.core.box = (function hue$core$box(color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) / cljs.core.deref.call(null,hue.core.n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join(''),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + ((20) / cljs.core.deref.call(null,hue.core.n)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("pt")].join('')], null)], null),color], null);
});
hue.core.boxes = (function hue$core$boxes(hue__$1,saturation,value){
var colors = hue.core.allcolors.call(null,hue__$1,saturation,value,(1),cljs.core.deref.call(null,hue.core.n));
return cljs.core.map.call(null,((function (colors){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue.core.box,x], null);
});})(colors))
,colors);
});
hue.core.home_page = (function hue$core$home_page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#title","h1#title",-1947813100),"Hue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ring1","div#ring1",-660210345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),hue.core.generate_shadow.call(null,cljs.core.identity)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ring2","div#ring2",-613843257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),hue.core.generate_shadow.call(null,cljs.core.reverse)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#sliders","ul#sliders",1483015034),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue.core.slider,new cljs.core.Keyword(null,"hue","hue",-508078848),hue.core.first_hue,(0),(1),1.0E-4], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue.core.slider,new cljs.core.Keyword(null,"saturation","saturation",-14247929),hue.core.saturation,(0),(1),1.0E-4], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue.core.slider,new cljs.core.Keyword(null,"value","value",305978217),hue.core.value,(0),(1),1.0E-4], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue.core.slider,new cljs.core.Keyword(null,"number","number",1570378438),hue.core.n,(1),(8),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#boxes","ul#boxes",1551942647),hue.core.boxes.call(null,cljs.core.deref.call(null,hue.core.first_hue),cljs.core.deref.call(null,hue.core.saturation),cljs.core.deref.call(null,hue.core.value))], null)], null);
});
hue.core.current_page = (function hue$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__32840__auto___52546 = (function (params__32841__auto__){
if(cljs.core.map_QMARK_.call(null,params__32841__auto__)){
var map__52541 = params__32841__auto__;
var map__52541__$1 = ((((!((map__52541 == null)))?((((map__52541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52541):map__52541);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return hue.core.home_page;},new cljs.core.Symbol("hue.core","home-page","hue.core/home-page",983407806,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hue.core","hue.core",2058298730,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/charles/code/hue/src/cljs/hue/core.cljs",16,1,104,104,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(hue.core.home_page)?hue.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__32841__auto__)){
var vec__52543 = params__32841__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return hue.core.home_page;},new cljs.core.Symbol("hue.core","home-page","hue.core/home-page",983407806,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hue.core","hue.core",2058298730,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/charles/code/hue/src/cljs/hue/core.cljs",16,1,104,104,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(hue.core.home_page)?hue.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__32840__auto___52546);

hue.core.mount_root = (function hue$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue.core.current_page], null),document.getElementById("app"));
});
hue.core.init_BANG_ = (function hue$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return hue.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1495231295041