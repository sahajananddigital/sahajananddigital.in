/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sahajananddigital.in',
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://sahajananddigital.in/sitemap.xml',
    ],
  },
}
