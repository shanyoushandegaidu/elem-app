<template>
    <div class="infoWrap">
        <header>
            <router-link to="/profile">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>账户信息</div>
        </header>
        <div class="headPortrait">
            <h2>头像</h2>
            <div>
                <i class="el-icon-arrow-right"></i>
                <img src="" alt="">
            </div>
        </div>
        <router-link to="/profile/info/setusername">
            <div class="userName">
                <span>用户名</span>
                <p>
                    <span>{{getUserN ? getUserN : '未登录'}}</span>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
        </router-link>

        <div class="address">
            <span>收货地址</span>
            <i class="el-icon-arrow-right"></i>
        </div>
        <p>账号绑定</p>
        <div class="phone">
            <img src="" alt="">
            <span>手机</span>
            <i class="el-icon-arrow-right"></i>
        </div>
        <p>安全设置</p>
        <router-link to="/forget">
            <div class="password">
                <span>登陆密码</span>
                <span>修改</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </router-link>
        <div class="logout" @click="signout">退出登录</div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Info",
        computed:mapState({
            getUserN:'userName'
        }),
        methods:{
        signout(){
            this.axios.get('/v2/signout').then(res=>{
                console.log(res);
                this.$store.state.userName = '';
                this.$router.push('/profile')
            })
        }
    }

    }
</script>

<style scoped>
    .infoWrap{
        padding-top:1.95rem;
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
    .headPortrait{
        margin-top: .4rem;
        padding: .5rem .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #ddd;
        background: #fff;
        border-bottom: 1px solid #ddd;
    }
    .headPortrait>h2{
        font-size: .6rem;
        color: #333;
        font-weight: 500;
        display: flex;
        align-items: center;
    }
    .headPortrait>div>img{
        float: right;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        vertical-align: middle;
        background-color: red;

    }
    .headPortrait>div>i{
        float: right;
        line-height: 2rem;
        color: black;
    }
    .logout{
        width: 96%;
        margin: 1.3rem auto 0;
        line-height: 1.5rem;
        border-radius: 5px;
        text-align: center;
        background: #d8584a;
        font-size: .6rem;
        color: #fff;
    }
    .userName,.address{
        padding: .3rem .4rem;
        background-color: #fff;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
    }
    .userName>span{
        font-size: .6rem;
        color: #333;
        font-weight: 500;
        float: left;
        line-height: 2rem;
    }
.userName>p{
    display: inline-block;
    font-size: .7rem;
    line-height: 1.4rem;
    color: #999;
    font-weight: 600;
    margin: 0;
    float: right;
}
 .address>span{
     font-size: .6rem;
     color: #333;
     font-weight: 500;
     float: left;
     line-height: 1.4rem;
 }
    .address>i,.phone>i,.password>i{
        float: right;
        line-height: 2rem;
    }
    p{
        margin: 0;
        padding: .4rem;
        font-size: .5rem;
        color: #666;
    }
    .phone,.password{
        border-bottom: 1px solid #ccc;
        padding: .3rem .4rem;
        background-color: #fff;
        overflow: hidden;
    }
    .phone>img{
        float: left;
        display: inline-block;
        line-height: 2rem;
        margin-right: .4rem;
        margin-top: .1rem;
    }
    .phone>span,.password>span{
        font-size: .6rem;
        color: #333;
        font-weight: 500;
        float: left;
        line-height: 2rem;
    }
</style>