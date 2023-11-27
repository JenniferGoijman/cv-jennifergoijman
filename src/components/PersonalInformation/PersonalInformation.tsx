import { useTranslation } from "react-i18next";
import { TextWithIcon } from "../common/Typography/Typography"
import { Container, SubHeader } from "./PersonalInformation.styled"

export const PersonalInformation = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SubHeader>
        Full Stack Developer
      </SubHeader>

      <TextWithIcon
        icon={t('personalInformation.location.icon')}
        text={t('personalInformation.location.text')}
        />

      <TextWithIcon
        icon={t('personalInformation.email.icon')}
        text={t('personalInformation.email.text')}
        />

      <TextWithIcon
        icon={t('personalInformation.phone.icon')}
        text={t('personalInformation.phone.text')}
        />
    </Container>
  )
}