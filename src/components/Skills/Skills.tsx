import { skills } from "../../utils/skills"
import { SkillType } from "../../utils/skills.model"
import { StyledSkillContainer, StyledSkillIcon, StyledSkillImage, StyledSkillsContainer } from "./Skills.styled"

const Skill = ({ skill }: { skill: SkillType }) => {
  const currentSkill = skills[skill]

  return (
  <StyledSkillContainer>
    {currentSkill.url
      ? <StyledSkillImage src={currentSkill.url}/>
      : <StyledSkillIcon>{currentSkill.icon}</StyledSkillIcon>}
    <b>{currentSkill.name}</b>
  </StyledSkillContainer>
)}

export const SkillsContainer = ({ skills }: { skills: SkillType[] }) => (
  <StyledSkillsContainer>
    {skills.map(skill => <Skill key={skill} skill={skill} />)}
  </StyledSkillsContainer>
)
