import Book from "../models/Book.js";

export const getStats = async (req, res) => {
  try {
    const books = await Book.find();

    const total = books.length;
    const wantToRead = books.filter(b => b.status === "Want to Read").length;
    const reading = books.filter(b => b.status === "Reading").length;
    const completed = books.filter(b => b.status === "Completed").length;

    const ratedBooks = books.filter(b => b.rating);
    const avgRating =
      ratedBooks.length === 0
        ? 0
        : (
            ratedBooks.reduce((sum, b) => sum + b.rating, 0) /
            ratedBooks.length
          ).toFixed(1);

    const ratingStats = [1, 2, 3, 4, 5].map(r => ({
      rating: r,
      count: books.filter(b => b.rating === r).length,
    }));

    res.json({
      total,
      wantToRead,
      reading,
      completed,
      completionRate:
        total === 0 ? 0 : Math.round((completed / total) * 100),
      avgRating,
      ratingStats,
    });
  } catch (err) {
    res.status(500).json({ message: "Stats error" });
  }
};
