export function getConfig(){


    const audience = configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
    ? configuration.audience : null

    return {
        domain : configJson.domain,
        clientId: configJson.clientId,
        ...(audience ? (audience) : null)
    }
}