import './index.styles.css'
function Welcome() {
    return (
      <div className="welcome">
        <h1>Hi There, I am Mikey,</h1>
        <p>a <span className="pro">pro</span>grammer.</p>
        <hr />
        <div className="skills">
          <h2>My Skills.</h2>
          <div className="skill-row">
            <img className="" src="" alt="" />
            <h3>JavaScript</h3>
            <p>I can write full stack web applications by leveraging Node.js to create backends for many scenarios</p>
          </div>
          <div className="skill-row">
            <img className="" src="" alt="" />
            <h3>SCRUM & AGILE Ready</h3>
            <p>First hand experience with SCRUM having worked in an Agile environment with Chingu.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Welcome;