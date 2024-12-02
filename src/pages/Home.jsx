import { Link } from "react-router-dom";
import { TrashIconSvg } from "../assets4/svg/TrashIcon";
import { MdEdit } from "react-icons/md";
import Modal from "../components/Modal";
import { useState } from "react";

export const Home = ({ todos, deleteTodo, editedTodo }) => {
  const [todoid, setTodoId] = useState(null);
  const [todo, setTodo] = useState(null);

  return (
    <div className="mx-auto mt-10 max-w-5xl">
      <ul className="grid grid-cols-3">
        <Modal todo={todo} editedTodo={editedTodo} />
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="card mb-5 w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                  <button
                    className="cart-delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <TrashIconSvg />
                  </button>
                  <h2 className="card-title">{todo.title}</h2>
                  <p>{todo.description}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-sm"
                      onClick={() => {
                        setTodoId(todo.id);
                        setTodo(todo);
                        document.getElementById("my_modal_1").showModal();
                      }}
                    >
                      <MdEdit />
                    </button>
                    <Link
                      to={`/read/${todo.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Home.propTypes = {
  todos: Array,
};
