const sampleListings = [
  {
    title: "Luxury Beach Resort in Goa",
    description:
      "Experience the ultimate beach getaway at this luxury resort in Goa with private beach access and stunning sea views.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2MTY4Mzg0NjgyMzkwNzc5Mg%3D%3D/original/fed854a1-4887-468f-8c00-2f5509fdaf4a.jpeg?im_w=1200",
        filename: "listingimage1"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2MTY4Mzg0NjgyMzkwNzc5Mg%3D%3D/original/94552e17-21e1-43c0-bbcb-548247e4c098.jpeg?im_w=720",
        filename: "listingimage1"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2MTY4Mzg0NjgyMzkwNzc5Mg%3D%3D/original/17680e5c-eb9f-48d4-8a6e-40fc9ebca17a.jpeg?im_w=1200",
        filename: "listingimage1"
      }
    ],
    price: 15000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern Apartment in Mumbai",
    description:
      "Stay in the heart of Mumbai in this stylish apartment with gorgeous views of the Arabian Sea.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1242075072025933416/original/9ea1d0b6-1179-42b3-a6fc-a6e051066ae8.jpeg?im_w=1200",
        filename: "listingimage2"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1242075072025933416/original/c4440a0c-68af-499d-822b-1d9d093d485c.jpeg?im_w=720",
        filename: "listingimage2"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1284562226470305867/original/366f47c5-dd7d-4955-9a31-7f86e1fad781.jpeg?im_w=720",
        filename: "listingimage2"
      }
    ],
    price: 12000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Mountain Retreat in Shimla",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by pine forests with spectacular Himalayan views.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1354870411219287205/original/566f11a5-42f6-49bc-ab8d-c00f60f4228c.jpeg?im_w=1200",
        filename: "listingimage3"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1354870411219287205/original/265a2fca-c838-48a3-a2ab-f3bdd031d666.jpeg?im_w=720",
        filename: "listingimage3"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1354870411219287205/original/c7d8ff77-cfe5-4f43-93c3-139127c2ca94.jpeg?im_w=1200",
        filename: "listingimage3"
      }
    ],
    price: 10000,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Experience the royal charm of Rajasthan in this beautifully restored heritage haveli with traditional architecture.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1392633227625396223/original/43970c5e-70a3-4e0a-ac7e-56b1d3df461b.jpeg?im_w=720",
        filename: "listingimage4"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1392633227625396223/original/d71dc718-e06c-4369-94d5-d247504dcaa6.jpeg?im_w=720",
        filename: "listingimage4"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1392633227625396223/original/3499b4bb-b534-4f0d-9d2e-5eb05bd9834f.jpeg?im_w=720",
        filename: "listingimage4"
      }
    ],
    price: 25000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Treehouse Stay in Kerala",
    description:
      "Live among the treetops in this unique treehouse retreat in the lush forests of Kerala.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODA2NTY5Mg%3D%3D/original/a01ac36a-d12b-4fac-81bc-72f772784b6a.jpeg?im_w=1200",
        filename: "listingimage5"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODA2NTY5Mg%3D%3D/original/ecb879d7-010f-463d-9ee4-e68fa2b9b87f.jpeg?im_w=720",
        filename: "listingimage5"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODA2NTY5Mg%3D%3D/original/c81fb3a9-62d1-400b-a113-984612bc240f.jpeg?im_w=720",
        filename: "listingimage5"
      }
    ],
    price: 8000,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Riverside Resort in Rishikesh",
    description:
      "Wake up to the sound of the Ganges in this peaceful riverside resort offering yoga and meditation sessions.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1354081677733225915/original/4f66db3f-5367-4546-ad59-85713bea158d.jpeg?im_w=1200",
        filename: "listingimage6"
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1354081677733225915/original/8c683a89-c9ea-4849-b93f-c178bdafb734.jpeg?im_w=720",
        filename: "listingimage6"
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1354081677733225915/original/738856b9-6dcd-46d9-87d8-8d38c1e6ac65.jpeg?im_w=1440",
        filename: "listingimage6"
      }
    ],
    price: 12000,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Lakeside Cottage in Udaipur",
    description:
      "Spend your days admiring the beautiful Lake Pichola from this charming cottage in the City of Lakes.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-620733421639285734/original/f84927e5-ff73-48d6-bad0-6d58cd6efece.jpeg?im_w=1200",
        filename: "listingimage7"
      },
      {
        url: "https://a0.muscache.com/im/pictures/4b376da5-9377-4507-8f33-02b28c5d3fc0.jpg?im_w=720",
        filename: "listingimage7"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-620733421639285734/original/7b2bec1f-62ed-443b-b053-30282f569bb1.jpeg?im_w=1200",
        filename: "listingimage7"
      }
    ],
    price: 9000,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Luxury Penthouse in Gurugram",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment in Cyberhub.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI0ODI1OTg3MzU0MTQ1NjgyMg%3D%3D/original/812e768d-3ab2-4cb1-bf55-42bb1a0bc63e.jpeg?im_w=1200",
        filename: "listingimage8"
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1248259873541456822/original/715c37e8-5727-4c34-a04d-e276ebd38151.jpeg?im_w=720",
        filename: "listingimage8"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI0ODI1OTg3MzU0MTQ1NjgyMg%3D%3D/original/79e4a493-ba1f-4a0b-8ec8-54ca0115887a.jpeg?im_w=720",
        filename: "listingimage8"
      }
    ],
    price: 20000,
    location: "Gurugram",
    country: "India",
  },
  {
    title: "Historic Houseboat in Srinagar",
    description:
      "Stay in a beautifully carved wooden houseboat on the serene Dal Lake with stunning mountain views.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEwOTgzNjg1MjY5ODE2OTk2Mw%3D%3D/original/663803e7-a563-4ae3-9051-d872a5081e4d.jpeg?im_w=1200",
        filename: "listingimage11"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1109836852698169963/original/a5621270-ba3a-48b4-b17e-a866b7758b86.jpeg?im_w=720",
        filename: "listingimage11"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEwOTgzNjg1MjY5ODE2OTk2Mw%3D%3D/original/aab2aeb2-ff66-471b-9709-9222d9c687b7.jpeg?im_w=720",
        filename: "listingimage11"
      }
    ],
    price: 12000,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Private Island Resort in Lakshadweep",
    description:
      "Have an exclusive experience in this island resort with pristine beaches and crystal clear waters.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1085257480840832086/original/1e346afd-c21e-4f41-9c16-5d1b964292e9.jpeg?im_w=1200",
        filename: "listingimage12"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1085257480840832086/original/34d297bd-106e-4749-996f-7ea5f22cf15b.jpeg?im_w=1200",
        filename: "listingimage12"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1085257480840832086/original/4286a249-55cc-4212-b7fe-cf34e24cffcc.jpeg?im_w=720",
        filename: "listingimage12"
      }
    ],
    price: 35000,
    location: "Lakshadweep",
    country: "India",
  },
  {
    title: "Charming Cottage in Darjeeling",
    description:
      "Escape to the picturesque hills of Darjeeling in this quaint cottage with views of the Kanchenjunga.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/f85b24c3-f67e-402c-b3b3-e418a434fa1b.jpg?im_w=1200",
        filename: "listingimage13"
      },
      {
        url: "https://a0.muscache.com/im/pictures/dd79d4e8-e435-42c6-bb83-617894f93372.jpg?im_w=720",
        filename: "listingimage13"
      },
      {
        url: "https://a0.muscache.com/im/pictures/371b45bc-29c5-46ed-b359-8a48a4ac06f7.jpg?im_w=1200",
        filename: "listingimage13"
      }
    ],
    price: 8000,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Mountain View Villa in Manali",
    description:
      "Enjoy breathtaking Himalayan views from this cozy villa surrounded by apple orchards and pine forests.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1273788706221058538/original/a2807018-8dc5-40ab-b25b-d515b278435d.jpeg?im_w=720",
        filename: "listingimage16"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1273788706221058538/original/7c3fb3a7-e43d-477a-8f01-1ee62c72feef.jpeg?im_w=1200",
        filename: "listingimage16"
      },
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1273788706221058538/original/07476753-25c8-4d64-8837-3feb4042be19.jpeg?im_w=720",
        filename: "listingimage16"
      }
    ],
    price: 15000,
    location: "Manali",
    country: "India",
  },
  {
    title: "Art Deco Apartment in Kolkata",
    description:
      "Step into the charm of old Calcutta in this stylish Art Deco apartment in Park Street.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/56e74aba-46ea-40ec-b4c4-01ca8472f34b.jpg?im_w=1200",
        filename: "listingimage17"
      },
      {
        url: "https://a0.muscache.com/im/pictures/1ab18d9d-a071-4d0d-937f-933c86a77178.jpg?im_w=720",
        filename: "listingimage101"
      },
      {
        url: "https://a0.muscache.com/im/pictures/8e4f0f8a-134b-4f15-aea6-69a0e5514a7c.jpg?im_w=720",
        filename: "listingimage102"
      }
    ],
    price: 9000,
    location: "Kolkata",
    country: "India",
  },
  {
    title: "Tropical Villa in Andaman",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private beach access in Havelock Island.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/4263ca85-b34c-46ca-af21-ea70ab8320d9.jpg?im_w=1200",
        filename: "listingimage18"
      },
      {
        url: "https://a0.muscache.com/im/pictures/a271a185-9db2-4ae1-a642-16a50250a867.jpg?im_w=720",
        filename: "listingimage18"
      },
      {
        url: "https://a0.muscache.com/im/pictures/ff7e0bf4-198f-446a-ae5e-412aff6bbefb.jpg?im_w=1200",
        filename: "listingimage18"
      }
    ],
    price: 20000,
    location: "Andaman",
    country: "India",
  },
  {
    title: "Beachfront Villa in Kovalam",
    description:
      "Enjoy the crystal-clear waters of the Arabian Sea in this beautiful beachfront villa in Kerala.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/96df44ce-e69c-48c8-9243-4432960ec6c4.jpg?im_w=1200",
        filename: "listingimage22"
      },
      {
        url: "https://a0.muscache.com/im/pictures/ae303e40-7b4f-44e2-a330-dbece161da40.jpg?im_w=720",
        filename: "listingimage22"
      },
      {
        url: "https://a0.muscache.com/im/pictures/0e56b092-722a-4c12-9e35-59a0d4dc9cae.jpg?im_w=720",
        filename: "listingimage22"
      }
    ],
    price: 16000,
    location: "Kovalam",
    country: "India",
  },
  {
    title: "Historic Mansion in Pondicherry",
    description:
      "Experience the Franco-Tamil charm of Pondicherry in this beautifully restored mansion with a courtyard garden.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-577434974644673655/original/4489c8c3-dbca-4566-ae7c-dfa23c4e9ba0.jpeg?im_w=1200",
        filename: "listingimage24"
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-582279790781305134/original/bf9801b4-28f1-4324-acaa-f5fb2e6d0ed0.jpeg?im_w=720",
        filename: "listingimage24"
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-582279790781305134/original/25194d95-8e70-4d99-a294-6eadaf2f9b01.jpeg?im_w=720",
        filename: "listingimage24"
      }
    ],
    price: 14000,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Modern Apartment in Bangalore",
    description:
      "Explore the Garden City from this modern and centrally located apartment near Cubbon Park.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-986176172755444195/original/0af0925a-3e63-4d8d-b6f8-90c20e95eaa2.jpeg?im_w=1200",
        filename: "listingimage25"
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-986176172755444195/original/848d82f1-2811-431f-a0ce-7de0bc735b74.jpeg?im_w=720",
        filename: "listingimage25"
      },
      {
        url: "https://a0.muscache.com/im/pictures/ef3b1aa3-3297-459f-a17a-918d4374e12f.jpg?im_w=720",
        filename: "listingimage25"
      }
    ],
    price: 13000,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Lakefront Cottage in Nainital",
    description:
      "Spend your days by the Naini Lake in this cozy cottage with scenic views of the Kumaon hills.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/63be195f-6031-4716-8ce0-835ed513f80d.jpg?im_w=1200",
        filename: "listingimage26"
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1068545728205501497/original/e296573b-a55d-4051-9fe2-f29e341c05e0.jpeg?im_w=720",
        filename: "listingimage26"
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1068545728205501497/original/fb55bf88-64c6-40a0-a390-648597b019a8.jpeg?im_w=1200",
        filename: "listingimage26"
      }
    ],
    price: 12000,
    location: "Nainital",
    country: "India",
  },
];

module.exports = { data: sampleListings };