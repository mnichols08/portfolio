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
          <Education education={resume.Education}/>
          <hr />
          <Extracurricular extra={resume.Extracurricular}/>
        </div>
    );
}

export default RightSide;