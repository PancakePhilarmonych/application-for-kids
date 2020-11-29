<template>

  <div class="words-board">
    <div class="title">
      WORDS BOARD
    </div>

    <div class="random-word">
      <div
        v-for="(letter, letterId) in wWordArray"
        :key="letterId"
        :class="isActive(letterId)"
        class="letter"
        @click="click(letter, letterId)">
        <div class="text">
          {{ letter.toUpperCase()}}
        </div>
      </div>
    </div>

    <div class="word-completed">
      <div class="word" :class="completedClass">
        {{ wordJoin }}
      </div>
    </div>



    <div class="words-board-options">
      <template v-if="isCompleted">
        <div class="button button-green"  @click="next">
          NEXT
        </div>
      </template>
      <template v-else>
        <div class="button button-red" @click="clear">
          CLEAR
        </div>

        <div class="button button-yellow" @click="back">
            UNDO
        </div>
      </template>
    </div>

  </div>

</template>

<script>
export default {
  data: () => ({
    word: [],
    completed: 'word',
    wWrod: '',
    index: [],
    colors: [
      '#e55039',
      '#4a69bd',
      '#fbc531',
      '#78e08f'
    ],
    words: [
      'lemon',
      'onion',
      'tomato',
      'car',
      'home',
      'lamp',
      'human',
      'girl',
      'boy',
      'potato',
      'door',
      'panda',
      'tiger',
      'bear',
      'owl',
      'school',
      'piano',
      'bird',
      'clown',
      'brush',
      'soap',
      'cake',
      'pie',
      'pasta',
      'fish',
      'pizza',
      'box',
      'clock',
      'mirror',
      'cat',
      'dog',
      'mouse',
      'hamster',
      'corn'
    ]
  }),


  methods: {
    click(letter, index) {
      if(this.isCompleted) {
        return
      }

      this.word.push(letter.toUpperCase())
      this.index.push(index)
    },

    back() {
      this.word.pop()
      this.index.pop()
    },

    isActive(index) {
      return {'active' : this.index.includes(index)}
    },

    next () {
      const randomIndex = Math.round(Math.random() * this.words.length)
      this.wWrod = this.words[randomIndex]

      this.wWordArray.forEach((el, index) => {
        let j = Math.floor(Math.random() * index);
        [this.wWordArray[index], this.wWordArray[j]] = [this.wWordArray[j], this.wWordArray[index]];
      })

      this.clear()
    },

    clear() {
      this.word = []
      this.index = []
    },
  },

  created() {
    this.next()
  },


  computed: {
    wordJoin() {
      return this.word.join('')
    },

    randomColor() {
      return this.colors[Math.round(Math.random() * this.colors.length)]
    },

    wWordArray() {
      return this.wWrod.split('')
    },

    completedClass() {
      return { 'completed' : this.isCompleted }
    },

    isCompleted() {
      return this.word.join('').toLowerCase() === this.wWrod.toLowerCase()
    }
  }
}
</script>

<style>

</style>