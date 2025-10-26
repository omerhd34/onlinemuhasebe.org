import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { error: "Arama terimi en az 2 karakter olmalıdır" },
        { status: 400 }
      );
    }

    const searchTerm = query.trim().toLocaleLowerCase("tr");

    const matchesSearch = (text) => {
      if (!text) return false;
      return text.toLocaleLowerCase("tr").includes(searchTerm);
    };

    const [
      practicalInfos,
      services,
      features,
      values,
      shortcuts,
      pageContents,
      timeline,
    ] = await Promise.all([
      prisma.practicalInfo.findMany(),
      prisma.service.findMany({ where: { isActive: true } }),
      prisma.feature.findMany({ where: { isActive: true } }),
      prisma.value.findMany({ where: { isActive: true } }),
      prisma.shortcut.findMany({ where: { isActive: true } }),
      prisma.pageContent.findMany(),
      prisma.timeline.findMany({ where: { isActive: true } }),
    ]);

    const filteredPracticalInfos = practicalInfos.filter(
      (item) =>
        matchesSearch(item.title) ||
        matchesSearch(item.description) ||
        matchesSearch(item.category)
    );

    const filteredServices = services.filter(
      (item) => matchesSearch(item.title) || matchesSearch(item.description)
    );

    const filteredFeatures = features.filter(
      (item) => matchesSearch(item.title) || matchesSearch(item.description)
    );

    const filteredValues = values.filter(
      (item) => matchesSearch(item.title) || matchesSearch(item.description)
    );

    const filteredShortcuts = shortcuts.filter(
      (item) => matchesSearch(item.title) || matchesSearch(item.description)
    );

    const filteredPageContents = pageContents.filter(
      (item) => matchesSearch(item.content) || matchesSearch(item.key)
    );

    const filteredTimeline = timeline.filter(
      (item) => matchesSearch(item.title) || matchesSearch(item.description)
    );

    const results = [
      ...filteredPracticalInfos.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description.substring(0, 150) + "...",
        type: "Pratik Bilgi",
        url: "/pratik_bilgiler",
        section: `pratik-bilgi-${item.id}`,
      })),
      ...filteredServices.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        type: "Hizmet",
        url: "/",
        section: "services",
      })),
      ...filteredFeatures.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        type: "Özellik",
        url: "/",
        section: "features",
      })),
      ...filteredValues.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        type: "Değer",
        url: "/hakkimizda",
        section: "values",
      })),
      ...filteredShortcuts.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        type: "Kısayol",
        url: "/kisayol",
        section: `kisayol-${item.id}`,
      })),
      ...filteredTimeline.map((item) => ({
        id: item.id,
        title: `${item.year} - ${item.title}`,
        description: item.description,
        type: "Tarihçe",
        url: "/hakkimizda",
        section: `timeline-${item.id}`,
      })),
      ...filteredPageContents.map((item) => ({
        id: item.id,
        title: `${item.page} - ${item.section}`,
        description: item.content.substring(0, 150) + "...",
        type: "Sayfa İçeriği",
        url: item.page === "home" ? "/" : `/${item.page}`,
        section: item.section,
      })),
    ];

    return NextResponse.json(
      {
        query: searchTerm,
        count: results.length,
        results: results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Arama hatası:", error);
    return NextResponse.json(
      {
        error: "Arama sırasında bir hata oluştu",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
