import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import MachineSchema from "@/utils/mongo/machineSchema";

export async function GET(req: NextRequest) {
  try {
    mongoose.connection.once("open", () => {
      console.log("still connected");
    });
    const all = await MachineSchema.find({});

    return NextResponse.json(all);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      error: "Mongo Error",
      message: error.message,
      code: error.code,
    });
  }
}
