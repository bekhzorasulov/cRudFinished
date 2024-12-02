import { useEffect, useState } from "react";

function Modal({ todo, editedTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editedTodo({
      id: todo.id,
      title,
      description,
    });
    document.getElementById("my_modal_1").close();
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <label className="form-control mt-5 w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">Title:</span>
            </div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={title}
            />
          </label>
          <label className="form-control mt-5 w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Description:
              </span>
            </div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered mb-5"
              placeholder="Description"
              value={description}
            ></textarea>
          </label>
          <div className="modal-action">
            <button className="btn btn-success">Submit</button>
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById("my_modal_1").close()}
            >
              Close
            </button>{" "}
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Modal;
