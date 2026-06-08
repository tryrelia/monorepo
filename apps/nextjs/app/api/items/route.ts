import { NextResponse } from "next/server";
import { getItems, type Item } from "@/lib/store";
import { CreateItemSchema } from "@/lib/validations";

export async function GET() {
  const items = getItems()
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = CreateItemSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const now = new Date().toISOString();
  const item: Item = {
    id: crypto.randomUUID(),
    title: parsed.data.title,
    done: false,
    createdAt: now,
    updatedAt: now,
  };
  getItems().push(item);
  return NextResponse.json(item, { status: 201 });
}
