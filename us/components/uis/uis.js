// components/uis/uis.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    valess: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value:1111
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    valess: true,
    count: 1111,
    like: '/img/popular/like.png',
    likeactive: '/img/popular/likeactive.png',
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    like: function(event) {
      var valess = this.properties.valess;
      var count = this.properties.count;
      count = valess ? count - 1 : count + 1;
      this.setData({
        count: count,
        valess: !valess
      });
    }
  }
})