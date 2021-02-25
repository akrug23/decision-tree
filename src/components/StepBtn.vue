<template>
  <div class="d-flex gap-2">
    <button v-for="(item, index) in answers" :key="index" @click="btnClick($event, item, index)" :class="{active:index == btnSelected}" class="btn btn-outline-primary" type="button">{{ item.text }}</button>
  </div>
</template>

<script>
export default {
  name: 'StepBtn',
  emits: ['next-step'],
  props: ['answers'],
  data() {
    return {
      btnSelected: undefined
    }
  },
  methods: {
    btnClick(event, item, index) {
      let clickedBtn = event.target,
        lastStep = false,
        ids = item.next;

      //is it the last step
      if ( item.solution !== undefined) {
        lastStep = true;
        ids = item.solution;
      }

      //add active class to clicked button
      this.btnSelected = index;

      //pass next step id to parent component
      this.$emit("next-step", clickedBtn, ids, lastStep);
    }
  }
}
</script>

<style>

</style>