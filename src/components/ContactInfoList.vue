<template>
  <div class="contact__list-wrapper">
    <ul class="contact__list">
      <!-- Contact Info Item -->
      <ContactInfoItem
        v-for="item in content"
        :key="item.id"
        :id="id"
        :item="item"
        :removeContactInfo="removeContactInfo"
        :editContactInfo="editContactInfo"
      />
    </ul>
  </div>
</template>

<script>
import ContactInfoItem from "@/components/ContactInfoItem";

export default {
  name: "ContactInfoList",
  components: {
    ContactInfoItem
  },
  props: {
    id: Number,
    content: Array,
    removeContactInfo: Function,
    editContactInfo: Function
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__list-wrapper {
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
