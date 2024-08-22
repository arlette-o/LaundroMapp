import { NextResponse } from "next/server";

import Client from "@/utils/mongo/clientSchema";

export async function GET() {
  try {
    const clients = await Client.find({});
    return NextResponse.json(clients);
  } catch (error) {
    console.error(error);
    return NextResponse.json("error in GET()");
  }
}
