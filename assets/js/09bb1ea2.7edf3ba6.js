"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8979],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1587:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={sidebar_label:"BSC Relayer Guides",hide_table_of_contents:!1,sidebar_position:2},c="BSC Relayer Guides",s={unversionedId:"bsc-relayer",id:"bsc-relayer",isDocsHomePage:!1,title:"BSC Relayer Guides",description:"Prepare Fund",source:"@site/docs/bsc-relayer.md",sourceDirName:".",slug:"/bsc-relayer",permalink:"/docs/bsc-relayer",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bsc-relayer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BSC Relayer Guides",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Using Web3.js Library on BNB Smart Chain",permalink:"/docs/dapp-dev/web3js-tutorial"},next:{title:"Band Protocol Price Feed on BNB Smart Chain",permalink:"/docs/band"}},p=[{value:"Prepare Fund",id:"prepare-fund",children:[],level:2},{value:"Steps to Install BSC Relayer",id:"steps-to-install-bsc-relayer",children:[],level:2},{value:"Get Example Config File",id:"get-example-config-file",children:[],level:2},{value:"Start Relayer",id:"start-relayer",children:[{value:"Verify Status",id:"verify-status",children:[],level:3}],level:2},{value:"Relayer Rewards",id:"relayer-rewards",children:[],level:2},{value:"Stop Relayer",id:"stop-relayer",children:[],level:2}],u={toc:p};function d(e){var t=e.components,i=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bsc-relayer-guides"},"BSC Relayer Guides"),(0,l.kt)("h2",{id:"prepare-fund"},"Prepare Fund"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Make sure that you have enough BNB in your account. You can get from ",(0,l.kt)("a",{parentName:"li",href:"https://testnet.binance.org/faucet-smart"},"faucet"))),(0,l.kt)("p",null,"If you haven't created your account yet, please follow these ",(0,l.kt)("a",{parentName:"p",href:"/docs/wallet/metamask"},"guides")," to create one first."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"100BNB")," for relayer register"),(0,l.kt)("li",{parentName:"ul"},"More than ",(0,l.kt)("strong",{parentName:"li"},"50BNB")," for transaction fee")),(0,l.kt)("p",null,"!!! Tip\nCurrently the bsc-relayer code is not fully prepared. Some features like ",(0,l.kt)("inlineCode",{parentName:"p"},"db persistence"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"prometheus monitor")," are still under development. So please don\u2019t modify the configuration about db_config, alert_config, instrumentation_config, admin_config"),(0,l.kt)("h2",{id:"steps-to-install-bsc-relayer"},"Steps to Install BSC Relayer"),(0,l.kt)("p",null,"1.Build from source code"),(0,l.kt)("p",null,"Make sure that you have installed ",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"Go 1.13+")," and have added ",(0,l.kt)("inlineCode",{parentName:"p"},"GOPATH")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/bnb-chain/bsc-relayer\n# Enter the folder bsc was cloned into\ncd bsc-relayer\n# Comile and install bsc\nmake build\n")),(0,l.kt)("p",null,"or you can download the pre-build binaries from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-relayer/releases/tag/v1.1.0"},"release page")),(0,l.kt)("h2",{id:"get-example-config-file"},"Get Example Config File"),(0,l.kt)("p",null,"Get example config from this url: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-relayer/blob/master/config/config.json"},"https://github.com/bnb-chain/bsc-relayer/blob/master/config/config.json")),(0,l.kt)("p",null,"Edit",(0,l.kt)("inlineCode",{parentName:"p"},"config.json")," and fill your BSC private key to bsc_config.private_key, example private key: ",(0,l.kt)("inlineCode",{parentName:"p"},"AFD8C5D83F148065176268A9D1EE375A10CEE1E74D15985D4CC63E467EC34DA5")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Beacon Chain Configuration:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mnemonic"),": Paste the recovery phrase here. Since bsc-relayer will automaticly submit ",(0,l.kt)("inlineCode",{parentName:"li"},"double-sign")," evidence, if it's committed, the reward will be sent to this address"))),(0,l.kt)("li",{parentName:"ul"},"BNB Smart Chain Configuration:"),(0,l.kt)("li",{parentName:"ul"})),(0,l.kt)("h2",{id:"start-relayer"},"Start Relayer"),(0,l.kt)("p",null,"You can start Locally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./bsc-relayer --config-type local --config-path config.json\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(base) huangsuyudeMacBook-Pro:mac huangsuyu$ bsc-relayer --config-type local --config-path config.json\n2020-05-27 17:01:16 INFO main Start relayer\n2020-05-27 17:01:16 INFO SyncProtocol Sync cross chain protocol from https://github.com/bnb-chain/bsc-relayer-config.git\n2020-05-27 17:01:18 INFO RegisterRelayerHub This relayer has already been registered\n2020-05-27 17:01:18 INFO CleanPreviousPackages channelID: 1, next deliver sequence 55 on BSC, next sequence 55 on BC\n2020-05-27 17:01:18 INFO CleanPreviousPackages channelID: 2, next deliver sequence 1273 on BSC, next sequence 1273 on BC\n2020-05-27 17:01:18 INFO CleanPreviousPackages channelID: 3, next deliver sequence 6 on BSC, next sequence 6 on BC\n2020-05-27 17:01:19 INFO CleanPreviousPackages channelID: 8, next deliver sequence 5 on BSC, next sequence 5 on BC\n2020-05-27 17:01:19 INFO RelayerDaemon Start relayer daemon\n2020-05-27 17:01:19 INFO Serve start admin server at 0.0.0.0:8080\n")),(0,l.kt)("p",null,"Or, dynamic Sync Cross Chain Protocol Configuration from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-relayer-config"},"https://github.com/bnb-chain/bsc-relayer-config")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Edit config.json and change "cross_chain_config.protocol_config_type" to "remote". Then relayer will dynamically sync cross chain protocol configuration from this repository: ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bsc-relayer-config"},"https://github.com/bnb-chain/bsc-relayer-config")),(0,l.kt)("li",{parentName:"ul"},"Start relayer service")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./bsc-relayer --config-type local --config-path config.json\n")),(0,l.kt)("h3",{id:"verify-status"},"Verify Status"),(0,l.kt)("p",null,"You could call ",(0,l.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001006"},"RelayerHub Contract")," to verify that your relayer is registered. Go to ",(0,l.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001006#readContract"},"read contract")," and call ",(0,l.kt)("strong",{parentName:"p"},"isRelayer")," function. If it returns ",(0,l.kt)("strong",{parentName:"p"},"true"),", then your relayer is working properly."),(0,l.kt)("h2",{id:"relayer-rewards"},"Relayer Rewards"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can witness the distribution of relayer rewards in the log of system contract:  ",(0,l.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001005#events"},"https://bscscan.com/address/0x0000000000000000000000000000000000001005#events"),". According to the design of ",(0,l.kt)("a",{parentName:"p",href:"/docs/learn/incentives"},"Relayer Incentive"),", the rewards will be distributed every 1000 data packages. The total accumulated rewards can be read from ",(0,l.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001005#readContract"},"contract"),"the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"_collectedRewardForHeaderRelayer")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"_collectedRewardForTransferRelayer"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Query your relayer's status"))),(0,l.kt)("p",null,"The total accumulated relayed count can be read from ",(0,l.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001005#readContract"},"contract"),"the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"_transferRelayersSubmitCount")),(0,l.kt)("h2",{id:"stop-relayer"},"Stop Relayer"),(0,l.kt)("p",null,"To get your locked ",(0,l.kt)("strong",{parentName:"p"},"100BNB")," back, you need to call ",(0,l.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001006"},"RelayerHub Contract")," to unregister your relayer. The fee is ",(0,l.kt)("strong",{parentName:"p"},"0.1BNB")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to MyEtherWallet and ",(0,l.kt)("a",{parentName:"li",href:"https://www.myetherwallet.com/interface/interact-with-contract"},"interact with contract")),(0,l.kt)("li",{parentName:"ul"},"Fill in the contract addresss: ",(0,l.kt)("strong",{parentName:"li"},"0x0000000000000000000000000000000000001006")," with ",(0,l.kt)("a",{target:"_blank",href:r(44328).Z},"abi")," interface"),(0,l.kt)("li",{parentName:"ul"},"Call ",(0,l.kt)("strong",{parentName:"li"},"unregister")," function and leave value in ETH as 0"),(0,l.kt)("li",{parentName:"ul"},"Sign your transaction in ",(0,l.kt)("strong",{parentName:"li"},"MetaMask"))))}d.isMDXComponent=!0},44328:function(e,t,r){t.Z=r.p+"assets/files/relayerhub-1922b1e0cba6061932ff2d4213266998.abi"}}]);