import './App.css'
import { PersonalInformation } from './components/PersonalInformation/PersonalInformation'
import { useTranslation } from 'react-i18next'
import { Section } from './components/common/Section/Section'

function App() {
  const { i18n, t } = useTranslation();

  const language = i18n.language;

  return (
    <>
      <button onClick={() => i18n.changeLanguage(language === 'en' ? 'es' : 'en')}>
        {language === 'en' ? 'Versión en Español' : 'English Version'}
      </button>

      <h1>Jennifer Goijman</h1>

      <PersonalInformation />

      <Section title="About Me">
        <p>{t('aboutMe.text')}</p>
      </Section>
    </>
  )
}

export default App
