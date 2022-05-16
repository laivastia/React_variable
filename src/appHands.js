import { PrintHand } from "./Hand.js";

export function AppHands({ hand, otherHand }) {
  return (
    <div className="App-hands">
      <PrintHand>{hand}</PrintHand>
      <div class="App-versus">VS</div>
      <PrintHand>{otherHand}</PrintHand>
    </div>
  );
}
