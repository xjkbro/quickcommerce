
import { useQuery } from "@tanstack/react-query";


export default async function Products() {
    
    const products = await getData();
    console.log(products)
    // const { isLoading, data } = useQuery(
    //     ["Products"],
    //     getProducts
    // );
    // const products = data?.products;
      return (
        <main>
         {
         (products && products?.length > 0 ) ? <>{
            products.map((p:any, i:number)=> 
                <div key={i} className="flex gap-4">
                    <div>{p.id}</div>
                    <div>{p.title}</div>
                    <div>{p.description}</div>
                    <div>${p.price}</div>
                </div>
            )}</>
        : <></>
        }
        </main>
      )
}
async function getHello() {
    const res = await fetch('http://localhost:3000/api/hello');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

async function getData() {
    fetch('http://localhost:3000/api/products').then(res => {return res.json()}).catch((error) => {
      throw new Error('Failed to fetch data');

    });
    
  }

  
// const getProducts = async () => {
//     try {
//         const res = await fetch(`http://localhost:3000/api/products`);
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         throw error;
//     }
// };