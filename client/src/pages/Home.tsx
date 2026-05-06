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
          cursor: 'pointer',
          background: '#25D366',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s'
        }} title="WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.954 6.954c0 1.928.749 3.74 2.105 5.096a6.966 6.966 0 005.849 2.409h.004a6.967 6.967 0 006.954-6.954c0-1.928-.749-3.74-2.105-5.096a6.966 6.966 0 00-5.849-2.409m5.009 12.449h-.004a5.966 5.966 0 01-5.009 2.414c-3.304 0-5.983-2.679-5.983-5.983 0-1.577.613-3.061 1.727-4.175 1.114-1.114 2.598-1.727 4.175-1.727 3.304 0 5.984 2.679 5.984 5.983 0 1.577-.613 3.061-1.727 4.175-1.114 1.114-2.598 1.727-4.175 1.727M6.5 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9m0 8a3.5 3.5 0 110 -7 3.5 3.5 0 010 7m11-13a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
        </a>
        <a href="https://instagram.com" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          background: '#E4405F',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s'
        }} title="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/></svg>
        </a>
        <a href="https://facebook.com" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          background: '#1877F2',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s'
        }} title="Facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="tel:+573003865302" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          background: '#FF6B6B',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s'
        }} title="Llamar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.92 7.02C17.45 6.18 16.7 5.95 15.92 6.82c-.74.9-.74 2.26 0 3.16.6.73 1.35.97 2.12.1l.99-1.06c.25-.27.25-.72 0-.99l-.99-1.07zM14.1 4.1c-.82-.82-2.14-.82-2.96 0L9.24 6.82c-.82.82-.82 2.14 0 2.96l1.9 1.9c.82.82 2.14.82 2.96 0l2.66-2.66c.82-.82.82-2.14 0-2.96L14.1 4.1zM19.02 14.1c.9-.74 2.26-.74 3.16 0 .87.77.64 1.52-.1 2.12l-1.06.99c-.27.25-.72.25-.99 0l-1.07-.99c.9-.74.9-2.26.16-3.12zm-6.92 6.88c-.82.82-.82 2.14 0 2.96l2.66 2.66c.82.82 2.14.82 2.96 0l1.9-1.9c.82-.82.82-2.14 0-2.96l-2.66-2.66c-.82-.82-2.14-.82-2.96 0l-1.9 1.9z"/></svg>
        </a>
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
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          width: '120px',
          height: '120px',
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
          marginTop: '160px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '20px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            letterSpacing: '-1px'
          }}>ALQUILER LAVADORAS LAVAMATIK
EL PAISA</h1>
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
            '/manus-storage/hCErVnsdIybF_9a417798.jpg',
            '/manus-storage/Ec15yJmaclGr_81475ec3.jpg',
            '/manus-storage/IffkE9WlUDoV_b91fa561.jpg',
            '/manus-storage/m4bzCtIJ2hGl_5d101df5.jpg',
            '/manus-storage/wmyoMQjlIWPg_9b6052ed.jpg',
            '/manus-storage/lW0xvPofLqlP_94f1f090.jpg'
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
