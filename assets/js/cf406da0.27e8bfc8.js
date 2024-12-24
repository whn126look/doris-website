"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["556668"],{677770:function(e,t,o){o.r(t),o.d(t,{metadata:()=>r,contentTitle:()=>i,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-operator","title":"Deploy Doris Operator","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-operator.md","sourceDirName":"install/cluster-deployment/k8s-deploy/compute-storage-coupled","slug":"/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-operator","permalink":"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-operator","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Deploy Doris Operator","language":"en"},"sidebar":"docs","previous":{"title":"Cluster Environment Requirements","permalink":"/docs/3.0/install/cluster-deployment/k8s-deploy/install-env"},"next":{"title":"Config Doris to Deploy","permalink":"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-config-cluster"}}'),s=o("785893"),n=o("250065");let l={title:"Deploy Doris Operator",language:"en"},i=void 0,a={},c=[{value:"Step 1: Install CustomResourceDefinitions",id:"step-1-install-customresourcedefinitions",level:2},{value:"Step 2: Install Doris Operator and RBAC rules",id:"step-2-install-doris-operator-and-rbac-rules",level:2},{value:"Step 3: Verify Doris Operator status",id:"step-3-verify-doris-operator-status",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Deploying the Doris Operator involves three steps: install the CustomResourceDefinitions, deploy the Operator service, verify the deployment status."}),"\n",(0,s.jsx)(t.h2,{id:"step-1-install-customresourcedefinitions",children:"Step 1: Install CustomResourceDefinitions"}),"\n",(0,s.jsx)(t.p,{children:"Add the custom resource (CRD) of Doris Operator using the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl create -f https://raw.githubusercontent.com/apache/doris-operator/master/config/crd/bases/doris.apache.com_dorisclusters.yaml\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-2-install-doris-operator-and-rbac-rules",children:"Step 2: Install Doris Operator and RBAC rules"}),"\n",(0,s.jsx)(t.p,{children:"Install Doris Operator using the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/apache/doris-operator/master/config/operator/operator.yaml\n"})}),"\n",(0,s.jsx)(t.p,{children:"Expected output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"namespace/doris created\nrole.rbac.authorization.k8s.io/leader-election-role created\nrolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created\nclusterrole.rbac.authorization.k8s.io/doris-operator created\nclusterrolebinding.rbac.authorization.k8s.io/doris-operator-rolebinding created\nserviceaccount/doris-operator created\ndeployment.apps/doris-operator created\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-3-verify-doris-operator-status",children:"Step 3: Verify Doris Operator status"}),"\n",(0,s.jsx)(t.p,{children:"Check the deployment status of Doris Operator using the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl get pods -n doris\n"})}),"\n",(0,s.jsx)(t.p,{children:"Expected output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"NAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-7f578c86cb-nz6jn   1/1     Running   0          19m\n"})})]})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return l}});var r=o(667294);let s={},n=r.createContext(s);function l(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);