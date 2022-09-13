import { useState } from "react";

import Header from "./Header";
import Priority from "./Priority";
import Form from "./Form";

import styled from "@emotion/styled";
import { useAppSelector } from "storeHooks";

const TopPriorities = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const topPriority = useAppSelector(({ timeBox }) => timeBox.topPriority);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  return (
    <TopPrioritiesContainer>
      <Header openDrawer={openDrawer} />
      {new Array(3).fill(null).map((_, index) => (
        <Priority
          key={index}
          task={(topPriority[index]?.task) || ""}
          index={index}
          openDrawer={openDrawer}
        />
      ))}
      {isDrawerOpen && (
        <Form isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      )}
    </TopPrioritiesContainer>
  );
};

const TopPrioritiesContainer = styled.div`
  height: auto;
`;

export default TopPriorities;
