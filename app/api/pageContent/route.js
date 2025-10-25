import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    const section = searchParams.get("section");

    let where = {};
    if (page) where.page = page;
    if (section) where.section = section;

    const contents = await prisma.pageContent.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(contents, { status: 200 });
  } catch (error) {
    console.error("Page contents alınamadı:", error);
    return NextResponse.json(
      {
        error: "Page contents alınamadı",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newContent = await prisma.pageContent.create({
      data: body,
    });
    return NextResponse.json(newContent, { status: 201 });
  } catch (error) {
    console.error("Page content eklenemedi:", error);
    return NextResponse.json(
      {
        error: "Page content eklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { page, section, key, content } = body;

    const updatedContent = await prisma.pageContent.upsert({
      where: {
        page_section_key: {
          page,
          section,
          key,
        },
      },
      update: { content },
      create: { page, section, key, content },
    });

    return NextResponse.json(updatedContent, { status: 200 });
  } catch (error) {
    console.error("Page content güncellenemedi:", error);
    return NextResponse.json(
      {
        error: "Page content güncellenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
