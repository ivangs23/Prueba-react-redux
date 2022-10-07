import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import ListView from './pages/ListView/ListView';
import DetailView from './pages/DetailView/DetailView';

import store from './store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/detail-view/:id" element={<DetailView />} />
          <Route path="*" element={<h2>NOT FOUND</h2>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
