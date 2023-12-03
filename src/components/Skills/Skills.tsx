import uniqid from 'uniqid'
import { skills } from "../../utils/skills"
import { SkillType } from "../../utils/skills.model"
import { StyledBold, StyledSkillContainer, StyledSkillIcon, StyledSkillImage, StyledSkillsContainer } from "./Skills.styled"

const Skill = ({ skill }: { skill: SkillType }) => {
  const currentSkill = skills[skill]

  return (
  <StyledSkillContainer>
    {currentSkill.url
      ? <StyledSkillImage src={currentSkill.url} alt={currentSkill.alt}/>
      : <StyledSkillIcon title={currentSkill.alt}>{currentSkill.icon}</StyledSkillIcon>}
    <StyledBold>{currentSkill.name}</StyledBold>
  </StyledSkillContainer>
)}

export const SkillsContainer = ({ skills }: { skills: SkillType[] }) => (
  <StyledSkillsContainer>
    {skills.map(skill => <Skill key={uniqid()} skill={skill} />)}
  </StyledSkillsContainer>
)
