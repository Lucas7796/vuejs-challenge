<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout align-start justify-center>
          <Column
            v-for="column in columns"
            :key="column.title"
            :column="column"
          />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Column from '@/components/Column'

export default {
  components: {
    Column
  },

  data () {
    return {
    }
  },

  computed: {
    columns () {
      return this.$store.getters.getColumns
    }
  }
}
</script>
