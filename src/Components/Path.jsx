export default function Path({ prev, path }) {
  return (
    <div className="mb-8">
      <p className="text-black text-sm font-normal gap-2 inline">
        {prev}
        <span className="ms-1">/</span>
      </p>

      <span className="font-semibold text-opacity-100 ml-1">
        {path.slice(0, 25)}
      </span>
    </div>
  );
}
