<template>
  <div class="control-panel">
    <div class="options">
      <div class="options-title">
        Colors
      </div>

      <div
        class="option color"
        :style="`background-color: ${color.hex}`"
        :class="{'active': activeColorClass(color)}"
        v-for="color in colors"
        :key="color.id"
        @click="setActiveColor(color.hex)"/>
    </div>

    <div class="options">
      <div class="options-title">
        Brush sizes
      </div>

      <div
        class="option brush-size"
        :style="{
          width: size.size + 'px',
          height: size.size + 'px'
        }"
        v-for="size in brushSizes"
        :class="{'active': activeBrushClass(size)}"
        :key="size.id"
        @click="setActiveBrushSize(size.size)"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'colors',
      'brushSizes',
      'activeColor',
      'activeBrushSize'
    ])
  },

  methods: {
    ...mapActions({
      setActiveColor: 'setActiveColor',
      setActiveBrushSize: 'setActiveBrushSize'
    }),

    activeColorClass(color) {
      return this.activeColor === color.hex
    },

    activeBrushClass(brush) {
      return this.activeBrushSize === brush.size
    }
  }
}
</script>

<style>

</style>