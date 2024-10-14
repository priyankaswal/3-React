function List({list}) {

  // if(!list || list.length == 0){
  //   return <h1>No Students here</h1>
  // }

  
  return (
    <>
      {!list || list.length === 0 ? <h2>No Students are here</h2> : <h2>Here are the students.</h2>}
      {list && list.length > 0 && <ol className="list-decimal ml-5">
        {list.map(item => <li key={item} >{item}</li>)}
      </ol>}

      <hr />
      {/* <ol className="list-decimal ml-5">
        {[<li>Priyank</li>, <li>Aman</li>, <li>Deppu</li>, <li>Sorav</li>]}
      </ol> */}
    </>
  );
}

export default List;
