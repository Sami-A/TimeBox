import Edit from "svg/edit";

import styled from "@emotion/styled";

type Props = { openDrawer: () => void };

export default function Header({ openDrawer }: Props) {
  return (
    <HeaderContainer>
      <h5>Brain Dump</h5>
      <Edit onPress={openDrawer} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  background-color: #ddd;

  & > button {
    border: none;
    background: none;
  }
`;
