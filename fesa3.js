fetch('https://cdn.jsdelivr.net/gh/fesaone/lisensi@main/data2.json')
  .then(response => response.json())
  .then(jsonData => {
    const data = jsonData.data; // Mengakses array data dari properti "data" dalam JSON

    const currentURL = new URL(window.location.href);
    const currentDomain = currentURL.hostname.startsWith("www.") ? currentURL.hostname.substring(4) : currentURL.hostname;

    console.log('Current Domain:', currentDomain);

    const registeredDomain = data.find(item => {
      const itemURL = new URL(item.url);
      const itemDomain = itemURL.hostname.startsWith("www.") ? itemURL.hostname.substring(4) : itemURL.hostname;
      return itemDomain === currentDomain;
    });

    if (registeredDomain) {
      const currentDate = new Date().toISOString().split('T')[0];
      const expirationDate = registeredDomain.expirationDate;

      console.log('Current Date:', currentDate);
      console.log('Expiration Date:', expirationDate);

      if (currentDate > expirationDate) {
        console.log('Redirecting to Google...');
        window.location.href = 'https://www.jsdelivr.com/';
      } else {
        console.log('Domain is registered.');
      }
    } else {
      console.log('Domain is not registered.');
      window.location.href = 'https://gomotive.com/';
    }
  })
  .catch(error => {
    console.error('Terjadi kesalahan dalam mengambil data JSON:', error);
  });
