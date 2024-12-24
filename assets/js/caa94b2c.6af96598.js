"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["104536"],{638829:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>r,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st_polygon","title":"ST_Polygon,ST_PolyFromText,ST_PolygonFromText","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_polygon.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st_polygon","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_polygon","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ST_Polygon,ST_PolyFromText,ST_PolygonFromText","language":"en"},"sidebar":"docs","previous":{"title":"St_Point","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_point"},"next":{"title":"ST_AsText,ST_AsWKT","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_astext"}}'),s=t("785893"),l=t("250065");let i={title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",language:"en"},r=void 0,a={},c=[{value:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",id:"st_polygonst_polyfromtextst_polygonfromtext",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:4},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"st_polygonst_polyfromtextst_polygonfromtext",children:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GEOMETRY ST_Polygon (VARCHAR wkt)"})}),"\n",(0,s.jsx)(e.p,{children:"Converting a WKT (Well Known Text) into a corresponding polygon memory form"}),"\n",(0,s.jsx)(e.h4,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> SELECT ST_AsText(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"));\n+------------------------------------------------------------------+\n| st_astext(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))')) |\n+------------------------------------------------------------------+\n| POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))                          |\n+------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.p,{children:"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT,ST,POLYGON,POLYFROMTEXT,POLYGONFROMTEXT"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return i}});var o=t(667294);let s={},l=o.createContext(s);function i(n){let e=o.useContext(l);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);