import React from 'react';
import emailjs from 'emailjs-com';
import _ from 'lodash';

import { htmlToReact, markdownify } from '../utils';

export default class SectionContact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    const serviceId = 'gmail';
    const templateId = 'template_Qo05Z1L4';
    const userId = 'user_1T878hB4Or5KPTOv21NDd';

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  render() {
    let section = _.get(this.props, 'section');
    return (
      <section
        id={_.get(section, 'section_id')}
        className={
          'block contact-block bg-' + _.get(section, 'background') + ' outer'
        }>
        <div className='inner'>
          <div className='grid'>
            <div className='block-header inner-small'>
              <div className='hero-block--titles'>
                <h2 className='block-title highlight'>
                  <span>request</span>
                </h2>
                <h3 className='block-title'>a supercube unit</h3>
              </div>
              {_.get(section, 'subtitle') && (
                <p className='block-subtitle'>
                  {htmlToReact(_.get(section, 'subtitle'))}
                </p>
              )}
              {markdownify(_.get(section, 'content'))}
            </div>
            <div className='block-content inner-medium'>
              <form
                name='contactForm'
                // method='POST'
                // netlifyhoneypot='bot-field'
                data-netlify='true'
                id='contact-form'
                className='contact-form'
                onSubmit={this.handleSubmit}>
                <p className='screen-reader-text'>
                  <label>
                    Don't fill this out if you're human:{' '}
                    <input name='bot-field' />
                  </label>
                </p>
                <p className='form-row'>
                  <label className='form-label'>Name</label>
                  <input type='text' name='from_name' className='form-input' />
                </p>
                <p className='form-row'>
                  <label className='form-label'>Email address</label>
                  <input
                    type='email'
                    name='from_email'
                    className='form-input'
                  />
                </p>
                <p className='form-row'>
                  <label className='form-label'>Number of units</label>
                  <input
                    type='number'
                    name='unit_amount'
                    className='form-input'
                  />
                </p>
                <p className='form-row'>
                  <label className='form-label'>Message</label>
                  <textarea name='message' className='form-textarea' rows='7' />
                </p>
                <input type='hidden' name='form-name' value='contactForm' />
                <p className='form-row form-submit'>
                  <button type='submit' className='button'>
                    Send Message
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
