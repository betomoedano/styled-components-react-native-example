import styled from 'styled-components/native' 

export default function View1() {

  const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
  `;

  const MyText = styled.Text`
    font-size: ${props => props.size || '32px'}
    color: black;
    ${props => 
      props.gray && `color: gray`
    }
    ${props => 
      props.white && `color: white`
    }
`;

  const MyButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.primary};
    width: 90%;
    height: 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    ${props => props.secundary && `
      background-color: gray;
      border-radius: 50px;
    `}
    ${props => props.tertiary && `
    background-color: red;
  `}
  `;

  const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.large}
  `;

  return (
    <Container>
      <Title>My title</Title>
      <MyText size={'16px'}>Styled Components 💅🏼</MyText>
      <MyText gray>Styled Components 💅🏼</MyText>
      <MyButton >
        <MyText white size={'20px'}>press me</MyText>
      </MyButton>
      <MyButton secundary>
        <MyText white size={'20px'}>description</MyText>
      </MyButton>
      <MyButton tertiary>
        <MyText white size={'20px'}>warning</MyText>
      </MyButton>
    </Container>
  );
}
