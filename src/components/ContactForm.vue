<template>
  <div class="contacts__form-wrapper">
    <form
      class="contacts__form"
      action="#"
      method="POST"
      @submit.prevent="handleFormSubmit"
    >
      <div class="contacts__field-wrapper">
        <label for="name">Имя:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Введите имя"
          v-model="name"
        />
      </div>

      <button class="contacts__button" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    addContact: Function
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleFormSubmit() {
      this.addContact(this.name);

      this.name = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  &__form-wrapper {
    padding: 10px;
    border-bottom: 1px solid black;
  }

  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__field-wrapper {
    display: flex;
    align-items: center;
    margin-right: 20px;

    label {
      margin-right: 10px;
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
    padding: 5px 10px;
    background-color: lightskyblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
