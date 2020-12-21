import React from 'react';


function Dashboard(){
    return(
      
<nav className="navbar navbar-expand-xl navbar-dark bg-primary pmd-navbar pmd-z-depth fixed-top">
<div className="container-fluid">
    <a className="navbar-brand" href="#">LCMS</a>
    <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-globe">
            <span class="badge badge-danger">11</span>
          </i>
        </a>
      </li>
    </ul>
  
    <div className="dropdown pmd-dropdown pmd-user-info ml-auto">
        <a href="" className="btn-user dropdown-toggle media align-items-center" data-toggle="dropdown" data-sidebar="true" aria-expanded="false">
            <img className=" rounded-circle mr-2" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="40" height="40" alt="avatar"/>
            
        </a>
        <ul className="dropdown-menu dropdown-menu-right" role="menu">
            <a className="dropdown-item" >Edit Profile</a>
            <a className="dropdown-item">Logout</a>
        </ul>
    </div>
    </div>
</nav>
    );
}

export default Dashboard;