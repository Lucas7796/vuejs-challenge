<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout align-start justify-center>
          <v-flex xs4 class="elevation-1 pa-3 ma-2">
            <v-list two-line>
              <v-subheader>
                FIRST LIST
              </v-subheader>
              <draggable v-model="columns[0]" group="people" >
                <template v-for="item in columns[0]">
                  <v-list-item :key="item.id">
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title" />
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </draggable>
            </v-list>
          </v-flex>
          <v-flex xs4 class="elevation-1 pa-3 ma-2">
            <v-list two-line>
              <v-subheader>
                SECOND LIST
              </v-subheader>
              <draggable v-model="columns[1]" group="people" >
                <template v-for="item in columns[1]">
                  <v-list-item :key="item.id">
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title" />
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </draggable>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },

  created () {
    console.log(this.columns)
  },

  data () {
    return {
      columns: [
        [
          {
            id: 1,
            title: 'task1'
          },
          {
            id: 2,
            title: 'task2'
          },
          {
            id: 3,
            title: 'task3'
          }
        ]
      ]
    }
  }
}
</script>
