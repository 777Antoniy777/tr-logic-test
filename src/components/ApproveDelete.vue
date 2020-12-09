<template>
  <div class="contacts__delete-wrapper">
    <p>Точно удалить?</p>

    <div class="contacts__buttons-wrapper">
      <button type="button" @click.prevent="handleAgreeButtonClick">
        <md-icon style="color: green;">check</md-icon>
      </button>

      <button type="button" @click.prevent="handleCloseButtonClick">
        <md-icon style="color: red;">close</md-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApproveDelete",
  props: {
    deleteStatus: Boolean,
    handleCloseButtonClick: Function,
    handleAgreeButtonClick: Function
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  &__delete-wrapper {
    display: flex;
    align-items: center;
    max-width: 200px;
    min-height: 30px;
    width: 100%;
    margin-right: 15px;
    padding: 5px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 5px;

    p {
      margin: 0;
      font-size: 14px;
      line-height: 16px;
    }
  }

  &__buttons-wrapper {
    display: flex;
    align-items: center;

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
