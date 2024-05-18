import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BlogProvider } from './contexts/BlogContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Template } from './pages/_template';
import { HomePage } from './pages/HomePage';
import { EntryViewPage } from './pages/EntryViewPage';
import { NewEntryPage } from './pages/NewEntryPage';
import { LatestPostRedirector } from './pages/LatestPostRedirector';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogProvider>

      <BrowserRouter>
        <Routes>
          {/* Template shows navbar and footer */}
          <Route path='/' element={<Template />}>
            {/* Shows ALL posts as read-only */}
            <Route index element={<HomePage />} />
            {/* Show individual post with edit toggle */}
            <Route path='/view/:id' element={<EntryViewPage />} />
            {/* Show a form to make a new post  */}
            <Route path='/create' element={<NewEntryPage />} />

            <Route path='/latest' element={<LatestPostRedirector />} />
          </Route>
        </Routes>
      </BrowserRouter>

      
    </BlogProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
