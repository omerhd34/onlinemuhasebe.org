import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const shortcut = await prisma.shortcut.findUnique({
      where: { id },
    });

    if (!shortcut) {
      return NextResponse.json(
        { error: "Kısayol bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json(shortcut, { status: 200 });
  } catch (error) {
    console.error("Kısayol alınamadı:", error);
    return NextResponse.json(
      {
        error: "Kısayol alınamadı",
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

    const updatedShortcut = await prisma.shortcut.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedShortcut, { status: 200 });
  } catch (error) {
    console.error("Kısayol güncellenemedi:", error);
    return NextResponse.json(
      {
        error: "Kısayol güncellenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.shortcut.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Kısayol başarıyla silindi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Kısayol silinemedi:", error);
    return NextResponse.json(
      {
        error: "Kısayol silinemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
