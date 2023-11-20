import { StyledIcon, StyledText } from './Typography.styled'

export const TextWithIcon = ({ icon, text }: { icon: string, text: string }) => {
  return (
    <StyledText>
      <StyledIcon>{icon}</StyledIcon>
      {text}
    </StyledText>
  )
}
