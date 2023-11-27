import './App.css'
import { PersonalInformation } from './components/PersonalInformation/PersonalInformation'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation();

  const language = i18n.language;

  return (
    <>
      <button onClick={() => i18n.changeLanguage(language === 'en' ? 'es' : 'en')}>
        {language === 'en' ? 'Versión en Español' : 'English Version'}
      </button>

      <h1>Jennifer Goijman</h1>

      <PersonalInformation />
    </>
  )
}

export default App
