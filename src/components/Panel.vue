<template>
  <div class="control-panel">
    <div class="options">
      <div class="options-title">
        Colors
      </div>

      <div
        class="option color"
        :style="brushColorStyle(color)"
        :class="brushColorClasses(color)"
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
        v-for="size in brushSizes"
        :style="brushSizeStyle(size)"
        :class="brushSizeClasses(size)"
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
    ]),

  },

  methods: {
    ...mapActions({
      setActiveColor: 'setActiveColor',
      setActiveBrushSize: 'setActiveBrushSize'
    }),

    brushSizeStyle(size) {
      return {
        width: size.size + 'px',
        height: size.size + 'px'
      }
    },

    brushColorStyle(color) {
      return `background-color: ${color.hex}`
    },

    brushSizeClasses(size) {
      return { 'active': this.activeBrushClass(size) }
    },

    brushColorClasses(color) {
      return {'active': this.activeColorClass(color)}
    },

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