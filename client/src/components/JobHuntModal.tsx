import { SetStateAction, useState } from "react";
import { Modal, Button, Group, useMantineTheme } from "@mantine/core";
import styled from "styled-components";
import { JobHuntType } from "../typings";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  margin-bottom: 0.5rem;
  font-size: large;
  font-weight: bold;
`;
const ApplicationLink = styled.span`
  margin-bottom: 0.5rem;
`;
const Description = styled.span`
  margin-bottom: 0.5rem;
`;
const Status = styled.span`
  margin-top: 1rem;
`;

const DeleteIconContainer = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
`;

type Props = {
  modalOpened: boolean;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  jobHunt: JobHuntType;
};

const JobHuntModal = ({ modalOpened, setModalOpened, jobHunt }: Props) => {
  const theme = useMantineTheme();

  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      await axios.delete(`/jobhunts/${jobHunt.id}`);
      setModalOpened(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      size="lg"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      withCloseButton={false}
    >
      <Container>
        <Wrapper>
          <Title>{jobHunt.title}</Title>
          <ApplicationLink>{jobHunt.applicationLink}</ApplicationLink>
          <Description>{jobHunt.description}</Description>
          <Status>{jobHunt.status}</Status>
          <DeleteIconContainer>
            <DeleteIcon onClick={handleDelete} />
          </DeleteIconContainer>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default JobHuntModal;
