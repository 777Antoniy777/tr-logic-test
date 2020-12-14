<template>
  <li class="contact__item">
    <div class="contact__info-wrapper">
      <span class="contact__property">{{ item.name }}</span>
      <span class="contact__value">{{ item.value }}</span>
    </div>

    <div class="contact__buttons-wrapper">
      <!-- Approve Delete -->
      <ApproveDelete
        v-if="approveStatus"
        :description="description"
        :handleCloseButtonClick="handleCloseButtonClick"
        :handleAgreeButtonClick="handleAgreeButtonClick"
      />

      <button
        type="button"
        aria-label="Редактировать контакт"
        data-value="edit"
        data-description="Сохранить?"
        @click.prevent="handleButtonClick"
      >
        <md-icon>edit</md-icon>
      </button>

      <button
        type="button"
        aria-label="Удалить контакт"
        data-value="delete"
        data-description="Точно удалить?"
        @click.prevent="handleButtonClick"
      >
        <md-icon>delete</md-icon>
      </button>
    </div>
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
  },
  data() {
    return {
      approveStatus: false,
      buttonData: "",
      description: ""
    };
  },
  methods: {
    handleButtonClick(evt) {
      const target = evt.target;
      const button = target.closest("button");
      const dataValue = button.dataset.value;
      const dataDescription = button.dataset.description;

      this.buttonData = dataValue;
      this.description = dataDescription;
      this.approveStatus = true;
    },
    handleCloseButtonClick() {
      this.approveStatus = false;
    },
    handleAgreeButtonClick() {
      if (this.buttonData === "delete") {
        this.removeContact(this.item.id);
      }

      this.approveStatus = false;
    }
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
    align-items: center;
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

      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
}
</style>
