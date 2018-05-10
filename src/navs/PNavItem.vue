<template lang="pug">
  span(class="nav-group-item", @click="buttonClick") 
    span(:class="classObject")
    | {{text}}
</template>

<script>
export default {
  name: 'PNavItem',
  props: ['icon', 'text'],
  methods: {
    buttonClick () {
      this.$emit('click')
    }
  },
  computed: {
    classObject: function () {
      return `icon icon-${this.icon}`
      // let style = 'icon'
      // if (this.hasIcon) {
      //   style += ` icon-${this.icon}`
      // }
      // if (this.hasText) {
      //   style += ' icon-text'
      // }
      // return style
    }
  }
}
</script>

<style>

</style>
