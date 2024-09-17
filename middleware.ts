import { auth } from "@/lib/auth/auth"
export { auth as middleware } from "@/lib/auth/auth";

export default auth((req:any) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

// export default function middleware() {
//   // Your code here
// }

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}