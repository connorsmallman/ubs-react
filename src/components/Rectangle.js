import React from 'react';
import styled from 'styled-components';

const Inner = styled.div`
  background: #333;
  height: ${props => props.height}px;
  left: ${props => props.x}px;
  position: absolute;
  top: ${props => props.y}px;
  width: ${props => props.width}px;
`;

export default function Rectange(props) {
  return (
    <Inner className='rectangle' {...props} />
  )
}