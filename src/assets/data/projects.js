import { v4 as uuidv4 } from 'uuid';
import Firstport from '../images/firstport.jpg';
import SecondportImg from '../images/secondport.jpg';
import ThisprojectImg from '../images/This-project.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'FirstPort',
    desc: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://projectgameport.web.app/"
      >
        'This project is a first project from me. I create by HTML and CSS
        only.' <br />
        **non-responsive
      </a>
    ),
    img: Firstport,
  },
  {
    id: uuidv4(),
    name: 'SecondPort',
    desc: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://doollawatport.netlify.app"
      >
        'SecondPort is secound project portfolio. I create by HTML/CSS again.'
        **non-responsive
      </a>
    ),
    img: SecondportImg,
  },
  {
    id: uuidv4(),
    name: 'This project',
    desc: (
      <a target="_blank" rel="noreferrer" href="/">
        'This project is my completely portfolio from me, I create by REACT and
        it can responsive.'
      </a>
    ),
    img: ThisprojectImg,
  },
];

export default projects;
