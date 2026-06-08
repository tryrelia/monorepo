import { NextResponse } from "next/server";
import { getItems } from "@/lib/store";
import { UpdateItemSchema } from "@/lib/validations";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const item = getItems().find((i) => i.id === id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const items = getItems();
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const body = await request.json();
  const parsed = UpdateItemSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  items[idx] = { ...items[idx], ...parsed.data, updatedAt: new Date().toISOString() };
  return NextResponse.json(items[idx]);
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const items = getItems();
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  items.splice(idx, 1);
  return new NextResponse(null, { status: 204 });
}
