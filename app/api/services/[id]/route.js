import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      return NextResponse.json(
        { error: "Service bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    console.error("Service alınamadı:", error);
    return NextResponse.json(
      {
        error: "Service alınamadı",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    const updatedService = await prisma.service.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedService, { status: 200 });
  } catch (error) {
    console.error("Service güncellenemedi:", error);
    return NextResponse.json(
      {
        error: "Service güncellenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.service.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Service başarıyla silindi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Service silinemedi:", error);
    return NextResponse.json(
      {
        error: "Service silinemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
