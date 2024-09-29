function App() {
  return (
    <>
      {/* <p className="my-text">This is a piece of text. </p>
      <p className="text-primary bg-success-subtle mb-1 ms-2 me-4 mt-4">
        This is a piece of text.{" "}
      </p>
      <p className="text-primary bg-success-subtle m-4 p-3 fs-1 fw-lighter border rounded-circle">
        This is a piece of text.{" "}
      </p>
      <p className="text-primary bg-success-subtle mx-5 my-5 fs-5 w-40">
        This is a piece of text.{" "}
      </p> */}
      {/* mx (horixontal padding) my(vertical padding) and same for padding
        w-40(40% width) and same for heigth*/}
      {/* <button className="btn btn-primary"> Click </button> */}
      {/* <p className="border border-primary border-top border-2 rounded ">border example</p> */}
      <div className="m-3">
        <ul className="list-group list-group-numbered">
          <li className="list-group-item active">Home</li>
          <li className="list-group-item">Contact</li>
          <li className="list-group-item disabled">Product</li>
        </ul>
      </div>
      <div className="alert alert-primary" role="alert">Alert</div>
      <div className="spinner-border"></div>
    </>
  );
}

export default App;
