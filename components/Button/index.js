import { colors } from "../../styles/theme";

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}> {children}</button>
      <style jsx>{`
        button {
          color: ${colors.white};
          background: ${colors.black};
          border: 0;
          font-size: 16px;
          border-radius: 9999px;
          cursor: pointer;
          font-weight: 800;
          padding: 10px 24px;
          transition: opacity 0.3s ease;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
