import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store=new Vuex.Store({
  state:{
    question: null,
    question_list:[],
    school:null
  },
  mutations:{
    set_question:function(state,data){
      state.question=Object.values(data)
      console.log(state.question)
    },
    select:function(state,type){
        let arr=[];
        if(type == 1){
            arr=state.question.filter((val)=>{
                if(val.type ==1|| val.type==2){
                    return val;
                }
            })
        }else if(type==0){
            arr=state.question.filter((val)=>{
                if(val.type !=1){
                    return val;
                }
            })
        }
        state.question_list=arr.slice(0,4)
    },
    set_school:function(state,data){
        state.school = data;
        console.log(state.school);
    } 
  },
  actions:{
      get_question({commit},data){
          commit('set_question',data)
      },
       get_school({commit},data){
        commit('set_school',data);
      } 
  }
})
export default store;