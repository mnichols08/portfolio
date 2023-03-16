import SummaryOfSkills from './SummaryOfSkills/SummaryOfSkills.component';
import EmploymentHistory from './EmploymentHistory/EmploymentHistory.component';
import Education from './Education/Education.component';
import Extracurricular from './Extracurricular/Extracurricular.component';
function RightSide({resume}) {
    return(
        <div>
          <hr />
          <SummaryOfSkills sumOfSkills={resume.summary_of_skills}/>
          <hr />
          <EmploymentHistory employmentHistory={resume.employment_history} />
          <hr />
          <Education />
          <hr />
          <Extracurricular />
        </div>
    );
}

export default RightSide;