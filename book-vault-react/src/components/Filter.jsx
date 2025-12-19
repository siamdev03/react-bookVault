export default function Filter({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
      <input
        type="text"
        placeholder="Search by title..."
        className="input input-bordered w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="select select-bordered w-full md:w-48"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Reading">Reading</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}
