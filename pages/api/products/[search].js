import nc from "next-connect";
// import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { search } = req.query;
    // const { s } = JSON.parse(req.body);
    if (req.method == "GET") {
        const products = await prisma.product.findMany({
            where: {
                title: {
                    contains: search,
                },
            },
            select: {
                id: true,
                title: true,
                slug: true,
                image: true,
                short_description: true,
                description: true,
                available: true,
                price: true,
                category: true,
            },
        });
        console.log(products);
        return res.status(200).send(JSON.stringify(products));
    }
};

export default handler;
