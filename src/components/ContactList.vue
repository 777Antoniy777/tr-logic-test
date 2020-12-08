<template>
  <div class="contacts__list-wrapper">
    <ul class="contacts__list">
      <!-- Contact Item -->
      <ContactItem
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </ul>
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
    contacts: Array
  }
};
</script>
