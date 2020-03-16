<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout justify-center class="flex-column pa-12">
          <div class="d-flex flex-row justify-center">
            <v-text-field
              v-model="columnDescription"
              @keyup.enter="registerColumn()"
              label="Add Column"
              outlined
            />
            <v-btn
              @click="registerColumn()"
              x-large
              class="grey lighten-1 add-btn ml-4"
            >
              Add
            </v-btn>
          </div>
          <v-container class="text-left">
            <draggable v-model="columns" tag="div" group="columns" direction="vertical">
              <Column :column="column" v-for="column in columns" :key="column.id" />
            </draggable>
          </v-container>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Column from '@/components/Column'
import draggable from 'vuedraggable'

export default {
  components: {
    Column,
    draggable
  },

  data () {
    return {
      columnDescription: '',
      itemIdCounter: this.$store.getters.columnIdCounter
    }
  },

  computed: {
    columns: {
      get () {
        return this.$store.getters.getColumns
      },
      set (newValue) {
        this.$store.dispatch('setColumns', newValue)
      }
    }
  },

  methods: {
    registerColumn () {
      if (this.columnDescription != null && this.columnDescription !== '') {
        this.$store.dispatch('registerColumns', this.columnDescription)
      }
      this.columnDescription = ''
    }
  }
}
</script>

<style scoped>

</style>
