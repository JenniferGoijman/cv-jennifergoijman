import cypressImage from '/assets/cypress.svg'
import javascriptImage from '/assets/javascript.svg'
import jestImage from '/assets/jest.svg'
import figmaImage from '/assets/figma.svg'
import gitImage from '/assets/git.svg'
import mobxImage from '/assets/mobx.svg'
import muiImage from '/assets/mui.svg'
import nestjsImage from '/assets/nestjs.svg'
import nodejsImage from '/assets/nodejs.svg'
import postgresqlImage from '/assets/postgresql.svg'
import reactImage from '/assets/react.svg'
import reduxImage from '/assets/redux.svg'
import storybookImage from '/assets/storybook.svg'
import swrImage from '/assets/swr.svg'
import typescriptImage from '/assets/typescript.svg'
import viteImage from '/assets/vite.svg'
import webpackImage from '/assets/webpack.svg'
import { SkillData } from './skills.model'

export const skills: SkillData = {
  cypress: {
    name: "Cypress",
    url: cypressImage,
    alt: "Cypress logo"
  },
  javascript: {
    name: "JavaScript",
    url: javascriptImage,
    alt: "JavaScript logo"
  },
  jest: {
    name: "Jest",
    url: jestImage,
    alt: "Jest logo"
  },
  figma: {
    name: "Figma",
    url: figmaImage,
    alt: "Figma logo"
  },
  git: {
    name: "Git",
    url: gitImage,
    alt: "Git logo"
  },
  mui: {
    name: "MUI",
    url: muiImage,
    alt: "MUI logo"
  },
  mobx: {
    name: "mobX",
    url: mobxImage,
    alt: "mobX logo"
  },
  nest: {
    name: "NestJS",
    url: nestjsImage,
    alt: "NestJS logo"
  },
  node: {
    name: "NodeJS",
    url: nodejsImage,
    alt: "NodeJS logo"
  },
  react: {
    name: "React",
    url: reactImage,
    alt: "React logo"
  },
  redux: {
    name: "Redux",
    url: reduxImage,
    alt: "Redux logo"
  },
  postgresql: {
    name: "PostgreSQL",
    url: postgresqlImage,
    alt: "PostgreSQL logo"
  },
  storybook: {
    name: "Storybook",
    url: storybookImage,
    alt: "Storybook logo"
  },
  styledComponents: {
    name: "Styled Components",
    icon: '💅',
    alt: "Styled Components icon"
  },
  swr: {
    name: "SWR",
    url: swrImage,
    alt: "SWR logo"
  },
  typescript: {
    name: "TypeScript",
    url: typescriptImage,
    alt: "TypeScript logo"
  },
  vite: {
    name: "Vite",
    url: viteImage,
    alt: "Vite logo"
  },
  webpack: {
    name: "Webpack",
    url: webpackImage,
    alt: "Webpack logo"
  }
}
