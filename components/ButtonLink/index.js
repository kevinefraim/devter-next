import Link from "next/link";

export default function ButtonLink({ children, onClick, path }) {
  return (
    <Link href={path}>
      <a>
        <button
          className="text-white bg-black text-base rounded-full cursor-pointer text-extrabold py-1 px-4 transition-opacity hover:opacity-[0.3]"
          onClick={onClick}
        >
          {children}
        </button>
      </a>
    </Link>
  );
}
