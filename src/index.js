import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../public/css/icons.css';
// import '../public/css/styles.css';
// import '../public/css/tailwind.css';
// import '../public/css/uikit.css';

const LayoutFrontend = React.lazy(() =>
  import('./Components/Frontend/Layout/LayoutFrontend')
);
const LayoutBackend = React.lazy(() =>
  import('./Components/Admin/Layout/LayoutBackend')
);
const UserIndex = React.lazy(() => import('./Components/Admin/User/UserIndex'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LayoutFrontend>
                <Route path="/" element={<UserIndex />} />
              </LayoutFrontend>
            </React.Suspense>
          }
        />
        <Route
          path="/Admin"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LayoutBackend>
                <Route path="/" element={<UserIndex />} />
              </LayoutBackend>
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);