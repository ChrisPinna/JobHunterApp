import styled from "styled-components"
import { Launch } from "@mui/icons-material"
import { useState } from "react"
import JobHuntModal from "./JobHuntModal"
import { JobHuntType } from "../typings"
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 8rem;
    width: 20rem;
    background-color: #e3dddd;
    margin: 0.5rem;
    border-radius: 0.5rem;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1.5rem;
`
const Title = styled.span`
    font-size: large;
    font-weight: bold;
`
const ApplicationLink = styled.span`
    margin-bottom: 0.5rem;
`
const Description = styled.span`
    margin-bottom: 0.5rem;
`
const Status = styled.span`
    margin-top: 1rem;
`
const LaunchIconContainer = styled.div`
    position: absolute;
    top: -1rem;
    right: -1.5rem;
`
type Props = {
    jobHunt: JobHuntType 
}

const JobHunt = ({jobHunt}: Props) => {

    const [modalOpened, setModalOpened] = useState(false)

  return (
    <Container>
        <Wrapper>
            <Link to={jobHunt.link}>
                <Title>{jobHunt.title}</Title>
            </Link>
            <Status>{jobHunt.status}</Status>
            <LaunchIconContainer>
                <Launch onClick={()=>setModalOpened(true)}/>
            </LaunchIconContainer>
            <JobHuntModal jobHunt={jobHunt} modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </Wrapper>
    </Container>
  )
}

export default JobHunt