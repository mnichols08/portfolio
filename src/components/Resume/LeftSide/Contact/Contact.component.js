import Edit from "../../../Edit/Edit.component";

import "./contact.styles.css";
function Contact({ telephone, email, address }) {
  let phone;
  try {
    const telStr = telephone.toString();
    phone = `${telStr.slice(0, 3)} ${telStr.slice(3, 6)} ${telStr.slice(
      6,
      10
    )}`;
  } catch {
    phone = "240 675 2429";
  }
  return (
    <div className="contact" id="contact">
      <p>
        <a href={`tel:+1${telephone}`}>
          <Edit /> +1 {phone}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M17 5v17h-10v-17h10zm2-5h-2v3h-10c-1.104 0-2 .896-2 2v17c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-22zm-3 14h-8v-7h8v7z" />
          </svg>
        </a>
      </p>
      <p>
        <a href={`mailto:${email}`}>
          <Edit /> {email}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
          </svg>
        </a>
      </p>
      <address>
        <a href="#">
        <Edit /> {address}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z" />
          </svg>
        </a>
      </address>
    </div>
  );
}
export default Contact;
