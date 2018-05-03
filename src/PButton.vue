<template>
  <button class="btn btn-default" :class="{ active: active }" @click="onclick">
      <span v-if="hasIcon" :class="classObject"></span>
      {{text}}
    <slot></slot>
  </button>
</template>

<script>
// import PButtonGroup from './PButtonGroup.vue'
export default {
  name: 'PButton',
  props: ['icon', 'text', 'active'],
  methods: {
    onclick () {
      // console.log('button clicked')
      this.$emit('bclick')
      console.log(this.$parent.$options.name)
      console.log(this.$parent)
      // this.$emit('bclick')
      if (this.$parent.$options.name === 'PButtonGroup') {
        console.log('call parent')
        this.$emit('bclick')
        this.$parent.$emit('bclick')
        this.$parent.$parent.$emit('bclick')
      }

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
