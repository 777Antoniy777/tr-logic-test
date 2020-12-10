<template>
  <li class="contact__item">
    <span class="contact__property">{{ item.name }}</span>
    <span class="contact__value">{{ item.value }}</span>
  </li>
</template>

<script>
export default {
  name: "ContactInfoItem",
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid black;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      width: 50%;
      font-size: 14px;
      line-height: 16px;
    }
  }

  &__property {
    text-align: left;
  }

  &__value {
    text-align: right;
  }
}
</style>
