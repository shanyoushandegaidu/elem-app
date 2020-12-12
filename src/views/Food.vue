<template>
    <div class="foodWrap">
        <header>
            <router-link to="/msite">
                <i class="el-icon-arrow-left firsti"></i>
            </router-link>
            <div>{{foodTitle}}</div>
        </header>
        <section class="sort_container">
            <div class="sort_item">
                <div class="sort_item_container" @click="fenlei">
                    <span>{{foodTitle}}</span>
                    <i class="el-icon-caret-bottom" v-if="!isShow1"></i>
                    <i class="el-icon-caret-top" v-if="isShow1"></i>
                </div>
                <el-collapse-transition>
                    <section class="category_container sort_detail_type" v-if="isShow1">
                        <section class="category_left">
                            <ul>
                                <!-- <li class="category_left_li" v-for="s1 in shopArr1[0]" :key="s1.id">
                                  <section><span>{{s1.name}}</span></section>
                                  <section><span class="category_count">{{s1.count}}</span></section>
                                </li> -->
                                <li class="category_left_li" v-for="(s1,index) in shopArr1" :key="index" @click="chooseThis(index)" :class="active == index ? 'addclass' : '' ">
                                    <section>
                                        <img :src="imgUrl1 + s1.image_url" alt="" class="category_icon">
                                        <span>{{s1.name}}</span>
                                    </section>
                                    <section>
                                        <span class="category_count">{{s1.count}}</span>
                                        <i class="el-icon-arrow-right"></i>
                                    </section>
                                </li>
                            </ul>
                        </section>
                        <section class="category_right">
                            <ul>
                                <li class="category_right_li" v-for="s2 in shopArr2" :key="s2.id" @click="paixu2(s2)">
                                    <span>{{s2.name}}</span>
                                    <span>{{s2.count}}</span>
                                </li>
                            </ul>
                        </section>
                    </section></el-collapse-transition>
            </div>
            <div class="sort_item">
                <div class="sort_item_container" @click="paixu">
                    <span>排序</span>
                    <i class="el-icon-caret-bottom" v-if="!isShow2"></i>
                    <i class="el-icon-caret-top" v-if="isShow2"></i>
                </div>
                <el-collapse-transition>
                    <section class="sort_detail_type"   v-if="isShow2">
                        <ul class="sort_list_container">
                            <li class="sort_list_li" @click="paixu1(1)">
                                <i class="el-icon-sort"></i>
                                <p><span>智能排序</span></p>
                            </li>
                            <li class="sort_list_li" @click="paixu1(2)">
                                <i class="el-icon-s-grid"></i>
                                <p><span>距离最近</span></p>
                            </li>
                            <li class="sort_list_li" @click="paixu1(3)">
                                <i class="el-icon-paperclip"></i>
                                <p><span>销量最高</span></p>
                            </li>
                            <li class="sort_list_li" @click="paixu1(4)">
                                <i class="el-icon-money"></i>
                                <p><span>起送价最低</span></p>
                            </li>
                            <li class="sort_list_li" @click="paixu1(5)">
                                <i class="el-icon-time"></i>
                                <p><span>配送速度最快</span></p>
                            </li>
                            <li class="sort_list_li" @click="paixu1(6)">
                                <i class="el-icon-star-off"></i>
                                <p><span>评分最高</span></p>
                            </li>
                        </ul>
                    </section></el-collapse-transition>
            </div>
            <div class="sort_item">
                <div class="sort_item_container" @click="shaixuan">
                    <span>筛选</span>
                    <i class="el-icon-caret-bottom" v-if="!isShow3"></i>
                    <i class="el-icon-caret-top" v-if="isShow3"></i>
                </div>
                <el-collapse-transition>
                    <section class="sort_detail_type filter_container"  v-if="isShow3">
                        <section style="width:100%">
                            <div class="filter_header_style">配送方式</div>
                            <ul class="filter_ul">
                                <li class="filter_li" @click="chooseTrem(checkCount)">
                                    <i class="el-icon-check" v-if="!isShow4"></i>
                                    <i class="el-icon-chicken" v-if="isShow4"></i>
                                    <span>蜂鸟专送</span>
                                </li>
                            </ul>
                        </section>
                        <section style="width:100%">
                            <div class="filter_header_style">商家属性（可以多选）</div>
                            <ul class="filter_ul" style="padding-bottom: 0.5rem;">
                                <li class="filter_li" @click="shuxing1">
                                    <i class="el-icon-check" v-if="showshuxing1"></i>
                                    <span class="filter_icon"
                                          style="color: rgb(63, 189, 230); border-color: rgb(63, 189, 230);"  v-if="showshuxing11">品</span><span>品牌商家</span>
                                </li>
                                <li class="filter_li" @click="shuxing2">
                                    <i class="el-icon-check" v-if="showshuxing2"></i>
                                    <span class="filter_icon"
                                          style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);"   v-if="showshuxing22">品</span><span>外卖保</span>
                                </li>
                                <li class="filter_li" @click="shuxing3">
                                    <i class="el-icon-check" v-if="showshuxing3"></i>
                                    <span class="filter_icon"
                                          style="color: rgb(63, 189, 230); border-color: rgb(63, 189, 230);"  v-if="showshuxing33">准</span><span>准时达</span>
                                </li>
                                <li class="filter_li" @click="shuxing4">
                                    <i class="el-icon-check" v-if="showshuxing4"></i>
                                    <span class="filter_icon"
                                          style="color: rgb(232, 132, 45); border-color: rgb(232, 132, 45);"  v-if="showshuxing44">新</span><span>新店</span>
                                </li>
                                <li class="filter_li" @click="shuxing5">
                                    <i class="el-icon-check" v-if="showshuxing5"></i>
                                    <span class="filter_icon" style="color: rgb(255, 78, 0); border-color: rgb(255, 78, 0);"  v-if="showshuxing55">付</span><span>在线支付</span>
                                </li>
                                <li class="filter_li" @click="shuxing6">
                                    <i class="el-icon-check" v-if="showshuxing6"></i>
                                    <span class="filter_icon"
                                          style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);"  v-if="showshuxing66" >票</span><span>开发票</span>
                                </li>
                            </ul>
                        </section>
                        <div class="footer">
                            <div class="clear_all filter_button_style" @click="clearAll">清空</div>
                            <div class="confirm_select filter_button_style" @click="sureShaixuan">确定<span v-if="isShow5">({{jishu}})</span></div>
                        </div>
                    </section></el-collapse-transition>
            </div>
        </section>
        <div>
            <div class="shop">
                <ul class="allfood">
                    <li v-for="s in shopArr" :key="s.id" @click="goshop(s.id,s.image_path,s.name)">
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
    </div>
</template>

<script>
    export default {
        name:'Food',
        data(){
            return{
                foodTitle:'',
                cityLongitude:"",
                cityLatitude:"",
                shopArr:[],
                shopArr1:[],
                imgurl:"https://elm.cangdu.org/img/",
                placeNameHistory:'',
                isShow1:false,
                isShow2:false,
                isShow3:false,
                imgUrl1:'https://fuss10.elemecdn.com/',
                shopArr2:[],
                liColir:"",
                shopArr3:[],
                isShow4:true,
                isShow5:false,
                checkCount:1,
                jishu:0,
                active:0,
                active1:8,
                shaixuanArr:[],
                showshuxing1: false,
                showshuxing11: true,
                showshuxing2: false,
                showshuxing22: true,
                showshuxing3: false,
                showshuxing33: true,
                showshuxing4: false,
                showshuxing44: true,
                showshuxing5: false,
                showshuxing55: true,
                showshuxing6: false,
                showshuxing66: true,
            }
        },
        created(){
            this.foodTitle = localStorage.getItem("foodtitle");
            this.placeNameHistory = localStorage.getItem("placeNameHistory")
            let hisArr = JSON.parse(localStorage.getItem("placeHistory"))
            let newArr = hisArr.filter(v=>{
                return v.name == this.placeNameHistory
            })
            this.cityLatitude = newArr[0].latitude;
            this.cityLongitude = newArr[0].longitude;
            this.axios.get("shopping/restaurants",{
                params:{
                    latitude:this.cityLatitude,
                    longitude:this.cityLongitude
                }
            }).then(res=>{
                console.log(res)
                this.shopArr = res;
            }).catch(err=>{});
            this.axios.get("shopping/v2/restaurant/category",{
                params:{
                    latitude:this.cityLatitude,
                    longitude:this.cityLongitude
                }
            }).then(res=>{
                // console.log(res)
                this.shopArr1 = res;
            }).catch(err=>{});
        },
        methods:{
            shaixuan(){
                this.isShow3 = !this.isShow3;
                this.isShow1 = false;
                this.isShow2 = false;
                this.axios.get("shopping/v1/restaurants/activity_attributes").then(res=>{
                    // console.log(res)
                    this.shopArr3 = res;
                }).catch(err=>{});
            },
            paixu(){
                this.isShow2 = !this.isShow2;
                this.isShow1 = false;
                this.isShow3 = false;
            },
            fenlei(){
                this.isShow1 = !this.isShow1;
                this.isShow2 = false;
                this.isShow3 = false;
            },
            chooseThis(index){
                // console.log(index);
                this.active = index;
                this.shopArr2 = this.shopArr1[index].sub_categories;
                // console.log(this.shopArr2)
            },
            paixu1(n){
                this.isShow2 = !this.isShow2;
                this.axios.get("shopping/restaurants",{
                    params:{
                        latitude:this.cityLatitude,
                        longitude:this.cityLongitude,
                        order_by:n
                    }
                }).then(res=>{
                    console.log(res)
                    this.shopArr = res;
                }).catch(err=>{});
            },
            paixu2(m){
                // console.log(m)
                this.foodTitle = m.name;
                this.isShow1 = !this.isShow1;
                this.axios.get("shopping/restaurants?latitude="+this.cityLatitude+'&longitude='+this.cityLongitude+'&restaurant_category_ids[]='+m.id)
                    .then(res=>{
                        this.shopArr = res;
                    }).catch(err=>{});
            },
            chooseTrem(checkCount){
                this.checkCount++;
                this.isShow4 = !this.isShow4;
                if (checkCount%2 == 0) {
                    this.jishu--;
                }else{
                    this.jishu++;
                }
                if (this.jishu == 0) {
                    this.isShow5 = false;
                }else{
                    this.isShow5 = true;
                }
            },
            chooseTrem1(i,s3id){

            },
            goshop(s,i,n){
                this.$router.push('/shop');
                localStorage.setItem("shopId",s);
                localStorage.setItem("shopImg",i);
                localStorage.setItem("shopName",n)
            },
            shuxing1() {
                this.showshuxing1 = !this.showshuxing1
                this.showshuxing11 = !this.showshuxing11
                if (this.showshuxing1) {
                    this.shaixuanArr.push(8)
                    this.jishu++
                } else {
                    if (this.shaixuanArr.length === 0) {
                    } else {
                        this.shaixuanArr.splice(this.shaixuanArr.indexOf(8), 1)
                        this.jishu--
                    }
                }
                if (this.jishu == 0) {
                    this.isShow5 = false;
                }else{
                    this.isShow5 = true;
                }
            },
            shuxing2() {
                this.showshuxing2 = !this.showshuxing2
                this.showshuxing22 = !this.showshuxing22
                if (this.showshuxing2) {
                    this.shaixuanArr.push(7)
                    this.jishu++
                } else {
                    if (this.shaixuanArr.length === 0) {
                    } else {
                        this.shaixuanArr.splice(this.shaixuanArr.indexOf(7), 1)
                        this.jishu--
                    }
                }
                if (this.jishu == 0) {
                    this.isShow5 = false;
                }else{
                    this.isShow5 = true;
                }
                // console.log(this.shaixuanArr)
            },
            shuxing3() {
                this.showshuxing3 = !this.showshuxing3
                this.showshuxing33 = !this.showshuxing33
                if (this.showshuxing3) {
                    this.shaixuanArr.push(9)
                    this.jishu++
                } else {
                    if (this.shaixuanArr.length === 0) {
                    } else {
                        this.shaixuanArr.splice(this.shaixuanArr.indexOf(9), 1)
                        this.jishu--
                    }
                }
                if (this.jishu == 0) {
                    this.isShow5 = false;
                }else{
                    this.isShow5 = true;
                }
                // console.log(this.shaixuanArr)
            },
            shuxing4() {
                this.showshuxing4 = !this.showshuxing4
                this.showshuxing44 = !this.showshuxing44
                if (this.showshuxing4) {
                    this.shaixuanArr.push(5)
                    this.jishu++
                } else {
                    if (this.shaixuanArr.length === 0) {
                    } else {
                        this.shaixuanArr.splice(this.shaixuanArr.indexOf(5), 1)
                        this.jishu--
                    }
                }
                if (this.jishu == 0) {
                    this.isShow5 = false;
                }else{
                    this.isShow5 = true;
                }
                // console.log(this.shaixuanArr)
            },
            shuxing5() {
                this.showshuxing5 = !this.showshuxing5
                this.showshuxing55 = !this.showshuxing55
                if (this.showshuxing5) {
                    this.shaixuanArr.push(3)
                    this.jishu++
                } else {
                    if (this.shaixuanArr.length === 0) {
                    } else {
                        this.shaixuanArr.splice(this.shaixuanArr.indexOf(3), 1)
                        this.jishu--
                    }
                }
                if (this.jishu == 0) {
                    this.isShow5 = false;
                }else{
                    this.isShow5 = true;
                }
                // console.log(this.shaixuanArr)
            },
            shuxing6() {
                this.showshuxing6 = !this.showshuxing6
                this.showshuxing66 = !this.showshuxing66
                if (this.showshuxing6) {
                    this.shaixuanArr.push(4)
                    this.jishu++
                } else {
                    if (this.shaixuanArr.length === 0) {
                    } else {
                        this.shaixuanArr.splice(this.shaixuanArr.indexOf(4), 1)
                        this.jishu--
                    }
                }
                if (this.jishu == 0) {
                    this.isShow5 = false;
                }else{
                    this.isShow5 = true;
                }
                // console.log(this.shaixuanArr)
            },
            sureShaixuan(){
                this.isShow3 = !this.isShow3
                this.axios.get("shopping/restaurants?latitude="+this.cityLatitude+'&longitude='+this.cityLongitude+'&support_ids[]='+this.shaixuanArr)
                    .then(res=>{
                        console.log(res)
                        this.shopArr = res;
                    }).catch(err=>{});
            },
            clearAll(){
                this.shaixuanArr = [];
                this.showshuxing1= false;
                this.showshuxing11= true;
                this.showshuxing2= false;
                this.showshuxing22= true;
                this.showshuxing3= false;
                this.showshuxing33= true;
                this.showshuxing4=false;
                this.showshuxing44= true;
                this.showshuxing5= false;
                this.showshuxing55= true;
                this.showshuxing6=false;
                this.showshuxing66=true;
                this.jishu = 0;
                this.isShow5 = false;
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .foodWrap{
        padding-top: 1.95rem;
    }
    header>a{
        position: absolute;
        left: 0.4rem;
        color: #fff;
        font-size: 1rem;
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
    .sort_container{
        background-color: #fff;
        border-bottom: .025rem solid #f1f1f1;
        position: fixed;
        top: 1.95rem;
        right: 0;
        width: 100%;
        display: flex;
        z-index: 13;
        box-sizing: border-box;
    }
    .sort_item{
        font-size: .55rem;
        color: #444;
        width: 33.3%;
        height: 1.6rem;
        text-align: center;
        line-height: 1rem;
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
    .shop li{
        display: flex;
        border-bottom: .025rem solid #f1f1f1;
        padding: .7rem .4rem;
    }
    .allfood:first-child{
        padding-top: 1.4rem;
    }
    .allfood{
        background-color: #fff;
    }
    .sort_item_container{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 14;
        background-color: #fff;
        box-sizing: border-box;
        padding-top: .3rem;
    }
    .el-icon-caret-bottom{
        vertical-align: middle;
        transition: all .3s;
        fill: #666;
    }
    .sort_detail_type {
        width: 100%;
        position: absolute;
        display: flex;
        top: 1.6rem;
        left: 0;
        border-top: .025rem solid #e4e4e4;
    }
    .filter_container{
        flex-direction: column;
        align-items: flex-start;
        min-height: 10.6rem;
        background-color: #f1f1f1;
    }
    .footer{
        display: flex;
        background-color: #f1f1f1;
        width: 100%;
        padding: .3rem .2rem;
    }
    .clear_all {
        background-color: #fff;
        margin-right: .5rem;
        border: .025rem solid #fff;
    }
    .filter_button_style{
        width: 50%;
        height: 1.8rem;
        font-size: .8rem;
        line-height: 1.8rem;
        border-radius: .2rem;
    }
    .confirm_select{
        background-color: #56d176;
        color: #fff;
        border: .025rem solid #56d176;
    }
    .filter_button_style{
        width: 50%;
        height: 1.8rem;
        font-size: .8rem;
        line-height: 1.8rem;
        border-radius: .2rem;
    }
    .filter_header_style{
        font-size: .4rem;
        color: #333;
        line-height: 1.5rem;
        height: 1.5rem;
        text-align: left;
        padding-left: .5rem;
        background-color: #fff;
    }
    .filter_ul{
        display: flex;
        flex-wrap: wrap;
        padding: 0 .5rem;
        background-color: #fff;
    }
    .filter_li{
        display: flex;
        align-items: center;
        border: .025rem solid #eee;
        width: 4.7rem;
        height: 1.4rem;
        margin-right: .25rem;
        border-radius: .125rem;
        padding: 0 .25rem;
        margin-bottom: .25rem;
        box-sizing: border-box;
    }
    .filter_li i{
        width: .8rem;
        height: .8rem;
        margin-right: .125rem;
        display: inline-block;
    }
    .filter_li span{
        font-size: .4rem;
        color: #333;
    }
    .filter_icon{
        width: .8rem;
        height: .8rem;
        font-size: .5rem;
        border: .025rem solid #e4e4e4;
        border-radius: .15rem;
        margin-right: .25rem;
        line-height: .8rem;
        text-align: center;
    }
    .sort_list_container{
        width: 100%;
        background-color: #fff;
    }
    .sort_list_li{
        height: 2.5rem;
        display: flex;
        align-items: center;
    }
    .sort_list_li i{
        width: .7rem;
        height: .7rem;
        margin: 0 .3rem 0 .8rem;
    }
    .sort_list_li p{
        line-height: 2.5rem;
        flex: auto;
        text-align: left;
        text-indent: .25rem;
        border-bottom: .025rem solid #e4e4e4;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sort_list_li p span{
        color: #666;
    }
    .category_left{
        flex: 1;
        background-color: #f1f1f1;
        height: 16rem;
        overflow-y: auto;
    }
    .category_left>ul{
        background-color: #f5f5f5;
    }
    .category_left_li{
        display: flex;
        justify-content: space-between;
        padding: 0 .5rem;
    }
    .category_left_li span{
        font-size: .5rem;
        color: #666;
        line-height: 1.8rem;
    }
    .category_count{
        background-color: #ccc;
        font-size: .4rem;
        color: #fff;
        padding: 0 .1rem;
        border: .025rem solid #ccc;
        border-radius: .8rem;
        vertical-align: middle;
        margin-right: .25rem;
    }
    .category_icon{
        width: .8rem;
        height: .8rem;
        vertical-align: middle;
        margin-right: .2rem;
    }
    .category_right{
        flex: 1;
        background-color: #fff;
        padding-left: .5rem;
        height: 16rem;
        overflow-y: auto;
    }
    .category_right_li{
        display: flex;
        justify-content: space-between;
        height: 1.8rem;
        line-height: 1.8rem;
        padding-right: .5rem;
        border-bottom: .025rem solid #e4e4e4;
    }
    .category_right_li span{
        color: #666;
    }
    .addclass{
        background-color: #fff;
    }
</style>