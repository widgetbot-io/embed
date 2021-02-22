export const url = getEnvVar('{CUSTOM_SERVER_ENDPOINT}')
const scheme = url.includes('127.0.0.1') ? 'http://' : 'https://'
const socketScheme = url.includes('127.0.0.1') ? 'ws://' : 'wss://'

export const API_URL     = `${scheme}${url}`
export const GRAPHQL_URL = `${API_URL}/api/graphql`
export const WS_URL      = `${socketScheme}${url}/api/graphql`
/**
 * When in develop mode, read env vars normally, when in production output a special string that will be replaced by script
**/
function getEnvVar(envVarStr: string): string {
    const overrides = {
        CUSTOM_SERVER_ENDPOINT: "s-e.widgetbot.io"
    }

    // is true when running: npm run build
    const isProd = process.env.NODE_ENV === 'production'
    const envVar = envVarStr.replace(/[{}]/g, '')
    return isProd ? (envVarStr || overrides[envVar]) : (overrides[envVar] || process.env[envVar])
}
