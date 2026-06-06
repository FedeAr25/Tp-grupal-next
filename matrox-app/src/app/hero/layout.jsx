export default function Herolayout({ children }) {
  return (
    <div className="flex ">
      <button className="bg-white absolute">⬅️</button>
      <div className="w-2/12">holas</div>
      <div className="flex-1">{children}</div>;
    </div>
  );
}
