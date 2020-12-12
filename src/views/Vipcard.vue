<template>
    <div class="vipWrap">
        <header>
            <router-link to="/profile">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>会员中心</div>
        </header>
        <section>
            <p class="buy_for">
                <span>{{getuserName ? '为账户'+getuserName+'购买会员' : '未登录'}}</span>
            </p>
            <section class="vip_prerogative">
                <router-link to="/vipcard/vipdescription">
                        <span class="header_left">会员特权</span>
                        <section class="header_right">
                            <span>会员说明</span>
                            <i class="el-icon-arrow-right"></i>
                        </section>
                </router-link>
                <section class="vip_detail">
                    <div class="vip_detail_left">
                        <img src="" alt="">
                    </div>
                    <div class="vip_detail_right">
                        <h4>减免配送费</h4>
                        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                        <p>蜂鸟专送</p>
                    </div>
                </section>
                <section class="vip_detail">
                    <div class="vip_detail_left">
                        <img src="" alt="">
                    </div>
                    <div class="vip_detail_right">
                        <h4>减免配送费</h4>
                        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                        <p>蜂鸟专送专享</p>
                    </div>
                </section>
            </section>
            <section class="apply_vip">
                <div class="apply_header">
                    <span>开通会员</span>
                </div>
                <section class="vip_apply_buy">
                    <div class="vip_apply_buy_left">
                        <span>一个月</span>
                        <span>￥20</span>
                    </div>
                    <div class="vip_apply_buy_right">购买</div>
                </section>
            </section>
            <div class="dh_vip">
                <span>兑换会员</span>
                <section>
                    <span>使用卡号卡密</span>
                    <i class="el-icon-arrow-right"></i>
                </section>
            </div>
            <div class="buy_his">
                <span>购买记录</span>
                <section>
                    <span>开发票</span>
                    <i class="el-icon-arrow-right"></i>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Vipcard",
        computed:{
            getuserName(){
                return this.$store.state.userName;
            }
        }

    }
</script>

<style scoped>
    .vipWrap{
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
    .buy_for{
        font-size: .6rem;
        color: #666;
        line-height: 2rem;
        padding-left: .7rem;
        font-family: Helvetica Neue,Tahoma,Arial;
    }
    .vip_prerogative{
        background-color: #fff;
        padding-left: .7rem;
        margin-bottom: .5rem;
    }
    .vip_prerogative>a{
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        line-height: 2rem;
        border-bottom: 1px solid #f5f5f5;
        padding-right: .7rem;
        text-decoration: none;
    }
    .header_left{
        font-size: .7rem;
        color: #333;
    }
    .header_right{
        display: flex;
        align-items: center;
    }
    .header_right>span{
        font-size: .6rem;
        color: #999;
        margin-right: .2rem;
    }
    .vip_detail{
        display: flex;
        border-bottom: 1px solid #f5f5f5;
        padding: .8rem 0;
    }
    .vip_detail_left{
        margin-right: .6rem;
        width: 1.6rem;
        height: 1.8rem;
        background-color: blue;
    }
    .vip_detail_right>h4{
        font-size: .7rem;
        color: #333;
        font-weight: 400;
    }
    .vip_detail_right>p{
        font-size: .5rem;
        color: #999;
        font-family: Helvetica Neue,Tahoma,Arial;
    }
    .apply_vip{
        background-color: #fff;
        padding-left: .7rem;
        margin-bottom: .5rem;
    }
    .apply_header{
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        line-height: 2rem;
        border-bottom: 1px solid #f5f5f5;
        padding-right: .7rem;
    }
    .apply_header>span{
        font-size: .7rem;
        color: #333;
    }
    .vip_apply_buy{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: .7rem;
        font-size: .7rem;
        line-height: 2.6rem;
    }
    .vip_apply_buy_left:first-child{
        font-family: Helvetica Neue,Tahoma,Arial;
    }
    .vip_apply_buy_left:last-child{
        font-weight: 700;
        color: #f60;
    }
    .vip_apply_buy_right{
        border: .025rem solid #f60;
        border-radius: .2rem;
        line-height: 1.2rem;
        height: 1.2rem;
        width: 2.6rem;
        text-align: center;
        font-size: .6rem;
        color: #f60;
    }
    .dh_vip,.buy_his{
        padding: 0 .7rem;
        margin-bottom: .5rem;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        line-height: 2rem;
        border-bottom: 1px solid #f5f5f5;
        padding-right: .7rem;
    }
    .dh_vip>span,.buy_his>span{
        font-size: .7rem;
        color: #333;
        font-family: Helvetica Neue,Tahoma,Arial;
    }
    .dh_vip>section,.buy_his>section{
        display: flex;
        color: #999;
        align-items: center;
    }
    .dh_vip>section>span,.buy_his>section>span{
        font-size: .6rem;
        margin-right: .2rem;
    }
</style>