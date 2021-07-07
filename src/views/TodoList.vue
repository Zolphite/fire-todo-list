<template>
  <div class="todo-list pt-2">
    <h1 class="py-3">Todo List</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoListItems: {
        0: {
          desc: 'Get food',
          time: '2012'
        },
        1: {
          desc: 'Get water',
          time: '2013'
        }
      },
    }
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<style>

</style>