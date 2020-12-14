<template>
  <li class="contact__item">
    <div class="contact__info-wrapper">
      <span class="contact__property">{{ item.name }}:</span>
      <span class="contact__value">{{ item.value }}</span>
    </div>

    <div class="contact__buttons-wrapper">
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
        v-if="item.id !== 1"
        @click.prevent="handleButtonClick"
      >
        <md-icon>delete</md-icon>
      </button>
    </div>

    <div class="contact__approve-wrapper" v-if="approveStatus">
      <!-- Approve -->
      <Approve
        :description="description"
        :handleCloseButtonClick="handleCloseButtonClick"
        :handleAgreeButtonClick="handleAgreeButtonClick"
      />
    </div>
  </li>
</template>

<script>
import Approve from "@/components/Approve";

export default {
  name: "ContactInfoItem",
  components: {
    Approve
  },
  props: {
    id: Number,
    item: Object,
    removeContactInfo: Function
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
        this.removeContactInfo(this.id, this.item.id);
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
    flex-wrap: wrap;
    min-height: 51px;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid black;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      font-size: 14px;
      line-height: 16px;
      text-align: left;

      &:first-child {
        padding-right: 10px;
        font-weight: 700;
      }
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

      &:nth-of-type(2) {
        margin-left: 10px;
      }
    }
  }

  &__approve-wrapper {
    width: 100%;
    margin-top: 10px;

    .approve {
      max-width: none;
    }
  }
}
</style>
