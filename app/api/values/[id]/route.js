import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const value = await prisma.value.findUnique({
      where: { id },
    });

    if (!value) {
      return NextResponse.json({ error: "Value bulunamadı" }, { status: 404 });
    }

    return NextResponse.json(value, { status: 200 });
  } catch (error) {
    console.error("Value alınamadı:", error);
    return NextResponse.json(
      {
        error: "Value alınamadı",
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

    const updatedValue = await prisma.value.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedValue, { status: 200 });
  } catch (error) {
    console.error("Value güncellenemedi:", error);
    return NextResponse.json(
      {
        error: "Value güncellenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.value.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Value başarıyla silindi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Value silinemedi:", error);
    return NextResponse.json(
      {
        error: "Value silinemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
