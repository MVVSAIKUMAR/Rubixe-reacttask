import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #9d094b;
  height: 25vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 25vh;
  box-sizing: border-box;
  padding: 5px 0px 5px 20px;
  margin: 0px 150px 0 150px;
  color: white;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3``;
const Description = styled.p`
  margin-top: 0;
  overflow: hidden;
`;

const MiddleTwo = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>WHERE WE STARTED</Title>
          <Description>
            We started in 2015, With a passionate team who want to bring
            game-changing solutions through disrupting technologies. We
            expertise in delivering enterprise-level solutions in the field of
            Artificial Intelligence (AI), Cyber Security, Robotic Process
            Automation (RPA), Internet of Things (IoT), and BlockChain
            technology.
          </Description>
        </Wrapper>
      </Container>
    </>
  );
};

export default MiddleTwo;
