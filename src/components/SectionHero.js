import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import ActionLink from './ActionLink';

import supercubeProductStreched from '../../static/images/supercube_shadow_stretched.jpg';
import bottomSwoosh from '../../static/svgs/bottom_swoosh.svg';

export default class SectionHero extends React.Component {
    render() {
      let section = _.get(this.props, 'section');
      return (
        <section id={_.get(section, 'section_id')} className="block hero-block outer-small inverted">
          <div className="inner">
            <div className="grid">
              <div className="cell block-content">
                <div className="hero-block--titles">
                  <h1 className="block-title highlight"><span>PROTECT</span></h1>
                  <h3 className="block-title">YOUR WORKERS <br/> FROM COVID-19</h3>
                </div>
                <div className="block-copy">
                  {markdownify(_.get(section, 'content'))}
                </div>
                {_.get(section, 'actions') &&
                <p className="block-buttons">
                  {_.map(_.get(section, 'actions'), (action, action_idx) => (
                    <ActionLink key={action_idx} {...this.props} action={action} class_names={'button large'} />
                  ))}
                </p>
                }
              </div>
              <div className="cell hero-block--image">
                <img src={supercubeProductStreched} alt="Supercube product" />
              </div>
            </div>
          </div>
          <img className="hero-block--graphic" src={bottomSwoosh} alt="Hero Swoosh Graphic" aria-hidden="true" />
        </section>
      );
    }
}
