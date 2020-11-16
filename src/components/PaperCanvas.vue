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

      pathCreate(scope) {
        scope.activate()

        return new paper.Path({
          strokeColor: this.activeColor,
          strokeJoin: 'circle',
          strokeCap: 'round',
          strokeWidth: this.activeBrushSize
        })
      },

      createTool(scope) {
        scope.activate()
        return new paper.Tool()
      },

      mouseDown() {

        this.tool = this.createTool(this.scope);

        this.tool.onMouseDown = (event) => {

          this.path = this.pathCreate(this.scope);

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