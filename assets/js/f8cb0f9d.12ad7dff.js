"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["831921"],{177773:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>c,assets:()=>d,toc:()=>s,frontMatter:()=>l});var a=JSON.parse('{"id":"admin-manual/maint-monitor/tablet-meta-tool","title":"Tablet metadata management tool","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/maint-monitor/tablet-meta-tool.md","sourceDirName":"admin-manual/maint-monitor","slug":"/admin-manual/maint-monitor/tablet-meta-tool","permalink":"/docs/2.0/admin-manual/maint-monitor/tablet-meta-tool","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Tablet metadata management tool","language":"en"},"sidebar":"docs","previous":{"title":"Data replica management","permalink":"/docs/2.0/admin-manual/maint-monitor/tablet-repair-and-balance"},"next":{"title":"Tablet Restore Tool","permalink":"/docs/2.0/admin-manual/maint-monitor/tablet-restore-tool"}}'),o=n("785893"),i=n("250065");let l={title:"Tablet metadata management tool",language:"en"},r="Tablet metadata management tool",d={},s=[{value:"Background",id:"background",level:2},{value:"Operation",id:"operation",level:2},{value:"View Tablet Meta",id:"view-tablet-meta",level:3},{value:"Online",id:"online",level:4},{value:"Offline",id:"offline",level:4},{value:"Load header",id:"load-header",level:3},{value:"Delete header",id:"delete-header",level:3},{value:"TabletMeta in Pb format",id:"tabletmeta-in-pb-format",level:3},{value:"Segment meta in Pb format",id:"segment-meta-in-pb-format",level:3}];function h(e){let t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tablet-metadata-management-tool",children:"Tablet metadata management tool"})}),"\n",(0,o.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(t.p,{children:"In the latest version of the code, we introduced RocksDB in BE to store meta-information of tablet, in order to solve various functional and performance problems caused by storing meta-information through header file. Currently, each data directory (root path) has a corresponding RocksDB instance, in which all tablets on the corresponding root path are stored in the key-value manner."}),"\n",(0,o.jsx)(t.p,{children:"To facilitate the maintenance of these metadata, we provide an online HTTP interface and an offline meta tool to complete related management operations."}),"\n",(0,o.jsx)(t.p,{children:"The HTTP interface is only used to view tablet metadata online, and can be used when the BE process is running."}),"\n",(0,o.jsx)(t.p,{children:"However, meta tool is only used for off-line metadata management operations. BE must be stopped before it can be used."}),"\n",(0,o.jsx)(t.p,{children:"The meta tool tool is stored in the Lib / directory of BE."}),"\n",(0,o.jsx)(t.h2,{id:"operation",children:"Operation"}),"\n",(0,o.jsx)(t.h3,{id:"view-tablet-meta",children:"View Tablet Meta"}),"\n",(0,o.jsx)(t.p,{children:"Viewing Tablet Meta information can be divided into online and offline methods"}),"\n",(0,o.jsx)(t.h4,{id:"online",children:"Online"}),"\n",(0,o.jsx)(t.p,{children:"Access BE's HTTP interface to obtain the corresponding Tablet Meta information:"}),"\n",(0,o.jsx)(t.p,{children:"api:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"http://{host}:{port}/api/meta/header/{tablet_id}/{schema_hash}"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Host: be Hostname"}),"\n",(0,o.jsx)(t.p,{children:"port: BE's HTTP port"}),"\n",(0,o.jsx)(t.p,{children:"tablet id: tablet id"}),"\n",(0,o.jsx)(t.p,{children:"schema hash: tablet schema hash"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Give an example:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"http://be_host:8040/api/meta/header/14156/2458238340"})}),"\n",(0,o.jsx)(t.p,{children:"If the final query is successful, the Tablet Meta will be returned as json."}),"\n",(0,o.jsx)(t.h4,{id:"offline",children:"Offline"}),"\n",(0,o.jsx)(t.p,{children:"Get Tablet Meta on a disk based on the meta\\ tool tool."}),"\n",(0,o.jsx)(t.p,{children:"Command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"./lib/meta_tool --root_path=/path/to/root_path --operation=get_meta --tablet_id=xxx --schema_hash=xxx\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"root_path: The corresponding root_path path path configured in be.conf."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The result is also a presentation of Tablet Meta in JSON format."}),"\n",(0,o.jsx)(t.h3,{id:"load-header",children:"Load header"}),"\n",(0,o.jsx)(t.p,{children:"The function of loading header is provided to realize manual migration of tablet. This function is based on Tablet Meta in JSON format, so if changes in the shard field and version information are involved, they can be changed directly in the JSON content of Tablet Meta. Then use the following commands to load."}),"\n",(0,o.jsx)(t.p,{children:"Command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"./lib/meta_tool --operation=load_meta --root_path=/path/to/root_path --json_meta_path=path\n"})}),"\n",(0,o.jsx)(t.h3,{id:"delete-header",children:"Delete header"}),"\n",(0,o.jsx)(t.p,{children:"In order to realize the function of deleting a tablet meta from a disk of a BE. Support single delete and batch delete."}),"\n",(0,o.jsx)(t.p,{children:"Single delete:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"./lib/meta_tool --operation=delete_meta --root_path=/path/to/root_path --tablet_id=xxx --schema_hash=xxx`\n"})}),"\n",(0,o.jsx)(t.p,{children:"Batch delete:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"./lib/meta_tool --operation=batch_delete_meta --tablet_file=/path/to/tablet_file.txt\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Each line in ",(0,o.jsx)(t.code,{children:"tablet_file.txt"})," represents the information of a tablet. The format is:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"root_path,tablet_id,schema_hash"})}),"\n",(0,o.jsx)(t.p,{children:"Each column are separated by comma."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"tablet_file"})," example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"/output/be/data/,14217,352781111\n/output/be/data/,14219,352781111\n/output/be/data/,14223,352781111\n/output/be/data/,14227,352781111\n/output/be/data/,14233,352781111\n/output/be/data/,14239,352781111\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Batch delete will skip the line with incorrect tablet information format in ",(0,o.jsx)(t.code,{children:"tablet_file"}),". And after the execution is completed, the number of successful deletions and the number of errors are displayed."]}),"\n",(0,o.jsx)(t.h3,{id:"tabletmeta-in-pb-format",children:"TabletMeta in Pb format"}),"\n",(0,o.jsx)(t.p,{children:"This command is to view the old file-based management PB format Tablet Meta, and to display Tablet Meta in JSON format."}),"\n",(0,o.jsx)(t.p,{children:"Command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"./lib/meta_tool --operation=show_meta --root_path=/path/to/root_path --pb_header_path=path\n"})}),"\n",(0,o.jsx)(t.h3,{id:"segment-meta-in-pb-format",children:"Segment meta in Pb format"}),"\n",(0,o.jsx)(t.p,{children:"This command is to view the PB format segment meta, and to display segment meta in JSON format."}),"\n",(0,o.jsx)(t.p,{children:"Command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"./meta_tool --operation=show_segment_footer --file=/path/to/segment/file\n"})})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var a=n(667294);let o={},i=a.createContext(o);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);