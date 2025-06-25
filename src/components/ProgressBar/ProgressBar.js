/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--borderRadius': '4px',
    '--padding': 0,
    '--innerBorderRadius': 0,
  },
  medium: {
    '--height': '12px',
    '--borderRadius': '4px',
    '--padding': 0,
    '--innerBorderRadius': 0,
  },
  large: {
    '--height': '24px',
    '--borderRadius': '8px',
    '--padding': '4px',
    '--innerBorderRadius': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper style={SIZES[size]}>
      <Progress style={SIZES[size]} value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  overflow: hidden;
  padding: var(--padding);
`;

const Progress = styled.div`
  width: ${(props) => props.value + '%'};
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: var(--innerBorderRadius);
`;

export default ProgressBar;
