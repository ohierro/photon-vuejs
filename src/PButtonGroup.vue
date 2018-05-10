<template lang="pug">
  .btn-group(v-on:bclick="buttonClick",@bclick="buttonClick",@click="onClick")
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
  created () {
    this.$on('bclick', section => {
      console.log('bclick called')

      for (let child of this.$children) {
        console.log(`child ${child.$options.name}`)
      }
    })
  },
  provide: function () {
    return {
      refresh: this.refresh
    }
  },
  // events: {
  //   bclick: 'buttonClick'
  // },
  methods: {
    refresh (obj) {
      console.log('call to refresh ' + obj)
      for (let child of this.$children) {
        if (child !== obj) {
          child.activate(false)
        } else {
          child.activate(true)
        }
      }
    },
    buttonClick () {
      console.log('bclicked')
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
