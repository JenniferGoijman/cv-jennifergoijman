import { useTranslation } from "react-i18next";
import uniqid from 'uniqid'
import { Paragraph } from "../common/Typography/Typography";
import { SkillsContainer } from "../Skills/Skills";
import { SkillType } from "../../utils/skills.model";

const jobsArray = ['journi', 'oneBeyond'];

const CompanyName = ({ text }: { text: string }) => <Paragraph size="20">{text}</Paragraph>
const JobPosition = ({ text }: { text: string }) => <p style={{ fontSize: 16 }}>{text}</p>
const Dates = ({ text }: { text: string }) => <Paragraph size="16">{text}</Paragraph>

export const Jobs = () => {
  const { t } = useTranslation();

  return (
    <>
      {jobsArray.map(job => {
        const descriptions: string[] = t(`jobs.${job}.description`, {  returnObjects: true })
        const skills: SkillType[] = t(`jobs.${job}.skills`, {  returnObjects: true })

        return (
          <div key={uniqid()} style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ textAlign: 'left' }}>
                <CompanyName text={t(`jobs.${job}.name`)} />
                <JobPosition text={t(`jobs.${job}.position`)} />
              </div>
              <Dates text={t(`jobs.${job}.dates`)} />
            </div>

            {descriptions.map(description => <Paragraph key={uniqid()}>{description}</Paragraph>)}
            <SkillsContainer skills={skills} />
          </div>
        )
      })}
    </>
  )
}