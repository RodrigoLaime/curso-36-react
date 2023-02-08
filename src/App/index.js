import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import { EmptyTodos } from '../EmptyTodos'
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { ChangeAlert } from '../ChangeAlert';


function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();//useTodos es un hook

  return (

    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>


      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlert>
        //
      </ChangeAlert>
    </React.Fragment >

  );
}

export default App;
/* const autos = [
  {marca:'Peugeot', modelo:1000},
  {marca:'Renault', modelo:1000},
  {marca:'Citroen', modelo:1000},
  {marca:'Toyota', modelo:1000},
];

  
const marcas = autos.map(aut => {
  return aut.marca
})

const modelos = autos.map(aut => {
  return aut.modelo
})

// const marcaModelos = (aut) =>{
//   for (let i = 0; i < aut.length; i++) {
//       var element = aut[i];
//       console.log(`marcas: ${element.marca} Modelo: ${element.modelo},`)
//   }
// }
const marcaModelos = autos.map(aut => {
  console.log(`Marcas: ${aut.marca} Modelos: ${aut.modelo}`)
})

function mostrar(data){
  if(data === marcas){
      console.log(marcas)
  } else if(data === modelos){
      console.log(modelos)
  } else if(data === marcaModelos) {
      return marcaModelos
  }
}

mostrar(marcaModelos) */