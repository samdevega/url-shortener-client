<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style>
body {
  background-color: #e0fbfc;
  font-family: 'Arial', 'Helvetica', sans-serif;
  margin: 0;
}
h1 {
  color: #3d5a80;
  font-size: 2rem;
}
h2 {
  color: #3d5a80;
  font-size: 1.5rem;
}
label {
  padding: 1rem;
}
input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 300px;
}
button {
  background-color: #ee6c4d;
  border: 1px solid #ee6c4d;
  color: #f0f0f0;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem;
}
button:hover {
  background-color: #dd6446;
  border: 1pix solid #dd6446;
}
</style>
