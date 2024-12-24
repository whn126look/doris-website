"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["18270"],{451869:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-angle-sphere","title":"ST_ANGLE_SPHERE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/spatial-functions/st-angle-sphere.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-angle-sphere","permalink":"/docs/sql-manual/sql-functions/spatial-functions/st-angle-sphere","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ST_ANGLE_SPHERE","language":"en"},"sidebar":"docs","previous":{"title":"ST_AZIMUTH","permalink":"/docs/sql-manual/sql-functions/spatial-functions/st-azimuth"},"next":{"title":"ST_AREA","permalink":"/docs/sql-manual/sql-functions/spatial-functions/st-area"}}'),l=t("785893"),a=t("250065");let i={title:"ST_ANGLE_SPHERE",language:"en"},r=void 0,o={},c=[{value:"ST_Angle_Sphere",id:"st_angle_sphere",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"st_angle_sphere",children:"ST_Angle_Sphere"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"DOUBLE ST_Angle_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE y_lat)"})}),"\n",(0,l.jsx)(n.p,{children:"Calculates the central angle between two points on the Earth's surface. The incoming parameters are the longitude of point X, the latitude of point X, the longitude of point Y and the latitude of point Y."}),"\n",(0,l.jsx)(n.p,{children:"x_lng and y_lng are Longitude values, must be in the range [-180, 180].\nx_lat and y_lat are Latitude values, must be in the range [-90, 90]."}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select ST_Angle_Sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+---------------------------------------------------------------------------+\n| st_angle_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+---------------------------------------------------------------------------+\n|                                                        0.0659823452409903 |\n+---------------------------------------------------------------------------+\n1 row in set (0.06 sec)\n\nmysql> select ST_Angle_Sphere(0, 0, 45, 0);\n+----------------------------------------+\n| st_angle_sphere(0.0, 0.0, 45.0, 0.0) |\n+----------------------------------------+\n|                                     45 |\n+----------------------------------------+\n1 row in set (0.06 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.p,{children:"ST_ANGLE_SPHERE,ST,ANGLE,SPHERE"})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);