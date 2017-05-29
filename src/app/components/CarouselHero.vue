<template>
<div class='hero'>
  <transition :name='animBack' mode='out-in'>
  <a class='back' :href='link' :key='image'>
      <img :src='image'>
  </a>
  </transition>

  <transition :name='animFront' mode="out-in">
    <a class='front' :href='link' :key='image'>
      <img :src='image'>
    </a>
  </transition>
</div>
</template>

<script>
export default {
  mixins: [vcms.mixin],
  name: 'CarouselHero',
  data() {
    return {
      currentIndex: 0,
      nextIndex: 1,
    }
  },
  created() {
    this.startInterval()
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    startInterval() {
      this.interval = setInterval(() => {
        this.currentIndex ++
        if(this.currentIndex == this.items.length)
          this.currentIndex = 0
      }, this.duration)
    }
  },
  computed: {
    link() {
      if(!this.items[this.currentIndex]) return ''
      return this.items[this.currentIndex].link
    },
    image() {
      if(!this.items[this.currentIndex]) return ''
      return this.items[this.currentIndex].image
    },
    animBack() {
      switch(this.transition) {
        case 'fade':
          return ''
        case 'slide':
          return 'slidein'
      }
    },
    animFront() {
      switch(this.transition) {
        case 'fade':
          return 'fade'
        case 'slide':
          return 'slide'
      }
    }
  }
}
</script>

<style lang='scss'>
.hero {
  background-color: white;
  position: relative;
  overflow: hidden;
  max-height: 600px;
  min-width: 600px;

  img {
    width: 100%;
    height: 100%;
  }
  a {
    display: block;
  }
}

.back {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}
.front {
  z-index: 10;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.slide-enter {
  opacity: 1;
  z-index: 10;
}
.slide-leave-active {
  transition: transform 1s ease;
}
.slide-leave-to {
  transform: translateX(100%);
}

.slidein-enter-active {
  transition: transform 1s ease;
}
.slidein-enter {
  transform: translateX(-50%);
}
</style>