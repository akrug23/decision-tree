<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card mb-2">
        <div class="card-body">
          <div class="card-title">{{ cardTitle }}</div>
          <p>{{ cardBody }}</p>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="d-flex gap-2 js-step-container">
        <div 
          v-for="(item, index) in steps" 
          :key="item.question" 
          :data-step-id="index" 
          class="card js-step-card" 
          :class="isLastCard(index)">
          <div class="card-body">
            <div class="card-title">{{ item.question }}</div>
            <step-btn 
              :answers="item.answers" 
              @next-step="loadStep" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import StepBtn from './StepBtn.vue';
import { settings } from '../vaiables/global-settings.js';
import StepBtn from './StepBtn.vue';
import getDecisionTreeData from '../modules/get-decision-tree-data.js';

export default {
  name: "BranchSteps",
  props: ['branch'],
  emits: ['results'],
  components: {
    StepBtn
  },
  computed: {
    cardTitle: function() {
      return settings.branchContent[this.branch].title;
    },
    cardBody: function() {
      return settings.branchContent[this.branch].body;
    }
  },
  created: function() {
    this.steps.push(getDecisionTreeData(this.branch, 1));
  },
  data() {
    return {
      steps: [],
      stepCounter: 1
    }
  },
  methods: {
    loadStep(btn, nextStep, lastStep) {
      let card = btn.closest(".js-step-card"),
        stepCount = parseInt(card.dataset.stepId) + 1,
        classes = card.classList,
        currentCard = false;

      if (classes.contains('current')) {
        classes.remove('current');
        currentCard = true;
      }

      if (!lastStep && currentCard) {
        console.log("Next step " + nextStep);

        this.steps.push(getDecisionTreeData(this.branch, nextStep));

      } else if (!lastStep && !currentCard) {
        console.log("Previous step " + nextStep);
 
        //reset steps to clicked
        this.steps.length = stepCount;
        this.stepCounter = stepCount;
        this.steps.push(getDecisionTreeData(this.branch, nextStep));
      } else {
        console.log("Load Results " + nextStep);
        this.$emit('results', nextStep);
      }
    },
    isLastCard(index) {
      if (this.steps.length - 1 === index) {
        return "current";
      }
    }
}

}
</script>

<style scoped>
  .d-flex.js-step-container {
    flex-wrap: wrap;
  }

  .card {
    flex: 1 1 49%;
  }
</style>