<template>
  <div>
    <h3>Mis Paneles</h3>
    <div class="boards-collection">
      <input
        type="text"
        placeholder="Añade un nuevo panel..."
        v-model="boardName"
        @keyup.enter="add()"
      />
      <BoardCard
        v-for="(board,index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id">
      </BoardCard>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard.vue'

export default {
  name: 'HomeView',
  components: { BoardCard },
  data () {
    return {
      boardName: '',
      boards: [
        { id: '1', name: 'Tareas' },
        { id: '2', name: 'Lista de la compra' }
      ]
    }
  },
  methods: {
    add () {
      this.boards.push({ id: this.maxId(), name: this.boardName })
    },
    maxId () {
      let maximoId = 0
      this.boards.forEach(element => {
        if(element.id >= maximoId){
          maximoId = parseInt(element.id)+1
        }
      });
      return maximoId.toString()
    }
  }
}
</script>

<style scoped>
  h3 {
    text-align: left;
    margin: 1.5rem;
  }

  .boards-collection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: #546e7a;
    border: 2px solid #546e7a;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;
    margin: 0.5rem 1.5rem;
  }
  input:focus, input:active {
    background-color: #546e7a;
    color: white;
  }
  input::placeholder {
    color: white;
  }
</style>
