const puppyInfo = [
    {
        id: '1',
        img: './assets/images/dashchund/profile.png',
        name: 'dashchund',
        desc: "Our dachshund puppies are ready to test your boundaries and explore their new home with you. Dachshunds aren't built for distance running, leaping, or strenuous swimming, but otherwise these tireless hounds are game for anything.",
        price: 1400,
        disPrice: 1600, 
        reviewStar: `<span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star-half"></i></span>`,
        reviewRate: '(3.4K Reviews)',
        statsSold: 80,
        statsAvailable: 16,
        link: './assets/pages/products.html',
    },
    {
        id: '2',
        img: './assets/images/english-bulldog/profile.jpg',
        name: 'english bulldog',
        desc: ' recusandae consequuntur rem tempore expedita fuga sed provident vel quos architecto ducimus aspernatur excepturi ullam, iste blanditiis unde minus.',
        price: 1200,
        disPrice: 1500, 
        reviewStar: `<span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star-half"></i></span>`,
        reviewRate: '(1.0K Reviews)',
        statsSold: 35,
        statsAvailable: 14,
        link: './assets/pages/products.html',
    },
    {
        id: '3',
        img: './assets/images/maltese-dog/profile.jpg',
        name: 'maltese dog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus',
        price: 1000,
        disPrice: 1300, 
        reviewStar: `<span><i class="fas fa-star"></i></span>`,
        reviewRate: '(1.0K Reviews)',
        statsSold: 15,
        statsAvailable: 4,
        link: './assets/pages/products.html',
    },
    {
        id: '4',
        img: './assets/images/chihuahua/a.jpg',
        name: 'chihuahua',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus',
        price: 1100,
        disPrice: 1500, 
        reviewStar: `<span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star-half"></i></span>`,
        reviewRate: '(1.3K Reviews)',
        statsSold: 35,
        statsAvailable: 11,
        link: './assets/pages/products.html',
    },
    {
        id: '5',
        img: './assets/images/yorkipoo/profile.jpg',
        name: 'yorkipoo',
        desc: 'Lorem, ipsum dolor sit amet  adipisicing elit. Quis voluptatibus',
        price: 1500,
        disPrice: 1800, 
        reviewStar: `<span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star-half"></i></span>`,
        reviewRate: '(3.0K Reviews)',
        statsSold: 45,
        statsAvailable: 9,
        link: './assets/pages/products.html',
    },
    {
        id: '6',
        img: './assets/images/maltese-dog/5.jpg',
        name: 'Toy Poodle',
        desc: 'Lorem, ipsum dolor sit amet  adipisicing elit. Quis voluptatibus',
        price: 1000,
        disPrice: 2000, 
        reviewStar: `<span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star-half"></i></span>`,
        reviewRate: '(2.1K Reviews)',
        statsSold: 35,
        statsAvailable: 6,
        link: './assets/pages/products.html',
    }
];

let services = [
    {
        id: '1',
        img: './assets/images/delivered/10.JPG',
        name: 'Puppy Adoption',
        desc: "At PuppyHub's Website, we offer a variety of adorable puppies for adoption. Our puppies are carefully bred and raised with love and attention to ensure their health and well-being. Each puppy comes with thorough health checks, vaccinations, and proper socialization. Prices for our puppies vary depending on the breed, size, and other factors. Please contact us directly for specific pricing information.",
        reviewStar: `<span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star-half"></i></span>`,
        reviewRate: '(3.4K Reviews)',
        stats: `<p></p>`,
        link: 'mailto:puppyhub7@gmail.com'
    },
    {
        id: '2',
        img: './assets/images/pet-care2.jpeg',
        name: 'Breeding Services',
        desc: "As a responsible breeder, we also offer breeding services for selected dogs. Our breeding program focuses on producing healthy and well-tempered puppies that meet breed standards. We prioritize the health and welfare of our dogs, ensuring they undergo thorough health screenings and genetic testing before breeding. If you are interested in our breeding services, please reach out to us for more details and pricing information.",
        reviewStar: `<span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>`,
        reviewRate: '(4K Reviews)',
        stats: `<p></p>`,
        link: 'mailto:puppyhub7@gmail.com'
    },
    {
        id: '3',
        img: './assets/images/delivered/15.JPG',
        name: 'Puppy Training',
        desc: "We understand the importance of early training and socialization for puppies. To help your new furry family member thrive, we offer puppy training services. Our experienced trainers will work with your puppy to develop basic obedience skills, potty training, and proper behavior. Training sessions can be tailored to your specific needs and preferences. Please contact us for more information on our puppy training services and pricing.",
        reviewStar: `<span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>`,
        reviewRate: '(3.4K Reviews)',
        stats: `<p></p>`,
        link: 'mailto:puppyhub7@gmail.com'
    },
    {
        id: '4',
        img: './assets/images/pet7.jpeg',
        name: 'Rehoming Assistance',
        desc: "In some cases, circumstances may arise where a dog needs to be rehomed. At PuppyHub's Puppy Website, we provide rehoming assistance to help find suitable homes for dogs in need. If you are unable to keep your dog or have found a dog in need of a new home, please reach out to us for guidance and support. We strive to ensure that every dog finds a loving and caring forever home.",
        reviewStar: `<span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>`,
        reviewRate: '(3K Reviews)',
        stats: `<p class="sold">Over: <b>280</b> Assistance</p>`,
        link: 'mailto:puppyhub7@gmail.com'
    },
    {
        id: '5',
        name: 'Pet Delivery',
        desc: "We have different ways of doing our delivery. Either method used is based on the client, please reach out to us for guidance and support.",
        reviewStar: ` <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>`,
        reviewRate: '(5K Reviews)',
        stats: `<p class="sold">Over: <b>240</b> Assistance</p>`,
        img: './assets/images/delivered/8.PNG',
        link: 'mailto:puppyhub7@gmail.com'
    }
    // {
    //     id: '6',
    //     img: '',
    //     name: '',
    //     desc: "",
    //     reviewStar: ``,
    //     reviewRate: '',
    //     link: 'mailto:puppyhub7@gmail.com'
    // }
];