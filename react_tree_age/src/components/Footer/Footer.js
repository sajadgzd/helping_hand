import React from "react";


function Footer() {
    return (
        <footer className="page-footer" style={{
            "height": "auto"
        }}>

            <div className="row center-align" style={{ "marginTop": "10px", "padding": "10px", marginLeft: "40%" }}>
                <div className="col l4  s6 center-align">
                    <h6 className="white-text center-align">Developers </h6>
                    <span style={{ fontSize: "16px" }}>
                        <a className="grey-text text-lighten-3" href="https://github.ibm.com/Eram-Manasia/tree-age">Tree-Age Team</a>
                    </span>
                </div>
            </div>
            <div className="footer-copyright">
                <div style={{ "margin": "0 auto" }}>
                    2020 NA IBM Intern Hackathon
        </div>
            </div>
        </footer>
    );
}

export default Footer;