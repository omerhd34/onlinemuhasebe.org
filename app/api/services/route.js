import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get("isActive");

    const where = isActive === "true" ? { isActive: true } : {};

    const services = await prisma.service.findMany({
      where,
      orderBy: { order: "asc" },
    });

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error("Services alınamadı:", error);
    return NextResponse.json(
      {
        error: "Services alınamadı",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newService = await prisma.service.create({
      data: body,
    });
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error("Service eklenemedi:", error);
    return NextResponse.json(
      {
        error: "Service eklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
