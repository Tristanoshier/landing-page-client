import { useState } from 'react';
export const Contact = (props) => {
  const [status, setStatus] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  }

  return (
    <div className='contact'>
      <p id='main-header'>Contact</p>
      <br />
      <form
        onSubmit={submitForm}
        action='https://formspree.io/f/mwkwzdzr'
        method='POST'
      >
        <label className={props.colorMode('contact-label', 'contact-label light')}>Your Email:</label>
        <br />
        <input className={props.colorMode('email-box', 'email-box light')} type='email' name='_replyto' placeholder='example@email.com' autoComplete='off' />
        <br />
        <br />
        <label className={props.colorMode('contact-label', 'contact-label light')}>Message:</label>
        <br />
        <textarea className={props.colorMode('message-box', 'message-box light')} type='text' name='message' autoComplete='off' placeholder='Enter message here' />
        <br />
        <br />
        {status === 'SUCCESS' ? <p className={props.colorMode('contact-label', 'contact-label light')}>Thanks!</p> : <button className={props.colorMode('submit-btn', 'submit-btn light')}>Send</button>}
        {status === 'ERROR' && <p className={props.colorMode('contact-label', 'contact-label light')}>Oops! There was an error.</p>}
      </form>
    </div>
  )
}
