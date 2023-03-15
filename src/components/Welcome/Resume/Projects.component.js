import './projects.styles.css';
function Projects(){
    return(
        <ul>
            <h3>Recent Projects</h3>
                <hr />
            <h4>NCR CounterPoint to BigCommerce</h4>
            <ul>
                <li>Conceptualized and wrote a program to extract product information from enterprice level ERP / POS</li>
                <li>Utilized SQL, AutoIT and Google App Script to automate the processing of required data</li>
                <li>Ongoing Support as needed</li>
            </ul>
            <h4>Magento Theme to BigCommerce</h4>
            <ul>
                <li>Took a Magento 1 Theme and Converted to BigCommerce</li>
                <li>Using BigCommerce Stencil API, completely custom and better than Magento.</li>
                <li>Remains in sync with rental addons, custom front-end apps.</li>
            </ul>
            <hr />
        </ul>
    )
}
export default Projects;