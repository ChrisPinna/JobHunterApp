import styled from "styled-components";
import { Modal, Button, Group, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import { JobHuntState } from "../context/JobHuntContext";

const Container = styled.div``;
const Wrapper = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin-bottom: 1rem;
`;
const Description = styled.textarea`
  margin-bottom: 1rem;
`;
const HuntStatus = styled.select`
  margin-bottom: 1rem;
`;
const SubmitButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  width: 5rem;
  align-self: flex-end;
  &:hover {
    background-color: #dfdbdb;
    -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
  }
`;
type Props = {
  modalOpened: boolean;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateJobHuntModal = ({ modalOpened, setModalOpened }: Props) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [huntStatus, setHuntStatus] = useState("");
  const {jobHunts} = JobHuntState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newJobHunt = {
      title,
      link,
      description,
      status: huntStatus,
    };

    try {
      await axios.post("/jobhunts", newJobHunt);
      
    } catch (error) {
      console.log(error);
    }

    setModalOpened(false);
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
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Application Link"
              onChange={(e) => setLink(e.target.value)}
            />
            <Description
              placeholder="Description:"
              onChange={(e) => setDescription(e.target.value)}
            />
            <HuntStatus onChange={(e) => setHuntStatus(e.target.value)}>
              <option value="" hidden>
                Hunt Status
              </option>
              <option value="Not Started">Hunt Not Started</option>
              <option value="Started">Hunt Started</option>
              <option value="Ended">Hunt Ended</option>
            </HuntStatus>
            <SubmitButton type="submit">Add Hunt</SubmitButton>
          </Form>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default CreateJobHuntModal;
