import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import "./Gallery.scss";

const Gallery = () => {
  const galleryItems = [
    { title: "Office logo", img: new URL("/src/assets/gallery/scits_logo.jpg", import.meta.url).href },
    { title: "Computer Lab", img: new URL("/src/assets/gallery/computer_labs.jpg", import.meta.url).href },
    
    { title: "Modern Infrastructure", img: new URL("/src/assets/gallery/modern_infra.jpg", import.meta.url).href },
    { title: "Workshop Session", img: new URL("/src/assets/gallery/workshop image.jpg", import.meta.url).href },
    { title: "Certificate Distribution", img: new URL("/src/assets/gallery/certificate.jpg", import.meta.url).href },
    { title: "Office Photo", img: new URL("/src/assets/gallery/office_photo.jpg", import.meta.url).href },
    { title: "Student Projects", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop" },
    { title: "Tally Workshop", img: new URL("/src/assets/gallery/tally_workshop.jpg", import.meta.url).href },
  ];

  return (
    <div className="gallery-page">
      <Navbar />
      {/* logo image */}
            <img src="/Images/bannergallery.png" alt="SCITS Logo" className="navbar__image" />
      <main className="gallery-main">
        <div className="gallery-header">
          <h1 className="gallery-heading">Gallery</h1>
          <p className="gallery-subtitle">Explore our state-of-the-art facilities and student achievements</p>
        </div>

        <section className="gallery-section">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <Card key={index} className="gallery-card">
                <div className="image-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
