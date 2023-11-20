import { TextWithIcon } from "../common/Typography/Typography"
import { Container, SubHeader } from "./PersonalInformation.styled"

export const PersonalInformation = () => {
  return (
    <Container>
      <SubHeader>
        Full Stack Developer
      </SubHeader>
      <TextWithIcon icon="📍" text="Madrid, Spain" />
      <TextWithIcon icon="📫" text="jgoijman@gmail.com" />
      <TextWithIcon icon="📞" text="+34644943349" />
    </Container>
  )
}