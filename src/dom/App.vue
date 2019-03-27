<template>
  <div class="dom">
    <waterfall
      :width="330"
      :loading="true"
      @load="load"
      :finished="finished"
    >
      <waterfall-silde
        v-for="(item, index) in waterfallData"
        :key="index"
        :imgs="item.imgs"
        :prefetch="item.imgs? item.imgs.length === 1 : false"
      >
        <div class="grid-item">
          <p
            class="said"
            v-if="item.said"
          >{{ item.said }}</p>
          <div
            class="viewers"
            v-if="item.imgs"
          >
            <img
              v-for="(img, i) in item.imgs"
              :key="i"
              :src="img"
              class="img"
              :class="waterfallImgClass(item)"
            />
          </div>
          <div class="info">
            <p class="avatar">
              <img :src="item.avatar" />
              <span>{{ item.name }}</span>
            </p>
            <p
              class="list"
              v-for="(describe) in item.describe"
              :key="describe"
            >{{ describe }}</p>
          </div>
        </div>
      </waterfall-silde>
    </waterfall>
  </div>
</template>

<script>
import { waterfall, waterfallSilde } from '../vue-waterfall/index'

export default {
  components: {
    waterfall,
    waterfallSilde
  },
  data() {
    return {
      // 是否正在加载
      loading: false,
      // 是否加载完成
      finished: false,
      // 瀑布流数据
      waterfallData: [
        {
          imgs: [
            require('./img/img1.jpg'),
            require('./img/img2.jpg'),
            require('./img/img3.jpg')
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [require('./img/img6.jpg'), require('./img/img7.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [require('./img/img8.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img9.jpg'),
          name: '三哈',
          describe: ['什么都逃不过的我手掌']
        },
        {
          title: '二哈是真傻还是假傻',
          said:
            '二哈的拆家出了名的，被称为拆迁队队长，精力旺盛，它总是要玩、要跑、要跳，一哈顶三虎，三哈沉航母，五哈斗上帝，十哈创世纪，百花毁灭银河系，千哈称霸宇宙第一，所以一般能养哈士奇的人都是非富则贵！',
          avatar: require('./img/img10.jpg'),
          name: '四哈',
          describe: ['养只二哈欢乐多']
        },
        {
          imgs: [
            require('./img/img1.jpg'),
            require('./img/img2.jpg'),
            require('./img/img3.jpg')
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [require('./img/img6.jpg'), require('./img/img7.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [require('./img/img8.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img9.jpg'),
          name: '三哈',
          describe: ['什么都逃不过的我手掌']
        },
        {
          title: '二哈是真傻还是假傻',
          said:
            '二哈的拆家出了名的，被称为拆迁队队长，精力旺盛，它总是要玩、要跑、要跳，一哈顶三虎，三哈沉航母，五哈斗上帝，十哈创世纪，百花毁灭银河系，千哈称霸宇宙第一，所以一般能养哈士奇的人都是非富则贵！',
          avatar: require('./img/img10.jpg'),
          name: '四哈',
          describe: ['养只二哈欢乐多']
        },
        {
          imgs: [
            require('./img/img1.jpg'),
            require('./img/img2.jpg'),
            require('./img/img3.jpg')
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [require('./img/img6.jpg'), require('./img/img7.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [require('./img/img8.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img9.jpg'),
          name: '三哈',
          describe: ['什么都逃不过的我手掌']
        },
        {
          title: '二哈是真傻还是假傻',
          said:
            '二哈的拆家出了名的，被称为拆迁队队长，精力旺盛，它总是要玩、要跑、要跳，一哈顶三虎，三哈沉航母，五哈斗上帝，十哈创世纪，百花毁灭银河系，千哈称霸宇宙第一，所以一般能养哈士奇的人都是非富则贵！',
          avatar: require('./img/img10.jpg'),
          name: '四哈',
          describe: ['养只二哈欢乐多']
        },
        {
          imgs: [
            require('./img/img1.jpg'),
            require('./img/img2.jpg'),
            require('./img/img3.jpg')
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [require('./img/img6.jpg'), require('./img/img7.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [require('./img/img8.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img9.jpg'),
          name: '三哈',
          describe: ['什么都逃不过的我手掌']
        },
        {
          title: '二哈是真傻还是假傻',
          said:
            '二哈的拆家出了名的，被称为拆迁队队长，精力旺盛，它总是要玩、要跑、要跳，一哈顶三虎，三哈沉航母，五哈斗上帝，十哈创世纪，百花毁灭银河系，千哈称霸宇宙第一，所以一般能养哈士奇的人都是非富则贵！',
          avatar: require('./img/img10.jpg'),
          name: '四哈',
          describe: ['养只二哈欢乐多']
        },
        {
          imgs: [
            require('./img/img1.jpg'),
            require('./img/img2.jpg'),
            require('./img/img3.jpg')
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [require('./img/img6.jpg'), require('./img/img7.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [require('./img/img8.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img9.jpg'),
          name: '三哈',
          describe: ['什么都逃不过的我手掌']
        },
        {
          title: '二哈是真傻还是假傻',
          said:
            '二哈的拆家出了名的，被称为拆迁队队长，精力旺盛，它总是要玩、要跑、要跳，一哈顶三虎，三哈沉航母，五哈斗上帝，十哈创世纪，百花毁灭银河系，千哈称霸宇宙第一，所以一般能养哈士奇的人都是非富则贵！',
          avatar: require('./img/img10.jpg'),
          name: '四哈',
          describe: ['养只二哈欢乐多']
        }
      ],
      // 页码
      page: 1
    }
  },
  computed: {
    waterfallImgClass() {
      let classMap = {
        1: 'one',
        2: 'two',
        default: 'more'
      }
      return item => {
        return classMap[item.imgs.length] || classMap['default']
      }
    }
  },
  methods: {
    load() {
      this.page ++
      if (this.page > 10) {
        this.finished = true;
      }
      let mock = [
        {
          imgs: [
            require('./img/img1.jpg'),
            require('./img/img2.jpg'),
            require('./img/img3.jpg')
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [require('./img/img6.jpg'), require('./img/img7.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [require('./img/img8.jpg')],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img9.jpg'),
          name: '三哈',
          describe: ['什么都逃不过的我手掌']
        },
        {
          title: '二哈是真傻还是假傻',
          said:
            '二哈的拆家出了名的，被称为拆迁队队长，精力旺盛，它总是要玩、要跑、要跳，一哈顶三虎，三哈沉航母，五哈斗上帝，十哈创世纪，百花毁灭银河系，千哈称霸宇宙第一，所以一般能养哈士奇的人都是非富则贵！',
          avatar: require('./img/img10.jpg'),
          name: '四哈',
          describe: ['养只二哈欢乐多']
        }
      ]
      this.waterfallData.push(...mock.sort((a, b) => Math.random() - 0.5))
    }
  }
}
</script>

<style lang="less" scoped>
.dom {
  background-color: #efefef;
}
.waterfall {
  .grid-item {
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    border: 1px solid #000;
    .viewers {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow: hidden;
    }
    .img {
      object-fit: cover;
      &.one {
        width: 100%;
      }
      &.two {
        width: 140px;
        height: 140px;
      }
      &.more {
        width: 90px;
        height: 90px;
      }
    }
  }
  .said {
    line-height: 22px;
    margin-bottom: 30px;
    font-size: 14px;
    word-wrap: break-word;
    .bold {
      font-weight: 700;
    }
  }
  .info {
    .avatar {
      margin: 45px 0 20px;
      font-size: 16px;
      font-weight: 700;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 15px;
        vertical-align: middle;
      }
    }
    .list {
      color: #787878;
      line-height: 26px;
      font-size: 14px;
    }
  }
}
</style>

