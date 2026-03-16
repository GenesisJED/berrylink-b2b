import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const products = [
        {
            name: 'Fresa Real de Algeciras',
            description: 'Fresas extra dulces y de gran tamaño, cosechadas en el pico de su madurez.',
            price: 12.50,
            stock: 50,
            moq: 5,
            image: '/images/product-1.svg',
        },
        {
            name: 'Mini Fresas Silvestres',
            description: 'Pequeñas joyas de sabor concentrado, ideales para repostería de lujo.',
            price: 18.20,
            stock: 30,
            moq: 2,
            image: '/images/product-2.svg',
        },
        {
            name: 'Fresa Blanca (Pineberry)',
            description: 'Variedad exótica con sabor a piña y color blanco crema.',
            price: 25.00,
            stock: 15,
            moq: 1,
            image: '/images/product-3.svg',
        },
        {
            name: 'Pack Degustación Premium',
            description: 'Una selección de nuestras 4 mejores variedades de la temporada.',
            price: 45.90,
            stock: 20,
            moq: 1,
            image: '/images/product-4.svg',
        },
        {
            name: 'Fresón Diamante',
            description: 'Color rojo intenso y textura firme. Larga vida post-cosecha.',
            price: 9.90,
            stock: 100,
            moq: 10,
            image: '/images/product-1.svg',
        },
        {
            name: 'Corazón de Fresa',
            description: 'Fresas seleccionadas por su forma perfecta de corazón. Ideales para San Valentín.',
            price: 15.75,
            stock: 40,
            moq: 5,
            image: '/images/product-2.svg',
        },
    ];

    console.log('Iniciando el sembrado de productos...');

    for (const product of products) {
        const createdProduct = await prisma.product.upsert({
            where: { name: product.name }, // Using name as a unique identifier for seeding purposes if we dont have IDs
            update: product,
            create: product,
        });
        console.log(`Producto creado/actualizado: ${createdProduct.name}`);
    }

    console.log('Sembrado completado.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
