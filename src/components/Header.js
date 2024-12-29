import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo1.png';

function Header() {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleServicesMenu = () => {
    setServicesMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.companyName}>
          DIGITAL INTERACTIVE
          <div className={styles.tagline}>Аренда интерактивных развлечений</div>
        </div>
      </div>

      <nav className={styles.navbar}>
        {/* ScrollLink для текущих секций */}
        <ScrollLink to="heroSection" smooth={true} duration={500} className={styles.navItem}>
          Главная
        </ScrollLink>
        <ScrollLink to="aboutSection" smooth={true} duration={500} className={styles.navItem}>
          О нас
        </ScrollLink>
        <ScrollLink to="servicesSection" smooth={true} duration={500} className={styles.navItem}>
          Услуги
        </ScrollLink>
        <ScrollLink to="clientsSection" smooth={true} duration={500} className={styles.navItem}>
          Отзывы
        </ScrollLink>
        <ScrollLink to="contactSection" smooth={true} duration={500} className={styles.navItem}>
          Контакты
        </ScrollLink>

        {/* Выпадающий список "Подробнее об услугах" */}
        <div 
          className={`${styles.navItemWithDropdown} ${servicesMenuOpen ? styles.dropdownActive : ''}`} 
          onMouseEnter={toggleServicesMenu} 
          onMouseLeave={toggleServicesMenu}
        >
          <span className={styles.navItem}>Подробнее об услугах</span>
          {servicesMenuOpen && (
            <div className={styles.dropdownMenu}>
              <Link to="/service1" className={styles.dropdownItem}>Виртуальная реальность</Link>
              <Link to="/service2" className={styles.dropdownItem}>Интерактивные стенды</Link>
              <Link to="/service3" className={styles.dropdownItem}>Аренда игрового оборудования</Link>
            </div>
          )}
        </div>

        {/* Переход на страницы */}
        <Link to="/rent-conditions" className={styles.navItem}>
          Условия аренды
        </Link>
        <Link to="/blog" className={styles.navItem}>
          Блог
        </Link>
      </nav>
    </header>
  );
}

export default Header;
