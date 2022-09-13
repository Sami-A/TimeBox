import { useState } from "react";

import Header from "./Header";
import Form from "./Form";

import styled from "@emotion/styled";
import { useAppSelector } from "storeHooks";

const BrainDump = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const brainDump = useAppSelector(({ timeBox }) => timeBox.brainDump);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  return (
    <BrainDumpContainer>
      <Header openDrawer={openDrawer} />
      <div className="notes">{brainDump.notes}</div>
      {isDrawerOpen && (
        <Form isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      )}
    </BrainDumpContainer>
  );
};

const BrainDumpContainer = styled.div`
  height: calc(100% - 12.7rem);

  .notes {
    height: calc(100% - 1.5rem);
    background-image: radial-gradient(rgba(0, 0, 0, 0.1) 2px, transparent 2px);
    background-size: 32.7px 32px;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export default BrainDump;
