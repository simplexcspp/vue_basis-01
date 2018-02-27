<template>
  <div class="container">
      <h2>父组件</h2>
      <input type="text" v-model="myMsg">
      <div>
        <ul class="red">
          <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <child :send-msg="myMsg" :send-num="myNum" :send-obj="myObj"></child>
  </div>
</template>
<script>
import child from "./Child.vue";
export default {
  name: "f2",
  data() {
    return {
      myMsg: "This is father msg！",
      myNum: 123,
      myObj: [
        {
          id: 1,
          name: "jack"
        },
        {
          id: 2,
          name: "pps"
        }
      ]
    };
  },
  components: {
    child
  }
};
</script>
<style>

</style>
