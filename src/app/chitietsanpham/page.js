"use client"; // Bắt buộc thêm dòng này để chạy hiệu ứng chuyển ảnh và tương tác

import { useState, useEffect } from "react";
import styles from "../page.module.css"; 
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ChiTietSanPham() {
  // 1. Danh sách các ảnh của sản phẩm hiện tại
  const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động chuyển ảnh lớn sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // 2. Danh sách các sản phẩm nhỏ hiển thị ở dưới (Lấy dữ liệu từ trang chủ của bạn)
  const relatedProducts = [
    { id: 2, name: "Bánh kem socola", price: "350.000₫", img: "/p2.jpg" },
    { id: 3, name: "Bánh kem vani", price: "280.000₫", img: "/p3.jpg" },
    { id: 4, name: "Bánh kem trái cây", price: "400.000₫", img: "/p4.jpg" },
    { id: 5, name: "Bánh kem dâu mini", price: "180.000₫", img: "/p5.jpg" },
  ];

  return (
    <div className={styles.container}>
      {/* Hiển thị Header */}
      <Header />

      <main style={{ minHeight: '70vh', padding: '50px 20px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
        
        {/* KHU VỰC CHI TIẾT SẢN PHẨM TRÊN */}
        <div style={{
          display: "flex",
          gap: "40px",
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(255, 105, 135, 0.15)"
        }}>
          {/* KHUNG ẢNH BÁNH SLIDESHOW */}
          <div style={{ 
            flex: 1, 
            position: "relative", 
            aspectRatio: "4/3", 
            overflow: "hidden",
            borderRadius: "15px"
          }}>
            {images.map((src, index) => (
              <img 
                key={src}
                src={src}
                alt={`Bánh kem góc chụp ${index + 1}`}
                style={{ 
                  width: "100%", 
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: index === currentIndex ? 1 : 0, 
                  transition: "opacity 0.8s ease-in-out", 
                  borderRadius: "15px"
                }}
              />
            ))}
          </div>

          {/* THÔNG TIN SẢN PHẨM */}
          <div style={{ flex: 1 }}>
            <h1 style={{ color: "#e91e63" }}>Bánh kem dâu tây 🎂</h1>
            <h2 style={{ color: "#ff4d6d", marginTop: "10px" }}>300.000₫</h2>
            <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
              Bánh kem dâu tây tươi ngon, mềm mịn, vị ngọt dịu. Phù hợp cho sinh nhật, lễ kỷ niệm hoặc tặng người thân.
            </p>
            <ul style={{ marginTop: "15px", color: "#555" }}>
              <li>✔ Nguyên liệu tươi 100%</li>
              <li>✔ Không chất bảo quản</li>
              <li>✔ Trang trí đẹp mắt</li>
              <li>✔ Nhận đặt theo yêu cầu</li>
            </ul>

            <button style={{
              marginTop: "20px",
              padding: "12px 20px",
              background: "linear-gradient(135deg, #ff85a2, #ff5c8a)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              🛒 Thêm vào giỏ hàng
            </button>

            <div style={{ marginTop: "20px" }}>
              <a href="/" style={{ color: "#ff5c8a", textDecoration: "none" }}>
                ← Quay lại trang chủ
              </a>
            </div>
          </div>
        </div>

        {/* KHU VỰC THÊM MỚI: CÁC KHUNG SẢN PHẨM NHỎ Ở DƯỚI */}
        <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
          <h3 style={{ 
            color: "#333", 
            marginBottom: "20px", 
            borderLeft: "4px solid #ff5c8a", 
            paddingLeft: "10px",
            fontSize: "20px" 
          }}>
            Sản phẩm tương tự bạn có thể thích
          </h3>
          
          {/* Lưới chứa các khung nhỏ */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
            gap: "20px" 
          }}>
            {relatedProducts.map((product) => (
              <div 
                key={product.id} 
                style={{
                  background: "#fff",
                  borderRadius: "15px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 5px 15px rgba(255, 105, 135, 0.08)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer"
                }}
                // Hiệu ứng hover nhẹ bằng JS (hoặc có thể đưa vào file css nếu muốn)
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <img 
                  src={product.img} 
                  alt={product.name} 
                  style={{ 
                    width: "100%", 
                    height: "130px", 
                    objectFit: "cover", 
                    borderRadius: "10px" 
                  }} 
                />
                <h4 style={{ 
                  fontSize: "14px", 
                  color: "#333", 
                  margin: "10px 0 5px 0",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  {product.name}
                </h4>
                <p style={{ 
                  fontSize: "14px", 
                  color: "#ff4d6d", 
                  fontWeight: "bold", 
                  margin: "0" 
                }}>
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Hiển thị Footer */}
      <Footer />
    </div>
  );
}