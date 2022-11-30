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
  padding: 0.5rem;
  background-color: #fff1bd;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

  & > button {
    border: none;
    background: none;
  }
`;
