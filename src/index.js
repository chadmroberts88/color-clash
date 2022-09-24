import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserDataProvider from './context/UserDataContext';
import GameProvider from './context/GameContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<AuthProvider>
		<UserDataProvider>
			<GameProvider>
				<App />
			</GameProvider>
		</UserDataProvider>
	</AuthProvider>
);
