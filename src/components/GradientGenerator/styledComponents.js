import Styled from 'styled-components'

export const GradientContainer = Styled.div`
background-image: linear-gradient(to top, #014f7b, #8ae323);
min-height: 100vh;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Heading = Styled.h1`
color: #ffffff;
font-family:"Roboto";
`

export const Paragraph = Styled.p`
color: #ffffff79;
font-family:"Roboto";
font-size: 16px;
font-weight: 500;
`

export const InputContainer = Styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 30px;
`
export const Container = Styled.div`
margin:10px;
`
export const LabelText = Styled.label`
color: #ffffff;
font-size: 12px;
`
export const ColorInput = Styled.input`
margin-top: 10px;
`

export const GenerateButton = Styled.button`
background-color: #00c9b7;
color: #1e293b;
font-family: "Roboto";
border: none;
outline: none;
height: 30px;
width: 90px;
font-weight: 500;
border-radius: 4px;
`
