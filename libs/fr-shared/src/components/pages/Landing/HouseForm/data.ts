export const regions = [
  { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston'] },
  {
    name: 'UK',
    cities: ['London', 'Birmingham', 'Manchester', 'Liverpool'],
  },
  {
    name: 'GERMANY',
    cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne'],
  },
  {
    name: 'CANADA',
    cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary'],
  },
];

export const houses = [
  {
    images: {
      img: '/images/1.avif',
    },
    id: '1',
    title: 'Spacious House in the Heart of New York',
    address: '123 Main Street, New York, NY 10001',
    feature: {
      region: 'USA',
      city: 'New York',
      type: 'house',
      bedroom: 3,
      bathroom: 2,
      parking: true,
      meterage: '1,500',
    },
    price: {
      oneDay: 199,
      thirtyDay: 2300,
    },
  },
  {
    images: {
      img: '/images/2.avif',
    },

    id: '2',
    title: 'Luxurious Apartment with Stunning Views in Los Angeles',
    address: '456 Hillside Avenue, Los Angeles, CA 90001',
    feature: {
      region: 'USA',
      city: 'Los Angeles',
      type: 'apartment',
      bedroom: 2,
      bathroom: 2,
      parking: true,
      meterage: '1,200',
    },
    price: {
      oneDay: 205,
      thirtyDay: 1100,
    },
  },
  {
    images: {
      img: '/images/3.avif',
    },

    id: '3',
    title: 'Charming House with Beautiful Garden in Chicago',
    address: '789 Oak Street, Chicago, IL 60601',
    feature: {
      region: 'USA',
      city: 'Chicago',
      type: 'house',
      bedroom: 4,
      bathroom: 3,
      parking: false,
      meterage: '2,000',
    },
    price: {
      oneDay: 299,
      thirtyDay: 7100,
    },
  },
  {
    images: {
      img: '/images/4.avif',
    },

    id: '4',
    title: 'Stylish Apartment in the Heart of London',
    address: '10 Downing Street, London SW1A 2AA',
    feature: {
      region: 'UK',
      city: 'London',
      type: 'apartment',
      bedroom: 1,
      bathroom: 1,
      parking: 'without parking',
      meterage: '800',
    },
    price: {
      oneDay: 175,
      thirtyDay: 3000,
    },
  },
  {
    images: {
      img: '/images/5.avif',
    },

    id: '5',
    title: 'Modern House with Private Pool in Berlin',
    address: '100 Friedrichstrasse, Berlin 10117',
    feature: {
      region: 'GER',
      type: 'house',
      bedroom: 3,
      bathroom: 2,
      parking: true,
      meterage: '2,000',
    },
    price: {
      oneDay: 199,
      thirtyDay: 2300,
    },
  },

  {
    images: {
      img: '/images/6.avif',
    },
    id: '6',
    title: 'Luxurious Apartment with Ocean View in Miami',
    address: '100 Ocean Drive, Miami Beach, FL 33139',
    feature: {
      region: 'USA',
      type: 'apartment',
      bedroom: 2,
      bathroom: 2,
      parking: false,
      meterage: '2,000',
    },
    price: {
      oneDay: 199,
      thirtyDay: 2300,
    },
  },
  {
    images: {
      img: '/images/7.avif',
    },
    id: '7',
    title: 'Cozy House in New York',
    address: '1234 Chestnut Street, New York, CA 94123',
    feature: {
      region: 'USA',
      city: 'New York',
      type: 'house',
      bedroom: 2,
      bathroom: 1,
      parking: true,
      meterage: '1,000',
    },
    price: {
      oneDay: 150,
      thirtyDay: 2500,
    },
  },
  {
    images: {
      img: '/images/8.avif',
    },
    id: '8',
    title: 'Sunny Apartment in London',
    address: '567 Pike Street, London, WA 98101',
    feature: {
      region: 'UK',
      city: 'London',
      type: 'apartment',
      bedroom: 1,
      bathroom: 1,
      parking: true,
      meterage: '750',
    },
    price: {
      oneDay: 125,
      thirtyDay: 1800,
    },
  },
  {
    images: {
      img: '/images/9.avif',
    },
    id: '9',
    title: 'Spacious House with a Large Yard in Houston',
    address: '789 Main Street, Houston, CO 80202',
    feature: {
      region: 'USA',
      city: 'Houston',
      type: 'house',
      bedroom: 4,
      bathroom: 3,
      parking: true,
      meterage: '2,500',
    },
    price: {
      oneDay: 275,
      thirtyDay: 4500,
    },
  },
  {
    images: {
      img: '/images/16.avif',
    },
    id: '16',
    title: 'Spacious House with a Large Yard in Chicago',
    address: '789 Main Street, Chicago, CO 80202',
    feature: {
      region: 'USA',
      city: 'Chicago',
      type: 'house',
      bedroom: 4,
      bathroom: 3,
      parking: true,
      meterage: '2,500',
    },
    price: {
      oneDay: 275,
      thirtyDay: 4500,
    },
  },
  {
    images: {
      img: '/images/10.avif',
    },
    id: '10',
    title: 'Luxury Apartment in New York',
    address: '1 Central Park South, New York, NY 10019',
    feature: {
      region: 'USA',
      city: 'New York',
      type: 'apartment',
      bedroom: 3,
      bathroom: 2,
      parking: false,
      meterage: '1,800',
    },
    price: {
      oneDay: 350,
      thirtyDay: 8000,
    },
  },
  {
    images: {
      img: '/images/15.avif',
    },
    id: '10',
    title: 'Luxury Apartment in Chicago',
    address: '1 Central Park South, Chicago, NY 10019',
    feature: {
      region: 'USA',
      city: 'Chicago',
      type: 'apartment',
      bedroom: 3,
      bathroom: 2,
      parking: false,
      meterage: '1,800',
    },
    price: {
      oneDay: 350,
      thirtyDay: 8000,
    },
  },
  {
    images: {
      img: '/images/11.avif',
    },
    id: '11',
    title: 'Modern Apartment with a Balcony in Los Angeles',
    address: '2345 Sunset Boulevard, Los Angeles, CA 90026',
    feature: {
      region: 'USA',
      city: 'Los Angeles',
      type: 'apartment',
      bedroom: 2,
      bathroom: 2,
      parking: true,
      meterage: '1,200',
    },
    price: {
      oneDay: 200,
      thirtyDay: 3500,
    },
  },
  {
    images: {
      img: '/images/12.avif',
    },
    id: '11',
    title: 'Modern Apartment with a Balcony in Chicago',
    address: '2345 Sunset Boulevard, Chicago, CA 90026',
    feature: {
      region: 'USA',
      city: 'Chicago',
      type: 'apartment',
      bedroom: 2,
      bathroom: 2,
      parking: true,
      meterage: '1,200',
    },
    price: {
      oneDay: 200,
      thirtyDay: 3500,
    },
  },
];
