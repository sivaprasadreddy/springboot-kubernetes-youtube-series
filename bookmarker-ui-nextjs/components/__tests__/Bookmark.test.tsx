// __tests__/Bookmark.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import BookmarkComponent from '../Bookmark';  
import { Bookmark } from '../../services/models';

const mockBookmark: Bookmark = {
  id: 1,  
  title: 'Test Bookmark',
  url: 'https://example.com',
  created_at: new Date('2023-11-25'),
  updated_at: new Date('2023-11-26')
};

test('renders bookmark component with correct title and link', () => {
  render(<BookmarkComponent bookmark={mockBookmark} />);
  
  // Check if the title is rendered
  const titleElement = screen.getByText(/Test Bookmark/i);
  expect(titleElement).toBeInTheDocument();

  // Check if the link is rendered with the correct URL and target
  const linkElement = screen.getByRole('link', { name: /Test Bookmark/i });
  expect(linkElement).toHaveAttribute('href', 'https://example.com');
  expect(linkElement).toHaveAttribute('target', '_blank');
});