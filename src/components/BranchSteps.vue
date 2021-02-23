<template>
  <div class="card">
    <div class="card-title">{{ branchTitle }}</div>
  </div>
  <div v-for="(item, index) in steps" :key="index" class="card">
    <div class="card-body">
      <div class="card-title">{{ item.question }}</div>
      <step-btn v-bind:answers="item.answers"/>
    </div>
  </div>
</template>

<script>
import StepBtn from './StepBtn.vue';

export default {
  name: "BranchSteps",
  props: ['branchTitle'],
  components: {StepBtn},
  data() {
    return {
      steps: [
        {
          question: "How many doors do you need?",
          answers: [
            {
              text: "Two", 
              next: 2
            },
            {
              text: "Four", 
              next: 2
            }
          ]
        },
        {
          question: "Do you have something to tow?",
          answers: [
            {
              text: "Yes", 
              next: 3
            },
            {
              text: "No", 
              next: 4
            }
          ]
        }
      ]
    }
  }

}
</script>

<style>

</style>