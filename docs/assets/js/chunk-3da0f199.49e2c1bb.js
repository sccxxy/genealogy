(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3da0f199"],{"0cd4":function(e,t,a){"use strict";a.r(t),t["default"]=a.p+"assets/img/camera1.63225e3b.png"},1780:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-container",[r("el-header",[r("div",{staticStyle:{margin:"15px"}},[r("el-checkbox",{attrs:{label:"1"},on:{change:e.expandChange},model:{value:e.expandAll,callback:function(t){e.expandAll=t},expression:"expandAll"}},[e._v("\n          展开全部\n        ")]),e._v(" "),r("el-checkbox",{attrs:{label:"1"},on:{change:e.simpModelChange},model:{value:e.simpModel,callback:function(t){e.simpModel=t},expression:"simpModel"}},[e._v("\n          简约模式\n        ")]),e._v(" "),r("el-checkbox",{attrs:{label:"1"},on:{change:e.drawerModelChange},model:{value:e.drawerModel,callback:function(t){e.drawerModel=t},expression:"drawerModel"}},[e._v("\n          抽屉模式\n        ")]),e._v(" "),r("span",{staticClass:"dept_camera",attrs:{title:"截图"},on:{click:e.setImage}},[e._v("\n          截图 "),r("img",{staticClass:"logo",staticStyle:{cursor:"pointer"},attrs:{src:a("0cd4"),width:"30"}})])],1)]),e._v(" "),r("el-container",[r("el-aside",{directives:[{name:"show",rawName:"v-show",value:!e.drawerModel,expression:"!drawerModel"}],attrs:{width:"380px"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("el-button",{staticClass:"filter-item",attrs:{type:"primary",plain:"",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n              新增\n            ")]),e._v(" "),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",plain:"",icon:"el-icon-delete"},on:{click:e.handleDel}},[e._v("\n              删除\n            ")])],1),e._v(" "),r("div",{staticClass:"text item"},[r("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[r("el-form-item",{attrs:{label:"操作",prop:"dialogStatus"}},[r("el-input",{attrs:{disabled:""},model:{value:e.dialogStatus,callback:function(t){e.dialogStatus=t},expression:"dialogStatus"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"父亲姓名",prop:"pusername"}},[r("el-input",{attrs:{disabled:""},model:{value:e.temp.pusername,callback:function(t){e.$set(e.temp,"pusername",t)},expression:"temp.pusername"}})],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"pid",prop:"pid"}},[r("el-input",{model:{value:e.temp.pid,callback:function(t){e.$set(e.temp,"pid",t)},expression:"temp.pid"}})],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"orgId",prop:"orgId"}},[r("el-input",{model:{value:e.temp.orgId,callback:function(t){e.$set(e.temp,"orgId",t)},expression:"temp.orgId"}})],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"userId",prop:"userId"}},[r("el-input",{model:{value:e.temp.userId,callback:function(t){e.$set(e.temp,"userId",t)},expression:"temp.userId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"姓名",prop:"username"}},[r("el-input",{model:{value:e.temp.username,callback:function(t){e.$set(e.temp,"username",t)},expression:"temp.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"字号",prop:"epithet"}},[r("el-input",{model:{value:e.temp.epithet,callback:function(t){e.$set(e.temp,"epithet",t)},expression:"temp.epithet"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"世系",prop:"lineage"}},[r("el-input",{model:{value:e.temp.lineage,callback:function(t){e.$set(e.temp,"lineage",t)},expression:"temp.lineage"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"长次"}},[r("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择长次"},model:{value:e.temp.elderOrder,callback:function(t){e.$set(e.temp,"elderOrder",t)},expression:"temp.elderOrder"}},e._l(e.elderOrderOptions,(function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"妻子姓氏",prop:"wifeLastname"}},[r("el-input",{model:{value:e.temp.wifeLastname,callback:function(t){e.$set(e.temp,"wifeLastname",t)},expression:"temp.wifeLastname"}})],1)],1),e._v(" "),r("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n              确认\n            ")]),e._v(" "),r("el-button",{on:{click:e.resetTemp}},[e._v("\n              重置\n            ")])],1)])],1),e._v(" "),r("el-main",{staticStyle:{border:"1px solid #eee"},style:{height:e.treeHeight+"px"}},[r("div",{staticClass:"container"},[r("div",{attrs:{id:"orgTree"}},[r("div",{staticClass:"text-center orgTree"},[r("vue2-org-tree",{attrs:{data:e.data,labelClassName:e.labelClassName,horizontal:e.horizontal,collapsable:e.collapsable,expandAll:e.expandAll,"render-content":e.renderContent,"label-class-name":e.labelClassName},on:{"on-expand":e.onExpand,"on-node-click":e.onNodeClick}})],1)])])])],1)],1),e._v(" "),r("el-drawer",{ref:"drawer",attrs:{title:"title","before-close":e.handleClose,visible:e.dialog,"with-header":!1,direction:"rtl","custom-class":"demo-drawer"},on:{"update:visible":function(t){e.dialog=t}}},[r("div",{staticClass:"demo-drawer__content"},[r("el-form",{attrs:{model:e.temp}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("el-button",{staticClass:"filter-item",attrs:{type:"primary",plain:"",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n              新增\n            ")]),e._v(" "),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",plain:"",icon:"el-icon-delete"},on:{click:e.handleDel}},[e._v("\n              删除\n            ")])],1),e._v(" "),r("div",{staticClass:"text item"},[r("el-form",{ref:"dataForm",staticStyle:{width:"345px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[r("el-form-item",{attrs:{label:"操作",prop:"dialogStatus"}},[r("el-input",{attrs:{disabled:""},model:{value:e.dialogStatus,callback:function(t){e.dialogStatus=t},expression:"dialogStatus"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"父亲姓名",prop:"pusername"}},[r("el-input",{attrs:{disabled:""},model:{value:e.temp.pusername,callback:function(t){e.$set(e.temp,"pusername",t)},expression:"temp.pusername"}})],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"pid",prop:"pid"}},[r("el-input",{model:{value:e.temp.pid,callback:function(t){e.$set(e.temp,"pid",t)},expression:"temp.pid"}})],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"orgId",prop:"orgId"}},[r("el-input",{model:{value:e.temp.orgId,callback:function(t){e.$set(e.temp,"orgId",t)},expression:"temp.orgId"}})],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"userId",prop:"userId"}},[r("el-input",{model:{value:e.temp.userId,callback:function(t){e.$set(e.temp,"userId",t)},expression:"temp.userId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"姓名",prop:"username"}},[r("el-input",{model:{value:e.temp.username,callback:function(t){e.$set(e.temp,"username",t)},expression:"temp.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"字号",prop:"epithet"}},[r("el-input",{model:{value:e.temp.epithet,callback:function(t){e.$set(e.temp,"epithet",t)},expression:"temp.epithet"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"世系",prop:"lineage"}},[r("el-input",{model:{value:e.temp.lineage,callback:function(t){e.$set(e.temp,"lineage",t)},expression:"temp.lineage"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"长次"}},[r("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择长次"},model:{value:e.temp.elderOrder,callback:function(t){e.$set(e.temp,"elderOrder",t)},expression:"temp.elderOrder"}},e._l(e.elderOrderOptions,(function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"妻子姓氏",prop:"wifeLastname"}},[r("el-input",{model:{value:e.temp.wifeLastname,callback:function(t){e.$set(e.temp,"wifeLastname",t)},expression:"temp.wifeLastname"}})],1)],1),e._v(" "),r("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n              确认\n            ")]),e._v(" "),r("el-button",{on:{click:e.resetTemp}},[e._v("\n              重置\n            ")])],1)])],1)],1)])],1)},i=[]},2983:function(e,t,a){"use strict";a.r(t);var r=a("f09c"),i=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t["default"]=i.a},"39a0":function(e,t,a){},e18b:function(e,t,a){"use strict";a.r(t);var r=a("1780"),i=a("2983");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("f15f");var l=a("2877"),n=Object(l["a"])(i["default"],r["a"],r["b"],!1,null,"bca33cc6",null);t["default"]=n.exports},f09c:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("c0e9"),i=s(r);function s(e){return e&&e.__esModule?e:{default:e}}var l=a("7d05");t.default={data(){return{dialogStatus:"edit",rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},dataList:[],temp:{orgId:"",pusername:"",pid:"",userId:"",username:"",epithet:"",lineage:"",elderOrder:"",wifeLastname:"",childOrder:""},elderOrderOptions:[{key:1,value:"长子"},{key:2,value:"次子"},{key:3,value:"三子"},{key:4,value:"四子"},{key:5,value:"幼子"}],dialogFormVisible:!1,data:{},horizontal:!1,collapsable:!0,expandAll:!0,simpModel:!0,drawerModel:!1,labelClassName:"bg-white",dialog:!1,loading:!1,formLabelWidth:"80px",treeHeight:600}},created(){this.getFenealList(),this.toggleExpand(this.data,this.expandAll)},mounted(){this.getTreeHeight(),window.addEventListener("resize",this.getTreeHeight,!1),setTimeout(e=>{this.initZoom()},500)},methods:{getTreeHeight(){this.treeHeight=document.documentElement.clientHeight-60},getFenealList(){let e=this,t=[{lineage:"一世",childOrder:"1",epithet:"张1一",pid:"",userId:"1",orgId:"1",elderOrder:"长子",username:"张一一",wifeLastname:"李氏"},{lineage:"二世",childOrder:"2",epithet:"李2一",pid:"1",userId:"2",orgId:"2",elderOrder:"次子",username:"李二6",wifeLastname:"张氏"},{lineage:"3",childOrder:"1",epithet:"3",pid:"2",userId:"afb74338beb340b8886d8438aec9e73b",orgId:"4accc246e1ed421884c5fe17bccf157b",elderOrder:"长子",username:"3",wifeLastname:"4"},{lineage:"三世",childOrder:"2",epithet:"张3二",pid:"2",userId:"4",orgId:"4",elderOrder:"次子",username:"李三二",wifeLastname:"韩氏"},{lineage:"三世",childOrder:"5",epithet:"张3一",pid:"2",userId:"5",orgId:"5",elderOrder:"幼子",username:"张三一",wifeLastname:"牛氏"},{lineage:"一世",childOrder:"1",epithet:"张1一",pid:"3",userId:"1",orgId:"6",elderOrder:"长子",username:"张一一",wifeLastname:"李氏"},{lineage:"二世",childOrder:"2",epithet:"李2一",pid:"4",userId:"2",orgId:"7",elderOrder:"次子",username:"李二6",wifeLastname:"张氏"},{lineage:"三世",childOrder:"2",epithet:"张3二",pid:"6",userId:"4",orgId:"9",elderOrder:"次子",username:"李三二",wifeLastname:"韩氏"},{lineage:"7",childOrder:"1",epithet:"7",pid:"846d38589c3c41bb8d327253cadd1e45",userId:"d8c827305bc843abb9df213d59483783",orgId:"1979f0c500d84d5a8a5fa9102502a539",elderOrder:"长子",username:"7",wifeLastname:"7"},{lineage:"1",childOrder:"1",epithet:"1",pid:"d150e4c7b59f41e182d182b1c74ab5c8",userId:"923351a02e7d426fb7ed480ea2ffeeec",orgId:"180753347a9c430f943958f3092b4317",elderOrder:"长子",username:"1",wifeLastname:"1"},{lineage:"7",childOrder:"1",epithet:"苏7",pid:"d150e4c7b59f41e182d182b1c74ab5c8",userId:"e9a32a91e106467ead77e39c7119acf5",orgId:"59ccfc567192452dad0e9572047d7afc",elderOrder:"长子",username:"苏7",wifeLastname:"7"},{lineage:"7",childOrder:"1",epithet:"su7",pid:"d150e4c7b59f41e182d182b1c74ab5c8",userId:"d58afc39720549f29ff5501edd5e5231",orgId:"5d7a8faef7304bffa20fd4b25bf072c4",elderOrder:"长子",username:"su7",wifeLastname:"7"},{lineage:"7",childOrder:"1",epithet:"苏7",pid:"d150e4c7b59f41e182d182b1c74ab5c8",userId:"bbc466e0f578427588f886dcfea4b81e",orgId:"90dec6f2e9b440efb6d68cfae4345551",elderOrder:"长子",username:"苏6",wifeLastname:"苏"}],a=t;e.dataList=e.arrDeepCopy(a),e.parseTree(a,t=>{e.data=t[0],console.log(e.data),this.toggleExpand(this.data,this.expandAll)})},handleDel(){let e=this,t=this.temp;t.pid?this.$confirm("确定删除该数据及其子节点","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{e.axios.post(e.$store.state.apiUrl+"deleteData",t).then(e=>{0==e.data.code?(this.$message({message:"删除成功",type:"success",center:!0}),this.getFenealList()):this.$message({message:"删除失败",type:"warning",center:!0})})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})}):this.$message.error("请选择节点删除")},handleCreate(){this.dialogStatus="create";let e=this.temp.username,t=this.temp.orgId,a=this.temp.pid,r=this.temp.userId;a?(this.temp={pusername:"",pid:"",username:"",epithet:"",lineage:"",elderOrder:"",wifeLastname:""},this.temp.pusername=e,this.temp.orgId=t,this.temp.pid=a,this.temp.userId=r):this.$message.error("请选择节点新增")},createData(){let e=this,t=this.temp;t.childOrder=e.getDicts(t.elderOrder),e.axios.post(e.$store.state.apiUrl+"createData",t).then(t=>{0==t.data.code?(this.$message({message:"修改成功",type:"success",center:!0}),e.getFenealList()):this.$message({message:"修改失败",type:"warning",center:!0}),this.dialog=!1})},updateData(){let e=this,t=this.temp;t.childOrder=e.getDicts(t.elderOrder),e.axios.post(e.$store.state.apiUrl+"updateData",t).then(t=>{0==t.data.code?(this.$message({message:"修改成功",type:"success",center:!0}),e.getFenealList()):this.$message({message:"修改失败",type:"warning",center:!0}),this.dialog=!1})},handleEdit(){this.dialogStatus="edit"},resetTemp(){this.temp={orgId:"",pusername:"",pid:"",userId:"",username:"",epithet:"",lineage:"",elderOrder:"",wifeLastname:""}},expandChange(e){this.toggleExpand(this.data,this.expandAll)},simpModelChange(e){this.simpModel=e},drawerModelChange(e){this.drawerModel=e},handleClose(e){e()},cancelForm(){this.loading=!1,this.dialog=!1,clearTimeout(this.timer)},renderContent(e,t){return t.elderOrder=this.getValue(t.elderOrder),this.simpModel?e("div",{style:"height: 100px;width:135px"},[e("div",{style:""},[e("span",{style:"border-right:1px solid #ccc;padding: 7px;"},[t.elderOrder]),e("span",{style:"padding: 7px;"},[t.lineage])]),e("div",{style:"border:1px solid #ccc;margin-top: 7px;"},[e("div",{style:"float: left;padding: 7px 3px;border-right:1px solid #ccc;width: 78px;"},[e("div",{style:"border-bottom:1px solid #ccc;padding: 7px 3px;"},[t.epithet]),e("div",{style:"padding: 7px 3px;"},[t.username])]),e("div",{style:"float: right;width: 48px;"},[e("span",{style:"transform: translateY(120%);    float: left;margin: 9px 0px;"},[t.wifeLastname])])])]):t.username},onExpand(e,t){"expand"in t?(t.expand=!t.expand,!t.expand&&t.children&&this.collapse(t.children)):this.$set(t,"expand",!0)},onNodeClick(e,t){this.dialogStatus="edit",this.drawerModel&&(this.dialog=!0);let a=this;a.temp=t,a.temp.pusername=a.dataList.find(e=>e.userId===t.pid)?a.dataList.find(e=>e.userId===t.pid).username:""},collapse(e){var t=this;e.forEach((function(e){e.expand&&(e.expand=!1),e.children&&t.collapse(e.children)}))},toggleExpand(e,t){var a=this;Array.isArray(e)?e.forEach((function(e){a.$set(e,"expand",t),e.children&&a.toggleExpand(e.children,t)})):(this.$set(e,"expand",t),e.children&&a.toggleExpand(e.children,t))},parseTree(e,t,a){let r=this,i=!1;if(a){let s=a.map(e=>e.orgId),l=0;while(l<e.length){r.parseTree.stackIndexSize++;const{pid:t,orgId:n}=e[l],d=s.indexOf(t);if(-1!==d){i=!0;const t=e.splice(l,1)[0],r=[];a[d].children.push({...t,children:r})}else l++}r.parseTree.stackIndexSize<(r.parseTree.maxStackSize||5e4)?a.forEach(({children:a})=>r.parseTree(e,t,a)):requestAnimationFrame(()=>{a.forEach(({children:a})=>r.parseTree(e,t,a))})}else{a=[];let s=0;while(s<e.length){const{pid:t,orgId:r}=e[s];if(t)s++;else{const t=e.splice(s,1)[0],r=[];i=!0,a.push({...t,children:r})}}r.parseTree.stackIndexSize=0,r.parseTree.targetList=a,r.parseTree.callback=t,r.parseTree(e,t,a)}e.length&&!i||(r.parseTree.callback&&r.parseTree.callback(r.parseTree.targetList),r.parseTree.callback=null)},arrDeepCopy(e){var t=[];for(var a in e)t[a]="object"===typeof e[a]?this.arrDeepCopy(e[a]):e[a];return t},getDicts(e){for(var t of this.elderOrderOptions)if(t.value==e)return t.key;return e},getValue(e){for(var t of this.elderOrderOptions)if(t.key==e)return t.value;return e},setImage(){this.initZoom(),setTimeout(e=>{this.capture()},500)},capture(){let e=this;var t=document.createElement("canvas");let a=document.getElementsByClassName("org-tree-container");a=a[0];var r=parseInt(window.getComputedStyle(a).width),s=parseInt(window.getComputedStyle(a).height);t.width=2.5*r,t.height=2.5*s,t.style.width=r+"px",t.style.height=s+"px";var l=t.getContext("2d");l.scale(2,2),(0,i.default)(document.getElementById("orgTree"),{canvas:t}).then((function(t){e.saveAs(t.toDataURL("image/pdf"),"orgchart.png")}))},saveAs(e,t){var a=document.createElement("a");"string"===typeof a.download?(a.href=e,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)):window.open(e)},resetOrg(e){"1"===e.deptlevel&&this.moveZoom()},moveZoom(e){var t;t=e?this.departmentIsVisible(e).moveTo:{x:0,y:0},this.zoomInstance.moveTo(t.x,t.y)},initZoom(e){var t,a=document.querySelector("#orgTree");this.zoomInstance=l(a,{smoothScroll:!1,maxZoom:1,minZoom:.3}),t=e?this.departmentIsVisible(e).moveTo:{x:0,y:0},this.zoomInstance.moveTo(t.x,t.y);let r=this;this.zoomInstance.on("panend",(function(e){r.isDrag=!0,setTimeout(e=>{r.isDrag=!1},200)}))},departmentIsVisible(e){var t=document.getElementById("ID_"+e),a=document.getElementById("orgTree"),r=t.getBoundingClientRect(),i=a.getBoundingClientRect(),s={w:window.innerWidth,h:window.innerHeight-100},l={y:i.top-r.top+.5*s.h,x:i.left-r.left+.5*s.w-300};l.y=l.y>0?0:l.y;var n=!(r.bottom<0||r.right<300||r.left>window.innerWidth||r.top>window.innerHeight);return{isVissible:n,moveTo:l}}}}},f15f:function(e,t,a){"use strict";a("39a0")}}]);
//# sourceMappingURL=chunk-3da0f199.49e2c1bb.js.map