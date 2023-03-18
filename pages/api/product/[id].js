import nc from "next-connect";
// import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { id } = req.query;
    // console.log(req.method);
    // console.log(req.query);
    // console.log(JSON.parse(req.body));
    if (req.method == "PUT") {
        const { title, description, image } = JSON.parse(req.body);
        console.log("TITLE:" + title);
        const product = await prisma.product.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                description: description,
                image: image,
            },
        });
        // const asd = await prisma.category.findFirst({
        //     where: { id: "clfcsdoov005ogmhc2mytzhv0" },
        // });
        console.log("PUT: " + product);
        // console.log("TITLE: " + asd);

        return res
            .status(200)
            .setHeader("Cache-Control", "no-store")
            .send(JSON.stringify(product));

        // return res.redirect(307, "/admin/product/" + id).end();
    }
    if (req.method == "GET") {
        const product = await prisma.product.findUnique({
            where: {
                id: id,
            },
        });
        console.log("GET");
        // console.log(product);
        return res.status(200).send(JSON.stringify(product));
    }
};

export default handler;
