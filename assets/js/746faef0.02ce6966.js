"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["432017"],{415843:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST","title":"SHOW PROCESSLIST","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST.md","sourceDirName":"sql-manual/sql-statements/session/queries","slug":"/sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST","permalink":"/docs/3.0/sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW PROCESSLIST","language":"en"},"sidebar":"docs","previous":{"title":"SHOW VARIABLES","permalink":"/docs/3.0/sql-manual/sql-statements/session/variable/SHOW-VARIABLES"},"next":{"title":"KILL QUERY","permalink":"/docs/3.0/sql-manual/sql-statements/session/queries/KILL-QUERY"}}'),i=t("785893"),r=t("250065");let l={title:"SHOW PROCESSLIST",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Display the running threads of the user. It should be noted that except the root user who can see all running threads, other users can only see their own running threads, and cannot see the running threads of other users."}),"\n",(0,i.jsxs)(n.p,{children:["Only display current connected FE's connection list by default, you can set session variable ",(0,i.jsx)(n.code,{children:"set show_all_fe_connection = true"})," to show all FE's connection."]}),"\n",(0,i.jsx)(n.p,{children:"grammar:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW [FULL] PROCESSLIST\n"})}),"\n",(0,i.jsx)(n.p,{children:"illustrate:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CurrentConnected: Indicates whether the connection is currently connected"}),"\n",(0,i.jsx)(n.li,{children:"Id: It is the unique identifier of this thread. When we find that there is a problem with this thread, we can use the kill command to add this Id value to kill this thread."}),"\n",(0,i.jsx)(n.li,{children:"User: refers to the user who started this thread."}),"\n",(0,i.jsx)(n.li,{children:"Host: Records the IP and port number of the client sending the request. Through this information, when troubleshooting the problem, we can locate which client and which process sent the request."}),"\n",(0,i.jsx)(n.li,{children:"LoginTime: Timestamp when the connection is make."}),"\n",(0,i.jsx)(n.li,{children:"Catalog: Catalog name."}),"\n",(0,i.jsx)(n.li,{children:"Db: which database the currently executed command is on. If no database is specified, the value is NULL ."}),"\n",(0,i.jsx)(n.li,{children:"Command: refers to the command that the thread is executing at the moment."}),"\n",(0,i.jsx)(n.li,{children:"Time: Indicates the time the thread is in the current state."}),"\n",(0,i.jsx)(n.li,{children:"State: The state of the thread, corresponding to Command."}),"\n",(0,i.jsx)(n.li,{children:"QueryId: The ID of the current query statement."}),"\n",(0,i.jsx)(n.li,{children:"Info: Generally recorded is the statement executed by the thread. By default, only the first 100 characters are displayed, that is, the statement you see may be truncated. To see all the information, you need to use show full processlist."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Common Command types are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Query: The thread is executing a statement"}),"\n",(0,i.jsx)(n.li,{children:"Sleep: is waiting for a client to send it an execute statement"}),"\n",(0,i.jsx)(n.li,{children:"Quit: the thread is exiting"}),"\n",(0,i.jsx)(n.li,{children:"Kill : The kill statement is being executed to kill the specified thread"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Other types can refer to ",(0,i.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/5.6/en/thread-commands.html",children:"MySQL official website for explanation"})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View the threads running by the current user"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SHOW PROCESSLIST\n"})}),"\n",(0,i.jsx)(n.p,{children:"return"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MySQL [test]> show full processlist;\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n| CurrentConnected | Id   | User | Host            | LoginTime           | Catalog  | Db   | Command | Time | State | QueryId                           | Info                  |\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n| Yes              |    0 | root | 127.0.0.1:34650 | 2023-09-06 12:01:02 | internal | test | Query   |    0 | OK    | c84e397193a54fe7-bbe9bc219318b75e | select 1              |\n|                  |    1 | root | 127.0.0.1:34776 | 2023-09-06 12:01:07 | internal |      | Sleep   |   29 | EOF   | 886ffe2894314f50-8dd73a6ca06699e4 | show full processlist |\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SHOW, PROCESSLIST\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);