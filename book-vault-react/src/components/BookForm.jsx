
import { useState } from "react";
import { createBook } from "../services/api";

export default function BookForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    status: "Want to Read",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await createBook(form);
    onAdd(res.data);
    setForm({ title: "", author: "", category: "", status: "Want to Read" });
  };

  return (
    <form onSubmit={submitHandler} className="card bg-base-200 p-4 space-y-3">
      <input
        className="input input-bordered"
        placeholder="Book Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        className="input input-bordered"
        placeholder="Author"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <button className="btn btn-primary">Add Book</button>
    </form>
  );
}
