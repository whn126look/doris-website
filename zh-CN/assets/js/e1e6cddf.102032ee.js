"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["336774"],{995394:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>a,assets:()=>c,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/pmod","title":"PMOD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/pmod.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/pmod","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/pmod","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"PMOD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FLOOR","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/floor"},"next":{"title":"ROUND","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/round"}}'),i=t("785893"),o=t("250065");let l={title:"PMOD",language:"zh-CN"},r=void 0,c={},d=[{value:"pmod",id:"pmod",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"pmod",children:"pmod"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"BIGINT PMOD(BIGINT x, BIGINT y)\nDOUBLE PMOD(DOUBLE x, DOUBLE y)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD4\u56DE\u5728\u6A21\u7CFB\u4E0B",(0,i.jsx)(e.code,{children:"x mod y"}),"\u7684\u6700\u5C0F\u6B63\u6570\u89E3.\n\u5177\u4F53\u5730\u6765\u8BF4, \u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"(x%y+y)%y"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"MySQL [test]> SELECT PMOD(13,5);\n+-------------+\n| pmod(13, 5) |\n+-------------+\n|           3 |\n+-------------+\nMySQL [test]> SELECT PMOD(-13,5);\n+-------------+\n| pmod(-13, 5) |\n+-------------+\n|           2 |\n+-------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"PMOD\n"})})]})}function a(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},o=s.createContext(i);function l(n){let e=s.useContext(o);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);