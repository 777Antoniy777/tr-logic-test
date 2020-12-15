<template>
  <div class="approve">
    <p>{{ description }}</p>

    <div class="approve__buttons-wrapper">
      <button type="button" @click.prevent="handleAgreeButtonClick">
        <md-icon style="color: green;">check</md-icon>
      </button>

      <button
        type="button"
        v-if="
          buttonData !== 'edit' || item.name !== name || item.value !== value
        "
        @click.prevent="handleCloseButtonClick"
      >
        <md-icon style="color: red;">close</md-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Approve",
  props: {
    buttonData: String,
    description: String,
    name: String,
    value: String,
    item: Object,
    handleCloseButtonClick: Function,
    handleAgreeButtonClick: Function
  }
};
</script>

<style lang="scss" scoped>
.approve {
  display: flex;
  align-items: center;
  min-width: 180px;
  min-height: 30px;
  width: auto;
  margin-left: auto;
  padding: 5px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;

  p {
    margin: 0;
    font-size: 14px;
    line-height: 16px;
  }

  &__buttons-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;

    button {
      width: 30px;
      height: 30px;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;

      &:last-child {
        margin-left: auto;
      }
    }
  }
}
</style>
