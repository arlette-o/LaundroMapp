import { NextRequest, NextResponse } from "next/server";

import ClientInfoModel from "@/utils/mongo/clientSchema";
//import connectToMongo from "@/utils/mongo";

export async function GET(req: NextRequest) {
  try {
    const query = Object.fromEntries(req.nextUrl.searchParams.entries());
    const { fname, lname, email, phone } = query;
    const client = await ClientInfoModel.find({ fname, lname, email, phone });

    return NextResponse.json(client);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error });
  }
}

export async function POST(req: NextRequest) {
  if (!req.body) return;
  try {
    const body = await req.json();
    const client = new ClientInfoModel({
      fname: body.fname,
      lname: body.lname,
      email: body.email,
      phone: body.phone,
      service: body.service,
    });

    await client.save();

    return NextResponse.json({ message: "successfully console logged" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}

/* export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToMongo();
    const client = await ClientInfoModel.find();

    //return NextResponse.json(client);
    return res.status(200).json(client);
  } catch (error: any) {
    console.error(error);
    //return NextResponse.json({ error: error });
    return res.status(400).json({ error: error });
  }
}
 */
