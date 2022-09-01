import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<Todo>();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <span className="heading">todo list</span>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
};

export default App;
