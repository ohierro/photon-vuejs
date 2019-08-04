<template lang="pug">
  .content
    h2 Tabs
    .row
        .left
          p Tabs components
          .doc-header Attributes
          table
            tr
              th Attribute
              th Description
              th Example
            tr
              td icon
              td Icon to use
              td
            tr
              td text
              td Text with the button
              td
            tr
              td active
              td Only when use in button group! Mark active button
              td
          .doc-header Events
          table
            tr
              th Event
              th Description
              th Example
            tr
              td click
              td When button it's clicked
              td
        .right
          .window
            p-tabs(@activate="activate", @newtab="onnewtab", @remove="onremove")
              p-tab(title='first', active=true)
                //- div Content of the first tab
              p-tab(title='second')
            .window-content
              p-pane(ref="firstTab")
                div Content of the first tab
              p-pane(ref="secondTab")
                div Content of the second tab
              //- div Content of the first tab
          //- .window-content
          //-   div Hello world
          //- .btn-group
          //- p-button(icon="home", @click="buttonClicked('Home')")
          //- p-button(icon="home", active="true" @click="buttonClicked('Home')")
          //- p-button(icon="home", text="with text" @click="buttonClicked('Home with text')")
          //- p-button(text="only text", @click="buttonClicked('Only text')")
          //- p Result: {{firstExample}}
    //- .row
    //-   .left
    //-     p Buttons can also be grouped
    //-   .right
    //-     p-button-group(id="buttonGroup")
    //-       p-button(icon="home", ref="buttonGroup")
    //-       p-button(icon="home", ref="buttonGroup")
    //-       p-button(icon="home", ref="buttonGroup")

    //- h3 Usage
    //- pre
    //-   code(v-text="sourcecode")
    //- h3 Usage
    //- pre
    //-   <p-button text="text"></p-button>
</template>

<script>
import PTabs from '../src/tabs/PTabs.vue'
import PTab from '../src/tabs/PTab.vue'
import PPane from '../src/PPane.vue'

export default {
    name: 'TabsSamples',
    components: {PTab, PTabs, PPane},
    methods: {
      activate(title) {
        if (title == 'first') {
          this.$refs.firstTab.visible = true
          this.$refs.secondTab.visible = false
        } else {
          this.$refs.firstTab.visible = false
          this.$refs.secondTab.visible = true
        }
        console.log(`activated ${title} tab`)
      },
      onnewtab () {
        console.log('new tab created')
      },
      onremove (title) {
        console.log(`removed ${title} tab`)
      }
    }
    // data () {
    //   return {
    //     sourcecode: 'p-button(icon="icon" text="text")',
    //     firstExample: 'Please, click on some button'
    //   }
    // },
    // methods: {
    //   buttonClicked (button) {
    //     this.firstExample = `${button} button clicked`
    //   }
    // }
}
</script>

<style>
.doc-header {
  font-size: 1.5em;
}

.doc-header p {
  font-size: 1.0em;
}

.window {
    position: relative;
    height: 300px;
    /* top: 0; */
    /* right: 0; */
    /* bottom: 0; */
    /* left: 0; */
    display: flex;
    flex-direction: column;
    background-color: #fd0505;
}
</style>
