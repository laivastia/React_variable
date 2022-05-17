export function AppHistory({ gameHistory }) {
  return (
    <div className="App-history">
      <h2>승부 기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}
