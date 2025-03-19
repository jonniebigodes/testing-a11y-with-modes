import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

// KeyFrames for tooltip animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const glowEffect = keyframes`
  0% {
    box-shadow: 0 0 5px #FF1B8D, 0 0 10px #FF1B8D, 0 0 15px #FF1B8D;
  }
  50% {
    box-shadow: 0 0 10px #00F3FF, 0 0 20px #00F3FF, 0 0 30px #00F3FF;
  }
  100% {
    box-shadow: 0 0 5px #FF1B8D, 0 0 10px #FF1B8D, 0 0 15px #FF1B8D;
  }
`

const FormWrapper = styled.form(
  ({ theme: { color, name } }) => css`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid ${color.headerBorder};
    border-radius: 5px;
    background-color: ${color.formBackground};
    transition: all 0.3s ease;

    ${name === '80' &&
    css`
      border: 2px solid ${color.buttonPrimary};
      box-shadow: 0 0 10px ${color.buttonPrimary};
      animation: ${glowEffect} 3s infinite;
    `}
  `
)

const Label = styled.label(
  ({ theme: { color } }) => css`
    margin-bottom: 10px;
    font-weight: bold;
    color: ${color.labelActive};
    @media (force-colors: active) {
      color: WindowText;
    }
  `
)

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`

const Input = styled.input(
  ({ theme: { color, name } }) => css`
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid ${color.headerBorder};
    border-radius: 3px;
    font-size: 16px;
    background-color: ${color.inputBackground};
    color: ${color.primaryText};
    transition: all 0.3s ease;

    &:focus {
      border-color: ${color.buttonPrimary};
      outline: none;
      ${name === '80' &&
      css`
        box-shadow: 0 0 10px ${color.buttonPrimary};
      `}
    }

    ${name === '80' &&
    css`
      border: 2px solid ${color.buttonSecondary};
      &::placeholder {
        color: ${color.inputHint};
      }
    `}
  `
)

const SubmitButton = styled.button(
  ({ theme: { color, name } }) => css`
    padding: 10px 20px;
    font-size: 16px;
    color: ${color.buttonText};
    background-color: ${color.buttonPrimary};
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${color.buttonPrimaryHover};
    }

    &:focus {
      outline: none;
      border: 2px solid ${color.buttonSecondary};
      background-color: ${color.buttonPrimaryHover};
    }

    ${name === '80' &&
    css`
      text-transform: uppercase;
      border: 2px solid ${color.buttonSecondary};
      &:hover {
        box-shadow: 0 0 15px ${color.buttonPrimary};
      }
    `}
  `
)

const ToolTip = styled.span(
  ({ theme: { color } }) => css`
    position: absolute;
    top: -35px;
    left: 0;
    background-color: ${color.overlayBackground};
    color: ${color.primaryText};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    white-space: nowrap;
    z-index: 10;
    border: 1px solid ${color.headerBorder};

    &:before {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 10px;
      border-width: 5px;
      border-style: solid;
      border-color: ${color.overlayBackground} transparent transparent transparent;
    }
  `
)

const InputWithTooltip = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover ${ToolTip} {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeIn} 0.3s ease;
  }
`

const ErrorMessage = styled.span<{ visible: boolean }>(
  ({ visible, theme: { color, name } }) => css`
    color: ${name === '80' ? '#FF1B8D' : '#ff0000'};
    font-size: 16px;
    margin-top: 6px;
    visibility: ${visible ? 'visible' : 'hidden'};
    opacity: ${visible ? 1 : 0};
    transition: opacity 0.3s ease;

    ${name === '80' &&
    css`
      text-shadow: 0 0 5px #ff1b8d;
      &:hover {
        animation: ${glowEffect} 1s infinite;
      }
    `}

    &:hover {
      border: 1px solid ${name === '80' ? '#FF1B8D' : '#ff0000'};
    }
  `
)

export const LoginForm: React.FC<{}> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const validateEmail = (value: string) => {
    console.log('validateEmail', value)
    return value.includes('@')
  }

  const validatePassword = (value: string) => {
    console.log('validateEmail', value)
    return value.length >= 16
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)
    if (!validateEmail(email) || !validatePassword(password)) {
      console.log('Invalid email or password')
      setError(true)
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWithTooltip>
        <Label htmlFor="email" aria-labelledby="non-existent-label">
          Email
        </Label>
        <ToolTip id="emailtooltip" aria-description="email tooltip">
          Enter a valid email address
        </ToolTip>
        <InputWrapper>
          <Input
            id="email"
            name="email"
            required
            aria-label="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => console.log('focus', e.target)}
            role="article"
            aria-hidden="true"
            aria-labelledby="another-label"
          />
        </InputWrapper>
      </InputWithTooltip>
      <InputWithTooltip>
        <Label htmlFor="password">Password</Label>
        <ToolTip id="tooltip-password" aria-description="password tooltip">
          Must be at least 16 characters long
        </ToolTip>
        <InputWrapper>
          <Input
            id="password"
            name="password"
            required
            aria-label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => console.log('focus', e.target)}
            role="combobox"
            aria-hidden="true"
            aria-labelledby="random-label"
          />
        </InputWrapper>
      </InputWithTooltip>
      <SubmitButton type="submit" role="contentinfo" aria-hidden="true">
        Login
      </SubmitButton>
      <ErrorMessage
        visible={true}
        id="login-status"
        aria-label="login-status"
        aria-errormessage="some-error"
      >
        Invalid email or password. Check the email and password requirements and try again.
      </ErrorMessage>
    </FormWrapper>
  )
}
