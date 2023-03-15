import './employment-history.styles.css';
function EmploymentHistory(){
    return(
        <section className="history" id="history">
          <h3>Employment History</h3>
          <ul className="job">
            <div>
              <h4>Ecommerce Consultant</h4>
              <h5>High Mountain Sports</h5>
            </div>
            <div>
              <h4>May 2019 - Present</h4>
              <h5>Oakland, MD</h5>
            </div>
          </ul>
          <ul>
            <li>I currently offer remote support for programs I wrote to integrate their POS with BigCommerce.</li>
            <li>Program written with a combination of SQL for exporting raw data, AutoIT for client side macros, Google App Script for server-side processing of information.</li>
            <li>Wildly successful project so far.</li>
          </ul>
          <ul className="job">
              <div>
                <h4>Ecommerce Manager</h4>
                <h5>High Mountain Sports</h5>
              </div>
              <div>
                <h4>May 2016 - May 2019</h4>
                <h5>Oakland, MD</h5>
              </div>
            </ul>
            <ul>
              <li>Handle all IT related problems and concerns which may occur. </li>
              <li>Build and maintain the online store using Magento 1.9.x, developing  skills in HTML, CSS, JavaScript and PHP. </li>
              <li>Monitor orders and facilitate shipping and returns of products.</li>
            </ul>
            <ul className="job">
                <div>
                  <h4>Rental Store Manager</h4>
                  <h5>High Mountain Sports</h5>
                </div>
                <div>
                  <h4>November 2011 - May 2016</h4>
                  <h5>Oakland, MD</h5>
                </div>
              </ul>
              <ul>
                <li>Trained and supervised a team of twelve at our Rental Store location.</li>
                <li>Performed weekly tests of ski and snowboard equipment.</li>
                <li>Developed a form to capture the information while testing in order to ensure mandatory tasks were being completed.</li>
              </ul>
              <ul className="job">
                  <div>
                    <h4>Department Head</h4>
                    <h5>Camps Airy & Louise</h5>
                  </div>
                  <div>
                    <h4>June 2004 - August 2015</h4>
                    <h5>Thurmont, MD</h5>
                  </div>
                </ul>
                <ul>
                  <li>Instructed staff to teach sports like skateboarding, BMX, Paintball, Go  Karts, Dune Buggies, and Mountain Boarding.</li>
                  <li>Effectively scheduled the department to maximize safety and fun.</li>
                  <li>Created a training program for staff to exceed at their jobs.</li>
                </ul>
          </section>
    )
}

export default EmploymentHistory;