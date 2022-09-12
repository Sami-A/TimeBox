import Add from "svg/add";

import styled from "@emotion/styled";

type Props = { openDrawer: () => void };

export default function Header({ openDrawer }: Props) {
  return (
    <HeaderContainer>
      <h5>Top Priority</h5>
      <Add onPress={openDrawer} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  background-color: #ddd;
`;
