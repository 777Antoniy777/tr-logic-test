<template>
  <div class="contacts__list-wrapper">
    <ul class="contacts__list" v-if="contacts.length">
      <!-- Contact Item -->
      <ContactItem
        v-for="item in contacts"
        :key="item.id"
        :item="item"
        :removeContact="removeContact"
      />
    </ul>

    <p v-else>Нет контактов :(</p>
  </div>
</template>

<script>
import ContactItem from "@/components/ContactItem";

export default {
  name: "ContactList",
  components: {
    ContactItem
  },
  props: {
    contacts: Array,
    removeContact: Function
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
    padding-bottom: 20px;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }
}
</style>
