<template lang="pug">
  .toolbar.toolbar-header
    h1(class="title", v-if="hasTitle") {{title}}
    div(class='toolbar toolbar-actions')
      slot
</template>

<script>
export default {
  name: 'PToolbar',
  props: ['title'],
  computed: {
    hasTitle: function () {
      return this.title !== ''
    }
  }
}
</script>

<style>

</style>


