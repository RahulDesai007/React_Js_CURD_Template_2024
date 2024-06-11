import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import FormTable from "./pages/FormTable"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/formtable" element={<FormTable/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
