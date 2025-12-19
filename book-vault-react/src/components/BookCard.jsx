import { deleteBook, updateBook } from "../services/api";

export default function BookCard({ book, onDelete, onUpdate }) {
  const handleStatusChange = async (e) => {
    const updated = await updateBook(book._id, {
      status: e.target.value,
    });
    onUpdate(updated.data);
  };

  const handleDelete = async () => {
    await deleteBook(book._id);
    onDelete(book._id);
  };
  const handleRating = async (rating) => {
    const res = await updateBook(book._id, { rating });
    onUpdate(res.data);
  };

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p className="text-sm text-gray-500">Author: {book.author}</p>
        <p className="badge badge-outline">{book.category || "General"}</p>
        {/* ⭐ Rating */}
        <div className="rating rating-sm mt-2">
          {[1, 2, 3, 4, 5].map((r) => (
            <input
              key={r}
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked={book.rating === r}
              onChange={() => handleRating(r)}
            />
          ))}
        </div>
        <select
          className="select select-bordered mt-2"
          value={book.status}
          onChange={handleStatusChange}
        >
          <option>Want to Read</option>
          <option>Reading</option>
          <option>Completed</option>
        </select>

        <div className="card-actions justify-end mt-3">
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-error"
          >
            
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
