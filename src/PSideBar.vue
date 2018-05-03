<template lang="pug">
  div(class="pane-sm sidebar")
    nav(class="nav-group")
      h5(class="nav-group-title") {{title}}
      slot
  //- <div class="pane-sm sidebar">
  //-               <nav class="nav-group">
  //-                 <h5 class="nav-group-title">Favorites</h5>
  //-                 <a class="nav-group-item active">
  //-                   <span class="icon icon-home"></span>
  //-                   connors
  //-                 </a>
</template>

<script>
export default {
  name: 'PSideBar',
  props: ['title']
}
</script>

<style>

</style>
