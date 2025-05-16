import Image from "next/image";
import Logo from  "../_assets/Logo.svg"

const Header = () => {

  // TODO Make the bars button show up only on mobile

  return (
    <header className="bg-background flex justify-center items-center text-alice">
      <div className="content-wrapper flex justify-between items-center h-[70px] px-[25px] sm:px-0 overflow-x-hidden">
        <Image src={Logo} width={70} alt="Logo do Leandro Ferreira"/>

        <nav className="hidden sm:flex justify-center items-center gap-[25px] pr-[3px]">
          <ul className="flex justify-center items-center gap-[15px] list-none">
            <li><a aria-label="Saiba mais sobre mim" rel="canonical" href="#about">Sobre mim</a></li>
            <li><a aria-label="Saiba mais sobre meus projetos" rel="canonical" href="#project">Projetos</a></li>
            <li><a aria-label="Entre em contato" rel="canonical" href="#contact">Contato</a></li>
          </ul>

          <a target="_blank" aria-label="Veja mais projetos" rel="external" href="https://github.com/NotJotunnn/Projects" className="group">
            <button className="flex justify-center items-center group-hover:bg-background cursor-pointer bg-accent w-[24px] h-[24px] rounded-full outline-3 outline-accent">
              <i className="fa-brands fa-github text-[24px] group-hover:text-accent text-background"></i>
            </button>
          </a>
          <a target="_blank" aria-label="Perfil no Linkedin" rel="external" href="https://www.linkedin.com/in/leandro-ferreira-ab751b248/" className="group">
            <button className="flex justify-center items-center group-hover:bg-background cursor-pointer bg-accent w-[24px] h-[24px] rounded-full outline-3 outline-accent">
              <i className="fa-brands fa-linkedin-in text-[16px] group-hover:text-accent text-background"></i>
            </button>
          </a>
        </nav>

        <button className="block sm:hidden">
          <i className="fa-sharp fa-solid fa-bars text-[24px]"></i>
        </button>
      </div>
    </header>
  );
}
 
export default Header;