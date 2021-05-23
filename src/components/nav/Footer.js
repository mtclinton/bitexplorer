import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <div className="links">

                        <div className="level-item">
                            <a href="#">Link One</a>
                        </div>
                        <div className="level-item">
                            <a href="#">Link One</a>
                        </div>
                        <div className="level-item">
                            <a href="#">Link One</a>
                        </div>
                    </div>
                    <br />
                        <p>
                            <a href="https://bulma.io">
                                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128"
                                     height="24" />
                            </a>
                        </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;