<template>
  <div class="d-grid gap-2">
    <button v-for="(item, index) in answers" :key="index" @click="btnClick($event, item.next)" class="btn btn-outline-primary" type="button">{{ item.text }}</button>
  </div>
</template>

<script>
export default {
  name: 'StepBtn',
  emits: ['next-step'],
  props: ['answers'],
  methods: {
    btnClick(event, nextStep) {
      console.log(event.target.className);
      this.$emit("next-step", nextStep);
    }
  }
}
</script>

<style>

</style>