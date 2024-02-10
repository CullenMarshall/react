import Student from './Student.jsx';

function App() {
  return(

    <>
    <Student name="Spongebob" age={30} weight={100} isStudent={true}/>,
    <Student name="Noah" age={3} weight={35} isStudent={false}/>
    </>
  );
};

export default App;
