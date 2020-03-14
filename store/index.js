import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      columns: [{
        id: 1,
        title: 'column1',
        items: [
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
      },
      {
        id: 2,
        title: 'column2',
        items: [
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
            title: 'task4'
          }
        ]
      }]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
      getColumns (state) {
        return state.columns
      }
    }
  })
}

export default createStore
