"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["753431"],{82297:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>p,assets:()=>c,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/regexp/regexp-extract","title":"REGEXP_EXTRACT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/regexp/regexp-extract.md","sourceDirName":"sql-manual/sql-functions/string-functions/regexp","slug":"/sql-manual/sql-functions/string-functions/regexp/regexp-extract","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp-extract","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"REGEXP_EXTRACT","language":"en"},"sidebar":"docs","previous":{"title":"REGEXP","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/regexp/"},"next":{"title":"REGEXP_EXTRACT_ALL","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/regexp/regexp-extract-all"}}'),s=t("785893"),a=t("250065");let i={title:"REGEXP_EXTRACT",language:"en"},l=void 0,c={},o=[{value:"regexp_extract",id:"regexp_extract",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"regexp_extract",children:"regexp_extract"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"VARCHAR regexp_extract (VARCHAR str, VARCHAR pattern, int pos)"})}),"\n",(0,s.jsx)(n.p,{children:"The string STR is matched regularly and the POS matching part which conforms to pattern is extracted. Patterns need to match exactly some part of the STR to return to the matching part of the pattern. If there is no match, return an empty string."}),"\n",(0,s.jsxs)(n.p,{children:["Character set matching requires the use of Unicode standard character classes. For example, to match Chinese, use ",(0,s.jsx)(n.code,{children:"\\p{Han}"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1) |\n+-------------------------------------------------------------+\n| b                                                           |\n+-------------------------------------------------------------+\n\nmysql> SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2) |\n+-------------------------------------------------------------+\n| d                                                           |\n+-------------------------------------------------------------+\n\nmysql> select regexp_extract('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '(\\\\p{Han}+)(.+)', 2);\n+-----------------------------------------------------------------------------------------------+\n| regexp_extract('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '(\\p{Han}+)(.+)', 2)       |\n+-----------------------------------------------------------------------------------------------+\n| This is a passage in English 1234567                                                          |\n+-----------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REGEXP_EXTRACT,REGEXP,EXTRACT\n"})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);