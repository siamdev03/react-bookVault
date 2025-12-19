import BookCard from "./BookCard";

export default function BookList({ books, onDelete, onUpdate }) {
  if (!books.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No books found 📭
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
