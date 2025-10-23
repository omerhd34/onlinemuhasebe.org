import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const categories = await prisma.user.findMany();
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
