<template>
    <div class="loginWrap">
        <header>
            <router-link to="/home">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>密码登录</div>
        </header>
        <div class="form">
            <section class="input_c">
                <input type="text" placeholder="账号" v-model="username">
            </section>
            <section class="input_c">
                <input :type="value ? 'text' : 'password'" placeholder="密码" v-model="password">
                <el-switch
                        v-model="value"
                        active-color="#13ce66"
                        inactive-color="#909399">
                </el-switch>
            </section>
            <section class="input_c">
                <input type="text" placeholder="验证码" v-model="capCode">
                <div @click="changeCode">
                    <img :src="capURL" alt="">
                    <div>
                        <p>看不清</p>
                        <p>换一张</p>
                    </div>
                </div>
            </section>
        </div>
        <p class="tips">温馨提示：未注册过的账号，登录时将自动注册</p>
        <p class="tips">注册过的用户可凭账号密码登录</p>
            <div class="loginBtn" @click="loginAction">登陆</div>
        <router-link to="" class="to_forget">重置密码</router-link>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                value:"false",
                username:"",
                password:"",
                capCode:"",
                capURL:""
            }
        },
        methods:{
            loginAction(){
                // console.log(this.username,this.password,this.capCode)
                this.axios.post("v2/login",{
                    username:this.username,
                    password:this.password,
                    captcha_code:this.capCode
                }).then(res=>{
                    console.log(res);
                    if (res.status == 0){
                            alert(res.message)
                    } else{
                        this.$store.state.userName = res.username;
                        this.$store.state.userId = res.id;
                        this.$router.push('/profile');
                    }

                }).catch(err=>{

                });
            },
           // 请求验证码的方法
            requestCode(){
                this.axios.post("v1/captchas").then(res=>{
                    // console.log(res)
                    this.capURL = res.code;
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
    .loginWrap{
        padding-top: 1.95rem;
    }
    header>div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 50%;
        color: #fff;
        text-align: center;
        font-size: .8rem;
        text-align: center;
        font-weight: 700;
    }
    header>a{
        position: absolute;
        top: 50%;
        left: .4rem;
        transform: translateY(-50%);
        color: #fff;
    }
    .form{
        background-color: white;
        margin-top: .6rem;
    }
    .input_c{
        display: flex;
        justify-content: space-between;
        padding: .6rem .8rem;
        border-bottom: 1px solid #f1f1f1;
    }
    .input_c input{
        font-size: .7rem;
        color: #666;
        border: none;
        outline: none;
    }
    .input_c>div{
        display: flex;
        align-items: center;
    }
    .input_c>div p{
        font-size: .55rem;
        color: #666;
    }
    .input_c>div p+p{
        color: #3b95e9;
        margin-top: .2rem;
    }
    .input_c>div img{
        width: 3.5rem;
        height: 1.5rem;
        margin-right: .2rem;
    }
    .tips{
        font-size: .5rem;
        color: red;
        padding: .4rem .6rem;
        line-height: .5rem;
    }
    .loginBtn{
        margin: 0 .5rem 1rem;
        font-size: .7rem;
        color: #fff;
        background-color: #4cd964;
        padding: .5rem 0;
        border: 1px;
        border-radius: .15rem;
        text-align: center;
    }
    .to_forget{
        float: right;
        font-size: .6rem;
        color: #3b95e9;
        margin-right: .3rem;
    }
</style>