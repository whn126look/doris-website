"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["842835"],{644503:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/split-by-string","title":"SPLIT_BY_STRING","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/split-by-string.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/split-by-string","permalink":"/docs/sql-manual/sql-functions/string-functions/split-by-string","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SPLIT_BY_STRING","language":"en"},"sidebar":"docs","previous":{"title":"SPLIT_PART","permalink":"/docs/sql-manual/sql-functions/string-functions/split-part"},"next":{"title":"SUBSTRING_INDEX","permalink":"/docs/sql-manual/sql-functions/string-functions/substring-index"}}'),i=s("785893"),r=s("250065");let l={title:"SPLIT_BY_STRING",language:"en"},a=void 0,c={},o=[{value:"split_by_string",id:"split_by_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value(s)",id:"returned-values",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"split_by_string",children:"split_by_string"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"ARRAY<STRING> split_by_string(STRING s, STRING separator)"})}),"\n",(0,i.jsx)(e.p,{children:"Splits a string into substrings separated by a string. It uses a constant string separator of multiple characters as the separator. If the string separator is empty, it will split the string s into an array of single characters."}),"\n",(0,i.jsx)(e.h4,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"separator"})," \u2014 The separator. Type: ",(0,i.jsx)(e.code,{children:"String"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"s"})," \u2014 The string to split. Type: ",(0,i.jsx)(e.code,{children:"String"})]}),"\n",(0,i.jsx)(e.h4,{id:"returned-values",children:"Returned value(s)"}),"\n",(0,i.jsx)(e.p,{children:"Returns an array of selected substrings. Empty substrings may be selected when:"}),"\n",(0,i.jsx)(e.p,{children:"A non-empty separator occurs at the beginning or end of the string;"}),"\n",(0,i.jsx)(e.p,{children:"There are multiple consecutive separators;"}),"\n",(0,i.jsx)(e.p,{children:"The original string s is empty."}),"\n",(0,i.jsxs)(e.p,{children:["Type: ",(0,i.jsx)(e.code,{children:"Array(String)"})]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"select split_by_string('a1b1c1d','1');\n+---------------------------------+\n| split_by_string('a1b1c1d', '1') |\n+---------------------------------+\n| ['a', 'b', 'c', 'd']            |\n+---------------------------------+\n\nselect split_by_string(',,a,b,c,',',');\n+----------------------------------+\n| split_by_string(',,a,b,c,', ',') |\n+----------------------------------+\n| ['', '', 'a', 'b', 'c', '']      |\n+----------------------------------+\n\nSELECT split_by_string(NULL,',');\n+----------------------------+\n| split_by_string(NULL, ',') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nselect split_by_string('a,b,c,abcde',',');\n+-------------------------------------+\n| split_by_string('a,b,c,abcde', ',') |\n+-------------------------------------+\n| ['a', 'b', 'c', 'abcde']            |\n+-------------------------------------+\n\nselect split_by_string('1,,2,3,,4,5,,abcde', ',,');\n+---------------------------------------------+\n| split_by_string('1,,2,3,,4,5,,abcde', ',,') |\n+---------------------------------------------+\n| ['1', '2,3', '4,5', 'abcde']                |\n+---------------------------------------------+\n\nselect split_by_string(',,,,',',,');\n+-------------------------------+\n| split_by_string(',,,,', ',,') |\n+-------------------------------+\n| ['', '', '']                  |\n+-------------------------------+\n\nselect split_by_string(',,a,,b,,c,,',',,');\n+--------------------------------------+\n| split_by_string(',,a,,b,,c,,', ',,') |\n+--------------------------------------+\n| ['', 'a', 'b', 'c', '']              |\n+--------------------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"SPLIT_BY_STRING,SPLIT"})]})}function p(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);