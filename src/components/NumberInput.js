import React from 'react';

export default function NumberInput(props) {
  return (
    <input type='number' pattern='*[0-9]' min='0' {...props} />
  )
}