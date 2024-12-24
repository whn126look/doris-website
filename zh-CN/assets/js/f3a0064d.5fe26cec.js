"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["60633"],{794553:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/encrypt-digest-functions/sha2","title":"SHA2","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/encrypt-digest-functions/sha2.md","sourceDirName":"sql-manual/sql-functions/encrypt-digest-functions","slug":"/sql-manual/sql-functions/encrypt-digest-functions/sha2","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/sha2","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHA2","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHA","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/sha"},"next":{"title":"EXPLODE_JSON_ARRAY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-functions/explode-json-array"}}'),l=s("785893"),c=s("250065");let a={title:"SHA2",language:"zh-CN"},i=void 0,r={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:3},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:3},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3}];function o(e){let n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528SHA2\u5BF9\u4FE1\u606F\u8FDB\u884C\u6458\u8981\u5904\u7406\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHA2(str, digest_length)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"str"}),": \u5F85\u52A0\u5BC6\u7684\u5185\u5BB9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"digest_length"}),": \u6458\u8981\u957F\u5EA6\uFF0C\u652F\u6301 224, 256, 384, 512"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"select sha2('abc', 224);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"+----------------------------------------------------------+\n| sha2('abc', 224)                                         |\n+----------------------------------------------------------+\n| 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7 |\n+----------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select sha2('abc', 384);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"+--------------------------------------------------------------------------------------------------+\n| sha2('abc', 384)                                                                                 |\n+--------------------------------------------------------------------------------------------------+\n| cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7 |\n+--------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select sha2(NULL, 512);\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"+-----------------+\n| sha2(NULL, 512) |\n+-----------------+\n| NULL            |\n+-----------------+\n"})})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let l={},c=t.createContext(l);function a(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);