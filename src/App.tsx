import { useState, useId } from 'react';
import './App.css'; // Asegúrate de que este archivo importe las directivas de Tailwind
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { Task } from './types/types';

function App() {

  const [tareas, setTareas] = useState<Task[]>([]);

  const baseId = useId();

  const addTask = (taskName: string): void => {
    const id = `${baseId}-${Date.now()}`;
    setTareas([...tareas, { id, name: taskName, done: false }]);
  };

  const handleTask = (tareaId: string): void => {
    setTareas(prevTareas =>
      prevTareas.map(tarea =>
        tarea.id === tareaId ? { ...tarea, done: !tarea.done} : tarea
      )
    );
  };

  const deleteTask = (tareaId:string): void => {
    setTareas(prevTareas => prevTareas.filter(tarea => tarea.id !== tareaId));

  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">TO DO</h1>
      <p className="mb-4">Add Task</p>
        <TodoForm onAddTask={addTask} />
        <TodoList tasks={tareas} deleteTask={deleteTask} handleTask={handleTask} />
    </div>
  );
}

export default App;
