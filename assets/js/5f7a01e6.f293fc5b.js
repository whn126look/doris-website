"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["83912"],{43547:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>s});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/window-function","title":"Window Functions Overview","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/window-functions/window-function.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/window-function","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/window-function","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Window Functions Overview","language":"en"},"sidebar":"docs","previous":{"title":"TASKS","permalink":"/docs/3.0/sql-manual/sql-functions/table-valued-functions/tasks"},"next":{"title":"WINDOW_FUNCTION_SUM","permalink":"/docs/3.0/sql-manual/sql-functions/window-functions/window-function-sum"}}'),o=t("785893"),a=t("250065");let s={title:"Window Functions Overview",language:"en"},r=void 0,c={},l=[{value:"WINDOW FUNCTION",id:"window-function",level:2},{value:"description",id:"description",level:3},{value:"Function",id:"function",level:4},{value:"PARTITION BY clause",id:"partition-by-clause",level:4},{value:"ORDER BY clause",id:"order-by-clause",level:4},{value:"Window clause",id:"window-clause",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"window-function",children:"WINDOW FUNCTION"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.p,{children:"Analytical functions(windown function) are a special class of built-in functions. Similar to aggregate functions, analytic functions also perform calculations on multiple input rows to obtain a data value. The difference is that the analytic function processes the input data within a specific window, rather than grouping calculations by group by. The data within each window can be sorted and grouped using the over() clause. The analytic function computes a single value for each row of the result set, rather than one value per group by grouping. This flexible approach allows the user to add additional columns to the select clause, giving the user more opportunities to reorganize and filter the result set. Analytic functions can only appear in select lists and in the outermost order by clause. During the query process, the analytical function will take effect at the end, that is, after the join, where and group by operations are performed. Analytical functions are often used in financial and scientific computing to analyze trends, calculate outliers, and perform bucket analysis on large amounts of data."}),"\n",(0,o.jsx)(n.p,{children:"The syntax of the analytic function:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"function(args) OVER(partition_by_clause order_by_clause [window_clause])    \npartition_by_clause ::= PARTITION BY expr [, expr ...]    \norder_by_clause ::= ORDER BY expr [ASC | DESC] [, expr [ASC | DESC] ...]\n"})}),"\n",(0,o.jsx)(n.h4,{id:"function",children:"Function"}),"\n",(0,o.jsx)(n.p,{children:"Support Functions: AVG(), COUNT(), DENSE_RANK(), FIRST_VALUE(), LAG(), LAST_VALUE(), LEAD(), MAX(), MIN(), RANK(), ROW_NUMBER(), SUM()"}),"\n",(0,o.jsx)(n.h4,{id:"partition-by-clause",children:"PARTITION BY clause"}),"\n",(0,o.jsx)(n.p,{children:"The Partition By clause is similar to Group By. It groups the input rows according to the specified column or columns, and rows with the same value will be grouped together."}),"\n",(0,o.jsx)(n.h4,{id:"order-by-clause",children:"ORDER BY clause"}),"\n",(0,o.jsx)(n.p,{children:"The Order By clause is basically the same as the outer Order By. It defines the order in which the input rows are sorted, and if Partition By is specified, Order By defines the order within each Partition grouping. The only difference from the outer Order By is that the Order By n (n is a positive integer) in the OVER clause is equivalent to doing nothing, while the outer Order By n means sorting according to the nth column."}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.p,{children:"This example shows adding an id column to the select list with values 1, 2, 3, etc., sorted by the date_and_time column in the events table."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"SELECT   \nrow_number() OVER (ORDER BY date_and_time) AS id,   \nc1, c2, c3, c4   \nFROM events;\n"})}),"\n",(0,o.jsx)(n.h4,{id:"window-clause",children:"Window clause"}),"\n",(0,o.jsx)(n.p,{children:"The Window clause is used to specify an operation range for the analytical function, the current row is the criterion, and several rows before and after are used as the object of the analytical function operation. The methods supported by the Window clause are: AVG(), COUNT(), FIRST_VALUE(), LAST_VALUE() and SUM(). For MAX() and MIN(), the window clause can specify the starting range UNBOUNDED PRECEDING"}),"\n",(0,o.jsx)(n.p,{children:"syntax:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"ROWS BETWEEN [ { m | UNBOUNDED } PRECEDING | CURRENT ROW] [ AND [CURRENT ROW | { UNBOUNDED | n } FOLLOWING] ]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.p,{children:"Suppose we have the following stock data, the stock symbol is JDR, and the closing price is the closing price of each day."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"create table stock_ticker (stock_symbol string, closing_price decimal(8,2), closing_date timestamp);    \n...load some data...    \nselect * from stock_ticker order by stock_symbol, closing_date\n | stock_symbol | closing_price | closing_date        |\n |--------------|---------------|---------------------|\n | JDR          | 12.86         | 2014-10-02 00:00:00 |\n | JDR          | 12.89         | 2014-10-03 00:00:00 |\n | JDR          | 12.94         | 2014-10-04 00:00:00 |\n | JDR          | 12.55         | 2014-10-05 00:00:00 |\n | JDR          | 14.03         | 2014-10-06 00:00:00 |\n | JDR          | 14.75         | 2014-10-07 00:00:00 |\n | JDR          | 13.98         | 2014-10-08 00:00:00 |\n"})}),"\n",(0,o.jsx)(n.p,{children:"This query uses the analytic function to generate the column moving_average, whose value is the 3-day average price of the stock, that is, the three-day average price of the previous day, the current day, and the next day. The first day has no value for the previous day, and the last day does not have the value for the next day, so these two lines only calculate the average of the two days. Partition By does not play a role here, because all the data are JDR data, but if there is other stock information, Partition By will ensure that the analysis function value acts within this Partition."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select stock_symbol, closing_date, closing_price,    \navg(closing_price) over (partition by stock_symbol order by closing_date    \nrows between 1 preceding and 1 following) as moving_average    \nfrom stock_ticker;\n | stock_symbol | closing_date        | closing_price | moving_average |\n |--------------|---------------------|---------------|----------------|\n | JDR          | 2014-10-02 00:00:00 | 12.86         | 12.87          |\n | JDR          | 2014-10-03 00:00:00 | 12.89         | 12.89          |\n | JDR          | 2014-10-04 00:00:00 | 12.94         | 12.79          |\n | JDR          | 2014-10-05 00:00:00 | 12.55         | 13.17          |\n | JDR          | 2014-10-06 00:00:00 | 14.03         | 13.77          |\n | JDR          | 2014-10-07 00:00:00 | 14.75         | 14.25          |\n | JDR          | 2014-10-08 00:00:00 | 13.98         | 14.36          |\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"WINDOW,FUNCTION\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var i=t(667294);let o={},a=i.createContext(o);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);