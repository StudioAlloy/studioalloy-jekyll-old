<template>
  <div class="component-RenameMe">
    <h1>{{this.$store.state.title}}</h1>

    <div>
      <p>{{this.$store.state.description}}</p>

      <form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'RenameMe',
  data() {
    return {
      title: 'RenameMe'
    }
  }, // End data
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  // computed: {}, // Data with computed logic
  // methods: {}, // Are functions run on user actions example @click or on lifecycle hooks
  // watch: {}, // Watchs data, needs to have the same name as the data that is being watched


  // // Lifecycle hook. Check for more https://vuejs.org/v2/guide/instance.html or https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
  // beforeCreate() {}, 
  // created() {}, // Each time the app is created (once?)
  // beforeMount() {}, 
  // mounted() {}, // Be sure all elements are drawn. Here you can use normal Javascript to interact with your page
  // beforeUpdate() {}, 
  // update() {}, 
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // errorCaptured() {},
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.component-RenameMe {
  background-color: $brand-two;
  text-align: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>