import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      columns: [
      ],
      columnIdCounter: 0,
      itemIdCounter: 0
    },
    mutations: {
      setItemIdCounter (state, payload) {
        state.itemIdCounter = payload
      },
      setColumnIdCounter (state, payload) {
        state.columnIdCounter = payload
      },
      setColumns (state, payload) {
        state.columns = payload
      },
      deleteColumn (state, columnId) {
        state.columns = state.columns.filter((column) => {
          return column.id !== columnId
        })
      }
    },
    actions: {
      incrementItemIdCounter (context) {
        const payload = context.getters.getItemIdCounter + 1
        context.commit('setItemIdCounter', payload)
      },
      incrementColumnIdCounter (context) {
        const payload = context.getters.getColumnIdCounter + 1
        context.commit('setColumnIdCounter', payload)
      },
      registerColumns (context, title) {
        const columnID = context.getters.getColumnIdCounter
        context.getters.getColumns.push({
          id: columnID + 1,
          title,
          items: []
        })
        context.commit('setColumnIdCounter', columnID + 1)
      },
      setColumns (context, payload) {
        context.commit('setColumns', payload)
      },
      deleteColumn (context, columnId) {
        context.commit('deleteColumn', columnId)
      }
    },
    getters: {
      getColumns (state) {
        return state.columns
      },
      getColumnIdCounter (state) {
        return state.columnIdCounter
      },
      getItemIdCounter (state) {
        return state.itemIdCounter
      }
    }
  })
}

export default createStore
