<template>
  <section class="contacts">
    <!-- Contact Form -->
    <ContactForm :addContact="addContact" />

    <!-- Contact List -->
    <ContactList :contacts="contacts" :removeContact="removeContact" />
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
  width: 50%;
  display: flex;
  flex-direction: column;
}
</style>
