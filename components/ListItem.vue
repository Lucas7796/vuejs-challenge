<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-html="item.title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }

}
</script>

<style>

</style>
