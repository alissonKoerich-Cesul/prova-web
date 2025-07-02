import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from "zod";

const createBookBodySchema = z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    publicationYear: z.number(),
    isbn: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(createBookBodySchema);

type CreateBookBodySchema = z.infer<typeof createBookBodySchema>;

@Controller('/products')
export class CreateProductController {
  constructor(private createProduct: CreateBookBodySchema) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: CreateBookBodySchema) {
    const {
        id,
        title,
        author,
        publicationYear,
        isbn,
    } = body;

    await this.createProduct.execute({
        id,
        title,
        author,
        publicationYear,
        isbn,
    });
  }
}