import cypressImage from '../assets/cypress.svg'
import javascriptImage from '../assets/javascript.svg'
import jestImage from '../assets/jest.svg'
import figmaImage from '../assets/figma.svg'
import gitImage from '../assets/git.svg'
import mobxImage from '../assets/mobx.svg'
import muiImage from '../assets/mui.svg'
import nestjsImage from '../assets/nestjs.svg'
import nodejsImage from '../assets/nodejs.svg'
import postgresqlImage from '../assets/postgresql.svg'
import reactImage from '../assets/react.svg'
import reduxImage from '../assets/redux.svg'
import storybookImage from '../assets/storybook.svg'
import swrImage from '../assets/swr.svg'
import typescriptImage from '../assets/typescript.svg'
import viteImage from '../assets/vite.svg'
import webpackImage from '../assets/webpack.svg'
import { SkillData } from './skills.model'

export const skills: SkillData = {
  cypress: {
    name: "Cypress",
    url: cypressImage
  },
  javascript: {
    name: "JavaScript",
    url: javascriptImage
  },
  jest: {
    name: "Jest",
    url: jestImage
  },
  figma: {
    name: "Figma",
    url: figmaImage
  },
  git: {
    name: "Git",
    url: gitImage
  },
  mui: {
    name: "MUI",
    url: muiImage
  },
  mobx: {
    name: "mobX",
    url: mobxImage
  },
  nest: {
    name: "NestJS",
    url: nestjsImage
  },
  node: {
    name: "NodeJS",
    url: nodejsImage
  },
  react: {
    name: "React",
    url: reactImage
  },
  redux: {
    name: "Redux",
    url: reduxImage
  },
  postgresql: {
    name: "PostgreSQL",
    url: postgresqlImage
  },
  storybook: {
    name: "Storybook",
    url: storybookImage
  },
  styledComponents: {
    name: "Styled Components",
    icon: '💅'
  },
  swr: {
    name: "SWR",
    url: swrImage
  },
  typescript: {
    name: "TypeScript",
    url: typescriptImage
  },
  vite: {
    name: "Vite",
    url: viteImage
  },
  webpack: {
    name: "Webpack",
    url: webpackImage
  }
}
