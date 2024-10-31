(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a6cec06"],{"0da0":function(e,t,a){},"798e":function(e,t,a){"use strict";a("0da0")},d89e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchEmp}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入员工姓名"},model:{value:e.searchEmp.name,callback:function(t){e.$set(e.searchEmp,"name",t)},expression:"searchEmp.name"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchEmp.gender,callback:function(t){e.$set(e.searchEmp,"gender",t)},expression:"searchEmp.gender"}},[a("el-option",{attrs:{label:"男",value:"1"}}),a("el-option",{attrs:{label:"女",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"入职时间"}},[a("el-date-picker",{staticStyle:{width:"400px","margin-left":"20px"},attrs:{clearable:"","value-format":"yyyy-MM-dd",type:"daterange",placeholder:"选择日期","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.entrydate,callback:function(t){e.entrydate=t},expression:"entrydate"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),a("el-button",{attrs:{type:"info"},on:{click:e.clear}},[e._v("清空")])],1)],1),a("el-row",[a("el-button",{attrs:{type:"danger",size:"medium"},on:{click:e.deleteByIds}},[e._v("- 批量删除")]),a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!0,e.emp={image:""}}}},[e._v("+ 新增员工")])],1),a("el-dialog",{ref:"form",attrs:{title:"编辑员工",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.emp,"label-width":"80px",size:"mini"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:e.emp.username,callback:function(t){e.$set(e.emp,"username",t)},expression:"emp.username"}})],1),a("el-form-item",{attrs:{label:"员工姓名"}},[a("el-input",{model:{value:e.emp.name,callback:function(t){e.$set(e.emp,"name",t)},expression:"emp.name"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.emp.gender,callback:function(t){e.$set(e.emp,"gender",t)},expression:"emp.gender"}},e._l(e.genderList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"履历"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/upload",headers:e.token,name:"image","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.emp.image?a("img",{staticClass:"avatar",attrs:{src:e.emp.image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"职位"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择","value-key":"emp.job"},model:{value:e.emp.job,callback:function(t){e.$set(e.emp,"job",t)},expression:"emp.job"}},e._l(e.jobList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"入职日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:"",type:"date",placeholder:"选择日期",size:"small"},model:{value:e.emp.entrydate,callback:function(t){e.$set(e.emp,"entrydate",t)},expression:"emp.entrydate"}})],1),a("el-form-item",{attrs:{label:"归属部门"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.emp.deptId,callback:function(t){e.$set(e.emp,"deptId",t)},expression:"emp.deptId"}},e._l(e.deptList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("提交")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")])],1)],1)],1),a("br"),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"image",label:"履历",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("el-image",{staticStyle:{width:"auto",height:"40px",border:"none",cursor:"pointer"},attrs:{src:t.image}})]}}])}),a("el-table-column",{attrs:{align:"center",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-right":"10px"}},[e._v(" "+e._s("1"==t.row.gender?"男":"女"))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"职位"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.job?a("span",{staticStyle:{"margin-right":"10px"}},[e._v("首席执行官")]):e._e(),2==t.row.job?a("span",{staticStyle:{"margin-right":"10px"}},[e._v("首席运营官")]):e._e(),3==t.row.job?a("span",{staticStyle:{"margin-right":"10px"}},[e._v("首席技术官")]):e._e(),4==t.row.job?a("span",{staticStyle:{"margin-right":"10px"}},[e._v("首席财务官")]):e._e()]}}])}),a("el-table-column",{attrs:{align:"center",label:"入职日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.entrydate)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"最后操作时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.updateTime?t.row.updateTime.replace("T"," "):"")+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.update(t.row.id)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.deleteById(t.row.id)}}},[e._v("删除")])]}}])})],1)],a("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":[5,10,15,20],"page-size":5,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],2)},l=[],i=(a("b0c0"),a("b775"));function r(e,t,a,n,l,r){return Object(i["a"])({url:"/emps?name="+e+"&gender="+t+"&begin="+a+"&end="+n+"&page="+l+"&pageSize="+r,method:"get"})}function s(e){return Object(i["a"])({url:"/emps",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/emps",method:"put",data:e})}function c(e){return Object(i["a"])({url:"/emps/"+e,method:"delete"})}function u(e){return Object(i["a"])({url:"/emps/"+e,method:"get"})}var d=a("fe05"),m=a("5f87"),p={data:function(){return{background:!0,pageSize:5,totalCount:100,currentPage:1,dialogVisible:!1,searchEmp:{name:"",gender:""},emp:{image:""},deptList:[],genderList:[{id:1,name:"男"},{id:2,name:"女"}],jobList:[{id:1,name:"首席执行官"},{id:2,name:"首席运营官"},{id:3,name:"首席技术官"},{id:4,name:"首席财务官"}],beginTime:"",endTime:"",entrydate:"",selectedIds:[],multipleSelection:[],tableData:[],token:{token:Object(m["a"])()}}},mounted:function(){var e=this;this.page(),Object(d["c"])().then((function(t){e.deptList=t.data.data}))},methods:{page:function(){var e=this;r(this.searchEmp.name,this.searchEmp.gender,this.beginTime,this.endTime,this.currentPage,this.pageSize).then((function(t){e.totalCount=t.data.data.total,e.tableData=t.data.data.rows}))},handleSelectionChange:function(e){this.multipleSelection=e},onSubmit:function(){this.currentPage=1,this.page()},clear:function(){this.searchEmp={name:"",gender:""},this.beginTime="",this.endTime="",this.entrydate="",this.page()},add:function(){var e,t=this;e=this.emp.id?o(this.emp):s(this.emp),e.then((function(e){"1"==e.data.code?(t.dialogVisible=!1,t.page(),t.$message({message:"恭喜你，保存成功",type:"success"}),t.emp={image:""}):t.$message.error(e.data.msg)}))},update:function(e){var t=this;this.dialogVisible=!0,u(e).then((function(e){1==e.data.code&&(t.emp=e.data.data,t.emp)}))},handleSizeChange:function(e){this.pageSize=e,this.page()},handleCurrentChange:function(e){this.currentPage=e,this.page()},deleteById:function(e){var t=this;this.$confirm("此操作将删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c(e).then((function(e){1==e.data.code?(t.$message.success("删除成功!"),t.page()):t.$message.error(e.data.msg)}))})).catch((function(){t.$message.info("已取消删除")}))},deleteByIds:function(){var e=this;this.$confirm("此操作将删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){for(var t=0;t<e.multipleSelection.length;t++)e.selectedIds[t]=e.multipleSelection[t].id;c(e.selectedIds).then((function(t){"1"==t.data.code?(e.$message.success("删除成功!"),e.page()):e.$message.error(t.data.msg)}))})).catch((function(){e.$message.info("已取消删除")}))},handleAvatarSuccess:function(e,t){this.emp.image=e.data},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传图片只能是 JPG 格式!"),a||this.$message.error("上传图片大小不能超过 2MB!"),t&&a}},watch:{entrydate:function(e){e&&e.length>=2?(this.beginTime=e[0],this.endTime=e[1]):(this.beginTime="",this.endTime="")}}},g=p,h=(a("798e"),a("2877")),f=Object(h["a"])(g,n,l,!1,null,null,null);t["default"]=f.exports},fe05:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return o}));var n=a("b775");function l(){return Object(n["a"])({url:"/depts",method:"get"})}function i(e){return Object(n["a"])({url:"/depts",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/depts",method:"put",data:e})}function s(e){return Object(n["a"])({url:"/depts/"+e,method:"delete"})}function o(e){return Object(n["a"])({url:"/depts/"+e,method:"get"})}}}]);