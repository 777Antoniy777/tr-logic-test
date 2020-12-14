<template>
  <div id="app" class="main">
    <div class="main__wrapper">
      <router-view
        :contacts="contacts"
        :addContact="addContact"
        :removeContact="removeContact"
        :addContactInfo="addContactInfo"
        :removeContactInfo="removeContactInfo"
      />
      <div class="main__decorate-wrapper"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      contacts: [
        {
          id: 1,
          content: [
            {
              id: 1,
              name: "Имя",
              value: "Иван"
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              id: 1,
              name: "Имя",
              value: "Андрей"
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              id: 1,
              name: "Имя",
              value: "Борис"
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
    },
    addContactInfo(id, title, value) {
      const contactInfo = this.contacts.find(elem => elem.id === id);
      const { content } = contactInfo;
      const contentLength = content.length;

      if (title.trim() && value.trim()) {
        const newContactInfo = {
          id: content[contentLength - 1].id + 1,
          name: title,
          value: value
        };

        content.push(newContactInfo);
      }
    },
    removeContactInfo(id, contentItemId) {
      const contactInfo = this.contacts.find(elem => elem.id === id);
      let { content } = contactInfo;
      const newContent = content.filter(elem => elem.id !== contentItemId);
      content = newContent;
    }
  }
};
</script>

<style lang="scss">
body {
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin: auto;
  text-align: center;
  color: #2c3e50;
}

.main {
  &__wrapper {
    display: flex;
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0 5px 20px 0 black;
  }

  &__decorate-wrapper {
    width: 50%;
    background-image: url("./assets/contact.svg");
    background-size: 150px 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #59a5e0;
  }
}
</style>
