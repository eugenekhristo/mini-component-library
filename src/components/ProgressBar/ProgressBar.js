/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--radius': '4px',
    '--padding': 0,
  },
  medium: {
    '--height': '12px',
    '--radius': '4px',
    '--padding': 0,
  },
  large: {
    '--height': '24px',
    '--radius': '8px',
    '--padding': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={SIZES[size]}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ ...SIZES[size], '--width': value + '%' }} value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
