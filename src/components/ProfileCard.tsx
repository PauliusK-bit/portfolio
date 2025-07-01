import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./ProfileCard.css";
import { SiGmail } from "react-icons/si";

const ProfileCard = () => {
  return (
    <>
      <div>
        <img
          className="shai"
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2025-05/250521-Shai-Gilgeous-Alexander-mn-1535-07d39f.jpg"
          alt="Image"
        />
        <div className="description">
          <p>Paulius Kareiva</p>
          <p>Web Kūrėjas</p>
          <p>
            Specializuojuosi šiuolaikiniuose web sprendimuose naudojant React,
            JavaScript ir pažangiausias technologijas. Kuriu interaktyvias ir
            patrauklias svetaines
          </p>
        </div>
        <div>
          <button>Peržiūrėti darbus</button>
          <button>Atsisiųsti CV</button>
        </div>
        <div className="socials">
          <ul>
            <a href="https://github.com/PauliusK-bit">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <SiGmail />
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
