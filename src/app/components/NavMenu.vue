<template>
  <div class='navmenu wrapper' :class='{invert}'>
    <!-- Company logo -->
    <Property prop='logo' class='logo'>
      <router-link :to='logo.link'>
        <img :src='logo.image'>
      </router-link>
    </Property>
  
    <!-- Menu items -->
    <Property prop='menus' type='nav' class='menus'>
      <router-link class='menu' v-for='m in menus' :to='m.link' :key='m'>
        {{m.text}}
      </router-link>
    </Property>
  
    <!-- Actions -->
    <Property prop='actions' type='nav' class='ui actions' :class='{lel:true}'>
      <router-link v-for='a in actions' :to='a.link' :key='a'>
        <i class='fa' :class='a.icon'></i>
      </router-link>
    </Property>
  </div>
</template>

<script>

export default {
  props: ['invert'],
  name: 'NavMenu',
  mixins: [vcms.mixin],
  computed: {
    logoSrc() {
      if(this.invert)
        return this.logo.invertedimage
      return this.logo.image
    }
  },
  components: window.components
}
</script>

<style lang='scss'>
.wrapper {
  max-width: 1250px;
  margin: auto;
  padding: 20px;
  position: relative;
}
.wrapper.invert {
  border-bottom: 1px solid white;
}

.logo {
  display: inline-block;
  margin-right: 70px;
}
img {
  width: 210px;
}

.menus {
  text-align: center;
  display: block;
  margin-top: 15px;
  
  @media screen and(min-width: 800px) {
    vertical-align: top;
    display: inline-block;
  }
}
.menu {
  padding: 0 20px;
  font-size: 16px;
  color: #574e4a;
  text-decoration: none;
}
.invert .menu {
  color: white;
}

.actions {
  position: absolute;
  right: 0;
  top: 38px;

  vertical-align: top;
  float: right;
}
.actions a {
  margin: 0 15px;
}
.actions i {
  color: #574e4a;
}
.invert .actions i {
  color: white;
}

.router-link-active {
  font-weight: 800;
}
</style>