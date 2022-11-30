import useSafeMap from "helper/useSafeMap";

import styled from "@emotion/styled";

type Props = {
  options: string[];
  value?: string;
  onChange: (selectedOption: any) => void;
};

const Select = ({ options, value, onChange }: Props) => {
  return (
    <SelectContainer>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {useSafeMap(options, (item: string) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  /* width: 20em; */
  height: 2.7em;
  line-height: 3;
  overflow: hidden;
  box-shadow: 1px 2px 10px -2px rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;

  &::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #ffeeb0;
    cursor: pointer;
    pointer-events: none;
    transition: 0.25s all ease;
  }
  &:hover::after {
    /* color: #23b499; */
  }

  /* Edit selected option */
  /* element  attr    attr value */
  & > select > option[selected="selected"] {
    /* background-color: #23b499; */
    /* color: #fff; */
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #fcf4d4;
    background-image: none;
    flex: 1;
    padding: 0 0.5em;
    color: #000;
    cursor: pointer;
    font-size: 1em;
    font-family: "Open Sans", sans-serif;
  }
  select::-ms-expand {
    display: none;
  }
`;

export default Select;
