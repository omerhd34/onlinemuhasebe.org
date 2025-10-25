import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get("isActive");

    const where = isActive === "true" ? { isActive: true } : {};

    const features = await prisma.feature.findMany({
      where,
      orderBy: { order: "asc" },
    });

    return NextResponse.json(features, { status: 200 });
  } catch (error) {
    console.error("Features alınamadı:", error);
    return NextResponse.json(
      {
        error: "Features alınamadı",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newFeature = await prisma.feature.create({
      data: body,
    });
    return NextResponse.json(newFeature, { status: 201 });
  } catch (error) {
    console.error("Feature eklenemedi:", error);
    return NextResponse.json(
      {
        error: "Feature eklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
