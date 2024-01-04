import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";

function decodeAuthHeader(encodedValue: string = "") {
  const [Basic = "", header = ""] = encodedValue.split(" ");
  return Buffer.from(header, "base64").toString();
}

export async function POST(request: NextRequest) {
  const auth = headers().get("authorization") ?? "";
  const decoded = decodeAuthHeader(auth);
  const data = await request.json();
  //   console.log(data);
  return NextResponse.json(
    {
      body: data,
    },
    {
      status: 200,
    },
  );
}
