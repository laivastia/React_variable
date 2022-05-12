import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const product = "Macbook";
const imgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png";
function handclick(e) {
  alert("곧 도착합니다.");
}

root.render(
  <>
    <h1>나만의 {product} 주문하기</h1>
    <img src={imgUrl}></img>
    <button onClick={handclick}>확인</button>
  </>
);
