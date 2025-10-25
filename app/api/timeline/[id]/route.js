import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const timeline = await prisma.timeline.findUnique({
      where: { id },
    });

    if (!timeline) {
      return NextResponse.json(
        { error: "Timeline kaydı bulunamadı" },
        { status: 404 }
      );
    }

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

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updatedTimeline = await prisma.timeline.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedTimeline, { status: 200 });
  } catch (error) {
    console.error("Timeline güncellenemedi:", error);
    return NextResponse.json(
      {
        error: "Timeline güncellenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    await prisma.timeline.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Timeline başarıyla silindi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Timeline silinemedi:", error);
    return NextResponse.json(
      {
        error: "Timeline silinemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
