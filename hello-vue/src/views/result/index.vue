<template>
    <div class="result">
      <div class="aside">
        <img src="../../imgs/seal.png" alt="">
      </div>
      <h2>{{$store.state.school.name}}</h2>
      <div class="subject"><b>主修课程：</b><span> {{$store.state.school.majors}}</span></div>
       <div class="classes"><b>课程特色 : </b><span>  {{$store.state.school.character}}</span></div>
       <div class="btns">
            <img src="../../imgs/btn-intr.png" alt="">
            <img src="../../imgs/btn-share.png" alt="">
        </div>
    </div>
</template>

<script>
    export default{
      data:function(){
        return {
          res:''
        }
      }
    }
</script>

<style lang="scss">
  .result{
    height: 100%;
    width: 100%;
    background: url("../../imgs/bg-matriculate.png") no-repeat center 40px;
    background-size: 308px 405px;
    box-sizing: border-box;
    position: relative;
    .aside{
      position: absolute;
      top: 30px;
      right: 10px;
      img{
        width: 100px;
        height: 100px;
      }
    }
    h2{
        width: 100%;
        text-align: center;
        font-weight: normal;
        font-size:20px;
        padding-top: 180px;
      }
      .subject{
        width: 254px;
        margin: 6px auto 0;

        b{
            font-size: 14px;
            color: #333;
        }
        span{
            color: #393939;
            font-size: 14px;
        }
    }
    .classes{
        width: 254px;
        margin: 6px auto 0;
        b{
            font-size: 14px;
            color: #333;
        }
        span{
            color: #393939;
            font-size: 14px;
        }
    }
    .btns{
        width: 285px;
        margin: 50px auto 0;
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
        
        img{
            width: 120px;
            height: 60px;
        }    
    }
  }
  
</style>