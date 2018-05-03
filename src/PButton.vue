<template>
  <button class="btn btn-default" @click="onclick">
      <span v-if="hasIcon" :class="classObject"></span>
      {{text}}
    <slot>
  </button>
</template>

<script>
export default {
  name: 'PButton',
  props: ['icon', 'text'],
  methods: {
    onclick () {
      // console.log('button clicked')
      this.$emit('click')
      // $emit('click')
    }
  },
  computed: {
    hasIcon: function () {
      return this.icon !== undefined
    },
    hasText: function () {
      return this.text !== undefined
    },
    classObject: function () {
      let style = 'icon'
      if (this.hasIcon) {
        style += ` icon-${this.icon}`
      }
      if (this.hasText) {
        style += ' icon-text'
      }
      return style
    }
  }
}
</script>

<style>

</style>
