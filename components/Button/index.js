export default function Button({ children, onClick }) {
  return (
    <>
      <button
        className="text-white bg-black text-base rounded-full cursor-pointer text-extrabold py-1 px-4 transition-opacity hover:opacity-[0.3]"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
