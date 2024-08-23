//"use server";
import { NextResponse } from "next/server";

import ClientInfoModel from "@/utils/mongo/clientSchema";

import connectToMongo from "@/utils/mongo";

export async function GET() {
  try {
    //await connectToMongo();
    const client = await ClientInfoModel.find();

    return NextResponse.json(client);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error });
  }
}
