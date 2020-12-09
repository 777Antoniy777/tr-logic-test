<template>
  <li class="contacts__item">
    <router-link :to="{ name: 'Contact', params: { id: item.id } }">{{
      item.content[0].value
    }}</router-link>
    <!-- id="{{ val }}" -->
    <!-- to="/contact/:id" -->

    <div class="contacts__button-wrapper">
      <!-- Approve Delete -->
      <ApproveDelete
        v-if="deleteStatus"
        :deleteStatus="deleteStatus"
        :handleCloseButtonClick="handleCloseButtonClick"
        :handleAgreeButtonClick="handleAgreeButtonClick"
      />

      <button
        class="contacts__button"
        type="button"
        aria-label="Удалить контакт"
        @click.prevent="handleDeleteButtonClick"
      >
        <md-icon>delete</md-icon>
      </button>
    </div>
  </li>
</template>

<script>
import ApproveDelete from "@/components/ApproveDelete";

export default {
  name: "ContactItem",
  components: {
    ApproveDelete
  },
  props: {
    item: Object,
    removeContact: Function
  },
  data() {
    return {
      deleteStatus: false
    };
  },
  methods: {
    handleDeleteButtonClick() {
      this.deleteStatus = true;
    },
    handleCloseButtonClick() {
      this.deleteStatus = false;
    },
    handleAgreeButtonClick() {
      this.removeContact(this.item.id);

      this.deleteStatus = false;
    },
    setPersonalContactLink(id) {
      return `/contact/${id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70px;
    padding: 10px;
    border: 1px solid gray;

    a {
      padding-right: 20px;
      text-decoration: none;
      color: black;
    }
  }

  &__button-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  &__button {
    width: 24px;
    height: 30px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
