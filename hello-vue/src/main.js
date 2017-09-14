import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import q1 from './views/q1/index.vue'
// import q2 from './views/q2/index.vue'
import question from './views/question/index.vue'
import result from './views/result/index.vue'
import home from './views/home/index.vue'
import store from './store/index.js'
Vue.prototype.$http=axios;

Vue.use(VueRouter);

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  // {
  //   path:'/q1',
  //   component:q1
  // },
  {
    name:'question',
    path:'/question/:id',
    component:question
  },
  {
    name:'result',
    path:'/result',
    component:result
  }
];

let router = new VueRouter({
  routes:routes
})


new Vue({
  el: '#app',
  router: router,
  store:store,
  render: h => h(App),
  beforeCreate:function(){
    this.$http.get('./src/service/question.json').then((result)=>{
      console.log(result.data)
      this.$store.dispatch('get_question',result.data)
    })
    this.$http.get('../../src/service/school_list.json').then(res=>{
          this.$store.dispatch('get_school',res.data[this.random()]);
          // console.log(res);
        })
  },
      methods:{
        random(min=0,max=11){
          let num = Math.floor(Math.random()*max-min);
          num = num < 10 ? '0'+num : num;
          return 'school'+ num;
        }
      }
  // watch:{ 
  //   '$route':function(n,o){
  //     console.log(1)
  //     this.$store.state.percent=0;
  //     this.$store.state.show=true;
  //     this.$store.state.msg=""
  //   }
  // }
})
