function StudentList(props) { 
  if(!props.students){
    return <p>No Students</p>
  }
  return <ol> 
    {
    props.students.map(student => <li>{student}</li>)
    }
  </ol>
}

export default StudentList;
