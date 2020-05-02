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

    const serviceId = 'gmail';
    const templateId = 'template_Qo05Z1L4';
    const userId = 'user_1T878hB4Or5KPTOv21NDd';
    const successMessage = window.document.getElementById('success-message');
    const submitButton = window.document.getElementById('submit-button');

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        successMessage.classList.remove('hidden');
        submitButton.disabled = true;
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
                <p className='form-row'>
                  <label className='form-label'>Name</label>
                  <input required type='text' placeholder='Your Full Name' name='from_name' className='form-input' />
                  <h6 className="required">*Required</h6>
                </p>
                <p className='form-row'>
                  <label className='form-label'>Email Address</label>
                  <input
                    required
                    placeholder='example@gmail.com'
                    type='email'
                    name='from_email'
                    className='form-input'
                  />
                  <h6 className="required">*Required</h6>
                </p>
                <p className='form-row'>
                  <label className='form-label'>Number of units</label>
                  <input
                    placeholder='1'
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
                  <button id='submit-button' type='submit' className='button'>
                    Send Message
                  </button>
                </p>
              </form>
              <p id="success-message" className="form--message hidden">Thank you for your submission! We will get back to you shortly.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
