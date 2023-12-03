import { StyledSection } from './Section.styled';

export const Section = ({ title, children }: { title: string, children: any }) => (
  <StyledSection>
    <h3>{title.toUpperCase()}</h3>
    <hr className="solid" />
    {children}
  </StyledSection>
)