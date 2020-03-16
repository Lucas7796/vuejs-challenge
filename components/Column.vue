<template>
  <v-flex class="column-card elevation-16 ma-4">
    <v-list two-line>
      <v-subheader class="mb-4">
        <v-list-item-title
          v-html="column.title"
          class="column-title headline text-center"
        />
        <v-btn @click="deleteColumn(column.id)" icon ripple>
          <v-icon color="grey lighten-1">
            delete
          </v-icon>
        </v-btn>
      </v-subheader>
      <div class="d-flex align-center">
        <v-text-field
          v-model="itemDescription"
          @keyup.enter="registerWord()"
          label="Add Item"
          outlined
        />
        <v-btn
          @click="registerWord"
          x-large
          class="grey lighten-1 add-btn"
        >
          Add
        </v-btn>
      </div>
      <div v-if="column.items.length > 1" class="d-flex justify-center align-center">
        <span v-if="orderedBy === 'asc'" class="mr-2">A-Z</span>
        <span v-else class="mr-2">Z-A</span>
        <v-icon
          @click="orderItemByTitleDesc()"
          v-if="orderedBy === 'asc'"
          color="grey darken-1"
          size="25"
        >
          arrow_drop_down
        </v-icon>
        <v-icon
          @click="orderItemByTitleAsc()"
          v-else
          color="grey darken-1"
          size="25"
        >
          arrow_drop_up
        </v-icon>
      </div>
      <draggable v-model="column.items" group="items">
        <template v-for="(item, index) in column.items">
          <v-list :key="item.id">
            <v-list-item-group class="group-item">
              <v-list-item class="item-list">
                <v-list-item-content>
                  <v-list-item-title v-html="item.title" />
                  <span v-html="'Item ID: ' + item.id" class="id-label" />
                </v-list-item-content>
                <v-btn @click="deleteItem(index)" icon ripple>
                  <v-icon color="grey lighten-1">
                    delete
                  </v-icon>
                </v-btn>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </template>
        <v-flex class="id-label text-center">
          <span>Column ID: {{ column.id }}</span>
        </v-flex>
      </draggable>
    </v-list>
  </v-flex>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
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
      itemDescription: '',
      orderedBy: 'asc'
    }
  },

  computed: {
    itemIdCounter () {
      return this.$store.getters.getItemIdCounter
    }
  },

  methods: {
    registerWord () {
      if (this.itemDescription != null && this.itemDescription !== '') {
        this.column.items.push({
          id: this.itemIdCounter + 1,
          title: this.itemDescription
        })
        this.$store.dispatch('incrementItemIdCounter')
        this.itemDescription = ''
      }
    },
    deleteItem (index) {
      this.column.items.splice(index, 1)
    },
    deleteColumn (columnId) {
      this.$store.dispatch('deleteColumn', columnId)
    },
    orderItemByTitleDesc () {
      this.orderedBy = 'desc'
      this.column.items.sort((a, b) =>
        (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0)
      )
    },
    orderItemByTitleAsc () {
      this.orderedBy = 'asc'
      this.column.items.sort((b, a) =>
        (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0)
      )
    }
  }
}
</script>

<style scoped>

.add-btn {
  margin: 0 0 30px 20px;
}

.column-card {
  padding: 0 3px 3px 3px;
  width: 350px;
  display: inline-flex;
  justify-content: center;
}

.column-title {
  max-width: 200px;
  margin: auto;
}

.group-item {
  width: 20rem;
}

.item-list {
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  background-color: #F5F5F5;
}

.id-label {
  margin-top: 0;
  font-size: 12px;
}

* {
  color: #757575;
}

</style>
