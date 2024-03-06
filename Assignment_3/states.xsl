<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <style type="text/css">
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th {
              border: 1px solid #dddddd;
              padding: 8px;
              text-align: left;
              background-color:  #E6E6FA; 
          }

          td {
              border: 1px solid #dddddd;
              padding: 8px;
              text-align: left;
          }
        </style>
      </head>
      <body>
        <h1 style="text-align: center;">The States of India</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Districts</th>
            <th>Population</th>
          </tr>
          <xsl:for-each select="states/state">
            <tr>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="capital"/></td>
              <td><xsl:value-of select="districts"/></td>
              <td><xsl:value-of select="population"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
