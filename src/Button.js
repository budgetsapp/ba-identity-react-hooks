import React from 'react';

export function Button({ text }) {
  return <button>Hello, {text || 'World'}!</button>;
}
