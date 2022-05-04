import emailKey from './emailKey'
import {send} from 'emailjs-com'
import { useState } from 'react'

import './styles/contact.scss'

const Contact = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const templateParams = {
        to_name: 'lucas',
        from_name: email,
        message: message,
    }

    function handleEmailSubmition(e){
        e.preventDefault();

        if(!email) return alert('campo de email vazio')
        if(!message) return alert('campo de mensagens vazio')

        send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, templateParams, emailKey.USER_ID)
        .then(res => alert('enviado com sucesso'))
        .catch(err => alert('ocorreu um erro ao enviar, tente novamente'))
        
        setEmail('')
        setMessage('')
    }

    return <>
        <section id="contact">
            <article>
                <h2>Contato</h2>
                <p>Voce pode me chamar pelo <a href='https://wa.me/5521964669623' rel='noreferrer' target='_blank'>whatsapp</a> ou me mandar um Email em baixo</p>
            </article>

            <form className='email_container' onSubmit={(e) => handleEmailSubmition(e)}>
                <label htmlFor="email_field">Seu Email</label>
                <input 
                    id='email_field'
                    className='email_field'
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                <label htmlFor="text">Sua Mensagem</label>
                <textarea id='text'
                    className='email_field'
                    maxLength={2000}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    >

                    </textarea>
                <button className='send'>Enviar</button>
            </form>
        </section>
    </>
}

export default Contact