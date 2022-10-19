import styled from "styled-components";
import JobHunts from "../components/JobHunts";
import SideBar from "../components/SideBar";
import { JobHuntState } from "../context/JobHuntContext";

const Container = styled.div`
  height: calc(100vh - 3.5rem);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  const { jobHunts } = JobHuntState();
  console.log(jobHunts.data)
  return (
    <Container>
      <Wrapper>
        <SideBar />
        <JobHunts />
      </Wrapper>
    </Container>
  );
};

export default Home;
