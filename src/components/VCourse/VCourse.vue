<template>
  <div class="v-course" v-infinite-scroll="loadMore"
       infinite-scroll-distance="20">
    <div class="course" @click="jumpPage" v-for="(item,index) in list" :key="index">
      <div class="left">
        <img v-lazy="item.imgUrl">
      </div>
      <div class="right">
        <p class="title">{{item.title}}</p>
        <div class="cont">
          <p class="percent" v-if="item.percent">{{item.percent}}</p>
          <p class="msg">{{item.msg}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCourse',
  data () {
    return {
      loading: false,
      list: [
        {
          imgUrl: require('./course1.jpg'),
          title: '实例妙解Sed和Awk的秘密',
          msg: '中级 · 330人在学',
          percent: '已学9%'
        },
        {
          imgUrl: require('./course2.jpg'),
          title: 'Java定时任务调度工具详解之Quartz篇',
          msg: '中级 · 330人在学',
          percent: '已学98%'
        },
        {
          imgUrl: require('./course3.jpg'),
          title: '星级评分原理与实战',
          msg: '中级 · 330人在学',
          percent: '已学96%'
        },
        {
          imgUrl: require('./course4.jpg'),
          title: '实例妙解Sed和Awk的秘密',
          msg: '中级 · 330人在学'
        },
        {
          imgUrl: require('./course5.jpg'),
          title: 'PHP消息队列实践',
          msg: '中级 · 330人在学'
        },
        {
          imgUrl: require('./course1.jpg'),
          title: '实例妙解Sed和Awk的秘密',
          msg: '中级 · 330人在学'
        },
        {
          imgUrl: require('./course2.jpg'),
          title: 'Java定时任务调度工具详解之Quartz篇',
          msg: '中级 · 330人在学',
          percent: '已学98%'
        },
        {
          imgUrl: require('./course3.jpg'),
          title: '星级评分原理与实战',
          msg: '中级 · 330人在学'
        },
        {
          imgUrl: require('./course4.jpg'),
          title: '实例妙解Sed和Awk的秘密',
          msg: '中级 · 330人在学'
        },
        {
          imgUrl: require('./course5.jpg'),
          title: 'PHP消息队列实践',
          msg: '中级 · 330人在学'
        }
      ]
    }
  },
  methods: {
    jumpPage: function () {
      this.$router.push('/detail')
    },
    loadMore: function () {
      if (this.loading) {
        return
      }
      this.loading = true
      setTimeout(() => {
        console.log('push------')
        for (let i = 0; i < 10; i++) {
          console.log('push------', i)
          const n = Math.floor(Math.random() * 5) + 1
          this.list.push({
            imgUrl: require(`./course${n}.jpg`),
            title: '实例妙解Sed和Awk的秘密',
            msg: '中级 · 330人在学',
            percent: `已学9${n}%`
          })
        }
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-course {
    .course {
      width: 335px;
      height: 72px;
      margin: 24px 20px 0 20px;
      display: flex;
      .left{
        width: 108px;
        height: 72px;
        img {
          width: 108px;
          height: 72px;
        }
      }
      .right {
        flex: 1;
        box-sizing: border-box;
        padding-left: 16px;
        .title{
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #2B333B;
          letter-spacing: 0;
          line-height: 17px;
        }
        .cont {
          margin-top: 8px;
          display: flex;
          .msg{
            font-family: PingFangSC-Light;
            font-size: 12px;
            color: #71777D;
            line-height: 14px;
          }
          .percent {
            margin-right: 8px;
            font-family: PingFangSC-Light;
            font-size: 12px;
            color: #20CC85;
            line-height: 14px;
          }
        }
      }
    }
  }
</style>
