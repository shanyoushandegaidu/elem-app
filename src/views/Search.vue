<template>
    <div class="searchWrap">
        <header>
            <router-link to="">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>
                搜索
            </div>
        </header>
       <div class="content">
           <input type="text" placeholder="请输入商家或者美食名称" v-model="inputV">
           <div class="searchBtn" @click="searchShop">提交</div>
       </div>
        <div class="business" v-if="isShow">
            <p>商家</p>
            <ul>
                <li  v-for=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return {
                inputV:'',
                isShow:false,
                geohash:null
            }
        },
        created(){
            this.geohash = this.$router.params.geohash;
            if (localStorage){
                isShow = !isShow;
            }
        },
        methods:{
            searchShop(){
                this.axios.get('v4/restaurants',{
                    params:{
                        keyword:this.inputV,
                        geohash:this.geohash,
                        type:String
                    }
                }).then(res=>{
                    console.log(res);
                }).catch(err=>{})
            }
        }
    }
</script>

<style scoped>
.searchWrap{
    margin-top: 1.95rem;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
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
.content{
    width: 100%;
    background-color: #fff;
    padding: .5rem;
    font-weight: 400;
    color: #333;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
}
    .content>input{
        width: 11.5rem;
        line-height: 1.5rem;
        font-size: .65rem;
        color: #333;
        border: .025rem solid #e4e4e4;
        border-radius: .123rem;
        background-color: #f2f2f2;
        font-weight: 700;
        padding: 0 .25rem;
        outline: none;
        float: left;
    }
    .searchBtn{
        width: 2.29rem;
        display: inline-block;
        background-color: #3190e8;
        border: .025rem solid #3190e8;
        color: #fff;
        line-height: 1.5rem;
        margin-left: .02rem;
        font-weight: 700;
        border-radius: .123rem;
        text-align: center;
        font-size: .65rem;
        float: right;
    }
</style>