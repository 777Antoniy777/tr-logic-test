<template>
  <section class="contacts">
    <!-- Contact List -->
    <ContactList
      :contacts="contacts"
    />

    <div class="contacts__decorate-wrapper"></div>
  </section>
</template>

<script>
// @ is an alias to /src
import ContactList from "@/components/ContactList";

export default {
  name: "Home",
  components: {
    ContactList
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          content: [
            {
              name: "name",
              value: "Ivan"
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              name: "name",
              value: "Andrey"
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              name: "name",
              value: "Boris"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.contacts {
  display: flex;

  &__decorate-wrapper {
    width: 50%;
    background-image: "../assets/logo.png";
    background-position: 0 0;
    background-repeat: no-repeat;
  }
}
</style>
