import '../assets/Css/Header.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaBars, FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';
import { CurrencyContext } from '../context/CurrencyContext';
const Header = ({settingSearch}) => {
    const [lang,setLang] = useContext(LangContext);
       
    const changeLang = ()=>{
        if (lang==="AZ") {
            setLang("EN");
            localStorage.setItem('lang','EN');
        }else{
            setLang("AZ")
            localStorage.setItem('lang','AZ');
        }
    }
       const [theme,setTheme] = useContext(ThemeContext);
        
        const changeTheme = ()=>{
            
            if (theme==="light") {
                setTheme("dark");
                localStorage.setItem('theme','dark');
            }else{
                setTheme("light")
                localStorage.setItem('theme','light');
            } 
            document.body.setAttribute('data-bs-theme',theme);
        }

        const [currency,setCurrency] = useContext(CurrencyContext);
        
        const changeCurrency = ()=>{
            
            if (currency==="AZN") {
                setCurrency('USD');
                localStorage.setItem('currency','USD');
            }else{
                setCurrency('AZN')
                localStorage.setItem('currency','AZN');
            } 
        
        }


  return (
    <div className="header w-100">
        <div className="ad-head py-1 text-white">
            <div className="inner-ad-head container gap-1 text-12 d-flex flex-wrap justify-content-center justify-content-xl-around align-items-center ">
            <div className="announce fw-bold">FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</div>
            <div className="time d-flex align-items-center justify-content-center gap-2">
                <div className="gray">{lang==="AZ"?"Satışın sonuna qədər":"Until the end of the sale:"}</div>
                <span className="days d-flex align-items-center gap-1"><h5 className="align-content-center fw-bolder mt-2" >23</h5><div className="gray">days</div></span>
                <span className="days d-flex align-items-center gap-1"><h5 className="align-content-center fw-bolder mt-2" >23</h5><div className="gray">days</div></span>
                <span className="days d-flex align-items-center gap-1"><h5 className="align-content-center fw-bolder mt-2" >23</h5><div className="gray">days</div></span>
                <span className="days d-flex align-items-center gap-1"><h5 className="align-content-center fw-bolder mt-2" >23</h5><div className="gray">days</div></span>
            </div>
            </div>
        </div>
        
        <div className="quick-menu container-fluid py-2 d-none d-xl-flex justify-content-between ">
            <div className="left d-flex gap-2">
                
                <a className="text-decoration-none hov" href="#">About Us</a>
                <a className="text-decoration-none hov" href="#">My account</a>
                <a className="text-decoration-none hov" href="#">Wishlist</a>
                
                <div className="splitter"></div>
                <div className="delivery-showoff">We deliver to you everyday from <span className="text-danger fw-bolder">7:00 to 23:00</span></div>

            </div>
            <div className="right d-flex gap-3">
            <div className="feat-box-lang">
                   <Button variant='warning' onClick={changeTheme}>{theme==="dark"?"Light":"Dark"}</Button>
                </div>
                <div className="feat-box-lang">
                   <Button variant='danger' onClick={changeLang}>{lang==="AZ"?"EN":"AZ"}</Button>
                </div>
                <div className="feat-box-curr">
                <Button variant='danger'onClick={changeCurrency}>{currency==='USD'?'AZN':'USD'}</Button>
                </div>
                <div className="tag track">Order Tracking</div>

            </div>
        </div> 
        <hr className="d-none d-xl-flex" />
        <div className="w-100">
        <div className="search-head container-fluid  justify-content-between d-flex align-items-center">
            <FaBars className="d-block mt-2 d-xl-none fs-3" />
            <img className="mt-3 mt-xl-0" src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/grogin-logo-dark.png" alt="Logo" />
            <div className="location ms-4 gap-2 d-none d-xl-flex align-items-center justify-content-center">
                <IoLocationOutline className="icon-loc" />
                <div className="text pt-4">Deliver to <p className="fw-bold">all</p></div>
            </div>
            <div className="search d-none d-xl-block position-relative">
                <input onChange={(e)=>{settingSearch(e.target.value)}}  className="search-text  " type="text" placeholder="Search for products, categories or brands..." />
                <FaSearch className="lupa position-absolute" />

            </div>
            <div className="specials col d-none d-xl-flex align-items-center h-auto gap-3">
                <div className="spec-el text-center"><FaRegUser className="icons-spec" /><p>Account</p></div>
                <div className="spec-el text-center"><FaRegHeart className="icons-spec" /><p>Wishlist</p></div>
                <div className="spec-el text-center"><FiShoppingCart className="icons-spec" /><p>Your cart</p></div>
            </div>
            <FiShoppingCart className="icons-spec mt-2 d-block d-xl-none fs-2" />
        </div>
        </div>
        <hr />
        <div className="navigator container-fluid d-none d-xl-flex justify-content-between">
            <div className="left">
                <ul className="list-unstyled d-flex gap-4 fw-bold">
                    <li className="nav-item tag">Home <IoIosArrowDown /></li>
                    <li className="nav-item tag ">Shop <IoIosArrowDown /></li>
                    <li className="nav-item tag active">Fruits & Vegetables</li>
                    <li className="nav-item tag">Beverages</li>
                    <li className="nav-item tag ">Blog</li>
                    <li className="nav-item tag">Contact</li>
                </ul>
            </div>
            <div className="right fw-bold d-flex gap-3">
                <div className="tag hov">Trending Products <IoIosArrowDown /></div>
                <div className="tag d-flex gap-2 align-items-center text-danger">Almost Finished <span className="Sale">SALE</span> <IoIosArrowDown /></div>
            </div>
        </div>
        <hr className="d-none d-xl-flex" />
        <div className="direction container-fluid">
            <div>Home {">"} <span>Shop</span></div>
        </div>
    </div>
  )
}

export default Header