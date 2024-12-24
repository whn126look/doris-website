"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["788862"],{618174:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/window-function-lag","title":"WINDOW_FUNCTION_LAG","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-lag.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/window-function-lag","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-lag","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"WINDOW_FUNCTION_LAG","language":"en"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_LEAD","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-lead"},"next":{"title":"WINDOW_FUNCTION_ROW_NUMBER","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-row-number"}}'),o=i("785893"),s=i("250065");let l={title:"WINDOW_FUNCTION_LAG",language:"en"},c=void 0,r={},a=[{value:"WINDOW FUNCTION LAG",id:"window-function-lag",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"window-function-lag",children:"WINDOW FUNCTION LAG"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.p,{children:"The LAG() method is used to calculate the value of the current line several lines ahead."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"LAG(expr, offset, default) OVER (partition_by_clause order_by_clause)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.p,{children:"Calculate the previous day's closing price"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'select stock_symbol, closing_date, closing_price,    \nlag(closing_price,1, 0) over (partition by stock_symbol order by closing_date) as "yesterday closing"   \nfrom stock_ticker   \norder by closing_date;\n\n| stock_symbol | closing_date        | closing_price | yesterday closing |\n|--------------|---------------------|---------------|-------------------|\n| JDR          | 2014-09-13 00:00:00 | 12.86         | 0                 |\n| JDR          | 2014-09-14 00:00:00 | 12.89         | 12.86             |\n| JDR          | 2014-09-15 00:00:00 | 12.94         | 12.89             |\n| JDR          | 2014-09-16 00:00:00 | 12.55         | 12.94             |\n| JDR          | 2014-09-17 00:00:00 | 14.03         | 12.55             |\n| JDR          | 2014-09-18 00:00:00 | 14.75         | 14.03             |\n| JDR          | 2014-09-19 00:00:00 | 13.98         | 14.75             |\n'})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"WINDOW,FUNCTION,LAG\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var t=i(667294);let o={},s=t.createContext(o);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);