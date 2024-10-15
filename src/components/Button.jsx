export default function Button({ children }) {
  return (
    <button className="px-4 py-2 text-xs md:text-base roudned-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
}
