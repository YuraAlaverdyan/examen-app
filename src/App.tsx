import './App.css';
import { useAppSelector } from './app/types';
import Book from './Features/Book/Book';
import Navbar from './Features/Navbar/Navbar';
import StudentList from './Features/StudentList/StudentList';
import SubjectList from './Features/SubjectList/SubjectList';

function App() {
  const activePage = useAppSelector(state => state.navbar.activePage)
  return (
    <div className="App">
      <Navbar />
      {
        activePage === "Students"
        ?
        <StudentList />
        :
        activePage === "Subjects"
        ?
        <SubjectList />
        :
        <Book />
      }
    </div>
  );
}

export default App;
