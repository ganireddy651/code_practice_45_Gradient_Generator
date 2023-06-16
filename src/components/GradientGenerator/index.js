import {Component} from 'react'
import {
  GradientContainer,
  Heading,
  Paragraph,
  LabelText,
  ColorInput,
  InputContainer,
  Container,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    isActive: false,
    direction: gradientDirectionsList[0].directionId,
    bgColor1: '#8ae323',
    bgColor2: '#014f7b',
  }

  onButtonBackground = () => {
    this.setState({isActive: true})
  }

  onBGColor1Change = event => {
    this.setState({bgColor1: event.target.value})
  }

  onBGColor2Change = event => {
    this.setState({bgColor2: event.target.value})
  }

  render() {
    const {isActive, direction, bgColor1, bgColor2} = this.state
    return (
      <GradientContainer direction={direction}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <GradientDirectionItem
          isActive={isActive}
          onButtonBackground={this.onButtonBackground}
        />
        <Paragraph>Pick The Colors</Paragraph>
        <InputContainer>
          <Container>
            <LabelText>{bgColor1}</LabelText>
            <br />
            <ColorInput
              onChange={this.onBGColor1Change}
              value={bgColor1}
              type="color"
            />
          </Container>
          <Container>
            <LabelText>{bgColor2}</LabelText>
            <br />
            <ColorInput
              onChange={this.onBGColor2Change}
              value={bgColor2}
              type="color"
            />
          </Container>
        </InputContainer>
        <GenerateButton>Generate</GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
