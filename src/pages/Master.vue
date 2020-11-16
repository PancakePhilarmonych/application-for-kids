<template>
  <div class="main-board">
    <panel/>
    <paper-canvas/>
  </div>
</template>

<script>
import PaperCanvas from '@/components/PaperCanvas'
import Panel from '@/components/Panel'

export default {
  name: 'Master',

  components: {
    PaperCanvas,
    Panel
  },

  data: () => ({
    buttons: ['Simple', 'Separate', 'Replicated'],
    single: true
  }),
}
</script>

<style>

</style>