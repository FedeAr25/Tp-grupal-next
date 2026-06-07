import Aside from "../components/Aside";

export default function Herolayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-900">
      <Aside />
      {children}
    </div>
  );
}
