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

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block hero-block bg-accent outer">
              <div className="inner">
                <div className="grid">
                  {_.get(section, 'image') &&
                  <div className="cell block-preview">
                    <img src={safePrefix(_.get(section, 'image'))} alt={_.get(section, 'title')} />
                  </div>
                  }
                  <div className="cell block-content">
                    <h1 className="block-title highlight">
                      <span>PROTECT FROM</span>
                      <br/>
                      <span>COVID-19</span></h1>
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
                <div className="grid">
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
                </div>
              </div>
            </section>
        );
    }
}
