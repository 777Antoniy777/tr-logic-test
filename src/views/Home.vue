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
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 5px 20px 0 black;

  &__content-wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  &__decorate-wrapper {
    width: 50%;
    background-image: url("../assets/contact.svg");
    background-size: 150px 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #59a5e0;
  }
}
</style>
