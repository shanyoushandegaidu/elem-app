<template>
    <div class="benefitWrap">
        <header>
            <router-link to="/profile">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <div>我的优惠</div>
        </header>
        <section>
            <section class="title">
                <router-link to="/hongbao">
                    <span class="s1">红包</span>
                </router-link>
                <router-link to="/daijin">
                    <span class="s2">商家代金券</span>
                </router-link>
            </section>
            <section>
                <router-view></router-view>
            </section>
        </section>
    </div>

</template>

<script>
    export default {
        name: "Benefit"
    }
</script>

<style scoped>
    .benefitWrap{
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
    .title{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 2rem;
        background-color: #fff;
    }
   .title>a{
        text-align: center;
        font-size: .65rem;
        color: #333;
        padding-bottom: .2rem;
        border-bottom: .1rem solid #fff;
        text-decoration: none;
    }
</style>