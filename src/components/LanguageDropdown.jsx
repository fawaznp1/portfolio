import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

const LanguageDropdown = () => {
  const [currentLang, setCurrentLang] = useState('EN');

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ja', label: 'JP', name: '日本語' },
    { code: 'ar', label: 'AR', name: 'العربية' }
  ];

  const handleLanguageChange = (langCode, label) => {
    setCurrentLang(label);
    
    // Trigger Google Translate
    const iframe = document.querySelector('.goog-te-menu-frame');
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const langOption = iframeDoc.querySelector(`[value="${langCode}"]`);
      if (langOption) {
        langOption.click();
      }
    } else {
      // Fallback method
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
      }
    }
    
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    // Make Google Translate widget visible but positioned off-screen
    const translateElement = document.getElementById('google_translate_element');
    if (translateElement) {
      translateElement.style.display = 'block';
      translateElement.style.position = 'fixed';
      translateElement.style.top = '-100px';
      translateElement.style.left = '-100px';
      translateElement.style.zIndex = '-1';
    }
  }, []);

  return (
    <Dropdown drop="down" align="end">
      <Dropdown.Toggle variant="outline-light" size="sm" id="language-dropdown">
        🌐 {currentLang}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ minWidth: '120px', fontSize: '0.9rem' }} className="notranslate">
        {languages.map(lang => (
          <Dropdown.Item 
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code, lang.label)}
            style={{ padding: '0.5rem 1rem' }}
            className="notranslate"
          >
            {lang.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;