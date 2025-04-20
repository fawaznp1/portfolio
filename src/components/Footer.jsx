import React from 'react';
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
    <MDBFooter className='bg-dark text-center text-white '>
     
      <MDBContainer className='p-3 pb-2'>
      <p className=''>Feel free to get in touch!</p>
        <section className='mb-4'>
        <MDBBtn style={{ backgroundColor: '#0077B5' }} className='m-1' href='https://www.linkedin.com/in/fawaznp1' role='button' target='_blank'
  data-bs-toggle="tooltip" data-bs-placement="top" title="fawaznp1">
  <MDBIcon fab icon='linkedin-in' />
</MDBBtn>

<MDBBtn style={{ backgroundColor: '#333' }} className='m-1' href='https://github.com/fawaznp1' role='button' target='_blank'
  data-bs-toggle="tooltip" data-bs-placement="top" title="fawaznp1">
  <MDBIcon fab icon='github' />
</MDBBtn>

<MDBBtn style={{ backgroundColor: '#3b5998' }} className='m-1' href='https://www.facebook.com/fawaznp1?mibextid=LQQJ4d' role='button' target='_blank'
  data-bs-toggle="tooltip" data-bs-placement="top" title="Fawaz N P">
  <MDBIcon fab icon='facebook-f' />
</MDBBtn>

<MDBBtn  style={{
    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%', border: 'none'}} className='m-1' href='https://www.instagram.com/fawaz_np/profilecard/?igsh=azlxY3B1dGZxMHE2' role='button' target='_blank'
  data-bs-toggle="tooltip" data-bs-placement="top" title="fawaz_np">
  <MDBIcon fab icon='instagram' />
</MDBBtn>

<MDBBtn style={{ backgroundColor: '#1DA1F2' }} className='m-1' href='https://x.com/i/flow/login?redirect_after_login=%2Ffawaznp1' role='button' target='_blank'
  data-bs-toggle="tooltip" data-bs-placement="top" title="fawaznp1">
  <MDBIcon fab icon='twitter' />
</MDBBtn>

<MDBBtn style={{ backgroundColor: '#D44638' }} className='m-1' href="mailto:fawazpathukkalan@gmail.com" role='button' target='_blank'
  data-bs-toggle="tooltip" data-bs-placement="top" title="fawazpathukkalan@gmail.com" >
  <i className="fa-regular fa-envelope"></i>
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