import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";

function App(){

  return (

    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />

    </div>
  )
}

export default App;