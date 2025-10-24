import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get("isActive");

    const where = isActive === "true" ? { isActive: true } : {};

    const shortcuts = await prisma.shortcut.findMany({
      where,
      orderBy: { order: "asc" },
    });

    return NextResponse.json(shortcuts, { status: 200 });
  } catch (error) {
    console.error("Kısayollar alınamadı:", error);
    return NextResponse.json(
      {
        error: "Kısayollar alınamadı",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newShortcut = await prisma.shortcut.create({
      data: body,
    });
    return NextResponse.json(newShortcut, { status: 201 });
  } catch (error) {
    console.error("Kısayol eklenemedi:", error);
    return NextResponse.json(
      {
        error: "Kısayol eklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
