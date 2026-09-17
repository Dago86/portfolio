import { render, screen } from '@testing-library/react';
import App from './App';

test('book, newsletter and selected readings point to their intended destinations', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /Scopri il libro/ })).toHaveAttribute('href', 'https://moscabiancaedizioni.it/prodotto/nostalgia-e-rivoluzione/');
  expect(screen.getByRole('link', { name: /Leggi e iscriviti/ })).toHaveAttribute('href', 'https://mizunonoumeno.substack.com/');
  expect(screen.getByRole('link', { name: /Opinionismi su manga/ })).toHaveAttribute('href', 'https://mizunonoumeno.substack.com/p/opinionismi-su-manga-e-societa-giapponese');
  expect(screen.getByRole('link', { name: /Odissea Dark Souls/ })).toHaveAttribute('href', 'https://mizunonoumeno.substack.com/p/odissea-dark-souls');
  expect(screen.getByRole('link', { name: /diego141286@gmail.com/ })).toHaveAttribute('href', 'mailto:diego141286@gmail.com');
});

test('all local navigation has a destination and gallery images have accessible descriptions', () => {
  const { container } = render(<App />);
  container.querySelectorAll('a[href^="#"]').forEach(link => {
    expect(container.querySelector(link.getAttribute('href'))).toBeInTheDocument();
  });
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  const gallery = screen.getByRole('region', { name: /Cartoline da/ });
  expect(gallery.querySelectorAll('img')).toHaveLength(5);
  gallery.querySelectorAll('img').forEach(img => {
    expect(img.alt.length).toBeGreaterThan(20);
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('width');
    expect(img).toHaveAttribute('height');
  });
});
