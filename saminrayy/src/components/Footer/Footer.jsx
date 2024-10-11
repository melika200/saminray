import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "black", padding: "15px" }}>
        <div style={{ textAlign: "center", width: "80%", margin: "20px auto" }}>
          <div>
            <h5 style={{ color: "#fff" }}>Social Links</h5>
            <ul>
              <li>
                <a
                  className="footerLink"
                  href="https://www.linkdine.com/in/slobodan-gaji%c4%87-006bb8b8/"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  className="footerLink"
                  href="https://www.facebook.com/TwitterInc/"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
                </a>
              </li>
              <li>
                <a className="footerLink" href="https://www.pinterest.com/">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>{" "}
                  Pinterest
                </a>
              </li>
              <li>
                <a className="footerLink" href="https://www.youtube.com/">
                  <i className="fa fa-youtube" aria-hidden="true"></i> YouTube
                </a>
              </li>
              <li>
                <a
                  className="footerLink"
                  href="https://www.linkdine.com/in/slobodan-gaji%c4%87-006bb8b8/"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
