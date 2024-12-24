<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="88px">
      <el-form-item label="驾驶员姓名" prop="driverName">
        <el-input
          v-model="queryParams.driverName"
          placeholder="请输入驾驶员姓名"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="phonenumbe">
        <el-input
          v-model="queryParams.phonenumbe"
          placeholder="请输入手机号码"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:post:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleAudit"
          v-hasPermi="['system:post:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:post:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:post:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row> -->

    <el-table v-loading="loading" :data="postList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="驾驶员姓名" align="center" prop="driverName" />
      <el-table-column label="手机号码" align="center" prop="phonenumbe" />
      <el-table-column label="身份证" align="center" prop="cardNumber" />
      <el-table-column label="车辆类型" align="center" prop="carType">
        <template slot-scope="scope">
          <span>{{computeCarType(scope.row)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="车牌" align="center" prop="licensePlate" />
      <el-table-column label="同行人员数量" align="center" prop="numberPersonnel" />
      <el-table-column label="是否危化品" align="center" prop="isHazardousChemicals">
        <template slot-scope="scope">
          <span>{{scope.row.isHazardousChemicals ? '否' : '是'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="审核状态" align="center" prop="isHazardousChemicals">
        <template slot-scope="scope">
          <el-tag :type="scope.row.auditStatus == 0 ? '' : 'success'">{{computeAudit(scope.row)}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="出入事宜" align="center" prop="entryMatters" />
      <el-table-column label="入园时间" align="center" prop="enterTime" />
      <el-table-column label="出园时间" align="center" prop="outTime" />
      <el-table-column label="创建时间" align="center" prop="createTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleAudit(scope.row)"
            v-hasPermi="['system:post:edit']"
          >审核</el-button>
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:post:remove']"
          >删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改岗位对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="审核状态" prop="isAgree">
          <el-radio-group v-model="form.isAgree">
            <el-radio
              v-for="dict in auditOptions"
              :key="dict.value"
              :label="dict.value"
            >{{dict.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { queryEntranceExitandExamine, audit } from "@/api/vehicle/list";
import option from '@/utils/options'
export default {
  name: "Post",
  dicts: ['sys_normal_disable'],
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 岗位表格数据
      postList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      currentRow: {},
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        driverName: undefined,
        phonenumbe: undefined,
        auditStatus: '5',
      },
      // 表单参数
      form: {},
      audits: [
        {
          label: '待审核',
          value: '0',
        },
        {
          label: '待来访',
          value: '1',
        },
        {
          label: '已来访',
          value: '2',
        },
        {
          label: '未通告',
          value: '3',
        },
        {
          label: '反馈',
          value: '4',
        },
        {
          label: '公司审核通过',
          value: '5',
        },
        {
          label: '园区审核通过',
          value: '6',
        },
        {
          label: '公司审核不通过',
          value: '7',
        },
        {
          label: '园区审核不通过',
          value: '8',
        },
      ],
      auditOptions: [
        {
          value: '0',
          label: '同意',
        },
        {
          value: '1',
          label: '不同意',
        },
      ],
      // 表单校验
      rules: {
        isAgree: [
          { required: true, message: "请选择审核状态", trigger: "blur" }
        ],
        postCode: [
          { required: true, message: "岗位编码不能为空", trigger: "blur" }
        ],
        postSort: [
          { required: true, message: "岗位顺序不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    computeCarType(row) {
      return option.carTypes.find(item => row.carType == item.value)?.label || ''
    },
    computeAudit(row) {
      return this.audits.find(item => row.auditStatus == item.value)?.label || ''
    },
    /** 查询岗位列表 */
    getList() {
      this.loading = true;
      queryEntranceExitandExamine(this.queryParams).then(response => {
        this.postList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        postId: undefined,
        postCode: undefined,
        postName: undefined,
        postSort: 0,
        status: "0",
        remark: undefined
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.postId)
      this.single = selection.length!=1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加岗位";
    },
    /** 修改按钮操作 */
    handleAudit(row) {
      this.open = true
      this.currentRow = row
      // this.reset();
      // audit({
      //   entranceExitId: row.id,
      //   isAgree: 1,
      //   remark: '',
      // }).then(response => {
      //   // this.form = response.data;
      //   // this.open = true;
      //   // this.title = "修改岗位";
      // });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          audit({
            entranceExitId: this.currentRow.id,
            auditStatus: this.form.isAgree == 0 ? 6 : 8,
            ...this.form
          }).then(response => {
              this.$modal.msgSuccess("操作成功");
              this.open = false;
              this.getList();
          });
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const postIds = row.postId || this.ids;
      this.$modal.confirm('是否确认删除岗位编号为"' + postIds + '"的数据项？').then(function() {
        return delPost(postIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/post/export', {
        ...this.queryParams
      }, `post_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>