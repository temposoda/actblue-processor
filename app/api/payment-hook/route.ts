import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";

function decodeAuthHeader(encodedValue: string = "") {
  const [Basic = "", header = ""] = encodedValue.split(" ");
  return Buffer.from(header, "base64").toString();
}

function validateAuth(decodedAuthString: string) {
  const [username = "", password = ""] = decodedAuthString.split(":");
  return (
    username === process.env.ActBlueUserName &&
    password === process.env.ActBluePassword
  );
}

export async function POST(request: NextRequest) {
  const auth = headers().get("authorization") ?? "";
  const decoded = decodeAuthHeader(auth);

  if (!validateAuth(decoded)) {
    return NextResponse.json({}, { status: 401 });
  }

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
