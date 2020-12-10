<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view
      :contacts="contacts"
      :addContact="addContact"
      :removeContact="removeContact"
    />
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
      ],
      currentContact: null
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

<style lang="scss">
body {
  background-color: lightblue;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
