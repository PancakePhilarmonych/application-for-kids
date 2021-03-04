<template>
  <div class="canvas-wrapper">
    <div class="title">
      DRAWING BOARD
    </div>

    <div class="tools-board">
      <div class="btn" @click="reset">
        CLEAR BOARD
      </div>

      <div class="btn btn-yellow" @click="undo">
        UNDO
      </div>
    </div>

    <canvas id="canvas-one" class="canvas-style" @mousedown="mouseDown"/>
  </div>
</template>

<script>
import paper from 'paper'

import { onMounted, reactive } from 'vue'
import { mapState } from 'vuex';

  export default ({
    data: () => ({
      path: null,
      tool: null
    }),

    setup() {
      const state = reactive({
        scope: null,
      })

      return {state}
    },

    methods: {
      reset() {
        this.scope.project.activeLayer.removeChildren()
      },

      undo() {
        this.scope.project.activeLayer.lastChild
        ? this.scope.project.activeLayer.lastChild.remove()
        : console.log('Is Empty')

      },

      pathCreate() {
        return new paper.Path({
          strokeColor: this.activeColor,
          strokeJoin: 'circle',
          strokeCap: 'round',
          strokeWidth: this.activeBrushSize
        })
      },

      mouseDown() {
        this.scope.activate()
        this.tool = new paper.Tool()

        this.tool.onMouseDown = (event) => {
          this.scope.activate()

          this.path = this.pathCreate();
          this.path.add(event.point);
        }

        this.tool.onMouseDrag = (event) => {
          this.path.add(event);
        }

        this.tool.onMouseUp = (event) => {
          this.path.simplify();
          this.path.add(event.point);
          this.tool = null
        }
      }
    },

    computed: {
      ...mapState(['activeColor', 'activeBrushSize'])
    },

    mounted() {
      this.scope = new paper.PaperScope();
      this.scope.setup('canvas-one');
    }
  })
</script>