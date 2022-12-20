import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: antiquewhite;
  height: 50vh;
  position: relative;
  overflow: hidden;
`;
const InnerContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  margin: 0 150px 0 150px;
`;

const Wrapper = styled.div`
  height: 40vh;
  flex: 1.5;
  box-sizing: border-box;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3``;
const Description = styled.p`
  overflow: hidden;
`;

const ImageContainer = styled.div`
  height: 29vh;
  margin-top: 20px;
  flex: 1;
`;
const Image = styled.img`
  width: 400px;
  background-size: cover;
  background-position: center;
`;

const MiddleOne = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Wrapper>
            <Title>WHO WE ARE</Title>
            <Description>
              RubixeTM is a global technology company specializing in disruptive
              technologies - Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain, and Internet of
              Things (IoT).
            </Description>
            <Description>
              RubixeTM mission is to enable businesses to leverage the full
              potential of disruptive technologies and stay competitive in the
              market, turning complex challenges into solutions, providing a
              strategic competitive advantage that are more efficient, effective
              and predictable.
            </Description>
          </Wrapper>
          <ImageContainer>
            <Image src="https://skvindia.com/wp-content/uploads/slider/cache/16cbd77561c4f6a2dcacc9f42dfea4ee/Banner-01.png" />
          </ImageContainer>
        </InnerContainer>
      </Container>
    </>
  );
};

export default MiddleOne;
