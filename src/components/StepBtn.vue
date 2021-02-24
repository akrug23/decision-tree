<template>
  <div class="d-flex gap-2">
    <button v-for="(item, index) in answers" :key="index" @click="btnClick($event, item)" class="btn btn-outline-primary" type="button">{{ item.text }}</button>
  </div>
</template>

<script>
export default {
  name: 'StepBtn',
  emits: ['next-step'],
  props: ['answers'],
  methods: {
    btnClick(event, item) {
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
      this.$emit("next-step", clickedBtn, ids, lastStep);
    }
  }
}
</script>

<style>

</style>