
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';

import Header from './movie component/Header/Header';


import Movielist from './movie component/Movielist/MovieList';
import Home from './movie component/Page/Home';

import Cinema from './movie component/movie details/Cinema';


function App() {
  return (
    <div className="App">
    
<Router>
<Header/>
<Routes>
<Route index element= {<Home/>}/>
  <Route path ="movie/:id" element={<Cinema/>}/>
  <Route path="movies/:type" element={<Movielist/>}/>
  <Route path ="/*" element={<h1>Error page</h1>}/> 
</Routes>

</Router>

    
    </div>
  );
}

export default App;
