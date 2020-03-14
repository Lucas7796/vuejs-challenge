<template>
  <v-flex xs4 class="elevation-1 pa-3 ma-2">
    <v-list two-line>
      <v-subheader>
        {{ column.title }}
      </v-subheader>
      <div class="d-flex align-center">
        <v-text-field
          v-model="itemDescription"
          label="Add Item"
          outlined
        />
        <v-btn
          @click="registerWord"
          x-large
          class="grey add-btn"
        >
          Add
        </v-btn>
      </div>
      <draggable v-model="column.items" group="people">
        <template v-for="item in column.items">
          <ListItem :item="item" :key="item.id" />
        </template>
      </draggable>
    </v-list>
  </v-flex>
</template>

<script>
import ListItem from './ListItem'
import draggable from 'vuedraggable'

export default {
  components: {
    ListItem,
    draggable
  },

  props: {
    column: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      itemDescription: ''
    }
  },

  methods: {
    registerWord () {
      this.column.items.push({
        id: this.column.items.length + 2,
        title: 'taskefe1'
      })
    }
  }
}
</script>

<style scoped>

.add-btn {
  margin: 0 0 30px 20px;
}

</style>
