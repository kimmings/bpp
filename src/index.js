import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CourseProvider } from './store/context';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <CourseProvider>
      <App />
    </CourseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

