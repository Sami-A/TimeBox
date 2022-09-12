import { useState } from "react";

import Header from "./Header";
import Priority from "./Priority";
import Form from "./Form";

import styled from "@emotion/styled";

const TopPriorities = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  return (
    <TopPrioritiesContainer>
      <Header openDrawer={openDrawer} />
      <Priority openDrawer={openDrawer}/>
      {isDrawerOpen && (
        <Form isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      )}
    </TopPrioritiesContainer>
  );
};

const TopPrioritiesContainer = styled.div`
  height: auto;
  background: yellow;
`;

export default TopPriorities;
