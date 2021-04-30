import React, { useState } from 'react';
import { Form } from '@unform/web';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

import '../styles/pages/Contact.css';

export default function Contact() {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  }
  const onSubmit = () => {
    console.log(value)
  }
  return (
    <section id='contact'>
      <div className='formContainer'>
        <h4>&lt;contact&gt;</h4>
        <Form>
          <Input label='Nome:' name='name' type='text' data-anime='left'/>
          <Input label='Email:' name='email' type='email' data-anime='right'/>
          <Input label='Assunto:' name='topic' type='text' data-anime='left'/>
          <Textarea label="Mensagem:" name="message" data-anime='right'/>
          <div className="buttonsContainer">
            <input type="reset" value="Limpar" id='clear' />
            <input type="submit" value="Enviar" id='submit'/>
          </div>
        </Form>
        <h4>&lt;/contact&gt;</h4>
      </div>
    </section>
  )
}
