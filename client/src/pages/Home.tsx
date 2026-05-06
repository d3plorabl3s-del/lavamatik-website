export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', fontFamily: "'Poppins', 'Segoe UI', sans-serif" }}>
      {/* Floating Social Icons */}
      <div style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <a href="https://wa.me/573003865302" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          cursor: 'pointer',
          background: '#25D366',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s'
        }} title="WhatsApp">💬</a>
        <a href="https://instagram.com" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          cursor: 'pointer',
          background: '#E4405F',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s'
        }} title="Instagram">📷</a>
        <a href="https://facebook.com" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          cursor: 'pointer',
          background: '#1877F2',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s'
        }} title="Facebook">f</a>
        <a href="tel:+573003865302" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          cursor: 'pointer',
          background: '#FF6B6B',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s'
        }} title="Llamar">☎️</a>
      </div>

      {/* Header - Night Theme */}
      <header style={{
        background: 'rgba(15, 23, 42, 0.95)',
        padding: '15px 20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '2px solid rgba(102, 126, 234, 0.3)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>🌈 LAVAMATIK</div>
          <div style={{
            background: '#25D366',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '20px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>📞 300-386-5302</div>
        </div>
      </header>

      {/* Hero Section - Fullscreen with Background Image */}
      <section style={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url(/manus-storage/hero_main_b62c50ca.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(15, 23, 42, 0.6)',
          zIndex: 1
        }}></div>

        {/* Circular Logo */}
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(102, 126, 234, 0.5)',
          border: '3px solid rgba(255, 255, 255, 0.2)'
        }}>
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663631426047/ehiPopnu9JFvqKXzFB4o6M/lavamatik_logo_3d-fZ5pcrjnritvKL5rioqGpX.webp" alt="LAVAMATIK Logo" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
        </div>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          maxWidth: '600px',
          padding: '0 20px',
          marginTop: '80px'
        }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '800',
            marginBottom: '20px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            letterSpacing: '-1px'
          }}>Limpieza Cósmica ✨</h1>
          <p style={{
            fontSize: '20px',
            marginBottom: '20px',
            opacity: 0.95,
            fontWeight: '300'
          }}>Alquila nuestras lavadoras grandes de última generación en toda el área de Fusagasugá</p>
          <p style={{
            fontSize: '16px',
            opacity: 0.85,
            marginBottom: '30px',
            fontWeight: '300'
          }}>Servicio rápido, confiable y a domicilio</p>
          <a href="https://wa.me/573003865302?text=Hola%20LAVAMATIK%2C%20quiero%20agendar%20una%20lavadora" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #25D366, #20ba58)',
            color: 'white',
            padding: '14px 40px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)'
          }}>Agendar Ahora por WhatsApp</a>
        </div>
      </section>

      {/* Services Section - Night Theme */}
      <section style={{
        position: 'relative',
        margin: '0',
        padding: '80px 20px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/manus-storage/services_banner_682262eb.png)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: 1,
          opacity: 0.15
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '42px',
            marginBottom: '50px',
            color: 'white',
            fontWeight: '700',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
          }}>🧺 Nuestros Servicios</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
          }}>
            {[
              { title: '3 Horas', price: '$10.000', desc: 'Lavadora Grande - Tiempo limitado', link: 'Quiero%20agendar%203%20horas%20de%20lavadora' },
              { title: '5 Horas', price: '$15.000', desc: 'Lavadora Grande - Media jornada', link: 'Quiero%20agendar%205%20horas%20de%20lavadora' },
              { title: 'Noche Entera', price: '$15.000', desc: 'Lavadora Grande - Servicio nocturno', link: 'Quiero%20agendar%20noche%20entera' },
              { title: '24 Horas', price: '$24.000', desc: 'Lavadora Grande - Un día completo', link: 'Quiero%20agendar%2024%20horas' },
              { title: 'Fin de Semana', price: '$24.000', desc: 'Lavadora Grande - Sábado y domingo', link: 'Quiero%20agendar%20fin%20de%20semana%20completo' },
              { title: '🚚 Entrega a Domicilio', price: 'GRATIS', desc: 'En toda el área de Fusagasugá', link: 'Necesito%20entrega%20a%20domicilio' }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: 'rgba(30, 41, 59, 0.8)',
                borderRadius: '15px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  color: '#667eea',
                  marginBottom: '15px',
                  fontSize: '22px',
                  fontWeight: '600'
                }}>{service.title}</h3>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#25D366',
                  margin: '20px 0'
                }}>{service.price}</div>
                <div style={{
                  color: '#cbd5e1',
                  marginBottom: '25px',
                  fontSize: '14px',
                  fontWeight: '300'
                }}>{service.desc}</div>
                <a href={`https://wa.me/573003865302?text=${service.link}`} style={{
                  background: 'linear-gradient(135deg, #25D366, #20ba58)',
                  color: 'white',
                  padding: '12px 25px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'all 0.3s',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)'
                }}>Agendar</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Night Theme */}
      <section style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
        padding: '80px 20px',
        margin: '0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '42px',
            marginBottom: '50px',
            color: 'white',
            fontWeight: '700'
          }}>⭐ Lo Que Dicen Nuestros Clientes</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {[
              { stars: '★★★★★', text: '"Excelente servicio, muy rápido y confiable. Las lavadoras están en perfecto estado. ¡Recomendado!"', author: '- María García, Fusagasugá' },
              { stars: '★★★★★', text: '"El mejor servicio de alquiler en la ciudad. Atención al cliente de primera. Volveré pronto."', author: '- Juan Rodríguez, Fusagasugá' },
              { stars: '★★★★★', text: '"Muy buena experiencia. Entrega rápida y el personal muy amable. Precio justo."', author: '- Carmen López, Fusagasugá' },
              { stars: '★★★★★', text: '"Lavadoras de excelente calidad. El servicio a domicilio es muy conveniente. ¡Muchas gracias!"', author: '- Pedro Martínez, Fusagasugá' }
            ].map((review, idx) => (
              <div key={idx} style={{
                background: 'rgba(102, 126, 234, 0.1)',
                color: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  color: '#FFD700',
                  marginBottom: '15px',
                  fontSize: '20px'
                }}>{review.stars}</div>
                <div style={{
                  marginBottom: '20px',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: '#e2e8f0'
                }}>{review.text}</div>
                <div style={{
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#cbd5e1'
                }}>{review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Night Theme */}
      <section style={{
        maxWidth: '1200px',
        margin: '80px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '42px',
          marginBottom: '50px',
          color: 'white',
          fontWeight: '700',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
        }}>📸 Galería de Clientes</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {[
            '/manus-storage/hero_washer_b76a3984.png',
            '/manus-storage/paisa_character_bd08af45.png',
            '/manus-storage/delivery_icon_bffc139d.png',
            '/manus-storage/services_banner_682262eb.png',
            '/manus-storage/gallery_bg_fc2b2213.png',
            '/manus-storage/hero_main_b62c50ca.png'
          ].map((img, idx) => (
            <div key={idx} style={{
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s',
              cursor: 'pointer',
              border: '2px solid rgba(102, 126, 234, 0.2)'
            }}>
              <img src={img} alt="Galería" style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Night Theme */}
      <footer style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #000000 100%)',
        color: '#e2e8f0',
        textAlign: 'center',
        padding: '50px 20px',
        marginTop: '80px',
        borderTop: '2px solid rgba(102, 126, 234, 0.3)'
      }}>
        <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>🌈 LAVAMATIK El Paisa</p>
        <p style={{ marginBottom: '10px', fontWeight: '300' }}>Alquiler de Lavadoras Grandes en Fusagasugá</p>
        <p style={{ marginBottom: '10px' }}>📞 Teléfono: <a href="tel:+573003865302" style={{
          color: '#25D366',
          textDecoration: 'none',
          fontWeight: '600'
        }}>300-386-5302</a></p>
        <p style={{ marginBottom: '10px' }}>💬 WhatsApp: <a href="https://wa.me/573003865302" style={{
          color: '#25D366',
          textDecoration: 'none',
          fontWeight: '600'
        }}>Enviar Mensaje</a></p>
        <p style={{ marginBottom: '30px' }}>📍 Servicio en toda el área de Fusagasugá</p>
        <p style={{
          fontSize: '12px',
          opacity: 0.6,
          borderTop: '1px solid rgba(102, 126, 234, 0.2)',
          paddingTop: '20px'
        }}>© 2026 LAVAMATIK El Paisa - Todos los derechos reservados</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
          color: #e2e8f0;
          overflow-x: hidden;
        }
        
        a:hover {
          opacity: 0.85;
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 36px !important; }
          h2 { font-size: 28px !important; }
        }
      `}</style>
    </div>
  );
}
