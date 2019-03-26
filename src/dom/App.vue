<template>
  <div class="dom">
    <waterfall
      v-model="init"
      :width="330"
      :loading="true"
      @load="load"
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
// import waterfall from '../vue-waterfall/waterfall.vue'
// import waterfallSilde from '../vue-waterfall/waterfall-silde.vue'
// import { waterfall, waterfallSilde } from '../../lib/vue-waterfall.min'
import aaa from '../../lib/vue-waterfall'
// console.log(waterfall);
console.log(aaa);
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
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            'http://www.researchera.cn/Public/upload/2019-03-22/5c94acd6daa1b.gif'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        }
      ],
      // 瀑布流是否完成
      init: false
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
      this.waterfallData.push(
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'A同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            'http://www.researchera.cn/Public/upload/2019-03-22/5c94acd6daa1b.gif'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'X同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'Y同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'B同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        },
        {
          imgs: [
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/2290.20180614104655.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/8383.20180614104624.jpg',
            '//softlinkceshi.oss-cn-beijing.aliyuncs.com/pcimg/6912.20180614104519.jpg'
          ],
          title: '参加【爱科研】量化科研项目的初衷？',
          said:
            '身为一个数学专业的学生，之前并没有对金融方向有过多的了解，对量化方面也不太熟悉。考虑到研究生方向想走金融，就怀着学习的态度参加了此次科研训练。同时也为以后研究生走金融方向提前了解一些学科知识，并且研究一些学科相关增长自己的能力和见识。',
          avatar:
            '//www.researchera.cn/Public/upload/2019-03-25/5c984b59d56ac.jpg',
          name: 'L同学',
          describe: ['科研项目：量化科研—多因子选股研究策略', '专业：数学专业']
        }
      )
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

