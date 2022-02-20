// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args42248 = [];
var len__32629__auto___42251 = arguments.length;
var i__32630__auto___42252 = (0);
while(true){
if((i__32630__auto___42252 < len__32629__auto___42251)){
args42248.push((arguments[i__32630__auto___42252]));

var G__42253 = (i__32630__auto___42252 + (1));
i__32630__auto___42252 = G__42253;
continue;
} else {
}
break;
}

var G__42250 = args42248.length;
switch (G__42250) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42248.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__32636__auto__ = [];
var len__32629__auto___42256 = arguments.length;
var i__32630__auto___42257 = (0);
while(true){
if((i__32630__auto___42257 < len__32629__auto___42256)){
args__32636__auto__.push((arguments[i__32630__auto___42257]));

var G__42258 = (i__32630__auto___42257 + (1));
i__32630__auto___42257 = G__42258;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42255){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42255));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__32636__auto__ = [];
var len__32629__auto___42260 = arguments.length;
var i__32630__auto___42261 = (0);
while(true){
if((i__32630__auto___42261 < len__32629__auto___42260)){
args__32636__auto__.push((arguments[i__32630__auto___42261]));

var G__42262 = (i__32630__auto___42261 + (1));
i__32630__auto___42261 = G__42262;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42259){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42259));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42263){
var map__42266 = p__42263;
var map__42266__$1 = ((((!((map__42266 == null)))?((((map__42266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42266):map__42266);
var message = cljs.core.get.call(null,map__42266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42266__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__31516__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__31504__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__31504__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__31504__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34465__auto___42428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___42428,ch){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___42428,ch){
return (function (state_42397){
var state_val_42398 = (state_42397[(1)]);
if((state_val_42398 === (7))){
var inst_42393 = (state_42397[(2)]);
var state_42397__$1 = state_42397;
var statearr_42399_42429 = state_42397__$1;
(statearr_42399_42429[(2)] = inst_42393);

(statearr_42399_42429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (1))){
var state_42397__$1 = state_42397;
var statearr_42400_42430 = state_42397__$1;
(statearr_42400_42430[(2)] = null);

(statearr_42400_42430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (4))){
var inst_42350 = (state_42397[(7)]);
var inst_42350__$1 = (state_42397[(2)]);
var state_42397__$1 = (function (){var statearr_42401 = state_42397;
(statearr_42401[(7)] = inst_42350__$1);

return statearr_42401;
})();
if(cljs.core.truth_(inst_42350__$1)){
var statearr_42402_42431 = state_42397__$1;
(statearr_42402_42431[(1)] = (5));

} else {
var statearr_42403_42432 = state_42397__$1;
(statearr_42403_42432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (15))){
var inst_42357 = (state_42397[(8)]);
var inst_42372 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42357);
var inst_42373 = cljs.core.first.call(null,inst_42372);
var inst_42374 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42373);
var inst_42375 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42374)].join('');
var inst_42376 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42375);
var state_42397__$1 = state_42397;
var statearr_42404_42433 = state_42397__$1;
(statearr_42404_42433[(2)] = inst_42376);

(statearr_42404_42433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (13))){
var inst_42381 = (state_42397[(2)]);
var state_42397__$1 = state_42397;
var statearr_42405_42434 = state_42397__$1;
(statearr_42405_42434[(2)] = inst_42381);

(statearr_42405_42434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (6))){
var state_42397__$1 = state_42397;
var statearr_42406_42435 = state_42397__$1;
(statearr_42406_42435[(2)] = null);

(statearr_42406_42435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (17))){
var inst_42379 = (state_42397[(2)]);
var state_42397__$1 = state_42397;
var statearr_42407_42436 = state_42397__$1;
(statearr_42407_42436[(2)] = inst_42379);

(statearr_42407_42436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (3))){
var inst_42395 = (state_42397[(2)]);
var state_42397__$1 = state_42397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42397__$1,inst_42395);
} else {
if((state_val_42398 === (12))){
var inst_42356 = (state_42397[(9)]);
var inst_42370 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42356,opts);
var state_42397__$1 = state_42397;
if(cljs.core.truth_(inst_42370)){
var statearr_42408_42437 = state_42397__$1;
(statearr_42408_42437[(1)] = (15));

} else {
var statearr_42409_42438 = state_42397__$1;
(statearr_42409_42438[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (2))){
var state_42397__$1 = state_42397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42397__$1,(4),ch);
} else {
if((state_val_42398 === (11))){
var inst_42357 = (state_42397[(8)]);
var inst_42362 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42363 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42357);
var inst_42364 = cljs.core.async.timeout.call(null,(1000));
var inst_42365 = [inst_42363,inst_42364];
var inst_42366 = (new cljs.core.PersistentVector(null,2,(5),inst_42362,inst_42365,null));
var state_42397__$1 = state_42397;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42397__$1,(14),inst_42366);
} else {
if((state_val_42398 === (9))){
var inst_42357 = (state_42397[(8)]);
var inst_42383 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42384 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42357);
var inst_42385 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42384);
var inst_42386 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42385)].join('');
var inst_42387 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42386);
var state_42397__$1 = (function (){var statearr_42410 = state_42397;
(statearr_42410[(10)] = inst_42383);

return statearr_42410;
})();
var statearr_42411_42439 = state_42397__$1;
(statearr_42411_42439[(2)] = inst_42387);

(statearr_42411_42439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (5))){
var inst_42350 = (state_42397[(7)]);
var inst_42352 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42353 = (new cljs.core.PersistentArrayMap(null,2,inst_42352,null));
var inst_42354 = (new cljs.core.PersistentHashSet(null,inst_42353,null));
var inst_42355 = figwheel.client.focus_msgs.call(null,inst_42354,inst_42350);
var inst_42356 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42355);
var inst_42357 = cljs.core.first.call(null,inst_42355);
var inst_42358 = figwheel.client.autoload_QMARK_.call(null);
var state_42397__$1 = (function (){var statearr_42412 = state_42397;
(statearr_42412[(8)] = inst_42357);

(statearr_42412[(9)] = inst_42356);

return statearr_42412;
})();
if(cljs.core.truth_(inst_42358)){
var statearr_42413_42440 = state_42397__$1;
(statearr_42413_42440[(1)] = (8));

} else {
var statearr_42414_42441 = state_42397__$1;
(statearr_42414_42441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (14))){
var inst_42368 = (state_42397[(2)]);
var state_42397__$1 = state_42397;
var statearr_42415_42442 = state_42397__$1;
(statearr_42415_42442[(2)] = inst_42368);

(statearr_42415_42442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (16))){
var state_42397__$1 = state_42397;
var statearr_42416_42443 = state_42397__$1;
(statearr_42416_42443[(2)] = null);

(statearr_42416_42443[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (10))){
var inst_42389 = (state_42397[(2)]);
var state_42397__$1 = (function (){var statearr_42417 = state_42397;
(statearr_42417[(11)] = inst_42389);

return statearr_42417;
})();
var statearr_42418_42444 = state_42397__$1;
(statearr_42418_42444[(2)] = null);

(statearr_42418_42444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (8))){
var inst_42356 = (state_42397[(9)]);
var inst_42360 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42356,opts);
var state_42397__$1 = state_42397;
if(cljs.core.truth_(inst_42360)){
var statearr_42419_42445 = state_42397__$1;
(statearr_42419_42445[(1)] = (11));

} else {
var statearr_42420_42446 = state_42397__$1;
(statearr_42420_42446[(1)] = (12));

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
});})(c__34465__auto___42428,ch))
;
return ((function (switch__34353__auto__,c__34465__auto___42428,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34354__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34354__auto____0 = (function (){
var statearr_42424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42424[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34354__auto__);

(statearr_42424[(1)] = (1));

return statearr_42424;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34354__auto____1 = (function (state_42397){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_42397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e42425){if((e42425 instanceof Object)){
var ex__34357__auto__ = e42425;
var statearr_42426_42447 = state_42397;
(statearr_42426_42447[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42448 = state_42397;
state_42397 = G__42448;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34354__auto__ = function(state_42397){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34354__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34354__auto____1.call(this,state_42397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34354__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34354__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___42428,ch))
})();
var state__34467__auto__ = (function (){var statearr_42427 = f__34466__auto__.call(null);
(statearr_42427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___42428);

return statearr_42427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___42428,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42449_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42449_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42452 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42452){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42451){if((e42451 instanceof Error)){
var e = e42451;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42452], null));
} else {
var e = e42451;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42452))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42453){
var map__42462 = p__42453;
var map__42462__$1 = ((((!((map__42462 == null)))?((((map__42462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42462):map__42462);
var opts = map__42462__$1;
var build_id = cljs.core.get.call(null,map__42462__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42462,map__42462__$1,opts,build_id){
return (function (p__42464){
var vec__42465 = p__42464;
var seq__42466 = cljs.core.seq.call(null,vec__42465);
var first__42467 = cljs.core.first.call(null,seq__42466);
var seq__42466__$1 = cljs.core.next.call(null,seq__42466);
var map__42468 = first__42467;
var map__42468__$1 = ((((!((map__42468 == null)))?((((map__42468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42468):map__42468);
var msg = map__42468__$1;
var msg_name = cljs.core.get.call(null,map__42468__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42466__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42465,seq__42466,first__42467,seq__42466__$1,map__42468,map__42468__$1,msg,msg_name,_,map__42462,map__42462__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42465,seq__42466,first__42467,seq__42466__$1,map__42468,map__42468__$1,msg,msg_name,_,map__42462,map__42462__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42462,map__42462__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42476){
var vec__42477 = p__42476;
var seq__42478 = cljs.core.seq.call(null,vec__42477);
var first__42479 = cljs.core.first.call(null,seq__42478);
var seq__42478__$1 = cljs.core.next.call(null,seq__42478);
var map__42480 = first__42479;
var map__42480__$1 = ((((!((map__42480 == null)))?((((map__42480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42480):map__42480);
var msg = map__42480__$1;
var msg_name = cljs.core.get.call(null,map__42480__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42478__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42482){
var map__42494 = p__42482;
var map__42494__$1 = ((((!((map__42494 == null)))?((((map__42494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42494):map__42494);
var on_compile_warning = cljs.core.get.call(null,map__42494__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42494__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42494,map__42494__$1,on_compile_warning,on_compile_fail){
return (function (p__42496){
var vec__42497 = p__42496;
var seq__42498 = cljs.core.seq.call(null,vec__42497);
var first__42499 = cljs.core.first.call(null,seq__42498);
var seq__42498__$1 = cljs.core.next.call(null,seq__42498);
var map__42500 = first__42499;
var map__42500__$1 = ((((!((map__42500 == null)))?((((map__42500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42500):map__42500);
var msg = map__42500__$1;
var msg_name = cljs.core.get.call(null,map__42500__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42498__$1;
var pred__42502 = cljs.core._EQ_;
var expr__42503 = msg_name;
if(cljs.core.truth_(pred__42502.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42503))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42502.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42503))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42494,map__42494__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__,msg_hist,msg_names,msg){
return (function (state_42731){
var state_val_42732 = (state_42731[(1)]);
if((state_val_42732 === (7))){
var inst_42651 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42651)){
var statearr_42733_42783 = state_42731__$1;
(statearr_42733_42783[(1)] = (8));

} else {
var statearr_42734_42784 = state_42731__$1;
(statearr_42734_42784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (20))){
var inst_42725 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42735_42785 = state_42731__$1;
(statearr_42735_42785[(2)] = inst_42725);

(statearr_42735_42785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (27))){
var inst_42721 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42736_42786 = state_42731__$1;
(statearr_42736_42786[(2)] = inst_42721);

(statearr_42736_42786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (1))){
var inst_42644 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42644)){
var statearr_42737_42787 = state_42731__$1;
(statearr_42737_42787[(1)] = (2));

} else {
var statearr_42738_42788 = state_42731__$1;
(statearr_42738_42788[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (24))){
var inst_42723 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42739_42789 = state_42731__$1;
(statearr_42739_42789[(2)] = inst_42723);

(statearr_42739_42789[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (4))){
var inst_42729 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42731__$1,inst_42729);
} else {
if((state_val_42732 === (15))){
var inst_42727 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42740_42790 = state_42731__$1;
(statearr_42740_42790[(2)] = inst_42727);

(statearr_42740_42790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (21))){
var inst_42680 = (state_42731[(2)]);
var inst_42681 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42682 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42681);
var state_42731__$1 = (function (){var statearr_42741 = state_42731;
(statearr_42741[(7)] = inst_42680);

return statearr_42741;
})();
var statearr_42742_42791 = state_42731__$1;
(statearr_42742_42791[(2)] = inst_42682);

(statearr_42742_42791[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (31))){
var inst_42710 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42710)){
var statearr_42743_42792 = state_42731__$1;
(statearr_42743_42792[(1)] = (34));

} else {
var statearr_42744_42793 = state_42731__$1;
(statearr_42744_42793[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (32))){
var inst_42719 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42745_42794 = state_42731__$1;
(statearr_42745_42794[(2)] = inst_42719);

(statearr_42745_42794[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (33))){
var inst_42706 = (state_42731[(2)]);
var inst_42707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42708 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42707);
var state_42731__$1 = (function (){var statearr_42746 = state_42731;
(statearr_42746[(8)] = inst_42706);

return statearr_42746;
})();
var statearr_42747_42795 = state_42731__$1;
(statearr_42747_42795[(2)] = inst_42708);

(statearr_42747_42795[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (13))){
var inst_42665 = figwheel.client.heads_up.clear.call(null);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(16),inst_42665);
} else {
if((state_val_42732 === (22))){
var inst_42686 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42687 = figwheel.client.heads_up.append_warning_message.call(null,inst_42686);
var state_42731__$1 = state_42731;
var statearr_42748_42796 = state_42731__$1;
(statearr_42748_42796[(2)] = inst_42687);

(statearr_42748_42796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (36))){
var inst_42717 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42749_42797 = state_42731__$1;
(statearr_42749_42797[(2)] = inst_42717);

(statearr_42749_42797[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (29))){
var inst_42697 = (state_42731[(2)]);
var inst_42698 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42699 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42698);
var state_42731__$1 = (function (){var statearr_42750 = state_42731;
(statearr_42750[(9)] = inst_42697);

return statearr_42750;
})();
var statearr_42751_42798 = state_42731__$1;
(statearr_42751_42798[(2)] = inst_42699);

(statearr_42751_42798[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (6))){
var inst_42646 = (state_42731[(10)]);
var state_42731__$1 = state_42731;
var statearr_42752_42799 = state_42731__$1;
(statearr_42752_42799[(2)] = inst_42646);

(statearr_42752_42799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (28))){
var inst_42693 = (state_42731[(2)]);
var inst_42694 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42695 = figwheel.client.heads_up.display_warning.call(null,inst_42694);
var state_42731__$1 = (function (){var statearr_42753 = state_42731;
(statearr_42753[(11)] = inst_42693);

return statearr_42753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(29),inst_42695);
} else {
if((state_val_42732 === (25))){
var inst_42691 = figwheel.client.heads_up.clear.call(null);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(28),inst_42691);
} else {
if((state_val_42732 === (34))){
var inst_42712 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(37),inst_42712);
} else {
if((state_val_42732 === (17))){
var inst_42671 = (state_42731[(2)]);
var inst_42672 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42673 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42672);
var state_42731__$1 = (function (){var statearr_42754 = state_42731;
(statearr_42754[(12)] = inst_42671);

return statearr_42754;
})();
var statearr_42755_42800 = state_42731__$1;
(statearr_42755_42800[(2)] = inst_42673);

(statearr_42755_42800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (3))){
var inst_42663 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42663)){
var statearr_42756_42801 = state_42731__$1;
(statearr_42756_42801[(1)] = (13));

} else {
var statearr_42757_42802 = state_42731__$1;
(statearr_42757_42802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (12))){
var inst_42659 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42758_42803 = state_42731__$1;
(statearr_42758_42803[(2)] = inst_42659);

(statearr_42758_42803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (2))){
var inst_42646 = (state_42731[(10)]);
var inst_42646__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42731__$1 = (function (){var statearr_42759 = state_42731;
(statearr_42759[(10)] = inst_42646__$1);

return statearr_42759;
})();
if(cljs.core.truth_(inst_42646__$1)){
var statearr_42760_42804 = state_42731__$1;
(statearr_42760_42804[(1)] = (5));

} else {
var statearr_42761_42805 = state_42731__$1;
(statearr_42761_42805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (23))){
var inst_42689 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42689)){
var statearr_42762_42806 = state_42731__$1;
(statearr_42762_42806[(1)] = (25));

} else {
var statearr_42763_42807 = state_42731__$1;
(statearr_42763_42807[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (35))){
var state_42731__$1 = state_42731;
var statearr_42764_42808 = state_42731__$1;
(statearr_42764_42808[(2)] = null);

(statearr_42764_42808[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (19))){
var inst_42684 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42684)){
var statearr_42765_42809 = state_42731__$1;
(statearr_42765_42809[(1)] = (22));

} else {
var statearr_42766_42810 = state_42731__$1;
(statearr_42766_42810[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (11))){
var inst_42655 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42767_42811 = state_42731__$1;
(statearr_42767_42811[(2)] = inst_42655);

(statearr_42767_42811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (9))){
var inst_42657 = figwheel.client.heads_up.clear.call(null);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(12),inst_42657);
} else {
if((state_val_42732 === (5))){
var inst_42648 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42731__$1 = state_42731;
var statearr_42768_42812 = state_42731__$1;
(statearr_42768_42812[(2)] = inst_42648);

(statearr_42768_42812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (14))){
var inst_42675 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42675)){
var statearr_42769_42813 = state_42731__$1;
(statearr_42769_42813[(1)] = (18));

} else {
var statearr_42770_42814 = state_42731__$1;
(statearr_42770_42814[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (26))){
var inst_42701 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42731__$1 = state_42731;
if(cljs.core.truth_(inst_42701)){
var statearr_42771_42815 = state_42731__$1;
(statearr_42771_42815[(1)] = (30));

} else {
var statearr_42772_42816 = state_42731__$1;
(statearr_42772_42816[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (16))){
var inst_42667 = (state_42731[(2)]);
var inst_42668 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42669 = figwheel.client.heads_up.display_exception.call(null,inst_42668);
var state_42731__$1 = (function (){var statearr_42773 = state_42731;
(statearr_42773[(13)] = inst_42667);

return statearr_42773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(17),inst_42669);
} else {
if((state_val_42732 === (30))){
var inst_42703 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42704 = figwheel.client.heads_up.display_warning.call(null,inst_42703);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(33),inst_42704);
} else {
if((state_val_42732 === (10))){
var inst_42661 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42774_42817 = state_42731__$1;
(statearr_42774_42817[(2)] = inst_42661);

(statearr_42774_42817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (18))){
var inst_42677 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42678 = figwheel.client.heads_up.display_exception.call(null,inst_42677);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(21),inst_42678);
} else {
if((state_val_42732 === (37))){
var inst_42714 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
var statearr_42775_42818 = state_42731__$1;
(statearr_42775_42818[(2)] = inst_42714);

(statearr_42775_42818[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (8))){
var inst_42653 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42731__$1,(11),inst_42653);
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
});})(c__34465__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34353__auto__,c__34465__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto____0 = (function (){
var statearr_42779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42779[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto__);

(statearr_42779[(1)] = (1));

return statearr_42779;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto____1 = (function (state_42731){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_42731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e42780){if((e42780 instanceof Object)){
var ex__34357__auto__ = e42780;
var statearr_42781_42819 = state_42731;
(statearr_42781_42819[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42820 = state_42731;
state_42731 = G__42820;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto__ = function(state_42731){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto____1.call(this,state_42731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__,msg_hist,msg_names,msg))
})();
var state__34467__auto__ = (function (){var statearr_42782 = f__34466__auto__.call(null);
(statearr_42782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_42782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__,msg_hist,msg_names,msg))
);

return c__34465__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34465__auto___42883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto___42883,ch){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto___42883,ch){
return (function (state_42866){
var state_val_42867 = (state_42866[(1)]);
if((state_val_42867 === (1))){
var state_42866__$1 = state_42866;
var statearr_42868_42884 = state_42866__$1;
(statearr_42868_42884[(2)] = null);

(statearr_42868_42884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42867 === (2))){
var state_42866__$1 = state_42866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42866__$1,(4),ch);
} else {
if((state_val_42867 === (3))){
var inst_42864 = (state_42866[(2)]);
var state_42866__$1 = state_42866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42866__$1,inst_42864);
} else {
if((state_val_42867 === (4))){
var inst_42854 = (state_42866[(7)]);
var inst_42854__$1 = (state_42866[(2)]);
var state_42866__$1 = (function (){var statearr_42869 = state_42866;
(statearr_42869[(7)] = inst_42854__$1);

return statearr_42869;
})();
if(cljs.core.truth_(inst_42854__$1)){
var statearr_42870_42885 = state_42866__$1;
(statearr_42870_42885[(1)] = (5));

} else {
var statearr_42871_42886 = state_42866__$1;
(statearr_42871_42886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42867 === (5))){
var inst_42854 = (state_42866[(7)]);
var inst_42856 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42854);
var state_42866__$1 = state_42866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42866__$1,(8),inst_42856);
} else {
if((state_val_42867 === (6))){
var state_42866__$1 = state_42866;
var statearr_42872_42887 = state_42866__$1;
(statearr_42872_42887[(2)] = null);

(statearr_42872_42887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42867 === (7))){
var inst_42862 = (state_42866[(2)]);
var state_42866__$1 = state_42866;
var statearr_42873_42888 = state_42866__$1;
(statearr_42873_42888[(2)] = inst_42862);

(statearr_42873_42888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42867 === (8))){
var inst_42858 = (state_42866[(2)]);
var state_42866__$1 = (function (){var statearr_42874 = state_42866;
(statearr_42874[(8)] = inst_42858);

return statearr_42874;
})();
var statearr_42875_42889 = state_42866__$1;
(statearr_42875_42889[(2)] = null);

(statearr_42875_42889[(1)] = (2));


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
});})(c__34465__auto___42883,ch))
;
return ((function (switch__34353__auto__,c__34465__auto___42883,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34354__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34354__auto____0 = (function (){
var statearr_42879 = [null,null,null,null,null,null,null,null,null];
(statearr_42879[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34354__auto__);

(statearr_42879[(1)] = (1));

return statearr_42879;
});
var figwheel$client$heads_up_plugin_$_state_machine__34354__auto____1 = (function (state_42866){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_42866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e42880){if((e42880 instanceof Object)){
var ex__34357__auto__ = e42880;
var statearr_42881_42890 = state_42866;
(statearr_42881_42890[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42891 = state_42866;
state_42866 = G__42891;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34354__auto__ = function(state_42866){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34354__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34354__auto____1.call(this,state_42866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34354__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34354__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto___42883,ch))
})();
var state__34467__auto__ = (function (){var statearr_42882 = f__34466__auto__.call(null);
(statearr_42882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto___42883);

return statearr_42882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto___42883,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__){
return (function (state_42912){
var state_val_42913 = (state_42912[(1)]);
if((state_val_42913 === (1))){
var inst_42907 = cljs.core.async.timeout.call(null,(3000));
var state_42912__$1 = state_42912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42912__$1,(2),inst_42907);
} else {
if((state_val_42913 === (2))){
var inst_42909 = (state_42912[(2)]);
var inst_42910 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42912__$1 = (function (){var statearr_42914 = state_42912;
(statearr_42914[(7)] = inst_42909);

return statearr_42914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42912__$1,inst_42910);
} else {
return null;
}
}
});})(c__34465__auto__))
;
return ((function (switch__34353__auto__,c__34465__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34354__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34354__auto____0 = (function (){
var statearr_42918 = [null,null,null,null,null,null,null,null];
(statearr_42918[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34354__auto__);

(statearr_42918[(1)] = (1));

return statearr_42918;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34354__auto____1 = (function (state_42912){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_42912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e42919){if((e42919 instanceof Object)){
var ex__34357__auto__ = e42919;
var statearr_42920_42922 = state_42912;
(statearr_42920_42922[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42923 = state_42912;
state_42912 = G__42923;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34354__auto__ = function(state_42912){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34354__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34354__auto____1.call(this,state_42912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34354__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34354__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__))
})();
var state__34467__auto__ = (function (){var statearr_42921 = f__34466__auto__.call(null);
(statearr_42921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_42921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__))
);

return c__34465__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34466__auto__ = (function (){var switch__34353__auto__ = ((function (c__34465__auto__,figwheel_version,temp__4657__auto__){
return (function (state_42946){
var state_val_42947 = (state_42946[(1)]);
if((state_val_42947 === (1))){
var inst_42940 = cljs.core.async.timeout.call(null,(2000));
var state_42946__$1 = state_42946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42946__$1,(2),inst_42940);
} else {
if((state_val_42947 === (2))){
var inst_42942 = (state_42946[(2)]);
var inst_42943 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_42944 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42943);
var state_42946__$1 = (function (){var statearr_42948 = state_42946;
(statearr_42948[(7)] = inst_42942);

return statearr_42948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42946__$1,inst_42944);
} else {
return null;
}
}
});})(c__34465__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__34353__auto__,c__34465__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto____0 = (function (){
var statearr_42952 = [null,null,null,null,null,null,null,null];
(statearr_42952[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto__);

(statearr_42952[(1)] = (1));

return statearr_42952;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto____1 = (function (state_42946){
while(true){
var ret_value__34355__auto__ = (function (){try{while(true){
var result__34356__auto__ = switch__34353__auto__.call(null,state_42946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34356__auto__;
}
break;
}
}catch (e42953){if((e42953 instanceof Object)){
var ex__34357__auto__ = e42953;
var statearr_42954_42956 = state_42946;
(statearr_42954_42956[(5)] = ex__34357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42957 = state_42946;
state_42946 = G__42957;
continue;
} else {
return ret_value__34355__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto__ = function(state_42946){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto____1.call(this,state_42946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34354__auto__;
})()
;})(switch__34353__auto__,c__34465__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34467__auto__ = (function (){var statearr_42955 = f__34466__auto__.call(null);
(statearr_42955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34465__auto__);

return statearr_42955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__,figwheel_version,temp__4657__auto__))
);

return c__34465__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42958){
var map__42962 = p__42958;
var map__42962__$1 = ((((!((map__42962 == null)))?((((map__42962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42962):map__42962);
var file = cljs.core.get.call(null,map__42962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42962__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42962__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42964 = "";
var G__42964__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42964),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42964);
var G__42964__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42964__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42964__$1);
if(cljs.core.truth_((function (){var and__31504__auto__ = line;
if(cljs.core.truth_(and__31504__auto__)){
return column;
} else {
return and__31504__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42964__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42964__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42965){
var map__42972 = p__42965;
var map__42972__$1 = ((((!((map__42972 == null)))?((((map__42972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42972):map__42972);
var ed = map__42972__$1;
var formatted_exception = cljs.core.get.call(null,map__42972__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42972__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42972__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42974_42978 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42975_42979 = null;
var count__42976_42980 = (0);
var i__42977_42981 = (0);
while(true){
if((i__42977_42981 < count__42976_42980)){
var msg_42982 = cljs.core._nth.call(null,chunk__42975_42979,i__42977_42981);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42982);

var G__42983 = seq__42974_42978;
var G__42984 = chunk__42975_42979;
var G__42985 = count__42976_42980;
var G__42986 = (i__42977_42981 + (1));
seq__42974_42978 = G__42983;
chunk__42975_42979 = G__42984;
count__42976_42980 = G__42985;
i__42977_42981 = G__42986;
continue;
} else {
var temp__4657__auto___42987 = cljs.core.seq.call(null,seq__42974_42978);
if(temp__4657__auto___42987){
var seq__42974_42988__$1 = temp__4657__auto___42987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42974_42988__$1)){
var c__32335__auto___42989 = cljs.core.chunk_first.call(null,seq__42974_42988__$1);
var G__42990 = cljs.core.chunk_rest.call(null,seq__42974_42988__$1);
var G__42991 = c__32335__auto___42989;
var G__42992 = cljs.core.count.call(null,c__32335__auto___42989);
var G__42993 = (0);
seq__42974_42978 = G__42990;
chunk__42975_42979 = G__42991;
count__42976_42980 = G__42992;
i__42977_42981 = G__42993;
continue;
} else {
var msg_42994 = cljs.core.first.call(null,seq__42974_42988__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42994);

var G__42995 = cljs.core.next.call(null,seq__42974_42988__$1);
var G__42996 = null;
var G__42997 = (0);
var G__42998 = (0);
seq__42974_42978 = G__42995;
chunk__42975_42979 = G__42996;
count__42976_42980 = G__42997;
i__42977_42981 = G__42998;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42999){
var map__43002 = p__42999;
var map__43002__$1 = ((((!((map__43002 == null)))?((((map__43002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43002):map__43002);
var w = map__43002__$1;
var message = cljs.core.get.call(null,map__43002__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__31504__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__31504__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__31504__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43014 = cljs.core.seq.call(null,plugins);
var chunk__43015 = null;
var count__43016 = (0);
var i__43017 = (0);
while(true){
if((i__43017 < count__43016)){
var vec__43018 = cljs.core._nth.call(null,chunk__43015,i__43017);
var k = cljs.core.nth.call(null,vec__43018,(0),null);
var plugin = cljs.core.nth.call(null,vec__43018,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43024 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43014,chunk__43015,count__43016,i__43017,pl_43024,vec__43018,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43024.call(null,msg_hist);
});})(seq__43014,chunk__43015,count__43016,i__43017,pl_43024,vec__43018,k,plugin))
);
} else {
}

var G__43025 = seq__43014;
var G__43026 = chunk__43015;
var G__43027 = count__43016;
var G__43028 = (i__43017 + (1));
seq__43014 = G__43025;
chunk__43015 = G__43026;
count__43016 = G__43027;
i__43017 = G__43028;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43014);
if(temp__4657__auto__){
var seq__43014__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43014__$1)){
var c__32335__auto__ = cljs.core.chunk_first.call(null,seq__43014__$1);
var G__43029 = cljs.core.chunk_rest.call(null,seq__43014__$1);
var G__43030 = c__32335__auto__;
var G__43031 = cljs.core.count.call(null,c__32335__auto__);
var G__43032 = (0);
seq__43014 = G__43029;
chunk__43015 = G__43030;
count__43016 = G__43031;
i__43017 = G__43032;
continue;
} else {
var vec__43021 = cljs.core.first.call(null,seq__43014__$1);
var k = cljs.core.nth.call(null,vec__43021,(0),null);
var plugin = cljs.core.nth.call(null,vec__43021,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43033 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43014,chunk__43015,count__43016,i__43017,pl_43033,vec__43021,k,plugin,seq__43014__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43033.call(null,msg_hist);
});})(seq__43014,chunk__43015,count__43016,i__43017,pl_43033,vec__43021,k,plugin,seq__43014__$1,temp__4657__auto__))
);
} else {
}

var G__43034 = cljs.core.next.call(null,seq__43014__$1);
var G__43035 = null;
var G__43036 = (0);
var G__43037 = (0);
seq__43014 = G__43034;
chunk__43015 = G__43035;
count__43016 = G__43036;
i__43017 = G__43037;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args43038 = [];
var len__32629__auto___43045 = arguments.length;
var i__32630__auto___43046 = (0);
while(true){
if((i__32630__auto___43046 < len__32629__auto___43045)){
args43038.push((arguments[i__32630__auto___43046]));

var G__43047 = (i__32630__auto___43046 + (1));
i__32630__auto___43046 = G__43047;
continue;
} else {
}
break;
}

var G__43040 = args43038.length;
switch (G__43040) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43038.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__43041_43049 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43042_43050 = null;
var count__43043_43051 = (0);
var i__43044_43052 = (0);
while(true){
if((i__43044_43052 < count__43043_43051)){
var msg_43053 = cljs.core._nth.call(null,chunk__43042_43050,i__43044_43052);
figwheel.client.socket.handle_incoming_message.call(null,msg_43053);

var G__43054 = seq__43041_43049;
var G__43055 = chunk__43042_43050;
var G__43056 = count__43043_43051;
var G__43057 = (i__43044_43052 + (1));
seq__43041_43049 = G__43054;
chunk__43042_43050 = G__43055;
count__43043_43051 = G__43056;
i__43044_43052 = G__43057;
continue;
} else {
var temp__4657__auto___43058 = cljs.core.seq.call(null,seq__43041_43049);
if(temp__4657__auto___43058){
var seq__43041_43059__$1 = temp__4657__auto___43058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43041_43059__$1)){
var c__32335__auto___43060 = cljs.core.chunk_first.call(null,seq__43041_43059__$1);
var G__43061 = cljs.core.chunk_rest.call(null,seq__43041_43059__$1);
var G__43062 = c__32335__auto___43060;
var G__43063 = cljs.core.count.call(null,c__32335__auto___43060);
var G__43064 = (0);
seq__43041_43049 = G__43061;
chunk__43042_43050 = G__43062;
count__43043_43051 = G__43063;
i__43044_43052 = G__43064;
continue;
} else {
var msg_43065 = cljs.core.first.call(null,seq__43041_43059__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43065);

var G__43066 = cljs.core.next.call(null,seq__43041_43059__$1);
var G__43067 = null;
var G__43068 = (0);
var G__43069 = (0);
seq__43041_43049 = G__43066;
chunk__43042_43050 = G__43067;
count__43043_43051 = G__43068;
i__43044_43052 = G__43069;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__32636__auto__ = [];
var len__32629__auto___43074 = arguments.length;
var i__32630__auto___43075 = (0);
while(true){
if((i__32630__auto___43075 < len__32629__auto___43074)){
args__32636__auto__.push((arguments[i__32630__auto___43075]));

var G__43076 = (i__32630__auto___43075 + (1));
i__32630__auto___43075 = G__43076;
continue;
} else {
}
break;
}

var argseq__32637__auto__ = ((((0) < args__32636__auto__.length))?(new cljs.core.IndexedSeq(args__32636__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__32637__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43071){
var map__43072 = p__43071;
var map__43072__$1 = ((((!((map__43072 == null)))?((((map__43072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43072):map__43072);
var opts = map__43072__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43070){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43070));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43078){if((e43078 instanceof Error)){
var e = e43078;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43078;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__43082){
var map__43083 = p__43082;
var map__43083__$1 = ((((!((map__43083 == null)))?((((map__43083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43083):map__43083);
var msg_name = cljs.core.get.call(null,map__43083__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1495209125634