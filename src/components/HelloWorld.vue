<template>
  Olá, você está no HelloWorld

  <div>
    <button @click="pingMongo">Ping MongoDB</button>
    <p>{{ responseMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      responseMessage: '',
    };
  },
  methods: {
    async pingMongo() {
      try {
        const response = await axios.get('http://localhost:3000/connect');
        this.responseMessage = response.data;
        //const response = await this.$http.get('http://localhost:3000/connect');
        //this.responseMessage = response.data.message;

      } catch (error) {
        this.responseMessage = 'Error connecting to the backend, detalhes:'+ error;
      }
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/connect');
        this.responseMessage = response.data;
        //const response = await this.$http.get('http://localhost:3000/connect');
        //this.responseMessage = response.data.message;

      } catch (error) {
        this.responseMessage = 'Error connecting to the backend';
      }
    },
},
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
