<template lang="pug">
  .section
    h1 Toolbar examples
    p-toolbar
        p-button(icon="home")
</template>

<script>
import PToolbar from '../src/PToolbar.vue'
import PButton from '../src/PButton.vue'

export default {
    name: 'ToolbarSamples',
    components: { PToolbar, PButton }
}
</script>

<style>

</style>
