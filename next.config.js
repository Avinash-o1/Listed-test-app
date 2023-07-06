/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI : 'monodb://localhost:27017/next13-auth',
        NEXTAUTH_SECRET : 'testprojectforlisted',

        GOOGLE_ID : '408078172536-i5im7ca4ehm1fidm76v6glnqtghn6k1m.apps.googleusercontent.com',
        GOOGLE_SECRET : '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',
    },
}

module.exports = nextConfig
