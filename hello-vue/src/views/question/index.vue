<template>

  <div class="question">
    <div class="quertion">
      <p class="title">{{$store.state.question_list[id-1].subjectCh}} {{id}}题/4题</p>
      <div class="questions">
        <p>{{$store.state.question_list[id-1].title}}</p>
      </div>
    </div>   
    <ul class="content">
      <li class="answer" @click="change_bg(0)" :class="{'select_answer':bg_list[0]}"><span class="alpha a">{{$store.state.question_list[id-1].answers[0]}}</span></li>
      <li class="answer" @click="change_bg(1)" :class="{'select_answer':bg_list[1]}"><span class="alpha b">{{$store.state.question_list[id-1].answers[1]}}</span></li>
      <li class="answer" @click="change_bg(2)" :class="{'select_answer':bg_list[2]}"><span class="alpha c">{{$store.state.question_list[id-1].answers[2]}}</span></li>
    </ul>
  </div>

</template>

<script>
    export default{
      data:function(){
        return {
          bg_list:[false,false,false],
          id:null
          
        }
      },
      created:function(){
       let type = this.$route.query.type;//获取type参数
        this.$store.commit("select",type);
        this.id = this.$route.params.id;
      },
      methods:{
        change_bg(index){
          this.bg_list=[!1,!1,!1];
          this.bg_list[index]=!0;

          setTimeout(()=>{
            this.bg_list=[!1,!1,!1];
            this.id = this.id*1+1;
            if(this.id > 4){
                this.$router.replace('/result');
                return;
            }
            this.$router.replace('/question/'+this.id); 
          },500)
          
        }
      }
    }
</script>

<style lang="scss">

  .q2{
    width:100%;
    height: 100%;
  }
  .quertion{
    padding-top: 20px;
  }
  .question{
    width: 90%;
    margin:0 auto;    
     
  }
  .title{
    height: .8rem;
    line-height: .5rem;
    color: #22C485;
    font-size:14px;
    text-align: center;
    background: url('../../imgs/bg-question-top.png') no-repeat center center;
    background-size:100% 100%;
  }
  .questions{ 
    background: url('../../imgs/bg-question-center.png') no-repeat center 0;
    background-size:100% 100%;
  }
  .questions p{
    font-size:14px;
    line-height: .35rem;
    text-indent: 25px;   
  }
  .content{
    padding-top: 15px;
    height: 7rem;
    background: url('../../imgs/bg-question-bottom.png') no-repeat center center;
    background-size:100% 100%;
    width: 100%;
    margin: 0 auto;
  }     
  .answer{
    width:100%;
    height: .8rem;
    background: url('../../imgs/btn-bg-select.png') no-repeat;
    background-position: .2rem 0px;
    background-size: 88% 200%;
    text-align: left;
  }
  .select_answer{
    background-position: .2rem -.78rem;
  }
  .content .answer .alpha{
    width:100%;
    height:90%;
    text-indent: 60px;
    color:#fff;
    font-weight: bold;
    font-size:16px;
    line-height: .8rem;
    display: block;
  }
  .content .answer .a{
    background: url('../../imgs/a.png') no-repeat 25px center;
    background-size: 7% 55%;
  }
  .content .answer .b{
    margin-top: 13px;
    background: url('../../imgs/b.png') no-repeat 25px center;
    background-size: 7% 55%;
  }
  .content .answer .c{
    margin-top: 13px;
    background: url('../../imgs/c.png') no-repeat 25px center;
    background-size: 7% 55%;
  }
</style>