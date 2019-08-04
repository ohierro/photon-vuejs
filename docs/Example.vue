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
              p-button-group(exclusive="true")
                p-button(icon="home")
                p-button(icon="folder")
                p-button(icon="shuffle")
              p-button(icon="megaphone")
              //- a.nav-group-item
              //- span(class="icon icon-home") connors
          .window-content
            .pane-group
              .pane
                p-nav
                  p-nav-group(title="Sites")
                  p-nav-item(icon="home", text="Home")
                  p-nav-item(icon="download", text="Downloaded")
                  p-nav-item(icon="mail", text="Email")
              .pane
                <table class="table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Kind</th>
                      <th>File Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                    
                    <tr>
                      <td>photon.css</td>
                      <td>CSS</td>
                      <td>28K</td>
                    </tr>
                  </tbody>
                </table>
              //- p-nav
              //-   p-nav-group(title="Favourites")
              //-   p-nav-item(icon="home",text="home", @click="buttonClick('home')")
</template>

<script>
import PToolbar from '../src/PToolbar.vue'
import PButtonGroup from '../src/PButtonGroup.vue'
import PButton from '../src/PButton.vue'
import PNav from '../src/navs/PNav.vue'
import PNavGroup from '../src/navs/PNavGroup.vue'
import PNavItem from '../src/navs/PNavItem.vue'

export default {
    name: 'ExampleUI',
    components: { PToolbar, PButtonGroup, PButton, PNav, PNavGroup, PNavItem }
}
</script>

<style>

</style>
