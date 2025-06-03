<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    plus() {
      this.count++
    },
    minus() {
      this.count--
      if (this.count < 0) {
        this.count = 0
      }
    },

      }
    }
</script>

<template>
<h1>Счетчик: <span :class="{'red': count <= 3, 'green': count >= 5}">{{ count }}</span></h1>
<button type="button" @click="plus">+1</button>
<button type="button" @click="minus">-1</button>
</template>

<style scoped>
.red {
  color: red;
}
.green { 
  color: green;
}
</style>
