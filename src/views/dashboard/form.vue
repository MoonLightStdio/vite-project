<template>
    <div class="form_container">
        <el-form :model="createForm">
            <el-form-item label="科创标题">
             <el-input v-model="title" />
        </el-form-item>

        <el-form-item label="指导老师">
      <el-select v-model="region" placeholder="选择指导老师">
        <el-option label="Zone one" value="张三" />
        <el-option label="Zone two" value="李四" />
      </el-select>
    </el-form-item>
    <el-icon><Plus /></el-icon>
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

            }
        }
    },
}
</script>

<style scoped>

</style>