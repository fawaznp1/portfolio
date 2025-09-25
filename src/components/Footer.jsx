import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect } from 'react';


export default function App() {
    const currentYear = new Date().getFullYear(); 

    useEffect(() => {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(el => new window.bootstrap.Tooltip(el));
    }, []);

  return (
    <MDBFooter className='text-center text-white' style={{
      backgroundColor: '#0a0f1a',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <MDBContainer className='p-3 pb-1'>
        <p className='mb-2' style={{
          fontSize: '1.1rem',
          fontWeight: '300',
          letterSpacing: '0.5px'
        }}>Feel free to get in touch!</p>
        <section className=' d-flex justify-content-center'>
          <MDBBtn 
            style={{ 
              backgroundColor: '#0077B5',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,119,181,0.3)'
            }} 
            className='m-2 d-flex align-items-center justify-content-center' 
            href='https://www.linkedin.com/in/fawaznp1' 
            role='button' 
            target='_blank'
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="LinkedIn - fawaznp1"
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,119,181,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,119,181,0.3)';
            }}>
            <MDBIcon fab icon='linkedin-in' size='lg' />
          </MDBBtn>

          <MDBBtn 
            style={{ 
              backgroundColor: '#333',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(51,51,51,0.3)'
            }} 
            className='m-2 d-flex align-items-center justify-content-center' 
            href='https://github.com/fawaznp1' 
            role='button' 
            target='_blank'
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="GitHub - fawaznp1"
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(51,51,51,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(51,51,51,0.3)';
            }}>
            <MDBIcon fab icon='github' size='lg' />
          </MDBBtn>

          <MDBBtn 
            style={{ 
              backgroundColor: '#3b5998',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59,89,152,0.3)'
            }} 
            className='m-2 d-flex align-items-center justify-content-center' 
            href='https://www.facebook.com/fawaznp1?mibextid=LQQJ4d' 
            role='button' 
            target='_blank'
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="Facebook - Fawaz N P"
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(59,89,152,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(59,89,152,0.3)';
            }}>
            <MDBIcon fab icon='facebook-f' size='lg' />
          </MDBBtn>

          <MDBBtn 
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(225,48,108,0.3)'
            }} 
            className='m-2 d-flex align-items-center justify-content-center' 
            href='https://www.instagram.com/fawaz_np/profilecard/?igsh=azlxY3B1dGZxMHE2' 
            role='button' 
            target='_blank'
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="Instagram - fawaz_np"
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(225,48,108,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(225,48,108,0.3)';
            }}>
            <MDBIcon fab icon='instagram' size='lg' />
          </MDBBtn>

          <MDBBtn 
            style={{ 
              backgroundColor: '#1DA1F2',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(29,161,242,0.3)'
            }} 
            className='m-2 d-flex align-items-center justify-content-center' 
            href='https://x.com/i/flow/login?redirect_after_login=%2Ffawaznp1' 
            role='button' 
            target='_blank'
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="Twitter - fawaznp1"
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(29,161,242,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(29,161,242,0.3)';
            }}>
            <MDBIcon fab icon='twitter' size='lg' />
          </MDBBtn>

          <MDBBtn 
            style={{ 
              backgroundColor: '#0a4a1dff   ',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(212,70,56,0.3)'
            }} 
            className='m-2 d-flex align-items-center justify-content-center' 
            href="mailto:fawaznpj@gmail.com" 
            role='button' 
            target='_blank'
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title="Email - fawaznpj@gmail.com"
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(212,70,56,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(212,70,56,0.3)';
            }}>
            <MDBIcon fas icon='envelope' size='lg' />
          </MDBBtn>


        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        fontSize: '0.9rem',
        fontWeight: '300',
        letterSpacing: '0.5px'
      }}>
        © {currentYear} Copyright® <span style={{color: '#64b5f6'}}>fawaz_np</span>
      </div>
    </MDBFooter>
  );
}