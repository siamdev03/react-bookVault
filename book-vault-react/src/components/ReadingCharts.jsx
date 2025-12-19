import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function ReadingCharts({ stats }) {
  const barData = [
    { name: "Want to Read", value: stats.wantToRead },
    { name: "Reading", value: stats.reading },
    { name: "Completed", value: stats.completed },
  ];

  const pieData = barData;

  const COLORS = ["#60a5fa", "#fbbf24", "#34d399"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      
      {/* Bar Chart */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">📊 Reading Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">🥧 Book Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
