<template>
  <li class="contacts__item">{{ item.content[0].value }}</li>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    item: Object
  }
};
</script>
