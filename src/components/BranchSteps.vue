<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card mb-2">
        <div class="card-body">
          <div class="card-title">{{ cardTitle }}</div>
          <p>{{ cardBody }}</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="d-flex gap-2 js-step-container">
        <div v-for="(item, index) in steps" :key="index" :data-step-id="index" class="card js-step-card" :class="isLastCard(index)">
          <div class="card-body">
            <div class="card-title">{{ item.question }}</div>
            <div class="d-flex gap-2">
              <button v-for="(answer, answerIndex) in item.answers" :key="answerIndex" @click="btnClick($event, answer)" class="btn btn-outline-primary" type="button">{{ answer.text }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import StepBtn from './StepBtn.vue';
import { settings } from '../vaiables/global-settings.js';
import getDecisionTreeData from '../modules/get-decision-tree-data.js';

export default {
  name: "BranchSteps",
  props: ['branch'],
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
    btnClick(event, item) {
      console.log("button click");

      let clickedBtn = event.target,
        activeBtns = clickedBtn.parentNode.getElementsByClassName('active'),
        lastStep = false,
        ids = item.next;

      //is it the last step
      if ( item.solution !== undefined) {
        lastStep = true;
        ids = item.solution;
      }
      
      //remove active class from all buttons
      for ( let i = 0; i < activeBtns.length; i++ ) {
        activeBtns[i].classList.remove('active');
      }

      //add active class to clicked button
      clickedBtn.classList.add('active');

      //pass next step id to parent component
      this.loadStep(clickedBtn, ids, lastStep);
    },
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

<style>

</style>