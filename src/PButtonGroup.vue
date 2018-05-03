<template lang="pug">
  .btn-group(v-on:bclick="buttonClick()",@test="buttonClick",@click="onClick")
    slot
</template>

<script>
export default {
  name: 'PButtonGroup',
  data: function () {
    return {
      activeComponent: {}
    }
  },
  // events: {
  //   bclick: 'buttonClick'
  // },
  methods: {
    buttonClick () {
      console.log('button clicked')
      // console.log(`event ${JSON.stringify(event)}`)
      // console.log(`event.target ${event.target}`)
      // console.log(event)
      // event.target.active = true
      // this.activeComponent = event.target
    },
    onClick () {
      console.log('onClick')
      this.$emit('test')
    }
  }
}
</script>

<style>

</style>
