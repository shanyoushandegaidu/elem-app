<template>
    <div class="setUNWrap">
        <header>
            <router-link to="/profile/info">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>修改用户名</div>
        </header>
        <div class="setName">
            <input type="text" placeholder="请输入用户名">
            <p>用户名只能修改一次（5-24字符之间）</p>
        </div>
        <div class="setBtn" @click="changeUN">确认修改</div>
    </div>
</template>

<script>
    export default {
        name: "Setusername",
        methods:{
            changeUN(){

            }
        }
    }
</script>

<style scoped>
    .setUNWrap{
        padding-top:2.95rem;
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
    .setName{
        width: 15.2rem;
        margin: 0 auto;
    }
    .setName>input{
        background: none;
        width: 15.2rem;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: .2rem .1rem;
        line-height: 1.2rem;
        font-size: .7rem;
        display: block;
    }
    p{
        width: 100%;
        font-size: .4rem;
        color: #666;
        padding: .4rem 0 1rem;
    }
    .setBtn{
        display: block;
        width: 100%;
        background-color: #3190e8;
        line-height: 2rem;
        font-size: .7rem;
        color: #fff;
        transition: all 1s;
        text-align: center;
    }
</style>