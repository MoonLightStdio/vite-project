<template>
  <div class="form_container">
    <el-button plain @click="dialogFormVisible = true">
      点击提交科创项目
    </el-button>

    <el-dialog v-model="dialogFormVisible" title="项目提交" width="500">
      <el-form :model="Dialog" ref="formRef" :rules="rules">
        <el-form-item label="标题" :label-width="labelWidth" prop="title">
          <el-input v-model="Dialog.title" autocomplete="off" placeholder="请输入项目标题" />
        </el-form-item>
        <el-form-item label="指导老师" prop="teacher_id">
          <el-select v-model="Dialog.teacher_id" placeholder="选择指导老师">
            <el-option
              v-for="teacher in teachers"
              :key="teacher.teacher_id"
              :label="teacher.name"
              :value="teacher.teacher_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目描述" prop="student_description">
          <el-input
            v-model="Dialog.student_description"
            type="textarea"
            :rows="3"
            placeholder="请输入项目详细描述"
          />
        </el-form-item>
        <el-form-item label="上传文件" prop="pictures">
          <input type="file" @change="handleFileChange" name="file" accept="image/*" multiple />
          <div v-if="Dialog.pictures.length > 0" class="file-list">
            <div v-for="(file, index) in Dialog.pictures" :key="index" class="file-item">
              {{ file.name }}
              <el-button type="text" @click="removeFile(index)">删除</el-button>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  data() {
    return {
      Dialog: {
        //比赛名称
        //获奖等级
        //指导老师 （）
        //学校
        //学院
        //专业
        //学号
        //姓名
        //班级
        //描述
        competition_name: "",
        prize_level: "",
        student_id: "",
        school: "",
        college: "",
        major: "",
        student_class: "",
        student_description: "",
        pictures: [],
        /*title: "",
        student_id: "",
        teacher_id: "",
        student_description: "",
        pictures: [],*/
      },
      teachers: [], // 用于存储教师数据
      dialogFormVisible: false, // 控制对话框显示
      labelWidth: '140px', // 表单标签宽度
      rules: {
        title: [{ required: true, message: '请输入项目标题', trigger: 'blur' }],
        teacher_id: [{ required: true, message: '请选择指导老师', trigger: 'change' }],
        student_description: [{ required: true, message: '请输入项目描述', trigger: 'blur' }],
      },
    };
  },
  created() {
    this.getTeacher();
  },
  methods: {
    handleFileChange(event) {
      this.Dialog.pictures = Array.from(event.target.files);
      console.log(this.Dialog.pictures);
    },
    removeFile(index) {
      this.Dialog.pictures.splice(index, 1);
    },
    async getTeacher() {
      try {
        const response = await this.$axios.post('/getteacher');
        const { data } = response;
        if (data.flag === "ok") {
          this.teachers = data.teachers.map(teacher => ({
            teacher_id: teacher.teacher_id,
            name: teacher.name,
          }));
        } else {
          console.error("获取教师数据失败:", data);
        }
      } catch (error) {
        console.error("请求教师数据时发生错误:", error);
      }
    },
    async getMessage(){
     try{
      const response = await this.$axios.post('/getmessage',)
     } 
    }
    async submitForm() {
      const formRef = this.$refs.formRef;
      if (!formRef) return;

      formRef.validate(async (valid) => {
        if (!valid) return;

        let user = window.sessionStorage.getItem("user");
        if (user) {
          user = JSON.parse(user);
          this.Dialog.student_id = user.student_id;
        } else {
          console.error("No user data found in sessionStorage");
          this.$message.error("未找到用户数据");
          return;
        }

        const formData = new FormData();
        formData.append('title', this.Dialog.title);
        formData.append('student_id', this.Dialog.student_id);
        formData.append('teacher_id', this.Dialog.teacher_id);
        formData.append('student_description', this.Dialog.student_description);

        this.Dialog.pictures.forEach((file, index) => {
          formData.append(`pictures`, file);
        });

        try {
          const response = await this.$axios.post('/submittable', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          const { data } = response;
          if (data.flag === "ok") {
            this.$message.success("表单上传成功");
            this.dialogFormVisible = false;
          } else {
            this.$message.error("表单上传失败");
          }
        } catch (error) {
          console.error("上传表单时发生错误:", error);
          this.$message.error("上传表单时发生错误");
        }
      });
    },
  },
};
</script>

<style scoped>
.file-list {
  margin-top: 10px;
}
.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
</style>