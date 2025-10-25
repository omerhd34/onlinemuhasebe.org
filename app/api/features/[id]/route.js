import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const feature = await prisma.feature.findUnique({
      where: { id },
    });

    if (!feature) {
      return NextResponse.json(
        { error: "Feature bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json(feature, { status: 200 });
  } catch (error) {
    console.error("Feature alınamadı:", error);
    return NextResponse.json(
      {
        error: "Feature alınamadı",
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

    const updatedFeature = await prisma.feature.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedFeature, { status: 200 });
  } catch (error) {
    console.error("Feature güncellenemedi:", error);
    return NextResponse.json(
      {
        error: "Feature güncellenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await prisma.feature.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Feature başarıyla silindi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Feature silinemedi:", error);
    return NextResponse.json(
      {
        error: "Feature silinemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
