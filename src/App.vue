<template>
  <disclosure v-if=" component == 'disclosure'" @disclosure-closed="nextComponent"/>
  <branch-choice v-else-if=" component == 'branch-choice'" @branch-choice="nextComponent"/>
  <branch-steps v-else-if=" (component == 'higher') || (component == 'k12')" @results="loadResults" :branch="component"/>
  <results v-if="showResults" :resultIds="resultIds" />
</template>

<script>
import Disclosure from './components/Disclosure.vue';
import BranchChoice from './components/BranchChoice.vue';
import BranchSteps from './components/BranchSteps.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: {
    Disclosure,
    BranchChoice,
    BranchSteps,
    Results
  },
  data() {
    return {
      component: 'disclosure',
      showResults: false,
      resultIds: []
    }
  },
  methods: {
    nextComponent(componentName) {
      console.log(componentName);
      this.component = componentName;
    },
    loadResults(results) {
      this.resultIds = [];
      this.showResults = true;
      results.forEach(item => this.resultIds.push(item));
    }
  }
}
</script>
