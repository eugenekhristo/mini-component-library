import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderWidth': '1px',
    '--padding': '4px 0 4px 24px',
    '--fontSize': `${14 / 16}rem`,
    iconSize: 16,
    iconWidth: 1,
  },
  large: {
    '--borderWidth': '2px',
    '--padding': '8px 0 8px 36px',
    '--fontSize': `${18 / 16}rem`,
    iconSize: 24,
    iconWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ ...SIZES[size] }}>
      <IconWrapper style={{ '--size': SIZES[size].iconSize + 'px' }}>
        <Icon id={icon} size={SIZES[size].iconSize} strokeWidth={SIZES[size].iconWidth} />
      </IconWrapper>
      <VisuallyHidden>
        <label htmlFor={label}>{label}</label>
      </VisuallyHidden>
      <Input type="text" id={label} name={label} placeholder={placeholder} style={{ '--width': width + 'px' }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  position: relative;
  color: ${COLORS.gray700};

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: var(--borderWidth);
    background-color: ${COLORS.black};
    border-radius: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  padding: var(--padding);
  font-size: var(--fontSize);
  color: inherit;
  font-weight: 700;
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 4px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--size);
  height: var(--size);
  margin: auto;
`;

export default IconInput;
