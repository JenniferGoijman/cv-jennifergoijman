import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid'
import { Paragraph } from '../common/Typography/Typography';
import { LanguageContainer } from './Languages.styled';

const languagesArray = ['spanish', 'english', 'german'];

const LanguageName = ({ text }: { text: string }) => <Paragraph size="20" width="80">{text}</Paragraph>
const LanguageLevel = ({ text }: { text: string }) => <Paragraph size="16">{text}</Paragraph>

export const Languages = () => {
  const { t } = useTranslation();

  return (
    <>
      {languagesArray.map(language => (
        <LanguageContainer key={uniqid()}>
          <LanguageName text={t(`languages.${language}.name`)} />
          <LanguageLevel text={t(`languages.${language}.level`)} />
        </LanguageContainer>
      ))}
    </>
  )
}