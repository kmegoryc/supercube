import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import ActionLink from './ActionLink';

import supercubeCutout from '../../static/images/supercube_cutout_shapes.png';
import heroSwoosh from '../../static/images/background_swoosh.png';
import heroCircle from '../../static/svgs/hero_circle.svg';

if (typeof window === 'undefined') {
  global.window = {}
}

window.onscroll = function () {
  const circle = window.document.getElementById('hero-circle');
  const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  const neutralWidth = window.innerWidth * .3;
  if (circle && scrollTop < 375) {
    circle.style.width = `${neutralWidth + scrollTop * .5}px`
  }
}

export default class SectionHero extends React.Component {
    render() {
      let section = _.get(this.props, 'section');
      return (
        <section id={_.get(section, 'section_id')} className="block hero-block bg-accent outer">
          <div className="inner">
            <div className="grid">
              <div className="cell block-content">
                <div className="hero-block--titles">
                  <h1 className="block-title highlight"><span>PROTECT</span></h1>
                  <h3 className="block-title">YOUR HEALTHCARE WORKERS <br/> FROM COVID-19</h3>
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
                <img src={supercubeCutout} alt="Supercube cutout" />
              </div>
            </div>
          </div>
          <img id="hero-circle" className="hero-block--circle" src={heroCircle} alt="Hero Circle Graphic" aria-hidden="true" />
          <img className="hero-block--graphic" src={heroSwoosh} alt="Hero Swoosh Graphic" aria-hidden="true" />
        </section>
      );
    }
}
