<script>
export default {
  data() {
    return {
      items: [],
      item: '',
      filter: ['все', 'купленные', 'некупленные']

    }
  },
  methods: {
    add() {
      this.items.push({name: this.item, bought: false})
      this.filter = 'некупленные'
    },
    remove(index) {
      this.items.splice(index, 1)
    },
    toggleBought(index) {
      this.items[index].bought = !this.items[index].bought
      if (this.items[index].bought) {
          this.filter = 'купленные'
      } else if (!this.items[index].bought) {
        this.filter = 'некупленные'
      } else {
        this.filter = 'все'
      }
    }


    }
  }
</script>

<template>
<div>
<title>список покупок</title>
<h1>Общее количество товаров: {{ items.length }}</h1>
<input type="text" placeholder="Введите название товара" v-model="item">
<button type="button" @click="add">Добавить</button>
<select v-model="filter">
  <option v-for="filter in filter" :key="filter">{{ filter }}</option>
</select>
<ul>
  <li v-for="(item, index) in items" :key="item"><span :class="{'bought': item.bought}">{{ item.name }}</span> <button type="button" @click="remove(index)">Удалить</button> <button type="button" @click="toggleBought(index)">Купить</button></li> 
</ul>
</div>
</template>

<style scoped>
.bought {
  text-decoration: line-through;
}
</style>
