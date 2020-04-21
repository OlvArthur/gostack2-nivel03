import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />

      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <img
          src="https://avatars2.githubusercontent.com/u/35180035?s=460&u=47d303f03d510f54c371669543306306d04aab24&v=4"
          alt="Arthur Oliveira"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJs & React Native forms! 🚀 </p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="test">
        <img
          src="https://avatars2.githubusercontent.com/u/35180035?s=460&u=47d303f03d510f54c371669543306306d04aab24&v=4"
          alt="Arthur Oliveira"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJs & React Native forms! 🚀 </p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="test">
        <img
          src="https://avatars2.githubusercontent.com/u/35180035?s=460&u=47d303f03d510f54c371669543306306d04aab24&v=4"
          alt="Arthur Oliveira"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJs & React Native forms! 🚀 </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
