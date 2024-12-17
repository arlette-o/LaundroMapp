import { NextRequest, NextResponse } from "next/server";

import MachineSchema from "@/utils/mongo/machineSchema";

export async function GET(req: NextRequest) {
  try {
    const all = await MachineSchema.find({}); /* .sort({
      ID: 1,
    }); */

    return NextResponse.json(all);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
