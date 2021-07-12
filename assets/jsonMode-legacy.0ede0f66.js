System.register(["./index-legacy.5a4d6b16.js","./jsonWorker-legacy.77d14324.js","./preload-helper-legacy.b55d0c83.js","./index-legacy.4bebb2dc.js","./index-legacy.6dc78bad.js","./useAnimate-legacy.7eef3c2c.js","./editorWorker-legacy.a70776a5.js"],(function(e){"use strict";var t,n,r,o,i,a,s,u,c,l;return{setters:[function(e){t=e.e,n=e.R,r=e.l,o=e.a},function(e){i=e.I,a=e.C,s=e.D,u=e.F,c=e.S,l=e.c},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("setupMode",(function(e){var t=[],n=[],o=new d(e);t.push(o);var i=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.getLanguageServiceWorker.apply(o,e)};function a(){var t,o=e.languageId,a=e.modeConfiguration;z(n),a.documentFormattingEdits&&n.push(r.registerDocumentFormattingEditProvider(o,new x(i))),a.documentRangeFormattingEdits&&n.push(r.registerDocumentRangeFormattingEditProvider(o,new E(i))),a.completionItems&&n.push(r.registerCompletionItemProvider(o,new k(i))),a.hovers&&n.push(r.registerHoverProvider(o,new w(i))),a.documentSymbols&&n.push(r.registerDocumentSymbolProvider(o,new S(i))),a.tokens&&n.push(r.setTokensProvider(o,(t=!0,{getInitialState:function(){return new H(null,null,!1,null)},tokenize:function(e,n,r,o){return function(e,t,n,r,o){void 0===r&&(r=0);var i=0,a=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2}for(var s=l(t),u=n.lastWasColon,c=n.parents,d={tokens:[],endState:n.clone()};;){var f=r+s.getPosition(),g="",p=s.scan();if(17===p)break;if(f===r+s.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(s.getPosition(),3));switch(a&&(f-=i),a=i>0,p){case 1:c=q.push(c,0),g=R,u=!1;break;case 2:c=q.pop(c),g=R,u=!1;break;case 3:c=q.push(c,1),g=j,u=!1;break;case 4:c=q.pop(c),g=j,u=!1;break;case 6:g=D,u=!0;break;case 5:g=M,u=!1;break;case 8:case 9:g=W,u=!1;break;case 7:g=N,u=!1;break;case 10:var h=c?c.type:0;g=u||1===h?L:A,u=!1;break;case 11:g=V,u=!1}if(e)switch(p){case 12:g=U;break;case 13:g=K}d.endState=new H(n.getStateData(),s.getTokenError(),u,c),d.tokens.push({startIndex:f,scopes:g})}return d}(t,e,n,r)}}))),a.colors&&n.push(r.registerColorProvider(o,new T(i))),a.foldingRanges&&n.push(r.registerFoldingRangeProvider(o,new F(i))),a.diagnostics&&n.push(new f(o,i,e)),a.selectionRanges&&n.push(r.registerSelectionRangeProvider(o,new P(i)))}a(),t.push(r.setLanguageConfiguration(e.languageId,B));var s=e.modeConfiguration;return e.onDidChange((function(e){e.modeConfiguration!==s&&(s=e.modeConfiguration,a())})),t.push(O(n)),O(t)}));var d=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=t.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),f=function(){function e(e,n,r){var o=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var t,n=e.getModeId();n===o._languageId&&(o._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return o._doValidate(e.uri,n)}),500)})),o._doValidate(e.uri,n))},a=function(e){t.setModelMarkers(e,o._languageId,[]);var n=e.uri.toString(),r=o._listener[n];r&&(r.dispose(),delete o._listener[n])};this._disposables.push(t.onDidCreateModel(i)),this._disposables.push(t.onWillDisposeModel((function(e){a(e),o._resetSchema(e.uri)}))),this._disposables.push(t.onDidChangeModelLanguage((function(e){a(e.model),i(e.model),o._resetSchema(e.model.uri)}))),this._disposables.push(r.onDidChange((function(e){t.getModels().forEach((function(e){e.getModeId()===o._languageId&&(a(e),i(e))}))}))),this._disposables.push({dispose:function(){for(var e in t.getModels().forEach(a),o._listener)o._listener[e].dispose()}}),t.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then((function(t){t.resetSchema(e.toString())}))},e.prototype._doValidate=function(e,n){this._worker(e).then((function(r){return r.doValidation(e.toString()).then((function(r){var o=r.map((function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:g(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n})),i=t.getModel(e);i&&i.getModeId()===n&&t.setModelMarkers(i,n,o)}))})).then(void 0,(function(e){console.error(e)}))},e}();function g(e){switch(e){case s.Error:return o.Error;case s.Warning:return o.Warning;case s.Information:return o.Info;case s.Hint:return o.Hint;default:return o.Info}}function p(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function h(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function m(e){if(e)return new n(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function v(e){var t=r.CompletionItemKind;switch(e){case a.Text:return t.Text;case a.Method:return t.Method;case a.Function:return t.Function;case a.Constructor:return t.Constructor;case a.Field:return t.Field;case a.Variable:return t.Variable;case a.Class:return t.Class;case a.Interface:return t.Interface;case a.Module:return t.Module;case a.Property:return t.Property;case a.Unit:return t.Unit;case a.Value:return t.Value;case a.Enum:return t.Enum;case a.Keyword:return t.Keyword;case a.Snippet:return t.Snippet;case a.Color:return t.Color;case a.File:return t.File;case a.Reference:return t.Reference}return t.Property}function _(e){if(e)return{range:m(e.range),text:e.newText}}var k=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!1,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,o,a){var s=e.uri;return this._worker(s).then((function(e){return e.doComplete(s.toString(),p(t))})).then((function(o){if(o){var a=e.getWordUntilPosition(t),s=new n(t.lineNumber,a.startColumn,t.lineNumber,a.endColumn),u=o.items.map((function(e){var t,n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:s,kind:v(e.kind)};return e.textEdit&&(void 0!==(t=e.textEdit).insert&&void 0!==t.replace?n.range={insert:m(e.textEdit.insert),replace:m(e.textEdit.replace)}:n.range=m(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(_)),e.insertTextFormat===i.Snippet&&(n.insertTextRules=r.CompletionItemInsertTextRule.InsertAsSnippet),n}));return{isIncomplete:o.isIncomplete,suggestions:u}}}))},e}();function b(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function y(e){if(e)return Array.isArray(e)?e.map(b):[b(e)]}var w=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),p(t))})).then((function(e){if(e)return{range:m(e.range),contents:y(e.contents)}}))},e}();function C(e){var t=r.SymbolKind;switch(e){case c.File:return t.Array;case c.Module:return t.Module;case c.Namespace:return t.Namespace;case c.Package:return t.Package;case c.Class:return t.Class;case c.Method:return t.Method;case c.Property:return t.Property;case c.Field:return t.Field;case c.Constructor:return t.Constructor;case c.Enum:return t.Enum;case c.Interface:return t.Interface;case c.Function:return t.Function;case c.Variable:return t.Variable;case c.Constant:return t.Constant;case c.String:return t.String;case c.Number:return t.Number;case c.Boolean:return t.Boolean;case c.Array:return t.Array}return t.Function}var S=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentSymbols(n.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:C(e.kind),range:m(e.location.range),selectionRange:m(e.location.range),tags:[]}}))}))},e}();function I(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var x=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,I(t)).then((function(e){if(e&&0!==e.length)return e.map(_)}))}))},e}(),E=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=e.uri;return this._worker(o).then((function(e){return e.format(o.toString(),h(t),I(n)).then((function(e){if(e&&0!==e.length)return e.map(_)}))}))},e}(),T=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentColors(n.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:m(e.range)}}))}))},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),t.color,h(t.range))})).then((function(e){if(e)return e.map((function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=_(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(_)),t}))}))},e}(),F=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,n){var o=e.uri;return this._worker(o).then((function(e){return e.getFoldingRanges(o.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case u.Comment:return r.FoldingRangeKind.Comment;case u.Imports:return r.FoldingRangeKind.Imports;case u.Region:return r.FoldingRangeKind.Region}}(e.kind)),t}))}))},e}(),P=function(){function e(e){this._worker=e}return e.prototype.provideSelectionRanges=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),t.map(p))})).then((function(e){if(e)return e.map((function(e){for(var t=[];e;)t.push({range:m(e.range)}),e=e.parent;return t}))}))},e}(),R="delimiter.bracket.json",j="delimiter.array.json",D="delimiter.colon.json",M="delimiter.comma.json",W="keyword.json",N="keyword.json",L="string.value.json",V="number.json",A="string.key.json",K="comment.block.json",U="comment.line.json",q=function(){function e(e,t){this.parent=e,this.type=t}return e.pop=function(e){return e?e.parent:null},e.push=function(t,n){return new e(t,n)},e.equals=function(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t;){if(e===t)return!0;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0},e}(),H=function(){function e(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon,this.parents)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon&&q.equals(this.parents,t.parents)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}();function O(e){return{dispose:function(){return z(e)}}}function z(e){for(;e.length;)e.pop().dispose()}var B={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}}));