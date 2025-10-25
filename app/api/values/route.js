import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get("isActive");

    const where = isActive === "true" ? { isActive: true } : {};

    const values = await prisma.value.findMany({
      where,
      orderBy: { order: "asc" },
    });

    return NextResponse.json(values, { status: 200 });
  } catch (error) {
    console.error("Values alınamadı:", error);
    return NextResponse.json(
      {
        error: "Values alınamadı",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newValue = await prisma.value.create({
      data: body,
    });
    return NextResponse.json(newValue, { status: 201 });
  } catch (error) {
    console.error("Value eklenemedi:", error);
    return NextResponse.json(
      {
        error: "Value eklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
