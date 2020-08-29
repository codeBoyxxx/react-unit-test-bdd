const env = process.env.DEPLOY_ENV

console.log('当前环境是',env)

const deployConfig = {
    dev:{
        dsn: "https://1027eb94927845209264fb333a11ee44@o440730.ingest.sentry.io/5410305",
        release:'dev'
    },
    sit:{
        dsn: "https://1027eb94927845209264fb333a11ee44@o440730.ingest.sentry.io/5410305",
        release:'sit'
    },
    uat:{
        dsn: "https://1027eb94927845209264fb333a11ee44@o440730.ingest.sentry.io/5410305",
        release:'uat'
    },
    prod:{
        dsn: "https://1027eb94927845209264fb333a11ee44@o440730.ingest.sentry.io/5410305",
        release:'prod'
    }
}

export default {
    ...deployConfig[env]
}