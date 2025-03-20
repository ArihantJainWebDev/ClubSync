import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_KEY

// if (!PUBLISHABLE_KEY) {
//   console.error('Missing Clerk Publishable Key')
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <ClerkProvider publicKey={PUBLISHABLE_KEY}> */}
      <App />
    {/* </ClerkProvider> */}
  </BrowserRouter>
);