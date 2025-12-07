import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
// import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, ConnectContainer, ConnectButton } from './HeroStyle'
import Pic from '../../images/profile.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description.map((item, index) => (
                            <div key={index}>
                                <p key={index}>{item}</p>
                                <br />
                            </div>
                        ))}</SubTitle>
                        <ConnectContainer>
                            <ConnectButton href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                                Connect on LinkedIn
                            </ConnectButton>
                            <ConnectButton href={Bio.insta} target="_blank" rel="noopener noreferrer">
                                Connect on Instagram
                            </ConnectButton>
                        </ConnectContainer>
                        
                        { <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton> }
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={Pic} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
