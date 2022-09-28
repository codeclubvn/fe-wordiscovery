import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {enableLogging} from 'mobx-logger';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
);

enableLogging({
    action: true,
    reaction: false,
    transaction: true,
    compute: true
});