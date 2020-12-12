<template>
    <div class="cityWrap">
        <header>
            <router-link to="/home">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>{{cityInfo ? cityInfo.name : ""}}</div>
            <router-link to="/home">切换城市</router-link>
        </header>
        <div class="form">
            <div>
                <input type="text" placeholder="输入学校、商务楼、地址" v-model="inputV">
            </div>
            <div>
                <div class="searchBtn" @click="searchPlace">提交</div>
            </div>
        </div>
        <div class="historyTitle" v-if="isShow">搜索历史</div>
        <!--将来展示搜索内容 或者历史记录-->
        <ul>
            <li v-for="p in placeArr" @click="choosePalce(p)">
                    <h4>{{p.name}}</h4>
                    <p>{{p.address}}</p>
            </li>
        </ul>
        <div class="clearHistory" v-if="isShow1" @click="clearAll">清空所有</div>
    </div>
</template>

<script>
    export default {
        name: "City",
        data(){
          return{
              cityId: 0,
              cityInfo:null,
              inputV:"",
              placeArr:[],
              isShow:true,
              isShow1:false
          }
        },
        created(){
            //获取params传递过来的值  根据id发起网络请求
            this.cityId= this.$route.params.cityId;
            console.log(this.cityId);
            this.axios.get("/v1/cities/"+this.cityId).then(res=>{
                this.cityInfo = res;
                console.log(this.cityInfo)
            }).catch(err=>{});
            if (localStorage.getItem("placeHistory")) {
                this.placeArr = JSON.parse(localStorage.getItem("placeHistory"));
                this.isShow1 = true
            }
        },
        methods:{
            searchPlace(){
                this.axios.get("/v1/pois",{
                    params:{
                        city_id:this.cityInfo.id,
                        keyword:this.inputV,
                        type:"search"
                    }
                }).then(res=>{
                    this.placeArr = res;
                    console.log(res)
                    this.isShow = false;
                }).catch(err=>{})
            },
            choosePalce(p,v){
                this.$router.push('/msite')
                localStorage.setItem("placeNameHistory",p.name);
                if (!localStorage.getItem("placeHistory")){
                    let hisArr = [];
                    hisArr.push(p)
                    localStorage.setItem("placeHistory",JSON.stringify(hisArr));
                }else {
                    let hisArr = JSON.parse(localStorage.getItem("placeHistory"));
                    let newArr = hisArr.filter(v=>{
                        return v.name == p.name
                    })
                    if (!newArr.length) {
                        hisArr.push(p);
                        localStorage.setItem("placeHistory",JSON.stringify(hisArr));
                    }
                    // hisArr.push(p);
                    // localStorage.setItem("placeHistory",JSON.stringify(hisArr));
                }
                console.log(p,v)
                this.$router.push({name:'d',params:{id:p,num:v}})
                /*
        第一次存，先创建一个数组，将p放进数组，将数组存储在localStorage
        以后存，获取数组，将p放进数组，将数组存储在localStorage
     */
                // console.log(localStorage.getItem("placeHistory"));
                // if (!localStorage.getItem("placeHistory")) {
                //     //第一次存
                //     let hisArr = [];
                //     hisArr.push(p);
                //     localStorage.setItem("placeHistory", JSON.stringify(hisArr));
                //
                // } else {
                //     //之后存
                //     let hisArr = JSON.parse(localStorage.getItem("placeHistory"));
                //     // console.log(hisArr);
                //     hisArr.push(p);
                //     localStorage.setItem("placeHistory", JSON.stringify(hisArr));
                // }
            },
            clearAll(){
                localStorage.removeItem("placeHistory");
                this.placeArr = [];
                this.isShow1 = true;
            }
        }
    }
</script>

<style scoped>
    .cityWrap{
        padding-top: 1.95rem;
    }
    header>a:first-child{
        position: absolute;
        top: 50%;
        left: .4rem;
        transform: translateY(-50%);
        color: #fff;
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
    header>a:last-child{
        right: .4rem;
        font-size: .6rem;
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-decoration: none;
    }
    .form{
        background-color: #fff;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        padding-top: .4rem;
    }
    .form>div{
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
    .form>div>input{
        border: 1px solid #e4e4e4;
        padding: 0 .3rem;
        font-size: .65rem;
        color: #333;
        border-radius: .1rem;
        margin-bottom: .4rem;
        width: 100%;
        height: 1.4rem;
    }
    .searchBtn{
        border: 1px solid #e4e4e4;
        padding: 0 .3rem;
        background-color: #3190e8;
        font-size: .65rem;
        color: #fff;
        border-radius: .1rem;
        margin-bottom: .4rem;
        width: 100%;
        height: 1.4rem;
        line-height: 1.4rem;
    }
    .historyTitle{
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        padding-left: .5rem;
        font: .475rem/.8rem Microsoft YaHei;
    }
    .clearHistory{
        font-size: .7rem;
        color: #666;
        text-align: center;
        line-height: 2rem;
        background-color: #fff;
    }
    ul{
        background-color: #fff;
        border-top: 1px solid #e4e4e4;
    }
    ul>li{
        margin: 0 auto;
        padding-top: .65rem;
        border-bottom: 1px solid #e4e4e4;
    }
    ul>li>h4{
        margin: 0 auto .35rem;
        width: 90%;
        font-size: .65rem;
        color: #333;
    }
    ul>li>p{
        width: 90%;
        margin: 0 auto .55rem;
        font-size: .45rem;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>