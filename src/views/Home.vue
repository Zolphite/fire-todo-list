<template>
  <div class="home">
    <h3 class="pt-2">Home</h3>
    <p>Welcome to the TODO list app. Please visit the todo list page from the nav bar if you are signed in.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['authUser'],
  mounted() {
    this.$router.push('Todo'); 
  }
}
</script>
