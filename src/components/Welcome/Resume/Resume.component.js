import LeftSide from './LeftSide.component';
import RightSide from './RightSide.component';
import './resume.styles.css'
function Resume() {
    return (
        <main className="resume">
        <LeftSide />
        <RightSide />
    </main>
    );
  }
  
  export default Resume;