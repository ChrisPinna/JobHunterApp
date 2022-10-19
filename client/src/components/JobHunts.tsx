import styled from "styled-components"
import JobHunt from "./JobHunt"
import { JobHuntType } from "../typings"
import { JobHuntState } from "../context/JobHuntContext";

const Container = styled.div`
margin-left: 8.5rem;
margin-top: 0.5rem;
display: flex;
flex-wrap: wrap;
overflow-y: scroll;
`

const JobHunts = () => {
  const { jobHunts } = JobHuntState();

  if (!jobHunts) return <span>"No jobhunts found"</span>

  return (
    <Container>
        {jobHunts.data?.map((jobHunt: JobHuntType) => (<JobHunt key={jobHunt.id} jobHunt={jobHunt}/>))}
    </Container>
  )
}

export default JobHunts