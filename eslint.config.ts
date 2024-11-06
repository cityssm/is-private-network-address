import cityssmConfig, { tseslint } from 'eslint-config-cityssm'

export const config = tseslint.config(...cityssmConfig, {
  rules: {
    'security/detect-unsafe-regex': 'off',
    'sonarjs/no-hardcoded-ip': 'off'
  }
})

export default config