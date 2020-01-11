// import { apiUrl } from '../config.json';
// import  http  from './httpService';

// const apiEndPoint = apiUrl + 'hcdata';

// using static data for now
const propertyList = [
	{
        "id": 121212,
        "type": "Apartment",
        "location": "Berlin",
        "sale_price": 500000,
        "monthly_rent": 45000,
        "available_for_rent": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": true,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "id": 232323,
        "type": "Banglow",
        "location": "Berlin",
        "sale_price": 800000,
        "monthly_rent": 55000,
        "available_for_rent": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": true,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
        "id": 343434,
        "type": "Farm House",
        "location": "Hamburg",
        "sale_price": 900000,
        "monthly_rent": 80000,
        "available_for_rent": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": false,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
        "id": 454545,
        "type": "Shop",
        "location": "Munich",
        "sale_price": 600000,
        "monthly_rent": 48000,
        "available_for_rent": false,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": true,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
        "id": 565656,
        "type": "Shop",
        "location": "Berlin",
        "sale_price": 400000,
        "monthly_rent": 4000,
        "available_for_rent": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": false,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
        "id": 676767,
        "type": "Apartment",
        "location": "Frankfurt",
        "sale_price": 500000,
        "monthly_rent": 45000,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        "available_for_rent": false,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
        "id": 787878,
        "type": "Apartment",
        "location": "Munich",
        "sale_price": 500000,
        "monthly_rent": 45000,
        "available_for_rent": false,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": false,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
    	"id": 898989,
        "type": "Banglow",
        "location": "Berlin",
        "sale_price": 500000,
        "monthly_rent": 45000,
        "available_for_rent": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": true,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
    	"id": 909090,
        "type": "Studio",
        "location": "Berlin",
        "sale_price": 500000,
        "monthly_rent": 45000,
        "available_for_rent": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": false,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
        "id": 989898,
        "type": "Banglow",
        "location": "Frankfurt",
        "sale_price": 500000,
        "monthly_rent": 45000,
        "available_for_rent": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": true,
        "contact_person": "Miss. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
        "id": 979797,
        "type": "Studio",
        "location": "Munich",
        "sale_price": 500000,
        "monthly_rent": 45000,
        "available_for_rent": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": false,
        "contact_person": "Mr. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    },
    {
        "id": 999999,
        "type": "Studio",
        "location": "Frankfurt",
        "sale_price": 510000,
        "monthly_rent": 35000,
        "available_for_rent": false,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "featured": false,
        "contact_person": "Miss. Fake Agent",
        "agent_email": "agent@fakemail.com",
        "imgUrl": "/img/home-1.jpg"
    }
];

export function fetchData () {
	return propertyList;
}