<template>
    <div class="proFileWrap">
        <header>
            <router-link to="/">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <span>我的</span>
        </header>
        <section class="frofile">
            <div class="content_top" @click="toPage">
                <div class="div1">
                    <i class="el-icon-s-custom i1"></i>
                </div>
                <div class="div2">
                    <p class="name">{{getUserN ? getUserN:'未登录' }}</p>
                    <p class="name1"><i class="el-icon-mobile-phone"></i> 暂无绑定手机号</p>
                </div>
                <i class="el-icon-arrow-right"></i>
            </div>
        </section>
        <div class="pro">
            <ul>
                <li @click="goBal">
                    <span class="s1"><span>0.00</span >元</span>
                    <span class="s1">我的余额</span>
                </li>
                <li @click="goBen">
                    <span class="s1"><span class="s2">3</span>个</span>
                    <span class="s1">我的优惠券</span>
                </li>
                <li @click="goPoints">
                    <span class="s1"><span class="s3">0</span>分</span>
                    <span class="s1">我的积分</span>
                </li>
            </ul>
        </div>
        <section class="frofile1">
            <div>
                <router-link to="" >
                    <div>
                        <i class="el-icon-s-unfold r1"></i>
                        <span>我的订单</span>
                    </div>
                    <i class="el-icon-arrow-right r1"></i>
                </router-link>
            </div>
            <div>
                <router-link to="" >
                    <div>
                        <i class="el-icon-s-goods r2"></i>
                        <span>积分商城</span>
                    </div>
                    <i class="el-icon-arrow-right r1"></i>
                </router-link>
            </div>
            <div>
                <router-link to="/vipcard" >
                    <div>
                        <i class="el-icon-potato-strips r3"></i>
                        <span>饿了么会员卡</span>
                    </div>
                    <i class="el-icon-arrow-right r1"></i>
                </router-link>
            </div>
        </section>
        <section class="frofile1">
            <div>
                <router-link to="/service" >
                    <div>
                        <i class="el-icon-office-building r4"></i>
                        <span>服务中心</span>
                    </div>
                    <i class="el-icon-arrow-right r1"></i>
                </router-link>
            </div>
            <div>
                <router-link to="" >
                    <div>
                        <i class="el-icon-platform-eleme r4"></i>
                        <span>下载饿了么App</span>
                    </div>
                    <i class="el-icon-arrow-right r1"></i>
                </router-link>
            </div>
        </section>
        <img src="" alt="" class="p5">
        <div class="bottom">
            <router-link to="/msite">
                <div>
                    <div>
                        <i class="el-icon-eleme"></i>
                        <p class="p1">外卖</p>
                    </div>
                </div>
            </router-link>
            <router-link to="">
                <div>
                    <div>
                        <i class="el-icon-odometer"></i>
                        <p class="p1">搜索</p>
                    </div>
                </div>
            </router-link>
            <router-link to="">
                <div>
                    <div>
                        <i class="el-icon-s-unfold"></i>
                        <p class="p1">订单</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/profile">
                <div>
                    <div>
                        <i class="el-icon-user-solid"></i>
                        <p class="p1">我的</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Profile",
        computed:mapState({
            getUserN:'userName'
        }),
        methods:{
            toPage(){
                this.getUserN ? this.$router.push('/profile/info') : this.$router.push('/login')
            },
            goBal(){
                this.$router.push('/balance')
            },
            goPoints(){
                this.$router.push('/points')
            },
            goBen(){
                this.$router.push('/benefit')
            }
        }
    }
</script>

<style scoped>
    .proFileWrap{
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
        padding-left: 2%;
        box-sizing: border-box;
    }
    header>span{
        font-size: .8rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
        line-height: 1.95rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 50%;
    }
    i{
        font-size: .8rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
        line-height: 1.95rem;
        text-decoration: none;
    }
    .p5{
        margin-bottom: 3rem;
    }
    .frofile>.content_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #3190e8;
        padding: .666667rem .6rem;
    }
    a{
        text-decoration: none;
    }
    .i1{
        font-size: 2rem;
        margin-left: 0.25rem;
        margin-top: 0.1rem;
    }
    .div1{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        vertical-align: middle;
        background-color: #DCDFE6;
    }
    .name{
        font-size: .8rem;
        color: #fff;
    }
    .name1{
        font-size: .57333rem;
        color: #fff;
    }
    .div2{
        margin-left: -6rem;
    ;margin-top: 0.1rem;
    }
    .pro{
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        zoom: 1;
        overflow: hidden;
    }
    ul li{
        float: left;
        width: 33%;
        display: inline-block;
        border-right: 1px solid #f1f1f1;
    }
    ul>li>span{
        display: block;
        font-family: Helvetica Neue,Tahoma;
        width: 100%;
        text-align: center;
        padding: .853333rem 0 .0003rem;
    }
    ul>li>span>span{
        display: inline-block;
        font-size: 1.2rem;
        color: #f90;
        font-weight: 700;
        line-height: 1rem;
        font-family: Helvetica Neue,Tahoma;
    }
    .s1{
        font-size: .57333rem;
        color: #666;
        font-weight: 400;
        padding-bottom: .453333rem;
    }
    .s2{
        color: #ff5f3e;
    }
    .s3{
        color: #6ac20b;
    }
    .frofile1{
        margin-top: 0.2rem;
        overflow: hidden;
        background-color: #fff;
        font-size: .7rem;

    }
    .frofile1>div>a{
        color: #333;
        padding: 0 0.6rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f1f1f1;
    }
    .r1{
        margin-right: 0.2rem;
        color: #DCDFE6;
    }
    .r2{
        margin-right: 0.2rem;
        color: red;
    }
    .r3{
        margin-right: 0.2rem;
        color: rgb(255, 198, 54);
    }
    .r4{
        margin-right: 0.2rem;
        color:  #3190e8;
    }
    .bottom{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.95rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
    }
    .bottom div>div>i{
        font-size: 0.8rem;
        color: #666;
        line-height:0;
    }
    .p1{
        font-size: .45rem;
        color: #666;
    }
    .bottom div>div{
        margin-top: 0.2rem;
    }
    a{
        text-decoration: none;
    }
</style>