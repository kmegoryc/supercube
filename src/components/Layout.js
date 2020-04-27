import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';
import "../sass/main.scss"

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta property="og:title" content={_.get(this.props, 'pageContext.site.siteMetadata.title')} />
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="description" content={_.get(this.props, 'pageContext.site.siteMetadata.description')} />
                    <meta property="og:description" content={_.get(this.props, 'pageContext.site.siteMetadata.description')} />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400" rel="stylesheet"/>
                    <link rel="shortcut icon" href="/images/logo-meta.png" type="image/x-icon" />
                    {/* TODO: Uncomment when deploying app */}
                    {/* <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/> */}
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
