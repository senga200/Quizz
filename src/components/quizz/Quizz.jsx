import "./Quizz.css";

function Quizz() {
  return (
    <div className="container">
      <h1>hello world</h1>
      <hr />
      <h2>question numéro 1</h2>
      <ul>
        <li>réponse 1</li>
        <li>réponse 2</li>
        <li>réponse 3</li>
        <li>réponse 4</li>
      </ul>
      <button>suivant</button>
      <div className="index">question 1 de 5</div>
    </div>
  );
}

export default Quizz;
