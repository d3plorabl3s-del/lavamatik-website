export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
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

      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '15px 20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
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
          }}>🌈 LAVAMATIK El Paisa</div>
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

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '42px',
              marginBottom: '15px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
            }}>Limpieza Cósmica ✨</h1>
            <p style={{
              fontSize: '18px',
              marginBottom: '20px',
              opacity: 0.95
            }}>Alquila nuestras lavadoras grandes de última generación en toda el área de Fusagasugá</p>
            <p style={{
              fontSize: '16px',
              opacity: 0.9,
              marginBottom: '20px'
            }}>Servicio rápido, confiable y a domicilio</p>
            <a href="https://wa.me/573003865302?text=Hola%20LAVAMATIK%2C%20quiero%20agendar%20una%20lavadora" style={{
              display: 'inline-block',
              background: '#25D366',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}>Agendar Ahora por WhatsApp</a>
          </div>
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <img src="/manus-storage/hero_main_b62c50ca.png" alt="LAVAMATIK El Paisa" style={{
              width: '100%',
              height: 'auto',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }} />
          </div>
        </div>
      </section>

      {/* Services Section with Parallax */}
      <section style={{
        position: 'relative',
        margin: '50px 0',
        padding: '60px 20px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
          opacity: 0.25
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '40px',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
          }}>🧺 Nuestros Servicios</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
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
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}>
                <h3 style={{
                  color: '#667eea',
                  marginBottom: '10px',
                  fontSize: '20px'
                }}>{service.title}</h3>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#25D366',
                  margin: '15px 0'
                }}>{service.price}</div>
                <div style={{
                  color: '#666',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>{service.desc}</div>
                <a href={`https://wa.me/573003865302?text=${service.link}`} style={{
                  background: '#25D366',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  transition: 'all 0.3s',
                  border: 'none',
                  cursor: 'pointer'
                }}>Agendar</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{
        background: 'white',
        padding: '50px 20px',
        margin: '50px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '40px',
            color: '#333'
          }}>⭐ Lo Que Dicen Nuestros Clientes</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {[
              { stars: '★★★★★', text: '"Excelente servicio, muy rápido y confiable. Las lavadoras están en perfecto estado. ¡Recomendado!"', author: '- María García, Fusagasugá' },
              { stars: '★★★★★', text: '"El mejor servicio de alquiler en la ciudad. Atención al cliente de primera. Volveré pronto."', author: '- Juan Rodríguez, Fusagasugá' },
              { stars: '★★★★★', text: '"Muy buena experiencia. Entrega rápida y el personal muy amable. Precio justo."', author: '- Carmen López, Fusagasugá' },
              { stars: '★★★★★', text: '"Lavadoras de excelente calidad. El servicio a domicilio es muy conveniente. ¡Muchas gracias!"', author: '- Pedro Martínez, Fusagasugá' }
            ].map((review, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  color: '#FFD700',
                  marginBottom: '10px',
                  fontSize: '18px'
                }}>{review.stars}</div>
                <div style={{
                  marginBottom: '15px',
                  fontStyle: 'italic',
                  lineHeight: 1.6
                }}>{review.text}</div>
                <div style={{
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>{review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          marginBottom: '40px',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>📸 Galería de Clientes</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
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
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
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

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        textAlign: 'center',
        padding: '30px 20px',
        marginTop: '50px'
      }}>
        <p><strong>🌈 LAVAMATIK El Paisa</strong></p>
        <p>Alquiler de Lavadoras Grandes en Fusagasugá</p>
        <p>📞 Teléfono: <a href="tel:+573003865302" style={{
          color: '#25D366',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>300-386-5302</a></p>
        <p>💬 WhatsApp: <a href="https://wa.me/573003865302" style={{
          color: '#25D366',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>Enviar Mensaje</a></p>
        <p>📍 Servicio en toda el área de Fusagasugá</p>
        <p style={{
          marginTop: '20px',
          fontSize: '12px',
          opacity: 0.8
        }}>© 2026 LAVAMATIK El Paisa - Todos los derechos reservados</p>
      </footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #333;
          overflow-x: hidden;
        }
        a:hover {
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          h1 { font-size: 28px !important; }
          h2 { font-size: 24px !important; }
        }
      `}</style>
    </div>
  );
}
