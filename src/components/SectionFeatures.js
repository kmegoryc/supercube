import React from 'react';
import _ from 'lodash';

import { htmlToReact, safePrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import supercubeImages from '../../static/images/supercube_images.png';

export default class SectionFeatures extends React.Component {
  render() {
    let section = _.get(this.props, 'section');
    return (
      <section
        id={_.get(section, 'section_id')}
        className={
          'block features-block bg-' + _.get(section, 'background') + ' outer'
        }>
        <img src={supercubeImages} alt="Supercube images" />
        <div className='block-header inner-small'>
          {_.get(section, 'title') && (
            <h2 className='block-title'>{_.get(section, 'title')}</h2>
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
                <div key={feature_idx} className= {feature_idx % 2 == 0 ? 'block-item left' : 'block-item right'}>
                  <p></p>
                  {_.get(feature, 'image') && (
                    <img
                      className='features--icon'
                      src={safePrefix(_.get(feature, 'image'))}
                      alt={_.get(feature, 'title')}
                    />
                  )}
                  <div className='block-content'>
                    <h3 className='block-title'>{_.get(feature, 'title')}</h3>
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
      </section>
    );
  }
}
