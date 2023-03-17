import SummaryOfSkills from './SummaryOfSkills/SummaryOfSkills.component';
import EmploymentHistory from './EmploymentHistory/EmploymentHistory.component';
import Education from './Education/Education.component';
import Extracurricular from './Extracurricular/Extracurricular.component';
function RightSide({resume}) {
    return(
        <div>
          <hr />
          <SummaryOfSkills sumOfSkills={resume.skills}/>
          <hr />
          <EmploymentHistory employmentHistory={resume.employment} />
          <hr />
          <Education education={resume.education}/>
          <hr />
          <Extracurricular extra={resume.extracurricular}/>
        </div>
    );
}

export default RightSide;