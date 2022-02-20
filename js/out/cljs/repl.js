// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41809){
var map__41834 = p__41809;
var map__41834__$1 = ((((!((map__41834 == null)))?((((map__41834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41834):map__41834);
var m = map__41834__$1;
var n = cljs.core.get.call(null,map__41834__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41834__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41836_41858 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41837_41859 = null;
var count__41838_41860 = (0);
var i__41839_41861 = (0);
while(true){
if((i__41839_41861 < count__41838_41860)){
var f_41862 = cljs.core._nth.call(null,chunk__41837_41859,i__41839_41861);
cljs.core.println.call(null,"  ",f_41862);

var G__41863 = seq__41836_41858;
var G__41864 = chunk__41837_41859;
var G__41865 = count__41838_41860;
var G__41866 = (i__41839_41861 + (1));
seq__41836_41858 = G__41863;
chunk__41837_41859 = G__41864;
count__41838_41860 = G__41865;
i__41839_41861 = G__41866;
continue;
} else {
var temp__4657__auto___41867 = cljs.core.seq.call(null,seq__41836_41858);
if(temp__4657__auto___41867){
var seq__41836_41868__$1 = temp__4657__auto___41867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41836_41868__$1)){
var c__32335__auto___41869 = cljs.core.chunk_first.call(null,seq__41836_41868__$1);
var G__41870 = cljs.core.chunk_rest.call(null,seq__41836_41868__$1);
var G__41871 = c__32335__auto___41869;
var G__41872 = cljs.core.count.call(null,c__32335__auto___41869);
var G__41873 = (0);
seq__41836_41858 = G__41870;
chunk__41837_41859 = G__41871;
count__41838_41860 = G__41872;
i__41839_41861 = G__41873;
continue;
} else {
var f_41874 = cljs.core.first.call(null,seq__41836_41868__$1);
cljs.core.println.call(null,"  ",f_41874);

var G__41875 = cljs.core.next.call(null,seq__41836_41868__$1);
var G__41876 = null;
var G__41877 = (0);
var G__41878 = (0);
seq__41836_41858 = G__41875;
chunk__41837_41859 = G__41876;
count__41838_41860 = G__41877;
i__41839_41861 = G__41878;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41879 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__31516__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__31516__auto__)){
return or__31516__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41879);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41879)))?cljs.core.second.call(null,arglists_41879):arglists_41879));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41840_41880 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41841_41881 = null;
var count__41842_41882 = (0);
var i__41843_41883 = (0);
while(true){
if((i__41843_41883 < count__41842_41882)){
var vec__41844_41884 = cljs.core._nth.call(null,chunk__41841_41881,i__41843_41883);
var name_41885 = cljs.core.nth.call(null,vec__41844_41884,(0),null);
var map__41847_41886 = cljs.core.nth.call(null,vec__41844_41884,(1),null);
var map__41847_41887__$1 = ((((!((map__41847_41886 == null)))?((((map__41847_41886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41847_41886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41847_41886):map__41847_41886);
var doc_41888 = cljs.core.get.call(null,map__41847_41887__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41889 = cljs.core.get.call(null,map__41847_41887__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41885);

cljs.core.println.call(null," ",arglists_41889);

if(cljs.core.truth_(doc_41888)){
cljs.core.println.call(null," ",doc_41888);
} else {
}

var G__41890 = seq__41840_41880;
var G__41891 = chunk__41841_41881;
var G__41892 = count__41842_41882;
var G__41893 = (i__41843_41883 + (1));
seq__41840_41880 = G__41890;
chunk__41841_41881 = G__41891;
count__41842_41882 = G__41892;
i__41843_41883 = G__41893;
continue;
} else {
var temp__4657__auto___41894 = cljs.core.seq.call(null,seq__41840_41880);
if(temp__4657__auto___41894){
var seq__41840_41895__$1 = temp__4657__auto___41894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41840_41895__$1)){
var c__32335__auto___41896 = cljs.core.chunk_first.call(null,seq__41840_41895__$1);
var G__41897 = cljs.core.chunk_rest.call(null,seq__41840_41895__$1);
var G__41898 = c__32335__auto___41896;
var G__41899 = cljs.core.count.call(null,c__32335__auto___41896);
var G__41900 = (0);
seq__41840_41880 = G__41897;
chunk__41841_41881 = G__41898;
count__41842_41882 = G__41899;
i__41843_41883 = G__41900;
continue;
} else {
var vec__41849_41901 = cljs.core.first.call(null,seq__41840_41895__$1);
var name_41902 = cljs.core.nth.call(null,vec__41849_41901,(0),null);
var map__41852_41903 = cljs.core.nth.call(null,vec__41849_41901,(1),null);
var map__41852_41904__$1 = ((((!((map__41852_41903 == null)))?((((map__41852_41903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41852_41903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41852_41903):map__41852_41903);
var doc_41905 = cljs.core.get.call(null,map__41852_41904__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41906 = cljs.core.get.call(null,map__41852_41904__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41902);

cljs.core.println.call(null," ",arglists_41906);

if(cljs.core.truth_(doc_41905)){
cljs.core.println.call(null," ",doc_41905);
} else {
}

var G__41907 = cljs.core.next.call(null,seq__41840_41895__$1);
var G__41908 = null;
var G__41909 = (0);
var G__41910 = (0);
seq__41840_41880 = G__41907;
chunk__41841_41881 = G__41908;
count__41842_41882 = G__41909;
i__41843_41883 = G__41910;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41854 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41855 = null;
var count__41856 = (0);
var i__41857 = (0);
while(true){
if((i__41857 < count__41856)){
var role = cljs.core._nth.call(null,chunk__41855,i__41857);
var temp__4657__auto___41911__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41911__$1)){
var spec_41912 = temp__4657__auto___41911__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_41912));
} else {
}

var G__41913 = seq__41854;
var G__41914 = chunk__41855;
var G__41915 = count__41856;
var G__41916 = (i__41857 + (1));
seq__41854 = G__41913;
chunk__41855 = G__41914;
count__41856 = G__41915;
i__41857 = G__41916;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41854);
if(temp__4657__auto____$1){
var seq__41854__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41854__$1)){
var c__32335__auto__ = cljs.core.chunk_first.call(null,seq__41854__$1);
var G__41917 = cljs.core.chunk_rest.call(null,seq__41854__$1);
var G__41918 = c__32335__auto__;
var G__41919 = cljs.core.count.call(null,c__32335__auto__);
var G__41920 = (0);
seq__41854 = G__41917;
chunk__41855 = G__41918;
count__41856 = G__41919;
i__41857 = G__41920;
continue;
} else {
var role = cljs.core.first.call(null,seq__41854__$1);
var temp__4657__auto___41921__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41921__$2)){
var spec_41922 = temp__4657__auto___41921__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_41922));
} else {
}

var G__41923 = cljs.core.next.call(null,seq__41854__$1);
var G__41924 = null;
var G__41925 = (0);
var G__41926 = (0);
seq__41854 = G__41923;
chunk__41855 = G__41924;
count__41856 = G__41925;
i__41857 = G__41926;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1495209124375