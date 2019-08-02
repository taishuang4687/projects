<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    toScroll: {
      type: Function,
      default: function() {}
    },
    toTouchEnd: {
      type: Function,
      default: function() {}
    }
  },
  methods: {
    toIndex(y) {
      this.scroll.scrollTo(0, y);
    }
  },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    });
    this.scroll = scroll;
    scroll.on("scroll", pos => {
      this.toScroll(pos);
    });
    scroll.on("touchEnd", pos => {
      this.toTouchEnd(pos);
    });
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>