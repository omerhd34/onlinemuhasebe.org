import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const timeline = await prisma.timeline.findMany({
      where: { isActive: true },
      orderBy: { year: "asc" },
    });

    return NextResponse.json(timeline, { status: 200 });
  } catch (error) {
    console.error("Timeline alınamadı:", error);
    return NextResponse.json(
      {
        error: "Timeline alınamadı",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const newTimeline = await prisma.timeline.create({
      data: body,
    });

    return NextResponse.json(newTimeline, { status: 201 });
  } catch (error) {
    console.error("Timeline eklenemedi:", error);
    return NextResponse.json(
      {
        error: "Timeline eklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
