import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Hello } from '../src';

function Play() {
	return <Hello name='Yusuf' />;
}

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Play />
	</React.StrictMode>,
);
