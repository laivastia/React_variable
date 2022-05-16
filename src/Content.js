function Content() {
  return (
    <div class="Content App-box">
      <div class="Box-inner">
        <div class="App-hands">
          <div class="Hand">
            <img class="Hand-icon" src="rock.svg" alt="rock" />
          </div>

          <div class="App-versus">VS</div>

          <div class="Hand">
            <img class="Hand-icon" src="rock.svg" alt="rock" />
          </div>
        </div>

        <div class="App-bet">
          <span>배점</span>
          <input type="number" min="1" max="9" step="1" value="1" />
          <span>배</span>
        </div>

        <div class="App-history">
          <h2>승부기록</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
}
