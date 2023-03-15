import LeftSide from './LeftSide/LeftSide.component';
import RightSide from './RightSide/RightSide.component';
import './resume.styles.css'
function Resume() {
    return (
        <div className="resume">
        <LeftSide />
        <RightSide />
    </div>
    );
  }
  
  export default Resume;