<template>
    <div class="hongbaoWrap">
        <section class="hbConent">
            <section class="hongbao_title">
                <section class="title_left">
                    <span>有</span><span>{{num}}</span><span>个红包即将到期</span>
                </section>
                <section class="title_right">
                    <span class="img">
                        ？
                    </span>
                    <router-link to="">
                        <span>红包说明</span>
                    </router-link>
                </section>
            </section>
            <ul>
                <li v-for="item in hongArr">
                    <section class="item_list">
                        <div class="list_left">
                            <span>￥</span>
                            <span>{{item.amount}}</span>
                            <p>满 <span>{{item.sum_condition}}</span>可用</p>
                        </div>
                        <div class="list_center">
                            <h4>{{item.name}}</h4>
                            <p>{{item.description_map.validity_periods}}</p>
                            <p>{{item.description_map.phone}}</p>
                        </div>
                        <div class="list_right">
                            {{item.description_map.validity_delta}}
                        </div>
                    </section>
                </li>
            </ul>
            <div class="footer">
                <p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
            </div>
            <router-link to="">
                <span>查看历史红包</span>
                <i class="el-icon-arrow-right"></i>
            </router-link>
            <footer>
                <router-link to="">
                    <span>兑换红包</span>
                </router-link>
                <router-link to="">
                    <span>推荐有奖</span>
                </router-link>
            </footer>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Hongbao",
        data(){
            return {
                hongArr:[],
                num:0
            }

        },
        created(){
            this.axios.get('/promotion/v2/users/'+this.$store.state.userId+'/hongbaos?limit='+10+'&offset='+0).then(res=>{
                this.hongArr = res;
                this.num = res.length
                console.log(res)
            }).catch(err=>{})
        }

    }
</script>

<style scoped>
    .hbConent{
        padding: 0 .7rem;
    }
    .hongbao_title{
        display: flex;
        justify-content: space-between;
        font-size: .5rem;
        line-height: 2rem;
    }
    .title_left{
        color: #666;
    }
    .title_right{
        display: flex;
        align-items: center;
    }
    .img{
        width: .6rem;
        height: .6rem;
        margin-right: .2rem;
        background-color: #3190e8;
        border-radius: 50%;
        color: white;
        text-align: center;
    }
    .title_right>a{
        text-decoration: none;
        color: #3190e8;
    }
    .item_list{
        display: flex;
        justify-content: space-between;
        padding: 1rem .5rem .8rem;
    }
    .list_left{
        font-size: 0;
        border-right: .025rem dotted #ccc;
        flex: 1;
    }
    .list_left>span:nth-of-type(1){
        font-size: .75rem;
        color: #ff5340;
        font-weight: 700;
    }
    .list_left>span:nth-of-type(2){
        font-size: 1.5rem;
        color: #ff5340;
    }
    .list_left>p{
        font-size: .4rem;
        color: #999;
    }
    .list_center{
        flex: 2;
        margin-left: 1.5rem;
    }
    .list_center>h4{
        font-size: .7rem;
        color: #666;
        margin-left: -.7rem;
    }
    .list_center>p{
        list-style-type: disc;
        margin-left: -.7rem;
        font-size: .4rem;
        color: #999;
    }
    .list_right{
        font-size: .75rem;
        color: #ff5340;
    }
    li{
        background: #fff;
        background-size: .5rem .2rem;
        margin-bottom: .5rem;
        border-radius: .25rem;
    }
    .footer{
        background-color: #f9f9f9;
        padding: .4rem;
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem;
    }
    .footer>p{
        list-style-type: disc;
        font-size: .4rem;
        color: #999;
        margin-left: .4rem;
    }
    .hbConent>a{
        text-decoration: none;
        padding: .5rem 0 2.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hbConent>a>span{
        font-size: .5rem;
        color: #999;
        margin-right: .2rem;
    }
    .hbConent>a>i{
        font-size: .5rem;
        color: #999;
    }
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
    }
    footer>a{
        flex: 1;
        line-height: 2rem;
        text-align: center;
        font-size: .7rem;
        color: #555;
        text-decoration: none;
    }
    footer>a:nth-of-type(1){
        color: #555;
        border-right: 1px solid rgb(245, 245, 245);
    }
</style>