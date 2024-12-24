"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["393540"],{785175:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/regexp/regexp","title":"REGEXP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/regexp/regexp.md","sourceDirName":"sql-manual/sql-functions/string-functions/regexp","slug":"/sql-manual/sql-functions/string-functions/regexp/","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/regexp/","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REGEXP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"NOT LIKE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/fuzzy-match/not-like"},"next":{"title":"REGEXP_EXTRACT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/regexp/regexp-extract"}}'),i=s("785893"),r=s("250065");let l={title:"REGEXP",language:"zh-CN"},o=void 0,c={},a=[{value:"regexp",id:"regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"regexp",children:"regexp"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BOOLEAN regexp(VARCHAR str, VARCHAR pattern)"})}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u5B57\u7B26\u4E32 str \u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u5339\u914D\u4E0A\u7684\u5219\u8FD4\u56DE true\uFF0C\u6CA1\u5339\u914D\u4E0A\u5219\u8FD4\u56DE false\u3002pattern \u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5B57\u7B26\u96C6\u5339\u914D\u9700\u8981\u4F7F\u7528 Unicode \u6807\u51C6\u5B57\u7B26\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5339\u914D\u4E2D\u6587\u8BF7\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"\\p{Han}"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"--- \u67E5\u627E k1 \u5B57\u6BB5\u4E2D\u4EE5 'billie' \u4E3A\u5F00\u5934\u7684\u6240\u6709\u6570\u636E\nmysql > select k1 from test where k1 regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| billie eillish     |\n+--------------------+\n\n--- \u67E5\u627E k1 \u5B57\u6BB5\u4E2D\u4EE5 'ok' \u4E3A\u7ED3\u5C3E\u7684\u6240\u6709\u6570\u636E\uFF1A\nmysql > select k1 from test where k1 regexp 'ok$';\n+----------+\n| k1       |\n+----------+\n| It's ok  |\n+----------+\n\nmysql> select regexp('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '\\\\p{Han}');\n+-----------------------------------------------------------------------------+\n| ('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567' regexp '\\p{Han}')       |\n+-----------------------------------------------------------------------------+\n|                                                                           1 |\n+-----------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"REGEXP\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);