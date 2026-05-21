import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/Header/Header"; // KHÔNG cần .js
import Footer from "./components/Footer/Footer";

export default function Home() {
  const products = [
    { id: 1, name: "Bánh kem dâu tây", price: "300.000₫", oldPrice: "350.000₫", discount: "-14%", img: "/p1.jpg", remain: "Còn 30/30 suất" },
    { id: 2, name: "Bánh kem socola", price: "350.000₫", oldPrice: "400.000₫", discount: "-12%", img: "/p2.jpg", remain: "Còn 25/30 suất" },
    { id: 3, name: "Bánh kem vani", price: "280.000₫", oldPrice: "300.000₫", discount: "-7%", img: "/p3.jpg", remain: "Còn 20/30 suất" },
    { id: 4, name: "Bánh kem trái cây", price: "400.000₫", oldPrice: "450.000₫", discount: "-11%", img: "/p4.jpg", remain: "Còn 15/30 suất" },
    { id: 5, name: "Bánh kem dâu mini", price: "180.000₫", oldPrice: "200.000₫", discount: "-10%", img: "/p5.jpg", remain: "Còn 12/30 suất" },
    { id: 6, name: "Bánh kem socola mini", price: "200.000₫", oldPrice: "220.000₫", discount: "-9%", img: "/p6.jpg", remain: "Còn 18/30 suất" },
    { id: 7, name: "Bánh kem socola mini", price: "200.000₫", oldPrice: "220.000₫", discount: "-9%", img: "/p7.png", remain: "Còn 18/30 suất" },
    { id: 8, name: "Bánh kem socola mini", price: "200.000₫", oldPrice: "220.000₫", discount: "-9%", img: "/p8.jpg", remain: "Còn 18/30 suất" }
  ];

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <div className={styles.item2}>
        <div className={styles.mainContent}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.mainProduct}>
                <div className={styles.productImage}>
                  <Image src={product.img} alt={product.name} width={220} height={150} style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.productName}>
                  <h5>{product.name}</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>{product.price}</strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>{product.oldPrice}</label>
                    <small className={styles.percent}>{product.discount}</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
                  <span>{product.remain}</span>
                </div>
              </div>
              <div className={styles.buyButton}>
                <Link href="/">Mua ngay</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}