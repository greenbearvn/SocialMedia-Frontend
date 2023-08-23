import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Layout from './Components/Admin/Layout/Layout';
import UserIndex from './Components/Admin/User/UserIndex/UserIndex';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<UserIndex />} />
          
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
