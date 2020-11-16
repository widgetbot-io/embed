export const url = getEnvVar('{CUSTOM_SERVER_ENDPOINT}')

/** 
 * When in develop mode, read env vars normally, when in production output a special string that will be replaced by script
**/
function getEnvVar(envVarStr: string): string {
    const overrides = {
        CUSTOM_SERVER_ENDPOINT: "stonks.widgetbot.io"
    }

    // is true when running: npm run build
    const isProd = process.env.NODE_ENV === 'production'
    const envVar = envVarStr.replace(/[{}]/g, '')
    return isProd ? envVarStr : (overrides[envVar] || process.env[envVar])
}