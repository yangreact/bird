/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";function t(t){let r,i=!0,c=[],a=!1;const d={initialScrollProgress:void 0},l=!!navigator.serviceWorker,u=(t,e)=>{if(t&&(e&&(e.classList.remove("vscode-light","vscode-dark","vscode-high-contrast"),e.classList.add(d.activeTheme)),d.styles))for(const e of Object.keys(d.styles))t.documentElement.style.setProperty(`--${e}`,d.styles[e])},m=e=>{if(!e||!e.view||!e.view.document)return;let n=e.view.document.getElementsByTagName("base")[0],o=e.target;for(;o;){if(o.tagName&&"a"===o.tagName.toLowerCase()&&o.href){if("#"===o.getAttribute("href"))e.view.scrollTo(0,0);else if(o.hash&&(o.getAttribute("href")===o.hash||n&&o.href.indexOf(n.href)>=0)){let t=e.view.document.getElementById(o.hash.substr(1,o.hash.length-1));t&&t.scrollIntoView()}else t.postMessage("did-click-link",o.href.baseVal||o.href);e.preventDefault();break}o=o.parentNode}};let g=!1;document.addEventListener("DOMContentLoaded",()=>{const f=document.location.search.match(/\bid=([\w-]+)/),v=f?f[1]:void 0;if(!document.body)return
;t.onMessage("styles",(t,e)=>{d.styles=e.styles,d.activeTheme=e.activeTheme;const o=n();o&&o.contentDocument&&u(o.contentDocument,o.contentDocument.body)}),t.onMessage("focus",()=>{const t=n();t&&t.contentWindow.focus()});let w=0;t.onMessage("content",async(e,f)=>{function b(e){if(clearTimeout(r),r=void 0,r=setTimeout(()=>{clearTimeout(r),r=void 0,T(e.contentDocument,e.contentWindow)},200),e.contentWindow.addEventListener("load",function(t){r&&(clearTimeout(r),r=void 0,T(t.target,this))}),l||(e.contentWindow.onbeforeunload=(()=>a?(t.postMessage("do-reload"),!1):(console.log("prevented webview navigation"),!1))),e.contentWindow.addEventListener("click",m),!l){let n=!1;e.contentWindow.addEventListener("mousedown",()=>{n=!0});const o=e=>{n||t.postMessage("synthetic-mouse-event",{type:e.type,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY})};e.contentWindow.addEventListener("mouseup",t=>{o(t),n=!1}),e.contentWindow.addEventListener("mousemove",o)}}const h=++w;if(await t.ready,h!==w)return
;const y=f.options,p=f.contents,k=(new DOMParser).parseFromString(p,"text/html");if(k.querySelectorAll("a").forEach(t=>{t.title||(t.title=t.getAttribute("href"))}),y.allowScripts){const t=k.createElement("script")
;t.textContent=`\n\t\t\t\t\tconst acquireVsCodeApi = (function() {\n\t\t\t\t\t\tconst originalPostMessage = window.parent.postMessage.bind(window.parent);\n\t\t\t\t\t\tconst targetOrigin = '*';\n\t\t\t\t\t\tlet acquired = false;\n\n\t\t\t\t\t\tlet state = ${f.state?`JSON.parse(${JSON.stringify(f.state)})`:void 0};\n\n\t\t\t\t\t\treturn () => {\n\t\t\t\t\t\t\tif (acquired) {\n\t\t\t\t\t\t\t\tthrow new Error('An instance of the VS Code API has already been acquired');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tacquired = true;\n\t\t\t\t\t\t\treturn Object.freeze({\n\t\t\t\t\t\t\t\tpostMessage: function(msg) {\n\t\t\t\t\t\t\t\t\treturn originalPostMessage({ command: 'onmessage', data: msg }, targetOrigin);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tsetState: function(newState) {\n\t\t\t\t\t\t\t\t\tstate = newState;\n\t\t\t\t\t\t\t\t\toriginalPostMessage({ command: 'do-update-state', data: JSON.stringify(newState) }, targetOrigin);\n\t\t\t\t\t\t\t\t\treturn newState;\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\tgetState: function() {\n\t\t\t\t\t\t\t\t\treturn state;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t};\n\t\t\t\t\t})();\n\t\t\t\t\tdelete window.parent;\n\t\t\t\t\tdelete window.top;\n\t\t\t\t\tdelete window.frameElement;\n\t\t\t\t`,
k.head.prepend(t)}const M=k.createElement("style");M.id="_defaultStyles",M.innerHTML=s,k.head.prepend(M),u(k,k.body),t.injectHtml&&t.injectHtml(k);const E=n(),D=i;let S;if(i)i=!1,S=((t,e)=>{isNaN(d.initialScrollProgress)||0===e.scrollY&&e.scroll(0,t.clientHeight*d.initialScrollProgress)});else{const t=E&&E.contentDocument&&E.contentDocument.body?E.contentWindow.scrollY:0;S=((e,n)=>{0===n.scrollY&&n.scroll(0,t)})}const x=o();x&&(x.setAttribute("id",""),document.body.removeChild(x)),D||(c=[]);const L=document.createElement("iframe");L.setAttribute("id","pending-frame"),L.setAttribute("frameborder","0"),L.setAttribute("sandbox",y.allowScripts?"allow-scripts allow-forms allow-same-origin":"allow-same-origin"),l&&(L.src=`/fake.html?id=${v}`),L.style.cssText="display: block; margin: 0; overflow: hidden; position: absolute; width: 100%; height: 100%; visibility: hidden",document.body.appendChild(L),l||L.contentDocument.open(),L.contentWindow.addEventListener("keydown",e=>{t.postMessage("did-keydown",{key:e.key,
keyCode:e.keyCode,code:e.code,shiftKey:e.shiftKey,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,repeat:e.repeat})}),L.contentWindow.addEventListener("DOMContentLoaded",t=>{l&&(L.contentDocument.open(),L.contentDocument.write("<!DOCTYPE html>\n"+k.documentElement.outerHTML),L.contentDocument.close(),b(L));const e=t.target?t.target:void 0;e&&u(e,e.body)});const T=(e,s)=>{e&&e.body&&S(e.body,s);const r=o();if(r&&r.contentDocument&&r.contentDocument===e){const e=n();e&&document.body.removeChild(e),u(r.contentDocument,r.contentDocument.body),r.setAttribute("id","active-frame"),r.style.visibility="visible",t.focusIframeOnCreate&&r.contentWindow.focus(),s.addEventListener("scroll",e=>{if(!e.target||!e.target.body)return;if(g)return;const n=e.currentTarget.scrollY/e.target.body.clientHeight;isNaN(n)||(g=!0,window.requestAnimationFrame(()=>{try{t.postMessage("did-scroll",n)}catch(t){}g=!1}))}),c.forEach(t=>{s.postMessage(t,"*")}),c=[]}};l||b(L),l||(L.contentDocument.write("<!DOCTYPE html>"),
L.contentDocument.write(k.documentElement.innerHTML),L.contentDocument.close()),t.postMessage("did-set-content",void 0)}),t.onMessage("message",(t,e)=>{if(!o()){const t=n();if(t)return void t.contentWindow.postMessage(e,"*")}c.push(e)}),t.onMessage("initial-scroll-position",(t,e)=>{d.initialScrollProgress=e}),t.onMessage("devtools-opened",()=>{a=!0}),e({onFocus:()=>t.postMessage("did-focus"),onBlur:()=>t.postMessage("did-blur")}),t.postMessage("webview-ready",{})})}const e=({onFocus:t,onBlur:e})=>{let n=document.hasFocus();setInterval(()=>{const o=document.hasFocus();o!==n&&(n=o,o?t():e())},50)
},n=()=>document.getElementById("active-frame"),o=()=>document.getElementById("pending-frame"),s="\n\tbody {\n\t\tbackground-color: var(--vscode-editor-background);\n\t\tcolor: var(--vscode-editor-foreground);\n\t\tfont-family: var(--vscode-font-family);\n\t\tfont-weight: var(--vscode-font-weight);\n\t\tfont-size: var(--vscode-font-size);\n\t\tmargin: 0;\n\t\tpadding: 0 20px;\n\t}\n\n\timg {\n\t\tmax-width: 100%;\n\t\tmax-height: 100%;\n\t}\n\n\ta {\n\t\tcolor: var(--vscode-textLink-foreground);\n\t}\n\n\ta:hover {\n\t\tcolor: var(--vscode-textLink-activeForeground);\n\t}\n\n\ta:focus,\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 1px solid -webkit-focus-ring-color;\n\t\toutline-offset: -1px;\n\t}\n\n\tcode {\n\t\tcolor: var(--vscode-textPreformat-foreground);\n\t}\n\n\tblockquote {\n\t\tbackground: var(--vscode-textBlockQuote-background);\n\t\tborder-color: var(--vscode-textBlockQuote-border);\n\t}\n\n\t::-webkit-scrollbar {\n\t\twidth: 10px;\n\t\theight: 10px;\n\t}\n\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: var(--vscode-scrollbarSlider-background);\n\t}\n\t::-webkit-scrollbar-thumb:hover {\n\t\tbackground-color: var(--vscode-scrollbarSlider-hoverBackground);\n\t}\n\t::-webkit-scrollbar-thumb:active {\n\t\tbackground-color: var(--vscode-scrollbarSlider-activeBackground);\n\t}"
;"undefined"!=typeof module?module.exports=t:window.createWebviewManager=t}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/0f3794b38477eea13fb47fbe15a42798e6129338/core/vs\workbench\contrib\webview\browser\pre\main.js.map
