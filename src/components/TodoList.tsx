import React from "react";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos-heading">Active Tasks</span>
      </div>
      <div className="todos remove">
        <span className="todos-heading">Compelated Tasks</span>
      </div>
    </div>
  );
};

export default TodoList;
