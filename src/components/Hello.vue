<template>
  <div class="hello">
    <button @click="toggleLang()">言語変更</button>
    <p v-lang.l1="{ what: 'ほげ' }"></p>
    <p v-lang.l2></p>
    <p v-lang.l3></p>
    <p v-lang.l4></p>
    <p v-lang.l5></p>
    <p v-lang.l6></p>
    <p v-lang.l7></p>
    <p v-lang.l8></p>
    <p v-lang.l9></p>
    <p v-lang.l10></p>
    <p v-lang.l11></p>
    <p v-lang.l12></p>
    <p v-lang.l13></p>
    <p v-lang.l14></p>
    <p v-lang.l15></p>
    <p v-lang.l16></p>
    <p v-lang.l17></p>
    <p v-lang.l18></p>
    <p v-lang.l19></p>
    <p v-lang.l20></p>
    <p v-lang.l21></p>
    <p v-lang.l22></p>
    <p v-lang.l23></p>
    <p v-lang.l24></p>
    <p v-lang.l25></p>
    <p v-lang.l26></p>
    <p v-lang.l27></p>
    <p v-lang.l28></p>
    <p v-lang.l29></p>
    <p v-lang.l30></p>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      toggleLang: function () {
        this.$language = this.$language === 'en' ? 'jp' : 'en'
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
