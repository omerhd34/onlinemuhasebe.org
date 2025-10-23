import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const practicalInfo = await prisma.practicalInfo.findUnique({
      where: { id },
    });

    if (!practicalInfo) {
      return NextResponse.json(
        { error: "Pratik bilgi bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json(practicalInfo, { status: 200 });
  } catch (error) {
    console.error("Pratik bilgi alınamadı:", error);
    return NextResponse.json(
      { error: "Pratik bilgi alınamadı" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    const updatedPracticalInfo = await prisma.practicalInfo.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedPracticalInfo, { status: 200 });
  } catch (error) {
    console.error("Pratik bilgi güncellenemedi:", error);
    return NextResponse.json(
      { error: "Pratik bilgi güncellenemedi" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.practicalInfo.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Pratik bilgi başarıyla silindi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Pratik bilgi silinemedi:", error);
    return NextResponse.json(
      { error: "Pratik bilgi silinemedi" },
      { status: 500 }
    );
  }
}
