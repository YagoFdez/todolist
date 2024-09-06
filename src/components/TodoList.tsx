import { TodoListProps } from "../types/types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ tasks, handleTask, deleteTask }: TodoListProps) => {
  return (
    <div>
      {tasks.map((tarea) => (
          <TodoItem task={tarea} onToggle={handleTask} onDelete={deleteTask} />
      ))}
    </div>
  );
};
