import {Link} from 'react-router-dom';
import {useState} from "react";
import {MdOutlineAccountBalanceWallet, MdSearch,  MdOutlineAccountCircle} from "react-icons/md"
import axios from 'axios';
//<MdOutlineAccountBalanceWallet /> 컴포넌트처럼 사용

/* 테일윈드 문법
text-white : 글자 흰색
bg:-blue-강도(0~모름)
px-5인풋창 안쪽 왼쪽여백
drop-shadow 바텀보더에 그림자
pr-24 인풋창 너비

drop다운하는법
부모에 flex, relative
<ul>Exlpore
<li>
<a href="#" className="hover:border-y-2"/>
</li>
</ul>
hover:border-y-2 위아래 보더


*/
function Navigation({walletHandler, account}) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const updateProfile = async () => {
      if(account) {
        await axios.post("http://localhost:4000/user", {
          account,
          name: "IMZ",
          about: "NoNe",
          CA: null,
        })
        .then((res)=> {
          console.log("완료")
        })
        .catch((err) => {
          console.log(err);
        } )
    }
  }


        return (
          <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 border-b-2">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between xl:x-full">
          <div className="w-full relative justify-between 
          lg:w-auto lg:static lg:block lg:justify-start
          xl:w-auto xl:static xl:block xl:justify-start">
            <Link to="/"
              className="text-sm font-bold flex leading-relaxed ml-3 mr-4 py-2 whitespace-nowrap uppercase "
            >
          <img src="https://opensea.io/static/images/logos/opensea.svg" className="mr-3 h-10"/>
              <span className="slef-center mt-1 text-lg  withespace-nowrap">BlueOcean</span>
              </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        <div>
     <div className="pt-2 relative mx-40 text-gray-600">
     <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
         <MdSearch />
     </button>
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-24 ml-5 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search items" />
       
      </div>
        </div>
        <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <Link to="/assets"
                  data-dropdown-toggle="dropdownNavbar"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >
                  <span className="flex justify-between items-center ml-2 hover:text-gray-600 hover:bg-gray-50">Explore</span>
                </Link>
              
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                 <span className="ml-2 hover:text-gray-600 hover:bg-gray-50">Resorces</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to='/create'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >
                 <span className="ml-2 hover:text-gray-600 hover:bg-gray-50">Create</span>
                </Link>
              </li>
               <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-500 hover:opacity-75"
                  href="#pablo"
                >
                 
                 <MdOutlineAccountCircle onClick={updateProfile} className=" text-lg leading-lg " size='24'/>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-500 hover:opacity-75"
                  href="#pablo"
                >
                 <MdOutlineAccountBalanceWallet onClick={walletHandler} className=" text-lg leading-lg" size='24' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          </>
        );
      }
export default Navigation