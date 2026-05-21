"use client"; // Bắt buộc có dòng này để xử lý gõ tìm kiếm và click giỏ hàng

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Đang tìm kiếm bánh: ${searchQuery}`);
      // Sau này bạn có thể lập trình chuyển trang kết quả tìm kiếm ở đây
    }
  };

  return (
    <header className={styles.header} style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 40px",
      background: "#fff",
      boxShadow: "0 2px 10px rgba(255, 105, 135, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      width: "100%",
      boxSizing: "border-box"
    }}>
      
      {/* 1. KHU VỰC MENU ĐIỀU HƯỚNG (Bên trái) */}
      <nav className={styles.nav}>
        <ul style={{
          display: "flex",
          gap: "25px",
          padding: 0,
          margin: 0,
          listStyle: "none"
        }}>
          <li><Link href="/" style={{ textDecoration: "none", color: "inherit", fontWeight: "600" }}>Home</Link></li>
          <li><Link href="#" style={{ textDecoration: "none", color: "inherit", fontWeight: "600" }}>Menu</Link></li>
          <li><Link href="#" style={{ textDecoration: "none", color: "inherit", fontWeight: "600" }}>About</Link></li>
          <li><Link href="#" style={{ textDecoration: "none", color: "inherit", fontWeight: "600" }}>Contact</Link></li>
        </ul>
      </nav>

      {/* 2. THANH TÌM KIẾM MỚI THÊM (Chính giữa) */}
      <form onSubmit={handleSearch} style={{
        flex: "0 1 400px", /* Độ rộng tối đa 400px, tự co giãn */
        margin: "0 20px",
        display: "flex",
        position: "relative"
      }}>
        <input
          type="text"
          placeholder="Tìm kiếm bánh kem, bánh ngọt..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 40px 10px 15px",
            borderRadius: "20px",
            border: "2px solid #ffe0ea",
            outline: "none",
            fontSize: "14px",
            transition: "all 0.3s ease",
            backgroundColor: "#fff5f9"
          }}
          // Hiệu ứng đổi màu viền khi click vào ô nhập
          onFocus={(e) => e.target.style.borderColor = "#ff85a2"}
          onBlur={(e) => e.target.style.borderColor = "#ffe0ea"}
        />
        {/* Nút kính lúp */}
        <button type="submit" style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "16px"
        }}>
          🔍
        </button>
      </form>

      {/* 3. LOGO VÀ GIỎ HÀNG (Bên phải) */}
      <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
        
        {/* ICON GIỎ HÀNG MỚI THÊM */}
        <Link href="#" style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "#ffe0ea",
          textDecoration: "none",
          transition: "all 0.2s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <span style={{ fontSize: "20px" }}>🛒</span>
          {/* Bong bóng hiển thị số lượng sản phẩm */}
          <span style={{
            position: "absolute",
            top: "-4px",
            right: "-4px",
            background: "#ff4d6d",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "11px",
            fontWeight: "bold",
            boxShadow: "0 2px 5px rgba(0,0,0,0.15)"
          }}>
            0
          </span>
        </Link>

        {/* LOGO BÁNH KEM CỦA BẠN */}
        <div>
          <Image src="/logoo.png" alt="Logo" width={70} height={60} style={{ objectFit: "contain" }} />
        </div>

      </div>

    </header>
  );
}