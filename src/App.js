import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Posts } from './components/Posts';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} exac> </Route>
            <Route path='Posts/:id' element={<Posts />} exac></Route>
            {/* <Route path="/" element={<Navigate replace to="/Home" />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
