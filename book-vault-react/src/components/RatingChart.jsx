import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RatingChart({ ratingStats, avgRating }) {
  return (
    <div className="card bg-base-100 shadow mb-8">
      <div className="card-body">
        <h2 className="card-title">
          ⭐ Ratings (Avg: {avgRating})
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ratingStats}>
            <XAxis dataKey="rating" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
