<!--
 * @Author: MoonStdio juxiupan@163.com
 * @Date: 2025-03-18 15:29:25
 * @LastEditors: MoonStdio juxiupan@163.com
 * @LastEditTime: 2025-03-24 20:04:42
 * @FilePath: \vite-project\src\views\dashboard\form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="form_container">
        <el-form :model="createForm">
            <el-form-item label="科创标题">
             <el-input v-model="createForm.title" />
        </el-form-item>
        <el-form-item label="指导老师">
      <el-select v-model="createForm.region" placeholder="选择指导老师">
        <el-option label="Zone one" value="张三" />
        <el-option label="Zone two" value="李四" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="createForm.student_description" type="textarea" />
    </el-form-item>
    <el-icon><Plus /></el-icon>
    <input type="file" @change="handleFileUpload" />
    <button @click="submitUpload">上传图片</button>
    </el-form>
</div>
</template>

<script>
export default {
    data() {
        return {
            createForm:{
                title:"",
                region:"",
                student_description:"",
                selectedFile:null
            }
        }
    },
    methods:{
        handleFileUpload(event) {
      this.createForm.selectedFile = event.target.files[0];
    },
    submitUpload() {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      axios.post('/api/upload', formData);
}
}
}
</script>

<style scoped>

</style>