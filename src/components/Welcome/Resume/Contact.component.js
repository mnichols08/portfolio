import './contact.styles.css';
function Contact(){
    return(
        <div className="contact" id="contact">
            <phone>
            <a href="tel:+12406752429">
                +1 240-675-2429
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v17h-10v-17h10zm2-5h-2v3h-10c-1.104 0-2 .896-2 2v17c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-22zm-3 14h-8v-7h8v7z"/></svg>
            </a>
            </phone>
            <email>
                <a href="mailto:mnix@journeytocode.io">
                    mnix@journeytocode.io
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
                </a>
            </email>
            <address>
            <a href="#">
            Gormania, WV 26720
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"/></svg>
            </a>
            </address>
    </div>
    )
}
export default Contact;