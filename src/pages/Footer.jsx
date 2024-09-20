import SocialMedia from "../components/social/SocialMedia"
import Logo from "../assets/HomerLogo.png"

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-neutral-content p-10">
            <aside>
                <img 
                    src={Logo}
                    alt="Homer Logo"
                    className="
                        h-8 w-14
                        md:h-10 md:w-20
                        lg:h-12 lg:w-20
                    "
                />
                <p className="font-bold">
                    Designed & Built by Homer Salazar
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-neutral-content">
                    <SocialMedia />
                </div>
            </nav>
        </footer>
    )
}

export default Footer