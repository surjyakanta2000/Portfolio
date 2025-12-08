import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './CertificatesStyle'
import ProjectCard from '../Cards/ProjectCards'
import CertificateCards from '../Cards/CertificateCards'
import { certificates } from '../../data/constants'


const Certificates = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="certificate">
      <Wrapper>
        <Title>Certificate & Achievements</Title>
        <Desc>
         I have a few certifications and achievements, which are listed below.
        </Desc>
        <CardContainer>
          {toggle === 'all' && certificates
            .map((certificate, index) => (
              <CertificateCards certificate={certificate} openModal={openModal} setOpenModal={setOpenModal} key={index} />
            ))}
          {certificates
            .filter((item) => item.category == toggle)
            .map((certificate) => (
              <CertificateCards certificate={certificate} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates