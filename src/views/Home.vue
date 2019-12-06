<template>
  <div id="nav">
    <router-link to="/login">login</router-link> |
    <router-link to="/logup">logup</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style lang="scss">
  #nav {
    padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
  &.router-link-exact-active {
     color: #42b983;
   }
  }
  }
</style>