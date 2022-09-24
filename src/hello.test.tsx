import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hello } from './hello';

test('should renders', () => {
	render(<Hello />);

	expect(
		screen.getByRole('heading', {
			name: /hello world/i,
		}),
	).toBeTruthy();
});

test('should renders with props', () => {
	render(<Hello name='iamyuu' />);

	expect(
		screen.getByRole('heading', {
			name: /hello iamyuu/i,
		}),
	).toBeTruthy();
});
