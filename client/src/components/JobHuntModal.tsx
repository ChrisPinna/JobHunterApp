import { SetStateAction, useState } from "react";
import { Modal, Button, Group, useMantineTheme } from "@mantine/core";
import styled from "styled-components";
import { JobHuntType } from "../typings";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios";
import { JobHuntState } from "../context/JobHuntContext";

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

const IconsContainer = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin-bottom: 1rem;
`;
const EditModeDescription = styled.textarea`
  margin-bottom: 1rem;
`;
const HuntStatus = styled.select`
  margin-bottom: 1rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
`;
const SubmitButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  width: 5rem;
  &:hover {
    background-color: #dfdbdb;
    -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
  }
`;
const CancelButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  width: 5rem;
  background-color: red;
  color: white;
  margin-right: 10px;
  &:hover {
    background-color: #a40505;
    -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
  }
`;

type Props = {
  modalOpened: boolean;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  jobHunt: JobHuntType;
};

const JobHuntModal = ({ modalOpened, setModalOpened, jobHunt }: Props) => {
  const theme = useMantineTheme();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState(jobHunt.title);
  const [link, setLink] = useState(jobHunt.applicationLink);
  const [description, setDescription] = useState(jobHunt.description);
  const [huntStatus, setHuntStatus] = useState(jobHunt.status);
  const {jobHunts} = JobHuntState();


  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      await axios.delete(`/jobhunts/${jobHunt.id}`);
      setModalOpened(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updatedJobHunt = {
      title,
      link,
      description,
      status: huntStatus,
    };

    try {
      await axios.put(`/jobhunts/${jobHunt.id}`, updatedJobHunt);
      
    } catch (error) {
      console.log(error);
    }

    setEditMode(false);
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
          {editMode ? (
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="Application Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <EditModeDescription
                placeholder="Description:"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <HuntStatus onChange={(e) => setHuntStatus(e.target.value)}>
                <option value="" hidden>
                  {huntStatus}
                </option>
                <option value="Not Started">Hunt Not Started</option>
                <option value="Started">Hunt Started</option>
                <option value="Ended">Hunt Ended</option>
              </HuntStatus>
              <ButtonsContainer>
                <CancelButton onClick={() => setEditMode(false)}>Cancel</CancelButton>
                <SubmitButton type="submit">Update Hunt</SubmitButton>
              </ButtonsContainer>
            </Form>
          ) : (
            <>
              <Title>{jobHunt.title}</Title>
              <ApplicationLink>{jobHunt.applicationLink}</ApplicationLink>
              <Description>{jobHunt.description}</Description>
              <Status>{jobHunt.status}</Status>
              <IconsContainer>
                <EditIcon onClick={() => setEditMode(true)}/>
                <DeleteIcon onClick={handleDelete} />
              </IconsContainer>
            </>
          )}
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default JobHuntModal;