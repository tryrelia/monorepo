export type Item = {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};

const g = globalThis as unknown as { __items?: Item[] };

if (!g.__items) {
  const now = new Date().toISOString();
  g.__items = [
    { id: crypto.randomUUID(), title: "Buy groceries", done: false, createdAt: now, updatedAt: now },
    { id: crypto.randomUUID(), title: "Write tests", done: true, createdAt: now, updatedAt: now },
    { id: crypto.randomUUID(), title: "Ship it", done: false, createdAt: now, updatedAt: now },
  ];
}

export function getItems(): Item[] {
  return g.__items!;
}
