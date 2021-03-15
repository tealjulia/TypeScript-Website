(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"73Cn":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ERkP"),l=n("Wbzz"),a=function(e){var t=function(t){return e.active&&e.active.toLowerCase()===t?"active":""};return r.createElement("nav",{className:"navbar-sub dev-tools"},r.createElement("ul",{className:"nav"},r.createElement("li",{className:"name"},r.createElement("h3",null,"Developer Tools")),r.createElement("li",{style:{display:"none"}},r.createElement("a",{className:t("compiler api"),href:Object(l.withPrefix)("/dev/compiler")},"Compiler API")),r.createElement("li",null,r.createElement("a",{className:t("sandbox"),href:Object(l.withPrefix)("/dev/sandbox")},"Sandbox")),r.createElement("li",null,r.createElement("a",{className:t("twoslash"),href:Object(l.withPrefix)("/dev/twoslash")},"Twoslash")),r.createElement("li",null,r.createElement("a",{className:t("typescript vfs"),href:Object(l.withPrefix)("/dev/typescript-vfs")},"TypeScript VFS")),r.createElement("li",null,r.createElement("a",{className:t("playground plugins"),href:Object(l.withPrefix)("/dev/playground-plugins")},"Playground Plugins")),r.createElement("li",null,r.createElement("a",{className:t("bug workbench"),href:Object(l.withPrefix)("/dev/bug-workbench")},"Bug Workbench"))))}},"8WMy":function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),l=n("9Dj+"),a=n("Wbzz"),s=(n("pzji"),n("GO2c")),c=n("73Cn"),o=function(e){return r.createElement(r.Fragment,null,r.createElement(l.a,{title:"Developers - TypeScript VFS",description:"Run TypeScript in the browser, or anywhere - using a virtual file-system",lang:"en"},r.createElement("div",{id:"dev"},r.createElement(c.a,{active:"typescript vfs"}),r.createElement("div",{className:"raised content main-content-block"},r.createElement("div",{className:"split-fivehundred"},r.createElement("h1",{style:{marginTop:"20px"}},"Easy access to the compiler API"),r.createElement("p",null,"TypeScript VFS lets you create a self-contained TypeScript environment entirely under your control. This library is used to power the Playground, and provides the underlying tooling for ",r.createElement(a.Link,{to:"/dev/twoslash"},"twoslash")," code samples."),r.createElement("p",null,"There are 3 main uses for TypeScript VFS:"),r.createElement("ul",null,r.createElement("li",null,"Creating a TypeScript Program as an entry-point to the compiler API"),r.createElement("li",null,"Running TypeScript to emit files like ",r.createElement("code",null,"*.js"),", ",r.createElement("code",null,"*.d.ts")," or ",r.createElement("code",null,"*.map")),r.createElement("li",null,"Using TypeScript's language service to make the same calls an editor would make")),r.createElement("p",null,"You can learn more in the ",r.createElement("a",{href:"https://github.com/microsoft/TypeScript-Website/blob/v2/packages/typescript-vfs/"},"TypeScript VFS README"))),r.createElement("div",{className:"fivehundred",style:{borderLeft:"1px solid gray",padding:"20px"}},r.createElement("h3",null,"Setup with TypeScript from node_modules"),r.createElement("pre",{tabIndex:0},r.createElement("code",{className:"html-code"},"import ts from 'typescript'\nimport tsvfs from '@typescript/vfs'\n\nconst fsMap = tsvfs.createDefaultMapFromNodeModules({ target: ts.ScriptTarget.ES2015 })\nfsMap.set('index.ts', 'console.log(\"Hello World\")')\n\n// ....\n              ")),r.createElement("h3",null,"Use the TypeScript CDN to get your lib.d.ts files"),r.createElement("pre",{tabIndex:0},r.createElement("code",{className:"html-code"},"import ts from 'typescript'\nimport tsvfs from '@typescript/vfs'\n\nconst fsMap = await tsvfs.createDefaultMapFromCDN(compilerOptions, ts.version, true, ts)\nfsMap.set('index.ts', 'console.log(\"Hello World\")')\n\nconst system = tsvfs.createSystem(fsMap)\nconst host = tsvfs.createVirtualCompilerHost(system, compilerOptions, ts)\n\nconst program = ts.createProgram({\n  rootNames: [...fsMap.keys()],\n  options: compilerOptions,\n  host: host.compilerHost,\n})\n\n// This will update the fsMap with new files\n// for the .d.ts and .js files\nprogram.emit()\n\n// Now I can look at the AST for the .ts file too\nconst index = program.getSourceFile('index.ts')\n              ")))))))};t.default=function(e){return r.createElement(s.a,{locale:"en"},r.createElement(o,e))}},pzji:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-dev-typescript-vfs-tsx-fe6719d41d9e86f02004.js.map