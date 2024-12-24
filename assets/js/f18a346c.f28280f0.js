"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["653578"],{48644:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"admin-manual/fe/session-action","title":"Session Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/fe/session-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/session-action","permalink":"/docs/2.0/admin-manual/fe/session-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Session Action","language":"en"},"sidebar":"docs","previous":{"title":"Query Profile Action","permalink":"/docs/2.0/admin-manual/fe/query-profile-action-controller"},"next":{"title":"System Action","permalink":"/docs/2.0/admin-manual/fe/system-action"}}'),i=s("785893"),o=s("250065");let r={title:"Session Action",language:"en"},a="Session Action",l={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Obtain the current session information",id:"obtain-the-current-session-information",level:2},{value:"Response",id:"response",level:2},{value:"Obtain all FE session information",id:"obtain-all-fe-session-information",level:2},{value:"Response",id:"response-1",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"session-action",children:"Session Action"})}),"\n",(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/v1/session"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/v1/session/all"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Session Action is used to obtain the current session information."}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"obtain-the-current-session-information",children:"Obtain the current session information"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/v1/session"})}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"column_names": ["Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n		"rows": [{\n			"User": "root",\n			"Command": "Sleep",\n			"State": "",\n			"Cluster": "default_cluster",\n			"Host": "10.81.85.89:31465",\n			"Time": "230",\n			"Id": "0",\n			"Info": "",\n			"Db": "db1"\n		}]\n	},\n	"count": 2\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"obtain-all-fe-session-information",children:"Obtain all FE session information"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/v1/session/all"})}),"\n",(0,i.jsx)(n.h2,{id:"response-1",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"column_names": ["FE", "Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n		"rows": [{\n		    "FE": "10.14.170.23",\n			"User": "root",\n			"Command": "Sleep",\n			"State": "",\n			"Cluster": "default_cluster",\n			"Host": "10.81.85.89:31465",\n			"Time": "230",\n			"Id": "0",\n			"Info": "",\n			"Db": "db1"\n		},\n		{\n            "FE": "10.14.170.24",\n			"User": "root",\n			"Command": "Sleep",\n			"State": "",\n			"Cluster": "default_cluster",\n			"Host": "10.81.85.88:61465",\n			"Time": "460",\n			"Id": "1",\n			"Info": "",\n			"Db": "db1"\n		}]\n	},\n	"count": 2\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The returned result is the same as ",(0,i.jsx)(n.code,{children:"System Action"}),". Is a description of the table."]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let i={},o=t.createContext(i);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);