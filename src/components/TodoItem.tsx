import { Task } from "../types/types";

interface TodoItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export const TodoItem = ({ task, onToggle, onDelete }: TodoItemProps) => {
  return (
        <div key={task.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={task.id}
            name={task.name}
            checked={task.done}
            onChange={() => onToggle(task.id)}
            className={`mr-2 ${
                task.done ? "accent-green-500" : "accent-gray-500"
            }`}
          />
          <label
            htmlFor={task.id}
            className={`${
                task.done ? "line-through text-gray-500" : "text-black"
            }`}
          >
            {task.name}
          </label>
          <button
            onClick={() => onDelete(task.id)}
            className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none"
          >
            X
          </button>
        </div>
      )
};
