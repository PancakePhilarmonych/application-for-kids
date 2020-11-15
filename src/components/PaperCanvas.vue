<template>
  <div class="canvas-wrapper">
    <div class="title">
      DRAWING BOARD
    </div>

    <div class="btn" @click="reset">
      CLEAR BOARD
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
      scope: null,
      tool: null
    }),

    methods: {
      reset() {
        this.scope.project.activeLayer.removeChildren()
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
        // create tool
        this.tool = this.createTool(this.scope);

        this.tool.onMouseDown = (event) => {
            // init path
          this.path = this.pathCreate(this.scope);
            // add point to path
          this.path.add(event.point);
        };

        this.tool.onMouseDrag = (event) => {
          this.path.add(event);
        };

        this.tool.onMouseUp = (event) => {

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