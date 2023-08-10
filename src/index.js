import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavLink,BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import Login from './components/login';
import Home from './components/home';
import './App.css';
import { ToastContainer } from "react-toastify";

 import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ToastContainer
			position='top-right'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='light'
		/>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login name='manav' />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
