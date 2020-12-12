<template>
    <div class="forgetWrap">
        <header>
            <router-link to="/profile/info">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>重置密码</div>
        </header>
        <div class="form">
            <div>
                <input type="text" placeholder="账号" v-model="user">
            </div>
            <div>
                <input type="text" placeholder="旧密码" v-model="oldPassword">
            </div>
            <div>
                <input type="text" placeholder="请输入新密码" v-model="newPassword">
            </div>
            <div>
                <input type="text" placeholder="请确认密码" v-model="confirmPassword">
            </div>
            <div>
                <input type="text" placeholder="验证码" v-model="code">
                <div class="code" @click="changeCode">
                    <img :src="capUrl" alt="">
                    <div>
                        <p>看不清</p>
                        <p>换一张</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="resetBtn" @click="changePassword">确认修改</div>
    </div>
</template>

<script>
    export default {
        name: "Forget",
        data(){
            return{
                capUrl:'',
                user:'',
                oldPassword:'',
                newPassword:'',
                confirmPassword:'',
                code:''
            }
        },
        methods:{
            //修改密码
            changePassword(){
                this.axios.post('/v2/changepassword',{
                    username:this.user,
                    oldpassWord:this.oldPassword,
                    newpassword:this.newPassword,
                    confirmpassword:this.confirmPassword,
                    captcha_code:this.code
                }).then(res=>{
                    this.$store.state.userName = this.use;
                    console.log(res);
                }).catch(err=>{})
            },
            //请求验证码
            requestCode(){
                this.axios.post("v1/captchas").then(res=>{
                    // console.log(res)
                    this.capUrl = res.code;
                }).catch(err=>{});
            },
            changeCode(){
                this.requestCode();
            }
        },
        created(){
            this.requestCode();
        }
    }
</script>

<style scoped>
    .forgetWrap{
        padding-top: 1.95rem;
    }
    header{
        background-color: #3190e8;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 1.95rem;
    }
    header>a{
        left: .4rem;
        width: .6rem;
        height: 1rem;
        color: #fff;
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    header>div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 50%;
        color: #fff;
        text-align: center;
    }
    .resetBtn{
        margin: 1rem .5rem;
        font-size: .7rem;
        color: #fff;
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: .15rem;
        text-align: center;
    }
    .form{
        background-color: #fff;
        margin-top: .6rem;
    }
    .form>div{
        display: flex;
        justify-content: space-between;
        padding: .6rem .8rem;
        border-bottom: 1px solid #f1f1f1;
    }
    input{
        font-size: .7rem;
        color: #666;
        border:none;
        outline: none;
    }
    .code{
        overflow: hidden;
    }
    .code>img{
        width: 3.5rem;
        height: 1.5rem;
        margin-right: .2rem;
        float: none;
    }
    .code>div{
        float: right;
    }
    .code>div>p{
        font-size: .55rem;
        color: #666;
    }
    .code>div>p+p{
        color: #3b95e9;
        margin-top: .2rem;
    }
</style>