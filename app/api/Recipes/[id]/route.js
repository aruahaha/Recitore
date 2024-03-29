import Recipe from "@/app/(models)/recipes";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Recipe.findByIdAndDelete(id);
    return NextResponse.json({ message: "Recipe Removed" }, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return NextResponse.json(
      { message: "Error fetching recipe", error },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const recipe = await Recipe.findOne({ _id: id });
    return NextResponse.json({ recipe }, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return NextResponse.json(
      { message: "Error fetching recipe", error },
      { status: 500 }
    );
  }
}
