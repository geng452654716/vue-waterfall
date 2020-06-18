<template>
  <div class="dom">
    <button @click="onreset">重置数据</button>
    <waterfall
      :loading="true"
      :topInterval="20"
      @load="load"
      :finished="finished"
      ref="waterfall"
    >
      <waterfall-silde
        v-for="(item, index) in waterfallData"
        :key="index"
        :imgs="item.imgs"
        prefetch
      >
        <div class="grid-item" @click="handleClick(item)">
          <p class="said" v-if="item.said">{{ item.said }}</p>
          <div class="viewers" v-if="item.imgs">
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
            <p class="list" v-for="describe in item.describe" :key="describe">
              {{ describe }}
            </p>
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
      waterfallData: [],
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
      this.page++
      if (this.page > 10) {
        this.finished = true
      }
      let mock = [
        {
          imgs: [
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
      this.waterfallData.push(...mock.sort(() => Math.random() - 0.5))
    },
    // 重置数据
    onreset() {
      this.page = 1
      this.finished = false
      this.waterfallData = []
      this.$refs.waterfall.reset()
      this.getData()
    },
    getData() {
      this.waterfallData = [
        {
          imgs: [
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1052131196,1689306403&fm=26&gp=0.jpg',
            'http://n.sinaimg.cn/sinacn/w600h600/20180222/bf4c-fyrswmu7949822.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592483696758&di=88d7d4188d905b94d5cad914a68aec66&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn14%2F274%2Fw640h434%2F20180723%2Fb828-hftenhy9380802.jpg'
          ],
          title: '二哈为什么不能当警犬？',
          said:
            '二哈不能当警犬的最大的原因是也许在执行任务中与犯罪分子达成共识！',
          avatar: require('./img/img4.jpg'),
          name: '大哈',
          describe: ['我是二哈我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2124915863,554082401&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2703126199,2378852978&fm=26&gp=0.jpg'
          ],
          title: '二哈是真傻还是假傻',
          avatar: require('./img/img5.jpg'),
          name: '二哈',
          describe: ['我拆家我骄傲']
        },
        {
          imgs: [
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1063873711,3809085003&fm=26&gp=0.jpg'
          ],
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
    },
    handleClick(item) {
      this.$router.push({
        path: '/details',
        query: {
          img: item.avatar
        }
      })
    }
  },
  created() {
    this.getData()
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
