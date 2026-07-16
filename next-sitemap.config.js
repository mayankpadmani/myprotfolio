/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.mayankpadmani.me';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
    