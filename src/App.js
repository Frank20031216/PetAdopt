import React,{useState} from 'react';
import { GlobalProvider, useGlobalState } from './components/GlobalState';
import PetInformationNode from './components/PetInformationNode';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

import Topbar from './components/Topbar';
import Home from './components/Home';
import Information from './components/Information';
import AddPetPage from './components/AddPetPage';

function App() {

  const { globalState, setGlobalState } = useGlobalState();
  const PetInformationRouteList = globalState.map(
    (pet) => (

      <Route key={pet.id}
        path={`/Information/id=${pet.id}`}
        element={<PetInformationNode id={pet.id} />}
      >
      </Route>

    )
  )

  return (
    <Router>
      <div class="App">
        <Topbar />
        <div key = {Math.random()}>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/Information" element={<Information />} />
            {PetInformationRouteList}
            <Route path="/AddPetPage" element={<AddPetPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
