import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid'
import { Paragraph } from '../common/Typography/Typography';

const educationArray = ['geeksHubsAcademy', 'uba'];

const CompanyName = ({ text }: { text: string }) => <Paragraph size="20">{text}</Paragraph>
const JobPosition = ({ text }: { text: string }) => <p style={{ fontSize: 16 }}>{text}</p>
const Dates = ({ text }: { text: string }) => <Paragraph size="16">{text}</Paragraph>

export const Education = () => {
  const { t } = useTranslation();

  return (
    <>
      {educationArray.map(study => {
        const descriptions: string[] = t(`education.${study}.description`, {  returnObjects: true })

        return (
          <div key={uniqid()} style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ textAlign: 'left' }}>
                <CompanyName text={t(`education.${study}.name`)} />
                <JobPosition text={t(`education.${study}.title`)} />
              </div>
              <div style={{ textAlign: 'right' }}>
                <Dates text={t(`education.${study}.dates`)} />
              </div>
            </div>

            {descriptions.map(description => <Paragraph key={uniqid()}>{description}</Paragraph>)}
          </div>
        )
      })}
    </>
  )
}
