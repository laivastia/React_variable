import { AppHands } from "./appHands";
import AppBet from "./appbet.js";
import { AppHistory } from "./appHistory";

export function AppBox({ Hand, otherHand, onChange, bet, gameHistory }) {
  return (
    <div className="Content App-box">
      <div className="Box-inner">
        <AppHands hand={Hand} otherHand={otherHand} />
        <AppBet onChange={onChange} bet={bet} />
        <AppHistory gameHistory={gameHistory} />
      </div>
    </div>
  );
}
