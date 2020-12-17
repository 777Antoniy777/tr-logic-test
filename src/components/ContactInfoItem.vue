<template>
  <li class="contact__item">
    <div
      class="contact__info-wrapper"
      v-if="buttonData !== 'edit' && buttonData !== 'undo'"
    >
      <span class="contact__property">{{ item.name }}:</span>
      <span class="contact__value">{{ item.value }}</span>
    </div>

    <div
      class="contact__fields-wrapper"
      v-if="buttonData === 'edit' || buttonData === 'undo'"
    >
      <input
        type="text"
        name="title"
        aria-label="Введите новое название"
        v-model="name"
        @input="handleInputChange"
      />

      <input
        type="text"
        name="value"
        aria-label="Введите новое значение"
        v-model="value"
        @input="handleInputChange"
      />
    </div>

    <div class="contact__buttons-wrapper">
      <button
        type="button"
        aria-label="Редактировать контакт"
        data-value="edit"
        data-description="Отменить редактирование?"
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
        :buttonData="buttonData"
        :description="description"
        :name="name"
        :value="value"
        :item="item"
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
    removeContactInfo: Function,
    editContactInfo: Function
  },
  data() {
    return {
      approveStatus: false,
      buttonData: "",
      description: "",
      name: this.item.name,
      value: this.item.value,
      stateArr: []
    };
  },
  mounted() {
    const data = this.$data;
    const dataObj = {};

    for (let key in data) {
      const value = data[key];

      if (key !== "stateArr") {
        dataObj[key] = value;
      }
    }

    this.stateArr.push(dataObj);
  },
  beforeUpdate() {
    const data = this.$data;
    const dataObj = {};

    for (let key in data) {
      const value = data[key];
      if (key !== "stateArr") {
        dataObj[key] = value;
      }
    }

    this.stateArr.push(dataObj);
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
      this.name = this.item.name;
      this.value = this.item.value;
    },
    handleCloseButtonClick() {
      if (this.buttonData === "edit") {
        this.buttonData = "undo";
        this.description = "Отменить изменения?";

        return;
      }

      if (this.buttonData === "undo") {
        this.buttonData = "edit";
        this.description = "Сохранить изменения?";

        return;
      }

      this.approveStatus = false;
      this.buttonData = "";
      this.description = "";
    },
    handleAgreeButtonClick() {
      if (this.buttonData === "delete") {
        this.removeContactInfo(this.id, this.item.id);
      }

      if (
        this.buttonData === "edit" &&
        (this.name !== this.item.name || this.value !== this.item.value)
      ) {
        this.editContactInfo(this.id, this.item.id, this.name, this.value);
      }

      if (this.buttonData === "undo") {
        this.name = this.item.name;
        this.value = this.item.value;
      }

      this.approveStatus = false;
      this.buttonData = "";
      this.description = "";
    },
    handleInputChange() {
      if (this.buttonData === "edit") {
        if (this.name !== this.item.name || this.value !== this.item.value) {
          this.description = "Сохранить изменения?";
        }

        if (this.name === this.item.name && this.value === this.item.value) {
          this.description = "Отменить редактирование?";
        }
      }
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
        padding-right: 5px;
        font-weight: 700;
      }
    }
  }

  &__info-wrapper,
  &__buttons-wrapper,
  &__fields-wrapper {
    display: flex;
    align-items: center;
  }

  &__info-wrapper {
    flex-wrap: wrap;
    max-width: 210px;
    width: 100%;
    word-break: break-all;
  }

  &__fields-wrapper {
    input {
      max-width: 104px;
      width: 100%;
      height: 30px;

      &:first-of-type {
        margin-right: 5px;
      }
    }
  }

  &__buttons-wrapper {
    justify-content: flex-end;
    margin-left: auto;

    button {
      width: 24px;
      height: 30px;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;

      &:nth-of-type(2) {
        margin-left: 5px;
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
