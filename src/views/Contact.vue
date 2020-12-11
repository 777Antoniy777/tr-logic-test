<template>
  <div class="contact" v-if="currentContact">
    <h2 class="contact__title">
      Подробная информация контакта {{ currentContact.content[0].value }}
    </h2>

    <!-- Contact Info Form -->
    <ContactInfoForm :id="currentContact.id" :addContactInfo="addContactInfo" />

    <!-- Contact Info List -->
    <ContactInfoList :content="currentContact.content" />
  </div>
</template>

<script>
import ContactInfoList from "@/components/ContactInfoList";
import ContactInfoForm from "@/components/ContactInfoForm";

export default {
  name: "Contact",
  components: {
    ContactInfoList,
    ContactInfoForm
  },
  props: {
    contacts: Array,
    addContactInfo: Function
  },
  data() {
    return {
      currentContact: null
    };
  },
  mounted() {
    const id = +this.$route.params.id;

    this.currentContact = this.contacts.find(elem => elem.id === id);
  }
};
</script>

<style lang="scss" scoped>
.contact {
  max-width: 600px;
  width: 100%;
  min-height: 400px;
  margin: 0 auto;
  padding-top: 20px;
  background-color: lightgray;

  &__title {
    margin: 0;
    padding-bottom: 40px;
  }
}
</style>
