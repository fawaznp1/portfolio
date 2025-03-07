import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    const currentYear = new Date().getFullYear();  // Get the current year

  return (
    <MDBFooter className='bg-dark text-center text-white '>
     
      <MDBContainer className='p-3 pb-2'>
      <p className=''>Feel free to get in touch!</p>
        <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/fawaznp1' role='button'target='_blank'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/fawaznp1' role='button'target='_blank'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/fawaznp1?mibextid=LQQJ4d' role='button' target='_blank'>
            <MDBIcon fab icon='facebook-f'  />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/fawaz_np/profilecard/?igsh=azlxY3B1dGZxMHE2' role='button'target='_blank'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://x.com/i/flow/login?redirect_after_login=%2Ffawaznp1' role='button'target='_blank'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'target='_blank'>
            <MDBIcon fab icon='google' />
          </MDBBtn> */}

          <MDBBtn outline color="light" floating className='m-1 email-link' href="mailto:fawazpathukkalan@gmail.com" role='button' target='_blank'>
             <i class="fa-regular fa-envelope"></i>
          </MDBBtn>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © {currentYear} Copyright&reg;
      : fawaz_np
      {/* <a className='text-white' href='/'>
        
      </a> */}
    </div>
    </MDBFooter>
  );
}