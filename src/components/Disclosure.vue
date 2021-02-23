<template>
  <div class="disclosure">
    <input type="checkbox" name="disclosure" id="disclosure" v-model="disclosureSelected">
    <label for="disclosure">Agree to disclosure</label>
  </div>
  <button type="button" class="btn btn-primary" :disabled="!disclosureSelected" @click="closeDisclosure">Start</button>
</template>
<script>
export default {
    name: 'Disclosure',
    emits: ['disclosure-closed'],
    data() {
      return {
        disclosureSelected: false
      }
    },
    methods: {
      closeDisclosure() {
        this.$emit("disclosure-closed", "branch-choice");
      }
    }
}
</script>