<template>
  <div class="todo-list pt-2">
    <h3 class="py-3">
      Todo List
    </h3>
    <div class="btn btn-outline-primary float-end mx-5 mb-2">Create New Task</div>
    <table id="todo-list-table" ref="todo" class="table table-striped" style="width:100%">
        <thead>
          <tr>
            <th class="h4">Items</th>
            <th class="h4">Times</th>
            <th class="h4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in todoListItems" :key="item">
            <th class="todo-item px-5">{{item.desc}}</th>
            <th>{{item.time}}</th>
            <th class="action-item">
              <div class="btn btn-outline-success mx-2">Edit</div>
              <div class="btn btn-outline-danger mx-2">Delete</div>
            </th>
          </tr>
        </tbody>
    </table>
    <div class="btm-padding">
    </div>
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
        },
        2: {
          desc: 'Get water',
          time: '2013'
        },
        3: {
          desc: 'Find watch',
          time: '2015'
        },
        4: {
          desc: 'Get water',
          time: '2013'
        },
        5: {
          desc: 'Get water',
          time: '2013'
        },
        6: {
          desc: 'Get water',
          time: '2013'
        },
        7: {
          desc: 'Get water',
          time: '2013'
        },
      },
    }
  },
  mounted(){
    // this.$nextTick(funciton () {
    //   console.log(this.$refs.myid)
    // });
    // document.getElementById('todo-list-table').DataTable();
  },
  methods: {

  }
}
</script>

<style>
.todo-item{
  width: 55%;
  text-align: left;
}

.btm-padding {
  height: 100px;
}
</style>