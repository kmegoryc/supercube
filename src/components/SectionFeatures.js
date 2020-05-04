import React from 'react';
import _ from 'lodash';

import { htmlToReact, safePrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import Player from '@vimeo/player';
import playIcon from '../../static/svgs/play.svg';
import supercubeImages from '../../static/images/supercube_images.png';
import supercubeNewsPoster from '../../static/images/supercube_news.png';

export default class SectionFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlayed: false,
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  async componentDidMount() {
    this.player = new Player('supercube-news', {
      id: '414406777',
      allowfullscreen: true,
      frameborder: 0,
      byline: 0,
      title: 0,
      portrait: 0,
    });
  }

  handlePlay(e) {
    e.preventDefault();
    const videoPoster = document.querySelector('.video-poster');
    const videoIcon = document.querySelector('.video-icon');
    this.player.play();
    videoIcon.classList.remove('show');
    videoPoster.classList.remove('show');
  }

  render() {
    let section = _.get(this.props, 'section');
    const readArticle = "Read WDAY's full article on Supercube™ ";
    return (
      <div>
        <section className='block video-block outer'>
          <div className='inner'>
            <div className='video-container'>
              <div id='supercube-news'>
                <img
                  className='video-icon show'
                  onClick={this.handlePlay}
                  src={playIcon}
                  alt='Play video'
                />
                <img
                  className='video-poster show'
                  src={supercubeNewsPoster}
                  alt='Supercube news poster'
                  onClick={this.handlePlay}
                />
              </div>
              <p className='center'>
                {readArticle}
                <a
                  rel='noreferrer noopener'
                  href='https://www.inforum.com/newsmd/coronavirus/6466043-Fergus-Falls-engineers-create-mask-decontamination-device'
                  target='_blank'>
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </section>
        <section
          id={_.get(section, 'section_id')}
          className={
            'block features-block bg-' + _.get(section, 'background') + ' outer'
          }>
          <div className='block-header inner-small'>
            {_.get(section, 'title') && (
              <h2 className='block-title'> {_.get(section, 'title')} </h2>
            )}
            {_.get(section, 'subtitle') && (
              <p className='block-subtitle'>
                {htmlToReact(_.get(section, 'subtitle'))}
              </p>
            )}
          </div>
          {_.get(section, 'features') && (
            <div className='inner'>
              <div className='grid'>
                {_.map(_.get(section, 'features'), (feature, feature_idx) => (
                  <div key={feature_idx} className='block-item'>
                    <p></p>
                    {_.get(feature, 'image') && (
                      <img
                        className='features--icon'
                        src={safePrefix(_.get(feature, 'image'))}
                        alt={_.get(feature, 'title')}
                      />
                    )}
                    <div className='block-content'>
                      <div className='block-title'>
                        <h3> {_.get(feature, 'title')} </h3>
                      </div>
                      <div className='block-copy'>
                        {markdownify(_.get(feature, 'content'))}
                      </div>
                      {_.get(feature, 'actions') && (
                        <CtaButtons
                          {...this.props}
                          actions={_.get(feature, 'actions')}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <section className='block images-block outer'>
            <div className='inner'>
              <img src={supercubeImages} alt='Supercube images' />
            </div>
          </section>
        </section>
      </div>
    );
  }
}
