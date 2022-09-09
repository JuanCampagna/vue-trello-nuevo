import * as types from './mutation-types'
import API from '@api'
import { toTypeString } from '@vue/shared'

export default {
  // Fetch via ajax de los paneles del usuario
  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST)

    API.getBoardsByUser(user)
      .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },

  // Fetch via AJAX de las listas asociadas a un panel
  fetchList ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST)

    API.getListsFromBoard(board)
      .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val()}))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  //Fetct via AJAX de las tareas de una lista
  fetchTasks ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST)

    API.getTasksFromList({ list })
      .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val()}))
      .catch(error => commit(types.FETCH_TASKS_FAILURE, { error }))
  },

  //Añadir un nuevo panel
  addBoard ({ commit }, { name }) {
    API.postBoard(name)
      .then((board) => commit(types.ADD_BOARD, { board }))
  },

  addColumn ({ commit }, { board, name }) {
    API.postList(board, name)
      .then((column) => commit(types.ADD_COLUMN, { column }))
  },

  addTask ({ commit }, { task, title }) {
    API.postTask(list, title)
      .then((task) => commit(types.ADD_TASK, { task }))
  },

  deleteTask ({ commit }, { taskId }) {
    API.deleteTask(taskId)
      .then(() => commit(types.DELETE_TASK, { taskId }))
  },
  
  markAsCompleted({ commit }, { task }) {
    API.completedTask(task.id)
      .then(() => commit(types.MARK_AS_COMPLETED, { task }))
  }
}