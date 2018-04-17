<template>
  <div ref="scrollWrapper">
      <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.scrollWrapper) {
        return
      }
      this.scroller = new BScroll(this.$refs.scrollWrapper, {
        probeType: this.probeType,
        click: this.click
      })

      if (this.listenScroll) {
        let _self = this
        this.scroller.on('scroll', pos => {
          _self.$emit('scroll', pos)
        })
      }
    },
    disable() {
      this.scroller && this.scroller.disable()
    },
    enable() {
      this.scroller && this.scroller.enable()
    },
    refresh() {
      this.scroller && this.scroller.refresh()
    },
    scrollToElement() {
      this.scroller && this.scroller.scrollToElement.apply(this.scroller, arguments)
    },
    scrollTo() {
      this.scroller && this.scroller.scrollTo.apply(this.scroller, arguments)
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>