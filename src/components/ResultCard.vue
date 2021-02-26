<template>
    <div class="card">
        {{ resultId }}
        {{ navData.title }}
        <button @click="clearData">Clear Data</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ResultCard',
    props: ['resultId'],
    data() {
        return {
            navData: {},
            url: 'https://jsonplaceholder.typicode.com/todos/'
        }
    },
    mounted() {
        let apiUrl = this.url.concat(this.resultId);
        // let id = this.resultId;
        // let url = 'https://jsonplaceholder.typicode.com/todos/' + id;
        console.log("URL");
        console.log(apiUrl);

        // this.navData = await getData(apiUrl);
        // getData(apiUrl)
        //     .then(response => this.navData = response);

        axios
            .get(apiUrl)
            .then(response => {
                this.navData = response.data;
                console.log(this.resultId);
                console.log(this.navData);
            });
        
    },
    watch: {
        resultId: function() {
            console.log("watch");

            let apiUrl = this.url.concat(this.resultId);
            console.log("URL");
            console.log(apiUrl);

            axios
                .get(apiUrl)
                .then(response => {
                    this.navData = response.data;
                    console.log(this.resultId);
                    console.log(this.navData);
                });
        }
    },
}

// async function getData(url) {
//     return axios
//         .get(url)
//         .then(response => response.data);

// }
</script>

<style>

</style>