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
              <draggable v-model="items">
                <template v-for="item in items">
                  <v-list-item :key="item.id" avatar>
                    <v-list-item-avatar>
                      <img :src="item.avatar">
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title" />
                      <v-list-item-sub-title v-html="item.subtitle" />
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
              <draggable v-model="items2">
                <template v-for="item in items2">
                  <v-list-item :key="item.id" avatar>
                    <v-list-item-avatar>
                      <img :src="item.avatar">
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title" />
                      <v-list-item-sub-title v-html="item.subtitle" />
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
  }
}
</script>
