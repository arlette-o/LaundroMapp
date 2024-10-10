import { NextRequest, NextResponse } from "next/server";

import MachineSchema from "@/utils/mongo/machineSchema";

export async function GET(req: NextRequest) {
  try {
    const all = await MachineSchema.find({});
    console.log(all);
    return NextResponse.json(all);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error });
  }
}
