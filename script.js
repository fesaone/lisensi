const data = [
  {
    "nama": "John Doe",
    "url": "https://fesa.one",
    "registeredDomain": "2023-05-19",
    "expirationDate": "2024-05-19"
  },
  {
    "nama": "Jane Smith",
    "url": "https://playcode.io",
    "registeredDomain": "2022-01-15",
    "expirationDate": "2023-10-15"
  },
  {
    "nama": "David Johnson",
    "url": "https://www.quackita.com",
    "registeredDomain": "2022-08-21",
    "expirationDate": "2023-09-21"
  },
  {
    "nama": "Sarah Williams",
    "url": "https://rmedia.id",
    "registeredDomain": "2023-01-05",
    "expirationDate": "2024-01-05"
  },
  {
    "nama": "Michael Brown",
    "url": "https://www.example5.com",
    "registeredDomain": "2022-12-10",
    "expirationDate": "2023-12-10"
  }
];

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
