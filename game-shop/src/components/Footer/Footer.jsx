import { FaGithub } from "react-icons/fa";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<p>Made by Jack Boswell</p>
			<Link to="https://github.com/jwbswll/game-shop">
				<FaGithub className={style.icon} />
			</Link>
		</footer>
	);
};

export default Footer;
