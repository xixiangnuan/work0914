<template>
<div class="">
    <div class="person">
        <router-link :to="{name:'question',query:{type:1},params:{id:1}}"><div class="f-like"></div></router-link>
        <router-link :to="{name:'question',query:{type:0},params:{id:1}}"><div class="f-wenke"></div></router-link>
      
    </div>
    <div class="left-hand"></div>
    <div class="right-hand"></div>
    <div class="angser"></div>
    <div class="gaokao"></div>
    <div class="yes"></div>
    <div class="no"></div>
</div>
</template>
<script>
export default {
   
}
</script>
<style>
    
</style>
