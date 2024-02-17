import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Web Sitesi Başlığı</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="/login">Giriş Yap</Link>
          </li>
          <li>
            <Link to="/products">Ürünler</Link>
          </li>
          <li>
            <Link to="/purchase-history">Satın Alma Geçmişi</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
