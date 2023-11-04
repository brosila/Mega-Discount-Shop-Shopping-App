   // Sample product data
const products = [
    {
        title: "8MP 4K PTZ Wifi Camera ",
        price: 20.83,
        imageUrl: "https://i.ibb.co/Sy938tz/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDhTWf5", // Insert your affiliate link here
    },
      {
        title: "2023 Blood Sugar Smart Watch Men ECG+PPG",
        price: 46.30,
        imageUrl: "https://i.ibb.co/Gkn3nNP/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DBQqIgn", // Insert your affiliate link here
    },    {
        title: "Unihertz TANK 22000mAh Rugged Smartphone",
        price: 259.32,
        imageUrl: "https://i.ibb.co/gTxMMs6/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DFiJxwJ", // Insert your affiliate link here
    },    {
        title: "Drone 4K HD Aerial Photography Quadcopter Remote Control Helicopter 5000 Meters Distance Avoid Obstacles ",
        price: 16.23,
        imageUrl: "https://i.ibb.co/QKGz64M/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DEEGQIL", // Insert your affiliate link here
    },    {
        title: "Nikon D750 DSLR Camera",
        price: 954.92,
        imageUrl: "https://i.ibb.co/NS7Cdqt/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DFGdNLt", // Insert your affiliate link here
    },    {
        title: "360 Rotation Following Shooting Mode Gimbal Stabilizer Selfie Stick Tripod Gimbal For iPhone Phone Smartphone Live Photography",
        price: 17.58,
        imageUrl: "https://i.ibb.co/F0pqDw6/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DnlLtEn", // Insert your affiliate link here
    },    {
        title: "Children School Bags Boys Backpack Kids Primary Orthopedic School Backpack Waterproof Schoolbag Book Bag Mochila Infantil",
        price: 21.29,
        imageUrl: "https://i.ibb.co/vLVxX4w/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DCJOeIj", // Insert your affiliate link here
    },    {
        title: "60pcs Powerful Fat Burning and Cellulite Weight Loss Pills for a Lean Physique Product Detoxification Promotes Bowel Motility",
        price: 14.81,
        imageUrl: "https://i.ibb.co/CvLBM13/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DeLZqWb", // Insert your affiliate link here
    },    {
        title: "New E88Pro RC Drone 4K Professinal With 1080P Wide Angle Dual HD Camera Foldable RC Helicopter WIFI FPV Height Hold Apron Sel",
        price: 11.01,
        imageUrl: "https://i.ibb.co/5My959S/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DmPvNT1", // Insert your affiliate link here
    },    {
        title: "K9 Mini Drones with Camera 10K Foldable FPV RC Drone Quadcopter for Adults and Beginners with 360° Active Obstacle Avoidance",
        price: 20.36,
        imageUrl: "https://i.ibb.co/bgn20qP/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DldCMLl", // Insert your affiliate link here
    },    {
        title: "Dubai Gold Color Women Jewelry Set Quality 18k Gold Plated Jewelry Two Tone Necklace Earrings Bracelet Ring Set Free Shipping",
        price: 14.94,
        imageUrl: "https://i.ibb.co/gMgnHKW/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dd93IdZ", // Insert your affiliate link here
    },    {
        title: "FreeYond F9 Smartphone 64GB/128GB 6.52,HD+ Screen 5000mAh Big Battery Octa Core13MP Dual Camera 5000mAh Android Phone ",
        price: 59.56,
        imageUrl: "https://i.ibb.co/P9TQDb1/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dmzegz1", // Insert your affiliate link here
    },    {
        title: "S128 Mini Drone 4K HD Camera Threesided Obstacle Avoidance Air Pressure Fixed Height Professional Foldable Quadcopter sell Apron",
        price: 0.99,
        imageUrl: "https://i.ibb.co/hYdMsV6/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DdWE3j1", // Insert your affiliate link here
    },    {
        title: "Hot Fashion Unisex Snake Chain Women Necklace Choker Stainless Steel Herringbone Gold Color Chain Necklace For Women Jewelry",
        price: 0.83,
        imageUrl: "https://i.ibb.co/S67Z3Y5/main-image-5.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DCaaR47", // Insert your affiliate link here
    },    {
        title: "KOHR New G6 Aerial Drone 8K S6 HD Camera GPS Obstacle Avoidance Q6 RC Helicopter FPV WIFI Professional Foldable Quadcopter Toy",
        price: 17.38,
        imageUrl: "https://i.ibb.co/jz6dvRG/main-image-1-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dey5RbZ", // Insert your affiliate link here
    },    {
        title: "[World Premiere] HOTWAV Cyber 13 Pro 150LM Flashlight 20GB+256GB 6.6'' FHD+ 2K 10800mAh 20W Fast Charging 64MP Android 13 Globa",
        price: 149.74,
        imageUrl: "https://i.ibb.co/zHwC02q/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DlYizHl", // Insert your affiliate link here
    },    {
        title: "High Quality Dive Depth 30m 4K UHD Camera 12MP 32G Storage Diving Drone Unmanned Underwater Mini Drone for Sale",
        price: 2977.73,
        imageUrl: "https://i.ibb.co/5GRtBrm/main-image-2.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dd7BPdz", // Insert your affiliate link here
    },    {
        title: "3D Pen for Children 3D Drawing Printing Pen with LCD Screen Compatible PLA Filament Toys for Kids Christmas Birthday Gift",
        price: 5.30,
        imageUrl: "https://i.ibb.co/PCtsM08/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DmM17c3", // Insert your affiliate link here
    },    {
        title: "For Android IOS Bluetooth call Men's smart watch non-invasive blood glucose ECG+PPG voice Assistant Waterproof smart watch + box",
        price: 45.83,
        imageUrl: "https://i.ibb.co/tYvCBHr/main-image-6.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DdFamiF", // Insert your affiliate link here
    },    {
        title: "12/8.5/4.4 inch LCD Drawing Tablet For Children's Toys Painting Tools Electronics drawing board Kids Educational Handwriting Pad",
        price: 2.34,
        imageUrl: "https://i.ibb.co/jRT4bVM/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DekUFVN", // Insert your affiliate link here
    },    {
        title: "Techage 4K Security Camera System Ultra HD 8MP POE NVR Two-Way Audio Face Detect Color Night Vision CCTV Video Surveillance Set",
        price: 145.90,
        imageUrl: "https://i.ibb.co/0ZRY92M/main-image-4.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DkEEstD", // Insert your affiliate link here
    },    {
        title: "F13 GPS Drone 8K HD Dual Camera 5G 3-Axis Anti-Shake Gimbal Obstacle Avoidance Brushless Motor Helicopter Foldable RC Quadcopter",
        price: 246.41,
        imageUrl: "https://i.ibb.co/gP7TX3L/main-image-1.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DnpGX4T", // Insert your affiliate link here
    },    {
        title: "Reolink TrackMix Series Poe & WiFi Camera 4k Dual Lens PTZ Auto Tracking Outdoor Pet Car Human Detection 8MP IP Security Camera",
        price: 174.31,
        imageUrl: "https://i.ibb.co/02xFY2d/main-image-2.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DmvhFGx", // Insert your affiliate link here
    },    {
        title: "Women's Multivitamin Multimineral Supplement - Magnesium Biotin Calcium Zinc Selenium - Joint Bones Skin Hair Nails Health",
        price: 4.59,
        imageUrl: "https://i.ibb.co/PTFZ0cv/main-image-2.jpg",
        category: "Best Deals",
        subcategory: "Drones & Cameras",
        affiliateLink: "https://s.click.aliexpress.com/e/_DD2mM7l", // Insert your affiliate link here
    },
    {
        title: "2023 New Outdoor Smart Watch Men With Flashlight Sport Fitness Bracelet Blood Pressure IP67 Waterproof Smartwatch For Android",
        price: 21.88,
        imageUrl: "https://i.ibb.co/jH1XcHd/main-image-3.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDBtBsb",
       },  {
        title: "Quickly Restore Vision Myopia Treatment Lutein Protect Eyesight Supplement Improve Eye Edema Relieve Fatigue Focus On Eye Health",
        price: 9.07,
        imageUrl: "https://i.ibb.co/kq532XZ/main-image-2.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DFhitVN",
       },  {
        title: "The new D6 professional mini drone 4kWifi FPV HD ESC camera optical flow with obstacle avoidance foldable quadcopter toy gift",
        price: 29.98,
        imageUrl: "https://i.ibb.co/HPnWjPS/main-image-2.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DdKb8qx",
       },  {
        title: "Kids 4G Smart Watch SOS GPS Location Tracker Sim Card Video Call WiFi Chat Camera Flashlight Waterproof Smartwatch For Children",
        price: 25.97,
        imageUrl: "https://i.ibb.co/6FLtXRk/main-image-3.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DFM3af9",
       },  {
        title: "Friends City House Summer Holiday Villa Castle Building Blocks Sets Figures Swimming Pool DIY Toys for Kids Girls Christmas Gift",
        price: 25.33,
        imageUrl: "https://i.ibb.co/bWtksDm/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DeKiUmx",
       },  {
        title: "Kids Magnetic Construction Set Magnetic Balls Stick Building Blocks Montessori Educational Toys For Children Gift",
        price: 12.14,
        imageUrl: "https://i.ibb.co/tQmygZM/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dmpuwkn",
       },  {
        title: "2023 New For Huawei GT4 Pro Smart Watch Men IP68 NFC GPS Tracker AMOLED 360*360 HD Screen Heart Rate Bluetooth Call SmartWatch",
        price: 22.64,
        imageUrl: "https://i.ibb.co/HD6sYk4/main-image-2.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DEPdBiJ",
       },  {
        title: "Fast Hair Growth Set Chebe Oil Traction Alopecia Hair Mask Anti Break Loss Hair Growth Oil Baldness Treatment Hair Care Products",
        price: 0.99,
        imageUrl: "https://i.ibb.co/0YFgXYH/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dnd3NZN",
       },  {
        title: "2023 New Bluetooth Call Smart Watch Men Women Sleep Heart Rate Blood Pressure Sport Smart Clock Fashion Ladies Smartwatch Woman",
        price: 11.46,
        imageUrl: "https://i.ibb.co/0tcG0f8/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDcq2jV",
       },  {
        title: "HUIQIBAO SWAT Police Station Truck Model Building Blocks City Machine Helicopter Car Figures Bricks Educational Toy For Children",
        price: 9.54,
        imageUrl: "https://i.ibb.co/xCfv2q2/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DCvBF1d",
       },  {
        title: "KAZI HIGH-TECH Battery Powered Electric Classic Train City Rail motor Building Blocks Bricks Boys Toys For kids",
        price: 4.68,
        imageUrl: "https://i.ibb.co/yRR3whH/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DD8G4Tz",
       },  {
        title: "For Huawei Android NFC Smart Watch Men ECG+PPG Heart Rate Health Monitor AI Voice Bluetooth Call IP68 Waterproof Smartwatch 2023",
        price: 30.29,
        imageUrl: "https://i.ibb.co/zRV4rQw/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDNcoWT",
       },  {
        title: "Latest Dubai Gold Color Jewelry Sets Luxury 18K Gold Plated Women Necklaces Earrings Ring Bracelet Wedding Party Accessories",
        price: 19.71,
        imageUrl: "https://i.ibb.co/RvfgLRS/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DFGEPWn",
       },  {
        title: "1080P HD Mini Camera WiFi Home Monitor Indoor Safety Security Surveillance Night Vision Camcorder IP Cam Audio Video Recorder",
        price: 0.99,
        imageUrl: "https://i.ibb.co/tHXFSRz/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDE0EET",
       },  {
        title: "RC Cars 2.4G 390 Moter High Speed Racing with LED 4WD Drift Remote Control Off-Road 4x4 Truck Toys for Adults and Kids",
        price: 72.50,
        imageUrl: "https://i.ibb.co/xqzRJ30/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DdfsYlh",
       },  {
        title: "Pop Light Fidget Game Quick Push Bubble Game Handle Toys Boys & Girls Anti-Stress Toys with LED Game Machine Relieve Stress Toys",
        price: 3.13,
        imageUrl: "https://i.ibb.co/47C0Tng/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDr9lBv",
       },  {
        title: "2023 New For Huawei GT4 Pro Smart Watch Men IP68 NFC GPS Tracker AMOLED 360*360 HD Screen Heart Rate Bluetooth Call SmartWatch",
        price: 22.64,
        imageUrl: "https://i.ibb.co/G5BxhRZ/main-image-2.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DEPdBiJ",
       },  {
        title: "Canon Camera EOS 6D Mark II DSLR Digital Camera Fotografica Profesional Camera (NEW",
        price: 1187.33,
        imageUrl: "https://i.ibb.co/syZ4v5m/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DFXe8pt",
       },  {
        title: "2023 New For Huawei Xiaomi GT4 Pro Smart Watch Men NFC GPS Tracker AMOLED 466*466 HD Screen Heart Rate Bluetooth Call SmartWatch",
        price: 32.19,
        imageUrl: "https://i.ibb.co/rGHmV1K/main-image-6.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DkZuArz",
       },  {
        title: "For Tesla Model 3 Y 2021-2023 New Upgrade Ice Cloth Buckle Sun Shades Glass Roof Sunshade Front Rear Sunroof Skylight",
        price: 20.05,
        imageUrl: "https://i.ibb.co/8N8qpFD/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDZIXvl",
       },  {
        title: "Lightdow White 420-800mm F/8.3-16 Super Telephoto Manual Zoom Lens+T2 Adapter Ring for Canon Nikon Sony Pentax Fuji Cameras",
        price: 56.17,
        imageUrl: "https://i.ibb.co/hWbBSTH/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dlg7Qht",
       },  {
        title: "HOTWAV W10 Pro Octa-Core Smartphone 15000mAh Massive Batery 6GB+64GB Rugged Mobile Phone Android 12 6.53'' 20MP Camera Cellphone",
        price: 131.90,
        imageUrl: "https://i.ibb.co/CVPJfnb/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDXESQL",
       },
    {
      title: "F8 Handheld 3-Axis Gimbal Phone Holder Anti Shake Video Record Stabilizer for Xiaomi iPhone Cellphone Smartphone",
        price: 51.91,
        imageUrl: "https://i.ibb.co/yPBHLsg/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DmtHrZH", // Insert your affiliate link here
    },
      {
      title: "New GPS Smart Watch Men For Huawei GT4 Pro 360*360 HD Screen Heart rate Bluetooth Call NFC IP68Waterproof Blood Sugar Smartwatch",
        price: 27.56,
        imageUrl: "https://i.ibb.co/NZTvw8L/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DFI0AzZ",
        },
    {
        title: "2023 NX9 Rugged Smart Watches Men For Android Huawei Ios Waterproof Watches 1.39'' HD Fitness Tracker Bluetooth Call Smartwatch",
        price: 23.39,
        imageUrl: "https://i.ibb.co/KykB6bT/main-image-2.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DD1mElt", // Insert your affiliate link here
    },
    {
        title: "For Xiaomi Huawei Samsung 1.81 inch Bluetooth Call Smartwatch Men Support 120 Sport 2022 New Women Rotary keys Smart Watch +Box",
        price: 21.20,
        imageUrl: "https://i.ibb.co/ryGKH2F/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDEJwDZ", // Insert your affiliate link here
    },  {
        title: "ANBIUX 8MP 4K IP Camera 5MP Speed Dome Auto Tracking PTZ Camera Smart Home Outdoor Wireless WIFI Camera Surveillance Monitor",
        price: 17.10,
        imageUrl: "https://i.ibb.co/whj6r7T/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DCiGO6b", // Insert your affiliate link here
    },  {
        title: "Mini GPS Tracker Bluetooth 5.0 Anti-Lost Device Pet Kids Bag Wallet Tracking for IOS/ Android Smart Finder Locator Accessories",
        price: 1.50,
        imageUrl: "https://i.ibb.co/QkwPtvJ/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DF2bQPd", // Insert your affiliate link here
    },  {
        title: "New Brand S23 Ultra 5G Smartphone 7.3 Inch Full Screen Telephone 16GB+1TB 4G Mobile Phones Global Version Android 13 Cell Phone",
        price: 79.16,
        imageUrl: "https://i.ibb.co/9rSpRhk/main-image-2.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DdKMpgT", // Insert your affiliate link here
    },  {
        title: "women Smart Watch Women's Series 1.2-inch Screen Bluetooth Call Heart Rate Blood Pressure Vibration Long Sitting Reminder 2023",
        price: 30.32,
        imageUrl: "https://i.ibb.co/2PC8bvP/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DCAnQhZ", // Insert your affiliate link here
    },  {
        title: "2023 Rugged Military Smart Watch Men For Android Xiaomi Ios Watch 100+Sports Watches BT Call Waterproof Original Smartwatch men",
        price: 21.94,
        imageUrl: "https://i.ibb.co/C17sm0q/main-image-3.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DCnZawF", // Insert your affiliate link here
    },  {
        title: "Unihertz 8849 Tank 2 Projector Rugged 22GB RAM 256GB ROM 108MP Camping Light 64MP Super Night Vision G99 15500mAh Support SD TF",
        price: 366.30,
        imageUrl: "https://i.ibb.co/4fXcYW0/main-image-2.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDDyugB", // Insert your affiliate link here
    },  {
        title: "Hohem iSteady M6 Handheld Gimbal Stabilizer Selfie Tripod for Smartphone with AI Magnetic Fill Light Full Color Video Vlogging",
        price: 134.85,
        imageUrl: "https://i.ibb.co/PCwQ5XZ/main-image-3.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DnPLHfZ", // Insert your affiliate link here
    },  {
        title: "Hohem Official iSteady Pro 4 Gimbal for GoPro 11/10/9/8/7/6/5 DJI OSMO Insta360 One R Action Camera 3-Axis Handheld Stabilizer",
        price: 89.17,
        imageUrl: "https://i.ibb.co/P6W19BH/main-image-2.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DF0qXIJ", // Insert your affiliate link here
    },  {
        title: "4K Action Camera SJCAM SJ4000 AIR 4K@30PFS & EXSKOF E1 PRO 4K@60FPS 4x Zoom WIFI Waterproof Moto Helmet Cam Sports Video Cameras",
        price: 42.79,
        imageUrl: "https://i.ibb.co/0h87Zbh/main-image-4.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_Deijy4X", // Insert your affiliate link here
    },  {
        title: "GoPro HERO 7 white action camera original Ultra HD hero 7 white skiing and Cycling Sports go pro camera",
        price: 138.41,
        imageUrl: "https://i.ibb.co/7X4PxB3/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDnOIYn", // Insert your affiliate link here
    },  {
        title: "GoPro HERO 11 Black BUNDLE Sport Camera 120P GP2 Chip Support 5.3k 60fps 10m Waterproof HyperSmooth 5.0 1/1.9 Inch Sensor Go Pro",
        price: 391.53,
        imageUrl: "https://i.ibb.co/R9TH9V2/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DC1u2iT", // Insert your affiliate link here
    },  {
        title: "MOKiN USB-C Hub Docking Station for MacBook Air/Pro, iPad M1/M2, Thunderbolt Laptop - Features HDMI 4K, DP, 100W PD, SD/TF, RJ45",
        price: 17.12,
        imageUrl: "https://i.ibb.co/SssHVDW/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DCi72xN", // Insert your affiliate link here
    },  {
        title: "Adreamer Laptop 16-inch 8GB RAM 1TB SSD Intel Celeron N5105 CPU Dual WiFi Business Office Computer 2.5K IPS Window 11 Notebook",
        price: 299.78,
        imageUrl: "https://i.ibb.co/fQygWfP/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DkBxIjl", // Insert your affiliate link here
    },  {
        title: "MC 652 Laptop Stand Aluminium Alloy Foldable Tablet Rotale Stand Macbook Laptop Portable Fold Holder Cooling Bracket Support",
        price: 27.34,
        imageUrl: "https://i.ibb.co/LRw4n6r/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DBZIK3d", // Insert your affiliate link here
    },  {
        title: "Laptop Case for Macbook Air 13 A2337 2020 A2338 M1 Chip Pro 13 2022 M2 Air 13.6 12 11 15 for Macbook Pro 14 case 2021 Pro 16",
        price: 10.46,
        imageUrl: "https://i.ibb.co/FqXXDqh/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDzp0QL", // Insert your affiliate link here
    },  {
        title: "Laptop Sleeve bag 14 15.6 Inch Notebook Pouch For Macbook HP Dell Acer Shockproof Computer Briefcase Travel Business Men Case",
        price: 7.83,
        imageUrl: "https://i.ibb.co/Wtwxh8g/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDhva1v", // Insert your affiliate link here
    },  {
        title: "Lifetime Warranty Men's Backpack 14 15.6 17.3inch Laptop Backpack Bag For Men Anti Theft School Backpack Male Travel Bag Mochila",
        price: 38.50,
        imageUrl: "https://i.ibb.co/6FGTMzV/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DkAMXOX", // Insert your affiliate link here
    },  {
        title: "25 Pcs/set Kawaii Erasable pens Gel Pen sketch Writing Stationery for Notebook school supplies pen cute kids pens pencil",
        price: 2.83,
        imageUrl: "https://i.ibb.co/T0jyvXB/main-image-5.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DBCk1iX", // Insert your affiliate link here
    },  {
        title: "30PCS Gel Pen Set 0.5mm Ballpoint pen Black Blue Red ink Color Kawaii pen Students School Office Stationery School supplies",
        price: 1.61,
        imageUrl: "https://i.ibb.co/k5k5mFM/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DmQOqvp", // Insert your affiliate link here
    },  {
        title: "Product 3",
        price: 1.61,
        imageUrl: "https://i.ibb.co/MSg0Q1K/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DdMVahD", // Insert your affiliate link here
    },  {
        title: "Waterproof Double Arc Lighter USB Rechargeable Windproof Plasma Lighter Outdoor Camping Flameless Smoking Accessories",
        price: 4.91,
        imageUrl: "https://i.ibb.co/c8GhpPd/main-image-6.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DEBmSB9", // Insert your affiliate link here
    },  {
        title: "Plasma Dual ARC Touch Sensitive Lighter USB Rechargeable Windproof Flameless Lighter Gift for Men",
        price: 8.26,
        imageUrl: "https://i.ibb.co/8j2vrCj/main-image-4.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDJ2WBz", // Insert your affiliate link here
    },  {
        title: "3pcs/Set Water Bottle Sport Large Capacity Water Bottle School Girl Children Kawaii Cute Drinking Cup set for Hiking Camping Cup",
        price: 5.6,
        imageUrl: "https://i.ibb.co/X40c5xH/main-image-1-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DlkjCSb", // Insert your affiliate link here
    },  {
        title: "New Rectangular Creative Netflix Lighter Water Cup Ins High Value Straw Cup Portable Drop-resistant Gift Water Bottles For Girls",
        price: 9.6,
        imageUrl: "https://i.ibb.co/4t2S6Q0/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_DD4u6e7", // Insert your affiliate link here
    },  {
        title: "Soft Laptop Bag For Xiaomi Hp Dell Lenovo Notebook Computer For Macbook Air Pro Retina 11 12 13 14 15 15.6 Sleeve Case Cover",
        price: 2.09,
        imageUrl: "https://i.ibb.co/n6kNLTc/main-image-1.jpg",
        category: "Popular Products",
        subcategory: "Games & Accessories",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dl1o8S7", // Insert your affiliate link here
    },
 
    {
        title: "Lifetime Warranty Expandable Backpack For Men 15.6 inch Laptop Backpack Bag College Thin Travel Bag Male Lightweight Schoolbag",
        price: 22.46,
        imageUrl: "https://i.ibb.co/pjyKxSn/main-image-2.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DmigJ9V",
       },
  {
        title: "USB Charging Sling Bag For Men Casual Chest Bag Shoulder Crossbody Bag Male Anti Theft Multifunction Bags Man Sports Travel Pack",
        price: 0.01,
        imageUrl: "https://i.ibb.co/nCQc6f3/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DkEAaVt",
       },
  {
        title: "Tyeso Coffee Cup Thermos Bottle Stainless Steel Double-layer Insulation Cold And Hot Travel Mug Vacuum Flask Car Water Bottle",
        price: 8.90,
        imageUrl: "https://i.ibb.co/2tWKrGM/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dko8BMb",
       },
  {
        title: "350-1000ML Smart Thermos High Capacity Mug Stainless Steel Tumbler Insulated Water Bottle Vacuum Flask For Office Tea Cup",
        price: 10.71,
        imageUrl: "https://i.ibb.co/Ntqc41F/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDplUD1",
       },
  {
        title: "New 500/800/1000ml Sports Water Bottle BPA Free Portable Leak-proof Shaker bottle Plastic Drinkware Tour Gym Free Shipping items",
        price: 6.01,
        imageUrl: "https://i.ibb.co/MnHRc7Z/main-image-2.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DEPRvPD",
       },
  {
        title: "2023 New Chest Bag New Men Simple Nylon Fashion Waterproof One Shoulder Crossbody Bag",
        price: 0.66,
        imageUrl: "https://i.ibb.co/HxbQrnY/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DkrAuW3",
       },
  {
        title: "USB Charging Sling Bag For Men Casual Chest Bag Shoulder Crossbody Bag Male Anti Theft Multifunction Bags Man Sports Travel Pack",
        price: 3.98,
        imageUrl: "https://i.ibb.co/sCzVc2N/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DkNTfDd",
       },
  {
        title: "50L 60L 80L Outdoor Backpack with USB Port for Men Pack Bags Large Capacity Unisex Sports Trekking Hiking Camping Available in",
        price: 13.43,
        imageUrl: "https://i.ibb.co/T2j9vD7/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DFdul4L",
       },
  {
        title: "New Wireless Lavalier Microphone Portable Audio Video Recording Mini Mic for iPhone Android Live Broadcast Gaming Phone Mic",
        price: 3.0,
        imageUrl: "https://i.ibb.co/DgndqmX/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DmRokUn",
       },
  {
        title: "APEXEL Telescope Telephoto Lens 18X Zoom lens with Tripod Monocular Mobile Phone camera Lens for Smartphones lente para celular",
        price: 11.29,
        imageUrl: "https://i.ibb.co/0Fn6Px0/main-image-4.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DlUFFKr",
       },
  {
        title: "2 Functions Mobile Phone Lens 0.45X Wide Angle Len & 12.5X Macro HD Camera Lens Universal For iPhone Android Phone Smartphone",
        price: 1.98,
        imageUrl: "https://i.ibb.co/Cs9vrvc/main-image-3.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DlWOosr",
       },
  {
        title: "37MM 15X Macro Lens 4K HD Professional Photography Phone Camera Lens for Eyelashes Diamond Jewelry 30X Macro Lens for Smartphone",
        price: 6.53,
        imageUrl: "https://i.ibb.co/mN6cdnr/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DBNcF4T",
       },
  {
        title: "APEXEL New HD 37MM 0.45x Super Wide Angle Lens with 12.5x Super Macro Lens for iPhone Samsung Smartphones Camera Phone lens Kit",
        price: 4.96,
        imageUrl: "https://i.ibb.co/vJx6DWp/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_Dm8yPiR",
       },
  {
        title: "5-8 Person Outdoor Automatic Quick Open Tent Rainfly Waterproof Camping Tent Family Outdoor Instant Setup Tent with Carring Bag",
        price: 48.78,
        imageUrl: "https://i.ibb.co/QQ9ZyLH/main-image-3.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DefdoYP",
       },
  {
        title: "PACOONE Ultralight 20D Nylon Camping Tent Portable Backpacking Cycling Tent Waterproof Outdoor Hiking Travel Tent Beach Tent New",
        price: 70.69,
        imageUrl: "https://i.ibb.co/MDxgtQh/main-image-6.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DDzZOLl",
       },
  {
        title: "MOUNTAINHIKER Outdoor Camping 8-10Person Dome Tent Moonlight White Large Sun Protection Pergola Tent Picnic Hiking Awning Canopy",
        price: 23.36,
        imageUrl: "https://i.ibb.co/mFnYtGM/main-image-3.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DlOUFrt",
       },
  {
        title: "WEST BIKING Portable Camping Light with Magnetic USB Rechargeable Camping Lantern Outdoor Led Flashlight Tent Camp Supplies",
        price: 12.08,
        imageUrl: "https://i.ibb.co/jZnRRFF/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DlSq903",
       },
  {
        title: "50LTravel Backpack Hiking Waterproof Trekking Bag Man/Woman Outdoor Camping Rucksack Cycling Daypacks Mountaineering Backpacks",
        price: 29.09,
        imageUrl: "https://i.ibb.co/FbCnGvc/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DlzPpwn",
       },
  {
        title: "Waterproof Luminous Kids Backpack Children School Bags For Boys Orthopedic School Backpack Primary Schoolbag Book Bag Mochila",
        price: 9.27,
        imageUrl: "https://i.ibb.co/HX19HJW/main-image-3.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DC2a1bZ",
       },
  {
        title: "New Pokemon School Bag Backpack Kids Large Capacity Trolley Bag Six-Wheelable Climbable Lift Trolley Trolley Bag Detachable",
        price: 40.42,
        imageUrl: "https://i.ibb.co/nPF5TBd/main-image-1.jpg",
        category: "Trending Products",
        subcategory: "Smart Electronics",
        affiliateLink: "https://s.click.aliexpress.com/e/_DCx3Rv5",
       },
];

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.src = product.imageUrl;
    image.alt = product.title;
    image.classList.add("product-image");

    const title = document.createElement("div");
    title.textContent = product.title;
    title.classList.add("product-title");

    const price = document.createElement("div");
    price.textContent = `$${product.price.toFixed(2)}`;
    price.classList.add("product-price");

    // Create an affiliate link button
    const affiliateLinkButton = document.createElement("a");
    affiliateLinkButton.href = product.affiliateLink; // Use the affiliate link provided in the data
    affiliateLinkButton.target = "_blank";
    affiliateLinkButton.textContent = "Buy Now"; // Customize the button text

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(affiliateLinkButton);

    return card;
}

// Function to populate the product list for a specific category and subcategory
function populateProductList(category, subcategory, containerId) {
    const productList = document.getElementById(containerId);
    products.forEach((product) => {
        if (product.category === category && product.subcategory === subcategory) {
            const card = createProductCard(product);
            productList.appendChild(card);
        }
    });
}

// Call the function to populate the product lists
populateProductList("Best Deals", "Drones & Cameras", "best-deals-products");
populateProductList("Trending Products", "Smart Electronics", "trending-products");
populateProductList("Popular Products", "Games & Accessories", "popular-products");
