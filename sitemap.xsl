<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/sitemapindex">
    <html lang="fa">
      <head>
        <title>نمایش سایت‌مپ</title>
        <meta charset="utf-8"/>
        <style>
          body { background: #0f172a; color: #e0e7ef; font-family: Vazirmatn, sans-serif; margin: 0; padding: 2rem; }
          h1 { color: #60a5fa; font-size: 2rem; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; background: #1e293b; border-radius: 1rem; overflow: hidden; }
          th, td { padding: 0.75rem 1rem; text-align: right; }
          th { background: #334155; color: #a5b4fc; font-size: 1.1rem; }
          tr:nth-child(even) { background: #1e293b; }
          tr:nth-child(odd) { background: #111827; }
          a { color: #38bdf8; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>سایت‌مپ اصلی سایت</h1>
        <table>
          <tr>
            <th>آدرس سایت‌مپ</th>
            <th>آخرین تغییر</th>
          </tr>
          <xsl:for-each select="sitemap">
            <tr>
              <td><a href="{loc}"><xsl:value-of select="loc"/></a></td>
              <td><xsl:value-of select="lastmod"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="/urlset">
    <html lang="fa">
      <head>
        <title>نمایش سایت‌مپ</title>
        <meta charset="utf-8"/>
        <style>
          body { background: #0f172a; color: #e0e7ef; font-family: Vazirmatn, sans-serif; margin: 0; padding: 2rem; }
          h1 { color: #60a5fa; font-size: 2rem; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; background: #1e293b; border-radius: 1rem; overflow: hidden; }
          th, td { padding: 0.75rem 1rem; text-align: right; }
          th { background: #334155; color: #a5b4fc; font-size: 1.1rem; }
          tr:nth-child(even) { background: #1e293b; }
          tr:nth-child(odd) { background: #111827; }
          a { color: #38bdf8; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>صفحات سایت</h1>
        <table>
          <tr>
            <th>آدرس صفحه</th>
            <th>آخرین تغییر</th>
          </tr>
          <xsl:for-each select="url">
            <tr>
              <td><a href="{loc}"><xsl:value-of select="loc"/></a></td>
              <td><xsl:value-of select="lastmod"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
