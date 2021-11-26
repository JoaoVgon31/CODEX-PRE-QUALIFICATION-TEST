import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/flex.css';
import './styles/fonts.css';
import './styles/sizing.css';
import './styles/margin.css';
import './styles/border.css';
import './styles/padding.css';
import Routes from './routes';

ReactDOM.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
	document.getElementById('root')
);
