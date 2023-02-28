import React from "react";
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<CookiesProvider> // 쿠키 provider
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CookiesProvider> / 쿠키 provider
	</React.StrictMode>,
	document.getElementById('root')
);