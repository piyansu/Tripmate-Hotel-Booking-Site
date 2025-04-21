const sampleListings = [
  {
    title: "Luxury Beach Resort in Goa",
    description:
      "Experience the ultimate beach getaway at this luxury resort in Goa with private beach access and stunning sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1572431447238-425af66a273b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern Apartment in Mumbai",
    description:
      "Stay in the heart of Mumbai in this stylish apartment with gorgeous views of the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580581096469-7efb0a93b6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Mountain Retreat in Shimla",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by pine forests with spectacular Himalayan views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626621934191-583a66b8d866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpbWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Experience the royal charm of Rajasthan in this beautifully restored heritage haveli with traditional architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 25000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Treehouse Stay in Wayanad",
    description:
      "Live among the treetops in this unique treehouse retreat in the lush forests of Kerala.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyZWVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Riverside Resort in Rishikesh",
    description:
      "Wake up to the sound of the Ganges in this peaceful riverside resort offering yoga and meditation sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591017683260-c45649713746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlzaGlrZXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Lakeside Cottage in Udaipur",
    description:
      "Spend your days admiring the beautiful Lake Pichola from this charming cottage in the City of Lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600689505261-cdf9bd9deb37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Luxury Penthouse in Gurugram",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment in Cyberhub.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwYXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "Gurugram",
    country: "India",
  },
  {
    title: "Ski Chalet in Gulmarg",
    description:
      "Hit the slopes right from your doorstep in this cozy ski chalet in the winter wonderland of Kashmir.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VsbWFyZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Wildlife Lodge in Ranthambore",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge near Ranthambore National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1515444744559-7be63e1600de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlnZXIlMjBzYWZhcml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Ranthambore",
    country: "India",
  },
  {
    title: "Historic Houseboat in Srinagar",
    description:
      "Stay in a beautifully carved wooden houseboat on the serene Dal Lake with stunning mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2Vib2F0JTIwc3JpbmFnYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Private Island Resort in Lakshadweep",
    description:
      "Have an exclusive experience in this island resort with pristine beaches and crystal clear waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrc2hhZHdlZXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 35000,
    location: "Lakshadweep",
    country: "India",
  },
  {
    title: "Charming Cottage in Darjeeling",
    description:
      "Escape to the picturesque hills of Darjeeling in this quaint cottage with views of the Kanchenjunga.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544211209-97819796dd01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Ooty",
    description:
      "Step back in time in this elegant colonial bungalow located in the heart of the Nilgiris.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b290eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 14000,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Backwater Retreat in Alleppey",
    description:
      "Relax on the tranquil backwaters of Kerala in this beautiful waterfront villa with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590766940554-111c3c58c2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxsZXBwZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Mountain View Villa in Manali",
    description:
      "Enjoy breathtaking Himalayan views from this cozy villa surrounded by apple orchards and pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586833280077-13ab2fd0c4af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWxpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Manali",
    country: "India",
  },
  {
    title: "Art Deco Apartment in Kolkata",
    description:
      "Step into the charm of old Calcutta in this stylish Art Deco apartment in Park Street.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Kolkata",
    country: "India",
  },
  {
    title: "Tropical Villa in Andaman",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private beach access in Havelock Island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590123699232-127c6e4d6209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kYW1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "Andaman",
    country: "India",
  },
  {
    title: "Historic Fort Stay in Jodhpur",
    description:
      "Live like royalty in this historic fort converted into a heritage hotel with panoramic views of the Blue City.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47160a8ef3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 25000,
    location: "Jodhpur",
    country: "India",
  },
  {
    title: "Desert Retreat in Jaisalmer",
    description:
      "Experience the magic of the Thar Desert in this luxury desert camp with traditional Rajasthani hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537314258830-c2743589345e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFpc2FsbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Rustic Cottage in Coorg",
    description:
      "Unplug and unwind in this cozy cottage surrounded by coffee plantations and misty hills of Coorg.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1628744404730-5f2288460f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29vcmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 11000,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Beachfront Villa in Kovalam",
    description:
      "Enjoy the crystal-clear waters of the Arabian Sea in this beautiful beachfront villa in Kerala.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1583997052301-0042b33fc598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a292YWxhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 16000,
    location: "Kovalam",
    country: "India",
  },
  {
    title: "Eco-Friendly Retreat in Munnar",
    description:
      "Stay in an eco-friendly cottage nestled among the tea plantations of Munnar with stunning valley views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1565004602745-718e1b0d44f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Historic Mansion in Pondicherry",
    description:
      "Experience the Franco-Tamil charm of Pondicherry in this beautifully restored mansion with a courtyard garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1589136777351-fad5a7a4d5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9uZGljaGVycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 14000,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Modern Apartment in Bangalore",
    description:
      "Explore the Garden City from this modern and centrally located apartment near Cubbon Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZ2Fsb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 13000,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Lakefront Cottage in Nainital",
    description:
      "Spend your days by the Naini Lake in this cozy cottage with scenic views of the Kumaon hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626269555515-cd5d5750f05f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbml0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Luxury Houseboat in Kumarakom",
    description:
      "Indulge in luxury on this traditional Kerala houseboat with modern amenities cruising through the backwaters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587922546307-776377f72914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VyYWxhJTIwaG91c2Vib2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 24000,
    location: "Kumarakom",
    country: "India",
  },
  {
    title: "Luxury Resort in Mashobra",
    description:
      "Enjoy the misty mountains in this luxurious resort nestled in the Himalayan forests near Shimla.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587922546341-005af41c60cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGltYWxheWFuJTIwcmVzb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Mashobra",
    country: "India",
  },
  {
    title: "Secluded Beach House in Varkala",
    description:
      "Escape to a secluded beach house on the scenic cliffs of Varkala. Surf, practice yoga, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1621789098261-4bbd9fc12524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFya2FsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Varkala",
    country: "India",
  },
];

module.exports = { data: sampleListings };