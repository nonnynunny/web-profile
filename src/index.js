import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />

      </div>
    </div>
    </>
  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill="PYTHON" emoji="👻" color="orange" />
      <Skill skill="mySQL" emoji="💀" color="gray" />
      <Skill skill="JavaScript" emoji="💩" color="brown" />
      <Skill skill="HTML" emoji="🤕" color="pink" />
    </div>
  )
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

function Intro() {
  return <div>
    <h1>นายจิรัฏฐ์ขจรกิจ วงษาบุตร</h1>
    <p>
      นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร
      คณะวิทยาศาสตร์ มหาวิทยาอุบลราชธานี
      งานอดิเรก คือ เล่นเกม อ่านการ์ตูน ฟังเพลง ดูหนัง/อนิเมะ
    </p>
  </div>
}

function Avatar() {
  return <img className='avatar' src='pf.jpg' alt='My Avatar' />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
