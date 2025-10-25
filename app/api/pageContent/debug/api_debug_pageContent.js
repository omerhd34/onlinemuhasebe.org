import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const allContents = await prisma.pageContent.findMany({
      orderBy: { createdAt: "desc" },
    });

    const groupedByPage = allContents.reduce((acc, content) => {
      if (!acc[content.page]) acc[content.page] = [];
      acc[content.page].push(content);
      return acc;
    }, {});

    Object.keys(groupedByPage).forEach((page) => {
      console.log(`${page}: ${groupedByPage[page].length} içerik`);
    });

    const testQueries = [
      { page: "home", section: "hero", key: "subtitle" },
      { page: "home", section: "services", key: "description" },
      { page: "about", section: "hero", key: "description" },
    ];

    const testResults = {};
    for (const query of testQueries) {
      const result = await prisma.pageContent.findFirst({
        where: query,
      });
      testResults[`${query.page}-${query.section}-${query.key}`] = result;
    }

    return NextResponse.json(
      {
        success: true,
        totalRecords: allContents.length,
        allContents: allContents,
        groupedByPage: Object.keys(groupedByPage).map((page) => ({
          page,
          count: groupedByPage[page].length,
          contents: groupedByPage[page],
        })),
        testResults: testResults,
        message:
          "Debug bilgileri başarıyla alındı. Detaylar için sunucu loglarına bakın.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("=== Debug Hatası ===");
    console.error("Error:", error);
    console.error("Stack:", error.stack);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: error.stack,
      },
      { status: 500 }
    );
  }
}
