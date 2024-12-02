import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Create } from "./pages/create";
import { useEffect, useState } from "react";
import ReadTodo from "./pages/ReadTodo";

const getTodosFromLocalStorage = () => {
  const localStorageTodos = localStorage.getItem("todos");

  if (localStorageTodos) {
    return JSON.parse(localStorageTodos);
  }

  return [];
};

function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // delete
  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };

  const editedTodo = (t) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id == t.id) {
          return { ...t };
        } else {
          return todo;
        }
      });
    });
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Home
              todos={todos}
              deleteTodo={deleteTodo}
              editedTodo={editedTodo}
            />
          ),
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} todos={todos} />,
        },
        {
          path: "/read/:id",
          element: <ReadTodo todos={todos} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
