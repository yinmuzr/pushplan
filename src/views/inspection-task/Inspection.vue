<template>
  <div>
    <van-row class="row-title">
      <van-col span="3">
       <van-icon name="todo-list-o" class="todo-icon"/>
      </van-col>
      <van-col span="21" class="todo-title">{{title}}</van-col>
    </van-row>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="skiploaddata"
            :offset="offset"
            v-if="isAuth"
    >
    <InspectorCollapse  @resetfinished="resetfinished"/>
    </van-list>
    <span class="nodata" v-if="!isAuth">很抱歉，暂无数据！</span>
  </div>
</template>
<script>
import { GET_DATAPUSH, GET_TOKEN, GET_USER } from "../../store";
import InspectorCollapse from "@/components/InspectorCollapse";
import { mapActions } from "vuex";
import VConsole from "vconsole/dist/vconsole.min.js";
//import { getToken, getUser } from "../../service/getUser.service";
export default {
  data() {
    return {
      title: "个人检验任务列表",
      loading: false,
      finished: false,
      skipcount: 0,
      offset: 0,
      isAuth: true
    };
  },
  components: {
    InspectorCollapse
  },
  methods: {
    ...mapActions({
      getDataPush: GET_DATAPUSH
      //            getToken: GET_TOKEN,
      //            getUser:GET_USER
    }),
    skiploaddata() {
      setTimeout(() => {
        this.skipcount = this.skipcount + 10;
        this.getDataPush(this.skipcount)
          .then(response => {
            this.loading = false;
            if (0 == response.length) {
              this.finished = true;
              this.skipcount = 0;
            }
          })
          .catch(() => {
            this.$toast({
              duration: 850,
              message: "加载失败"
            });
          });
      }, 500);
    },
    resetfinished() {
      this.finished = false;
    }
  }
  //  created() {
  //    new VConsole();
  //    let callback = window.location.href.split("?")[1].split("=")[1];
  //
  //    getToken(callback)
  //      .then(response => {
  //          console.log("then....");
  //        if (response.Message) {
  //          getUser(response.Message)
  //            .then(response => {
  //              if (response.DepartmentName == "筛选分厂") {
  //                this.isAuth = true;
  //              } else {
  //                this.isAuth = false;
  //              }
  //            })
  //            .catch(() => {
  //              this.$toast({
  //                duration: 850,
  //                message: "加载失败"
  //              });
  //            });
  //        }
  //      })
  //      .catch(error => {
  //        console.log(error);
  //        this.$toast({
  //          duration: 850,
  //          message: "加载失败"
  //        });
  //      });
  //  }
};
</script>
<style lang="stylus" scoped>
.row-title
 height: 40px;
.todo-title
 line-height: 40px;
 font-size: 14px;
.todo-icon
 font-size: 24px;
 padding-left 10px;
 line-height: 40px;
.nodata
  padding-top;15px
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69,90,100,.6);
  padding: 35px 15px 15px;
</style>
