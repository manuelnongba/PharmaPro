import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import styles from '../styles/AdminHeader.module.css';

const AdminHeader = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
  };

  if (ref.current) {
    for (const i of ref.current.children) {
      i.onclick = () => {
        setOpen(!open);
      };
    }
  }

  return (
    <div className={`${styles.adminheader} ${open ? `${styles.navopen}` : ''}`}>
      <button className={styles.btnmobilenav}>
        <ion-icon
          class={styles.iconmobilenav}
          name="menu-outline"
          onClick={() => setOpen(true)}
        ></ion-icon>
        <ion-icon
          class={styles.iconmobilenav}
          name="close-outline"
          onClick={() => setOpen(false)}
        ></ion-icon>
      </button>

      <div className={styles.leftnav} ref={ref}>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/manageproducts">Manage Products</NavLink>
        <NavLink to="/admin/transact">Transact</NavLink>
        <NavLink to="/admin/stock">Stock</NavLink>
        <NavLink to="/admin/manageusers">Manage Users</NavLink>
      </div>
      <Logout />
    </div>
  );
};

export default AdminHeader;
