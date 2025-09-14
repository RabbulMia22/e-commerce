import dbConnect from "../../lib/db";
import Product from "../../models/productsModels";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const product = await Product.create(body);
    return new Response(
      JSON.stringify({ success: true, product }),
      { status: 201 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
