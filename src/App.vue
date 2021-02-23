<template>
  <disclosure v-if=" component == 'disclosure'" @disclosure-closed="nextComponent"/>
  <branch-choice v-else-if=" component == 'branch-choice'" @branch-choice="nextComponent"/>
  <branch-steps v-else-if=" (component == 'higher') || (component == 'k12')" :branchTitle="component"/>
</template>

<script>
import Disclosure from './components/Disclosure.vue';
import BranchChoice from './components/BranchChoice.vue';
import BranchSteps from './components/BranchSteps.vue';

export default {
  name: 'App',
  components: {
    Disclosure,
    BranchChoice,
    BranchSteps
  },
  data() {
    return {
      component: 'disclosure'
    }
  },
  methods: {
    nextComponent(componentName) {
      console.log(componentName);
      this.component = componentName;
    }
  }
}
</script>
