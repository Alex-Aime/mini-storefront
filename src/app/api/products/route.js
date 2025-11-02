export async function GET() {
    const products = [
        { id:"cus1", name:"Laptop", price: 1100, category: "Electronics", stock: 15 },
        { id:"cus2", name:"Chair", price: 50, category: "Furniture", stock: 50 },
        { id:"cus3", name:"Nintendo Switch", price: 350, category: "Electronics", stock: 13 },
        { id:"cus4", name:"Fridgerator", price: 1500, category: "Appliances", stock: 4 },
        { id:"cus5", name:"Table", price: 500, category: "Furniture", stock: 2 },
        { id:"cus6", name:"Microwave", price: 70, category: "Appliances", stock: 30 },
        { id:"cus7", name:"Couch", price: 900, category: "Furniture", stock: 7 },
        { id:"cus8", name:"Washer&Dryer", price: 2100, category: "Appliances", stock: 19 },
        { id:"cus9", name:"Tablet", price: 650, category: "Electronics", stock: 45 }

    ];
    return Response.json(products)
}