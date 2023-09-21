const inventory = {
  items: [
    {
      id: 1,
      item_name: "Chainstitch Denim Jacket",
      category: "jackets",
      colors: ["Black", "Multicolor"],
      description:
        "All cotton 15 oz. denim with chainstitch embroidered graphic throughout. Full zip closure with welt hand pockets at lower front. Tab adjusters at cuffs and back hem with leather logo path. Original artwork by Raul de Nieves.",
      SKU: 5234,
      price: 398,
      images1: {
        front: "https://assets.supremenewyork.com/228547/ma/u_ABhp2VX7s.jpg",
        back: "https://assets.supremenewyork.com/228548/ma/mK7aQfhNRYk.jpg",
        detail: "https://assets.supremenewyork.com/228549/ma/EU95QjNXqn8.jpg",
      },
      images2: {
        front: "https://assets.supremenewyork.com/228544/ma/mRA7FYxg2Js.jpg",
        back: "https://assets.supremenewyork.com/228545/ma/uP0tD32Z3Yo.jpg",
        detail: "https://assets.supremenewyork.com/228546/ma/ZlBhg5a5dCU.jpg",
      },

      quantity: 16,
      sizes: ["small", "medium", "large", "X-large"],
    },
    {
      id: 2,
      item_name: "Silver Surfer Leather Varsity Jacket",
      colors: ["Black", "Blue"],
      description:
        "Pearlized pebbled cowhide leather with Bemberg twill lining and full zip closure. Double welt hand pockets at lower front and interior chest pocket. Knit rib cuffs and hem. Patent leather logo applique at chest. Patent leather graphic applique and embroidered pattern at back.",
      category: "jackets",
      SKU: 5235,
      price: 198,
      images1: {
        front: "https://assets.supremenewyork.com/228425/ma/I-hgcZ8HxDo.jpg",
        back: "https://assets.supremenewyork.com/228427/ma/SEMOP5ID6QA.jpg",
        inside: "https://assets.supremenewyork.com/228426/ma/VTedG3lgvTA.jpg",
        detail: "https://assets.supremenewyork.com/228428/ma/aSEPi0O7yJ8.jpg",
      },

      quantity: 16,
      sizes: ["small", "medium", "large", "X-large"],
    },

    {
      id: 3,
      item_name: "Credit Cards Shirt",
      category: "shirts",
      colors: ["Multicolor"],
      description:
        "All cotton poplin with printed pattern and single chest pocket. Original artwork by Lee Kan Kyo.",
      SKU: 4234,
      price: 148,
      images1: {
        front: "https://assets.supremenewyork.com/230829/ma/g5nvBWy3aUg.jpg",
        detail: "https://assets.supremenewyork.com/230830/ma/24Y54fe_2-U.jpg",
      },

      quantity: 16,
      sizes: ["small", "medium", "large", "X-large"],
    },
    {
      id: 4,
      item_name: "Suprime®/Hines® Boxer Briefs (4 Pack)",
      category: "accessory",
      colors: ["Black", "White"],
      description: "All cotton classic Hines® boxer brief.",
      SKU: 3234,
      price: 40,

      images1: {
        front: "https://assets.supremenewyork.com/231448/ma/9KrNg60eOD0.jpg",
        back: "https://assets.supremenewyork.com/231449/ma/e3RPZ-iV8uQ.jpg",
      },

      quantity: 10,
      sizes: ["small", "medium", "large", "X-large"],
    },

    {
      id: 5,
      item_name: "URL 6-panel",
      category: "hats",
      colors: [
        "Woodland Camo",
        "Dark Teal",
        "White",
        "Purple",
        "Black",
        "Yellow",
      ],

      description:
        "Supplix® nylon taslan 6-panel hat with webbing strap closure. Embroidered logos on front and back.",
      SKU: 2234,
      price: 48,

      images1: {
        front: "https://assets.supremenewyork.com/230002/ma/_s33rdRwUbU.jpg",
        back: "https://assets.supremenewyork.com/230003/ma/RaKSrg-plb8.jpg",
      },
      images2: {
        front: "https://assets.supremenewyork.com/229998/ma/oh4eXuQV-Qo.jpg",
        back: "https://assets.supremenewyork.com/229999/ma/JrPL55jIbWA.jpg",
      },
      images3: {
        front: "https://assets.supremenewyork.com/230000/ma/qnUmJPGGLqc.jpg",
        back: "https://assets.supremenewyork.com/230001/ma/Gx3d5hgh-x8.jpg",
      },
      images4: {
        front: "https://assets.supremenewyork.com/229996/ma/CAjJ9hOZv4s.jpg",
        back: "https://assets.supremenewyork.com/229996/ma/CAjJ9hOZv4s.jpg",
      },
      images5: {
        front: "https://assets.supremenewyork.com/229994/ma/jmhfDSdE66Q.jpg",
        back: "https://assets.supremenewyork.com/229995/ma/R7boXHCP3n0.jpg",
      },
      images6: {
        front: "https://assets.supremenewyork.com/229992/ma/YKBODuRM9iA.jpg",
        back: "https://assets.supremenewyork.com/229993/ma/OpAzopv6rA0.jpg",
      },

      quantity: 10,
    },
    {
      id: 6,
      item_name: "Now Err® Multi Arc Beanie",
      category: "hats",
      colors: ["Black", "Teal", "Pink", "Pale Yellow"],

      description: "Acrylic cuffed beanie with embroideries on crown and cuff.",
      SKU: 2235,
      price: 48,

      images1: {
        front: "https://assets.supremenewyork.com/229818/ma/dBuunjx7i8I.jpg",
        back: "https://assets.supremenewyork.com/229819/ma/TcWwVBxCy58.jpg",
      },
      images2: {
        front: "https://assets.supremenewyork.com/229820/ma/kxEu8JPiuD8.jpg",
        back: "https://assets.supremenewyork.com/229821/ma/V5tSHJYj3i4.jpg",
      },
      images3: {
        front: "https://assets.supremenewyork.com/229816/ma/gYgJ1_QoBmY.jpg",
        back: "https://assets.supremenewyork.com/229817/ma/SCC4jlqgezI.jpg",
      },
      images4: {
        front: "https://assets.supremenewyork.com/229814/ma/xF9-txVF6n0.jpg",
        back: "https://assets.supremenewyork.com/229815/ma/qnHBBjF3A-s.jpg",
      },

      quantity: 10,
    },
    {
      id: 7,
      item_name: "Chainstitch Regular Jean",
      category: "pants",
      colors: ["Multicolor"],

      description:
        "All cotton 15 oz. denim with chainstitch embroidered graphic throughout. Classic 5-pocket style with button fly, single coin pocket and leather logo patch on back.Original artwork by Raul de Nieves.",
      SKU: 1234,
      price: 398,
      images1: {
        front: "https://assets.supremenewyork.com/230491/ma/UMLLX3GeOhc.jpg",
        back: "https://assets.supremenewyork.com/230492/ma/p-PmTGF-zfQ.jpg",
        detail: "https://assets.supremenewyork.com/230493/ma/15XwWrWChUU.jpg",
      },

      quantity: 16,
      sizes: [30, 32, 34, 36],
    },
    {
      id: 8,
      item_name: "East Broadway Sweatpant",
      category: "pants",
      colors: "Night",
      description:
        "Brushed-back fleece with printed graphic. On seam hand pockets and single back patch pocket. Elastic cuffs and waistband with interior drawcord. Original artwork Ben Trogdon.",
      SKU: 1235,
      price: 168,
      images1: {
        front: "https://assets.supremenewyork.com/230654/ma/hVy4X51vhkI.jpg",
        back: "https://assets.supremenewyork.com/230655/ma/RUmK7MaXX40.jpg",
        detail: "https://assets.supremenewyork.com/230656/ma/MJckv8SwMIs.jpg",
      },

      quantity: 16,
      sizes: ["small", "medium", "large", "X-large"],
    },
    {
      id: 9,
      item_name: "Hearts Jacquard S/S top",
      category: "tops/sweaters",
      colors: ["White", "Black"],

      description:
        "All cotton crewneck with jacquard pattern and embroidered logo on chest.",
      SKU: 6234,
      price: 78,

      images1: {
        front: "https://assets.supremenewyork.com/231189/ma/NqBnU354pTY.jpg",
        detail: "https://assets.supremenewyork.com/231190/ma/PcQlRzUfeCU.jpg",
      },

      quantity: 16,
      sizes: ["small", "medium", "large", "X-large"],
    },
  ],
};
export default inventory;
