// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args34510 = [];
var len__32629__auto___34516 = arguments.length;
var i__32630__auto___34517 = (0);
while(true){
if((i__32630__auto___34517 < len__32629__auto___34516)){
args34510.push((arguments[i__32630__auto___34517]));

var G__34518 = (i__32630__auto___34517 + (1));
i__32630__auto___34517 = G__34518;
continue;
} else {
}
break;
}

var G__34512 = args34510.length;
switch (G__34512) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34510.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34513 = (function (f,blockable,meta34514){
this.f = f;
this.blockable = blockable;
this.meta34514 = meta34514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34515,meta34514__$1){
var self__ = this;
var _34515__$1 = this;
return (new cljs.core.async.t_cljs$core$async34513(self__.f,self__.blockable,meta34514__$1));
});

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34515){
var self__ = this;
var _34515__$1 = this;
return self__.meta34514;
});

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34514","meta34514",1870491545,null)], null);
});

cljs.core.async.t_cljs$core$async34513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34513";

cljs.core.async.t_cljs$core$async34513.cljs$lang$ctorPrWriter = (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async34513");
});

cljs.core.async.__GT_t_cljs$core$async34513 = (function cljs$core$async$__GT_t_cljs$core$async34513(f__$1,blockable__$1,meta34514){
return (new cljs.core.async.t_cljs$core$async34513(f__$1,blockable__$1,meta34514));
});

}

return (new cljs.core.async.t_cljs$core$async34513(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args34522 = [];
var len__32629__auto___34525 = arguments.length;
var i__32630__auto___34526 = (0);
while(true){
if((i__32630__auto___34526 < len__32629__auto___34525)){
args34522.push((arguments[i__32630__auto___34526]));

var G__34527 = (i__32630__auto___34526 + (1));
i__32630__auto___34526 = G__34527;
continue;
} else {
}
break;
}

var G__34524 = args34522.length;
switch (G__34524) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34522.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args34529 = [];
var len__32629__auto___34532 = arguments.length;
var i__32630__auto___34533 = (0);
while(true){
if((i__32630__auto___34533 < len__32629__auto___34532)){
args34529.push((arguments[i__32630__auto___34533]));

var G__34534 = (i__32630__auto___34533 + (1));
i__32630__auto___34533 = G__34534;
continue;
} else {
}
break;
}

var G__34531 = args34529.length;
switch (G__34531) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34529.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args34536 = [];
var len__32629__auto___34539 = arguments.length;
var i__32630__auto___34540 = (0);
while(true){
if((i__32630__auto___34540 < len__32629__auto___34539)){
args34536.push((arguments[i__32630__auto___34540]));

var G__34541 = (i__32630__auto___34540 + (1));
i__32630__auto___34540 = G__34541;
continue;
} else {
}
break;
}

var G__34538 = args34536.length;
switch (G__34538) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34536.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34543 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34543);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34543,ret){
return (function (){
return fn1.call(null,val_34543);
});})(val_34543,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args34544 = [];
var len__32629__auto___34547 = arguments.length;
var i__32630__auto___34548 = (0);
while(true){
if((i__32630__auto___34548 < len__32629__auto___34547)){
args34544.push((arguments[i__32630__auto___34548]));

var G__34549 = (i__32630__auto___34548 + (1));
i__32630__auto___34548 = G__34549;
continue;
} else {
}
break;
}

var G__34546 = args34544.length;
switch (G__34546) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34544.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__32439__auto___34551 = n;
var x_34552 = (0);
while(true){
if((x_34552 < n__32439__auto___34551)){
(a[x_34552] = (0));

var G__34553 = (x_34552 + (1));
x_34552 = G__34553;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34554 = (i + (1));
i = G__34554;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34558 = (function (flag,meta34559){
this.flag = flag;
this.meta34559 = meta34559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34560,meta34559__$1){
var self__ = this;
var _34560__$1 = this;
return (new cljs.core.async.t_cljs$core$async34558(self__.flag,meta34559__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34560){
var self__ = this;
var _34560__$1 = this;
return self__.meta34559;
});})(flag))
;

cljs.core.async.t_cljs$core$async34558.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34558.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34558.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34559","meta34559",-1307289373,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34558";

cljs.core.async.t_cljs$core$async34558.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async34558");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34558 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34558(flag__$1,meta34559){
return (new cljs.core.async.t_cljs$core$async34558(flag__$1,meta34559));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34558(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34564 = (function (flag,cb,meta34565){
this.flag = flag;
this.cb = cb;
this.meta34565 = meta34565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34566,meta34565__$1){
var self__ = this;
var _34566__$1 = this;
return (new cljs.core.async.t_cljs$core$async34564(self__.flag,self__.cb,meta34565__$1));
});

cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34566){
var self__ = this;
var _34566__$1 = this;
return self__.meta34565;
});

cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34565","meta34565",83515094,null)], null);
});

cljs.core.async.t_cljs$core$async34564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34564";

cljs.core.async.t_cljs$core$async34564.cljs$lang$ctorPrWriter = (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async34564");
});

cljs.core.async.__GT_t_cljs$core$async34564 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34564(flag__$1,cb__$1,meta34565){
return (new cljs.core.async.t_cljs$core$async34564(flag__$1,cb__$1,meta34565));
});

}

return (new cljs.core.async.t_cljs$core$async34564(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34567_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34567_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34568_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34568_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__31516__auto__ = wport;
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34569 = (i + (1));
i = G__34569;
continue;
}
} else {
return null;
}
break;
}
})();
var or__31516__auto__ = ret;
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__31504__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__31504__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__31504__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___34575 = arguments.length;
var i__32630__auto___34576 = (0);
while(true){
if((i__32630__auto___34576 < len__32629__auto___34575)){
args__32636__auto__.push((arguments[i__32630__auto___34576]));

var G__34577 = (i__32630__auto___34576 + (1));
i__32630__auto___34576 = G__34577;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((1) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32637__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34572){
var map__34573 = p__34572;
var map__34573__$1 = ((((!((map__34573 == null)))?((((map__34573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34573):map__34573);
var opts = map__34573__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34570){
var G__34571 = cljs.core.first.call(null,seq34570);
var seq34570__$1 = cljs.core.next.call(null,seq34570);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34571,seq34570__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args34578 = [];
var len__32629__auto___34628 = arguments.length;
var i__32630__auto___34629 = (0);
while(true){
if((i__32630__auto___34629 < len__32629__auto___34628)){
args34578.push((arguments[i__32630__auto___34629]));

var G__34630 = (i__32630__auto___34629 + (1));
i__32630__auto___34629 = G__34630;
continue;
} else {
}
break;
}

var G__34580 = args34578.length;
switch (G__34580) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34578.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34465__auto___34632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___34632){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___34632){
return (function (state_34604){
var state_val_34605 = (state_34604[(1)]);
if((state_val_34605 === (7))){
var inst_34600 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
var statearr_34606_34633 = state_34604__$1;
(statearr_34606_34633[(2)] = inst_34600);

(statearr_34606_34633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (1))){
var state_34604__$1 = state_34604;
var statearr_34607_34634 = state_34604__$1;
(statearr_34607_34634[(2)] = null);

(statearr_34607_34634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (4))){
var inst_34583 = (state_34604[(7)]);
var inst_34583__$1 = (state_34604[(2)]);
var inst_34584 = (inst_34583__$1 == null);
var state_34604__$1 = (function (){var statearr_34608 = state_34604;
(statearr_34608[(7)] = inst_34583__$1);

return statearr_34608;
})();
if(cljs.core.truth_(inst_34584)){
var statearr_34609_34635 = state_34604__$1;
(statearr_34609_34635[(1)] = (5));

} else {
var statearr_34610_34636 = state_34604__$1;
(statearr_34610_34636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (13))){
var state_34604__$1 = state_34604;
var statearr_34611_34637 = state_34604__$1;
(statearr_34611_34637[(2)] = null);

(statearr_34611_34637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (6))){
var inst_34583 = (state_34604[(7)]);
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34604__$1,(11),to,inst_34583);
} else {
if((state_val_34605 === (3))){
var inst_34602 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34604__$1,inst_34602);
} else {
if((state_val_34605 === (12))){
var state_34604__$1 = state_34604;
var statearr_34612_34638 = state_34604__$1;
(statearr_34612_34638[(2)] = null);

(statearr_34612_34638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (2))){
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34604__$1,(4),from);
} else {
if((state_val_34605 === (11))){
var inst_34593 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
if(cljs.core.truth_(inst_34593)){
var statearr_34613_34639 = state_34604__$1;
(statearr_34613_34639[(1)] = (12));

} else {
var statearr_34614_34640 = state_34604__$1;
(statearr_34614_34640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (9))){
var state_34604__$1 = state_34604;
var statearr_34615_34641 = state_34604__$1;
(statearr_34615_34641[(2)] = null);

(statearr_34615_34641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (5))){
var state_34604__$1 = state_34604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34616_34642 = state_34604__$1;
(statearr_34616_34642[(1)] = (8));

} else {
var statearr_34617_34643 = state_34604__$1;
(statearr_34617_34643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (14))){
var inst_34598 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
var statearr_34618_34644 = state_34604__$1;
(statearr_34618_34644[(2)] = inst_34598);

(statearr_34618_34644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (10))){
var inst_34590 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
var statearr_34619_34645 = state_34604__$1;
(statearr_34619_34645[(2)] = inst_34590);

(statearr_34619_34645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (8))){
var inst_34587 = cljs.core.async.close_BANG_.call(null,to);
var state_34604__$1 = state_34604;
var statearr_34620_34646 = state_34604__$1;
(statearr_34620_34646[(2)] = inst_34587);

(statearr_34620_34646[(1)] = (10));


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
});})(c__34465__auto___34632))
;
return ((function (switch__34353__auto__,c__34465__auto___34632){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_34624 = [null,null,null,null,null,null,null,null];
(statearr_34624[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_34624[(1)] = (1));

return statearr_34624;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_34604){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_34604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e34625){if((e34625 instanceof Object)){
var ex__34357__auto__ = e34625;
var statearr_34626_34647 = state_34604;
(statearr_34626_34647[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34648 = state_34604;
state_34604 = G__34648;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_34604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_34604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___34632))
})();
var state__34467__auto__ = (function (){var statearr_34627 = f__34466__auto__.call(null);
(statearr_34627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___34632);

return statearr_34627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___34632))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34836){
var vec__34837 = p__34836;
var v = cljs.core.nth.call(null,vec__34837,(0),null);
var p = cljs.core.nth.call(null,vec__34837,(1),null);
var job = vec__34837;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34465__auto___35023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___35023,res,vec__34837,v,p,job,jobs,results){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___35023,res,vec__34837,v,p,job,jobs,results){
return (function (state_34844){
var state_val_34845 = (state_34844[(1)]);
if((state_val_34845 === (1))){
var state_34844__$1 = state_34844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34844__$1,(2),res,v);
} else {
if((state_val_34845 === (2))){
var inst_34841 = (state_34844[(2)]);
var inst_34842 = cljs.core.async.close_BANG_.call(null,res);
var state_34844__$1 = (function (){var statearr_34846 = state_34844;
(statearr_34846[(7)] = inst_34841);

return statearr_34846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34844__$1,inst_34842);
} else {
return null;
}
}
});})(c__34465__auto___35023,res,vec__34837,v,p,job,jobs,results))
;
return ((function (switch__34353__auto__,c__34465__auto___35023,res,vec__34837,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0 = (function (){
var statearr_34850 = [null,null,null,null,null,null,null,null];
(statearr_34850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__);

(statearr_34850[(1)] = (1));

return statearr_34850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1 = (function (state_34844){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_34844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e34851){if((e34851 instanceof Object)){
var ex__34357__auto__ = e34851;
var statearr_34852_35024 = state_34844;
(statearr_34852_35024[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35025 = state_34844;
state_34844 = G__35025;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = function(state_34844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1.call(this,state_34844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___35023,res,vec__34837,v,p,job,jobs,results))
})();
var state__34467__auto__ = (function (){var statearr_34853 = f__34466__auto__.call(null);
(statearr_34853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___35023);

return statearr_34853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___35023,res,vec__34837,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34854){
var vec__34855 = p__34854;
var v = cljs.core.nth.call(null,vec__34855,(0),null);
var p = cljs.core.nth.call(null,vec__34855,(1),null);
var job = vec__34855;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__32439__auto___35026 = n;
var __35027 = (0);
while(true){
if((__35027 < n__32439__auto___35026)){
var G__34858_35028 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34858_35028) {
case "compute":
var c__34465__auto___35030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35027,c__34465__auto___35030,G__34858_35028,n__32439__auto___35026,jobs,results,process,async){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (__35027,c__34465__auto___35030,G__34858_35028,n__32439__auto___35026,jobs,results,process,async){
return (function (state_34871){
var state_val_34872 = (state_34871[(1)]);
if((state_val_34872 === (1))){
var state_34871__$1 = state_34871;
var statearr_34873_35031 = state_34871__$1;
(statearr_34873_35031[(2)] = null);

(statearr_34873_35031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34872 === (2))){
var state_34871__$1 = state_34871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34871__$1,(4),jobs);
} else {
if((state_val_34872 === (3))){
var inst_34869 = (state_34871[(2)]);
var state_34871__$1 = state_34871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34871__$1,inst_34869);
} else {
if((state_val_34872 === (4))){
var inst_34861 = (state_34871[(2)]);
var inst_34862 = process.call(null,inst_34861);
var state_34871__$1 = state_34871;
if(cljs.core.truth_(inst_34862)){
var statearr_34874_35032 = state_34871__$1;
(statearr_34874_35032[(1)] = (5));

} else {
var statearr_34875_35033 = state_34871__$1;
(statearr_34875_35033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34872 === (5))){
var state_34871__$1 = state_34871;
var statearr_34876_35034 = state_34871__$1;
(statearr_34876_35034[(2)] = null);

(statearr_34876_35034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34872 === (6))){
var state_34871__$1 = state_34871;
var statearr_34877_35035 = state_34871__$1;
(statearr_34877_35035[(2)] = null);

(statearr_34877_35035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34872 === (7))){
var inst_34867 = (state_34871[(2)]);
var state_34871__$1 = state_34871;
var statearr_34878_35036 = state_34871__$1;
(statearr_34878_35036[(2)] = inst_34867);

(statearr_34878_35036[(1)] = (3));


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
});})(__35027,c__34465__auto___35030,G__34858_35028,n__32439__auto___35026,jobs,results,process,async))
;
return ((function (__35027,switch__34353__auto__,c__34465__auto___35030,G__34858_35028,n__32439__auto___35026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0 = (function (){
var statearr_34882 = [null,null,null,null,null,null,null];
(statearr_34882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__);

(statearr_34882[(1)] = (1));

return statearr_34882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1 = (function (state_34871){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_34871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e34883){if((e34883 instanceof Object)){
var ex__34357__auto__ = e34883;
var statearr_34884_35037 = state_34871;
(statearr_34884_35037[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35038 = state_34871;
state_34871 = G__35038;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = function(state_34871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1.call(this,state_34871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__;
})()
;})(__35027,switch__34353__auto__,c__34465__auto___35030,G__34858_35028,n__32439__auto___35026,jobs,results,process,async))
})();
var state__34467__auto__ = (function (){var statearr_34885 = f__34466__auto__.call(null);
(statearr_34885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___35030);

return statearr_34885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(__35027,c__34465__auto___35030,G__34858_35028,n__32439__auto___35026,jobs,results,process,async))
);


break;
case "async":
var c__34465__auto___35039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35027,c__34465__auto___35039,G__34858_35028,n__32439__auto___35026,jobs,results,process,async){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (__35027,c__34465__auto___35039,G__34858_35028,n__32439__auto___35026,jobs,results,process,async){
return (function (state_34898){
var state_val_34899 = (state_34898[(1)]);
if((state_val_34899 === (1))){
var state_34898__$1 = state_34898;
var statearr_34900_35040 = state_34898__$1;
(statearr_34900_35040[(2)] = null);

(statearr_34900_35040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (2))){
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34898__$1,(4),jobs);
} else {
if((state_val_34899 === (3))){
var inst_34896 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34898__$1,inst_34896);
} else {
if((state_val_34899 === (4))){
var inst_34888 = (state_34898[(2)]);
var inst_34889 = async.call(null,inst_34888);
var state_34898__$1 = state_34898;
if(cljs.core.truth_(inst_34889)){
var statearr_34901_35041 = state_34898__$1;
(statearr_34901_35041[(1)] = (5));

} else {
var statearr_34902_35042 = state_34898__$1;
(statearr_34902_35042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (5))){
var state_34898__$1 = state_34898;
var statearr_34903_35043 = state_34898__$1;
(statearr_34903_35043[(2)] = null);

(statearr_34903_35043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (6))){
var state_34898__$1 = state_34898;
var statearr_34904_35044 = state_34898__$1;
(statearr_34904_35044[(2)] = null);

(statearr_34904_35044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34899 === (7))){
var inst_34894 = (state_34898[(2)]);
var state_34898__$1 = state_34898;
var statearr_34905_35045 = state_34898__$1;
(statearr_34905_35045[(2)] = inst_34894);

(statearr_34905_35045[(1)] = (3));


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
});})(__35027,c__34465__auto___35039,G__34858_35028,n__32439__auto___35026,jobs,results,process,async))
;
return ((function (__35027,switch__34353__auto__,c__34465__auto___35039,G__34858_35028,n__32439__auto___35026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0 = (function (){
var statearr_34909 = [null,null,null,null,null,null,null];
(statearr_34909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__);

(statearr_34909[(1)] = (1));

return statearr_34909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1 = (function (state_34898){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_34898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e34910){if((e34910 instanceof Object)){
var ex__34357__auto__ = e34910;
var statearr_34911_35046 = state_34898;
(statearr_34911_35046[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35047 = state_34898;
state_34898 = G__35047;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = function(state_34898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1.call(this,state_34898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__;
})()
;})(__35027,switch__34353__auto__,c__34465__auto___35039,G__34858_35028,n__32439__auto___35026,jobs,results,process,async))
})();
var state__34467__auto__ = (function (){var statearr_34912 = f__34466__auto__.call(null);
(statearr_34912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___35039);

return statearr_34912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(__35027,c__34465__auto___35039,G__34858_35028,n__32439__auto___35026,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__35048 = (__35027 + (1));
__35027 = G__35048;
continue;
} else {
}
break;
}

var c__34465__auto___35049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___35049,jobs,results,process,async){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___35049,jobs,results,process,async){
return (function (state_34934){
var state_val_34935 = (state_34934[(1)]);
if((state_val_34935 === (1))){
var state_34934__$1 = state_34934;
var statearr_34936_35050 = state_34934__$1;
(statearr_34936_35050[(2)] = null);

(statearr_34936_35050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (2))){
var state_34934__$1 = state_34934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34934__$1,(4),from);
} else {
if((state_val_34935 === (3))){
var inst_34932 = (state_34934[(2)]);
var state_34934__$1 = state_34934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34934__$1,inst_34932);
} else {
if((state_val_34935 === (4))){
var inst_34915 = (state_34934[(7)]);
var inst_34915__$1 = (state_34934[(2)]);
var inst_34916 = (inst_34915__$1 == null);
var state_34934__$1 = (function (){var statearr_34937 = state_34934;
(statearr_34937[(7)] = inst_34915__$1);

return statearr_34937;
})();
if(cljs.core.truth_(inst_34916)){
var statearr_34938_35051 = state_34934__$1;
(statearr_34938_35051[(1)] = (5));

} else {
var statearr_34939_35052 = state_34934__$1;
(statearr_34939_35052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (5))){
var inst_34918 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34934__$1 = state_34934;
var statearr_34940_35053 = state_34934__$1;
(statearr_34940_35053[(2)] = inst_34918);

(statearr_34940_35053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (6))){
var inst_34920 = (state_34934[(8)]);
var inst_34915 = (state_34934[(7)]);
var inst_34920__$1 = cljs.core.async.chan.call(null,(1));
var inst_34921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34922 = [inst_34915,inst_34920__$1];
var inst_34923 = (new cljs.core.PersistentVector(null,2,(5),inst_34921,inst_34922,null));
var state_34934__$1 = (function (){var statearr_34941 = state_34934;
(statearr_34941[(8)] = inst_34920__$1);

return statearr_34941;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34934__$1,(8),jobs,inst_34923);
} else {
if((state_val_34935 === (7))){
var inst_34930 = (state_34934[(2)]);
var state_34934__$1 = state_34934;
var statearr_34942_35054 = state_34934__$1;
(statearr_34942_35054[(2)] = inst_34930);

(statearr_34942_35054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (8))){
var inst_34920 = (state_34934[(8)]);
var inst_34925 = (state_34934[(2)]);
var state_34934__$1 = (function (){var statearr_34943 = state_34934;
(statearr_34943[(9)] = inst_34925);

return statearr_34943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34934__$1,(9),results,inst_34920);
} else {
if((state_val_34935 === (9))){
var inst_34927 = (state_34934[(2)]);
var state_34934__$1 = (function (){var statearr_34944 = state_34934;
(statearr_34944[(10)] = inst_34927);

return statearr_34944;
})();
var statearr_34945_35055 = state_34934__$1;
(statearr_34945_35055[(2)] = null);

(statearr_34945_35055[(1)] = (2));


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
});})(c__34465__auto___35049,jobs,results,process,async))
;
return ((function (switch__34353__auto__,c__34465__auto___35049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0 = (function (){
var statearr_34949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__);

(statearr_34949[(1)] = (1));

return statearr_34949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1 = (function (state_34934){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_34934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e34950){if((e34950 instanceof Object)){
var ex__34357__auto__ = e34950;
var statearr_34951_35056 = state_34934;
(statearr_34951_35056[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35057 = state_34934;
state_34934 = G__35057;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = function(state_34934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1.call(this,state_34934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___35049,jobs,results,process,async))
})();
var state__34467__auto__ = (function (){var statearr_34952 = f__34466__auto__.call(null);
(statearr_34952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___35049);

return statearr_34952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___35049,jobs,results,process,async))
);


var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__,jobs,results,process,async){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__,jobs,results,process,async){
return (function (state_34990){
var state_val_34991 = (state_34990[(1)]);
if((state_val_34991 === (7))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34992_35058 = state_34990__$1;
(statearr_34992_35058[(2)] = inst_34986);

(statearr_34992_35058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (20))){
var state_34990__$1 = state_34990;
var statearr_34993_35059 = state_34990__$1;
(statearr_34993_35059[(2)] = null);

(statearr_34993_35059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var state_34990__$1 = state_34990;
var statearr_34994_35060 = state_34990__$1;
(statearr_34994_35060[(2)] = null);

(statearr_34994_35060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34955 = (state_34990[(7)]);
var inst_34955__$1 = (state_34990[(2)]);
var inst_34956 = (inst_34955__$1 == null);
var state_34990__$1 = (function (){var statearr_34995 = state_34990;
(statearr_34995[(7)] = inst_34955__$1);

return statearr_34995;
})();
if(cljs.core.truth_(inst_34956)){
var statearr_34996_35061 = state_34990__$1;
(statearr_34996_35061[(1)] = (5));

} else {
var statearr_34997_35062 = state_34990__$1;
(statearr_34997_35062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (15))){
var inst_34968 = (state_34990[(8)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34990__$1,(18),to,inst_34968);
} else {
if((state_val_34991 === (21))){
var inst_34981 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34998_35063 = state_34990__$1;
(statearr_34998_35063[(2)] = inst_34981);

(statearr_34998_35063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (13))){
var inst_34983 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(9)] = inst_34983);

return statearr_34999;
})();
var statearr_35000_35064 = state_34990__$1;
(statearr_35000_35064[(2)] = null);

(statearr_35000_35064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (6))){
var inst_34955 = (state_34990[(7)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34990__$1,(11),inst_34955);
} else {
if((state_val_34991 === (17))){
var inst_34976 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34976)){
var statearr_35001_35065 = state_34990__$1;
(statearr_35001_35065[(1)] = (19));

} else {
var statearr_35002_35066 = state_34990__$1;
(statearr_35002_35066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34990__$1,inst_34988);
} else {
if((state_val_34991 === (12))){
var inst_34965 = (state_34990[(10)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34990__$1,(14),inst_34965);
} else {
if((state_val_34991 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34990__$1,(4),results);
} else {
if((state_val_34991 === (19))){
var state_34990__$1 = state_34990;
var statearr_35003_35067 = state_34990__$1;
(statearr_35003_35067[(2)] = null);

(statearr_35003_35067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34965 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35004 = state_34990;
(statearr_35004[(10)] = inst_34965);

return statearr_35004;
})();
var statearr_35005_35068 = state_34990__$1;
(statearr_35005_35068[(2)] = null);

(statearr_35005_35068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var state_34990__$1 = state_34990;
var statearr_35006_35069 = state_34990__$1;
(statearr_35006_35069[(2)] = null);

(statearr_35006_35069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (5))){
var state_34990__$1 = state_34990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35007_35070 = state_34990__$1;
(statearr_35007_35070[(1)] = (8));

} else {
var statearr_35008_35071 = state_34990__$1;
(statearr_35008_35071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (14))){
var inst_34968 = (state_34990[(8)]);
var inst_34970 = (state_34990[(11)]);
var inst_34968__$1 = (state_34990[(2)]);
var inst_34969 = (inst_34968__$1 == null);
var inst_34970__$1 = cljs.core.not.call(null,inst_34969);
var state_34990__$1 = (function (){var statearr_35009 = state_34990;
(statearr_35009[(8)] = inst_34968__$1);

(statearr_35009[(11)] = inst_34970__$1);

return statearr_35009;
})();
if(inst_34970__$1){
var statearr_35010_35072 = state_34990__$1;
(statearr_35010_35072[(1)] = (15));

} else {
var statearr_35011_35073 = state_34990__$1;
(statearr_35011_35073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (16))){
var inst_34970 = (state_34990[(11)]);
var state_34990__$1 = state_34990;
var statearr_35012_35074 = state_34990__$1;
(statearr_35012_35074[(2)] = inst_34970);

(statearr_35012_35074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34962 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35013_35075 = state_34990__$1;
(statearr_35013_35075[(2)] = inst_34962);

(statearr_35013_35075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (18))){
var inst_34973 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35014_35076 = state_34990__$1;
(statearr_35014_35076[(2)] = inst_34973);

(statearr_35014_35076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (8))){
var inst_34959 = cljs.core.async.close_BANG_.call(null,to);
var state_34990__$1 = state_34990;
var statearr_35015_35077 = state_34990__$1;
(statearr_35015_35077[(2)] = inst_34959);

(statearr_35015_35077[(1)] = (10));


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
});})(c__34465__auto__,jobs,results,process,async))
;
return ((function (switch__34353__auto__,c__34465__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0 = (function (){
var statearr_35019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__);

(statearr_35019[(1)] = (1));

return statearr_35019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1 = (function (state_34990){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_34990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e35020){if((e35020 instanceof Object)){
var ex__34357__auto__ = e35020;
var statearr_35021_35078 = state_34990;
(statearr_35021_35078[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35079 = state_34990;
state_34990 = G__35079;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__,jobs,results,process,async))
})();
var state__34467__auto__ = (function (){var statearr_35022 = f__34466__auto__.call(null);
(statearr_35022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_35022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__,jobs,results,process,async))
);

return c__34465__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args35080 = [];
var len__32629__auto___35083 = arguments.length;
var i__32630__auto___35084 = (0);
while(true){
if((i__32630__auto___35084 < len__32629__auto___35083)){
args35080.push((arguments[i__32630__auto___35084]));

var G__35085 = (i__32630__auto___35084 + (1));
i__32630__auto___35084 = G__35085;
continue;
} else {
}
break;
}

var G__35082 = args35080.length;
switch (G__35082) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35080.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args35087 = [];
var len__32629__auto___35090 = arguments.length;
var i__32630__auto___35091 = (0);
while(true){
if((i__32630__auto___35091 < len__32629__auto___35090)){
args35087.push((arguments[i__32630__auto___35091]));

var G__35092 = (i__32630__auto___35091 + (1));
i__32630__auto___35091 = G__35092;
continue;
} else {
}
break;
}

var G__35089 = args35087.length;
switch (G__35089) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35087.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args35094 = [];
var len__32629__auto___35147 = arguments.length;
var i__32630__auto___35148 = (0);
while(true){
if((i__32630__auto___35148 < len__32629__auto___35147)){
args35094.push((arguments[i__32630__auto___35148]));

var G__35149 = (i__32630__auto___35148 + (1));
i__32630__auto___35148 = G__35149;
continue;
} else {
}
break;
}

var G__35096 = args35094.length;
switch (G__35096) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35094.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34465__auto___35151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___35151,tc,fc){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___35151,tc,fc){
return (function (state_35122){
var state_val_35123 = (state_35122[(1)]);
if((state_val_35123 === (7))){
var inst_35118 = (state_35122[(2)]);
var state_35122__$1 = state_35122;
var statearr_35124_35152 = state_35122__$1;
(statearr_35124_35152[(2)] = inst_35118);

(statearr_35124_35152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (1))){
var state_35122__$1 = state_35122;
var statearr_35125_35153 = state_35122__$1;
(statearr_35125_35153[(2)] = null);

(statearr_35125_35153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (4))){
var inst_35099 = (state_35122[(7)]);
var inst_35099__$1 = (state_35122[(2)]);
var inst_35100 = (inst_35099__$1 == null);
var state_35122__$1 = (function (){var statearr_35126 = state_35122;
(statearr_35126[(7)] = inst_35099__$1);

return statearr_35126;
})();
if(cljs.core.truth_(inst_35100)){
var statearr_35127_35154 = state_35122__$1;
(statearr_35127_35154[(1)] = (5));

} else {
var statearr_35128_35155 = state_35122__$1;
(statearr_35128_35155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (13))){
var state_35122__$1 = state_35122;
var statearr_35129_35156 = state_35122__$1;
(statearr_35129_35156[(2)] = null);

(statearr_35129_35156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (6))){
var inst_35099 = (state_35122[(7)]);
var inst_35105 = p.call(null,inst_35099);
var state_35122__$1 = state_35122;
if(cljs.core.truth_(inst_35105)){
var statearr_35130_35157 = state_35122__$1;
(statearr_35130_35157[(1)] = (9));

} else {
var statearr_35131_35158 = state_35122__$1;
(statearr_35131_35158[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (3))){
var inst_35120 = (state_35122[(2)]);
var state_35122__$1 = state_35122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35122__$1,inst_35120);
} else {
if((state_val_35123 === (12))){
var state_35122__$1 = state_35122;
var statearr_35132_35159 = state_35122__$1;
(statearr_35132_35159[(2)] = null);

(statearr_35132_35159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (2))){
var state_35122__$1 = state_35122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35122__$1,(4),ch);
} else {
if((state_val_35123 === (11))){
var inst_35099 = (state_35122[(7)]);
var inst_35109 = (state_35122[(2)]);
var state_35122__$1 = state_35122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35122__$1,(8),inst_35109,inst_35099);
} else {
if((state_val_35123 === (9))){
var state_35122__$1 = state_35122;
var statearr_35133_35160 = state_35122__$1;
(statearr_35133_35160[(2)] = tc);

(statearr_35133_35160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (5))){
var inst_35102 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35103 = cljs.core.async.close_BANG_.call(null,fc);
var state_35122__$1 = (function (){var statearr_35134 = state_35122;
(statearr_35134[(8)] = inst_35102);

return statearr_35134;
})();
var statearr_35135_35161 = state_35122__$1;
(statearr_35135_35161[(2)] = inst_35103);

(statearr_35135_35161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (14))){
var inst_35116 = (state_35122[(2)]);
var state_35122__$1 = state_35122;
var statearr_35136_35162 = state_35122__$1;
(statearr_35136_35162[(2)] = inst_35116);

(statearr_35136_35162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (10))){
var state_35122__$1 = state_35122;
var statearr_35137_35163 = state_35122__$1;
(statearr_35137_35163[(2)] = fc);

(statearr_35137_35163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35123 === (8))){
var inst_35111 = (state_35122[(2)]);
var state_35122__$1 = state_35122;
if(cljs.core.truth_(inst_35111)){
var statearr_35138_35164 = state_35122__$1;
(statearr_35138_35164[(1)] = (12));

} else {
var statearr_35139_35165 = state_35122__$1;
(statearr_35139_35165[(1)] = (13));

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
});})(c__34465__auto___35151,tc,fc))
;
return ((function (switch__34353__auto__,c__34465__auto___35151,tc,fc){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_35143 = [null,null,null,null,null,null,null,null,null];
(statearr_35143[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_35143[(1)] = (1));

return statearr_35143;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_35122){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_35122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e35144){if((e35144 instanceof Object)){
var ex__34357__auto__ = e35144;
var statearr_35145_35166 = state_35122;
(statearr_35145_35166[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35167 = state_35122;
state_35122 = G__35167;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_35122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_35122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___35151,tc,fc))
})();
var state__34467__auto__ = (function (){var statearr_35146 = f__34466__auto__.call(null);
(statearr_35146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___35151);

return statearr_35146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___35151,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__){
return (function (state_35231){
var state_val_35232 = (state_35231[(1)]);
if((state_val_35232 === (7))){
var inst_35227 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35233_35254 = state_35231__$1;
(statearr_35233_35254[(2)] = inst_35227);

(statearr_35233_35254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (1))){
var inst_35211 = init;
var state_35231__$1 = (function (){var statearr_35234 = state_35231;
(statearr_35234[(7)] = inst_35211);

return statearr_35234;
})();
var statearr_35235_35255 = state_35231__$1;
(statearr_35235_35255[(2)] = null);

(statearr_35235_35255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (4))){
var inst_35214 = (state_35231[(8)]);
var inst_35214__$1 = (state_35231[(2)]);
var inst_35215 = (inst_35214__$1 == null);
var state_35231__$1 = (function (){var statearr_35236 = state_35231;
(statearr_35236[(8)] = inst_35214__$1);

return statearr_35236;
})();
if(cljs.core.truth_(inst_35215)){
var statearr_35237_35256 = state_35231__$1;
(statearr_35237_35256[(1)] = (5));

} else {
var statearr_35238_35257 = state_35231__$1;
(statearr_35238_35257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (6))){
var inst_35211 = (state_35231[(7)]);
var inst_35218 = (state_35231[(9)]);
var inst_35214 = (state_35231[(8)]);
var inst_35218__$1 = f.call(null,inst_35211,inst_35214);
var inst_35219 = cljs.core.reduced_QMARK_.call(null,inst_35218__$1);
var state_35231__$1 = (function (){var statearr_35239 = state_35231;
(statearr_35239[(9)] = inst_35218__$1);

return statearr_35239;
})();
if(inst_35219){
var statearr_35240_35258 = state_35231__$1;
(statearr_35240_35258[(1)] = (8));

} else {
var statearr_35241_35259 = state_35231__$1;
(statearr_35241_35259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (3))){
var inst_35229 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35231__$1,inst_35229);
} else {
if((state_val_35232 === (2))){
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35231__$1,(4),ch);
} else {
if((state_val_35232 === (9))){
var inst_35218 = (state_35231[(9)]);
var inst_35211 = inst_35218;
var state_35231__$1 = (function (){var statearr_35242 = state_35231;
(statearr_35242[(7)] = inst_35211);

return statearr_35242;
})();
var statearr_35243_35260 = state_35231__$1;
(statearr_35243_35260[(2)] = null);

(statearr_35243_35260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (5))){
var inst_35211 = (state_35231[(7)]);
var state_35231__$1 = state_35231;
var statearr_35244_35261 = state_35231__$1;
(statearr_35244_35261[(2)] = inst_35211);

(statearr_35244_35261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (10))){
var inst_35225 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35245_35262 = state_35231__$1;
(statearr_35245_35262[(2)] = inst_35225);

(statearr_35245_35262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (8))){
var inst_35218 = (state_35231[(9)]);
var inst_35221 = cljs.core.deref.call(null,inst_35218);
var state_35231__$1 = state_35231;
var statearr_35246_35263 = state_35231__$1;
(statearr_35246_35263[(2)] = inst_35221);

(statearr_35246_35263[(1)] = (10));


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
});})(c__34465__auto__))
;
return ((function (switch__34353__auto__,c__34465__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34354__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34354__auto____0 = (function (){
var statearr_35250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35250[(0)] = cljs$core$async$reduce_$_state_machine__34354__auto__);

(statearr_35250[(1)] = (1));

return statearr_35250;
});
var cljs$core$async$reduce_$_state_machine__34354__auto____1 = (function (state_35231){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_35231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e35251){if((e35251 instanceof Object)){
var ex__34357__auto__ = e35251;
var statearr_35252_35264 = state_35231;
(statearr_35252_35264[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35265 = state_35231;
state_35231 = G__35265;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34354__auto__ = function(state_35231){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34354__auto____1.call(this,state_35231);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34354__auto____0;
cljs$core$async$reduce_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34354__auto____1;
return cljs$core$async$reduce_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__))
})();
var state__34467__auto__ = (function (){var statearr_35253 = f__34466__auto__.call(null);
(statearr_35253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_35253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__))
);

return c__34465__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__,f__$1){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__,f__$1){
return (function (state_35285){
var state_val_35286 = (state_35285[(1)]);
if((state_val_35286 === (1))){
var inst_35280 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35285__$1 = state_35285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35285__$1,(2),inst_35280);
} else {
if((state_val_35286 === (2))){
var inst_35282 = (state_35285[(2)]);
var inst_35283 = f__$1.call(null,inst_35282);
var state_35285__$1 = state_35285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35285__$1,inst_35283);
} else {
return null;
}
}
});})(c__34465__auto__,f__$1))
;
return ((function (switch__34353__auto__,c__34465__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34354__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34354__auto____0 = (function (){
var statearr_35290 = [null,null,null,null,null,null,null];
(statearr_35290[(0)] = cljs$core$async$transduce_$_state_machine__34354__auto__);

(statearr_35290[(1)] = (1));

return statearr_35290;
});
var cljs$core$async$transduce_$_state_machine__34354__auto____1 = (function (state_35285){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_35285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e35291){if((e35291 instanceof Object)){
var ex__34357__auto__ = e35291;
var statearr_35292_35294 = state_35285;
(statearr_35292_35294[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35295 = state_35285;
state_35285 = G__35295;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34354__auto__ = function(state_35285){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34354__auto____1.call(this,state_35285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34354__auto____0;
cljs$core$async$transduce_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34354__auto____1;
return cljs$core$async$transduce_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__,f__$1))
})();
var state__34467__auto__ = (function (){var statearr_35293 = f__34466__auto__.call(null);
(statearr_35293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__,f__$1))
);

return c__34465__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args35296 = [];
var len__32629__auto___35348 = arguments.length;
var i__32630__auto___35349 = (0);
while(true){
if((i__32630__auto___35349 < len__32629__auto___35348)){
args35296.push((arguments[i__32630__auto___35349]));

var G__35350 = (i__32630__auto___35349 + (1));
i__32630__auto___35349 = G__35350;
continue;
} else {
}
break;
}

var G__35298 = args35296.length;
switch (G__35298) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35296.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__){
return (function (state_35323){
var state_val_35324 = (state_35323[(1)]);
if((state_val_35324 === (7))){
var inst_35305 = (state_35323[(2)]);
var state_35323__$1 = state_35323;
var statearr_35325_35352 = state_35323__$1;
(statearr_35325_35352[(2)] = inst_35305);

(statearr_35325_35352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (1))){
var inst_35299 = cljs.core.seq.call(null,coll);
var inst_35300 = inst_35299;
var state_35323__$1 = (function (){var statearr_35326 = state_35323;
(statearr_35326[(7)] = inst_35300);

return statearr_35326;
})();
var statearr_35327_35353 = state_35323__$1;
(statearr_35327_35353[(2)] = null);

(statearr_35327_35353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (4))){
var inst_35300 = (state_35323[(7)]);
var inst_35303 = cljs.core.first.call(null,inst_35300);
var state_35323__$1 = state_35323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35323__$1,(7),ch,inst_35303);
} else {
if((state_val_35324 === (13))){
var inst_35317 = (state_35323[(2)]);
var state_35323__$1 = state_35323;
var statearr_35328_35354 = state_35323__$1;
(statearr_35328_35354[(2)] = inst_35317);

(statearr_35328_35354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (6))){
var inst_35308 = (state_35323[(2)]);
var state_35323__$1 = state_35323;
if(cljs.core.truth_(inst_35308)){
var statearr_35329_35355 = state_35323__$1;
(statearr_35329_35355[(1)] = (8));

} else {
var statearr_35330_35356 = state_35323__$1;
(statearr_35330_35356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (3))){
var inst_35321 = (state_35323[(2)]);
var state_35323__$1 = state_35323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35323__$1,inst_35321);
} else {
if((state_val_35324 === (12))){
var state_35323__$1 = state_35323;
var statearr_35331_35357 = state_35323__$1;
(statearr_35331_35357[(2)] = null);

(statearr_35331_35357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (2))){
var inst_35300 = (state_35323[(7)]);
var state_35323__$1 = state_35323;
if(cljs.core.truth_(inst_35300)){
var statearr_35332_35358 = state_35323__$1;
(statearr_35332_35358[(1)] = (4));

} else {
var statearr_35333_35359 = state_35323__$1;
(statearr_35333_35359[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (11))){
var inst_35314 = cljs.core.async.close_BANG_.call(null,ch);
var state_35323__$1 = state_35323;
var statearr_35334_35360 = state_35323__$1;
(statearr_35334_35360[(2)] = inst_35314);

(statearr_35334_35360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (9))){
var state_35323__$1 = state_35323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35335_35361 = state_35323__$1;
(statearr_35335_35361[(1)] = (11));

} else {
var statearr_35336_35362 = state_35323__$1;
(statearr_35336_35362[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (5))){
var inst_35300 = (state_35323[(7)]);
var state_35323__$1 = state_35323;
var statearr_35337_35363 = state_35323__$1;
(statearr_35337_35363[(2)] = inst_35300);

(statearr_35337_35363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (10))){
var inst_35319 = (state_35323[(2)]);
var state_35323__$1 = state_35323;
var statearr_35338_35364 = state_35323__$1;
(statearr_35338_35364[(2)] = inst_35319);

(statearr_35338_35364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (8))){
var inst_35300 = (state_35323[(7)]);
var inst_35310 = cljs.core.next.call(null,inst_35300);
var inst_35300__$1 = inst_35310;
var state_35323__$1 = (function (){var statearr_35339 = state_35323;
(statearr_35339[(7)] = inst_35300__$1);

return statearr_35339;
})();
var statearr_35340_35365 = state_35323__$1;
(statearr_35340_35365[(2)] = null);

(statearr_35340_35365[(1)] = (2));


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
});})(c__34465__auto__))
;
return ((function (switch__34353__auto__,c__34465__auto__){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_35344 = [null,null,null,null,null,null,null,null];
(statearr_35344[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_35344[(1)] = (1));

return statearr_35344;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_35323){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_35323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e35345){if((e35345 instanceof Object)){
var ex__34357__auto__ = e35345;
var statearr_35346_35366 = state_35323;
(statearr_35346_35366[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35367 = state_35323;
state_35323 = G__35367;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_35323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_35323);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__))
})();
var state__34467__auto__ = (function (){var statearr_35347 = f__34466__auto__.call(null);
(statearr_35347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_35347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__))
);

return c__34465__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__32184__auto__ = (((_ == null))?null:_);
var m__32185__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,_);
} else {
var m__32185__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__32184__auto__ = (((m == null))?null:m);
var m__32185__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__32185__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__32184__auto__ = (((m == null))?null:m);
var m__32185__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,m,ch);
} else {
var m__32185__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__32184__auto__ = (((m == null))?null:m);
var m__32185__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,m);
} else {
var m__32185__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35593 = (function (ch,cs,meta35594){
this.ch = ch;
this.cs = cs;
this.meta35594 = meta35594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35595,meta35594__$1){
var self__ = this;
var _35595__$1 = this;
return (new cljs.core.async.t_cljs$core$async35593(self__.ch,self__.cs,meta35594__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35595){
var self__ = this;
var _35595__$1 = this;
return self__.meta35594;
});})(cs))
;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35593.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35594","meta35594",705482815,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35593";

cljs.core.async.t_cljs$core$async35593.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async35593");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35593 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35593(ch__$1,cs__$1,meta35594){
return (new cljs.core.async.t_cljs$core$async35593(ch__$1,cs__$1,meta35594));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35593(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34465__auto___35818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___35818,cs,m,dchan,dctr,done){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___35818,cs,m,dchan,dctr,done){
return (function (state_35730){
var state_val_35731 = (state_35730[(1)]);
if((state_val_35731 === (7))){
var inst_35726 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35732_35819 = state_35730__$1;
(statearr_35732_35819[(2)] = inst_35726);

(statearr_35732_35819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (20))){
var inst_35629 = (state_35730[(7)]);
var inst_35641 = cljs.core.first.call(null,inst_35629);
var inst_35642 = cljs.core.nth.call(null,inst_35641,(0),null);
var inst_35643 = cljs.core.nth.call(null,inst_35641,(1),null);
var state_35730__$1 = (function (){var statearr_35733 = state_35730;
(statearr_35733[(8)] = inst_35642);

return statearr_35733;
})();
if(cljs.core.truth_(inst_35643)){
var statearr_35734_35820 = state_35730__$1;
(statearr_35734_35820[(1)] = (22));

} else {
var statearr_35735_35821 = state_35730__$1;
(statearr_35735_35821[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (27))){
var inst_35673 = (state_35730[(9)]);
var inst_35598 = (state_35730[(10)]);
var inst_35678 = (state_35730[(11)]);
var inst_35671 = (state_35730[(12)]);
var inst_35678__$1 = cljs.core._nth.call(null,inst_35671,inst_35673);
var inst_35679 = cljs.core.async.put_BANG_.call(null,inst_35678__$1,inst_35598,done);
var state_35730__$1 = (function (){var statearr_35736 = state_35730;
(statearr_35736[(11)] = inst_35678__$1);

return statearr_35736;
})();
if(cljs.core.truth_(inst_35679)){
var statearr_35737_35822 = state_35730__$1;
(statearr_35737_35822[(1)] = (30));

} else {
var statearr_35738_35823 = state_35730__$1;
(statearr_35738_35823[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (1))){
var state_35730__$1 = state_35730;
var statearr_35739_35824 = state_35730__$1;
(statearr_35739_35824[(2)] = null);

(statearr_35739_35824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (24))){
var inst_35629 = (state_35730[(7)]);
var inst_35648 = (state_35730[(2)]);
var inst_35649 = cljs.core.next.call(null,inst_35629);
var inst_35607 = inst_35649;
var inst_35608 = null;
var inst_35609 = (0);
var inst_35610 = (0);
var state_35730__$1 = (function (){var statearr_35740 = state_35730;
(statearr_35740[(13)] = inst_35608);

(statearr_35740[(14)] = inst_35610);

(statearr_35740[(15)] = inst_35609);

(statearr_35740[(16)] = inst_35648);

(statearr_35740[(17)] = inst_35607);

return statearr_35740;
})();
var statearr_35741_35825 = state_35730__$1;
(statearr_35741_35825[(2)] = null);

(statearr_35741_35825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (39))){
var state_35730__$1 = state_35730;
var statearr_35745_35826 = state_35730__$1;
(statearr_35745_35826[(2)] = null);

(statearr_35745_35826[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (4))){
var inst_35598 = (state_35730[(10)]);
var inst_35598__$1 = (state_35730[(2)]);
var inst_35599 = (inst_35598__$1 == null);
var state_35730__$1 = (function (){var statearr_35746 = state_35730;
(statearr_35746[(10)] = inst_35598__$1);

return statearr_35746;
})();
if(cljs.core.truth_(inst_35599)){
var statearr_35747_35827 = state_35730__$1;
(statearr_35747_35827[(1)] = (5));

} else {
var statearr_35748_35828 = state_35730__$1;
(statearr_35748_35828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (15))){
var inst_35608 = (state_35730[(13)]);
var inst_35610 = (state_35730[(14)]);
var inst_35609 = (state_35730[(15)]);
var inst_35607 = (state_35730[(17)]);
var inst_35625 = (state_35730[(2)]);
var inst_35626 = (inst_35610 + (1));
var tmp35742 = inst_35608;
var tmp35743 = inst_35609;
var tmp35744 = inst_35607;
var inst_35607__$1 = tmp35744;
var inst_35608__$1 = tmp35742;
var inst_35609__$1 = tmp35743;
var inst_35610__$1 = inst_35626;
var state_35730__$1 = (function (){var statearr_35749 = state_35730;
(statearr_35749[(18)] = inst_35625);

(statearr_35749[(13)] = inst_35608__$1);

(statearr_35749[(14)] = inst_35610__$1);

(statearr_35749[(15)] = inst_35609__$1);

(statearr_35749[(17)] = inst_35607__$1);

return statearr_35749;
})();
var statearr_35750_35829 = state_35730__$1;
(statearr_35750_35829[(2)] = null);

(statearr_35750_35829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (21))){
var inst_35652 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35754_35830 = state_35730__$1;
(statearr_35754_35830[(2)] = inst_35652);

(statearr_35754_35830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (31))){
var inst_35678 = (state_35730[(11)]);
var inst_35682 = done.call(null,null);
var inst_35683 = cljs.core.async.untap_STAR_.call(null,m,inst_35678);
var state_35730__$1 = (function (){var statearr_35755 = state_35730;
(statearr_35755[(19)] = inst_35682);

return statearr_35755;
})();
var statearr_35756_35831 = state_35730__$1;
(statearr_35756_35831[(2)] = inst_35683);

(statearr_35756_35831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (32))){
var inst_35673 = (state_35730[(9)]);
var inst_35671 = (state_35730[(12)]);
var inst_35672 = (state_35730[(20)]);
var inst_35670 = (state_35730[(21)]);
var inst_35685 = (state_35730[(2)]);
var inst_35686 = (inst_35673 + (1));
var tmp35751 = inst_35671;
var tmp35752 = inst_35672;
var tmp35753 = inst_35670;
var inst_35670__$1 = tmp35753;
var inst_35671__$1 = tmp35751;
var inst_35672__$1 = tmp35752;
var inst_35673__$1 = inst_35686;
var state_35730__$1 = (function (){var statearr_35757 = state_35730;
(statearr_35757[(9)] = inst_35673__$1);

(statearr_35757[(22)] = inst_35685);

(statearr_35757[(12)] = inst_35671__$1);

(statearr_35757[(20)] = inst_35672__$1);

(statearr_35757[(21)] = inst_35670__$1);

return statearr_35757;
})();
var statearr_35758_35832 = state_35730__$1;
(statearr_35758_35832[(2)] = null);

(statearr_35758_35832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (40))){
var inst_35698 = (state_35730[(23)]);
var inst_35702 = done.call(null,null);
var inst_35703 = cljs.core.async.untap_STAR_.call(null,m,inst_35698);
var state_35730__$1 = (function (){var statearr_35759 = state_35730;
(statearr_35759[(24)] = inst_35702);

return statearr_35759;
})();
var statearr_35760_35833 = state_35730__$1;
(statearr_35760_35833[(2)] = inst_35703);

(statearr_35760_35833[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (33))){
var inst_35689 = (state_35730[(25)]);
var inst_35691 = cljs.core.chunked_seq_QMARK_.call(null,inst_35689);
var state_35730__$1 = state_35730;
if(inst_35691){
var statearr_35761_35834 = state_35730__$1;
(statearr_35761_35834[(1)] = (36));

} else {
var statearr_35762_35835 = state_35730__$1;
(statearr_35762_35835[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (13))){
var inst_35619 = (state_35730[(26)]);
var inst_35622 = cljs.core.async.close_BANG_.call(null,inst_35619);
var state_35730__$1 = state_35730;
var statearr_35763_35836 = state_35730__$1;
(statearr_35763_35836[(2)] = inst_35622);

(statearr_35763_35836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (22))){
var inst_35642 = (state_35730[(8)]);
var inst_35645 = cljs.core.async.close_BANG_.call(null,inst_35642);
var state_35730__$1 = state_35730;
var statearr_35764_35837 = state_35730__$1;
(statearr_35764_35837[(2)] = inst_35645);

(statearr_35764_35837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (36))){
var inst_35689 = (state_35730[(25)]);
var inst_35693 = cljs.core.chunk_first.call(null,inst_35689);
var inst_35694 = cljs.core.chunk_rest.call(null,inst_35689);
var inst_35695 = cljs.core.count.call(null,inst_35693);
var inst_35670 = inst_35694;
var inst_35671 = inst_35693;
var inst_35672 = inst_35695;
var inst_35673 = (0);
var state_35730__$1 = (function (){var statearr_35765 = state_35730;
(statearr_35765[(9)] = inst_35673);

(statearr_35765[(12)] = inst_35671);

(statearr_35765[(20)] = inst_35672);

(statearr_35765[(21)] = inst_35670);

return statearr_35765;
})();
var statearr_35766_35838 = state_35730__$1;
(statearr_35766_35838[(2)] = null);

(statearr_35766_35838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (41))){
var inst_35689 = (state_35730[(25)]);
var inst_35705 = (state_35730[(2)]);
var inst_35706 = cljs.core.next.call(null,inst_35689);
var inst_35670 = inst_35706;
var inst_35671 = null;
var inst_35672 = (0);
var inst_35673 = (0);
var state_35730__$1 = (function (){var statearr_35767 = state_35730;
(statearr_35767[(9)] = inst_35673);

(statearr_35767[(12)] = inst_35671);

(statearr_35767[(27)] = inst_35705);

(statearr_35767[(20)] = inst_35672);

(statearr_35767[(21)] = inst_35670);

return statearr_35767;
})();
var statearr_35768_35839 = state_35730__$1;
(statearr_35768_35839[(2)] = null);

(statearr_35768_35839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (43))){
var state_35730__$1 = state_35730;
var statearr_35769_35840 = state_35730__$1;
(statearr_35769_35840[(2)] = null);

(statearr_35769_35840[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (29))){
var inst_35714 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35770_35841 = state_35730__$1;
(statearr_35770_35841[(2)] = inst_35714);

(statearr_35770_35841[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (44))){
var inst_35723 = (state_35730[(2)]);
var state_35730__$1 = (function (){var statearr_35771 = state_35730;
(statearr_35771[(28)] = inst_35723);

return statearr_35771;
})();
var statearr_35772_35842 = state_35730__$1;
(statearr_35772_35842[(2)] = null);

(statearr_35772_35842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (6))){
var inst_35662 = (state_35730[(29)]);
var inst_35661 = cljs.core.deref.call(null,cs);
var inst_35662__$1 = cljs.core.keys.call(null,inst_35661);
var inst_35663 = cljs.core.count.call(null,inst_35662__$1);
var inst_35664 = cljs.core.reset_BANG_.call(null,dctr,inst_35663);
var inst_35669 = cljs.core.seq.call(null,inst_35662__$1);
var inst_35670 = inst_35669;
var inst_35671 = null;
var inst_35672 = (0);
var inst_35673 = (0);
var state_35730__$1 = (function (){var statearr_35773 = state_35730;
(statearr_35773[(9)] = inst_35673);

(statearr_35773[(29)] = inst_35662__$1);

(statearr_35773[(12)] = inst_35671);

(statearr_35773[(30)] = inst_35664);

(statearr_35773[(20)] = inst_35672);

(statearr_35773[(21)] = inst_35670);

return statearr_35773;
})();
var statearr_35774_35843 = state_35730__$1;
(statearr_35774_35843[(2)] = null);

(statearr_35774_35843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (28))){
var inst_35689 = (state_35730[(25)]);
var inst_35670 = (state_35730[(21)]);
var inst_35689__$1 = cljs.core.seq.call(null,inst_35670);
var state_35730__$1 = (function (){var statearr_35775 = state_35730;
(statearr_35775[(25)] = inst_35689__$1);

return statearr_35775;
})();
if(inst_35689__$1){
var statearr_35776_35844 = state_35730__$1;
(statearr_35776_35844[(1)] = (33));

} else {
var statearr_35777_35845 = state_35730__$1;
(statearr_35777_35845[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (25))){
var inst_35673 = (state_35730[(9)]);
var inst_35672 = (state_35730[(20)]);
var inst_35675 = (inst_35673 < inst_35672);
var inst_35676 = inst_35675;
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35676)){
var statearr_35778_35846 = state_35730__$1;
(statearr_35778_35846[(1)] = (27));

} else {
var statearr_35779_35847 = state_35730__$1;
(statearr_35779_35847[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (34))){
var state_35730__$1 = state_35730;
var statearr_35780_35848 = state_35730__$1;
(statearr_35780_35848[(2)] = null);

(statearr_35780_35848[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (17))){
var state_35730__$1 = state_35730;
var statearr_35781_35849 = state_35730__$1;
(statearr_35781_35849[(2)] = null);

(statearr_35781_35849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (3))){
var inst_35728 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35730__$1,inst_35728);
} else {
if((state_val_35731 === (12))){
var inst_35657 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35782_35850 = state_35730__$1;
(statearr_35782_35850[(2)] = inst_35657);

(statearr_35782_35850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (2))){
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35730__$1,(4),ch);
} else {
if((state_val_35731 === (23))){
var state_35730__$1 = state_35730;
var statearr_35783_35851 = state_35730__$1;
(statearr_35783_35851[(2)] = null);

(statearr_35783_35851[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (35))){
var inst_35712 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35784_35852 = state_35730__$1;
(statearr_35784_35852[(2)] = inst_35712);

(statearr_35784_35852[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (19))){
var inst_35629 = (state_35730[(7)]);
var inst_35633 = cljs.core.chunk_first.call(null,inst_35629);
var inst_35634 = cljs.core.chunk_rest.call(null,inst_35629);
var inst_35635 = cljs.core.count.call(null,inst_35633);
var inst_35607 = inst_35634;
var inst_35608 = inst_35633;
var inst_35609 = inst_35635;
var inst_35610 = (0);
var state_35730__$1 = (function (){var statearr_35785 = state_35730;
(statearr_35785[(13)] = inst_35608);

(statearr_35785[(14)] = inst_35610);

(statearr_35785[(15)] = inst_35609);

(statearr_35785[(17)] = inst_35607);

return statearr_35785;
})();
var statearr_35786_35853 = state_35730__$1;
(statearr_35786_35853[(2)] = null);

(statearr_35786_35853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (11))){
var inst_35629 = (state_35730[(7)]);
var inst_35607 = (state_35730[(17)]);
var inst_35629__$1 = cljs.core.seq.call(null,inst_35607);
var state_35730__$1 = (function (){var statearr_35787 = state_35730;
(statearr_35787[(7)] = inst_35629__$1);

return statearr_35787;
})();
if(inst_35629__$1){
var statearr_35788_35854 = state_35730__$1;
(statearr_35788_35854[(1)] = (16));

} else {
var statearr_35789_35855 = state_35730__$1;
(statearr_35789_35855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (9))){
var inst_35659 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35790_35856 = state_35730__$1;
(statearr_35790_35856[(2)] = inst_35659);

(statearr_35790_35856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (5))){
var inst_35605 = cljs.core.deref.call(null,cs);
var inst_35606 = cljs.core.seq.call(null,inst_35605);
var inst_35607 = inst_35606;
var inst_35608 = null;
var inst_35609 = (0);
var inst_35610 = (0);
var state_35730__$1 = (function (){var statearr_35791 = state_35730;
(statearr_35791[(13)] = inst_35608);

(statearr_35791[(14)] = inst_35610);

(statearr_35791[(15)] = inst_35609);

(statearr_35791[(17)] = inst_35607);

return statearr_35791;
})();
var statearr_35792_35857 = state_35730__$1;
(statearr_35792_35857[(2)] = null);

(statearr_35792_35857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (14))){
var state_35730__$1 = state_35730;
var statearr_35793_35858 = state_35730__$1;
(statearr_35793_35858[(2)] = null);

(statearr_35793_35858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (45))){
var inst_35720 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35794_35859 = state_35730__$1;
(statearr_35794_35859[(2)] = inst_35720);

(statearr_35794_35859[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (26))){
var inst_35662 = (state_35730[(29)]);
var inst_35716 = (state_35730[(2)]);
var inst_35717 = cljs.core.seq.call(null,inst_35662);
var state_35730__$1 = (function (){var statearr_35795 = state_35730;
(statearr_35795[(31)] = inst_35716);

return statearr_35795;
})();
if(inst_35717){
var statearr_35796_35860 = state_35730__$1;
(statearr_35796_35860[(1)] = (42));

} else {
var statearr_35797_35861 = state_35730__$1;
(statearr_35797_35861[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (16))){
var inst_35629 = (state_35730[(7)]);
var inst_35631 = cljs.core.chunked_seq_QMARK_.call(null,inst_35629);
var state_35730__$1 = state_35730;
if(inst_35631){
var statearr_35798_35862 = state_35730__$1;
(statearr_35798_35862[(1)] = (19));

} else {
var statearr_35799_35863 = state_35730__$1;
(statearr_35799_35863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (38))){
var inst_35709 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35800_35864 = state_35730__$1;
(statearr_35800_35864[(2)] = inst_35709);

(statearr_35800_35864[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (30))){
var state_35730__$1 = state_35730;
var statearr_35801_35865 = state_35730__$1;
(statearr_35801_35865[(2)] = null);

(statearr_35801_35865[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (10))){
var inst_35608 = (state_35730[(13)]);
var inst_35610 = (state_35730[(14)]);
var inst_35618 = cljs.core._nth.call(null,inst_35608,inst_35610);
var inst_35619 = cljs.core.nth.call(null,inst_35618,(0),null);
var inst_35620 = cljs.core.nth.call(null,inst_35618,(1),null);
var state_35730__$1 = (function (){var statearr_35802 = state_35730;
(statearr_35802[(26)] = inst_35619);

return statearr_35802;
})();
if(cljs.core.truth_(inst_35620)){
var statearr_35803_35866 = state_35730__$1;
(statearr_35803_35866[(1)] = (13));

} else {
var statearr_35804_35867 = state_35730__$1;
(statearr_35804_35867[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (18))){
var inst_35655 = (state_35730[(2)]);
var state_35730__$1 = state_35730;
var statearr_35805_35868 = state_35730__$1;
(statearr_35805_35868[(2)] = inst_35655);

(statearr_35805_35868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (42))){
var state_35730__$1 = state_35730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35730__$1,(45),dchan);
} else {
if((state_val_35731 === (37))){
var inst_35598 = (state_35730[(10)]);
var inst_35689 = (state_35730[(25)]);
var inst_35698 = (state_35730[(23)]);
var inst_35698__$1 = cljs.core.first.call(null,inst_35689);
var inst_35699 = cljs.core.async.put_BANG_.call(null,inst_35698__$1,inst_35598,done);
var state_35730__$1 = (function (){var statearr_35806 = state_35730;
(statearr_35806[(23)] = inst_35698__$1);

return statearr_35806;
})();
if(cljs.core.truth_(inst_35699)){
var statearr_35807_35869 = state_35730__$1;
(statearr_35807_35869[(1)] = (39));

} else {
var statearr_35808_35870 = state_35730__$1;
(statearr_35808_35870[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35731 === (8))){
var inst_35610 = (state_35730[(14)]);
var inst_35609 = (state_35730[(15)]);
var inst_35612 = (inst_35610 < inst_35609);
var inst_35613 = inst_35612;
var state_35730__$1 = state_35730;
if(cljs.core.truth_(inst_35613)){
var statearr_35809_35871 = state_35730__$1;
(statearr_35809_35871[(1)] = (10));

} else {
var statearr_35810_35872 = state_35730__$1;
(statearr_35810_35872[(1)] = (11));

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
});})(c__34465__auto___35818,cs,m,dchan,dctr,done))
;
return ((function (switch__34353__auto__,c__34465__auto___35818,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34354__auto__ = null;
var cljs$core$async$mult_$_state_machine__34354__auto____0 = (function (){
var statearr_35814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35814[(0)] = cljs$core$async$mult_$_state_machine__34354__auto__);

(statearr_35814[(1)] = (1));

return statearr_35814;
});
var cljs$core$async$mult_$_state_machine__34354__auto____1 = (function (state_35730){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_35730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e35815){if((e35815 instanceof Object)){
var ex__34357__auto__ = e35815;
var statearr_35816_35873 = state_35730;
(statearr_35816_35873[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35874 = state_35730;
state_35730 = G__35874;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34354__auto__ = function(state_35730){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34354__auto____1.call(this,state_35730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34354__auto____0;
cljs$core$async$mult_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34354__auto____1;
return cljs$core$async$mult_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___35818,cs,m,dchan,dctr,done))
})();
var state__34467__auto__ = (function (){var statearr_35817 = f__34466__auto__.call(null);
(statearr_35817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___35818);

return statearr_35817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___35818,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args35875 = [];
var len__32629__auto___35878 = arguments.length;
var i__32630__auto___35879 = (0);
while(true){
if((i__32630__auto___35879 < len__32629__auto___35878)){
args35875.push((arguments[i__32630__auto___35879]));

var G__35880 = (i__32630__auto___35879 + (1));
i__32630__auto___35879 = G__35880;
continue;
} else {
}
break;
}

var G__35877 = args35875.length;
switch (G__35877) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35875.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__32184__auto__ = (((m == null))?null:m);
var m__32185__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,m,ch);
} else {
var m__32185__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__32184__auto__ = (((m == null))?null:m);
var m__32185__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,m,ch);
} else {
var m__32185__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__32184__auto__ = (((m == null))?null:m);
var m__32185__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,m);
} else {
var m__32185__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__32184__auto__ = (((m == null))?null:m);
var m__32185__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,m,state_map);
} else {
var m__32185__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__32184__auto__ = (((m == null))?null:m);
var m__32185__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,m,mode);
} else {
var m__32185__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32636__auto__ = [];
var len__32629__auto___35892 = arguments.length;
var i__32630__auto___35893 = (0);
while(true){
if((i__32630__auto___35893 < len__32629__auto___35892)){
args__32636__auto__.push((arguments[i__32630__auto___35893]));

var G__35894 = (i__32630__auto___35893 + (1));
i__32630__auto___35893 = G__35894;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((3) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32637__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35886){
var map__35887 = p__35886;
var map__35887__$1 = ((((!((map__35887 == null)))?((((map__35887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35887):map__35887);
var opts = map__35887__$1;
var statearr_35889_35895 = state;
(statearr_35889_35895[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35887,map__35887__$1,opts){
return (function (val){
var statearr_35890_35896 = state;
(statearr_35890_35896[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35887,map__35887__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35891_35897 = state;
(statearr_35891_35897[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35882){
var G__35883 = cljs.core.first.call(null,seq35882);
var seq35882__$1 = cljs.core.next.call(null,seq35882);
var G__35884 = cljs.core.first.call(null,seq35882__$1);
var seq35882__$2 = cljs.core.next.call(null,seq35882__$1);
var G__35885 = cljs.core.first.call(null,seq35882__$2);
var seq35882__$3 = cljs.core.next.call(null,seq35882__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35883,G__35884,G__35885,seq35882__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36065 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36066){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36066 = meta36066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36067,meta36066__$1){
var self__ = this;
var _36067__$1 = this;
return (new cljs.core.async.t_cljs$core$async36065(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36066__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36067){
var self__ = this;
var _36067__$1 = this;
return self__.meta36066;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36066","meta36066",159882619,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36065";

cljs.core.async.t_cljs$core$async36065.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async36065");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36065 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36065(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36066){
return (new cljs.core.async.t_cljs$core$async36065(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36066));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36065(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34465__auto___36232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___36232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___36232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36169){
var state_val_36170 = (state_36169[(1)]);
if((state_val_36170 === (7))){
var inst_36084 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
var statearr_36171_36233 = state_36169__$1;
(statearr_36171_36233[(2)] = inst_36084);

(statearr_36171_36233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (20))){
var inst_36096 = (state_36169[(7)]);
var state_36169__$1 = state_36169;
var statearr_36172_36234 = state_36169__$1;
(statearr_36172_36234[(2)] = inst_36096);

(statearr_36172_36234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (27))){
var state_36169__$1 = state_36169;
var statearr_36173_36235 = state_36169__$1;
(statearr_36173_36235[(2)] = null);

(statearr_36173_36235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (1))){
var inst_36071 = (state_36169[(8)]);
var inst_36071__$1 = calc_state.call(null);
var inst_36073 = (inst_36071__$1 == null);
var inst_36074 = cljs.core.not.call(null,inst_36073);
var state_36169__$1 = (function (){var statearr_36174 = state_36169;
(statearr_36174[(8)] = inst_36071__$1);

return statearr_36174;
})();
if(inst_36074){
var statearr_36175_36236 = state_36169__$1;
(statearr_36175_36236[(1)] = (2));

} else {
var statearr_36176_36237 = state_36169__$1;
(statearr_36176_36237[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (24))){
var inst_36120 = (state_36169[(9)]);
var inst_36143 = (state_36169[(10)]);
var inst_36129 = (state_36169[(11)]);
var inst_36143__$1 = inst_36120.call(null,inst_36129);
var state_36169__$1 = (function (){var statearr_36177 = state_36169;
(statearr_36177[(10)] = inst_36143__$1);

return statearr_36177;
})();
if(cljs.core.truth_(inst_36143__$1)){
var statearr_36178_36238 = state_36169__$1;
(statearr_36178_36238[(1)] = (29));

} else {
var statearr_36179_36239 = state_36169__$1;
(statearr_36179_36239[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (4))){
var inst_36087 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
if(cljs.core.truth_(inst_36087)){
var statearr_36180_36240 = state_36169__$1;
(statearr_36180_36240[(1)] = (8));

} else {
var statearr_36181_36241 = state_36169__$1;
(statearr_36181_36241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (15))){
var inst_36114 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
if(cljs.core.truth_(inst_36114)){
var statearr_36182_36242 = state_36169__$1;
(statearr_36182_36242[(1)] = (19));

} else {
var statearr_36183_36243 = state_36169__$1;
(statearr_36183_36243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (21))){
var inst_36119 = (state_36169[(12)]);
var inst_36119__$1 = (state_36169[(2)]);
var inst_36120 = cljs.core.get.call(null,inst_36119__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36121 = cljs.core.get.call(null,inst_36119__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36122 = cljs.core.get.call(null,inst_36119__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36169__$1 = (function (){var statearr_36184 = state_36169;
(statearr_36184[(9)] = inst_36120);

(statearr_36184[(12)] = inst_36119__$1);

(statearr_36184[(13)] = inst_36121);

return statearr_36184;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36169__$1,(22),inst_36122);
} else {
if((state_val_36170 === (31))){
var inst_36151 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
if(cljs.core.truth_(inst_36151)){
var statearr_36185_36244 = state_36169__$1;
(statearr_36185_36244[(1)] = (32));

} else {
var statearr_36186_36245 = state_36169__$1;
(statearr_36186_36245[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (32))){
var inst_36128 = (state_36169[(14)]);
var state_36169__$1 = state_36169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36169__$1,(35),out,inst_36128);
} else {
if((state_val_36170 === (33))){
var inst_36119 = (state_36169[(12)]);
var inst_36096 = inst_36119;
var state_36169__$1 = (function (){var statearr_36187 = state_36169;
(statearr_36187[(7)] = inst_36096);

return statearr_36187;
})();
var statearr_36188_36246 = state_36169__$1;
(statearr_36188_36246[(2)] = null);

(statearr_36188_36246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (13))){
var inst_36096 = (state_36169[(7)]);
var inst_36103 = inst_36096.cljs$lang$protocol_mask$partition0$;
var inst_36104 = (inst_36103 & (64));
var inst_36105 = inst_36096.cljs$core$ISeq$;
var inst_36106 = (cljs.core.PROTOCOL_SENTINEL === inst_36105);
var inst_36107 = (inst_36104) || (inst_36106);
var state_36169__$1 = state_36169;
if(cljs.core.truth_(inst_36107)){
var statearr_36189_36247 = state_36169__$1;
(statearr_36189_36247[(1)] = (16));

} else {
var statearr_36190_36248 = state_36169__$1;
(statearr_36190_36248[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (22))){
var inst_36129 = (state_36169[(11)]);
var inst_36128 = (state_36169[(14)]);
var inst_36127 = (state_36169[(2)]);
var inst_36128__$1 = cljs.core.nth.call(null,inst_36127,(0),null);
var inst_36129__$1 = cljs.core.nth.call(null,inst_36127,(1),null);
var inst_36130 = (inst_36128__$1 == null);
var inst_36131 = cljs.core._EQ_.call(null,inst_36129__$1,change);
var inst_36132 = (inst_36130) || (inst_36131);
var state_36169__$1 = (function (){var statearr_36191 = state_36169;
(statearr_36191[(11)] = inst_36129__$1);

(statearr_36191[(14)] = inst_36128__$1);

return statearr_36191;
})();
if(cljs.core.truth_(inst_36132)){
var statearr_36192_36249 = state_36169__$1;
(statearr_36192_36249[(1)] = (23));

} else {
var statearr_36193_36250 = state_36169__$1;
(statearr_36193_36250[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (36))){
var inst_36119 = (state_36169[(12)]);
var inst_36096 = inst_36119;
var state_36169__$1 = (function (){var statearr_36194 = state_36169;
(statearr_36194[(7)] = inst_36096);

return statearr_36194;
})();
var statearr_36195_36251 = state_36169__$1;
(statearr_36195_36251[(2)] = null);

(statearr_36195_36251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (29))){
var inst_36143 = (state_36169[(10)]);
var state_36169__$1 = state_36169;
var statearr_36196_36252 = state_36169__$1;
(statearr_36196_36252[(2)] = inst_36143);

(statearr_36196_36252[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (6))){
var state_36169__$1 = state_36169;
var statearr_36197_36253 = state_36169__$1;
(statearr_36197_36253[(2)] = false);

(statearr_36197_36253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (28))){
var inst_36139 = (state_36169[(2)]);
var inst_36140 = calc_state.call(null);
var inst_36096 = inst_36140;
var state_36169__$1 = (function (){var statearr_36198 = state_36169;
(statearr_36198[(15)] = inst_36139);

(statearr_36198[(7)] = inst_36096);

return statearr_36198;
})();
var statearr_36199_36254 = state_36169__$1;
(statearr_36199_36254[(2)] = null);

(statearr_36199_36254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (25))){
var inst_36165 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
var statearr_36200_36255 = state_36169__$1;
(statearr_36200_36255[(2)] = inst_36165);

(statearr_36200_36255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (34))){
var inst_36163 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
var statearr_36201_36256 = state_36169__$1;
(statearr_36201_36256[(2)] = inst_36163);

(statearr_36201_36256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (17))){
var state_36169__$1 = state_36169;
var statearr_36202_36257 = state_36169__$1;
(statearr_36202_36257[(2)] = false);

(statearr_36202_36257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (3))){
var state_36169__$1 = state_36169;
var statearr_36203_36258 = state_36169__$1;
(statearr_36203_36258[(2)] = false);

(statearr_36203_36258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (12))){
var inst_36167 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36169__$1,inst_36167);
} else {
if((state_val_36170 === (2))){
var inst_36071 = (state_36169[(8)]);
var inst_36076 = inst_36071.cljs$lang$protocol_mask$partition0$;
var inst_36077 = (inst_36076 & (64));
var inst_36078 = inst_36071.cljs$core$ISeq$;
var inst_36079 = (cljs.core.PROTOCOL_SENTINEL === inst_36078);
var inst_36080 = (inst_36077) || (inst_36079);
var state_36169__$1 = state_36169;
if(cljs.core.truth_(inst_36080)){
var statearr_36204_36259 = state_36169__$1;
(statearr_36204_36259[(1)] = (5));

} else {
var statearr_36205_36260 = state_36169__$1;
(statearr_36205_36260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (23))){
var inst_36128 = (state_36169[(14)]);
var inst_36134 = (inst_36128 == null);
var state_36169__$1 = state_36169;
if(cljs.core.truth_(inst_36134)){
var statearr_36206_36261 = state_36169__$1;
(statearr_36206_36261[(1)] = (26));

} else {
var statearr_36207_36262 = state_36169__$1;
(statearr_36207_36262[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (35))){
var inst_36154 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
if(cljs.core.truth_(inst_36154)){
var statearr_36208_36263 = state_36169__$1;
(statearr_36208_36263[(1)] = (36));

} else {
var statearr_36209_36264 = state_36169__$1;
(statearr_36209_36264[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (19))){
var inst_36096 = (state_36169[(7)]);
var inst_36116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36096);
var state_36169__$1 = state_36169;
var statearr_36210_36265 = state_36169__$1;
(statearr_36210_36265[(2)] = inst_36116);

(statearr_36210_36265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (11))){
var inst_36096 = (state_36169[(7)]);
var inst_36100 = (inst_36096 == null);
var inst_36101 = cljs.core.not.call(null,inst_36100);
var state_36169__$1 = state_36169;
if(inst_36101){
var statearr_36211_36266 = state_36169__$1;
(statearr_36211_36266[(1)] = (13));

} else {
var statearr_36212_36267 = state_36169__$1;
(statearr_36212_36267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (9))){
var inst_36071 = (state_36169[(8)]);
var state_36169__$1 = state_36169;
var statearr_36213_36268 = state_36169__$1;
(statearr_36213_36268[(2)] = inst_36071);

(statearr_36213_36268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (5))){
var state_36169__$1 = state_36169;
var statearr_36214_36269 = state_36169__$1;
(statearr_36214_36269[(2)] = true);

(statearr_36214_36269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (14))){
var state_36169__$1 = state_36169;
var statearr_36215_36270 = state_36169__$1;
(statearr_36215_36270[(2)] = false);

(statearr_36215_36270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (26))){
var inst_36129 = (state_36169[(11)]);
var inst_36136 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36129);
var state_36169__$1 = state_36169;
var statearr_36216_36271 = state_36169__$1;
(statearr_36216_36271[(2)] = inst_36136);

(statearr_36216_36271[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (16))){
var state_36169__$1 = state_36169;
var statearr_36217_36272 = state_36169__$1;
(statearr_36217_36272[(2)] = true);

(statearr_36217_36272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (38))){
var inst_36159 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
var statearr_36218_36273 = state_36169__$1;
(statearr_36218_36273[(2)] = inst_36159);

(statearr_36218_36273[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (30))){
var inst_36120 = (state_36169[(9)]);
var inst_36129 = (state_36169[(11)]);
var inst_36121 = (state_36169[(13)]);
var inst_36146 = cljs.core.empty_QMARK_.call(null,inst_36120);
var inst_36147 = inst_36121.call(null,inst_36129);
var inst_36148 = cljs.core.not.call(null,inst_36147);
var inst_36149 = (inst_36146) && (inst_36148);
var state_36169__$1 = state_36169;
var statearr_36219_36274 = state_36169__$1;
(statearr_36219_36274[(2)] = inst_36149);

(statearr_36219_36274[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (10))){
var inst_36071 = (state_36169[(8)]);
var inst_36092 = (state_36169[(2)]);
var inst_36093 = cljs.core.get.call(null,inst_36092,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36094 = cljs.core.get.call(null,inst_36092,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36095 = cljs.core.get.call(null,inst_36092,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36096 = inst_36071;
var state_36169__$1 = (function (){var statearr_36220 = state_36169;
(statearr_36220[(7)] = inst_36096);

(statearr_36220[(16)] = inst_36093);

(statearr_36220[(17)] = inst_36094);

(statearr_36220[(18)] = inst_36095);

return statearr_36220;
})();
var statearr_36221_36275 = state_36169__$1;
(statearr_36221_36275[(2)] = null);

(statearr_36221_36275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (18))){
var inst_36111 = (state_36169[(2)]);
var state_36169__$1 = state_36169;
var statearr_36222_36276 = state_36169__$1;
(statearr_36222_36276[(2)] = inst_36111);

(statearr_36222_36276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (37))){
var state_36169__$1 = state_36169;
var statearr_36223_36277 = state_36169__$1;
(statearr_36223_36277[(2)] = null);

(statearr_36223_36277[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36170 === (8))){
var inst_36071 = (state_36169[(8)]);
var inst_36089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36071);
var state_36169__$1 = state_36169;
var statearr_36224_36278 = state_36169__$1;
(statearr_36224_36278[(2)] = inst_36089);

(statearr_36224_36278[(1)] = (10));


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
});})(c__34465__auto___36232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34353__auto__,c__34465__auto___36232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34354__auto__ = null;
var cljs$core$async$mix_$_state_machine__34354__auto____0 = (function (){
var statearr_36228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36228[(0)] = cljs$core$async$mix_$_state_machine__34354__auto__);

(statearr_36228[(1)] = (1));

return statearr_36228;
});
var cljs$core$async$mix_$_state_machine__34354__auto____1 = (function (state_36169){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_36169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e36229){if((e36229 instanceof Object)){
var ex__34357__auto__ = e36229;
var statearr_36230_36279 = state_36169;
(statearr_36230_36279[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36280 = state_36169;
state_36169 = G__36280;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34354__auto__ = function(state_36169){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34354__auto____1.call(this,state_36169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34354__auto____0;
cljs$core$async$mix_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34354__auto____1;
return cljs$core$async$mix_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___36232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34467__auto__ = (function (){var statearr_36231 = f__34466__auto__.call(null);
(statearr_36231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___36232);

return statearr_36231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___36232,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__32184__auto__ = (((p == null))?null:p);
var m__32185__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__32185__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__32184__auto__ = (((p == null))?null:p);
var m__32185__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,p,v,ch);
} else {
var m__32185__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args36281 = [];
var len__32629__auto___36284 = arguments.length;
var i__32630__auto___36285 = (0);
while(true){
if((i__32630__auto___36285 < len__32629__auto___36284)){
args36281.push((arguments[i__32630__auto___36285]));

var G__36286 = (i__32630__auto___36285 + (1));
i__32630__auto___36285 = G__36286;
continue;
} else {
}
break;
}

var G__36283 = args36281.length;
switch (G__36283) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36281.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__32184__auto__ = (((p == null))?null:p);
var m__32185__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,p);
} else {
var m__32185__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__32184__auto__ = (((p == null))?null:p);
var m__32185__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32184__auto__)]);
if(!((m__32185__auto__ == null))){
return m__32185__auto__.call(null,p,v);
} else {
var m__32185__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__32185__auto____$1 == null))){
return m__32185__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args36289 = [];
var len__32629__auto___36414 = arguments.length;
var i__32630__auto___36415 = (0);
while(true){
if((i__32630__auto___36415 < len__32629__auto___36414)){
args36289.push((arguments[i__32630__auto___36415]));

var G__36416 = (i__32630__auto___36415 + (1));
i__32630__auto___36415 = G__36416;
continue;
} else {
}
break;
}

var G__36291 = args36289.length;
switch (G__36291) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36289.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__31516__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__31516__auto__,mults){
return (function (p1__36288_SHARP_){
if(cljs.core.truth_(p1__36288_SHARP_.call(null,topic))){
return p1__36288_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36288_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__31516__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36292 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36293){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36293 = meta36293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36294,meta36293__$1){
var self__ = this;
var _36294__$1 = this;
return (new cljs.core.async.t_cljs$core$async36292(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36293__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36294){
var self__ = this;
var _36294__$1 = this;
return self__.meta36293;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36292.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36293","meta36293",1467203230,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36292";

cljs.core.async.t_cljs$core$async36292.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async36292");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36292 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36292(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36293){
return (new cljs.core.async.t_cljs$core$async36292(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36293));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36292(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34465__auto___36418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___36418,mults,ensure_mult,p){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___36418,mults,ensure_mult,p){
return (function (state_36366){
var state_val_36367 = (state_36366[(1)]);
if((state_val_36367 === (7))){
var inst_36362 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36368_36419 = state_36366__$1;
(statearr_36368_36419[(2)] = inst_36362);

(statearr_36368_36419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (20))){
var state_36366__$1 = state_36366;
var statearr_36369_36420 = state_36366__$1;
(statearr_36369_36420[(2)] = null);

(statearr_36369_36420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (1))){
var state_36366__$1 = state_36366;
var statearr_36370_36421 = state_36366__$1;
(statearr_36370_36421[(2)] = null);

(statearr_36370_36421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (24))){
var inst_36345 = (state_36366[(7)]);
var inst_36354 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36345);
var state_36366__$1 = state_36366;
var statearr_36371_36422 = state_36366__$1;
(statearr_36371_36422[(2)] = inst_36354);

(statearr_36371_36422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (4))){
var inst_36297 = (state_36366[(8)]);
var inst_36297__$1 = (state_36366[(2)]);
var inst_36298 = (inst_36297__$1 == null);
var state_36366__$1 = (function (){var statearr_36372 = state_36366;
(statearr_36372[(8)] = inst_36297__$1);

return statearr_36372;
})();
if(cljs.core.truth_(inst_36298)){
var statearr_36373_36423 = state_36366__$1;
(statearr_36373_36423[(1)] = (5));

} else {
var statearr_36374_36424 = state_36366__$1;
(statearr_36374_36424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (15))){
var inst_36339 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36375_36425 = state_36366__$1;
(statearr_36375_36425[(2)] = inst_36339);

(statearr_36375_36425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (21))){
var inst_36359 = (state_36366[(2)]);
var state_36366__$1 = (function (){var statearr_36376 = state_36366;
(statearr_36376[(9)] = inst_36359);

return statearr_36376;
})();
var statearr_36377_36426 = state_36366__$1;
(statearr_36377_36426[(2)] = null);

(statearr_36377_36426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (13))){
var inst_36321 = (state_36366[(10)]);
var inst_36323 = cljs.core.chunked_seq_QMARK_.call(null,inst_36321);
var state_36366__$1 = state_36366;
if(inst_36323){
var statearr_36378_36427 = state_36366__$1;
(statearr_36378_36427[(1)] = (16));

} else {
var statearr_36379_36428 = state_36366__$1;
(statearr_36379_36428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (22))){
var inst_36351 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
if(cljs.core.truth_(inst_36351)){
var statearr_36380_36429 = state_36366__$1;
(statearr_36380_36429[(1)] = (23));

} else {
var statearr_36381_36430 = state_36366__$1;
(statearr_36381_36430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (6))){
var inst_36347 = (state_36366[(11)]);
var inst_36345 = (state_36366[(7)]);
var inst_36297 = (state_36366[(8)]);
var inst_36345__$1 = topic_fn.call(null,inst_36297);
var inst_36346 = cljs.core.deref.call(null,mults);
var inst_36347__$1 = cljs.core.get.call(null,inst_36346,inst_36345__$1);
var state_36366__$1 = (function (){var statearr_36382 = state_36366;
(statearr_36382[(11)] = inst_36347__$1);

(statearr_36382[(7)] = inst_36345__$1);

return statearr_36382;
})();
if(cljs.core.truth_(inst_36347__$1)){
var statearr_36383_36431 = state_36366__$1;
(statearr_36383_36431[(1)] = (19));

} else {
var statearr_36384_36432 = state_36366__$1;
(statearr_36384_36432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (25))){
var inst_36356 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36385_36433 = state_36366__$1;
(statearr_36385_36433[(2)] = inst_36356);

(statearr_36385_36433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (17))){
var inst_36321 = (state_36366[(10)]);
var inst_36330 = cljs.core.first.call(null,inst_36321);
var inst_36331 = cljs.core.async.muxch_STAR_.call(null,inst_36330);
var inst_36332 = cljs.core.async.close_BANG_.call(null,inst_36331);
var inst_36333 = cljs.core.next.call(null,inst_36321);
var inst_36307 = inst_36333;
var inst_36308 = null;
var inst_36309 = (0);
var inst_36310 = (0);
var state_36366__$1 = (function (){var statearr_36386 = state_36366;
(statearr_36386[(12)] = inst_36307);

(statearr_36386[(13)] = inst_36309);

(statearr_36386[(14)] = inst_36332);

(statearr_36386[(15)] = inst_36310);

(statearr_36386[(16)] = inst_36308);

return statearr_36386;
})();
var statearr_36387_36434 = state_36366__$1;
(statearr_36387_36434[(2)] = null);

(statearr_36387_36434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (3))){
var inst_36364 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36366__$1,inst_36364);
} else {
if((state_val_36367 === (12))){
var inst_36341 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36388_36435 = state_36366__$1;
(statearr_36388_36435[(2)] = inst_36341);

(statearr_36388_36435[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (2))){
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(4),ch);
} else {
if((state_val_36367 === (23))){
var state_36366__$1 = state_36366;
var statearr_36389_36436 = state_36366__$1;
(statearr_36389_36436[(2)] = null);

(statearr_36389_36436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (19))){
var inst_36347 = (state_36366[(11)]);
var inst_36297 = (state_36366[(8)]);
var inst_36349 = cljs.core.async.muxch_STAR_.call(null,inst_36347);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36366__$1,(22),inst_36349,inst_36297);
} else {
if((state_val_36367 === (11))){
var inst_36307 = (state_36366[(12)]);
var inst_36321 = (state_36366[(10)]);
var inst_36321__$1 = cljs.core.seq.call(null,inst_36307);
var state_36366__$1 = (function (){var statearr_36390 = state_36366;
(statearr_36390[(10)] = inst_36321__$1);

return statearr_36390;
})();
if(inst_36321__$1){
var statearr_36391_36437 = state_36366__$1;
(statearr_36391_36437[(1)] = (13));

} else {
var statearr_36392_36438 = state_36366__$1;
(statearr_36392_36438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (9))){
var inst_36343 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36393_36439 = state_36366__$1;
(statearr_36393_36439[(2)] = inst_36343);

(statearr_36393_36439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (5))){
var inst_36304 = cljs.core.deref.call(null,mults);
var inst_36305 = cljs.core.vals.call(null,inst_36304);
var inst_36306 = cljs.core.seq.call(null,inst_36305);
var inst_36307 = inst_36306;
var inst_36308 = null;
var inst_36309 = (0);
var inst_36310 = (0);
var state_36366__$1 = (function (){var statearr_36394 = state_36366;
(statearr_36394[(12)] = inst_36307);

(statearr_36394[(13)] = inst_36309);

(statearr_36394[(15)] = inst_36310);

(statearr_36394[(16)] = inst_36308);

return statearr_36394;
})();
var statearr_36395_36440 = state_36366__$1;
(statearr_36395_36440[(2)] = null);

(statearr_36395_36440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (14))){
var state_36366__$1 = state_36366;
var statearr_36399_36441 = state_36366__$1;
(statearr_36399_36441[(2)] = null);

(statearr_36399_36441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (16))){
var inst_36321 = (state_36366[(10)]);
var inst_36325 = cljs.core.chunk_first.call(null,inst_36321);
var inst_36326 = cljs.core.chunk_rest.call(null,inst_36321);
var inst_36327 = cljs.core.count.call(null,inst_36325);
var inst_36307 = inst_36326;
var inst_36308 = inst_36325;
var inst_36309 = inst_36327;
var inst_36310 = (0);
var state_36366__$1 = (function (){var statearr_36400 = state_36366;
(statearr_36400[(12)] = inst_36307);

(statearr_36400[(13)] = inst_36309);

(statearr_36400[(15)] = inst_36310);

(statearr_36400[(16)] = inst_36308);

return statearr_36400;
})();
var statearr_36401_36442 = state_36366__$1;
(statearr_36401_36442[(2)] = null);

(statearr_36401_36442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (10))){
var inst_36307 = (state_36366[(12)]);
var inst_36309 = (state_36366[(13)]);
var inst_36310 = (state_36366[(15)]);
var inst_36308 = (state_36366[(16)]);
var inst_36315 = cljs.core._nth.call(null,inst_36308,inst_36310);
var inst_36316 = cljs.core.async.muxch_STAR_.call(null,inst_36315);
var inst_36317 = cljs.core.async.close_BANG_.call(null,inst_36316);
var inst_36318 = (inst_36310 + (1));
var tmp36396 = inst_36307;
var tmp36397 = inst_36309;
var tmp36398 = inst_36308;
var inst_36307__$1 = tmp36396;
var inst_36308__$1 = tmp36398;
var inst_36309__$1 = tmp36397;
var inst_36310__$1 = inst_36318;
var state_36366__$1 = (function (){var statearr_36402 = state_36366;
(statearr_36402[(12)] = inst_36307__$1);

(statearr_36402[(13)] = inst_36309__$1);

(statearr_36402[(15)] = inst_36310__$1);

(statearr_36402[(16)] = inst_36308__$1);

(statearr_36402[(17)] = inst_36317);

return statearr_36402;
})();
var statearr_36403_36443 = state_36366__$1;
(statearr_36403_36443[(2)] = null);

(statearr_36403_36443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (18))){
var inst_36336 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36404_36444 = state_36366__$1;
(statearr_36404_36444[(2)] = inst_36336);

(statearr_36404_36444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (8))){
var inst_36309 = (state_36366[(13)]);
var inst_36310 = (state_36366[(15)]);
var inst_36312 = (inst_36310 < inst_36309);
var inst_36313 = inst_36312;
var state_36366__$1 = state_36366;
if(cljs.core.truth_(inst_36313)){
var statearr_36405_36445 = state_36366__$1;
(statearr_36405_36445[(1)] = (10));

} else {
var statearr_36406_36446 = state_36366__$1;
(statearr_36406_36446[(1)] = (11));

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
});})(c__34465__auto___36418,mults,ensure_mult,p))
;
return ((function (switch__34353__auto__,c__34465__auto___36418,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_36410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36410[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_36410[(1)] = (1));

return statearr_36410;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_36366){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_36366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e36411){if((e36411 instanceof Object)){
var ex__34357__auto__ = e36411;
var statearr_36412_36447 = state_36366;
(statearr_36412_36447[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36448 = state_36366;
state_36366 = G__36448;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_36366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_36366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___36418,mults,ensure_mult,p))
})();
var state__34467__auto__ = (function (){var statearr_36413 = f__34466__auto__.call(null);
(statearr_36413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___36418);

return statearr_36413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___36418,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args36449 = [];
var len__32629__auto___36452 = arguments.length;
var i__32630__auto___36453 = (0);
while(true){
if((i__32630__auto___36453 < len__32629__auto___36452)){
args36449.push((arguments[i__32630__auto___36453]));

var G__36454 = (i__32630__auto___36453 + (1));
i__32630__auto___36453 = G__36454;
continue;
} else {
}
break;
}

var G__36451 = args36449.length;
switch (G__36451) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36449.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args36456 = [];
var len__32629__auto___36459 = arguments.length;
var i__32630__auto___36460 = (0);
while(true){
if((i__32630__auto___36460 < len__32629__auto___36459)){
args36456.push((arguments[i__32630__auto___36460]));

var G__36461 = (i__32630__auto___36460 + (1));
i__32630__auto___36460 = G__36461;
continue;
} else {
}
break;
}

var G__36458 = args36456.length;
switch (G__36458) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36456.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args36463 = [];
var len__32629__auto___36534 = arguments.length;
var i__32630__auto___36535 = (0);
while(true){
if((i__32630__auto___36535 < len__32629__auto___36534)){
args36463.push((arguments[i__32630__auto___36535]));

var G__36536 = (i__32630__auto___36535 + (1));
i__32630__auto___36535 = G__36536;
continue;
} else {
}
break;
}

var G__36465 = args36463.length;
switch (G__36465) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36463.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34465__auto___36538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___36538,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___36538,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36504){
var state_val_36505 = (state_36504[(1)]);
if((state_val_36505 === (7))){
var state_36504__$1 = state_36504;
var statearr_36506_36539 = state_36504__$1;
(statearr_36506_36539[(2)] = null);

(statearr_36506_36539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (1))){
var state_36504__$1 = state_36504;
var statearr_36507_36540 = state_36504__$1;
(statearr_36507_36540[(2)] = null);

(statearr_36507_36540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (4))){
var inst_36468 = (state_36504[(7)]);
var inst_36470 = (inst_36468 < cnt);
var state_36504__$1 = state_36504;
if(cljs.core.truth_(inst_36470)){
var statearr_36508_36541 = state_36504__$1;
(statearr_36508_36541[(1)] = (6));

} else {
var statearr_36509_36542 = state_36504__$1;
(statearr_36509_36542[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (15))){
var inst_36500 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36510_36543 = state_36504__$1;
(statearr_36510_36543[(2)] = inst_36500);

(statearr_36510_36543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (13))){
var inst_36493 = cljs.core.async.close_BANG_.call(null,out);
var state_36504__$1 = state_36504;
var statearr_36511_36544 = state_36504__$1;
(statearr_36511_36544[(2)] = inst_36493);

(statearr_36511_36544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (6))){
var state_36504__$1 = state_36504;
var statearr_36512_36545 = state_36504__$1;
(statearr_36512_36545[(2)] = null);

(statearr_36512_36545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (3))){
var inst_36502 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36504__$1,inst_36502);
} else {
if((state_val_36505 === (12))){
var inst_36490 = (state_36504[(8)]);
var inst_36490__$1 = (state_36504[(2)]);
var inst_36491 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36490__$1);
var state_36504__$1 = (function (){var statearr_36513 = state_36504;
(statearr_36513[(8)] = inst_36490__$1);

return statearr_36513;
})();
if(cljs.core.truth_(inst_36491)){
var statearr_36514_36546 = state_36504__$1;
(statearr_36514_36546[(1)] = (13));

} else {
var statearr_36515_36547 = state_36504__$1;
(statearr_36515_36547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (2))){
var inst_36467 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36468 = (0);
var state_36504__$1 = (function (){var statearr_36516 = state_36504;
(statearr_36516[(9)] = inst_36467);

(statearr_36516[(7)] = inst_36468);

return statearr_36516;
})();
var statearr_36517_36548 = state_36504__$1;
(statearr_36517_36548[(2)] = null);

(statearr_36517_36548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (11))){
var inst_36468 = (state_36504[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36504,(10),Object,null,(9));
var inst_36477 = chs__$1.call(null,inst_36468);
var inst_36478 = done.call(null,inst_36468);
var inst_36479 = cljs.core.async.take_BANG_.call(null,inst_36477,inst_36478);
var state_36504__$1 = state_36504;
var statearr_36518_36549 = state_36504__$1;
(statearr_36518_36549[(2)] = inst_36479);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36504__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (9))){
var inst_36468 = (state_36504[(7)]);
var inst_36481 = (state_36504[(2)]);
var inst_36482 = (inst_36468 + (1));
var inst_36468__$1 = inst_36482;
var state_36504__$1 = (function (){var statearr_36519 = state_36504;
(statearr_36519[(10)] = inst_36481);

(statearr_36519[(7)] = inst_36468__$1);

return statearr_36519;
})();
var statearr_36520_36550 = state_36504__$1;
(statearr_36520_36550[(2)] = null);

(statearr_36520_36550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (5))){
var inst_36488 = (state_36504[(2)]);
var state_36504__$1 = (function (){var statearr_36521 = state_36504;
(statearr_36521[(11)] = inst_36488);

return statearr_36521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36504__$1,(12),dchan);
} else {
if((state_val_36505 === (14))){
var inst_36490 = (state_36504[(8)]);
var inst_36495 = cljs.core.apply.call(null,f,inst_36490);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36504__$1,(16),out,inst_36495);
} else {
if((state_val_36505 === (16))){
var inst_36497 = (state_36504[(2)]);
var state_36504__$1 = (function (){var statearr_36522 = state_36504;
(statearr_36522[(12)] = inst_36497);

return statearr_36522;
})();
var statearr_36523_36551 = state_36504__$1;
(statearr_36523_36551[(2)] = null);

(statearr_36523_36551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (10))){
var inst_36472 = (state_36504[(2)]);
var inst_36473 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36504__$1 = (function (){var statearr_36524 = state_36504;
(statearr_36524[(13)] = inst_36472);

return statearr_36524;
})();
var statearr_36525_36552 = state_36504__$1;
(statearr_36525_36552[(2)] = inst_36473);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36504__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (8))){
var inst_36486 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36526_36553 = state_36504__$1;
(statearr_36526_36553[(2)] = inst_36486);

(statearr_36526_36553[(1)] = (5));


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
});})(c__34465__auto___36538,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34353__auto__,c__34465__auto___36538,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_36530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36530[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_36530[(1)] = (1));

return statearr_36530;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_36504){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_36504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e36531){if((e36531 instanceof Object)){
var ex__34357__auto__ = e36531;
var statearr_36532_36554 = state_36504;
(statearr_36532_36554[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36555 = state_36504;
state_36504 = G__36555;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_36504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_36504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___36538,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34467__auto__ = (function (){var statearr_36533 = f__34466__auto__.call(null);
(statearr_36533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___36538);

return statearr_36533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___36538,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args36557 = [];
var len__32629__auto___36615 = arguments.length;
var i__32630__auto___36616 = (0);
while(true){
if((i__32630__auto___36616 < len__32629__auto___36615)){
args36557.push((arguments[i__32630__auto___36616]));

var G__36617 = (i__32630__auto___36616 + (1));
i__32630__auto___36616 = G__36617;
continue;
} else {
}
break;
}

var G__36559 = args36557.length;
switch (G__36559) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36557.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34465__auto___36619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___36619,out){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___36619,out){
return (function (state_36591){
var state_val_36592 = (state_36591[(1)]);
if((state_val_36592 === (7))){
var inst_36571 = (state_36591[(7)]);
var inst_36570 = (state_36591[(8)]);
var inst_36570__$1 = (state_36591[(2)]);
var inst_36571__$1 = cljs.core.nth.call(null,inst_36570__$1,(0),null);
var inst_36572 = cljs.core.nth.call(null,inst_36570__$1,(1),null);
var inst_36573 = (inst_36571__$1 == null);
var state_36591__$1 = (function (){var statearr_36593 = state_36591;
(statearr_36593[(7)] = inst_36571__$1);

(statearr_36593[(9)] = inst_36572);

(statearr_36593[(8)] = inst_36570__$1);

return statearr_36593;
})();
if(cljs.core.truth_(inst_36573)){
var statearr_36594_36620 = state_36591__$1;
(statearr_36594_36620[(1)] = (8));

} else {
var statearr_36595_36621 = state_36591__$1;
(statearr_36595_36621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36592 === (1))){
var inst_36560 = cljs.core.vec.call(null,chs);
var inst_36561 = inst_36560;
var state_36591__$1 = (function (){var statearr_36596 = state_36591;
(statearr_36596[(10)] = inst_36561);

return statearr_36596;
})();
var statearr_36597_36622 = state_36591__$1;
(statearr_36597_36622[(2)] = null);

(statearr_36597_36622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36592 === (4))){
var inst_36561 = (state_36591[(10)]);
var state_36591__$1 = state_36591;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36591__$1,(7),inst_36561);
} else {
if((state_val_36592 === (6))){
var inst_36587 = (state_36591[(2)]);
var state_36591__$1 = state_36591;
var statearr_36598_36623 = state_36591__$1;
(statearr_36598_36623[(2)] = inst_36587);

(statearr_36598_36623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36592 === (3))){
var inst_36589 = (state_36591[(2)]);
var state_36591__$1 = state_36591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36591__$1,inst_36589);
} else {
if((state_val_36592 === (2))){
var inst_36561 = (state_36591[(10)]);
var inst_36563 = cljs.core.count.call(null,inst_36561);
var inst_36564 = (inst_36563 > (0));
var state_36591__$1 = state_36591;
if(cljs.core.truth_(inst_36564)){
var statearr_36600_36624 = state_36591__$1;
(statearr_36600_36624[(1)] = (4));

} else {
var statearr_36601_36625 = state_36591__$1;
(statearr_36601_36625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36592 === (11))){
var inst_36561 = (state_36591[(10)]);
var inst_36580 = (state_36591[(2)]);
var tmp36599 = inst_36561;
var inst_36561__$1 = tmp36599;
var state_36591__$1 = (function (){var statearr_36602 = state_36591;
(statearr_36602[(10)] = inst_36561__$1);

(statearr_36602[(11)] = inst_36580);

return statearr_36602;
})();
var statearr_36603_36626 = state_36591__$1;
(statearr_36603_36626[(2)] = null);

(statearr_36603_36626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36592 === (9))){
var inst_36571 = (state_36591[(7)]);
var state_36591__$1 = state_36591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36591__$1,(11),out,inst_36571);
} else {
if((state_val_36592 === (5))){
var inst_36585 = cljs.core.async.close_BANG_.call(null,out);
var state_36591__$1 = state_36591;
var statearr_36604_36627 = state_36591__$1;
(statearr_36604_36627[(2)] = inst_36585);

(statearr_36604_36627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36592 === (10))){
var inst_36583 = (state_36591[(2)]);
var state_36591__$1 = state_36591;
var statearr_36605_36628 = state_36591__$1;
(statearr_36605_36628[(2)] = inst_36583);

(statearr_36605_36628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36592 === (8))){
var inst_36571 = (state_36591[(7)]);
var inst_36561 = (state_36591[(10)]);
var inst_36572 = (state_36591[(9)]);
var inst_36570 = (state_36591[(8)]);
var inst_36575 = (function (){var cs = inst_36561;
var vec__36566 = inst_36570;
var v = inst_36571;
var c = inst_36572;
return ((function (cs,vec__36566,v,c,inst_36571,inst_36561,inst_36572,inst_36570,state_val_36592,c__34465__auto___36619,out){
return (function (p1__36556_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36556_SHARP_);
});
;})(cs,vec__36566,v,c,inst_36571,inst_36561,inst_36572,inst_36570,state_val_36592,c__34465__auto___36619,out))
})();
var inst_36576 = cljs.core.filterv.call(null,inst_36575,inst_36561);
var inst_36561__$1 = inst_36576;
var state_36591__$1 = (function (){var statearr_36606 = state_36591;
(statearr_36606[(10)] = inst_36561__$1);

return statearr_36606;
})();
var statearr_36607_36629 = state_36591__$1;
(statearr_36607_36629[(2)] = null);

(statearr_36607_36629[(1)] = (2));


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
});})(c__34465__auto___36619,out))
;
return ((function (switch__34353__auto__,c__34465__auto___36619,out){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_36611 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36611[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_36611[(1)] = (1));

return statearr_36611;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_36591){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_36591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e36612){if((e36612 instanceof Object)){
var ex__34357__auto__ = e36612;
var statearr_36613_36630 = state_36591;
(statearr_36613_36630[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36631 = state_36591;
state_36591 = G__36631;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_36591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_36591);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___36619,out))
})();
var state__34467__auto__ = (function (){var statearr_36614 = f__34466__auto__.call(null);
(statearr_36614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___36619);

return statearr_36614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___36619,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args36632 = [];
var len__32629__auto___36681 = arguments.length;
var i__32630__auto___36682 = (0);
while(true){
if((i__32630__auto___36682 < len__32629__auto___36681)){
args36632.push((arguments[i__32630__auto___36682]));

var G__36683 = (i__32630__auto___36682 + (1));
i__32630__auto___36682 = G__36683;
continue;
} else {
}
break;
}

var G__36634 = args36632.length;
switch (G__36634) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36632.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34465__auto___36685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___36685,out){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___36685,out){
return (function (state_36658){
var state_val_36659 = (state_36658[(1)]);
if((state_val_36659 === (7))){
var inst_36640 = (state_36658[(7)]);
var inst_36640__$1 = (state_36658[(2)]);
var inst_36641 = (inst_36640__$1 == null);
var inst_36642 = cljs.core.not.call(null,inst_36641);
var state_36658__$1 = (function (){var statearr_36660 = state_36658;
(statearr_36660[(7)] = inst_36640__$1);

return statearr_36660;
})();
if(inst_36642){
var statearr_36661_36686 = state_36658__$1;
(statearr_36661_36686[(1)] = (8));

} else {
var statearr_36662_36687 = state_36658__$1;
(statearr_36662_36687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (1))){
var inst_36635 = (0);
var state_36658__$1 = (function (){var statearr_36663 = state_36658;
(statearr_36663[(8)] = inst_36635);

return statearr_36663;
})();
var statearr_36664_36688 = state_36658__$1;
(statearr_36664_36688[(2)] = null);

(statearr_36664_36688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (4))){
var state_36658__$1 = state_36658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36658__$1,(7),ch);
} else {
if((state_val_36659 === (6))){
var inst_36653 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
var statearr_36665_36689 = state_36658__$1;
(statearr_36665_36689[(2)] = inst_36653);

(statearr_36665_36689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (3))){
var inst_36655 = (state_36658[(2)]);
var inst_36656 = cljs.core.async.close_BANG_.call(null,out);
var state_36658__$1 = (function (){var statearr_36666 = state_36658;
(statearr_36666[(9)] = inst_36655);

return statearr_36666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36658__$1,inst_36656);
} else {
if((state_val_36659 === (2))){
var inst_36635 = (state_36658[(8)]);
var inst_36637 = (inst_36635 < n);
var state_36658__$1 = state_36658;
if(cljs.core.truth_(inst_36637)){
var statearr_36667_36690 = state_36658__$1;
(statearr_36667_36690[(1)] = (4));

} else {
var statearr_36668_36691 = state_36658__$1;
(statearr_36668_36691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (11))){
var inst_36635 = (state_36658[(8)]);
var inst_36645 = (state_36658[(2)]);
var inst_36646 = (inst_36635 + (1));
var inst_36635__$1 = inst_36646;
var state_36658__$1 = (function (){var statearr_36669 = state_36658;
(statearr_36669[(10)] = inst_36645);

(statearr_36669[(8)] = inst_36635__$1);

return statearr_36669;
})();
var statearr_36670_36692 = state_36658__$1;
(statearr_36670_36692[(2)] = null);

(statearr_36670_36692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (9))){
var state_36658__$1 = state_36658;
var statearr_36671_36693 = state_36658__$1;
(statearr_36671_36693[(2)] = null);

(statearr_36671_36693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (5))){
var state_36658__$1 = state_36658;
var statearr_36672_36694 = state_36658__$1;
(statearr_36672_36694[(2)] = null);

(statearr_36672_36694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (10))){
var inst_36650 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
var statearr_36673_36695 = state_36658__$1;
(statearr_36673_36695[(2)] = inst_36650);

(statearr_36673_36695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (8))){
var inst_36640 = (state_36658[(7)]);
var state_36658__$1 = state_36658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36658__$1,(11),out,inst_36640);
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
});})(c__34465__auto___36685,out))
;
return ((function (switch__34353__auto__,c__34465__auto___36685,out){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_36677 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36677[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_36677[(1)] = (1));

return statearr_36677;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_36658){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_36658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e36678){if((e36678 instanceof Object)){
var ex__34357__auto__ = e36678;
var statearr_36679_36696 = state_36658;
(statearr_36679_36696[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36697 = state_36658;
state_36658 = G__36697;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_36658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_36658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___36685,out))
})();
var state__34467__auto__ = (function (){var statearr_36680 = f__34466__auto__.call(null);
(statearr_36680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___36685);

return statearr_36680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___36685,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36705 = (function (f,ch,meta36706){
this.f = f;
this.ch = ch;
this.meta36706 = meta36706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36707,meta36706__$1){
var self__ = this;
var _36707__$1 = this;
return (new cljs.core.async.t_cljs$core$async36705(self__.f,self__.ch,meta36706__$1));
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36707){
var self__ = this;
var _36707__$1 = this;
return self__.meta36706;
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36708 = (function (f,ch,meta36706,_,fn1,meta36709){
this.f = f;
this.ch = ch;
this.meta36706 = meta36706;
this._ = _;
this.fn1 = fn1;
this.meta36709 = meta36709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36710,meta36709__$1){
var self__ = this;
var _36710__$1 = this;
return (new cljs.core.async.t_cljs$core$async36708(self__.f,self__.ch,self__.meta36706,self__._,self__.fn1,meta36709__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36710){
var self__ = this;
var _36710__$1 = this;
return self__.meta36709;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36698_SHARP_){
return f1.call(null,(((p1__36698_SHARP_ == null))?null:self__.f.call(null,p1__36698_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36708.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36706","meta36706",-1493704698,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36705","cljs.core.async/t_cljs$core$async36705",996737402,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36709","meta36709",194055902,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36708";

cljs.core.async.t_cljs$core$async36708.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async36708");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36708 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36708(f__$1,ch__$1,meta36706__$1,___$2,fn1__$1,meta36709){
return (new cljs.core.async.t_cljs$core$async36708(f__$1,ch__$1,meta36706__$1,___$2,fn1__$1,meta36709));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36708(self__.f,self__.ch,self__.meta36706,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__31504__auto__ = ret;
if(cljs.core.truth_(and__31504__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__31504__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36706","meta36706",-1493704698,null)], null);
});

cljs.core.async.t_cljs$core$async36705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36705";

cljs.core.async.t_cljs$core$async36705.cljs$lang$ctorPrWriter = (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async36705");
});

cljs.core.async.__GT_t_cljs$core$async36705 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36705(f__$1,ch__$1,meta36706){
return (new cljs.core.async.t_cljs$core$async36705(f__$1,ch__$1,meta36706));
});

}

return (new cljs.core.async.t_cljs$core$async36705(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36714 = (function (f,ch,meta36715){
this.f = f;
this.ch = ch;
this.meta36715 = meta36715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36716,meta36715__$1){
var self__ = this;
var _36716__$1 = this;
return (new cljs.core.async.t_cljs$core$async36714(self__.f,self__.ch,meta36715__$1));
});

cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36716){
var self__ = this;
var _36716__$1 = this;
return self__.meta36715;
});

cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36715","meta36715",-2019334521,null)], null);
});

cljs.core.async.t_cljs$core$async36714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36714";

cljs.core.async.t_cljs$core$async36714.cljs$lang$ctorPrWriter = (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async36714");
});

cljs.core.async.__GT_t_cljs$core$async36714 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36714(f__$1,ch__$1,meta36715){
return (new cljs.core.async.t_cljs$core$async36714(f__$1,ch__$1,meta36715));
});

}

return (new cljs.core.async.t_cljs$core$async36714(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36720 = (function (p,ch,meta36721){
this.p = p;
this.ch = ch;
this.meta36721 = meta36721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36722,meta36721__$1){
var self__ = this;
var _36722__$1 = this;
return (new cljs.core.async.t_cljs$core$async36720(self__.p,self__.ch,meta36721__$1));
});

cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36722){
var self__ = this;
var _36722__$1 = this;
return self__.meta36721;
});

cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36720.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36721","meta36721",-705875423,null)], null);
});

cljs.core.async.t_cljs$core$async36720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36720";

cljs.core.async.t_cljs$core$async36720.cljs$lang$ctorPrWriter = (function (this__32127__auto__,writer__32128__auto__,opt__32129__auto__){
return cljs.core._write.call(null,writer__32128__auto__,"cljs.core.async/t_cljs$core$async36720");
});

cljs.core.async.__GT_t_cljs$core$async36720 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36720(p__$1,ch__$1,meta36721){
return (new cljs.core.async.t_cljs$core$async36720(p__$1,ch__$1,meta36721));
});

}

return (new cljs.core.async.t_cljs$core$async36720(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args36723 = [];
var len__32629__auto___36767 = arguments.length;
var i__32630__auto___36768 = (0);
while(true){
if((i__32630__auto___36768 < len__32629__auto___36767)){
args36723.push((arguments[i__32630__auto___36768]));

var G__36769 = (i__32630__auto___36768 + (1));
i__32630__auto___36768 = G__36769;
continue;
} else {
}
break;
}

var G__36725 = args36723.length;
switch (G__36725) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36723.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34465__auto___36771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___36771,out){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___36771,out){
return (function (state_36746){
var state_val_36747 = (state_36746[(1)]);
if((state_val_36747 === (7))){
var inst_36742 = (state_36746[(2)]);
var state_36746__$1 = state_36746;
var statearr_36748_36772 = state_36746__$1;
(statearr_36748_36772[(2)] = inst_36742);

(statearr_36748_36772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (1))){
var state_36746__$1 = state_36746;
var statearr_36749_36773 = state_36746__$1;
(statearr_36749_36773[(2)] = null);

(statearr_36749_36773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (4))){
var inst_36728 = (state_36746[(7)]);
var inst_36728__$1 = (state_36746[(2)]);
var inst_36729 = (inst_36728__$1 == null);
var state_36746__$1 = (function (){var statearr_36750 = state_36746;
(statearr_36750[(7)] = inst_36728__$1);

return statearr_36750;
})();
if(cljs.core.truth_(inst_36729)){
var statearr_36751_36774 = state_36746__$1;
(statearr_36751_36774[(1)] = (5));

} else {
var statearr_36752_36775 = state_36746__$1;
(statearr_36752_36775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (6))){
var inst_36728 = (state_36746[(7)]);
var inst_36733 = p.call(null,inst_36728);
var state_36746__$1 = state_36746;
if(cljs.core.truth_(inst_36733)){
var statearr_36753_36776 = state_36746__$1;
(statearr_36753_36776[(1)] = (8));

} else {
var statearr_36754_36777 = state_36746__$1;
(statearr_36754_36777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (3))){
var inst_36744 = (state_36746[(2)]);
var state_36746__$1 = state_36746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36746__$1,inst_36744);
} else {
if((state_val_36747 === (2))){
var state_36746__$1 = state_36746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36746__$1,(4),ch);
} else {
if((state_val_36747 === (11))){
var inst_36736 = (state_36746[(2)]);
var state_36746__$1 = state_36746;
var statearr_36755_36778 = state_36746__$1;
(statearr_36755_36778[(2)] = inst_36736);

(statearr_36755_36778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (9))){
var state_36746__$1 = state_36746;
var statearr_36756_36779 = state_36746__$1;
(statearr_36756_36779[(2)] = null);

(statearr_36756_36779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (5))){
var inst_36731 = cljs.core.async.close_BANG_.call(null,out);
var state_36746__$1 = state_36746;
var statearr_36757_36780 = state_36746__$1;
(statearr_36757_36780[(2)] = inst_36731);

(statearr_36757_36780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (10))){
var inst_36739 = (state_36746[(2)]);
var state_36746__$1 = (function (){var statearr_36758 = state_36746;
(statearr_36758[(8)] = inst_36739);

return statearr_36758;
})();
var statearr_36759_36781 = state_36746__$1;
(statearr_36759_36781[(2)] = null);

(statearr_36759_36781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (8))){
var inst_36728 = (state_36746[(7)]);
var state_36746__$1 = state_36746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36746__$1,(11),out,inst_36728);
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
});})(c__34465__auto___36771,out))
;
return ((function (switch__34353__auto__,c__34465__auto___36771,out){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_36763 = [null,null,null,null,null,null,null,null,null];
(statearr_36763[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_36763[(1)] = (1));

return statearr_36763;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_36746){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_36746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e36764){if((e36764 instanceof Object)){
var ex__34357__auto__ = e36764;
var statearr_36765_36782 = state_36746;
(statearr_36765_36782[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36783 = state_36746;
state_36746 = G__36783;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_36746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_36746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___36771,out))
})();
var state__34467__auto__ = (function (){var statearr_36766 = f__34466__auto__.call(null);
(statearr_36766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___36771);

return statearr_36766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___36771,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36784 = [];
var len__32629__auto___36787 = arguments.length;
var i__32630__auto___36788 = (0);
while(true){
if((i__32630__auto___36788 < len__32629__auto___36787)){
args36784.push((arguments[i__32630__auto___36788]));

var G__36789 = (i__32630__auto___36788 + (1));
i__32630__auto___36788 = G__36789;
continue;
} else {
}
break;
}

var G__36786 = args36784.length;
switch (G__36786) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36784.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__){
return (function (state_36956){
var state_val_36957 = (state_36956[(1)]);
if((state_val_36957 === (7))){
var inst_36952 = (state_36956[(2)]);
var state_36956__$1 = state_36956;
var statearr_36958_36999 = state_36956__$1;
(statearr_36958_36999[(2)] = inst_36952);

(statearr_36958_36999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (20))){
var inst_36922 = (state_36956[(7)]);
var inst_36933 = (state_36956[(2)]);
var inst_36934 = cljs.core.next.call(null,inst_36922);
var inst_36908 = inst_36934;
var inst_36909 = null;
var inst_36910 = (0);
var inst_36911 = (0);
var state_36956__$1 = (function (){var statearr_36959 = state_36956;
(statearr_36959[(8)] = inst_36910);

(statearr_36959[(9)] = inst_36909);

(statearr_36959[(10)] = inst_36911);

(statearr_36959[(11)] = inst_36908);

(statearr_36959[(12)] = inst_36933);

return statearr_36959;
})();
var statearr_36960_37000 = state_36956__$1;
(statearr_36960_37000[(2)] = null);

(statearr_36960_37000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (1))){
var state_36956__$1 = state_36956;
var statearr_36961_37001 = state_36956__$1;
(statearr_36961_37001[(2)] = null);

(statearr_36961_37001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (4))){
var inst_36897 = (state_36956[(13)]);
var inst_36897__$1 = (state_36956[(2)]);
var inst_36898 = (inst_36897__$1 == null);
var state_36956__$1 = (function (){var statearr_36962 = state_36956;
(statearr_36962[(13)] = inst_36897__$1);

return statearr_36962;
})();
if(cljs.core.truth_(inst_36898)){
var statearr_36963_37002 = state_36956__$1;
(statearr_36963_37002[(1)] = (5));

} else {
var statearr_36964_37003 = state_36956__$1;
(statearr_36964_37003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (15))){
var state_36956__$1 = state_36956;
var statearr_36968_37004 = state_36956__$1;
(statearr_36968_37004[(2)] = null);

(statearr_36968_37004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (21))){
var state_36956__$1 = state_36956;
var statearr_36969_37005 = state_36956__$1;
(statearr_36969_37005[(2)] = null);

(statearr_36969_37005[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (13))){
var inst_36910 = (state_36956[(8)]);
var inst_36909 = (state_36956[(9)]);
var inst_36911 = (state_36956[(10)]);
var inst_36908 = (state_36956[(11)]);
var inst_36918 = (state_36956[(2)]);
var inst_36919 = (inst_36911 + (1));
var tmp36965 = inst_36910;
var tmp36966 = inst_36909;
var tmp36967 = inst_36908;
var inst_36908__$1 = tmp36967;
var inst_36909__$1 = tmp36966;
var inst_36910__$1 = tmp36965;
var inst_36911__$1 = inst_36919;
var state_36956__$1 = (function (){var statearr_36970 = state_36956;
(statearr_36970[(8)] = inst_36910__$1);

(statearr_36970[(9)] = inst_36909__$1);

(statearr_36970[(10)] = inst_36911__$1);

(statearr_36970[(11)] = inst_36908__$1);

(statearr_36970[(14)] = inst_36918);

return statearr_36970;
})();
var statearr_36971_37006 = state_36956__$1;
(statearr_36971_37006[(2)] = null);

(statearr_36971_37006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (22))){
var state_36956__$1 = state_36956;
var statearr_36972_37007 = state_36956__$1;
(statearr_36972_37007[(2)] = null);

(statearr_36972_37007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (6))){
var inst_36897 = (state_36956[(13)]);
var inst_36906 = f.call(null,inst_36897);
var inst_36907 = cljs.core.seq.call(null,inst_36906);
var inst_36908 = inst_36907;
var inst_36909 = null;
var inst_36910 = (0);
var inst_36911 = (0);
var state_36956__$1 = (function (){var statearr_36973 = state_36956;
(statearr_36973[(8)] = inst_36910);

(statearr_36973[(9)] = inst_36909);

(statearr_36973[(10)] = inst_36911);

(statearr_36973[(11)] = inst_36908);

return statearr_36973;
})();
var statearr_36974_37008 = state_36956__$1;
(statearr_36974_37008[(2)] = null);

(statearr_36974_37008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (17))){
var inst_36922 = (state_36956[(7)]);
var inst_36926 = cljs.core.chunk_first.call(null,inst_36922);
var inst_36927 = cljs.core.chunk_rest.call(null,inst_36922);
var inst_36928 = cljs.core.count.call(null,inst_36926);
var inst_36908 = inst_36927;
var inst_36909 = inst_36926;
var inst_36910 = inst_36928;
var inst_36911 = (0);
var state_36956__$1 = (function (){var statearr_36975 = state_36956;
(statearr_36975[(8)] = inst_36910);

(statearr_36975[(9)] = inst_36909);

(statearr_36975[(10)] = inst_36911);

(statearr_36975[(11)] = inst_36908);

return statearr_36975;
})();
var statearr_36976_37009 = state_36956__$1;
(statearr_36976_37009[(2)] = null);

(statearr_36976_37009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (3))){
var inst_36954 = (state_36956[(2)]);
var state_36956__$1 = state_36956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36956__$1,inst_36954);
} else {
if((state_val_36957 === (12))){
var inst_36942 = (state_36956[(2)]);
var state_36956__$1 = state_36956;
var statearr_36977_37010 = state_36956__$1;
(statearr_36977_37010[(2)] = inst_36942);

(statearr_36977_37010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (2))){
var state_36956__$1 = state_36956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36956__$1,(4),in$);
} else {
if((state_val_36957 === (23))){
var inst_36950 = (state_36956[(2)]);
var state_36956__$1 = state_36956;
var statearr_36978_37011 = state_36956__$1;
(statearr_36978_37011[(2)] = inst_36950);

(statearr_36978_37011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (19))){
var inst_36937 = (state_36956[(2)]);
var state_36956__$1 = state_36956;
var statearr_36979_37012 = state_36956__$1;
(statearr_36979_37012[(2)] = inst_36937);

(statearr_36979_37012[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (11))){
var inst_36922 = (state_36956[(7)]);
var inst_36908 = (state_36956[(11)]);
var inst_36922__$1 = cljs.core.seq.call(null,inst_36908);
var state_36956__$1 = (function (){var statearr_36980 = state_36956;
(statearr_36980[(7)] = inst_36922__$1);

return statearr_36980;
})();
if(inst_36922__$1){
var statearr_36981_37013 = state_36956__$1;
(statearr_36981_37013[(1)] = (14));

} else {
var statearr_36982_37014 = state_36956__$1;
(statearr_36982_37014[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (9))){
var inst_36944 = (state_36956[(2)]);
var inst_36945 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36956__$1 = (function (){var statearr_36983 = state_36956;
(statearr_36983[(15)] = inst_36944);

return statearr_36983;
})();
if(cljs.core.truth_(inst_36945)){
var statearr_36984_37015 = state_36956__$1;
(statearr_36984_37015[(1)] = (21));

} else {
var statearr_36985_37016 = state_36956__$1;
(statearr_36985_37016[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (5))){
var inst_36900 = cljs.core.async.close_BANG_.call(null,out);
var state_36956__$1 = state_36956;
var statearr_36986_37017 = state_36956__$1;
(statearr_36986_37017[(2)] = inst_36900);

(statearr_36986_37017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (14))){
var inst_36922 = (state_36956[(7)]);
var inst_36924 = cljs.core.chunked_seq_QMARK_.call(null,inst_36922);
var state_36956__$1 = state_36956;
if(inst_36924){
var statearr_36987_37018 = state_36956__$1;
(statearr_36987_37018[(1)] = (17));

} else {
var statearr_36988_37019 = state_36956__$1;
(statearr_36988_37019[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (16))){
var inst_36940 = (state_36956[(2)]);
var state_36956__$1 = state_36956;
var statearr_36989_37020 = state_36956__$1;
(statearr_36989_37020[(2)] = inst_36940);

(statearr_36989_37020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36957 === (10))){
var inst_36909 = (state_36956[(9)]);
var inst_36911 = (state_36956[(10)]);
var inst_36916 = cljs.core._nth.call(null,inst_36909,inst_36911);
var state_36956__$1 = state_36956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36956__$1,(13),out,inst_36916);
} else {
if((state_val_36957 === (18))){
var inst_36922 = (state_36956[(7)]);
var inst_36931 = cljs.core.first.call(null,inst_36922);
var state_36956__$1 = state_36956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36956__$1,(20),out,inst_36931);
} else {
if((state_val_36957 === (8))){
var inst_36910 = (state_36956[(8)]);
var inst_36911 = (state_36956[(10)]);
var inst_36913 = (inst_36911 < inst_36910);
var inst_36914 = inst_36913;
var state_36956__$1 = state_36956;
if(cljs.core.truth_(inst_36914)){
var statearr_36990_37021 = state_36956__$1;
(statearr_36990_37021[(1)] = (10));

} else {
var statearr_36991_37022 = state_36956__$1;
(statearr_36991_37022[(1)] = (11));

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
});})(c__34465__auto__))
;
return ((function (switch__34353__auto__,c__34465__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34354__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34354__auto____0 = (function (){
var statearr_36995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36995[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34354__auto__);

(statearr_36995[(1)] = (1));

return statearr_36995;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34354__auto____1 = (function (state_36956){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_36956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e36996){if((e36996 instanceof Object)){
var ex__34357__auto__ = e36996;
var statearr_36997_37023 = state_36956;
(statearr_36997_37023[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37024 = state_36956;
state_36956 = G__37024;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34354__auto__ = function(state_36956){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34354__auto____1.call(this,state_36956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34354__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34354__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__))
})();
var state__34467__auto__ = (function (){var statearr_36998 = f__34466__auto__.call(null);
(statearr_36998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_36998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__))
);

return c__34465__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args37025 = [];
var len__32629__auto___37028 = arguments.length;
var i__32630__auto___37029 = (0);
while(true){
if((i__32630__auto___37029 < len__32629__auto___37028)){
args37025.push((arguments[i__32630__auto___37029]));

var G__37030 = (i__32630__auto___37029 + (1));
i__32630__auto___37029 = G__37030;
continue;
} else {
}
break;
}

var G__37027 = args37025.length;
switch (G__37027) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37025.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args37032 = [];
var len__32629__auto___37035 = arguments.length;
var i__32630__auto___37036 = (0);
while(true){
if((i__32630__auto___37036 < len__32629__auto___37035)){
args37032.push((arguments[i__32630__auto___37036]));

var G__37037 = (i__32630__auto___37036 + (1));
i__32630__auto___37036 = G__37037;
continue;
} else {
}
break;
}

var G__37034 = args37032.length;
switch (G__37034) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37032.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args37039 = [];
var len__32629__auto___37090 = arguments.length;
var i__32630__auto___37091 = (0);
while(true){
if((i__32630__auto___37091 < len__32629__auto___37090)){
args37039.push((arguments[i__32630__auto___37091]));

var G__37092 = (i__32630__auto___37091 + (1));
i__32630__auto___37091 = G__37092;
continue;
} else {
}
break;
}

var G__37041 = args37039.length;
switch (G__37041) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37039.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34465__auto___37094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___37094,out){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___37094,out){
return (function (state_37065){
var state_val_37066 = (state_37065[(1)]);
if((state_val_37066 === (7))){
var inst_37060 = (state_37065[(2)]);
var state_37065__$1 = state_37065;
var statearr_37067_37095 = state_37065__$1;
(statearr_37067_37095[(2)] = inst_37060);

(statearr_37067_37095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (1))){
var inst_37042 = null;
var state_37065__$1 = (function (){var statearr_37068 = state_37065;
(statearr_37068[(7)] = inst_37042);

return statearr_37068;
})();
var statearr_37069_37096 = state_37065__$1;
(statearr_37069_37096[(2)] = null);

(statearr_37069_37096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (4))){
var inst_37045 = (state_37065[(8)]);
var inst_37045__$1 = (state_37065[(2)]);
var inst_37046 = (inst_37045__$1 == null);
var inst_37047 = cljs.core.not.call(null,inst_37046);
var state_37065__$1 = (function (){var statearr_37070 = state_37065;
(statearr_37070[(8)] = inst_37045__$1);

return statearr_37070;
})();
if(inst_37047){
var statearr_37071_37097 = state_37065__$1;
(statearr_37071_37097[(1)] = (5));

} else {
var statearr_37072_37098 = state_37065__$1;
(statearr_37072_37098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (6))){
var state_37065__$1 = state_37065;
var statearr_37073_37099 = state_37065__$1;
(statearr_37073_37099[(2)] = null);

(statearr_37073_37099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (3))){
var inst_37062 = (state_37065[(2)]);
var inst_37063 = cljs.core.async.close_BANG_.call(null,out);
var state_37065__$1 = (function (){var statearr_37074 = state_37065;
(statearr_37074[(9)] = inst_37062);

return statearr_37074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37065__$1,inst_37063);
} else {
if((state_val_37066 === (2))){
var state_37065__$1 = state_37065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37065__$1,(4),ch);
} else {
if((state_val_37066 === (11))){
var inst_37045 = (state_37065[(8)]);
var inst_37054 = (state_37065[(2)]);
var inst_37042 = inst_37045;
var state_37065__$1 = (function (){var statearr_37075 = state_37065;
(statearr_37075[(7)] = inst_37042);

(statearr_37075[(10)] = inst_37054);

return statearr_37075;
})();
var statearr_37076_37100 = state_37065__$1;
(statearr_37076_37100[(2)] = null);

(statearr_37076_37100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (9))){
var inst_37045 = (state_37065[(8)]);
var state_37065__$1 = state_37065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37065__$1,(11),out,inst_37045);
} else {
if((state_val_37066 === (5))){
var inst_37042 = (state_37065[(7)]);
var inst_37045 = (state_37065[(8)]);
var inst_37049 = cljs.core._EQ_.call(null,inst_37045,inst_37042);
var state_37065__$1 = state_37065;
if(inst_37049){
var statearr_37078_37101 = state_37065__$1;
(statearr_37078_37101[(1)] = (8));

} else {
var statearr_37079_37102 = state_37065__$1;
(statearr_37079_37102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (10))){
var inst_37057 = (state_37065[(2)]);
var state_37065__$1 = state_37065;
var statearr_37080_37103 = state_37065__$1;
(statearr_37080_37103[(2)] = inst_37057);

(statearr_37080_37103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37066 === (8))){
var inst_37042 = (state_37065[(7)]);
var tmp37077 = inst_37042;
var inst_37042__$1 = tmp37077;
var state_37065__$1 = (function (){var statearr_37081 = state_37065;
(statearr_37081[(7)] = inst_37042__$1);

return statearr_37081;
})();
var statearr_37082_37104 = state_37065__$1;
(statearr_37082_37104[(2)] = null);

(statearr_37082_37104[(1)] = (2));


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
});})(c__34465__auto___37094,out))
;
return ((function (switch__34353__auto__,c__34465__auto___37094,out){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_37086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37086[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_37086[(1)] = (1));

return statearr_37086;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_37065){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_37065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e37087){if((e37087 instanceof Object)){
var ex__34357__auto__ = e37087;
var statearr_37088_37105 = state_37065;
(statearr_37088_37105[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37106 = state_37065;
state_37065 = G__37106;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_37065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_37065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___37094,out))
})();
var state__34467__auto__ = (function (){var statearr_37089 = f__34466__auto__.call(null);
(statearr_37089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___37094);

return statearr_37089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___37094,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args37107 = [];
var len__32629__auto___37177 = arguments.length;
var i__32630__auto___37178 = (0);
while(true){
if((i__32630__auto___37178 < len__32629__auto___37177)){
args37107.push((arguments[i__32630__auto___37178]));

var G__37179 = (i__32630__auto___37178 + (1));
i__32630__auto___37178 = G__37179;
continue;
} else {
}
break;
}

var G__37109 = args37107.length;
switch (G__37109) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37107.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34465__auto___37181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___37181,out){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___37181,out){
return (function (state_37147){
var state_val_37148 = (state_37147[(1)]);
if((state_val_37148 === (7))){
var inst_37143 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37149_37182 = state_37147__$1;
(statearr_37149_37182[(2)] = inst_37143);

(statearr_37149_37182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (1))){
var inst_37110 = (new Array(n));
var inst_37111 = inst_37110;
var inst_37112 = (0);
var state_37147__$1 = (function (){var statearr_37150 = state_37147;
(statearr_37150[(7)] = inst_37112);

(statearr_37150[(8)] = inst_37111);

return statearr_37150;
})();
var statearr_37151_37183 = state_37147__$1;
(statearr_37151_37183[(2)] = null);

(statearr_37151_37183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (4))){
var inst_37115 = (state_37147[(9)]);
var inst_37115__$1 = (state_37147[(2)]);
var inst_37116 = (inst_37115__$1 == null);
var inst_37117 = cljs.core.not.call(null,inst_37116);
var state_37147__$1 = (function (){var statearr_37152 = state_37147;
(statearr_37152[(9)] = inst_37115__$1);

return statearr_37152;
})();
if(inst_37117){
var statearr_37153_37184 = state_37147__$1;
(statearr_37153_37184[(1)] = (5));

} else {
var statearr_37154_37185 = state_37147__$1;
(statearr_37154_37185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (15))){
var inst_37137 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37155_37186 = state_37147__$1;
(statearr_37155_37186[(2)] = inst_37137);

(statearr_37155_37186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (13))){
var state_37147__$1 = state_37147;
var statearr_37156_37187 = state_37147__$1;
(statearr_37156_37187[(2)] = null);

(statearr_37156_37187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (6))){
var inst_37112 = (state_37147[(7)]);
var inst_37133 = (inst_37112 > (0));
var state_37147__$1 = state_37147;
if(cljs.core.truth_(inst_37133)){
var statearr_37157_37188 = state_37147__$1;
(statearr_37157_37188[(1)] = (12));

} else {
var statearr_37158_37189 = state_37147__$1;
(statearr_37158_37189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (3))){
var inst_37145 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37147__$1,inst_37145);
} else {
if((state_val_37148 === (12))){
var inst_37111 = (state_37147[(8)]);
var inst_37135 = cljs.core.vec.call(null,inst_37111);
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37147__$1,(15),out,inst_37135);
} else {
if((state_val_37148 === (2))){
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37147__$1,(4),ch);
} else {
if((state_val_37148 === (11))){
var inst_37127 = (state_37147[(2)]);
var inst_37128 = (new Array(n));
var inst_37111 = inst_37128;
var inst_37112 = (0);
var state_37147__$1 = (function (){var statearr_37159 = state_37147;
(statearr_37159[(7)] = inst_37112);

(statearr_37159[(8)] = inst_37111);

(statearr_37159[(10)] = inst_37127);

return statearr_37159;
})();
var statearr_37160_37190 = state_37147__$1;
(statearr_37160_37190[(2)] = null);

(statearr_37160_37190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (9))){
var inst_37111 = (state_37147[(8)]);
var inst_37125 = cljs.core.vec.call(null,inst_37111);
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37147__$1,(11),out,inst_37125);
} else {
if((state_val_37148 === (5))){
var inst_37112 = (state_37147[(7)]);
var inst_37120 = (state_37147[(11)]);
var inst_37115 = (state_37147[(9)]);
var inst_37111 = (state_37147[(8)]);
var inst_37119 = (inst_37111[inst_37112] = inst_37115);
var inst_37120__$1 = (inst_37112 + (1));
var inst_37121 = (inst_37120__$1 < n);
var state_37147__$1 = (function (){var statearr_37161 = state_37147;
(statearr_37161[(11)] = inst_37120__$1);

(statearr_37161[(12)] = inst_37119);

return statearr_37161;
})();
if(cljs.core.truth_(inst_37121)){
var statearr_37162_37191 = state_37147__$1;
(statearr_37162_37191[(1)] = (8));

} else {
var statearr_37163_37192 = state_37147__$1;
(statearr_37163_37192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (14))){
var inst_37140 = (state_37147[(2)]);
var inst_37141 = cljs.core.async.close_BANG_.call(null,out);
var state_37147__$1 = (function (){var statearr_37165 = state_37147;
(statearr_37165[(13)] = inst_37140);

return statearr_37165;
})();
var statearr_37166_37193 = state_37147__$1;
(statearr_37166_37193[(2)] = inst_37141);

(statearr_37166_37193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (10))){
var inst_37131 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37167_37194 = state_37147__$1;
(statearr_37167_37194[(2)] = inst_37131);

(statearr_37167_37194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (8))){
var inst_37120 = (state_37147[(11)]);
var inst_37111 = (state_37147[(8)]);
var tmp37164 = inst_37111;
var inst_37111__$1 = tmp37164;
var inst_37112 = inst_37120;
var state_37147__$1 = (function (){var statearr_37168 = state_37147;
(statearr_37168[(7)] = inst_37112);

(statearr_37168[(8)] = inst_37111__$1);

return statearr_37168;
})();
var statearr_37169_37195 = state_37147__$1;
(statearr_37169_37195[(2)] = null);

(statearr_37169_37195[(1)] = (2));


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
});})(c__34465__auto___37181,out))
;
return ((function (switch__34353__auto__,c__34465__auto___37181,out){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_37173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37173[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_37173[(1)] = (1));

return statearr_37173;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_37147){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_37147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e37174){if((e37174 instanceof Object)){
var ex__34357__auto__ = e37174;
var statearr_37175_37196 = state_37147;
(statearr_37175_37196[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37197 = state_37147;
state_37147 = G__37197;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_37147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_37147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___37181,out))
})();
var state__34467__auto__ = (function (){var statearr_37176 = f__34466__auto__.call(null);
(statearr_37176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___37181);

return statearr_37176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___37181,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37198 = [];
var len__32629__auto___37272 = arguments.length;
var i__32630__auto___37273 = (0);
while(true){
if((i__32630__auto___37273 < len__32629__auto___37272)){
args37198.push((arguments[i__32630__auto___37273]));

var G__37274 = (i__32630__auto___37273 + (1));
i__32630__auto___37273 = G__37274;
continue;
} else {
}
break;
}

var G__37200 = args37198.length;
switch (G__37200) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37198.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34465__auto___37276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___37276,out){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___37276,out){
return (function (state_37242){
var state_val_37243 = (state_37242[(1)]);
if((state_val_37243 === (7))){
var inst_37238 = (state_37242[(2)]);
var state_37242__$1 = state_37242;
var statearr_37244_37277 = state_37242__$1;
(statearr_37244_37277[(2)] = inst_37238);

(statearr_37244_37277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (1))){
var inst_37201 = [];
var inst_37202 = inst_37201;
var inst_37203 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37242__$1 = (function (){var statearr_37245 = state_37242;
(statearr_37245[(7)] = inst_37202);

(statearr_37245[(8)] = inst_37203);

return statearr_37245;
})();
var statearr_37246_37278 = state_37242__$1;
(statearr_37246_37278[(2)] = null);

(statearr_37246_37278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (4))){
var inst_37206 = (state_37242[(9)]);
var inst_37206__$1 = (state_37242[(2)]);
var inst_37207 = (inst_37206__$1 == null);
var inst_37208 = cljs.core.not.call(null,inst_37207);
var state_37242__$1 = (function (){var statearr_37247 = state_37242;
(statearr_37247[(9)] = inst_37206__$1);

return statearr_37247;
})();
if(inst_37208){
var statearr_37248_37279 = state_37242__$1;
(statearr_37248_37279[(1)] = (5));

} else {
var statearr_37249_37280 = state_37242__$1;
(statearr_37249_37280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (15))){
var inst_37232 = (state_37242[(2)]);
var state_37242__$1 = state_37242;
var statearr_37250_37281 = state_37242__$1;
(statearr_37250_37281[(2)] = inst_37232);

(statearr_37250_37281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (13))){
var state_37242__$1 = state_37242;
var statearr_37251_37282 = state_37242__$1;
(statearr_37251_37282[(2)] = null);

(statearr_37251_37282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (6))){
var inst_37202 = (state_37242[(7)]);
var inst_37227 = inst_37202.length;
var inst_37228 = (inst_37227 > (0));
var state_37242__$1 = state_37242;
if(cljs.core.truth_(inst_37228)){
var statearr_37252_37283 = state_37242__$1;
(statearr_37252_37283[(1)] = (12));

} else {
var statearr_37253_37284 = state_37242__$1;
(statearr_37253_37284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (3))){
var inst_37240 = (state_37242[(2)]);
var state_37242__$1 = state_37242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37242__$1,inst_37240);
} else {
if((state_val_37243 === (12))){
var inst_37202 = (state_37242[(7)]);
var inst_37230 = cljs.core.vec.call(null,inst_37202);
var state_37242__$1 = state_37242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37242__$1,(15),out,inst_37230);
} else {
if((state_val_37243 === (2))){
var state_37242__$1 = state_37242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37242__$1,(4),ch);
} else {
if((state_val_37243 === (11))){
var inst_37206 = (state_37242[(9)]);
var inst_37210 = (state_37242[(10)]);
var inst_37220 = (state_37242[(2)]);
var inst_37221 = [];
var inst_37222 = inst_37221.push(inst_37206);
var inst_37202 = inst_37221;
var inst_37203 = inst_37210;
var state_37242__$1 = (function (){var statearr_37254 = state_37242;
(statearr_37254[(11)] = inst_37222);

(statearr_37254[(7)] = inst_37202);

(statearr_37254[(12)] = inst_37220);

(statearr_37254[(8)] = inst_37203);

return statearr_37254;
})();
var statearr_37255_37285 = state_37242__$1;
(statearr_37255_37285[(2)] = null);

(statearr_37255_37285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (9))){
var inst_37202 = (state_37242[(7)]);
var inst_37218 = cljs.core.vec.call(null,inst_37202);
var state_37242__$1 = state_37242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37242__$1,(11),out,inst_37218);
} else {
if((state_val_37243 === (5))){
var inst_37206 = (state_37242[(9)]);
var inst_37210 = (state_37242[(10)]);
var inst_37203 = (state_37242[(8)]);
var inst_37210__$1 = f.call(null,inst_37206);
var inst_37211 = cljs.core._EQ_.call(null,inst_37210__$1,inst_37203);
var inst_37212 = cljs.core.keyword_identical_QMARK_.call(null,inst_37203,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37213 = (inst_37211) || (inst_37212);
var state_37242__$1 = (function (){var statearr_37256 = state_37242;
(statearr_37256[(10)] = inst_37210__$1);

return statearr_37256;
})();
if(cljs.core.truth_(inst_37213)){
var statearr_37257_37286 = state_37242__$1;
(statearr_37257_37286[(1)] = (8));

} else {
var statearr_37258_37287 = state_37242__$1;
(statearr_37258_37287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (14))){
var inst_37235 = (state_37242[(2)]);
var inst_37236 = cljs.core.async.close_BANG_.call(null,out);
var state_37242__$1 = (function (){var statearr_37260 = state_37242;
(statearr_37260[(13)] = inst_37235);

return statearr_37260;
})();
var statearr_37261_37288 = state_37242__$1;
(statearr_37261_37288[(2)] = inst_37236);

(statearr_37261_37288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (10))){
var inst_37225 = (state_37242[(2)]);
var state_37242__$1 = state_37242;
var statearr_37262_37289 = state_37242__$1;
(statearr_37262_37289[(2)] = inst_37225);

(statearr_37262_37289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37243 === (8))){
var inst_37206 = (state_37242[(9)]);
var inst_37210 = (state_37242[(10)]);
var inst_37202 = (state_37242[(7)]);
var inst_37215 = inst_37202.push(inst_37206);
var tmp37259 = inst_37202;
var inst_37202__$1 = tmp37259;
var inst_37203 = inst_37210;
var state_37242__$1 = (function (){var statearr_37263 = state_37242;
(statearr_37263[(7)] = inst_37202__$1);

(statearr_37263[(8)] = inst_37203);

(statearr_37263[(14)] = inst_37215);

return statearr_37263;
})();
var statearr_37264_37290 = state_37242__$1;
(statearr_37264_37290[(2)] = null);

(statearr_37264_37290[(1)] = (2));


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
});})(c__34465__auto___37276,out))
;
return ((function (switch__34353__auto__,c__34465__auto___37276,out){
return (function() {
var cljs$core$async$state_machine__34354__auto__ = null;
var cljs$core$async$state_machine__34354__auto____0 = (function (){
var statearr_37268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37268[(0)] = cljs$core$async$state_machine__34354__auto__);

(statearr_37268[(1)] = (1));

return statearr_37268;
});
var cljs$core$async$state_machine__34354__auto____1 = (function (state_37242){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_37242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e37269){if((e37269 instanceof Object)){
var ex__34357__auto__ = e37269;
var statearr_37270_37291 = state_37242;
(statearr_37270_37291[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37292 = state_37242;
state_37242 = G__37292;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
cljs$core$async$state_machine__34354__auto__ = function(state_37242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34354__auto____1.call(this,state_37242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34354__auto____0;
cljs$core$async$state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34354__auto____1;
return cljs$core$async$state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___37276,out))
})();
var state__34467__auto__ = (function (){var statearr_37271 = f__34466__auto__.call(null);
(statearr_37271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___37276);

return statearr_37271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___37276,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1495209116707