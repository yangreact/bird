/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function parseURLQueryArgs(){return(window.location.search||"").split(/[?&]/).filter(function(e){return!!e}).map(function(e){return e.split("=")}).filter(function(e){return 2===e.length}).reduce(function(e,n){return e[n[0]]=decodeURIComponent(n[1]),e},{})}function registerDeveloperKeybindings(){const e=require("electron").ipcRenderer,n="darwin"===process.platform?"meta-alt-73":"ctrl-shift-73",o="darwin"===process.platform?"meta-82":"ctrl-82";let t=function(t){const r=function(e){return[e.ctrlKey?"ctrl-":"",e.metaKey?"meta-":"",e.altKey?"alt-":"",e.shiftKey?"shift-":"",e.keyCode].join("")}(t);r===n||"123"===r?e.send("vscode:toggleDevTools"):r===o&&e.send("vscode:reloadWindow")};return window.addEventListener("keydown",t),function(){t&&(window.removeEventListener("keydown",t),t=void 0)}}function onUnexpectedError(e,n){const o=require("electron").ipcRenderer;n&&o.send("vscode:openDevTools"),console.error("[uncaught exception]: "+e),e.stack&&console.error(e.stack)}
const bootstrap=require("./bootstrap");exports.assign=function(e,n){return Object.keys(n).reduce(function(e,o){return e[o]=n[o],e},e)},exports.load=function(e,n,o){const t=require("electron").webFrame,r=require("path"),s=parseURLQueryArgs(),i=JSON.parse(s.config||"{}")||{},a=i.zoomLevel;"number"==typeof a&&0!==a&&t.setZoomLevel(a),process.on("uncaughtException",function(e){onUnexpectedError(e,c)});const c=(process.env.VSCODE_DEV||!!i.extensionDevelopmentPath)&&!i.extensionTestsPath;let d;(c||o&&o.forceEnableDeveloperKeybindings)&&(d=registerDeveloperKeybindings()),exports.assign(process.env,i.userEnv),bootstrap.enableASARSupport(r.join(i.appRoot,"node_modules")),o&&"function"==typeof o.canModifyDOM&&o.canModifyDOM(i);const p=bootstrap.setupNLS();let l=p.availableLanguages["*"]||"en";"zh-tw"===l?l="zh-Hant":"zh-cn"===l&&(l="zh-Hans"),window.document.documentElement.setAttribute("lang",l);const u=require(i.appRoot+"/out/vs/loader.js"),f=u.require,m=u.require.define,g=u.require.nodeRequire;window.nodeRequire=g,
window.require=f,m("fs",["original-fs"],function(e){return e}),window.MonacoEnvironment={};const h={baseUrl:bootstrap.uriFromPath(i.appRoot)+"/out","vs/nls":p,
nodeModules:["electron","original-fs","agent-base","nan","readable-stream","strip-ansi","applicationinsights","diagnostic-channel","diagnostic-channel-publishers","zone.js","getmac","graceful-fs","http-proxy-agent","debug","https-proxy-agent","iconv-lite","jschardet","keytar","minimist","native-is-elevated","native-keymap","native-watchdog","node-pty","onigasm-umd","semver","spdlog","bindings","file-uri-to-path","sudo-prompt","v8-inspect-profiler","chrome-remote-interface","vscode-chokidar","vscode-anymatch","vscode-fsevents","vscode-nsfw","vscode-proxy-agent","socks-proxy-agent","vscode-ripgrep","vscode-sqlite3","vscode-textmate","vsda","xterm","xterm-addon-search","xterm-addon-web-links","yauzl","yazl","vscode-windows-ca-certs","node-addon-api","vscode-windows-registry","windows-foreground-love","windows-mutex","windows-process-tree","ansi-regex","async-each","buffer-crc32","core-util-is","ms","editions","es6-promisify","extract-opts","fd-slicer","fs-extra","glob-parent","inherits","is-binary-path","is-glob","isarray","lodash.isinteger","lodash.isundefined","mkdirp","oniguruma","path-is-absolute","prebuild-install","github-from-package","process-nextick-args","readdirp","string_decoder","safe-buffer","safer-buffer","util-deprecate","binary-extensions","commander","detect-libc","eachr","es6-promise","expand-template","is-extglob","jsonfile","micromatch","normalize-path","minimatch","node-abi","noop-logger","npmlog","os-homedir","pend","pump","rc","set-immediate-shim","simple-get","socks","tar-fs","tunnel-agent","typechecker","universalify","which-pm-runs","ws","are-we-there-yet","arr-diff","array-unique","async-limiter","brace-expansion","concat-map","braces","chownr","console-control-strings","decompress-response","deep-extend","end-of-stream","expand-brackets","extglob","filename-regex","gauge","ini","ip","kind-of","object.omit","once","parse-glob","regex-cache","remove-trailing-separator","set-blocking","simple-concat","smart-buffer","strip-json-comments","tar-stream","ultron","aproba","arr-flatten","balanced-match","bl","buffer-alloc","delegates","expand-range","for-own","fs-constants","glob-base","has-unicode","is-buffer","is-dotfile","is-equal-shallow","is-extendable","is-posix-bracket","is-primitive","mimic-response","object-assign","preserve","repeat-element","signal-exit","string-width","to-buffer","wide-align","is-fullwidth-code-point","wrappy","xtend","buffer-alloc-unsafe","buffer-fill","code-point-at","fill-range","for-in","is-number","isobject","number-is-nan","randomatic","repeat-string","async_hooks","assert","buffer","child_process","console","constants","crypto","cluster","dgram","dns","domain","events","fs","http","http2","https","inspector","module","net","os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","trace_events","tty","url","util","v8","vm","worker_threads","zlib","config"]
};i.nodeCachedDataDir&&(h.nodeCachedData={path:i.nodeCachedDataDir,seed:e.join("")}),o&&"function"==typeof o.beforeLoaderConfig&&o.beforeLoaderConfig(i,h),f.config(h),p.pseudo&&f(["vs/nls"],function(e){e.setPseudoTranslation(p.pseudo)}),o&&"function"==typeof o.beforeRequire&&o.beforeRequire(),f(e,e=>{try{const t=n(e,i);t&&"function"==typeof t.then&&t.then(()=>{d&&o&&o.removeDeveloperKeybindingsAfterLoad&&d()},e=>{onUnexpectedError(e,c)})}catch(e){onUnexpectedError(e,c)}})};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/0f3794b38477eea13fb47fbe15a42798e6129338/core/bootstrap-window.js.map
