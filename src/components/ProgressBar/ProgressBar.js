import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: "8px",
    padding: "0",
    radius: "4px",
  },
  medium: {
    height: "12px",
    padding: "0",
    radius: "4px",
  },
  large: {
    height: "24px",
    padding: "4px",
    radius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Invalid size passed to ProgressBar: ${size}`);
  }
  return (
    <Background
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding,
        "--radius": styles.radius,
      }}
    >
      <BarWrapper>
        <Bar
          value={value}
          style={{
            "--width": value + "%",
            "--height": styles.height,
          }}
        />
      </BarWrapper>
      <VisuallyHidden>{value} %</VisuallyHidden>
    </Background>
  );
};

const Background = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* used to hide border radius in Bar */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
