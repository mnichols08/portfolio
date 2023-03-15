import SummaryOfSkills from './SummaryOfSkills/SummaryOfSkills.component';
import EmploymentHistory from './EmploymentHistory/EmploymentHistory.component';
import Education from './Education/Education.component';
import Extracurricular from './Extracurricular/Extracurricular.component';
function RightSide() {
    return(
        <div>
          <SummaryOfSkills />
          <hr />
          <EmploymentHistory />
          <hr />
          <Education />
          <hr />
          <Extracurricular />
        </div>
    );
}

export default RightSide;