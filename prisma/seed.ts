import {
    randBetweenDate,
    randNumber,
    randProduct,
    randProductAdjective,
} from "@ngneat/falso";
import { LoremIpsum } from "lorem-ipsum";
import { PrismaClient } from "@prisma/client";
const primsa = new PrismaClient();
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});
const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
};
const main = async () => {
    try {
        await primsa.category.deleteMany();
        await primsa.product.deleteMany();
        const fakeProducts = randProduct({
            length: 100,
        });
        for (let index = 0; index < fakeProducts.length; index++) {
            const product = fakeProducts[index];
            const productAdjective = randProductAdjective();

            await primsa.product.upsert({
                where: {
                    title: `${productAdjective} ${product.title}`,
                },
                create: {
                    title: `${productAdjective} ${product.title}`,
                    slug: createSlug(`${productAdjective} ${product.title}`),
                    short_description: product.description,
                    description: lorem.generateSentences(5),
                    price: parseFloat(product.price),
                    quantity: randNumber({ min: 1, max: 20 }),
                    image: `${product.image}/tech`,
                    available: true,
                    visible: true,
                    category: {
                        connectOrCreate: {
                            where: {
                                name: product.category,
                            },
                            create: {
                                name: product.category,
                                slug: createSlug(product.category),
                                createdAt: randBetweenDate({
                                    from: new Date("10/06/2020"),
                                    to: new Date(),
                                }),
                            },
                        },
                    },
                    createdAt: randBetweenDate({
                        from: new Date("10/07/2020"),
                        to: new Date(),
                    }),
                },
                update: {},
            });
        }
    } catch (error) {
        throw error;
    }
};

main().catch((err) => {
    console.warn("Error While generating Seed: \n", err);
});
