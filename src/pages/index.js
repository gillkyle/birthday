import React from 'react'
import styled, { keyframes } from 'styled-components'
import { tada } from 'react-animations'
import Confetti from 'react-dom-confetti'

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
  background: linear-gradient(45deg, #fe6b6b 30%, #ff8e53 90%);
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
const tadaAnimation = keyframes`${tada}`
const TadaWrapper = styled.div`
  animation: 1s ${tadaAnimation};
  width: 200px;
  height: 200px;
`
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
  'https://media.giphy.com/media/3ohze2bnBGoQpY6eqc/giphy.gif',
  'https://media.giphy.com/media/2gZ6VIxkh9f6xAiEVi/giphy.gif',
  'https://78.media.tumblr.com/a0f0e55555ba27229ad97965d5a1f0ea/tumblr_o6rxakd7lg1txe8e9o1_500.gif',
  'https://78.media.tumblr.com/ae7a96c85de740f096173b88e8dcc2d1/tumblr_nz2bavVUFz1txe8e9o1_500.png',
  'https://media.giphy.com/media/b9DdiT6VI4KfC/giphy.gif',
  'https://media.giphy.com/media/3ohhwj5q17ISuJnBiU/giphy.gif',
  'https://media.giphy.com/media/1d1Yn4Rmv2xS8/giphy.gif',
]
const buttonRotation = [
  'WOOHOO',
  'ALRIGHT',
  'BIRTHDAY',
  'SUCH PARTY',
  'YOWZA',
  'VERY CANDLES',
]

const popupleft = keyframes`
  0% {
    transform: rotate(45deg) translateY(200px) translateX(0px);
  }
  
  29% {
    transform: rotate(45deg) translateY(200px) translateX(0px);
  }
  30% {
    transform: rotate(45deg) translateY(40px) translateX(0px);
  }
  45% {
    transform: rotate(45deg) translateY(40px) translateX(0px);
  }
  46% {
    transform: rotate(45deg) translateY(200px) translateX(0px);
  }
  100% {
    transform: rotate(45deg) translateY(200px) translateX(0px);
  }
`

const popupright = keyframes`
  0% {
    transform: rotate(-45deg) translateY(250px) translateX(150px);
  }
  
  9% {
    transform: rotate(-45deg) translateY(250px) translateX(150px);
  }
  10% {
    transform: rotate(-45deg) translateY(150px) translateX(150px);
  }
  25% {
    transform: rotate(-45deg) translateY(150px) translateX(150px);
  }
  26% {
    transform: rotate(-45deg) translateY(250px) translateX(150px);
  }
  100% {
    transform: rotate(-45deg) translateY(250px) translateX(150px);
  }
`

const PopInContainer = styled.div`
  position: absolute;
  margin: 0;
  animation: ${props => props.popup} 12s linear infinite;
  /* background-image: url('https://media.giphy.com/media/uWdoHD0csHkSEIbJt6/giphy.gif'); */
`

const PopInLeft = () => {
  return (
    <div
      style={{
        position: `absolute`,
        bottom: 0,
        left: 0,
        overflow: `hidden`,
        height: 300,
        width: 300,
      }}
    >
      <PopInContainer popup={popupleft}>
        <img
          src="https://media.giphy.com/media/4BJCvMoLPePq8/giphy.gif"
          alt="squirrel with maracas"
          style={{ height: 150, marginBottom: 0 }}
        />
      </PopInContainer>
    </div>
  )
}

const PopInRight = () => {
  return (
    <div
      style={{
        position: `absolute`,
        bottom: 0,
        right: 0,
        overflow: `hidden`,
        height: 300,
        width: 300,
      }}
    >
      <PopInContainer popup={popupright}>
        <img
          src="https://media.giphy.com/media/uWdoHD0csHkSEIbJt6/giphy.gif"
          alt="squirrel with maracas"
          style={{ height: 100, marginBottom: 0 }}
        />
      </PopInContainer>
    </div>
  )
}

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
    console.log('mount')
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
    this.setState(
      {
        key: key + 1,
        fireConfetti: true,
        buttonRotation: newButtonRotation,
        imageRotation: newImageRotation,
      },
      () => {
        this.setState({ fireConfetti: false })
      }
    )
  }

  render() {
    const { key, buttonRotation, imageRotation, fireConfetti } = this.state
    const recipient = process.env.GATSBY_RECIPIENT
    return (
      <Center>
        <BigText>Happy birthday {recipient}</BigText>
        <TadaWrapper key={key}>
          <img className="doge" src={imageRotation[0]} alt="doge sticker" />
        </TadaWrapper>
        <Confetti active={fireConfetti} config={confettiConfig} />
        <Button onClick={() => this.onButtonPress()}>
          {buttonRotation[0]}
        </Button>
        <PopInLeft />
        <PopInRight />
      </Center>
    )
  }
}

export default IndexPage
