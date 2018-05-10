<template lang="pug">
  .content
    h2 Nav
    .row
      .left
      .right
        .window
          .window-content
            .pane-group
              p-nav
                p-nav-group(title="Favourites")
                p-nav-item(icon="home",text="home", @click="buttonClick('home')")
                p-nav-item(icon="record",text="status", @click="buttonClick('status')")   
                p-nav-item(icon="download",text="download", @click="buttonClick('download')")   
                p-nav-item(icon="folder",text="folder", @click="buttonClick('folder')") 
                p-nav-group(title="Network")
                p-nav-item(icon="home",text="home", @click="buttonClick('home')")
              .pane
                p This is window content 
                p {{msg}} 
</template>

<script>
import PNav from '../src/navs/PNav.vue'
import PNavGroup from '../src/navs/PNavGroup.vue'
import PNavItem from '../src/navs/PNavItem.vue'

export default {
    name: 'NavSamples',
    components: { PNav, PNavGroup, PNavItem },
    data: function () {
      return {
        msg: ''
      }
    },
    methods: {
      buttonClick (button) {
        this.msg = `${button} clicked`
      }
    }
}
</script>

<style>

</style>
