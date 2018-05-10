<template lang="pug">
  .content
    h2 Nav
    .row
      .left
      .right
        .window
          header
            p-toolbar(title="Header")
              p-button-group
                p-button(icon="home")
                p-button(icon="folder")
                p-button(icon="shuffle")
              p-button(icon="home",text="filters")
              p-button(icon="megaphone")
              //- a.nav-group-item
              //- span(class="icon icon-home") connors
          .window-content
            .pane-group
              .pane
                p sidebar
              .pane
                p main content
              //- p-nav
              //-   p-nav-group(title="Favourites")
              //-   p-nav-item(icon="home",text="home", @click="buttonClick('home')")
</template>

<script>
import PToolbar from '../src/PToolbar.vue'
import PButtonGroup from '../src/PButtonGroup.vue'
import PButton from '../src/PButton.vue'

export default {
    name: 'ExampleUI',
    components: { PToolbar, PButtonGroup, PButton }
}
</script>

<style>

</style>
