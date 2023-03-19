import nc from "next-connect";
// import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method == "POST") {
        const { title, description, image, shortDescription, slug, price } =
            JSON.parse(req.body);
        const product = await prisma.product.create({
            data: {
                title: title,
                description: description,
                image: image,
                slug: slug,
                price: parseFloat(price),
                short_description: shortDescription,
                quantity: 1,
            },
        });
        return res
            .status(200)
            .setHeader("Cache-Control", "no-store")
            .send(JSON.stringify(product));

        // return res.redirect(307, "/admin/product/" + id).end();
    }
};

export default handler;
