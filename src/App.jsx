import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { nameState } from './state/state';
import { Cards } from './components/Cards';

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Form />
        <Routes>
          <Route path="/generate" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

function Form() {

  const [temp, setTemp] = useState("");
  const setName = useSetRecoilState(nameState);
  const navigate = useNavigate();

  function navigateToCards() {
    setName(temp);
    navigate('/generate');
  }

  return (
    <div className="container">
      <div className="form-section">
        <h1>Send a Birthday Wish</h1>
        <p>Enter the name of the person you want to send a birthday wish to.</p>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter a name" required onChange={(e) => {
            setTemp(e.target.value);
          }} />
        </div>
        <div className="form-group">
          <button className="generate-btn" onClick={navigateToCards}>Generate</button>
        </div>
      </div>
    </div>
  )
}


export default App
