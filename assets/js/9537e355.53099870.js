"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["790282"],{919390:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"admin-manual/maint-monitor/tablet-restore-tool","title":"Tablet Restore Tool","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/admin-manual/maint-monitor/tablet-restore-tool.md","sourceDirName":"admin-manual/maint-monitor","slug":"/admin-manual/maint-monitor/tablet-restore-tool","permalink":"/docs/1.2/admin-manual/maint-monitor/tablet-restore-tool","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Tablet Restore Tool","language":"en"},"sidebar":"docs","previous":{"title":"Tablet Local Debug","permalink":"/docs/1.2/admin-manual/maint-monitor/tablet-local-debug"},"next":{"title":"Metadata Operations and Maintenance","permalink":"/docs/1.2/admin-manual/maint-monitor/metadata-operation"}}'),r=n("785893"),s=n("250065");let a={title:"Tablet Restore Tool",language:"en"},l="Tablet Restore Tool",o={},d=[{value:"Restore data from BE Recycle Bin",id:"restore-data-from-be-recycle-bin",level:2},{value:"Operation",id:"operation",level:3},{value:"single mode",id:"single-mode",level:4},{value:"batch mode",id:"batch-mode",level:4},{value:"Repair missing or damaged Tablet",id:"repair-missing-or-damaged-tablet",level:2}];function c(e){let t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"tablet-restore-tool",children:"Tablet Restore Tool"})}),"\n",(0,r.jsx)(t.h2,{id:"restore-data-from-be-recycle-bin",children:"Restore data from BE Recycle Bin"}),"\n",(0,r.jsx)(t.p,{children:"During the user's use of Doris, some valid tablets (including metadata and data) may be deleted due to some misoperations or online bugs. In order to prevent data loss in these abnormal situations, Doris provides a recycle bin mechanism to protect user data. Tablet data deleted by users will not be deleted directly, but will be stored in the recycle bin for a period of time. After a period of time, there will be a regular cleaning mechanism to delete expired data. The data in the recycle bin includes: tablet data file (.dat), tablet index file (.idx) and tablet metadata file (.hdr). The data will be stored in a path in the following format:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"/root_path/trash/time_label/tablet_id/schema_hash/\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"root_path"}),": a data root directory corresponding to the BE node."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"trash"}),": The directory of the recycle bin."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"time_label"}),": Time label, for the uniqueness of the data directory in the recycle bin, while recording the data time, use the time label as a subdirectory."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"When a user finds that online data has been deleted by mistake, he needs to recover the deleted tablet from the recycle bin. This tablet data recovery function is needed."}),"\n",(0,r.jsxs)(t.p,{children:["BE provides http interface and ",(0,r.jsx)(t.code,{children:"restore_tablet_tool.sh"})," script to achieve this function, and supports single tablet operation (single mode) and batch operation mode (batch mode)."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"In single mode, data recovery of a single tablet is supported."}),"\n",(0,r.jsx)(t.li,{children:"In batch mode, support batch tablet data recovery."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"operation",children:"Operation"}),"\n",(0,r.jsx)(t.h4,{id:"single-mode",children:"single mode"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"http request method"}),"\n",(0,r.jsx)(t.p,{children:"BE provides an http interface for single tablet data recovery, the interface is as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n'})}),"\n",(0,r.jsx)(t.p,{children:"The successful results are as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{"status": "Success", "msg": "OK"}\n'})}),"\n",(0,r.jsx)(t.p,{children:"If it fails, the corresponding failure reason will be returned. One possible result is as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{"status": "Failed", "msg": "create link path failed"}\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Script mode"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"restore_tablet_tool.sh"})," can be used to realize the function of single tablet data recovery."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"batch-mode",children:"batch mode"}),"\n",(0,r.jsx)(t.p,{children:"The batch recovery mode is used to realize the function of recovering multiple tablet data."}),"\n",(0,r.jsx)(t.p,{children:"When using, you need to put the restored tablet id and schema hash in a file in a comma-separated format in advance, one tablet per line."}),"\n",(0,r.jsx)(t.p,{children:"The format is as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"12345,11111\n12346,11111\n12347,11111\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then perform the recovery with the following command (assuming the file name is: ",(0,r.jsx)(t.code,{children:"tablets.txt"}),"):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n'})}),"\n",(0,r.jsx)(t.h2,{id:"repair-missing-or-damaged-tablet",children:"Repair missing or damaged Tablet"}),"\n",(0,r.jsx)(t.p,{children:"In some very special circumstances, such as code bugs, or human misoperation, etc., all replicas of some tablets may be lost. In this case, the data has been substantially lost. However, in some scenarios, the business still hopes to ensure that the query will not report errors even if there is data loss, and reduce the perception of the user layer. At this point, we can use the blank Tablet to fill the missing replica to ensure that the query can be executed normally."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Note: This operation is only used to avoid the problem of error reporting due to the inability to find a queryable replica, and it is impossible to recover the data that has been substantially lost."})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["View Master FE log ",(0,r.jsx)(t.code,{children:"fe.log"})]}),"\n",(0,r.jsx)(t.p,{children:"If there is data loss, there will be a log similar to the following in the log:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n"})}),"\n",(0,r.jsx)(t.p,{children:"This log indicates that all replicas of tablet 20000 have been damaged or lost."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Use blank replicas to fill in missing copies"}),"\n",(0,r.jsx)(t.p,{children:"After confirming that the data cannot be recovered, you can execute the following command to generate blank replicas."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Note: You can first check whether the current version supports this parameter through the ",(0,r.jsx)(t.code,{children:"ADMIN SHOW FRONTEND CONFIG;"})," command."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["A few minutes after the setup is complete, you should see the following log in the Master FE log ",(0,r.jsx)(t.code,{children:"fe.log"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n"})}),"\n",(0,r.jsx)(t.p,{children:"The log indicates that the system has created a blank tablet to fill in the missing replica."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Judge whether it has been repaired successfully through query."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(667294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);