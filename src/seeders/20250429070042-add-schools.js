"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Schools",
      [
        {
          name: "Green Valley School",
          address: "123, Main Street, Mumbai",
          latitude: 19.076,
          longitude: 72.8777,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Blue Ridge High School",
          address: "456, Park Avenue, Pune",
          latitude: 18.5204,
          longitude: 73.8567,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Sunshine Public School",
          address: "789, Beach Road, Goa",
          latitude: 15.2993,
          longitude: 74.124,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Silver Oak International School",
          address: "101, Hill Top Area, Shimla",
          latitude: 31.1048,
          longitude: 77.1734,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Maple Leaf Academy",
          address: "202, City Centre, Bengaluru",
          latitude: 12.9716,
          longitude: 77.5946,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Royal Heritage School",
          address: "Hill Road, Jaipur",
          latitude: 26.9124,
          longitude: 75.7873,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Lotus Valley School",
          address: "Sector 50, Noida",
          latitude: 28.5355,
          longitude: 77.391,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Oakridge International",
          address: "Gachibowli, Hyderabad",
          latitude: 17.4483,
          longitude: 78.3915,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "DPS Dwarka",
          address: "Sector 3, Dwarka, New Delhi",
          latitude: 28.5892,
          longitude: 77.0344,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Springfields High School",
          address: "Camp Area, Pune",
          latitude: 18.5204,
          longitude: 73.8567,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Heritage Public School",
          address: "Sector 62, Gurgaon",
          latitude: 28.4595,
          longitude: 77.0266,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Little Angels School",
          address: "MG Road, Bengaluru",
          latitude: 12.9716,
          longitude: 77.5946,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "St. Xavier's High School",
          address: "Sector 20, Chandigarh",
          latitude: 30.7333,
          longitude: 76.7794,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Greenwood High",
          address: "Sarjapur Road, Bengaluru",
          latitude: 12.9081,
          longitude: 77.6476,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Cambridge International School",
          address: "Thaltej, Ahmedabad",
          latitude: 23.0225,
          longitude: 72.5714,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Podar International School",
          address: "Santacruz West, Mumbai",
          latitude: 19.076,
          longitude: 72.8777,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Suncity School",
          address: "Sector 54, Gurgaon",
          latitude: 28.4595,
          longitude: 77.0266,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Amity International School",
          address: "Noida Sector 44",
          latitude: 28.5355,
          longitude: 77.391,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Ryan International School",
          address: "Malad West, Mumbai",
          latitude: 19.1876,
          longitude: 72.8367,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Delhi Public School",
          address: "Bopal, Ahmedabad",
          latitude: 23.03,
          longitude: 72.525,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "NPS International",
          address: "Mysore Road, Bengaluru",
          latitude: 12.2958,
          longitude: 76.6394,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Sunbeam Academy",
          address: "Varanasi",
          latitude: 25.3176,
          longitude: 82.9739,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "St. Joseph's School",
          address: "Park Street, Kolkata",
          latitude: 22.5726,
          longitude: 88.3639,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "The Shri Ram School",
          address: "Aravali, Gurgaon",
          latitude: 28.4595,
          longitude: 77.0266,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Don Bosco High School",
          address: "Matunga, Mumbai",
          latitude: 19.0368,
          longitude: 72.8575,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Hiranandani Foundation School",
          address: "Powai, Mumbai",
          latitude: 19.1197,
          longitude: 72.9051,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Bishop Cotton School",
          address: "Shimla",
          latitude: 31.1048,
          longitude: 77.1734,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Chinmaya Vidyalaya",
          address: "Anna Nagar, Chennai",
          latitude: 13.0827,
          longitude: 80.2707,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "DAV Public School",
          address: "Sector 14, Faridabad",
          latitude: 28.4089,
          longitude: 77.3178,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "La Martiniere College",
          address: "Lucknow",
          latitude: 26.8467,
          longitude: 80.9462,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "The Cathedral & John Connon School",
          address: "Fort, Mumbai",
          latitude: 18.9402,
          longitude: 72.8346,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Mount Carmel School",
          address: "Anand Niketan, New Delhi",
          latitude: 28.6139,
          longitude: 77.209,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Loreto Convent School",
          address: "Lucknow",
          latitude: 26.8467,
          longitude: 80.9462,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Bal Bharati Public School",
          address: "Pitampura, Delhi",
          latitude: 28.7041,
          longitude: 77.1025,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "St. Francis High School",
          address: "Borivali, Mumbai",
          latitude: 19.2288,
          longitude: 72.8543,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "National Public School",
          address: "Indiranagar, Bengaluru",
          latitude: 12.9716,
          longitude: 77.6412,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Delhi Public School",
          address: "Sector 45, Gurgaon",
          latitude: 28.4595,
          longitude: 77.0266,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Cambridge School",
          address: "Noida Sector 27",
          latitude: 28.5355,
          longitude: 77.391,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "City Montessori School",
          address: "Lucknow",
          latitude: 26.8467,
          longitude: 80.9462,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Sanskriti School",
          address: "Chanakyapuri, Delhi",
          latitude: 28.5921,
          longitude: 77.1855,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Vibgyor High",
          address: "Kandivali, Mumbai",
          latitude: 19.2056,
          longitude: 72.8424,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "The British School",
          address: "Chanakyapuri, Delhi",
          latitude: 28.5921,
          longitude: 77.1855,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Jamnabai Narsee School",
          address: "Juhu, Mumbai",
          latitude: 19.1136,
          longitude: 72.8265,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Smt. Sulochanadevi Singhania School",
          address: "Thane",
          latitude: 19.2183,
          longitude: 72.9781,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Gitanjali Senior School",
          address: "Begumpet, Hyderabad",
          latitude: 17.4375,
          longitude: 78.4483,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Chettinad Vidyashram",
          address: "R.A. Puram, Chennai",
          latitude: 13.032,
          longitude: 80.2508,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "DAV Model School",
          address: "Durgapur",
          latitude: 23.5204,
          longitude: 87.3119,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Army Public School",
          address: "Dhaula Kuan, Delhi",
          latitude: 28.5983,
          longitude: 77.1706,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Vasant Valley School",
          address: "Vasant Kunj, New Delhi",
          latitude: 28.5245,
          longitude: 77.1855,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Modern High School",
          address: "Kolkata",
          latitude: 22.5726,
          longitude: 88.3639,
          createdAt : new Date(),
          updatedAt : new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
