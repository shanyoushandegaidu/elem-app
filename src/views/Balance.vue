<template>
    <div class="balanceWrap">
        <header>
            <router-link to="/profile">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>我的余额</div>
        </header>
        <section class="conent_container">
            <section class="conent">
                <div class="conent_header">
                    <span>当前余额</span>
                    <section class="header_right">
                        <span class="img">?</span>
                        <router-link to="">
                            <span>余额说明</span>
                        </router-link>
                    </section>
                </div>
                <p class="conent_num">
                    <span class="s1">0.00</span>
                    <span class="s2">元</span>
                </p>
                <div class="TXBtn">提现</div>
            </section>
        </section>
        <p class="deal">交易明细</p>
        <div class="logo">
            <img src="" alt="">
            <p>暂无明细记录</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Balance"
    }
</script>

<style scoped>
    .balanceWrap{
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
    .conent_container{
        padding: .3rem;
        background-color: #3190e8;
    }
    .conent{
        padding: .4rem;
        background-color: #fff;
        border-radius: .15rem;
        width: 100%;
    }
    .conent_container,.conent_header{
        display: flex;
        justify-content: space-between;
        font-size: .55rem;
        align-items: center;
    }
    .conent_header>span{
        color: #666;
    }
    .conent_header>section{
        display: flex;
        align-items: center;
    }
    .img{
        width: .6rem;
        height: .6rem;
        margin-right: .2rem;
        background-color: #3190e8;
        border-radius: 50%;
        color: #fff;
        text-align: center;
    }
    .conent_header>section>a{
        color: #3190e8;
        text-decoration: none;
    }
    .conent_num{
        font-family: Helvetica Neue,Tahoma,Arial;
    }
    .s1{
        font-size: 1.8rem;
        color: #333;
    }
    .s2{
        font-size: .7rem;
        color: #333;
    }
    .TXBtn{
        width: 100%;
        height: 2rem;
        font-size: .8rem;
        color: #fff;
        border-radius: .15rem;
        line-height: 2rem;
        margin-top: 1rem;
        text-align: center;
        background-color: #ccc;
    }
    .deal{
        font-size: .6rem;
        color: #999;
        line-height: 2rem;
        padding-left: .5rem;
    }
    .logo{
        text-align: center;
        margin-top: 1rem;
    }
    .logo>img{
        width: 8rem;
        height: 5rem;
        background-color: #3190e8;
    }
    .logo>p{
        margin-top: .5rem;
        font-size: .7rem;
        color: #666;
    }
</style>