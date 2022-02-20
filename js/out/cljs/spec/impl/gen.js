// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40467 = arguments.length;
var i__32630__auto___40468 = (0);
while(true){
if((i__32630__auto___40468 < len__32629__auto___40467)){
args__32636__auto__.push((arguments[i__32630__auto___40468]));

var G__40469 = (i__32630__auto___40468 + (1));
i__32630__auto___40468 = G__40469;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq40466){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40466));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40471 = arguments.length;
var i__32630__auto___40472 = (0);
while(true){
if((i__32630__auto___40472 < len__32629__auto___40471)){
args__32636__auto__.push((arguments[i__32630__auto___40472]));

var G__40473 = (i__32630__auto___40472 + (1));
i__32630__auto___40472 = G__40473;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq40470){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40470));
});

var g_QMARK__40474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_40475 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__40474){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__40474))
,null));
var mkg_40476 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__40474,g_40475){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__40474,g_40475))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__40474,g_40475,mkg_40476){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__40474).call(null,x);
});})(g_QMARK__40474,g_40475,mkg_40476))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__40474,g_40475,mkg_40476){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_40476).call(null,gfn);
});})(g_QMARK__40474,g_40475,mkg_40476))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__40474,g_40475,mkg_40476){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_40475).call(null,generator);
});})(g_QMARK__40474,g_40475,mkg_40476))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__40438__auto___40496 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__40438__auto___40496){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40497 = arguments.length;
var i__32630__auto___40498 = (0);
while(true){
if((i__32630__auto___40498 < len__32629__auto___40497)){
args__32636__auto__.push((arguments[i__32630__auto___40498]));

var G__40499 = (i__32630__auto___40498 + (1));
i__32630__auto___40498 = G__40499;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40496))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40496){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40496),args);
});})(g__40438__auto___40496))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__40438__auto___40496){
return (function (seq40477){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40477));
});})(g__40438__auto___40496))
;


var g__40438__auto___40500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__40438__auto___40500){
return (function cljs$spec$impl$gen$list(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40501 = arguments.length;
var i__32630__auto___40502 = (0);
while(true){
if((i__32630__auto___40502 < len__32629__auto___40501)){
args__32636__auto__.push((arguments[i__32630__auto___40502]));

var G__40503 = (i__32630__auto___40502 + (1));
i__32630__auto___40502 = G__40503;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40500))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40500){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40500),args);
});})(g__40438__auto___40500))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__40438__auto___40500){
return (function (seq40478){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40478));
});})(g__40438__auto___40500))
;


var g__40438__auto___40504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__40438__auto___40504){
return (function cljs$spec$impl$gen$map(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40505 = arguments.length;
var i__32630__auto___40506 = (0);
while(true){
if((i__32630__auto___40506 < len__32629__auto___40505)){
args__32636__auto__.push((arguments[i__32630__auto___40506]));

var G__40507 = (i__32630__auto___40506 + (1));
i__32630__auto___40506 = G__40507;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40504))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40504){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40504),args);
});})(g__40438__auto___40504))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__40438__auto___40504){
return (function (seq40479){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40479));
});})(g__40438__auto___40504))
;


var g__40438__auto___40508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__40438__auto___40508){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40509 = arguments.length;
var i__32630__auto___40510 = (0);
while(true){
if((i__32630__auto___40510 < len__32629__auto___40509)){
args__32636__auto__.push((arguments[i__32630__auto___40510]));

var G__40511 = (i__32630__auto___40510 + (1));
i__32630__auto___40510 = G__40511;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40508))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40508),args);
});})(g__40438__auto___40508))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__40438__auto___40508){
return (function (seq40480){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40480));
});})(g__40438__auto___40508))
;


var g__40438__auto___40512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__40438__auto___40512){
return (function cljs$spec$impl$gen$set(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40513 = arguments.length;
var i__32630__auto___40514 = (0);
while(true){
if((i__32630__auto___40514 < len__32629__auto___40513)){
args__32636__auto__.push((arguments[i__32630__auto___40514]));

var G__40515 = (i__32630__auto___40514 + (1));
i__32630__auto___40514 = G__40515;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40512))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40512),args);
});})(g__40438__auto___40512))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__40438__auto___40512){
return (function (seq40481){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40481));
});})(g__40438__auto___40512))
;


var g__40438__auto___40516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__40438__auto___40516){
return (function cljs$spec$impl$gen$vector(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40517 = arguments.length;
var i__32630__auto___40518 = (0);
while(true){
if((i__32630__auto___40518 < len__32629__auto___40517)){
args__32636__auto__.push((arguments[i__32630__auto___40518]));

var G__40519 = (i__32630__auto___40518 + (1));
i__32630__auto___40518 = G__40519;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40516))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40516),args);
});})(g__40438__auto___40516))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__40438__auto___40516){
return (function (seq40482){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40482));
});})(g__40438__auto___40516))
;


var g__40438__auto___40520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__40438__auto___40520){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40521 = arguments.length;
var i__32630__auto___40522 = (0);
while(true){
if((i__32630__auto___40522 < len__32629__auto___40521)){
args__32636__auto__.push((arguments[i__32630__auto___40522]));

var G__40523 = (i__32630__auto___40522 + (1));
i__32630__auto___40522 = G__40523;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40520))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40520),args);
});})(g__40438__auto___40520))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__40438__auto___40520){
return (function (seq40483){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40483));
});})(g__40438__auto___40520))
;


var g__40438__auto___40524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__40438__auto___40524){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40525 = arguments.length;
var i__32630__auto___40526 = (0);
while(true){
if((i__32630__auto___40526 < len__32629__auto___40525)){
args__32636__auto__.push((arguments[i__32630__auto___40526]));

var G__40527 = (i__32630__auto___40526 + (1));
i__32630__auto___40526 = G__40527;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40524))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40524),args);
});})(g__40438__auto___40524))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__40438__auto___40524){
return (function (seq40484){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40484));
});})(g__40438__auto___40524))
;


var g__40438__auto___40528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__40438__auto___40528){
return (function cljs$spec$impl$gen$elements(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40529 = arguments.length;
var i__32630__auto___40530 = (0);
while(true){
if((i__32630__auto___40530 < len__32629__auto___40529)){
args__32636__auto__.push((arguments[i__32630__auto___40530]));

var G__40531 = (i__32630__auto___40530 + (1));
i__32630__auto___40530 = G__40531;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40528))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40528),args);
});})(g__40438__auto___40528))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__40438__auto___40528){
return (function (seq40485){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40485));
});})(g__40438__auto___40528))
;


var g__40438__auto___40532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__40438__auto___40532){
return (function cljs$spec$impl$gen$bind(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40533 = arguments.length;
var i__32630__auto___40534 = (0);
while(true){
if((i__32630__auto___40534 < len__32629__auto___40533)){
args__32636__auto__.push((arguments[i__32630__auto___40534]));

var G__40535 = (i__32630__auto___40534 + (1));
i__32630__auto___40534 = G__40535;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40532))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40532),args);
});})(g__40438__auto___40532))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__40438__auto___40532){
return (function (seq40486){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40486));
});})(g__40438__auto___40532))
;


var g__40438__auto___40536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__40438__auto___40536){
return (function cljs$spec$impl$gen$choose(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40537 = arguments.length;
var i__32630__auto___40538 = (0);
while(true){
if((i__32630__auto___40538 < len__32629__auto___40537)){
args__32636__auto__.push((arguments[i__32630__auto___40538]));

var G__40539 = (i__32630__auto___40538 + (1));
i__32630__auto___40538 = G__40539;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40536))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40536),args);
});})(g__40438__auto___40536))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__40438__auto___40536){
return (function (seq40487){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40487));
});})(g__40438__auto___40536))
;


var g__40438__auto___40540 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__40438__auto___40540){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40541 = arguments.length;
var i__32630__auto___40542 = (0);
while(true){
if((i__32630__auto___40542 < len__32629__auto___40541)){
args__32636__auto__.push((arguments[i__32630__auto___40542]));

var G__40543 = (i__32630__auto___40542 + (1));
i__32630__auto___40542 = G__40543;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40540))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40540){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40540),args);
});})(g__40438__auto___40540))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__40438__auto___40540){
return (function (seq40488){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40488));
});})(g__40438__auto___40540))
;


var g__40438__auto___40544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__40438__auto___40544){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40545 = arguments.length;
var i__32630__auto___40546 = (0);
while(true){
if((i__32630__auto___40546 < len__32629__auto___40545)){
args__32636__auto__.push((arguments[i__32630__auto___40546]));

var G__40547 = (i__32630__auto___40546 + (1));
i__32630__auto___40546 = G__40547;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40544))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40544){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40544),args);
});})(g__40438__auto___40544))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__40438__auto___40544){
return (function (seq40489){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40489));
});})(g__40438__auto___40544))
;


var g__40438__auto___40548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__40438__auto___40548){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40549 = arguments.length;
var i__32630__auto___40550 = (0);
while(true){
if((i__32630__auto___40550 < len__32629__auto___40549)){
args__32636__auto__.push((arguments[i__32630__auto___40550]));

var G__40551 = (i__32630__auto___40550 + (1));
i__32630__auto___40550 = G__40551;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40548))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40548){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40548),args);
});})(g__40438__auto___40548))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__40438__auto___40548){
return (function (seq40490){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40490));
});})(g__40438__auto___40548))
;


var g__40438__auto___40552 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__40438__auto___40552){
return (function cljs$spec$impl$gen$sample(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40553 = arguments.length;
var i__32630__auto___40554 = (0);
while(true){
if((i__32630__auto___40554 < len__32629__auto___40553)){
args__32636__auto__.push((arguments[i__32630__auto___40554]));

var G__40555 = (i__32630__auto___40554 + (1));
i__32630__auto___40554 = G__40555;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40552))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40552){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40552),args);
});})(g__40438__auto___40552))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__40438__auto___40552){
return (function (seq40491){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40491));
});})(g__40438__auto___40552))
;


var g__40438__auto___40556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__40438__auto___40556){
return (function cljs$spec$impl$gen$return(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40557 = arguments.length;
var i__32630__auto___40558 = (0);
while(true){
if((i__32630__auto___40558 < len__32629__auto___40557)){
args__32636__auto__.push((arguments[i__32630__auto___40558]));

var G__40559 = (i__32630__auto___40558 + (1));
i__32630__auto___40558 = G__40559;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40556))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40556){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40556),args);
});})(g__40438__auto___40556))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__40438__auto___40556){
return (function (seq40492){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40492));
});})(g__40438__auto___40556))
;


var g__40438__auto___40560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__40438__auto___40560){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40561 = arguments.length;
var i__32630__auto___40562 = (0);
while(true){
if((i__32630__auto___40562 < len__32629__auto___40561)){
args__32636__auto__.push((arguments[i__32630__auto___40562]));

var G__40563 = (i__32630__auto___40562 + (1));
i__32630__auto___40562 = G__40563;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40560))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40560){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40560),args);
});})(g__40438__auto___40560))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__40438__auto___40560){
return (function (seq40493){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40493));
});})(g__40438__auto___40560))
;


var g__40438__auto___40564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__40438__auto___40564){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40565 = arguments.length;
var i__32630__auto___40566 = (0);
while(true){
if((i__32630__auto___40566 < len__32629__auto___40565)){
args__32636__auto__.push((arguments[i__32630__auto___40566]));

var G__40567 = (i__32630__auto___40566 + (1));
i__32630__auto___40566 = G__40567;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40564))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40564){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40564),args);
});})(g__40438__auto___40564))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__40438__auto___40564){
return (function (seq40494){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40494));
});})(g__40438__auto___40564))
;


var g__40438__auto___40568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__40438__auto___40568){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40569 = arguments.length;
var i__32630__auto___40570 = (0);
while(true){
if((i__32630__auto___40570 < len__32629__auto___40569)){
args__32636__auto__.push((arguments[i__32630__auto___40570]));

var G__40571 = (i__32630__auto___40570 + (1));
i__32630__auto___40570 = G__40571;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40438__auto___40568))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40438__auto___40568){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40438__auto___40568),args);
});})(g__40438__auto___40568))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__40438__auto___40568){
return (function (seq40495){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40495));
});})(g__40438__auto___40568))
;

var g__40451__auto___40593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__40451__auto___40593){
return (function cljs$spec$impl$gen$any(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40594 = arguments.length;
var i__32630__auto___40595 = (0);
while(true){
if((i__32630__auto___40595 < len__32629__auto___40594)){
args__32636__auto__.push((arguments[i__32630__auto___40595]));

var G__40596 = (i__32630__auto___40595 + (1));
i__32630__auto___40595 = G__40596;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40593))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40593){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40593);
});})(g__40451__auto___40593))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__40451__auto___40593){
return (function (seq40572){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40572));
});})(g__40451__auto___40593))
;


var g__40451__auto___40597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__40451__auto___40597){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40598 = arguments.length;
var i__32630__auto___40599 = (0);
while(true){
if((i__32630__auto___40599 < len__32629__auto___40598)){
args__32636__auto__.push((arguments[i__32630__auto___40599]));

var G__40600 = (i__32630__auto___40599 + (1));
i__32630__auto___40599 = G__40600;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40597))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40597){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40597);
});})(g__40451__auto___40597))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__40451__auto___40597){
return (function (seq40573){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40573));
});})(g__40451__auto___40597))
;


var g__40451__auto___40601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__40451__auto___40601){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40602 = arguments.length;
var i__32630__auto___40603 = (0);
while(true){
if((i__32630__auto___40603 < len__32629__auto___40602)){
args__32636__auto__.push((arguments[i__32630__auto___40603]));

var G__40604 = (i__32630__auto___40603 + (1));
i__32630__auto___40603 = G__40604;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40601))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40601){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40601);
});})(g__40451__auto___40601))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__40451__auto___40601){
return (function (seq40574){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40574));
});})(g__40451__auto___40601))
;


var g__40451__auto___40605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__40451__auto___40605){
return (function cljs$spec$impl$gen$char(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40606 = arguments.length;
var i__32630__auto___40607 = (0);
while(true){
if((i__32630__auto___40607 < len__32629__auto___40606)){
args__32636__auto__.push((arguments[i__32630__auto___40607]));

var G__40608 = (i__32630__auto___40607 + (1));
i__32630__auto___40607 = G__40608;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40605))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40605){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40605);
});})(g__40451__auto___40605))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__40451__auto___40605){
return (function (seq40575){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40575));
});})(g__40451__auto___40605))
;


var g__40451__auto___40609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__40451__auto___40609){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40610 = arguments.length;
var i__32630__auto___40611 = (0);
while(true){
if((i__32630__auto___40611 < len__32629__auto___40610)){
args__32636__auto__.push((arguments[i__32630__auto___40611]));

var G__40612 = (i__32630__auto___40611 + (1));
i__32630__auto___40611 = G__40612;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40609))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40609){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40609);
});})(g__40451__auto___40609))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__40451__auto___40609){
return (function (seq40576){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40576));
});})(g__40451__auto___40609))
;


var g__40451__auto___40613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__40451__auto___40613){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40614 = arguments.length;
var i__32630__auto___40615 = (0);
while(true){
if((i__32630__auto___40615 < len__32629__auto___40614)){
args__32636__auto__.push((arguments[i__32630__auto___40615]));

var G__40616 = (i__32630__auto___40615 + (1));
i__32630__auto___40615 = G__40616;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40613))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40613){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40613);
});})(g__40451__auto___40613))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__40451__auto___40613){
return (function (seq40577){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40577));
});})(g__40451__auto___40613))
;


var g__40451__auto___40617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__40451__auto___40617){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40618 = arguments.length;
var i__32630__auto___40619 = (0);
while(true){
if((i__32630__auto___40619 < len__32629__auto___40618)){
args__32636__auto__.push((arguments[i__32630__auto___40619]));

var G__40620 = (i__32630__auto___40619 + (1));
i__32630__auto___40619 = G__40620;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40617))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40617){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40617);
});})(g__40451__auto___40617))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__40451__auto___40617){
return (function (seq40578){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40578));
});})(g__40451__auto___40617))
;


var g__40451__auto___40621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__40451__auto___40621){
return (function cljs$spec$impl$gen$double(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40622 = arguments.length;
var i__32630__auto___40623 = (0);
while(true){
if((i__32630__auto___40623 < len__32629__auto___40622)){
args__32636__auto__.push((arguments[i__32630__auto___40623]));

var G__40624 = (i__32630__auto___40623 + (1));
i__32630__auto___40623 = G__40624;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40621))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40621){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40621);
});})(g__40451__auto___40621))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__40451__auto___40621){
return (function (seq40579){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40579));
});})(g__40451__auto___40621))
;


var g__40451__auto___40625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__40451__auto___40625){
return (function cljs$spec$impl$gen$int(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40626 = arguments.length;
var i__32630__auto___40627 = (0);
while(true){
if((i__32630__auto___40627 < len__32629__auto___40626)){
args__32636__auto__.push((arguments[i__32630__auto___40627]));

var G__40628 = (i__32630__auto___40627 + (1));
i__32630__auto___40627 = G__40628;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40625))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40625){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40625);
});})(g__40451__auto___40625))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__40451__auto___40625){
return (function (seq40580){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40580));
});})(g__40451__auto___40625))
;


var g__40451__auto___40629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__40451__auto___40629){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40630 = arguments.length;
var i__32630__auto___40631 = (0);
while(true){
if((i__32630__auto___40631 < len__32629__auto___40630)){
args__32636__auto__.push((arguments[i__32630__auto___40631]));

var G__40632 = (i__32630__auto___40631 + (1));
i__32630__auto___40631 = G__40632;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40629))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40629){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40629);
});})(g__40451__auto___40629))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__40451__auto___40629){
return (function (seq40581){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40581));
});})(g__40451__auto___40629))
;


var g__40451__auto___40633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__40451__auto___40633){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40634 = arguments.length;
var i__32630__auto___40635 = (0);
while(true){
if((i__32630__auto___40635 < len__32629__auto___40634)){
args__32636__auto__.push((arguments[i__32630__auto___40635]));

var G__40636 = (i__32630__auto___40635 + (1));
i__32630__auto___40635 = G__40636;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40633))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40633){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40633);
});})(g__40451__auto___40633))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__40451__auto___40633){
return (function (seq40582){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40582));
});})(g__40451__auto___40633))
;


var g__40451__auto___40637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__40451__auto___40637){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40638 = arguments.length;
var i__32630__auto___40639 = (0);
while(true){
if((i__32630__auto___40639 < len__32629__auto___40638)){
args__32636__auto__.push((arguments[i__32630__auto___40639]));

var G__40640 = (i__32630__auto___40639 + (1));
i__32630__auto___40639 = G__40640;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40637))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40637){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40637);
});})(g__40451__auto___40637))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__40451__auto___40637){
return (function (seq40583){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40583));
});})(g__40451__auto___40637))
;


var g__40451__auto___40641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__40451__auto___40641){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40642 = arguments.length;
var i__32630__auto___40643 = (0);
while(true){
if((i__32630__auto___40643 < len__32629__auto___40642)){
args__32636__auto__.push((arguments[i__32630__auto___40643]));

var G__40644 = (i__32630__auto___40643 + (1));
i__32630__auto___40643 = G__40644;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40641))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40641){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40641);
});})(g__40451__auto___40641))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__40451__auto___40641){
return (function (seq40584){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40584));
});})(g__40451__auto___40641))
;


var g__40451__auto___40645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__40451__auto___40645){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40646 = arguments.length;
var i__32630__auto___40647 = (0);
while(true){
if((i__32630__auto___40647 < len__32629__auto___40646)){
args__32636__auto__.push((arguments[i__32630__auto___40647]));

var G__40648 = (i__32630__auto___40647 + (1));
i__32630__auto___40647 = G__40648;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40645))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40645){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40645);
});})(g__40451__auto___40645))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__40451__auto___40645){
return (function (seq40585){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40585));
});})(g__40451__auto___40645))
;


var g__40451__auto___40649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__40451__auto___40649){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40650 = arguments.length;
var i__32630__auto___40651 = (0);
while(true){
if((i__32630__auto___40651 < len__32629__auto___40650)){
args__32636__auto__.push((arguments[i__32630__auto___40651]));

var G__40652 = (i__32630__auto___40651 + (1));
i__32630__auto___40651 = G__40652;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40649))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40649){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40649);
});})(g__40451__auto___40649))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__40451__auto___40649){
return (function (seq40586){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40586));
});})(g__40451__auto___40649))
;


var g__40451__auto___40653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__40451__auto___40653){
return (function cljs$spec$impl$gen$string(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40654 = arguments.length;
var i__32630__auto___40655 = (0);
while(true){
if((i__32630__auto___40655 < len__32629__auto___40654)){
args__32636__auto__.push((arguments[i__32630__auto___40655]));

var G__40656 = (i__32630__auto___40655 + (1));
i__32630__auto___40655 = G__40656;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40653))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40653){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40653);
});})(g__40451__auto___40653))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__40451__auto___40653){
return (function (seq40587){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40587));
});})(g__40451__auto___40653))
;


var g__40451__auto___40657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__40451__auto___40657){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40658 = arguments.length;
var i__32630__auto___40659 = (0);
while(true){
if((i__32630__auto___40659 < len__32629__auto___40658)){
args__32636__auto__.push((arguments[i__32630__auto___40659]));

var G__40660 = (i__32630__auto___40659 + (1));
i__32630__auto___40659 = G__40660;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40657))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40657){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40657);
});})(g__40451__auto___40657))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__40451__auto___40657){
return (function (seq40588){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40588));
});})(g__40451__auto___40657))
;


var g__40451__auto___40661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__40451__auto___40661){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40662 = arguments.length;
var i__32630__auto___40663 = (0);
while(true){
if((i__32630__auto___40663 < len__32629__auto___40662)){
args__32636__auto__.push((arguments[i__32630__auto___40663]));

var G__40664 = (i__32630__auto___40663 + (1));
i__32630__auto___40663 = G__40664;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40661))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40661){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40661);
});})(g__40451__auto___40661))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__40451__auto___40661){
return (function (seq40589){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40589));
});})(g__40451__auto___40661))
;


var g__40451__auto___40665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__40451__auto___40665){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40666 = arguments.length;
var i__32630__auto___40667 = (0);
while(true){
if((i__32630__auto___40667 < len__32629__auto___40666)){
args__32636__auto__.push((arguments[i__32630__auto___40667]));

var G__40668 = (i__32630__auto___40667 + (1));
i__32630__auto___40667 = G__40668;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40665))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40665){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40665);
});})(g__40451__auto___40665))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__40451__auto___40665){
return (function (seq40590){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40590));
});})(g__40451__auto___40665))
;


var g__40451__auto___40669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__40451__auto___40669){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40670 = arguments.length;
var i__32630__auto___40671 = (0);
while(true){
if((i__32630__auto___40671 < len__32629__auto___40670)){
args__32636__auto__.push((arguments[i__32630__auto___40671]));

var G__40672 = (i__32630__auto___40671 + (1));
i__32630__auto___40671 = G__40672;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40669))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40669){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40669);
});})(g__40451__auto___40669))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__40451__auto___40669){
return (function (seq40591){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40591));
});})(g__40451__auto___40669))
;


var g__40451__auto___40673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__40451__auto___40673){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40674 = arguments.length;
var i__32630__auto___40675 = (0);
while(true){
if((i__32630__auto___40675 < len__32629__auto___40674)){
args__32636__auto__.push((arguments[i__32630__auto___40675]));

var G__40676 = (i__32630__auto___40675 + (1));
i__32630__auto___40675 = G__40676;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});})(g__40451__auto___40673))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40451__auto___40673){
return (function (args){
return cljs.core.deref.call(null,g__40451__auto___40673);
});})(g__40451__auto___40673))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__40451__auto___40673){
return (function (seq40592){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40592));
});})(g__40451__auto___40673))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__32636__auto__ = [];
var len__32629__auto___40679 = arguments.length;
var i__32630__auto___40680 = (0);
while(true){
if((i__32630__auto___40680 < len__32629__auto___40679)){
args__32636__auto__.push((arguments[i__32630__auto___40680]));

var G__40681 = (i__32630__auto___40680 + (1));
i__32630__auto___40680 = G__40681;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__40677_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__40677_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq40678){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40678));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__40682_SHARP_){
return (new Date(p1__40682_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1495209121578