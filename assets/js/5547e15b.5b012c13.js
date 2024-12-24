"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["326830"],{221913:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"install/source-install/compilation-mac","title":"Compiling on MacOS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/install/source-install/compilation-mac.md","sourceDirName":"install/source-install","slug":"/install/source-install/compilation-mac","permalink":"/docs/install/source-install/compilation-mac","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Compiling on MacOS","language":"en"},"sidebar":"docs","previous":{"title":"Compiling on Windows","permalink":"/docs/install/source-install/compilation-win"},"next":{"title":"Manual Deployment","permalink":"/docs/install/cluster-deployment/standard-deployment"}}'),r=i("785893"),o=i("250065");let s={title:"Compiling on MacOS",language:"en"},l="Compile on MacOS",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compile source code",id:"compile-source-code",level:2},{value:"Start",id:"start",level:2},{value:"Speed up by using pre-compiled third-party libraries",id:"speed-up-by-using-pre-compiled-third-party-libraries",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"compile-on-macos",children:"Compile on MacOS"})}),"\n",(0,r.jsx)(n.p,{children:"This guide is about how to compile Doris on MacOS."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["MacOS 12 (Monterey) or later (Both ",(0,r.jsx)(n.strong,{children:"Intel"})," and ",(0,r.jsx)(n.strong,{children:"Apple Silicon"})," are supported.)"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"compile-source-code",children:"Compile source code"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Install dependencies using"})," ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"brew install automake autoconf libtool pkg-config texinfo coreutils gnu-getopt \\\npython@3 cmake ninja ccache bison byacc gettext wget pcre maven llvm@16 openjdk@11 npm\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxadmonitiontitle,{}),(0,r.jsx)(n.p,{children:"On MacOS, since Homebrew does not provide an installation package for JDK8, JDK11 is used here instead. Alternatively, you can manually download and install JDK8."})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Compile source code"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"bash build.sh\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxadmonitiontitle,{}),(0,r.jsxs)(n.p,{children:["The first step of compiling Doris is to download and compile third-party libraries. You can download the pre-compiled versions of third-party libraries provided by the Doris community. Please refer to the instructions below for downloading ",(0,r.jsx)(n.strong,{children:"pre-compiled third-party libraries"})," to speed up the build process."]})]}),"\n",(0,r.jsx)(n.h2,{id:"start",children:"Start"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Increase file descriptors limit"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"# Increase the file descriptor limit using the ulimit command.\nulimit -n 65536\n\n# Check if the change is effective.\n$ ulimit -n\n\n# Add the configuration to your startup script so that you do not have to set it again every time you open a new terminal session.\n# If you are using bash, execute the following statement:\necho 'ulimit -n 65536' >>~/.bashrc\n# If you are using zsh, execute the following statement:\necho 'ulimit -n 65536' >>~/.zshrc\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Start BE"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"cd output/be/bin\n./start_be.sh --daemon\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Start"})," ",(0,r.jsx)(n.strong,{children:"FE"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"cd output/fe/bin\n./start_fe.sh --daemon\n"})}),"\n",(0,r.jsx)(n.h2,{id:"speed-up-by-using-pre-compiled-third-party-libraries",children:"Speed up by using pre-compiled third-party libraries"}),"\n",(0,r.jsxs)(n.p,{children:["Download the pre-compiled third-party libraries from ",(0,r.jsx)(n.a,{href:"https://github.com/apache/doris-thirdparty/releases/tag/automation",children:"Apache Doris Third Party Prebuilt"}),". Refer to the command below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd thirdparty\nrm -rf installed\n\n# Intel chip\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Apple Silicon chip\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-arm64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Check if protoc and thrift functions normally\ncd installed/bin\n\n./protoc --version\n./thrift --version\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxadmonitiontitle,{}),(0,r.jsxs)(n.p,{children:['When running protoc and thrift, you may encounter an issue where the binary cannot be opened due to developer verification. To resolve this, you can go to "Security & Privacy" settings. In the "General" tab, click on the "Open Anyway" button to confirm your intent to open the binary. Refer to: ',(0,r.jsx)(n.a,{href:"https://support.apple.com/en-us/102445",children:"https://support.apple.com/en-us/102445"})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var t=i(667294);let r={},o=t.createContext(r);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);