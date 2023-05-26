import Parent from '@/components/parent'
import React from 'react'
import { createContext } from 'react';

export const Context = createContext('Default Value');

export default function context() {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <Parent />
    </Context.Provider>
  );
}
