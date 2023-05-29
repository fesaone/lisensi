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
        console.log('Redirecting to...');
        window.location.href = 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81p6S5AjgyHGAdzA9nbfzSsb7t6grJiwTRnCpYP8eWpNuKndr10clPURKYYxDfO09TnVHKO_RC8HkLAg5mFluhd7ySVlqA=s1600';
      } else {
        console.log('Domain is registered.');
      }
    } else {
      console.log('Domain is not registered.');
      window.location.href = 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81p6S5AjgyHGAdzA9nbfzSsb7t6grJiwTRnCpYP8eWpNuKndr10clPURKYYxDfO09TnVHKO_RC8HkLAg5mFluhd7ySVlqA=s1600';
    }
  })
  .catch(error => {
    console.error('Terjadi kesalahan dalam mengambil data JSON:', error);
  });
