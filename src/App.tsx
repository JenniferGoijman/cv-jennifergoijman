import './App.css'
import { PersonalInformation } from './components/PersonalInformation/PersonalInformation'
import { useTranslation } from 'react-i18next'
import { Section } from './components/common/Section/Section'
import { Languages } from './components/Languages/Languages'
import { Jobs } from './components/Jobs/Jobs'
import { Education } from './components/Education/Education'
import { MainContainer } from './App.styled'


function App() {
  const { i18n, t } = useTranslation();

  const language = i18n.language;

  return (
    <>
      <button onClick={() => i18n.changeLanguage(language === 'en' ? 'es' : 'en')} style={{ marginBottom: 16 }}>
        {language === 'en' ? 'Versión en Español' : 'English Version'}
      </button>

      <MainContainer>
        <h1>Jennifer Goijman</h1>

        <PersonalInformation />

        <Section title="About Me">
          <p>{t('aboutMe.text')}</p>
        </Section>

        <Section title="Work Experience">
          <Jobs />
        </Section>

        <Section title="Education">
          <Education />
        </Section>

        <Section title="Languages">
          <Languages />
        </Section>
      </MainContainer>
    </>
  )
}

export default App
