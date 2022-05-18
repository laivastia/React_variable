function AppBet({ bet, onChange }) {
  return (
    <div className="App-bet">
      <span>배점</span>
      <input type="number" value={bet} min={1} max={9} onChange={onChange} />
      <span>배</span>
    </div>
  );
}

export default AppBet;
