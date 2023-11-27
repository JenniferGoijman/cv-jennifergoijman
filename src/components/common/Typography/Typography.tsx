import { StyledIcon, StyledText } from './Typography.styled'

export const TextWithIcon = ({ icon, text }: { icon: string, text: string }) => {
  return (
    <StyledText>
      <StyledIcon>{icon}</StyledIcon>
      {text}
    </StyledText>
  )
}

export const Paragraph = ({ children, size, width }: { children: string, size?: string, width?: string }) => {
  if (size === "16") {
    return (
      <p style={{ fontSize: 16, width }}>
        {children}
      </p>
    )
  }
  if (size === "20") {
    return (
      <p style={{ fontSize: 20, fontWeight: 500, width }}>
        {children}
      </p>
    )
  }

  return (
    <p>{children}</p>
  )
}