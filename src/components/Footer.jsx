import  insta from "../../public/images/icon-instagram.svg"
import  tiktok from "../../public/images/icon-tiktok.svg"
import  bluesky from "../../public/images/icon-bluesky.svg"

function Footer() {
    return <>
        <div className="container">
            <section className="cta-section">
                <div className="cta-box">
                    <h2>Ready to cook smarter?</h2>
                    <p>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                    <button className="cta-btn">Browse recipes</button>
                </div>

                <div className="footer">
                    <p>Made with ❤️ and 🥑</p>
                    <span className="footer__social">
                    <img src={insta} alt="social" />
                    <img src={bluesky} alt="social" />
                    <img src={tiktok} alt="social" />

                    </span>
                </div>
            </section>
        </div>
    </>
}

export default Footer