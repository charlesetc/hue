// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__31516__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__31516__auto__){
return or__31516__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__31516__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39394_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39394_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39399 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39400 = null;
var count__39401 = (0);
var i__39402 = (0);
while(true){
if((i__39402 < count__39401)){
var n = cljs.core._nth.call(null,chunk__39400,i__39402);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39403 = seq__39399;
var G__39404 = chunk__39400;
var G__39405 = count__39401;
var G__39406 = (i__39402 + (1));
seq__39399 = G__39403;
chunk__39400 = G__39404;
count__39401 = G__39405;
i__39402 = G__39406;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39399);
if(temp__4657__auto__){
var seq__39399__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39399__$1)){
var c__32335__auto__ = cljs.core.chunk_first.call(null,seq__39399__$1);
var G__39407 = cljs.core.chunk_rest.call(null,seq__39399__$1);
var G__39408 = c__32335__auto__;
var G__39409 = cljs.core.count.call(null,c__32335__auto__);
var G__39410 = (0);
seq__39399 = G__39407;
chunk__39400 = G__39408;
count__39401 = G__39409;
i__39402 = G__39410;
continue;
} else {
var n = cljs.core.first.call(null,seq__39399__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39411 = cljs.core.next.call(null,seq__39399__$1);
var G__39412 = null;
var G__39413 = (0);
var G__39414 = (0);
seq__39399 = G__39411;
chunk__39400 = G__39412;
count__39401 = G__39413;
i__39402 = G__39414;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39465_39476 = cljs.core.seq.call(null,deps);
var chunk__39466_39477 = null;
var count__39467_39478 = (0);
var i__39468_39479 = (0);
while(true){
if((i__39468_39479 < count__39467_39478)){
var dep_39480 = cljs.core._nth.call(null,chunk__39466_39477,i__39468_39479);
topo_sort_helper_STAR_.call(null,dep_39480,(depth + (1)),state);

var G__39481 = seq__39465_39476;
var G__39482 = chunk__39466_39477;
var G__39483 = count__39467_39478;
var G__39484 = (i__39468_39479 + (1));
seq__39465_39476 = G__39481;
chunk__39466_39477 = G__39482;
count__39467_39478 = G__39483;
i__39468_39479 = G__39484;
continue;
} else {
var temp__4657__auto___39485 = cljs.core.seq.call(null,seq__39465_39476);
if(temp__4657__auto___39485){
var seq__39465_39486__$1 = temp__4657__auto___39485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39465_39486__$1)){
var c__32335__auto___39487 = cljs.core.chunk_first.call(null,seq__39465_39486__$1);
var G__39488 = cljs.core.chunk_rest.call(null,seq__39465_39486__$1);
var G__39489 = c__32335__auto___39487;
var G__39490 = cljs.core.count.call(null,c__32335__auto___39487);
var G__39491 = (0);
seq__39465_39476 = G__39488;
chunk__39466_39477 = G__39489;
count__39467_39478 = G__39490;
i__39468_39479 = G__39491;
continue;
} else {
var dep_39492 = cljs.core.first.call(null,seq__39465_39486__$1);
topo_sort_helper_STAR_.call(null,dep_39492,(depth + (1)),state);

var G__39493 = cljs.core.next.call(null,seq__39465_39486__$1);
var G__39494 = null;
var G__39495 = (0);
var G__39496 = (0);
seq__39465_39476 = G__39493;
chunk__39466_39477 = G__39494;
count__39467_39478 = G__39495;
i__39468_39479 = G__39496;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39469){
var vec__39473 = p__39469;
var seq__39474 = cljs.core.seq.call(null,vec__39473);
var first__39475 = cljs.core.first.call(null,seq__39474);
var seq__39474__$1 = cljs.core.next.call(null,seq__39474);
var x = first__39475;
var xs = seq__39474__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39473,seq__39474,first__39475,seq__39474__$1,x,xs,get_deps__$1){
return (function (p1__39415_SHARP_){
return clojure.set.difference.call(null,p1__39415_SHARP_,x);
});})(vec__39473,seq__39474,first__39475,seq__39474__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39509 = cljs.core.seq.call(null,provides);
var chunk__39510 = null;
var count__39511 = (0);
var i__39512 = (0);
while(true){
if((i__39512 < count__39511)){
var prov = cljs.core._nth.call(null,chunk__39510,i__39512);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39513_39521 = cljs.core.seq.call(null,requires);
var chunk__39514_39522 = null;
var count__39515_39523 = (0);
var i__39516_39524 = (0);
while(true){
if((i__39516_39524 < count__39515_39523)){
var req_39525 = cljs.core._nth.call(null,chunk__39514_39522,i__39516_39524);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39525,prov);

var G__39526 = seq__39513_39521;
var G__39527 = chunk__39514_39522;
var G__39528 = count__39515_39523;
var G__39529 = (i__39516_39524 + (1));
seq__39513_39521 = G__39526;
chunk__39514_39522 = G__39527;
count__39515_39523 = G__39528;
i__39516_39524 = G__39529;
continue;
} else {
var temp__4657__auto___39530 = cljs.core.seq.call(null,seq__39513_39521);
if(temp__4657__auto___39530){
var seq__39513_39531__$1 = temp__4657__auto___39530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39513_39531__$1)){
var c__32335__auto___39532 = cljs.core.chunk_first.call(null,seq__39513_39531__$1);
var G__39533 = cljs.core.chunk_rest.call(null,seq__39513_39531__$1);
var G__39534 = c__32335__auto___39532;
var G__39535 = cljs.core.count.call(null,c__32335__auto___39532);
var G__39536 = (0);
seq__39513_39521 = G__39533;
chunk__39514_39522 = G__39534;
count__39515_39523 = G__39535;
i__39516_39524 = G__39536;
continue;
} else {
var req_39537 = cljs.core.first.call(null,seq__39513_39531__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39537,prov);

var G__39538 = cljs.core.next.call(null,seq__39513_39531__$1);
var G__39539 = null;
var G__39540 = (0);
var G__39541 = (0);
seq__39513_39521 = G__39538;
chunk__39514_39522 = G__39539;
count__39515_39523 = G__39540;
i__39516_39524 = G__39541;
continue;
}
} else {
}
}
break;
}

var G__39542 = seq__39509;
var G__39543 = chunk__39510;
var G__39544 = count__39511;
var G__39545 = (i__39512 + (1));
seq__39509 = G__39542;
chunk__39510 = G__39543;
count__39511 = G__39544;
i__39512 = G__39545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39509);
if(temp__4657__auto__){
var seq__39509__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39509__$1)){
var c__32335__auto__ = cljs.core.chunk_first.call(null,seq__39509__$1);
var G__39546 = cljs.core.chunk_rest.call(null,seq__39509__$1);
var G__39547 = c__32335__auto__;
var G__39548 = cljs.core.count.call(null,c__32335__auto__);
var G__39549 = (0);
seq__39509 = G__39546;
chunk__39510 = G__39547;
count__39511 = G__39548;
i__39512 = G__39549;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39509__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39517_39550 = cljs.core.seq.call(null,requires);
var chunk__39518_39551 = null;
var count__39519_39552 = (0);
var i__39520_39553 = (0);
while(true){
if((i__39520_39553 < count__39519_39552)){
var req_39554 = cljs.core._nth.call(null,chunk__39518_39551,i__39520_39553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39554,prov);

var G__39555 = seq__39517_39550;
var G__39556 = chunk__39518_39551;
var G__39557 = count__39519_39552;
var G__39558 = (i__39520_39553 + (1));
seq__39517_39550 = G__39555;
chunk__39518_39551 = G__39556;
count__39519_39552 = G__39557;
i__39520_39553 = G__39558;
continue;
} else {
var temp__4657__auto___39559__$1 = cljs.core.seq.call(null,seq__39517_39550);
if(temp__4657__auto___39559__$1){
var seq__39517_39560__$1 = temp__4657__auto___39559__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39517_39560__$1)){
var c__32335__auto___39561 = cljs.core.chunk_first.call(null,seq__39517_39560__$1);
var G__39562 = cljs.core.chunk_rest.call(null,seq__39517_39560__$1);
var G__39563 = c__32335__auto___39561;
var G__39564 = cljs.core.count.call(null,c__32335__auto___39561);
var G__39565 = (0);
seq__39517_39550 = G__39562;
chunk__39518_39551 = G__39563;
count__39519_39552 = G__39564;
i__39520_39553 = G__39565;
continue;
} else {
var req_39566 = cljs.core.first.call(null,seq__39517_39560__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39566,prov);

var G__39567 = cljs.core.next.call(null,seq__39517_39560__$1);
var G__39568 = null;
var G__39569 = (0);
var G__39570 = (0);
seq__39517_39550 = G__39567;
chunk__39518_39551 = G__39568;
count__39519_39552 = G__39569;
i__39520_39553 = G__39570;
continue;
}
} else {
}
}
break;
}

var G__39571 = cljs.core.next.call(null,seq__39509__$1);
var G__39572 = null;
var G__39573 = (0);
var G__39574 = (0);
seq__39509 = G__39571;
chunk__39510 = G__39572;
count__39511 = G__39573;
i__39512 = G__39574;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39579_39583 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39580_39584 = null;
var count__39581_39585 = (0);
var i__39582_39586 = (0);
while(true){
if((i__39582_39586 < count__39581_39585)){
var ns_39587 = cljs.core._nth.call(null,chunk__39580_39584,i__39582_39586);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39587);

var G__39588 = seq__39579_39583;
var G__39589 = chunk__39580_39584;
var G__39590 = count__39581_39585;
var G__39591 = (i__39582_39586 + (1));
seq__39579_39583 = G__39588;
chunk__39580_39584 = G__39589;
count__39581_39585 = G__39590;
i__39582_39586 = G__39591;
continue;
} else {
var temp__4657__auto___39592 = cljs.core.seq.call(null,seq__39579_39583);
if(temp__4657__auto___39592){
var seq__39579_39593__$1 = temp__4657__auto___39592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39579_39593__$1)){
var c__32335__auto___39594 = cljs.core.chunk_first.call(null,seq__39579_39593__$1);
var G__39595 = cljs.core.chunk_rest.call(null,seq__39579_39593__$1);
var G__39596 = c__32335__auto___39594;
var G__39597 = cljs.core.count.call(null,c__32335__auto___39594);
var G__39598 = (0);
seq__39579_39583 = G__39595;
chunk__39580_39584 = G__39596;
count__39581_39585 = G__39597;
i__39582_39586 = G__39598;
continue;
} else {
var ns_39599 = cljs.core.first.call(null,seq__39579_39593__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39599);

var G__39600 = cljs.core.next.call(null,seq__39579_39593__$1);
var G__39601 = null;
var G__39602 = (0);
var G__39603 = (0);
seq__39579_39583 = G__39600;
chunk__39580_39584 = G__39601;
count__39581_39585 = G__39602;
i__39582_39586 = G__39603;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__31516__auto__ = goog.require__;
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39604__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39605__i = 0, G__39605__a = new Array(arguments.length -  0);
while (G__39605__i < G__39605__a.length) {G__39605__a[G__39605__i] = arguments[G__39605__i + 0]; ++G__39605__i;}
  args = new cljs.core.IndexedSeq(G__39605__a,0);
} 
return G__39604__delegate.call(this,args);};
G__39604.cljs$lang$maxFixedArity = 0;
G__39604.cljs$lang$applyTo = (function (arglist__39606){
var args = cljs.core.seq(arglist__39606);
return G__39604__delegate(args);
});
G__39604.cljs$core$IFn$_invoke$arity$variadic = G__39604__delegate;
return G__39604;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39607 = cljs.core._EQ_;
var expr__39608 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39607.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39608))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__39607,expr__39608){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__39607,expr__39608))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__39607,expr__39608){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39610){if((e39610 instanceof Error)){
var e = e39610;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39610;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__39607,expr__39608))
} else {
if(cljs.core.truth_(pred__39607.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39608))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__39607.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__39608))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__39607.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39608))){
return ((function (pred__39607,expr__39608){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39611){if((e39611 instanceof Error)){
var e = e39611;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39611;

}
}})());
});
;})(pred__39607,expr__39608))
} else {
return ((function (pred__39607,expr__39608){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39607,expr__39608))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39612,callback){
var map__39615 = p__39612;
var map__39615__$1 = ((((!((map__39615 == null)))?((((map__39615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39615):map__39615);
var file_msg = map__39615__$1;
var request_url = cljs.core.get.call(null,map__39615__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39615,map__39615__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39615,map__39615__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__){
return (function (state_39639){
var state_val_39640 = (state_39639[(1)]);
if((state_val_39640 === (7))){
var inst_39635 = (state_39639[(2)]);
var state_39639__$1 = state_39639;
var statearr_39641_39661 = state_39639__$1;
(statearr_39641_39661[(2)] = inst_39635);

(statearr_39641_39661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (1))){
var state_39639__$1 = state_39639;
var statearr_39642_39662 = state_39639__$1;
(statearr_39642_39662[(2)] = null);

(statearr_39642_39662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (4))){
var inst_39619 = (state_39639[(7)]);
var inst_39619__$1 = (state_39639[(2)]);
var state_39639__$1 = (function (){var statearr_39643 = state_39639;
(statearr_39643[(7)] = inst_39619__$1);

return statearr_39643;
})();
if(cljs.core.truth_(inst_39619__$1)){
var statearr_39644_39663 = state_39639__$1;
(statearr_39644_39663[(1)] = (5));

} else {
var statearr_39645_39664 = state_39639__$1;
(statearr_39645_39664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (6))){
var state_39639__$1 = state_39639;
var statearr_39646_39665 = state_39639__$1;
(statearr_39646_39665[(2)] = null);

(statearr_39646_39665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (3))){
var inst_39637 = (state_39639[(2)]);
var state_39639__$1 = state_39639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39639__$1,inst_39637);
} else {
if((state_val_39640 === (2))){
var state_39639__$1 = state_39639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39639__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39640 === (11))){
var inst_39631 = (state_39639[(2)]);
var state_39639__$1 = (function (){var statearr_39647 = state_39639;
(statearr_39647[(8)] = inst_39631);

return statearr_39647;
})();
var statearr_39648_39666 = state_39639__$1;
(statearr_39648_39666[(2)] = null);

(statearr_39648_39666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (9))){
var inst_39625 = (state_39639[(9)]);
var inst_39623 = (state_39639[(10)]);
var inst_39627 = inst_39625.call(null,inst_39623);
var state_39639__$1 = state_39639;
var statearr_39649_39667 = state_39639__$1;
(statearr_39649_39667[(2)] = inst_39627);

(statearr_39649_39667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (5))){
var inst_39619 = (state_39639[(7)]);
var inst_39621 = figwheel.client.file_reloading.blocking_load.call(null,inst_39619);
var state_39639__$1 = state_39639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39639__$1,(8),inst_39621);
} else {
if((state_val_39640 === (10))){
var inst_39623 = (state_39639[(10)]);
var inst_39629 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39623);
var state_39639__$1 = state_39639;
var statearr_39650_39668 = state_39639__$1;
(statearr_39650_39668[(2)] = inst_39629);

(statearr_39650_39668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (8))){
var inst_39619 = (state_39639[(7)]);
var inst_39625 = (state_39639[(9)]);
var inst_39623 = (state_39639[(2)]);
var inst_39624 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39625__$1 = cljs.core.get.call(null,inst_39624,inst_39619);
var state_39639__$1 = (function (){var statearr_39651 = state_39639;
(statearr_39651[(9)] = inst_39625__$1);

(statearr_39651[(10)] = inst_39623);

return statearr_39651;
})();
if(cljs.core.truth_(inst_39625__$1)){
var statearr_39652_39669 = state_39639__$1;
(statearr_39652_39669[(1)] = (9));

} else {
var statearr_39653_39670 = state_39639__$1;
(statearr_39653_39670[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34465__auto__))
;
return ((function (switch__34353__auto__,c__34465__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34354__auto__ = null;
var figwheel$client$file_reloading$state_machine__34354__auto____0 = (function (){
var statearr_39657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39657[(0)] = figwheel$client$file_reloading$state_machine__34354__auto__);

(statearr_39657[(1)] = (1));

return statearr_39657;
});
var figwheel$client$file_reloading$state_machine__34354__auto____1 = (function (state_39639){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_39639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e39658){if((e39658 instanceof Object)){
var ex__34357__auto__ = e39658;
var statearr_39659_39671 = state_39639;
(statearr_39659_39671[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39672 = state_39639;
state_39639 = G__39672;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34354__auto__ = function(state_39639){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34354__auto____1.call(this,state_39639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34354__auto____0;
figwheel$client$file_reloading$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34354__auto____1;
return figwheel$client$file_reloading$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__))
})();
var state__34467__auto__ = (function (){var statearr_39660 = f__34466__auto__.call(null);
(statearr_39660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_39660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__))
);

return c__34465__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39673,callback){
var map__39676 = p__39673;
var map__39676__$1 = ((((!((map__39676 == null)))?((((map__39676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39676):map__39676);
var file_msg = map__39676__$1;
var namespace = cljs.core.get.call(null,map__39676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39676,map__39676__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39676,map__39676__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39678){
var map__39681 = p__39678;
var map__39681__$1 = ((((!((map__39681 == null)))?((((map__39681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39681):map__39681);
var file_msg = map__39681__$1;
var namespace = cljs.core.get.call(null,map__39681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39683){
var map__39686 = p__39683;
var map__39686__$1 = ((((!((map__39686 == null)))?((((map__39686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39686):map__39686);
var file_msg = map__39686__$1;
var namespace = cljs.core.get.call(null,map__39686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__31504__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__31504__auto__){
var or__31516__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
var or__31516__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31516__auto____$1)){
return or__31516__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__31504__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39688,callback){
var map__39691 = p__39688;
var map__39691__$1 = ((((!((map__39691 == null)))?((((map__39691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39691):map__39691);
var file_msg = map__39691__$1;
var request_url = cljs.core.get.call(null,map__39691__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34465__auto___39795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___39795,out){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___39795,out){
return (function (state_39777){
var state_val_39778 = (state_39777[(1)]);
if((state_val_39778 === (1))){
var inst_39751 = cljs.core.seq.call(null,files);
var inst_39752 = cljs.core.first.call(null,inst_39751);
var inst_39753 = cljs.core.next.call(null,inst_39751);
var inst_39754 = files;
var state_39777__$1 = (function (){var statearr_39779 = state_39777;
(statearr_39779[(7)] = inst_39752);

(statearr_39779[(8)] = inst_39754);

(statearr_39779[(9)] = inst_39753);

return statearr_39779;
})();
var statearr_39780_39796 = state_39777__$1;
(statearr_39780_39796[(2)] = null);

(statearr_39780_39796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (2))){
var inst_39754 = (state_39777[(8)]);
var inst_39760 = (state_39777[(10)]);
var inst_39759 = cljs.core.seq.call(null,inst_39754);
var inst_39760__$1 = cljs.core.first.call(null,inst_39759);
var inst_39761 = cljs.core.next.call(null,inst_39759);
var inst_39762 = (inst_39760__$1 == null);
var inst_39763 = cljs.core.not.call(null,inst_39762);
var state_39777__$1 = (function (){var statearr_39781 = state_39777;
(statearr_39781[(11)] = inst_39761);

(statearr_39781[(10)] = inst_39760__$1);

return statearr_39781;
})();
if(inst_39763){
var statearr_39782_39797 = state_39777__$1;
(statearr_39782_39797[(1)] = (4));

} else {
var statearr_39783_39798 = state_39777__$1;
(statearr_39783_39798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (3))){
var inst_39775 = (state_39777[(2)]);
var state_39777__$1 = state_39777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39777__$1,inst_39775);
} else {
if((state_val_39778 === (4))){
var inst_39760 = (state_39777[(10)]);
var inst_39765 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39760);
var state_39777__$1 = state_39777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39777__$1,(7),inst_39765);
} else {
if((state_val_39778 === (5))){
var inst_39771 = cljs.core.async.close_BANG_.call(null,out);
var state_39777__$1 = state_39777;
var statearr_39784_39799 = state_39777__$1;
(statearr_39784_39799[(2)] = inst_39771);

(statearr_39784_39799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (6))){
var inst_39773 = (state_39777[(2)]);
var state_39777__$1 = state_39777;
var statearr_39785_39800 = state_39777__$1;
(statearr_39785_39800[(2)] = inst_39773);

(statearr_39785_39800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (7))){
var inst_39761 = (state_39777[(11)]);
var inst_39767 = (state_39777[(2)]);
var inst_39768 = cljs.core.async.put_BANG_.call(null,out,inst_39767);
var inst_39754 = inst_39761;
var state_39777__$1 = (function (){var statearr_39786 = state_39777;
(statearr_39786[(8)] = inst_39754);

(statearr_39786[(12)] = inst_39768);

return statearr_39786;
})();
var statearr_39787_39801 = state_39777__$1;
(statearr_39787_39801[(2)] = null);

(statearr_39787_39801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__34465__auto___39795,out))
;
return ((function (switch__34353__auto__,c__34465__auto___39795,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto____0 = (function (){
var statearr_39791 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39791[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto__);

(statearr_39791[(1)] = (1));

return statearr_39791;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto____1 = (function (state_39777){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_39777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e39792){if((e39792 instanceof Object)){
var ex__34357__auto__ = e39792;
var statearr_39793_39802 = state_39777;
(statearr_39793_39802[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39803 = state_39777;
state_39777 = G__39803;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto__ = function(state_39777){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto____1.call(this,state_39777);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___39795,out))
})();
var state__34467__auto__ = (function (){var statearr_39794 = f__34466__auto__.call(null);
(statearr_39794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___39795);

return statearr_39794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___39795,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39804,opts){
var map__39808 = p__39804;
var map__39808__$1 = ((((!((map__39808 == null)))?((((map__39808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39808):map__39808);
var eval_body = cljs.core.get.call(null,map__39808__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39808__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__31504__auto__ = eval_body;
if(cljs.core.truth_(and__31504__auto__)){
return typeof eval_body === 'string';
} else {
return and__31504__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39810){var e = e39810;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39811_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39811_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39820){
var vec__39821 = p__39820;
var k = cljs.core.nth.call(null,vec__39821,(0),null);
var v = cljs.core.nth.call(null,vec__39821,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39824){
var vec__39825 = p__39824;
var k = cljs.core.nth.call(null,vec__39825,(0),null);
var v = cljs.core.nth.call(null,vec__39825,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39831,p__39832){
var map__40080 = p__39831;
var map__40080__$1 = ((((!((map__40080 == null)))?((((map__40080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40080):map__40080);
var opts = map__40080__$1;
var before_jsload = cljs.core.get.call(null,map__40080__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40080__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40080__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40081 = p__39832;
var map__40081__$1 = ((((!((map__40081 == null)))?((((map__40081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40081):map__40081);
var msg = map__40081__$1;
var files = cljs.core.get.call(null,map__40081__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40081__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40081__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40235){
var state_val_40236 = (state_40235[(1)]);
if((state_val_40236 === (7))){
var inst_40096 = (state_40235[(7)]);
var inst_40098 = (state_40235[(8)]);
var inst_40097 = (state_40235[(9)]);
var inst_40095 = (state_40235[(10)]);
var inst_40103 = cljs.core._nth.call(null,inst_40096,inst_40098);
var inst_40104 = figwheel.client.file_reloading.eval_body.call(null,inst_40103,opts);
var inst_40105 = (inst_40098 + (1));
var tmp40237 = inst_40096;
var tmp40238 = inst_40097;
var tmp40239 = inst_40095;
var inst_40095__$1 = tmp40239;
var inst_40096__$1 = tmp40237;
var inst_40097__$1 = tmp40238;
var inst_40098__$1 = inst_40105;
var state_40235__$1 = (function (){var statearr_40240 = state_40235;
(statearr_40240[(7)] = inst_40096__$1);

(statearr_40240[(11)] = inst_40104);

(statearr_40240[(8)] = inst_40098__$1);

(statearr_40240[(9)] = inst_40097__$1);

(statearr_40240[(10)] = inst_40095__$1);

return statearr_40240;
})();
var statearr_40241_40327 = state_40235__$1;
(statearr_40241_40327[(2)] = null);

(statearr_40241_40327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (20))){
var inst_40138 = (state_40235[(12)]);
var inst_40146 = figwheel.client.file_reloading.sort_files.call(null,inst_40138);
var state_40235__$1 = state_40235;
var statearr_40242_40328 = state_40235__$1;
(statearr_40242_40328[(2)] = inst_40146);

(statearr_40242_40328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (27))){
var state_40235__$1 = state_40235;
var statearr_40243_40329 = state_40235__$1;
(statearr_40243_40329[(2)] = null);

(statearr_40243_40329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (1))){
var inst_40087 = (state_40235[(13)]);
var inst_40084 = before_jsload.call(null,files);
var inst_40085 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40086 = (function (){return ((function (inst_40087,inst_40084,inst_40085,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39828_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39828_SHARP_);
});
;})(inst_40087,inst_40084,inst_40085,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40087__$1 = cljs.core.filter.call(null,inst_40086,files);
var inst_40088 = cljs.core.not_empty.call(null,inst_40087__$1);
var state_40235__$1 = (function (){var statearr_40244 = state_40235;
(statearr_40244[(14)] = inst_40085);

(statearr_40244[(13)] = inst_40087__$1);

(statearr_40244[(15)] = inst_40084);

return statearr_40244;
})();
if(cljs.core.truth_(inst_40088)){
var statearr_40245_40330 = state_40235__$1;
(statearr_40245_40330[(1)] = (2));

} else {
var statearr_40246_40331 = state_40235__$1;
(statearr_40246_40331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (24))){
var state_40235__$1 = state_40235;
var statearr_40247_40332 = state_40235__$1;
(statearr_40247_40332[(2)] = null);

(statearr_40247_40332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (39))){
var inst_40188 = (state_40235[(16)]);
var state_40235__$1 = state_40235;
var statearr_40248_40333 = state_40235__$1;
(statearr_40248_40333[(2)] = inst_40188);

(statearr_40248_40333[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (46))){
var inst_40230 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
var statearr_40249_40334 = state_40235__$1;
(statearr_40249_40334[(2)] = inst_40230);

(statearr_40249_40334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (4))){
var inst_40132 = (state_40235[(2)]);
var inst_40133 = cljs.core.List.EMPTY;
var inst_40134 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40133);
var inst_40135 = (function (){return ((function (inst_40132,inst_40133,inst_40134,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39829_SHARP_){
var and__31504__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39829_SHARP_);
if(cljs.core.truth_(and__31504__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39829_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39829_SHARP_)));
} else {
return and__31504__auto__;
}
});
;})(inst_40132,inst_40133,inst_40134,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40136 = cljs.core.filter.call(null,inst_40135,files);
var inst_40137 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40138 = cljs.core.concat.call(null,inst_40136,inst_40137);
var state_40235__$1 = (function (){var statearr_40250 = state_40235;
(statearr_40250[(17)] = inst_40132);

(statearr_40250[(18)] = inst_40134);

(statearr_40250[(12)] = inst_40138);

return statearr_40250;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40251_40335 = state_40235__$1;
(statearr_40251_40335[(1)] = (16));

} else {
var statearr_40252_40336 = state_40235__$1;
(statearr_40252_40336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (15))){
var inst_40122 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
var statearr_40253_40337 = state_40235__$1;
(statearr_40253_40337[(2)] = inst_40122);

(statearr_40253_40337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (21))){
var inst_40148 = (state_40235[(19)]);
var inst_40148__$1 = (state_40235[(2)]);
var inst_40149 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40148__$1);
var state_40235__$1 = (function (){var statearr_40254 = state_40235;
(statearr_40254[(19)] = inst_40148__$1);

return statearr_40254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40235__$1,(22),inst_40149);
} else {
if((state_val_40236 === (31))){
var inst_40233 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40235__$1,inst_40233);
} else {
if((state_val_40236 === (32))){
var inst_40188 = (state_40235[(16)]);
var inst_40193 = inst_40188.cljs$lang$protocol_mask$partition0$;
var inst_40194 = (inst_40193 & (64));
var inst_40195 = inst_40188.cljs$core$ISeq$;
var inst_40196 = (cljs.core.PROTOCOL_SENTINEL === inst_40195);
var inst_40197 = (inst_40194) || (inst_40196);
var state_40235__$1 = state_40235;
if(cljs.core.truth_(inst_40197)){
var statearr_40255_40338 = state_40235__$1;
(statearr_40255_40338[(1)] = (35));

} else {
var statearr_40256_40339 = state_40235__$1;
(statearr_40256_40339[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (40))){
var inst_40210 = (state_40235[(20)]);
var inst_40209 = (state_40235[(2)]);
var inst_40210__$1 = cljs.core.get.call(null,inst_40209,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40211 = cljs.core.get.call(null,inst_40209,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40212 = cljs.core.not_empty.call(null,inst_40210__$1);
var state_40235__$1 = (function (){var statearr_40257 = state_40235;
(statearr_40257[(20)] = inst_40210__$1);

(statearr_40257[(21)] = inst_40211);

return statearr_40257;
})();
if(cljs.core.truth_(inst_40212)){
var statearr_40258_40340 = state_40235__$1;
(statearr_40258_40340[(1)] = (41));

} else {
var statearr_40259_40341 = state_40235__$1;
(statearr_40259_40341[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (33))){
var state_40235__$1 = state_40235;
var statearr_40260_40342 = state_40235__$1;
(statearr_40260_40342[(2)] = false);

(statearr_40260_40342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (13))){
var inst_40108 = (state_40235[(22)]);
var inst_40112 = cljs.core.chunk_first.call(null,inst_40108);
var inst_40113 = cljs.core.chunk_rest.call(null,inst_40108);
var inst_40114 = cljs.core.count.call(null,inst_40112);
var inst_40095 = inst_40113;
var inst_40096 = inst_40112;
var inst_40097 = inst_40114;
var inst_40098 = (0);
var state_40235__$1 = (function (){var statearr_40261 = state_40235;
(statearr_40261[(7)] = inst_40096);

(statearr_40261[(8)] = inst_40098);

(statearr_40261[(9)] = inst_40097);

(statearr_40261[(10)] = inst_40095);

return statearr_40261;
})();
var statearr_40262_40343 = state_40235__$1;
(statearr_40262_40343[(2)] = null);

(statearr_40262_40343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (22))){
var inst_40152 = (state_40235[(23)]);
var inst_40151 = (state_40235[(24)]);
var inst_40148 = (state_40235[(19)]);
var inst_40156 = (state_40235[(25)]);
var inst_40151__$1 = (state_40235[(2)]);
var inst_40152__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40151__$1);
var inst_40153 = (function (){var all_files = inst_40148;
var res_SINGLEQUOTE_ = inst_40151__$1;
var res = inst_40152__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40152,inst_40151,inst_40148,inst_40156,inst_40151__$1,inst_40152__$1,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39830_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39830_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40152,inst_40151,inst_40148,inst_40156,inst_40151__$1,inst_40152__$1,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40154 = cljs.core.filter.call(null,inst_40153,inst_40151__$1);
var inst_40155 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40156__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40155);
var inst_40157 = cljs.core.not_empty.call(null,inst_40156__$1);
var state_40235__$1 = (function (){var statearr_40263 = state_40235;
(statearr_40263[(23)] = inst_40152__$1);

(statearr_40263[(24)] = inst_40151__$1);

(statearr_40263[(26)] = inst_40154);

(statearr_40263[(25)] = inst_40156__$1);

return statearr_40263;
})();
if(cljs.core.truth_(inst_40157)){
var statearr_40264_40344 = state_40235__$1;
(statearr_40264_40344[(1)] = (23));

} else {
var statearr_40265_40345 = state_40235__$1;
(statearr_40265_40345[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (36))){
var state_40235__$1 = state_40235;
var statearr_40266_40346 = state_40235__$1;
(statearr_40266_40346[(2)] = false);

(statearr_40266_40346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (41))){
var inst_40210 = (state_40235[(20)]);
var inst_40214 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40215 = cljs.core.map.call(null,inst_40214,inst_40210);
var inst_40216 = cljs.core.pr_str.call(null,inst_40215);
var inst_40217 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40216)].join('');
var inst_40218 = figwheel.client.utils.log.call(null,inst_40217);
var state_40235__$1 = state_40235;
var statearr_40267_40347 = state_40235__$1;
(statearr_40267_40347[(2)] = inst_40218);

(statearr_40267_40347[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (43))){
var inst_40211 = (state_40235[(21)]);
var inst_40221 = (state_40235[(2)]);
var inst_40222 = cljs.core.not_empty.call(null,inst_40211);
var state_40235__$1 = (function (){var statearr_40268 = state_40235;
(statearr_40268[(27)] = inst_40221);

return statearr_40268;
})();
if(cljs.core.truth_(inst_40222)){
var statearr_40269_40348 = state_40235__$1;
(statearr_40269_40348[(1)] = (44));

} else {
var statearr_40270_40349 = state_40235__$1;
(statearr_40270_40349[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (29))){
var inst_40152 = (state_40235[(23)]);
var inst_40151 = (state_40235[(24)]);
var inst_40188 = (state_40235[(16)]);
var inst_40148 = (state_40235[(19)]);
var inst_40154 = (state_40235[(26)]);
var inst_40156 = (state_40235[(25)]);
var inst_40184 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40187 = (function (){var all_files = inst_40148;
var res_SINGLEQUOTE_ = inst_40151;
var res = inst_40152;
var files_not_loaded = inst_40154;
var dependencies_that_loaded = inst_40156;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40152,inst_40151,inst_40188,inst_40148,inst_40154,inst_40156,inst_40184,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40186){
var map__40271 = p__40186;
var map__40271__$1 = ((((!((map__40271 == null)))?((((map__40271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40271):map__40271);
var namespace = cljs.core.get.call(null,map__40271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40152,inst_40151,inst_40188,inst_40148,inst_40154,inst_40156,inst_40184,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40188__$1 = cljs.core.group_by.call(null,inst_40187,inst_40154);
var inst_40190 = (inst_40188__$1 == null);
var inst_40191 = cljs.core.not.call(null,inst_40190);
var state_40235__$1 = (function (){var statearr_40273 = state_40235;
(statearr_40273[(16)] = inst_40188__$1);

(statearr_40273[(28)] = inst_40184);

return statearr_40273;
})();
if(inst_40191){
var statearr_40274_40350 = state_40235__$1;
(statearr_40274_40350[(1)] = (32));

} else {
var statearr_40275_40351 = state_40235__$1;
(statearr_40275_40351[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (44))){
var inst_40211 = (state_40235[(21)]);
var inst_40224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40211);
var inst_40225 = cljs.core.pr_str.call(null,inst_40224);
var inst_40226 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40225)].join('');
var inst_40227 = figwheel.client.utils.log.call(null,inst_40226);
var state_40235__$1 = state_40235;
var statearr_40276_40352 = state_40235__$1;
(statearr_40276_40352[(2)] = inst_40227);

(statearr_40276_40352[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (6))){
var inst_40129 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
var statearr_40277_40353 = state_40235__$1;
(statearr_40277_40353[(2)] = inst_40129);

(statearr_40277_40353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (28))){
var inst_40154 = (state_40235[(26)]);
var inst_40181 = (state_40235[(2)]);
var inst_40182 = cljs.core.not_empty.call(null,inst_40154);
var state_40235__$1 = (function (){var statearr_40278 = state_40235;
(statearr_40278[(29)] = inst_40181);

return statearr_40278;
})();
if(cljs.core.truth_(inst_40182)){
var statearr_40279_40354 = state_40235__$1;
(statearr_40279_40354[(1)] = (29));

} else {
var statearr_40280_40355 = state_40235__$1;
(statearr_40280_40355[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (25))){
var inst_40152 = (state_40235[(23)]);
var inst_40168 = (state_40235[(2)]);
var inst_40169 = cljs.core.not_empty.call(null,inst_40152);
var state_40235__$1 = (function (){var statearr_40281 = state_40235;
(statearr_40281[(30)] = inst_40168);

return statearr_40281;
})();
if(cljs.core.truth_(inst_40169)){
var statearr_40282_40356 = state_40235__$1;
(statearr_40282_40356[(1)] = (26));

} else {
var statearr_40283_40357 = state_40235__$1;
(statearr_40283_40357[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (34))){
var inst_40204 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
if(cljs.core.truth_(inst_40204)){
var statearr_40284_40358 = state_40235__$1;
(statearr_40284_40358[(1)] = (38));

} else {
var statearr_40285_40359 = state_40235__$1;
(statearr_40285_40359[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (17))){
var state_40235__$1 = state_40235;
var statearr_40286_40360 = state_40235__$1;
(statearr_40286_40360[(2)] = recompile_dependents);

(statearr_40286_40360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (3))){
var state_40235__$1 = state_40235;
var statearr_40287_40361 = state_40235__$1;
(statearr_40287_40361[(2)] = null);

(statearr_40287_40361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (12))){
var inst_40125 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
var statearr_40288_40362 = state_40235__$1;
(statearr_40288_40362[(2)] = inst_40125);

(statearr_40288_40362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (2))){
var inst_40087 = (state_40235[(13)]);
var inst_40094 = cljs.core.seq.call(null,inst_40087);
var inst_40095 = inst_40094;
var inst_40096 = null;
var inst_40097 = (0);
var inst_40098 = (0);
var state_40235__$1 = (function (){var statearr_40289 = state_40235;
(statearr_40289[(7)] = inst_40096);

(statearr_40289[(8)] = inst_40098);

(statearr_40289[(9)] = inst_40097);

(statearr_40289[(10)] = inst_40095);

return statearr_40289;
})();
var statearr_40290_40363 = state_40235__$1;
(statearr_40290_40363[(2)] = null);

(statearr_40290_40363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (23))){
var inst_40152 = (state_40235[(23)]);
var inst_40151 = (state_40235[(24)]);
var inst_40148 = (state_40235[(19)]);
var inst_40154 = (state_40235[(26)]);
var inst_40156 = (state_40235[(25)]);
var inst_40159 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40161 = (function (){var all_files = inst_40148;
var res_SINGLEQUOTE_ = inst_40151;
var res = inst_40152;
var files_not_loaded = inst_40154;
var dependencies_that_loaded = inst_40156;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40152,inst_40151,inst_40148,inst_40154,inst_40156,inst_40159,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40160){
var map__40291 = p__40160;
var map__40291__$1 = ((((!((map__40291 == null)))?((((map__40291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40291):map__40291);
var request_url = cljs.core.get.call(null,map__40291__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40152,inst_40151,inst_40148,inst_40154,inst_40156,inst_40159,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40162 = cljs.core.reverse.call(null,inst_40156);
var inst_40163 = cljs.core.map.call(null,inst_40161,inst_40162);
var inst_40164 = cljs.core.pr_str.call(null,inst_40163);
var inst_40165 = figwheel.client.utils.log.call(null,inst_40164);
var state_40235__$1 = (function (){var statearr_40293 = state_40235;
(statearr_40293[(31)] = inst_40159);

return statearr_40293;
})();
var statearr_40294_40364 = state_40235__$1;
(statearr_40294_40364[(2)] = inst_40165);

(statearr_40294_40364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (35))){
var state_40235__$1 = state_40235;
var statearr_40295_40365 = state_40235__$1;
(statearr_40295_40365[(2)] = true);

(statearr_40295_40365[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (19))){
var inst_40138 = (state_40235[(12)]);
var inst_40144 = figwheel.client.file_reloading.expand_files.call(null,inst_40138);
var state_40235__$1 = state_40235;
var statearr_40296_40366 = state_40235__$1;
(statearr_40296_40366[(2)] = inst_40144);

(statearr_40296_40366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (11))){
var state_40235__$1 = state_40235;
var statearr_40297_40367 = state_40235__$1;
(statearr_40297_40367[(2)] = null);

(statearr_40297_40367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (9))){
var inst_40127 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
var statearr_40298_40368 = state_40235__$1;
(statearr_40298_40368[(2)] = inst_40127);

(statearr_40298_40368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (5))){
var inst_40098 = (state_40235[(8)]);
var inst_40097 = (state_40235[(9)]);
var inst_40100 = (inst_40098 < inst_40097);
var inst_40101 = inst_40100;
var state_40235__$1 = state_40235;
if(cljs.core.truth_(inst_40101)){
var statearr_40299_40369 = state_40235__$1;
(statearr_40299_40369[(1)] = (7));

} else {
var statearr_40300_40370 = state_40235__$1;
(statearr_40300_40370[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (14))){
var inst_40108 = (state_40235[(22)]);
var inst_40117 = cljs.core.first.call(null,inst_40108);
var inst_40118 = figwheel.client.file_reloading.eval_body.call(null,inst_40117,opts);
var inst_40119 = cljs.core.next.call(null,inst_40108);
var inst_40095 = inst_40119;
var inst_40096 = null;
var inst_40097 = (0);
var inst_40098 = (0);
var state_40235__$1 = (function (){var statearr_40301 = state_40235;
(statearr_40301[(7)] = inst_40096);

(statearr_40301[(8)] = inst_40098);

(statearr_40301[(9)] = inst_40097);

(statearr_40301[(32)] = inst_40118);

(statearr_40301[(10)] = inst_40095);

return statearr_40301;
})();
var statearr_40302_40371 = state_40235__$1;
(statearr_40302_40371[(2)] = null);

(statearr_40302_40371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (45))){
var state_40235__$1 = state_40235;
var statearr_40303_40372 = state_40235__$1;
(statearr_40303_40372[(2)] = null);

(statearr_40303_40372[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (26))){
var inst_40152 = (state_40235[(23)]);
var inst_40151 = (state_40235[(24)]);
var inst_40148 = (state_40235[(19)]);
var inst_40154 = (state_40235[(26)]);
var inst_40156 = (state_40235[(25)]);
var inst_40171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40173 = (function (){var all_files = inst_40148;
var res_SINGLEQUOTE_ = inst_40151;
var res = inst_40152;
var files_not_loaded = inst_40154;
var dependencies_that_loaded = inst_40156;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40152,inst_40151,inst_40148,inst_40154,inst_40156,inst_40171,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40172){
var map__40304 = p__40172;
var map__40304__$1 = ((((!((map__40304 == null)))?((((map__40304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40304):map__40304);
var namespace = cljs.core.get.call(null,map__40304__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40304__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40152,inst_40151,inst_40148,inst_40154,inst_40156,inst_40171,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40174 = cljs.core.map.call(null,inst_40173,inst_40152);
var inst_40175 = cljs.core.pr_str.call(null,inst_40174);
var inst_40176 = figwheel.client.utils.log.call(null,inst_40175);
var inst_40177 = (function (){var all_files = inst_40148;
var res_SINGLEQUOTE_ = inst_40151;
var res = inst_40152;
var files_not_loaded = inst_40154;
var dependencies_that_loaded = inst_40156;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40152,inst_40151,inst_40148,inst_40154,inst_40156,inst_40171,inst_40173,inst_40174,inst_40175,inst_40176,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40152,inst_40151,inst_40148,inst_40154,inst_40156,inst_40171,inst_40173,inst_40174,inst_40175,inst_40176,state_val_40236,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40178 = setTimeout(inst_40177,(10));
var state_40235__$1 = (function (){var statearr_40306 = state_40235;
(statearr_40306[(33)] = inst_40171);

(statearr_40306[(34)] = inst_40176);

return statearr_40306;
})();
var statearr_40307_40373 = state_40235__$1;
(statearr_40307_40373[(2)] = inst_40178);

(statearr_40307_40373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (16))){
var state_40235__$1 = state_40235;
var statearr_40308_40374 = state_40235__$1;
(statearr_40308_40374[(2)] = reload_dependents);

(statearr_40308_40374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (38))){
var inst_40188 = (state_40235[(16)]);
var inst_40206 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40188);
var state_40235__$1 = state_40235;
var statearr_40309_40375 = state_40235__$1;
(statearr_40309_40375[(2)] = inst_40206);

(statearr_40309_40375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (30))){
var state_40235__$1 = state_40235;
var statearr_40310_40376 = state_40235__$1;
(statearr_40310_40376[(2)] = null);

(statearr_40310_40376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (10))){
var inst_40108 = (state_40235[(22)]);
var inst_40110 = cljs.core.chunked_seq_QMARK_.call(null,inst_40108);
var state_40235__$1 = state_40235;
if(inst_40110){
var statearr_40311_40377 = state_40235__$1;
(statearr_40311_40377[(1)] = (13));

} else {
var statearr_40312_40378 = state_40235__$1;
(statearr_40312_40378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (18))){
var inst_40142 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
if(cljs.core.truth_(inst_40142)){
var statearr_40313_40379 = state_40235__$1;
(statearr_40313_40379[(1)] = (19));

} else {
var statearr_40314_40380 = state_40235__$1;
(statearr_40314_40380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (42))){
var state_40235__$1 = state_40235;
var statearr_40315_40381 = state_40235__$1;
(statearr_40315_40381[(2)] = null);

(statearr_40315_40381[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (37))){
var inst_40201 = (state_40235[(2)]);
var state_40235__$1 = state_40235;
var statearr_40316_40382 = state_40235__$1;
(statearr_40316_40382[(2)] = inst_40201);

(statearr_40316_40382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40236 === (8))){
var inst_40095 = (state_40235[(10)]);
var inst_40108 = (state_40235[(22)]);
var inst_40108__$1 = cljs.core.seq.call(null,inst_40095);
var state_40235__$1 = (function (){var statearr_40317 = state_40235;
(statearr_40317[(22)] = inst_40108__$1);

return statearr_40317;
})();
if(inst_40108__$1){
var statearr_40318_40383 = state_40235__$1;
(statearr_40318_40383[(1)] = (10));

} else {
var statearr_40319_40384 = state_40235__$1;
(statearr_40319_40384[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34353__auto__,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto____0 = (function (){
var statearr_40323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40323[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto__);

(statearr_40323[(1)] = (1));

return statearr_40323;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto____1 = (function (state_40235){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_40235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e40324){if((e40324 instanceof Object)){
var ex__34357__auto__ = e40324;
var statearr_40325_40385 = state_40235;
(statearr_40325_40385[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40386 = state_40235;
state_40235 = G__40386;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto__ = function(state_40235){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto____1.call(this,state_40235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34467__auto__ = (function (){var statearr_40326 = f__34466__auto__.call(null);
(statearr_40326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_40326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__,map__40080,map__40080__$1,opts,before_jsload,on_jsload,reload_dependents,map__40081,map__40081__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34465__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40389,link){
var map__40392 = p__40389;
var map__40392__$1 = ((((!((map__40392 == null)))?((((map__40392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40392):map__40392);
var file = cljs.core.get.call(null,map__40392__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40392,map__40392__$1,file){
return (function (p1__40387_SHARP_,p2__40388_SHARP_){
if(cljs.core._EQ_.call(null,p1__40387_SHARP_,p2__40388_SHARP_)){
return p1__40387_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40392,map__40392__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40398){
var map__40399 = p__40398;
var map__40399__$1 = ((((!((map__40399 == null)))?((((map__40399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40399):map__40399);
var match_length = cljs.core.get.call(null,map__40399__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40399__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40394_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40394_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40401_SHARP_,p2__40402_SHARP_){
return cljs.core.assoc.call(null,p1__40401_SHARP_,cljs.core.get.call(null,p2__40402_SHARP_,key),p2__40402_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_40403 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40403);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40403);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40404,p__40405){
var map__40410 = p__40404;
var map__40410__$1 = ((((!((map__40410 == null)))?((((map__40410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40410):map__40410);
var on_cssload = cljs.core.get.call(null,map__40410__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40411 = p__40405;
var map__40411__$1 = ((((!((map__40411 == null)))?((((map__40411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40411):map__40411);
var files_msg = map__40411__$1;
var files = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1495209121100