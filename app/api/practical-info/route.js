import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");

    const skip = (page - 1) * limit;
    const where = category ? { category } : {};

    const [practicalInfos, total] = await Promise.all([
      prisma.practicalInfo.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.practicalInfo.count({ where }),
    ]);

    return NextResponse.json(
      {
        data: practicalInfos,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
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
