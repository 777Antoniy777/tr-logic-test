<template>
  <li class="contacts__item">
    <router-link :to="{ name: 'Contact', params: { id: item.id } }">
      {{ item.content[0].value }}
    </router-link>

    <div class="contacts__button-wrapper">
      <button
        type="button"
        aria-label="Удалить контакт"
        data-value="delete"
        data-description="Точно удалить?"
        @click.prevent="handleButtonClick"
      >
        <md-icon>delete</md-icon>
      </button>
    </div>

    <div class="contacts__approve-wrapper" v-if="approveStatus">
      <!-- Approve -->
      <Approve
        :description="description"
        :handleCloseButtonClick="handleCloseButtonClick"
        :handleAgreeButtonClick="handleAgreeButtonClick"
      />
    </div>
  </li>
</template>

<script>
import Approve from "@/components/Approve";

export default {
  name: "ContactItem",
  components: {
    Approve
  },
  props: {
    item: Object,
    removeContact: Function
  },
  data() {
    return {
      approveStatus: false,
      buttonData: "",
      description: ""
    };
  },
  methods: {
    handleButtonClick(evt) {
      const target = evt.target;
      const button = target.closest("button");
      const dataValue = button.dataset.value;
      const dataDescription = button.dataset.description;

      this.buttonData = dataValue;
      this.description = dataDescription;
      this.approveStatus = true;
    },
    handleCloseButtonClick() {
      this.approveStatus = false;
    },
    handleAgreeButtonClick() {
      this.removeContact(this.item.id);

      this.approveStatus = false;
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
    flex-wrap: wrap;
    min-height: 70px;
    padding: 10px;
    border-bottom: 1px solid black;

    &:last-child {
      border-bottom: none;
    }

    a {
      max-width: 150px;
      padding-right: 20px;
      text-decoration: none;
      color: black;
    }
  }

  &__button-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;

    button {
      width: 24px;
      height: 30px;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  &__approve-wrapper {
    width: 100%;
    margin-top: 10px;

    .approve {
      max-width: 200px;
    }
  }
}
</style>
