<template>
  <div
    class="waterfall-silde"
    :style="_style"
    ref="waterfallSilde"
    :class="{ show: init }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'waterfallSilde',
  inject: ['parent'],
  props: {
    // 需要预加载的图片数组
    imgs: {
      type: Array,
      default: () => []
    },
    // 是否需要预加载
    prefetch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      height: 0,
      top: 0,
      left: 0,
      resize: false,
      init: false
    }
  },
  computed: {
    _style() {
      let { width } = this.parent
      if (!this.init) {
        return {
          width: width + 'px'
        }
      }
      let style = {
        top: this.top + 'px',
        left: this.left + 'px'
      }
      if (width) {
        Object.assign(style, {
          width: width + 'px'
        })
      }
      return style
    },
    hide() {
      return !this.parent.init
    }
  },
  methods: {
    // 通知父组件添加子实例
    notificationParent() {
      this.parent.allChildren.push(this)
      this.parent.childrens.push(this)
    },
    // 刷新高度
    async getHeight() {
      try {
        await this.imgLoad()
        this.height = this.$refs.waterfallSilde.offsetHeight
      } catch (error) {
        console.error(error)
      }
    },
    // 图片不定高的时候预加载
    async imgLoad() {
      try {
        if (!this.prefetch) return Promise.resolve('跳过加载')
        if (!this.imgs.length) return Promise.resolve('跳过加载')
        return await Promise.all(
          this.imgs.map(item => {
            return this.everyImgLoad(item)
          })
        )
      } catch (error) {
        console.error(error)
      }
    },
    // 单张图片预加载
    everyImgLoad(imgSrc) {
      return new Promise((resolve, reject) => {
        let img = new Image()
        img.src = imgSrc
        img.onload = () => {
          img = null
          resolve({
            src: imgSrc,
            status: '图片加载成功'
          })
        }
        img.onerror = () => {
          img = null
          reject({
            src: imgSrc,
            status: '图片加载失败'
          })
        }
      })
    }
  },
  mounted() {
    this.notificationParent()
  },
  destroyed() {
    let index = this.parent.allChildren.indexOf(this)
    this.parent.allChildren.splice(index, 1)
  }
}
</script>

<style lang="less" scoped>
.waterfall-silde {
  position: absolute;
  transition: left 0.5s, top 0.5s;
  visibility: hidden;
}
.show {
  visibility: visible;
  animation: show-card 0.5s;
}
@keyframes show-card {
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
