<template>
  <el-table :data="tableData" style="width: 100%">
      <el-table-column   type="selection" width="55" />
      <el-table-column property="data" label="Date" width="120">
      </el-table-column>
      <el-table-column property="title"   label="Title" width="120" />
      <el-table-column
        property="student_description"
        label="Student_description"
        width="240"
        show-overflow-tooltip
      />
      <el-table-column property="student_name" label="Student_name" width="80"/>
      <el-table-column property="teacher_name" label="Teacher_name" width="80"/>
      <el-table-column   width="240" label="change">
        <el-button-group>
          <el-button type="primary">修改</el-button>
          <el-button type="primary">删除</el-button>
        </el-button-group>
      </el-table-column>

    </el-table>
</template>

<script>
export default {
  //title data student_name,teacher_name,student_description,image
  data() {
    return {
      student_id:"",
      Order:{
        name:"",
        data:"",
        address:""
      },
      tableData: [], // 初始化为空数组，等待从后端获取数据
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        let user = window.sessionStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        this.student_id = user.student_id;
      } else {
        console.error("No user data found in sessionStorage");
      }
      const formData = new URLSearchParams();
      formData.append("student_id", this.student_id);
        // 假设后端接口地址为 '/api/orders'
        const response = await this.$axios.post('/getstudenttable',formData,
        {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
      });
      if (Array.isArray(response.data)) {
          this.tableData = response.data; // 将后端返回的数据赋值给 tableData
        } else {
          console.error('Invalid data format:', response.data);
        }
        // 将后端返回的数据赋值给 tableData
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>