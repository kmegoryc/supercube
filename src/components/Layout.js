import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import reveal from '../../static/js/utils/reveal-elements';
import '../sass/main.scss';

//import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
  async componentDidMount() {
    reveal([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'li',
      'a',
      'img',
      'span',
      'button',
      'svg',
    ]);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initialScale=1.0'
          />
          <meta name='twitter:card' content='summary' />
          <title>
            {_.get(this.props, 'pageContext.site.siteMetadata.title')}
          </title>
          <meta
            property='og:title'
            content={_.get(this.props, 'pageContext.site.siteMetadata.title')}
          />
          <meta
            property='twitter:title'
            content={_.get(this.props, 'pageContext.site.siteMetadata.title')}
          />
          <meta
            property='og:site_name'
            content={_.get(this.props, 'pageContext.site.siteMetadata.title')}
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content={_.get(this.props, 'pageContext.site.siteMetadata.url')}
          />
          <meta
            name='description'
            content={_.get(
              this.props,
              'pageContext.site.siteMetadata.description'
            )}
          />
          <meta
            property='og:description'
            content={_.get(
              this.props,
              'pageContext.site.siteMetadata.description'
            )}
          />
          <meta
            property='twitter:description'
            content={_.get(
              this.props,
              'pageContext.site.siteMetadata.description'
            )}
          />
          <meta
            property='og:image'
            content={_.get(this.props, 'pageContext.site.siteMetadata.image')}
          />
          <meta
            property='twitter:image'
            content={_.get(this.props, 'pageContext.site.siteMetadata.image')}
          />
          <meta name='google' content='notranslate' />
          <link
            href='https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
            rel='stylesheet'
          />
          <link
            rel='shortcut icon'
            href='/images/logo-icon.png'
            type='image/x-icon'
          />
          {/* TODO: Uncomment when deploying app */}
          {/* <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/> */}
        </Helmet>
        <div
          id='page'
          className={
            'site palette-' +
            _.get(this.props, 'pageContext.site.siteMetadata.palette')
          }>
          <Header {...this.props} />
          <main id='content' className='site-content'>
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
