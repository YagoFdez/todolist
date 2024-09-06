import { useState } from "react";

interface TofoFormProps {
    onAddTask : (taskName: string) => void;
}

export const TodoForm = ({ onAddTask }: TofoFormProps) => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    if (nuevaTarea.trim() !== '') {
      onAddTask(nuevaTarea)
      setNuevaTarea('');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          className="border rounded px-2 py-1 w-full"
          placeholder="New task"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};
