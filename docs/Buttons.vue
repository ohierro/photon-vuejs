<template lang="pug">
  .content
    h2 Buttons
    .row
        .left
          p Button components can have icons, text or both
          p='<p-button icon="home" text="with text"></p-button>'
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
          //- .btn-group
          p-button(icon="home", @click="buttonClicked('Home')")
          p-button(icon="home", active="true" @click="buttonClicked('Home')")
          p-button(icon="home", text="with text" @click="buttonClicked('Home with text')")
          p-button(text="only text", @click="buttonClicked('Only text')")
          p Result: {{firstExample}}
    .row
      .left
        p Buttons can also be grouped
      .right
        p-button-group(id="buttonGroup")
          p-button(icon="home", ref="buttonGroup")
          p-button(icon="home", ref="buttonGroup")
          p-button(icon="home", ref="buttonGroup")

    //- h3 Usage
    //- pre
    //-   code(v-text="sourcecode")
    //- h3 Usage 
    //- pre
    //-   <p-button text="text"></p-button>
</template>

<script>
import PButton from '../src/PButton.vue'
import PButtonGroup from '../src/PButtonGroup.vue'

export default {
    name: 'ButtonSamples',
    components: {PButton, PButtonGroup},
    data () {
      return { 
        sourcecode: 'p-button(icon="icon" text="text")',
        firstExample: 'Please, click on some button'
      }
    },
    methods: {
      buttonClicked (button) {
        this.firstExample = `${button} button clicked`
      }
    }
}
</script>

<style>
.doc-header {
  font-size: 1.5em;
}

.doc-header p {
  font-size: 1.0em;
}
</style>
