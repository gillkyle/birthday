import React from 'react'
import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';
import Confetti from 'react-dom-confetti';

// styled components
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Luckiest Guy', cursive;
  * + * {
    margin-top: 20px;
  }
`
const Button = styled.button`
  background: linear-gradient(45deg, #fe6b6b 30%, #FF8E53 90%);
  border-radius: 8px;
  padding: 15px 45px;
  color: #fff;
  font-family: 'Luckiest Guy', cursive;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid rgba(255, 75, 43, 0.5);
  border-width: 0px 0px 3px 0px;
  border-bottom-color: #ce4c4c;
  border-radius: 12;
  box-shadow: 0px 6px 20px 3px rgba(255, 75, 43, 0.5); 
  transition: 0.3s;
  &:hover {
    transform: scale(1.035);
    box-shadow: 0px 2px 3px 0px rgba(255, 75, 43, 0.5);
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 0px 0px 25px 0px rgba(255, 75, 43, 0.5);
  }
`
const tadaAnimation = keyframes`${tada}`;
const TadaWrapper = styled.div`
  animation: 1s ${tadaAnimation};
  width: 200px;
  height: 200px;
`;
const BigText = styled.div`
  color: #fff;
  font-size: 48px;
  text-shadow: 0px 1px 3px #777;
`

// other constatns
const confettiConfig = {
  spread: 200,
  elementCount: 65,
  startVelocity: 35,
  decay: 0.9,
}
const imageRotation = [
  "https://media.giphy.com/media/2pqvP0X0EauDC/giphy.gif",
  "https://media.giphy.com/media/2gZ6VIxkh9f6xAiEVi/giphy.gif",
  "https://78.media.tumblr.com/a0f0e55555ba27229ad97965d5a1f0ea/tumblr_o6rxakd7lg1txe8e9o1_500.gif",
  "https://78.media.tumblr.com/ae7a96c85de740f096173b88e8dcc2d1/tumblr_nz2bavVUFz1txe8e9o1_500.png",
  "https://media.giphy.com/media/b9DdiT6VI4KfC/giphy.gif",
  "https://media.giphy.com/media/3ohhwj5q17ISuJnBiU/giphy.gif",
  "https://media.giphy.com/media/1d1Yn4Rmv2xS8/giphy.gif"
]
const buttonRotation = [
  "WOOHOO",
  "ALRIGHT",
  "BIRTHDAY",
  "SUCH PARTY",
  "YOWZA",
  "VERY CANDLES"
]

class IndexPage extends React.Component {
  state = {
    key: 1,
    imageRotation: imageRotation,
    buttonRotation: buttonRotation,
    fireConfetti: false,
  }

  componentDidMount() {
    imageRotation.forEach(pic => {
      let img = new Image()
      img.src = pic
    })
    console.log("mount")
  }

  rotate = options => {
    let newOptions = [...options]
    let firstItem = newOptions.shift()
    newOptions.push(firstItem)
    return newOptions
  }

  onButtonPress = () => {
    const { key, buttonRotation, imageRotation } = this.state
    const newButtonRotation = this.rotate(buttonRotation)
    const newImageRotation = this.rotate(imageRotation)
    this.setState({ key: key + 1, fireConfetti: true, buttonRotation: newButtonRotation, imageRotation: newImageRotation }, () => {
      this.setState({ fireConfetti: false })
    })
  }

  render() {
    const { key, buttonRotation, imageRotation, fireConfetti } = this.state
    const { recipient } = this.props
    return (
      <Center>
        <BigText>Happy birthday {recipient}</BigText>
        <TadaWrapper key={key}>
          <img className="doge" src={imageRotation[0]} alt="doge sticker" />
        </TadaWrapper>
        <Confetti active={ fireConfetti } config={ confettiConfig } />
        <Button onClick={() => this.onButtonPress()}>{buttonRotation[0]}</Button>
      </Center>
    );
  }
}

export default IndexPage
