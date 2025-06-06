import Button from '@mui/material/Button';
import './AdminSlidebar.css';
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GiHotMeal } from "react-icons/gi";
import { FaBoxOpen, FaTools, FaCog } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { IoDocumentsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Slidebar() {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    function isOpenSubMenu(index) {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }

    return (
        <div className='slidebar'>
            <ul>
                <li>
                    <Link to={'Admin-DashboardAdmin'}>
                        <Button className='w-100'>
                            <span className='icon'><MdSpaceDashboard /></span>
                            Dashboard
                            <span className='arrow'></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTab === 1 ? 'active' : ''}`} 
                        onClick={() => isOpenSubMenu(1)}>
                        <span className='icon'><GiHotMeal /></span>
                        Meal
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'collapsed show' : 'collapsed'}`}> 
                        <ul className="submenu">
                            <li><Link to="Admin-AddMealTime">Add Meal Time</Link></li>
                            <li><Link to="Admin-AddMealType">Add Meal Type</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTab === 2 ? 'active' : ''}`} 
                        onClick={() => isOpenSubMenu(2)}>
                        <span className='icon'><FaBoxOpen /></span>
                        Assets
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 2 && isToggleSubmenu === true ? 'collapsed show' : 'collapsed'}`}> 
                        <ul className="submenu">
                            <li><Link to="/Admin-Asset">Asset_Home</Link></li>
                            <li><Link to="/Admin-AssetMonitoring">Asset_Monitoring</Link></li>
                            
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTab === 3 ? 'active' : ''}`} 
                        onClick={() => isOpenSubMenu(3)}>
                        <span className='icon'><FaTools /></span>
                        <Link to="Admin-maintenanceHome">Maintenance</Link>
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 3 && isToggleSubmenu === true ? 'collapsed show' : 'collapsed'}`}> 
                        <ul className="submenu">
                        <li><Link to="Admin-maintenanceDetails">Maintenance</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTab === 4 ? 'active' : ''}`} 
                        onClick={() => isOpenSubMenu(4)}>
                        <span className='icon'><PiUsersFill /></span>
                        Users
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 4 && isToggleSubmenu === true ? 'collapsed show' : 'collapsed'}`}> 
                        <ul className="submenu">
                            <li><Link to="Admin-users">User list</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button 
                        className={`w-100 ${activeTab === 5 ? 'active' : ''}`} 
                        onClick={() => isOpenSubMenu(5)}>
                        <span className='icon'><IoDocumentsSharp /></span>
                        <Link to="Admin-ReportHome">Reports</Link>
                        <span className='arrow'><IoIosArrowForward /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 5 && isToggleSubmenu === true ? 'collapsed show' : 'collapsed'}`}> 
                        <ul className="submenu">
                        <li><Link to="AssetReport">Asset Report</Link></li>
                            <li><Link to="MealReport">Meal Report</Link></li>
                            <li><Link to="#">Maintenance report</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>

            <div className="settings-container">
                <Link to={'/settings/account'}>
                    <div className="settings-button">
                        <FaCog /> Profile Settings
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Slidebar;
