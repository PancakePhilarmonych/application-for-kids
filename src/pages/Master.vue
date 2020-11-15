<template>
<div class="main-board">
  <panel ref="panel" @clear="reset"></panel>
  <paper-canvas ref="childCanvas"></paper-canvas>
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

  methods: {
    reset() {
      this.$refs.childCanvas.reset();
    }
  },
}
</script>

<style>

</style>