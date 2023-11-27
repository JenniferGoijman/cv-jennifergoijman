export type SkillType = 'cypress' | 'javascript' | 'jest' | 'figma' | 'git' | 'mui' | 'mobx' | 'nest' | 'node' | 'react' | 'redux' | 'postgresql' | 'storybook' | 'styledComponents' | 'swr' | 'typescript' | 'vite' | 'webpack'

export type SkillData = {
  [key in SkillType]: {
    name: string
    alt: string
    url?: string
    icon?: string;
  }
}