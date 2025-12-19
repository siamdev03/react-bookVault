import { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Filter from "./components/Filter";
import { fetchBooks } from "./services/api.js";
import Stats from "./components/Stats";

export default function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch books from backend
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await fetchBooks();
        setBooks(res.data);
      } catch (err) {
        console.error("Failed to fetch books", err);
      } finally {
        setLoading(false);
      }
    };
    loadBooks();
  }, []);

  // Add book
  const handleAddBook = (newBook) => {
    setBooks((prev) => [newBook, ...prev]);
  };

  // Delete book
  const handleDeleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book._id !== id));
  };

  // Update book
  const handleUpdateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((book) =>
        book._id === updatedBook._id ? updatedBook : book
      )
    );
  };

  // Filter logic
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (status === "" || book.status === status)
  );

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-6">

        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold">📚 BookVault</h1>
          <p className="text-gray-500">
            Track your personal library & reading progress
          </p>
        </header>

        {/* Add Book */}
        <div className="max-w-xl mx-auto">
          <BookForm onAdd={handleAddBook} />
        </div>

        {/* Filters */}
        <div className="max-w-3xl mx-auto mt-6">
          <Filter
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
          />
        </div>

        {/* Book List */}
        {loading ? (
          <div className="flex justify-center mt-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <BookList
            books={filteredBooks}
            onDelete={handleDeleteBook}
            onUpdate={handleUpdateBook}
          />
        )}
        <div className="max-w-5xl mx-auto">
            <Stats />
        </div>

      </div>
    </div>
  );
}
