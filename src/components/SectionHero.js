import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';
import ActionLink from './ActionLink';

//Hero icons
import effective from '../../static/icons/effective.svg';
import easy from '../../static/icons/easy.svg';
import noChemicals from '../../static/icons/noChemicals.svg';
import greaterGood from '../../static/icons/greaterGood.svg';
import portable from '../../static/icons/portable.svg';
import heroSwoosh from '../../static/svgs/hero_swoosh.svg';
import heroCircle from '../../static/svgs/hero_circle.svg';
import lineCity from '../../static/svgs/line_city.svg';

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
                {_.get(section, 'image') &&
                <div className="cell hero-block--image">
                  <img className="" src={lineCity} alt="Hero" />
                </div>
                }
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
              </div>
              {/* <div className="grid">
                <div className="cell block-icons">
                  <div className="icon">
                    <img src={effective}></img>
                    <h5>Effective</h5>
                  </div>
                  <div className="icon">
                    <img src={easy}></img>
                    <h5>Easy</h5>
                  </div>
                  <div className="icon">
                    <img src={noChemicals}></img>
                    <h5>No harsh chemicals or residues</h5>
                  </div>
                  <div className="icon">
                    <img src={greaterGood}></img>
                    <h5>Made for greater good</h5>
                  </div>
                  <div className="icon">
                    <img src={portable}></img>
                    <h5>Small and portable</h5>
                  </div>
                </div>
              </div> */}
            </div>
            <img id="hero-circle" className="hero-block--circle" src={heroCircle} alt="Hero Circle" />
            <img className="hero-block--graphic" src={heroSwoosh} alt="Hero Swoosh" />
          </section>
      );
    }
}
