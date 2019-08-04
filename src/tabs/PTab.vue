<template lang="pug">
  .tab-item(:class="{ active: active }", @click="onclick") {{title}}
      .icon.icon-cancel.icon-close-tab(@click="onremove")
      slot

</template>

<script>
export default {
  name: 'PTab',
  props: ['title','active'],
  inject: {
    refresh: { default: null },
    remove: { default: null }
  },
  methods: {
    onclick () {
      console.log(`${this.title} tab clicked`)

      if (this.refresh !== null) {
        this.refresh(this)
      }

      // this.$emit('click')
      // this.active = !this.active
    },
    onremove () {
      // this.$emit('remove', this.title)
      this.remove(this)
    },
    activate (active) {
      this.active = active
    }
  }
}
</script>

<style>

</style>
