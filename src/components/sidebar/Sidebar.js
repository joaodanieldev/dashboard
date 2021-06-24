import './Sidebar.css'
import logo from '../../assets/avatar2.png'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="NPX Telecomunicação" />
          <h1>Beatrix</h1>
        </div>

        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-minus-square"></i>
          <a href="#">Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar__link">
          <i className="fa fa-tachometer-alt"></i>
          <a href="#">Area administrativa</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-phone"></i>
          <a href="#">PBX</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-headphones"></i>
          <a href="#">Call Center</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-smile"></i>
          <a href="#">Qualidade</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-lock"></i>
          <a href="#">Administração</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-minus-square"></i>
          <a href="#">Area administrativa</a>
        </div>
        <h2>Suporte</h2>
        <div className="sidebar__link">
          <i className="fa fa-server"></i>
          <a href="#">Servidores</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-exclamation-triangle"></i>
          <a href="#">Diagnosticos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user"></i>
          <a href="#">Usuarios</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;