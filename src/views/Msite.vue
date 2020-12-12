<template>
    <div class="misteWrap">
        <header>
            <router-link to=""><i class="el-icon-search"></i></router-link>
            <div class="ellipsis">{{cityAddress}}</div>
            <span @click="login">{{userName?'':'登录|注册'}}</span>
            <router-link to="/profile"><i class="el-icon-user"  v-if="userName? !isShow1: isShow1"></i></router-link>
        </header>
        <nav class="nav_msite">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="lbt">
                            <div class="itop" v-for="i in shoptopArr1" :key="i.id" @click="choosefood(i.title)">
                                <img :src="imgtopurl+i.image_url" alt="">
                                <p>{{i.title}}</p>
                            </div></div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lbt">
                            <div class="itop" v-for="i in shoptopArr2" :key="i.id" @click="choosefood(i.title)">
                                <img :src="imgtopurl+i.image_url" alt="">
                                <p>{{i.title}}</p>
                            </div></div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <div>
            <div id="header_top">
                <i class="el-icon-house"></i>
                <span class="s1">&nbsp;附近商家</span>
            </div>
            <div class="shop">
                <ul>
                    <li v-for="s in shopArr" :key="s.id"  @click="goshop(s.id,s.image_path,s.name)">
                        <section>
                            <img :src="imgurl + s.image_path" alt="">
                        </section>
                        <div class="shop_right">
                            <div class="shop_right_top">
                                <h4 class="shopTitle ellipsis"><p class="p1">品牌</p>{{s.name}}</h4>
                                <div class="shoptitleright">保&nbsp;准&nbsp;票</div>
                            </div>
                            <h5 class="shop_right_middle">
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <span class="s5">{{s.rating}}</span>
                                <span class="s4">月售{{s.recent_order_num}}单</span>
                                <span class="s2">蜂鸟转送</span>
                                <span class="s3">准时达</span>

                            </h5>
                            <h5 class="shop_right_bottom">
                                <p>￥{{s.float_delivery_fee}}起送/{{s.piecewise_agent_fee.tips}}</p>
                                <div>
                                    <span class="s6">{{s.distance}}</span>
                                    <span class="s7">/</span>
                                    <span class="s8">{{s.order_lead_time}}</span>
                                </div>

                            </h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <section class="footer">
            <section class="guide_item">
                <i class="el-icon-eleme"></i>
                <span>外卖</span>
            </section>
            <section class="guide_item" @click="goSearch">
                <i class="el-icon-search"></i>
                <span>搜索</span>
            </section>
            <section class="guide_item">
                <i class="el-icon-tickets" @click="goorder"></i>
                <span>订单</span>
            </section>
            <section class="guide_item" @click="goProflie">
                <i class="el-icon-user"></i>
                <span>我的</span>
            </section>
        </section>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import SwiperCss from 'swiper/css/swiper.css'
    export default {
        name:"Msite",
        mounted(){
            new Swiper('.swiper-container', {
                loop:false,
                pagination:'.swiper-pagination',
                nextButton:'.swiper-button-next',
                prevButton:'.swiper-button-prev'
            });
        },
        data(){
            return{
                cityLongitude:"",
                cityLatitude:"",
                shopArr:[],
                imgurl:"https://elm.cangdu.org/img/",
                shoptopArr1:[],
                shoptopArr2:[],
                imgtopurl:'https://fuss10.elemecdn.com',
                cityAddress:"",
                isShow:false,
                isShow1:false,
                placeNameHistory:''
            }
        },
        created(){
            this.placeNameHistory = localStorage.getItem("placeNameHistory")
            let hisArr = JSON.parse(localStorage.getItem("placeHistory"))
            let newArr = hisArr.filter(v=>{
                return v.name == this.placeNameHistory
            })
            this.cityLatitude = newArr[0].latitude;
            this.cityLongitude = newArr[0].longitude;
            this.cityAddress = newArr[0].name;
            this.userName = this.$store.state.userName;
            this.axios.get("shopping/restaurants",{
                params:{
                    latitude:this.cityLatitude,
                    longitude:this.cityLongitude
                }
            }).then(res=>{
                //    console.log(res)
                this.shopArr = res;
            }).catch(err=>{})
            this.axios.get("/v2/index_entry").then(res=>{
                // console.log(res.length)
                let firstArr = []
                let lastArr = []
                for (let i = 0; i < res.length; i++) {
                    if (i<=7) {
                        firstArr.push(res[i])
                    }else{
                        lastArr.push(res[i])
                    }
                }
                this.shoptopArr1 = firstArr;
                this.shoptopArr2 = lastArr;
            }).catch(err=>{})
        },
        methods:{
            goProflie(){
                this.$router.push("/profile")
            },
            login(){
                this.$router.push("/login")
            },
            goSearch(){
                this.$router.push('/search')
            },
            choosefood(title){
                this.$router.push('/food');
                localStorage.setItem("foodtitle",title)
            },
            goorder(){
                this.$router.push('/order')
            },
            goshop(s,i,n){
                this.$router.push('/shop');
                localStorage.setItem("shopId",s);
                localStorage.setItem("shopImg",i);
                localStorage.setItem("shopName",n)
            },
        }
    }
</script>

<style scoped>
    .el-icon-eleme{
        color: #3190e8;
    }
    .itop{
        width: 25%;
        padding: .3rem 0;
        float: left;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nav_msite{
        background-color: #fff;
        border-bottom: .025rem solid #e4e4e4;
        height: 10.6rem;
        display: flex;
        justify-content: center;
    }
    .swiper-container{
        width: 100%;
        height: auto;
        padding-bottom: .6rem;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        /* overflow: hidden; */
    }
    .swiper-slide{
        width: 100%;
        height: 100%;
        position: relative;
        padding-top: 2.1rem;
    }
    /* .swiper-pagination{
        bottom: .2rem;
        position: absolute;
        text-align: center;
        transition: .3s;
        transform: translateZ(0);
        z-index: 10;
        left: 0;
        width: 100%;
        height: 10%;
    } */
    .swiper-pagination{
        width: 100%;
        height: 10%;
        z-index: 1000;
    }
    .swiper-slide img{
        margin-bottom: .3rem;
        width: 1.8rem;
        height: 1.8rem;
    }
    .swiper-slide p{
        text-align: center;
        font-size: .55rem;
        color: #666;
        display: block;
    }
    header>a:first-child{
        position: absolute;
        left: 0.4rem;
        color: #fff;
        font-size: 1rem;
        top: 50%;
        transform: translateY(-50%);
        text-decoration: none;
    }
    header>span{
        position: absolute;
        right: 0.55rem;
        color: #fff;
        font-size: 0.65rem;
        top: 50%;
        transform: translateY(-50%);
        text-decoration: none;
    }
    header>div{
        width: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 50%;
        color: #fff;
        text-align: center;
        font-size: .8rem;
        font-weight: 700;
    }
    header>a:last-child{
        position: absolute;
        right: 0.4rem;
        color: #fff;
        font-size: 1rem;
        top: 50%;
        transform: translateY(-50%);
        text-decoration: none;
    }
    nav{
        background-color: #fff;
        border-bottom: .025rem solid #e4e4e4;
        height: 10.6rem;
    }
    .el-icon-house{
        fill: #999;
        margin-left: .6rem;
        vertical-align: middle;
        width: .6rem;
        height: .6rem;
        font-size: .65rem;
    }
    .s1{
        color: #999;
        font: .55rem/1.6rem Microsoft YaHei;
    }
    .shop li{
        display: flex;
        border-bottom: .025rem solid #f1f1f1;
        padding: .7rem .4rem;
    }
    .footer{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 1.95rem;
        display: flex;
    }
    .guide_item{
        flex: 1;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
    }
    .guide_item>span{
        font-size: .45rem;
        color: #666;
        text-align: center;
    }
    .guide_item>i{
        margin-top: .3rem;
        fill: #ccc
    }
    .shop img{
        width: 2.7rem;
        height: 2.7rem;
        display: block;
        margin-right: .4rem;
    }
    .shop_right{
        flex: auto;
    }
    .shop_right_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .p1{
        display: inline-block;
        font-size: .5rem;
        line-height: .6rem;
        color: #333;
        background-color: #ffd930;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
    }
    .shopTitle{
        width: 8.5rem;
        color: #333;
        padding-top: .01rem;
        font: .65rem/.65rem PingFangSC-Regular;
        font-weight: 700;
    }
    .shoptitleright{
        font-size: .5rem;
        color: #999;
        float: right;
        margin-right: .05rem;
    }
    .shop_right_middle{
        /* display: flex;
        justify-content: space-between; */
        height: .6rem;
        margin-top: .52rem;
    }
    .shop_right_middle>i{
        color: #ff9a0d;
        float: left;
        font-size: .4rem;
    }
    /* .xx{
        float: left;
        font-size: .4rem;
    } */
    .el-rate__icon{
        margin-right: 0px;
    }
    .s2{
        color: #fff;
        background-color: #3190e8;
        border: .025rem solid #3190e8;
        font-size: .4rem;
        padding: .04rem .08rem 0;
        border-radius: .08rem;
        margin-left: .08rem;
        float: right;
    }
    .s3{
        color: #3190e8;
        border: .025rem solid #3190e8;
        font-size: .4rem;
        padding: .04rem .08rem 0;
        border-radius: .08rem;
        margin-left: .08rem;
        float: right;
    }
    .s4{
        transform: scale(.8);
        margin-left: -.2rem;
        font-size: .4rem;
        color: #666;
        float: left;
    }
    .s5{
        font-size: .4rem;
        color: #ff6000;
        margin: 0 .2rem;
        float: left;
    }
    .shop_right_bottom{
        margin-top: .52rem;
        display: flex;
        justify-content: space-between;
        font-size: .5rem;
        color: #333;
    }
    .shop_right_bottom p{
        transform: scale(.9);
        font-size: .5rem;
        color: #666;
        display: block;
    }
    .s6{
        float: right;
        color: #999;
    }
    .s7{
        float: right;
        color: #ccc;
    }
    .s8{
        float: right;
        color: #3190e8;
    }
</style>