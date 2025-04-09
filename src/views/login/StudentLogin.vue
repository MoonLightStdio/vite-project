<template>
    <div class="StudentLoginContainer">
        <el-form ref="loginFormRef" :model="StudentLoginForm" class="login_form" label-width="0px">
                <!--学号-->
                <el-form-item prop="student_id">
                    <el-input v-model="StudentLoginForm.student_id"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input type="password" v-model="StudentLoginForm.password"></el-input>
                </el-form-item>
                <!--按钮-->
                <el-form-item class="btns">
                    <el-button type="info" @click="loginStudent()">提交</el-button>
                </el-form-item>
            </el-form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                StudentLoginForm:{
                student_id:"20230204",
                password:"zhaoliu123",
            },
            }
        },
        methods: {
    async loginStudent() {
        try {
            const res = await this.$axios.post("student", this.StudentLoginForm);
            console.log(res);
            if (res.data.flag === "ok") {
                this.$router.push({ path: "/home" });
            } else {
                alert("error!");
            }
        } catch (error) {
            console.error("登录失败:", error);
            alert("登录失败，请检查网络或联系管理员！");
        }
    }
}
    }
</script>

<style scoped>

</style>