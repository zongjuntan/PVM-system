<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column v-for="item in suppliers" :key="item.supplierCode" :label="item.supplierName" align="center">
      <el-table-column
        :prop="item.supplierCode + '_price'"
        label="价格"
        width="120">
      </el-table-column>
      <el-table-column
        :prop="item.supplierCode + '_status'"
        label="状态"
        width="120">
      </el-table-column>
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          suppliers: [
            {
              supplierName: '供应商1',
              supplierCode: 'aa',
              price: 111,
              status: '在线',
            },
            {
              supplierName: '供应商2',
              supplierCode: 'bbb',
              price: 222,
              status: '在线',
            },
            {
              supplierName: '供应商3',
              supplierCode: 'ccc',
              price: 333,
              status: '在线',
            },
          ],
        }, 
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          suppliers: [
            {
              supplierName: '供应商1',
              supplierCode: 'aa',
              price: 111,
              status: '在线',
            },
            {
              supplierName: '供应商3',
              supplierCode: 'ccc',
              price: 333,
              status: '在线',
            },
          ],
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          suppliers: [
            {
              supplierName: '供应商3',
              supplierCode: 'ccc',
              price: 333,
              status: '在线',
            },
          ],
        }],
        suppliers: [],
      }
    },
    created() {
      this.processData()
    },
    methods: {
      async processData() {
        const data = this.tableData.map(item => {
          item.suppliers && item.suppliers.forEach(item2 => {
            item = {
              ...item,
              [item2.supplierCode + '_price']: item2.price,
              [item2.supplierCode + '_status']: item2.status,
            }
            if (!this.suppliers.find(params => params.supplierCode == item2.supplierCode)) {
              this.suppliers.push(item2)
            }
          })
          return item
        })
        await this.$nextTick()
        this.tableData = data
        console.log(data, 123)
      }
    },
  }
</script>