<template>
  <li class="contact__item">
    <div class="contact__info-wrapper">
      <span class="contact__property">{{ item.name }}</span>
      <span class="contact__value">{{ item.value }}</span>
    </div>

    <div class="contact__buttons-wrapper">
      <button
        type="button"
        aria-label="Редактировать контакт"
      >
        <md-icon>edit</md-icon>
      </button>

      <button
        type="button"
        aria-label="Удалить контакт"
        @click.prevent="handleDeleteButtonClick"
      >
        <md-icon>delete</md-icon>
      </button>
    </div>

    <!-- Approve Delete -->
    <ApproveDelete />
  </li>
</template>

<script>
import ApproveDelete from "@/components/ApproveDelete";

export default {
  name: "ContactInfoItem",
  components: {
    ApproveDelete
  },
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid black;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      width: 50%;
      font-size: 14px;
      line-height: 16px;
      text-align: left;
    }
  }

  &__info-wrapper,
  &__buttons-wrapper {
    display: flex;
    width: 50%;
  }

  &__buttons-wrapper {
    justify-content: flex-end;

    button {
      width: 24px;
      height: 30px;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
