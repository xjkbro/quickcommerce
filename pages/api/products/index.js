import nc from "next-connect";
import { prisma } from "@/lib/prisma";
const handler = async (req, res) => {
    // try {
    const product = await prisma.product.findMany({
        select: {
            id: true,
            slug: true,
            title: true,
            description: true,
            // description: true,
            image: true,
            category: true,
            available: true,
            price: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    // console.log(product);
    return res.status(200).send(JSON.stringify(product));
    // } catch (error) {
    //     return res.status(500).json({
    //         message: "Something went wrong!! Please try again after sometime",
    //     });
    // }
};

export default handler;
