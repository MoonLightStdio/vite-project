<!--
 * @Author: MoonStdio juxiupan@163.com
 * @Date: 2025-03-18 14:18:39
 * @LastEditors: MoonStdio juxiupan@163.com
 * @LastEditTime: 2025-03-29 17:53:02
 * @FilePath: \vite-project\src\views\login\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="login_container">
        <!--登录框-->
        <div class="login_box">
            <!--头像-->
            <div class="avatar_box">
                <img src="../assets/vue.svg" alt="">
                <h3>科创信息管理系统</h3>
            </div>
            <!--form表单-->
            <el-form ref="loginFormRef" :rules="loginRules" :model="loginForm" class="login_form" label-width="0px">
                <!--用户名-->
                <el-form-item prop="student_id">
                    <el-input v-model="loginForm.student_id"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <!--按钮-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="resetLoginForm()">重置</el-button>
                    <el-button type="info" @click="login()">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //表单数据
            loginForm: {
                student_id: "10011",
                password: "password123",
            },
            //校验规则
            loginRules:{
                password:[
                { required: true, message: '密码不能为空', trigger: 'blur' },
                { min: 6, max: 15, message: '长度在 6 ~ 10 个字符', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        //重置表单内容
        resetLoginForm(){
            this.$refs.loginFormRef.resetFields();
        },
        login(){
            this.$refs.loginFormRef.validate(async valid =>{
                if (!valid) {
                    return;
                }
                const {data:res}=await this.$axios.post("login",this.loginForm);
                console.log(res);
                if(res.flag=="ok"){
                    this.$message.success("操作成功");
                    this.$router.push({path:"/home"});
                    console.log(res.user);
                    window.sessionStorage.setItem("user", JSON.stringify(res.user) );// 存储 user 对象
                }else{
                    this.$message.error("操作失败");
                }
            })
        }
    },
}
</script>

<style scoped lang="less">
//根节点样式
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    .avatar_box{
        width: 130px;
        height: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 5px;
        box-shadow: 0,0,5px,#ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #0ee;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
        h3{
            width: 200px;
        }
    }
}
.btns{
    display: flex;
    justify-content: flex-end;
}
.login_form{
    position: absolute;
    bottom: 0%;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
}
</style>