function Footer() {
  return (
    <footer className="watermark">
      <p>
        <a href="https://github.com/mnichols08/" target="_blank">
          <i className="fas fa-code text-green"></i> with{" "}
          <i className="fas fa-heart text-red"></i> by{" "}
          <i className="fab fa-codepen text-yellow">mnichols08</i>
        </a>
        &nbsp; Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
