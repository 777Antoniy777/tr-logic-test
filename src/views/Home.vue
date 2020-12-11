<template>
  <section class="contacts">
    <div class="contacts__content-wrapper">
      <!-- Contact Form -->
      <ContactForm :addContact="addContact" />

      <!-- Contact List -->
      <ContactList :contacts="contacts" :removeContact="removeContact" />
    </div>
    <div class="contacts__decorate-wrapper"></div>
  </section>
</template>

<script>
// @ is an alias to /src
import ContactList from "@/components/ContactList";
import ContactForm from "@/components/ContactForm";

export default {
  name: "Home",
  components: {
    ContactList,
    ContactForm
  },
  props: {
    contacts: Array,
    addContact: Function,
    removeContact: Function
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  background-color: white;

  &__content-wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
  }

  &__decorate-wrapper {
    width: 50%;
    background-image: url("../assets/logo.png");
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
