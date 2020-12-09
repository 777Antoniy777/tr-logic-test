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
  },
  methods: {
    addContact(name) {
      const contactsLength = this.contacts.length;

      if (name.trim()) {
        const newContact = {
          id: this.contacts[contactsLength - 1].id + 1,
          content: [
            {
              name: "name",
              value: name
            }
          ]
        };

        this.contacts.push(newContact);
      }
    },
    removeContact(id) {
      this.contacts = this.contacts.filter(elem => elem.id !== id);
    }
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
    background-image: "../assets/logo.png";
    background-position: 0 0;
    background-repeat: no-repeat;
  }
}
</style>
