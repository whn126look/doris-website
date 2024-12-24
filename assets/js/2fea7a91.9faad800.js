"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["37101"],{768614:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"lakehouse/datalake-analytics/cloud-auth","title":"Cloud Service Authentication","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/lakehouse/datalake-analytics/cloud-auth.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/cloud-auth","permalink":"/docs/2.0/lakehouse/datalake-analytics/cloud-auth","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Cloud Service Authentication","language":"en"},"sidebar":"docs","previous":{"title":"Paimon Catalog","permalink":"/docs/2.0/lakehouse/datalake-analytics/paimon"},"next":{"title":"JDBC Catalog","permalink":"/docs/2.0/lakehouse/database/jdbc"}}'),a=s("785893"),i=s("250065");let l={title:"Cloud Service Authentication",language:"en"},c="Overview",r={},o=[{value:"AWS",id:"aws",level:2},{value:"Catalog Credentials",id:"catalog-credentials",level:3},{value:"System Credentials",id:"system-credentials",level:3}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,a.jsx)(n.p,{children:"When accessing a service on the cloud, we need to provide the credentials needed to access the service so that the service can be authenticated by IAM of cloud vendors."}),"\n",(0,a.jsx)(n.h2,{id:"aws",children:"AWS"}),"\n",(0,a.jsx)(n.p,{children:"Now Doris support two types of authentication to access AWS service."}),"\n",(0,a.jsx)(n.h3,{id:"catalog-credentials",children:"Catalog Credentials"}),"\n",(0,a.jsx)(n.p,{children:"The Catalog supports filling in basic Credentials properties, such as:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["For S3: ",(0,a.jsx)(n.code,{children:"s3.endpoint"}),"\uFF0C",(0,a.jsx)(n.code,{children:"s3.access_key"}),"\uFF0C",(0,a.jsx)(n.code,{children:"s3.secret_key"}),"\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["For Glue: ",(0,a.jsx)(n.code,{children:"glue.endpoint"}),"\uFF0C",(0,a.jsx)(n.code,{children:"glue.access_key"}),"\uFF0C",(0,a.jsx)(n.code,{children:"glue.secret_key"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"When access Glue though Iceberg Catalog, we can access tables on Glue by filling in the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG glue PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"system-credentials",children:"System Credentials"}),"\n",(0,a.jsx)(n.p,{children:"For applications running on AWS resources, such as EC2 instances, this approach enhances security by avoiding hardcoded credentials."}),"\n",(0,a.jsxs)(n.p,{children:["If we create the Catalog but not fill any Credentials in properties, the ",(0,a.jsx)(n.code,{children:"DefaultAWSCredentialsProviderChain"})," will be used to read in the system environment variables or instance profile."]}),"\n",(0,a.jsxs)(n.p,{children:["For details about how to configure environment variables and system properties, see: ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",children:"AWS CLI"})," ."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The configurable environment variables are: ",(0,a.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"}),"\u3001",(0,a.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"}),"\u3001",(0,a.jsx)(n.code,{children:"AWS_SESSION_TOKEN"}),"\u3001",(0,a.jsx)(n.code,{children:"AWS_ROLE_ARN"}),"\u3001",(0,a.jsx)(n.code,{children:"AWS_WEB_IDENTITY_TOKEN_FILE"})," and so on."]}),"\n",(0,a.jsxs)(n.li,{children:["In addition, you can also use ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html",children:"aws configure"})," to configure Credentials, the Credentials file will be written to the ",(0,a.jsx)(n.code,{children:"~/.aws"})," directory."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);