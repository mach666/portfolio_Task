import { Container } from "react-bootstrap";
import books from "../assets/images/books.jpg";
import coding from "../assets/images/coding.jpg";
function Hobbies() {
  return (
    <Container className="hobbies">
      <h1>Hobbies</h1>
      <div>
        <img src={books} alt="Books"></img>
      </div>
      <div>
        <img src={coding} alt="Coding"></img>
      </div>
    </Container>
  );
}

export default Hobbies;
