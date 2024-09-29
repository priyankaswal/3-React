import styles from "./App.module.css";
import Container from "./Container";
function App() {
  return (
    <>
      <Container>
        <h1 className={styles.heading}>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, qui!</p>
      </Container>
      <Container>
        This is another para.
      </Container>
    </>
  );
}

export default App;
