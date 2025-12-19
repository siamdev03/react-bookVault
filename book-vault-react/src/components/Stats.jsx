import { useEffect, useState } from "react";
import { fetchStats } from "../services/api";
import ReadingCharts from "./ReadingCharts";
import RatingChart from "./RatingChart";
export default function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      const res = await fetchStats();
      setStats(res.data);
    };
    loadStats();
  }, []);

  if (!stats) return null;

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      <StatCard title="Total" value={stats.total} />
      <StatCard title="Want to Read" value={stats.wantToRead} />
      <StatCard title="Reading" value={stats.reading} />
      <StatCard title="Completed" value={stats.completed} />
      <StatCard
        title="Completion"
        value={`${stats.completionRate}%`}
      />
      <ReadingCharts stats={stats} />
      <RatingChart
        ratingStats={stats.ratingStats}
        avgRating={stats.avgRating}
        />
    </div>
    </>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="stat bg-base-100 shadow rounded-box">
      <div className="stat-title">{title}</div>
      <div className="stat-value text-primary">{value}</div>
    </div>
  );
}
