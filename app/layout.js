'use client'
import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import { store } from './store';
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <NavBar></NavBar>
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  );
}
