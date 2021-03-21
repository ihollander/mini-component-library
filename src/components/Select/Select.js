import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Dropdown>
        <SelectedValue>{displayedValue}</SelectedValue>
        <Icon id="chevron-down" strokeWidth={1} size={24} />
      </Dropdown>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectedValue = styled.span`
  padding-right: 16px;
`;

export default Select;
