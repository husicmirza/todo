import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos-heading">Active Tasks</span>
        {todos.map((todo) =>
          !todo.completed ? (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ) : (
            ""
          )
        )}
      </div>
      <div className="todos remove">
        <span className="todos-heading">Compelated Tasks</span>
        {todos.map((todo) =>
          todo.completed ? (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default TodoList;
