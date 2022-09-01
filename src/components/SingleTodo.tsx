import React from "react";
import { Todo } from "../model";
import { MdClose, MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos-single">
      {todo.completed ? (
        <s className="todos-single-text"> {todo.title}</s>
      ) : (
        <span className="todos-single-text">{todo.title}</span>
      )}
      <div>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          {todo.completed ? <MdClose /> : <MdDone />}
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
