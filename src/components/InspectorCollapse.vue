<template>
    <div class="CollapseForG">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-collapse v-model="activeNames" >
                <van-collapse-item  v-for="(item,index) in datapusharraylist" :title="index+1+'. '+item.title" :name="item.index" :key="item.index">
                    <van-cell title="库位" :value="item.categoryname" />
                    <van-cell title="库位描述" :value="item.kwinfor" />
                    <van-cell title="待检批次" :value="item.mlotNO" />
                    <van-cell title="物料编码" :value="item.partcode" />
                    <van-cell title="物料名称" :value="item.partname" />
                    <van-cell title="供应商名称" :value="item.description" />
                    <van-cell title="供应商代码" :value="item.enterprisename" />
                    <van-cell title="订单上线时间" :value="item.erpPlannedStartdate" />
                    <van-cell title="需求数量" :value="item.requireQTY" />
                    <van-cell title="缺料数量" :value="item.djQuantity" />
                    <van-cell title="存储核（线体）" :value="item.cch" />
                </van-collapse-item>
            </van-collapse>
        </van-pull-refresh>
        <div class="backtop" v-show="toTopShow" @click="gotoTop">
            <van-icon name="arrow-up"/>
            <span class="text">Top</span>
        </div>
    </div>
</template>
<script>
import { GET_DATAPUSH } from "../store";
import { mapGetters, mapActions } from "vuex";
import { TweenLite } from "gsap/TweenMax";
import _ from "lodash";
export default {
  data() {
    return {
      isLoading: false,
      activeNames: [],
      datapusharray: [],
      toTopShow: false
    };
  },
  computed: {
    ...mapGetters(["datapush"]),
    datapusharraylist() {
      // eslint-disable-next-line no-param-reassign
      this.datapusharray = this.datapusharray.concat(this.datapush);
      return this.datapusharray;
    }
  },
  methods: {
    ...mapActions({
      getDataPush: GET_DATAPUSH
    }),
    onRefresh() {
      this.$emit("resetfinished");
      this.getDataPush(0)
        .then(() => {
          this.datapusharray = [];
          this.$toast({
            duration: 850,
            message: "刷新成功"
          });
          this.isLoading = false;
        })
        .catch(() => {
          this.$toast({
            duration: 850,
            message: "刷新失败"
          });
          this.isLoading = false;
        });
    },
    handlerScroll() {
      this.toTopShow = false;
      this._handlerToTopButton(this);
    },
    _handlerToTopButton: _.debounce(
      _this => {
        _this.$nextTick(() => {
          let scroll =
            document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop ||
            0;
          _this.toTopShow = scroll > 100;
        });
      },
      500,
      {
        leading: false,
        trailing: true
      }
    ),
    gotoTop() {
      this.$nextTick(() => {
        if (document.documentElement !== undefined) {
          TweenLite.to(document.documentElement, 0.8, { scrollTop: 0 });
        }

        if (window.pageYOffset !== undefined) {
          TweenLite.to(window, 0.8, { pageYOffset: 0 });
        }

        if (document.body !== undefined) {
          TweenLite.to(document.body, 0.8, { scrollTop: 0 });
        }
      });
    }
  },
  created() {
    this.getDataPush(0)
      .then(() => {})
      .catch(() => {
        this.$toast({
          duration: 850,
          message: "加载失败"
        });
      });
  },
  mounted() {
    window.addEventListener("scroll", this.handlerScroll, true);
  }
};
</script>
<style>
.van-collapse-item__content {
  color: #969799;
  padding: 15px;
  font-size: 13px;
  line-height: 1.5;
  background-color: #dedede !important;
}
.backtop {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #f75a54;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 8px 18px 0 rgba(251, 119, 114, 0.4);
  text-align: center;
  color: #fff;
  cursor: pointer;
  /*z-index: 1000;*/
}
.text {
  display: block;
}
</style>
