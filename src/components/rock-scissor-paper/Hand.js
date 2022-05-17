import HandIcon from "./handicon.js";

export function PrintHand({ children }) {
  return (
    <div className="Hand">
      <HandIcon className="Hand-icon" value={children} />
    </div>
  );
}
