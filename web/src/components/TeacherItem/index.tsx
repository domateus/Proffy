import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/49590513?s=460&u=69fd212033f29e957f248ba52986e3e22dfd511b&v=4" alt="Mateus Antonio" />
        <div>
          <strong>Mateus Antonio</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 42,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem