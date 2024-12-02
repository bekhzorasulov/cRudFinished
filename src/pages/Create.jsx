import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Create = (props) => {
  const { setTodos } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      toast("Please complete all fields!");
      return;
    }

    e.preventDefault();
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          title,
          description,
        },
      ];
    });

    navigate("/");
  };

  return (
    <>
      <div className="mx-auto my-10 max-w-96">
        <h1 className="text-center text-3xl font-bold">Create your todo</h1>
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
              className="textarea textarea-bordered"
              placeholder="Description"
              value={description}
            ></textarea>
          </label>
          <button className="btn btn-primary btn-block my-5">Add</button>
        </form>
      </div>
    </>
  );
};

Create.propTypes = {
  setTodos: Object,
  todos: Array,
};
