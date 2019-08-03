import styled, { css } from 'styled-components'

export const Button = styled.button<{ variant: string }>`
  border-radius: 2rem;
  border: none;
  padding: 0.8rem;
  font-size: calc(1em - 1vw);
  ${({ theme, variant }) => css`
    color: ${theme[variant].color};
    background: ${theme[variant].background};
  `};
`

export const Input = styled.input`
  border-radius: 2rem;
  border: none;
  padding: 0.8rem;
  font-size: calc(1em - 1vw);
  background: ${({ theme }) => theme.primary.background};
`

export const HelpButton = styled.a`
  border: none;
  font-size: 2em;
  line-height: 2;
  margin-left: 0.3em;
  background: white;
  display: inline-block;
  text-align: center;
  margin-top: 0;
`
