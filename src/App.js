import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar title="TextUtils" about="AboutTextUtils" />
      <Routes>
          <Route path="/" element={<TextArea heading="Enter Your Text to analyze"/>}>
          </Route>
          <Route path="/about" element={ <About />}>
          </Route>
        </Routes>
        </Router>
    </>
  );
}

export default App;
