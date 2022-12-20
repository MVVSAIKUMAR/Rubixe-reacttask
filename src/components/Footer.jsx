import styled from "styled-components";

const Container = styled.div`
  background-color: aliceblue;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 10px 140px 10px 140px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px 20px 20px 20px;
`;
const Title = styled.h2`
  margin-bottom: 30px;
`;
const Title2 = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:active {
    color: #bc0000;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>About Us</Title>
          <Desc>
            RubixeTM is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI), Machine Learning,
            Robotic Process Automation (RPA), BlockChain and Internet of Things
            (IoT). Rubixe mission to enable businesses to leverage the full
            potential of disruptive technologies to stay competitive in the
            market.
          </Desc>
        </Left>
        <Center>
          <Title2>MENUS</Title2>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Contacts</ListItem>
            <ListItem>Career</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>Go To Top</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Info</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Address</Title>
          <Desc>
            Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
            Karnataka 560068 Phone: 0804-717-8999 Email: hi@rubixe.com
          </Desc>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
