import React from 'react';
import Optimizely from '../../components/optimizely.js';
import OptimizelySubdomain from '../../components/optimizelysubdomain.js';
import fs from 'fs';
import Path from 'path';
import Pontoon from '../../components/pontoon.js';

module.exports = React.createClass({
  render: function() {
    var localeData = "";
    var locale = this.props.locale || "";
    if (locale) {
      localeData = fs.readFileSync(Path.join(__dirname, '../../../node_modules/react-intl/locale-data/' + locale.split('-')[0] + '.js'), 'utf8');
    }
    var googleFonts = "https://fonts.googleapis.com/css?family=Arvo:600,400,300,300italic|Fira+Sans+Condensed:200,300,400,700";
    return (
      <html className={this.props.htmlClassName}>
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.props.metaTitle}/>
          <meta property="og:site_name" content={this.props.metaSiteName}/>
          <meta property="og:url" content={this.props.metaUrl}/>
          <meta property="og:description" content={this.props.metaDesc}/>
          <meta property="description" content={this.props.metaDesc}/>
          <meta property="og:image" content={this.props.metaImage} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mozilla" />
          <meta name="twitter:title" content={this.props.metaTitle} />
          <meta name="twitter:description" content={this.props.twitterDesc || this.props.metaDesc} />
          <meta name="twitter:image" content={this.props.twitterImage} />
          <meta description={this.props.desc} />

          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="stylesheet" type="text/css" href="/build/main.css"/>
          <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <title>{this.props.title}</title>
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/assets/favicon/apple-touch-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="196x196" href="/assets/favicon/favicon-196x196.png"/>
          <link rel="shortcut icon" href="/assets/favicon.ico"/>
          <script dangerouslySetInnerHTML={{__html: localeData}}></script>
          <OptimizelySubdomain/>
          <Optimizely/>
          <Pontoon/>
        </head>
        <body>
          <div id="my-app" dangerouslySetInnerHTML={{__html: this.props.reactHTML}}/>
          <link rel="stylesheet" href={googleFonts}/>
          <script src="/build/main.js"></script>
          <script src="https://c.shpg.org/352/sp.js"></script>
        </body>
      </html>
    );
  }
});
