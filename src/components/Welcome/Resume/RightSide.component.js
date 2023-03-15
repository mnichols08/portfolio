import SummaryOfSkills from './SummaryOfSkills.component';
import EmploymentHistory from './EmploymentHistory.component';
import Education from './Education.component';
import Extracurricular from './Extracurricular.component';
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