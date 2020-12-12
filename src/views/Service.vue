<template>
   <div class="serviceWrap">
       <header>
           <router-link to="/profile">
               <i class="el-icon-arrow-left"></i>
           </router-link>
           <div>服务中心</div>
       </header>
       <section>
           <div>
               <ul>
                   <li></li>
               </ul>
           </div>
       </section>
   </div>
</template>

<script>
    export default {
        name: "Service",
        created(){
            this.axios.get('/v3/profile/explain').then(res=>{
                console.log(res)
            }).catch(err=>{})
        }
    }
</script>

<style scoped>
.serviceWrap{
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
</style>