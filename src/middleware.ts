import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

// Base middleware logic
const baseMiddleware = (req: NextRequest) => {
  return NextResponse.next();
};

// Apply authentication to specific paths
export default withAuth(baseMiddleware, [
  "/dashboard",
  "/product",
  "/appointments",
]);
