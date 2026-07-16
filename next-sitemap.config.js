/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mayankpadmani.me',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://www.mayankpadmani.me/sitemap.xml'],
  },
};
    