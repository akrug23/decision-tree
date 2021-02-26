<template>
    <div>
        <!-- <div class="card" v-for='(item, index) in navData' :key="index">
            <div>{{ item.title }}</div>
            <div>{{ index }}</div>
            <button @click="clearData">Clear Data</button>
        </div> -->
        {{ resultIds }}
        <result-card v-for='(item, index) in resultIds' :key='index' :resultId="item"/>        
    </div>
</template>

<script>
// import axios from 'axios';
import ResultCard from './ResultCard.vue';

export default {
    name: 'Results',
    components: {ResultCard},
    props: ['resultIds'],
    data() {
        return {
            navData: []
        }
    },
//     mounted() {
//         axios
//             .get("https://jsonplaceholder.typicode.com/todos/")
//             .then(response => {
//                 this.navData = response.data;
//                 console.log(response.data);
//             })
//     },
//     updated() {
//         axios
//             .get("https://jsonplaceholder.typicode.com/posts/")
//             .then(response => {
//                 this.navData = response.data;
//                 console.log(response.data);
//             })
//     },
//     methods: {
//         clearData() {
//             this.navData = [];
//         }
//     }
}
</script>

<style>

</style>