import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const where = category ? { category } : {};

    const practicalInfos = await prisma.practicalInfo.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: practicalInfos }, { status: 200 });
  } catch (error) {
    console.error("Pratik bilgiler alınamadı:", error);
    return NextResponse.json(
      {
        error: "Pratik bilgiler alınamadı",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newPracticalInfo = await prisma.practicalInfo.create({
      data: body,
    });
    return NextResponse.json(newPracticalInfo, { status: 201 });
  } catch (error) {
    console.error("Pratik bilgi eklenemedi:", error);
    return NextResponse.json(
      {
        error: "Pratik bilgi eklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
