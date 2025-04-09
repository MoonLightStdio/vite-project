<template>
    <el-form :model="formData" label-width="auto" style="max-width: 600px">
      <el-form-item label="学校">
        <el-select v-model="formData.school_id" placeholder="请选择学校" @change="changeSchool" style="width: 600px;">
          <el-option width="600px"
            v-for="item in schools"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="院系">
        <el-select v-model="formData.department_id" placeholder="请选择院系" @change="changeDepartment">
          <el-option
            v-for="item in departments"
            :key="item.id"
            :label="item.department_name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-select v-model="formData.profession_id" placeholder="请选择专业" @change="changeProfession">
          <el-option
            v-for="item in professions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班级">
        <el-select v-model="formData.class_" placeholder="请选择班级">
          <el-option
            v-for="item in classes"
            :key="item.id"
            :label="item.id"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="学生学号">
        <el-input v-model="formData.student_id" placeholder="请输入学号"></el-input>
      </el-form-item>
      <el-form-item label="学生姓名">
        <el-input v-model="formData.student_name" placeholder="请输入学生姓名"></el-input>
      </el-form-item>
      <el-form-item label="比赛">
        <el-select v-model="formData.competition_id" placeholder="请选择比赛" @change="changeCompetition">
          <el-option
            v-for="item in competitions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="比赛获奖">
        <el-select v-model="formData.competition_award" placeholder="请选择比赛获奖">
          <el-option
            v-for="item in competitionawards"
            :key="item.id"
            :label="item.award_name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年级">
        <el-select v-model="formData.grade" placeholder="请选择年级">
          <el-option
            v-for="item in levels"
            :key="item.id"
            :label="item.id"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="指导老师">
        <el-select v-model="formData.guide_teacher_id" placeholder="请选择指导老师">
          <el-option
            v-for="item in teachers"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="formData.description" type="textarea" placeholder="请输入描述"></el-input>
      </el-form-item>
      
      <el-form-item label="上传文件" prop="pictures">
          <input type="file" @change="handleFileChange" name="file" accept="image/*" multiple />
          <div v-if="formData.pictures.length > 0" class="file-list">
            <div v-for="(file, index) in formData.pictures" :key="index" class="file-item">
              {{ file.name }}
              <el-button type="text" @click="removeFile(index)">删除</el-button>
            </div>
          </div>
        </el-form-item>
        <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </div>
    </el-form>
  </template>

  <script>
import { el } from 'element-plus/es/locales.mjs';

export default {
  data() {
    return {
      formData: {
        school_id: '', // 当前选中的学校 ID
        department_id: '', // 当前选中的院系 ID
        profession_id: '', // 当前选中的专业 ID
        class_: '', // 当前选中的班级 ID
        student_id: '',
        student_name:'',
        competition_id: '',
        competition_award: '',
        guide_teacher_id: '',
        description: '',
        grade:'',
        pictures:[],
      },
      schools: [], // 学校列表
      departments: [], // 院系列表
      professions: [], // 专业列表
      classes: [], // 班级列表
      competitions: [],
      class_number: 0,
      competitionawards: [],
      teachers: [],
      levels:[],
    };
  },
  created() {
    this.getSchools();
    this.getCompetitions();
    this.levels=[
      {id:1},
      {id:2},
      {id:3},
      {id:4},
    ]
  },
  methods: {

    submitForm(){
      console.log(this.formData.pictures);
      this.$axios.post('/submit', this.formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
        .then(response => {
          console.log(response.data);
          if (response.data.code === 200) {
            this.$message({
              type: 'success',
              message: '添加成功'
            });
            this.dialogFormVisible = false;
            this.$emit('refreshData');
          } else {
            this.$message({
              type: 'error',
              message: '添加失败'
            });
          }
        })
        .catch(error => {
          console.error('添加失败：', error);
          this.$message({})
        })
    },

    removeFile(index) {
      this.formData.pictures.splice(index, 1);
    },
    handleFileChange(event) {
      this.formData.pictures = Array.from(event.target.files);
      console.log(this.Dialog.pictures);
    },
    changeSchool() {
        this.getDepartments();
    },
    changeDepartment() {
      this.departments=[];
      this.teachers = [];
      this.getTeachers();
        this.getProfessions();
        
    },
    changeProfession(){
        this.formData.class_ = '';
        this.classes = [];
        this.getClasses();

    },

    changeCompetition() {
       this.competitionawards=[];
        this.getCompetitionAwards();
    },
    async getTeachers() {
      try {
        const response = await this.$axios.post('/getteachers', {school_id: this.formData.school_id,department_id: this.formData.department_id});
        console.log(response.data.teachers);
        this.teachers = response.data.teachers;
        this.formData.guide_teacher_id = '';
      } catch (error) {
        console.error('获取教师列表失败：', error);
      }
    },
    async getCompetitionAwards() {
        try {
            const response = await this.$axios.post('/getcompetitionawards', {competition_id: this.formData.competition_id,school_id: this.formData.school_id,department_id: this.formData.department_id});
            console.log(response.data.competitionawards);
            this.competitionawards = response.data.competitionawards;
            this.formData.competition_award = '';
        }catch (error) {
            console.error('请求比赛获奖数据时发生错误:', error);
        }
    },
    async getCompetitions() {
      try {
        const response = await this.$axios.post('/getcompetitions');
        console.log(response.data);
        // 确保后端返回的数据结构是 { competitions: [...] }
        this.competitions = response.data.competitions || [];
      } catch (error) {
        console.error('获取比赛列表失败：', error);
      }
    },
    async getClasses() {
        try {
            const response = await this.$axios.post('/getclasses', {id: this.formData.profession_id });
            console.log(response.data.profession);
            this.class_number=response.data.profession.class_number;
            for(var i=0;i<this.class_number;i++){
              this.classes.push({id:i+1});
            }
            this.formData.class_ = '';
        }catch (error) {
            console.error('请求班级数据时发生错误:', error);
        }
    },
    async getProfessions() {
        try {
            const response = await this.$axios.post('/getprofessions', { school_id:this.formData.school_id,department_id: this.formData.department_id });
            console.log(response.data.professions);
            this.professions = response.data.professions ;
            this.formData.profession_id = '';
            this.class_number=this.professions.class_number;
            for(var i=0;i<this.class_number;i++){
              this.classes.push({id:i+1});
            }
            console.log(this.class_number);
        }catch (error) {
            console.error('请求专业数据时发生错误:', error);
        }
    },
    async getDepartments() {
        try {
            const response = await this.$axios.post('/getdepartments', { school_id: this.formData.school_id });
            console.log(response.data.departments);
            this.departments = response.data.departments ;
            this.formData.department_id = '';
        }catch (error) {
            console.error('请求院系数据时发生错误:', error);
        }
    },
    async getSchools() {
      try {
        const response = await this.$axios.post('/getschools');
        console.log(response.data);
        // 确保后端返回的数据结构是 { schools: [...] }
        this.schools = response.data.schools || [];
      } catch (error) {
        console.error('获取学校列表失败：', error);
      }
    },
    async fetchDepartments() {
      if (this.formData.school_id) {
        try {
          const response = await this.$axios.post('/getdepartments', {
            school_id: this.formData.school_id
          });
          this.departments = response.data.departments || [];
          this.formData.department_id = ''; // 清空院系选择
          this.classes = []; // 清空班级列表
        } catch (error) {
          console.error('获取院系列表失败：', error);
        }
      } else {
        this.departments = [];
        this.classes = [];
      }
    }
  }
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