import { useState } from "react";
import { NavLink } from "react-router-dom";
import useSticky from "../../hooks/use-sticky";
import SearchPopup from "../../components/common/search-popup";
import OffCanvas from "../../components/common/off-canvas";
import MobileOffCanvas from "../../components/common/mobile-offcanvas";
import SvgIconCom from "../../components/common/svg-icon-anim";
import HeaderNavMenus from "./header-nav-menus";
import { BtnBg } from "../../components/svg";

const Header = ({ style_2 = false }: { style_2?: boolean }) => {
  const { sticky, isStickyVisible } = useSticky();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);
  const [openMobileOffCanvas, setOpenMobileOffCanvas] = useState<boolean>(false);
  // handle open search (available for search trigger)
  const _handleOpenSearch = (audioPath: string) => {
    setIsSearchOpen(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  // handle open offcanvas
  const _handleOpenOffCanvas = (audioPath: string) => {
    setIsOffCanvasOpen(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  // handle open search
  const handleOpenMobileOffCanvas = (audioPath: string) => {
    setOpenMobileOffCanvas(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <header>
      <div id="sticky-header" className={`tg-header__area transparent-header ${sticky ? 'tg-sticky-menu' : ''} ${isStickyVisible ? 'sticky-menu__show' : ''}`}>
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler" onClick={() => handleOpenMobileOffCanvas('/assets/audio/click.wav')} >
                <i className="fas fa-bars"></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav align-items-center justify-content-between">
                  <div className="logo" style={{ minWidth: '180px' }}>
                    <NavLink to="/">
                      <img
                        src="/assets/logo/betwin-games-logo.webp"
                        alt="Betwin Games"
                        style={{ height: '38px', width: 'auto', display: 'block' }}
                      />
                    </NavLink>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex justify-content-center">
                    {/* nav menus */}
                    <HeaderNavMenus />
                    {/* nav menus */}
                  </div>
                  <div className="tgmenu__action d-none d-md-block" style={{ minWidth: '180px', textAlign: 'right' }}>
                    <ul className="list-wrap d-flex align-items-center justify-content-end m-0">

                      <li className="header-btn">
                        <NavLink to="/contact" className={`${style_2 ? 'tg-btn-3 tg-svg' : 'tg-border-btn'}`}>
                          <BtnBg />
                          {style_2 && <SvgIconCom icon={'/assets/img/icons/shape02.svg'} id="svg-2" />}
                          <i className="flaticon-edit"></i>sing in
                        </NavLink>
                      </li>

                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- header-search --> */}
      <SearchPopup setIsSearchOpen={setIsSearchOpen} isSearchOpen={isSearchOpen} />
      {/* <!-- header-search-end --> */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
      {/* off canvas end */}

      {/*mobile off canvas start */}
      <MobileOffCanvas openMobileOffCanvas={openMobileOffCanvas} setOpenMobileOffCanvas={setOpenMobileOffCanvas} />
      {/*mobile off canvas end */}
    </header>
  );
};

export default Header;
