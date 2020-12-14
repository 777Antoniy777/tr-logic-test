<template>
  <div class="contact__form-wrapper">
    <form
      class="contact__form"
      action="#"
      method="POST"
      @submit.prevent="handleFormSubmit"
    >
      <div class="contact__field-wrapper">
        <label for="title">Название:</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Введите название"
          v-model="title"
        />
      </div>

      <div class="contact__field-wrapper">
        <label for="value">Значение:</label>
        <input
          id="value"
          type="text"
          name="value"
          placeholder="Введите значение"
          v-model="value"
        />
      </div>

      <button class="contact__button" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactInfoForm",
  props: {
    id: Number,
    addContactInfo: Function
  },
  data() {
    return {
      title: "",
      value: ""
    };
  },
  methods: {
    handleFormSubmit() {
      this.addContactInfo(this.id, this.title, this.value);

      if (this.title && this.value) {
        this.title = "";
        this.value = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__form-wrapper {
    padding: 10px 47px;
  }

  &__field-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    label {
      margin-right: 10px;
      cursor: pointer;
    }

    input {
      min-width: 130px;
      max-width: 177px;
      width: 100%;
      height: 30px;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30px;
    width: 100%;
    margin-left: auto;
    padding: 5px 10px;
    background-color: lightskyblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
