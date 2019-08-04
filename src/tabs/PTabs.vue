<template lang="pug">
  .tab-group
    slot
    .tab-item.tab-item-fixed
      span.icon.icon-plus

  //- div(v-slot:content)
    //- p-tab(title='first', active=true)
    //- p-tab(title='second')
    //- .tab-item Tab
    //-   .icon.icon-cancel.icon-close-tab
    //- .tab-item.active Tab active
    //-   .icon.icon-cancel.icon-close-tab
    //- .tab-item Tab
    //-   .icon.icon-cancel.icon-close-tab

</template>

<script>
import PTab from './Ptab.vue'

export default {
  name: 'PTabs',
  components: { PTab },
  provide: function () {
    return {
      refresh: this.refresh
    }
  },
  methods: {
    onclick () {
      if (this.refresh !== null) {
        this.refresh(this)
      }
      this.$emit('click')
    },
  refresh (obj) {
      // if (this.exclusive) {
        console.log('call to refresh ' + obj)
        for (let child of this.$children) {
          if (child !== obj) {
            child.activate(false)
          } else {
            child.activate(true)
          }
        }
      // }
    },
  },
}
</script>
