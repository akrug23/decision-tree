<template>
  <div class="row">
    <div class="col">
      <a class="card" @click="branchChoice('k12')">
        <div class="card-title">K-12 School</div>
      </a>
    </div>
    <div class="col">
      <a class="card" @click="branchChoice('higher')">
        <div class="card-title">Higher Education</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BranchChoice',
  emits: ['branch-choice'],
  methods: {
    branchChoice(branch) {
      this.$emit("branch-choice", branch);
    }
  }
}
</script>