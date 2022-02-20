// Compiled by ClojureScript 1.9.521 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__32636__auto__ = [];
var len__32629__auto___33371 = arguments.length;
var i__32630__auto___33372 = (0);
while(true){
if((i__32630__auto___33372 < len__32629__auto___33371)){
args__32636__auto__.push((arguments[i__32630__auto___33372]));

var G__33373 = (i__32630__auto___33372 + (1));
i__32630__auto___33372 = G__33373;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((1) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32637__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33367){
var vec__33368 = p__33367;
var default$ = cljs.core.nth.call(null,vec__33368,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq33365){
var G__33366 = cljs.core.first.call(null,seq33365);
var seq33365__$1 = cljs.core.next.call(null,seq33365);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__33366,seq33365__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__32636__auto__ = [];
var len__32629__auto___33380 = arguments.length;
var i__32630__auto___33381 = (0);
while(true){
if((i__32630__auto___33381 < len__32629__auto___33380)){
args__32636__auto__.push((arguments[i__32630__auto___33381]));

var G__33382 = (i__32630__auto___33381 + (1));
i__32630__auto___33381 = G__33382;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((1) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32637__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33376){
var vec__33377 = p__33376;
var default$ = cljs.core.nth.call(null,vec__33377,(0),null);
var or__31516__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq33374){
var G__33375 = cljs.core.first.call(null,seq33374);
var seq33374__$1 = cljs.core.next.call(null,seq33374);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__33375,seq33374__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___33385 = arguments.length;
var i__32630__auto___33386 = (0);
while(true){
if((i__32630__auto___33386 < len__32629__auto___33385)){
args__32636__auto__.push((arguments[i__32630__auto___33386]));

var G__33387 = (i__32630__auto___33386 + (1));
i__32630__auto___33386 = G__33387;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((1) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32637__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq33383){
var G__33384 = cljs.core.first.call(null,seq33383);
var seq33383__$1 = cljs.core.next.call(null,seq33383);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33384,seq33383__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___33394 = arguments.length;
var i__32630__auto___33395 = (0);
while(true){
if((i__32630__auto___33395 < len__32629__auto___33394)){
args__32636__auto__.push((arguments[i__32630__auto___33395]));

var G__33396 = (i__32630__auto___33395 + (1));
i__32630__auto___33395 = G__33396;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((1) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32637__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33390){
var vec__33391 = p__33390;
var default$ = cljs.core.nth.call(null,vec__33391,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq33388){
var G__33389 = cljs.core.first.call(null,seq33388);
var seq33388__$1 = cljs.core.next.call(null,seq33388);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33389,seq33388__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___33403 = arguments.length;
var i__32630__auto___33404 = (0);
while(true){
if((i__32630__auto___33404 < len__32629__auto___33403)){
args__32636__auto__.push((arguments[i__32630__auto___33404]));

var G__33405 = (i__32630__auto___33404 + (1));
i__32630__auto___33404 = G__33405;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((1) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32637__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33399){
var vec__33400 = p__33399;
var default$ = cljs.core.nth.call(null,vec__33400,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq33397){
var G__33398 = cljs.core.first.call(null,seq33397);
var seq33397__$1 = cljs.core.next.call(null,seq33397);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33398,seq33397__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___33410 = arguments.length;
var i__32630__auto___33411 = (0);
while(true){
if((i__32630__auto___33411 < len__32629__auto___33410)){
args__32636__auto__.push((arguments[i__32630__auto___33411]));

var G__33412 = (i__32630__auto___33411 + (1));
i__32630__auto___33411 = G__33412;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((2) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32637__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33406_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__33406_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq33407){
var G__33408 = cljs.core.first.call(null,seq33407);
var seq33407__$1 = cljs.core.next.call(null,seq33407);
var G__33409 = cljs.core.first.call(null,seq33407__$1);
var seq33407__$2 = cljs.core.next.call(null,seq33407__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33408,G__33409,seq33407__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___33417 = arguments.length;
var i__32630__auto___33418 = (0);
while(true){
if((i__32630__auto___33418 < len__32629__auto___33417)){
args__32636__auto__.push((arguments[i__32630__auto___33418]));

var G__33419 = (i__32630__auto___33418 + (1));
i__32630__auto___33418 = G__33419;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((2) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32637__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33413_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__33413_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq33414){
var G__33415 = cljs.core.first.call(null,seq33414);
var seq33414__$1 = cljs.core.next.call(null,seq33414);
var G__33416 = cljs.core.first.call(null,seq33414__$1);
var seq33414__$2 = cljs.core.next.call(null,seq33414__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33415,G__33416,seq33414__$2);
});


//# sourceMappingURL=session.js.map?rel=1495209113815