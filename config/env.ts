/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
// @ts-check
import { z } from 'zod'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '.env' })

const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors : any,
) => Object.entries(errors)
  .map(([name, value]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (value && '_errors' in value)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line brace-style
    { return `${name}: ${value._errors.join(', ')}\n` }
  })
  .filter(Boolean)

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const schema = z.object({
  PORT: z.string(),
})

const _serverEnv = schema.safeParse(process.env)

if (!_serverEnv.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...formatErrors(_serverEnv.error.format()),
  )
  throw new Error('Invalid environment variables')
}

export const env = { ..._serverEnv.data }
