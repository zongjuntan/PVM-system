(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-140eddd4"],{"30ae":function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"app-container"},[l("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"88px"}},[l("el-form-item",{attrs:{label:"驾驶员姓名",prop:"driverName"}},[l("el-input",{attrs:{placeholder:"请输入驾驶员姓名",clearable:""},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handleQuery(a)}},model:{value:e.queryParams.driverName,callback:function(a){e.$set(e.queryParams,"driverName",a)},expression:"queryParams.driverName"}})],1),l("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[l("el-input",{attrs:{placeholder:"请输入手机号码",clearable:""},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handleQuery(a)}},model:{value:e.queryParams.phonenumber,callback:function(a){e.$set(e.queryParams,"phonenumber",a)},expression:"queryParams.phonenumber"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),l("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.postList},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),l("el-table-column",{attrs:{label:"驾驶员姓名",align:"center",prop:"driverName"}}),l("el-table-column",{attrs:{label:"手机号码",align:"center",prop:"phonenumber"}}),l("el-table-column",{attrs:{label:"身份证",align:"center",prop:"cardNumber"}}),l("el-table-column",{attrs:{label:"车辆类型",align:"center",prop:"carType"},scopedSlots:e._u([{key:"default",fn:function(a){return[l("span",[e._v(e._s(e.computeCarType(a.row)))])]}}])}),l("el-table-column",{attrs:{label:"车牌",align:"center",prop:"licensePlate"}}),l("el-table-column",{attrs:{label:"同行人员数量",align:"center",prop:"numberPersonnel"}}),l("el-table-column",{attrs:{label:"是否危化品",align:"center",prop:"isHazardousChemicals"},scopedSlots:e._u([{key:"default",fn:function(a){return[l("span",[e._v(e._s(a.row.isHazardousChemicals?"否":"是"))])]}}])}),l("el-table-column",{attrs:{label:"审核状态",align:"center",prop:"isHazardousChemicals"},scopedSlots:e._u([{key:"default",fn:function(a){return[l("el-tag",{attrs:{type:0==a.row.auditStatus?"":"success"}},[e._v(e._s(e.computeAudit(a.row)))])]}}])}),l("el-table-column",{attrs:{label:"出入事宜",align:"center",prop:"entryMatters"}}),l("el-table-column",{attrs:{label:"入园时间",align:"center",prop:"enterTime"}}),l("el-table-column",{attrs:{label:"出园时间",align:"center",prop:"outTime"}}),l("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[l("span",[e._v(e._s(e.parseTime(a.row.createTime)))])]}}])}),l("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(a){return[l("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["audit:companyAudit:edit"],expression:"['audit:companyAudit:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(l){return e.handleAudit(a.row)}}},[e._v("审核")])]}}])})],1),l("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(a){return e.$set(e.queryParams,"pageNum",a)},"update:limit":function(a){return e.$set(e.queryParams,"pageSize",a)},pagination:e.getList}}),l("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(a){e.open=a}}},[l("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"审核状态",prop:"isAgree"}},[l("el-radio-group",{model:{value:e.form.isAgree,callback:function(a){e.$set(e.form,"isAgree",a)},expression:"form.isAgree"}},e._l(e.auditOptions,(function(a){return l("el-radio",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.label))])})),1)],1),l("el-form-item",{attrs:{label:"备注",prop:"remark"}},[l("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(a){e.$set(e.form,"remark",a)},expression:"form.remark"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),l("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},r=[],n=l("5530"),i=(l("7db0"),l("d81d"),l("d3b7"),l("0643"),l("fffc"),l("a573"),l("6fa3")),u=l("3620"),o={name:"Post",dicts:["sys_normal_disable"],data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,postList:[],title:"",open:!1,currentRow:{},queryParams:{pageNum:1,pageSize:10,driverName:void 0,phonenumber:void 0,auditStatus:"0"},form:{},audits:[{label:"待审核",value:"0"},{label:"待来访",value:"1"},{label:"已来访",value:"2"},{label:"未通告",value:"3"},{label:"反馈",value:"4"},{label:"公司审核通过",value:"5"},{label:"园区审核通过",value:"6"},{label:"公司审核不通过",value:"7"},{label:"园区审核不通过",value:"8"}],auditOptions:[{value:"0",label:"同意"},{value:"1",label:"不同意"}],rules:{isAgree:[{required:!0,message:"请选择审核状态",trigger:"blur"}],postCode:[{required:!0,message:"岗位编码不能为空",trigger:"blur"}],postSort:[{required:!0,message:"岗位顺序不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{computeCarType:function(e){var a;return(null===(a=u["a"].carTypes.find((function(a){return e.carType==a.value})))||void 0===a?void 0:a.label)||""},computeAudit:function(e){var a;return(null===(a=this.audits.find((function(a){return e.auditStatus==a.value})))||void 0===a?void 0:a.label)||""},getList:function(){var e=this;this.loading=!0,Object(i["c"])(this.queryParams).then((function(a){e.postList=a.rows,e.total=a.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={postId:void 0,postCode:void 0,postName:void 0,postSort:0,status:"0",remark:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.postId})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加岗位"},handleAudit:function(e){this.open=!0,this.currentRow=e},submitForm:function(){var e=this;this.$refs["form"].validate((function(a){a&&Object(i["a"])(Object(n["a"])({entranceExitId:e.currentRow.id,auditStatus:0==e.form.isAgree?5:7},e.form)).then((function(a){e.$modal.msgSuccess("操作成功"),e.open=!1,e.getList()}))}))},handleDelete:function(e){var a=this,l=e.postId||this.ids;this.$modal.confirm('是否确认删除岗位编号为"'+l+'"的数据项？').then((function(){return delPost(l)})).then((function(){a.getList(),a.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/post/export",Object(n["a"])({},this.queryParams),"post_".concat((new Date).getTime(),".xlsx"))}}},s=o,c=l("2877"),d=Object(c["a"])(s,t,r,!1,null,null,null);a["default"]=d.exports},3620:function(e,a,l){"use strict";a["a"]={enterprise:[{value:"1",label:"天山胡杨"},{value:"2",label:"欧林环保"},{value:"3",label:"科迪能源"},{value:"4",label:"华电双丰新能源"},{value:"5",label:"大疆润洋"},{value:"6",label:"谷满仓"},{value:"7",label:"时利电力"},{value:"8",label:"国源生物"},{value:"9",label:"齐峰美农"},{value:"10",label:"硕丰肥业"},{value:"11",label:"新冀能源"},{value:"12",label:"施可丰"},{value:"13",label:"阆屯新型建材"},{value:"14",label:"众泽节水灌溉"},{value:"15",label:"林果友"},{value:"16",label:"世鑫能源"},{value:"17",label:"众成致远环保材料"},{value:"18",label:"农夫情"},{value:"19",label:"东昊商混"},{value:"20",label:"天洋新材料"},{value:"21",label:"泽路生物"},{value:"22",label:"鑫凯精细化工"},{value:"23",label:"肥掌门"},{value:"24",label:"德福优品"},{value:"25",label:"鑫源钢结构"},{value:"26",label:"净淼环保"},{value:"27",label:"瞻德生物科技"},{value:"28",label:"西部恒硕"},{value:"29",label:"汉维特"},{value:"30",label:"鑫和再生"},{value:"31",label:"秋山制造"},{value:"32",label:"曙光科技"}],carTypes:[{value:1,label:"轿车"},{value:2,label:"渣土车"},{value:3,label:"箱型货车"},{value:4,label:"危化品运输车"},{value:5,label:"半挂车"},{value:6,label:"混凝土车"},{value:7,label:"SUV"},{value:8,label:"皮卡车"},{value:9,label:"面包车"},{value:10,label:"卡车"},{value:11,label:"农用车"},{value:12,label:"拖车"},{value:13,label:"清洁车"}],hazardousChemicalsTypes:[{value:1,label:"爆炸品"},{value:2,label:"易燃气体"},{value:3,label:"非易燃无毒气体"},{value:4,label:"有毒气体"},{value:5,label:"易燃液体"},{value:6,label:"易燃固体"},{value:7,label:"氧化剂和有机过氧化物"},{value:8,label:"有毒和感染性物质"},{value:9,label:"放射性物质"},{value:10,label:"腐蚀性物质"},{value:11,label:"杂项危险物质和物品"}]}},"6fa3":function(e,a,l){"use strict";l.d(a,"b",(function(){return r})),l.d(a,"a",(function(){return n})),l.d(a,"c",(function(){return i}));var t=l("b775");function r(e){return Object(t["a"])({url:"/reservation/exit/list",method:"get",params:e})}function n(e){return Object(t["a"])({url:"reservation/examine",method:"post",data:e})}function i(e){return Object(t["a"])({url:"/reservation/exit/queryEntranceExitandExamine",method:"get",params:e})}}}]);