import nc from "next-connect";
import { prisma } from "@/lib/prisma";

// const getProducts = async ( req, res) => {
//     try {
//         const product = await prisma.product.findMany({
//             select: {
//                 id: true,
//                 title: true,
//                 description: true,
//                 price: true,
//             },
//             orderBy: {
//                 createdAt: "desc",
//             },
//         });
//         return res.status(200).json({ product });
//     } catch (error) {
//         return res.status(500).json({
//             message: "Something went wrong!! Please try again after sometime",
//         });
//     }
// }
// const handler = nc({ attachParams: true }).get(getProducts);

// export default handler;
const handler = async (req, res) => {
    prisma.product.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    }).then((product) => {
        // console.log(product)
        res.status(200).json({ product });
    }).catch((error) => {
        res.status(500).json({
            message: "Something went wrong!! Please try again after sometime",
        })
    })
}


export default handler