import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    borderSize: 1,
    fontSize: 14 / 16,
    iconSize: 16,
    height: 24,
  },
  large: {
    borderSize: 2,
    fontSize: 18 / 16,
    iconSize: 24,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...rest }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        style={{
          "--width": width + "px",
          "--border-size": styles.borderSize + "px",
          "--font-size": styles.fontSize + "rem",
          "--height": styles.height + "px",
        }}
        {...rest}
      />
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  height: var(--height);
  width: var(--width);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-size) solid ${COLORS.black};
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
