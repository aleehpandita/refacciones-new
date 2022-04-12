import { NextResponse } from "next/server";

export default function middleware(req) {
    const url = req.nextUrl.clone(); // clone the request url
    const { pathname } = req.nextUrl; // get pathname of request (e.g. /blog-slug)
    const hostname = req.headers.get("host"); // get hostname of request (e.g. demo.vercel.pub)
    //
    // // only for demo purposes – remove this if you want to use your root domain as the landing page
    // if (hostname === "vercel.pub" || hostname === "platforms.vercel.app") {
    //     return NextResponse.redirect("https://demo.vercel.pub");
    // }

    const currentHost =
        process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
            ? hostname
                .replace(`.refacciones.info`, "") // you have to replace ".vercel.pub" with your own domain if you deploy this example under your domain.
                .replace(`.servicio.refacciones.info`, "") // you can use wildcard subdomains on .vercel.app links that are associated with your Vercel team slug
            : // in this case, our team slug is "platformize", thus *.platformize.vercel.app works
            hostname.replace(`.localhost:3000`, "");

    if (pathname.startsWith(`/_sites`)) {
        return new Response(null, { status: 404 });
    }

    console.log({ hostname })
    console.log({currentHost})
    console.log({ pathname })

        if (!pathname.includes(".") && !pathname.startsWith("/api")) {
        if (currentHost == "app") {
            if (
                pathname === "/login" &&
                (req.cookies["next-auth.session-token"] ||
                    req.cookies["__Secure-next-auth.session-token"])
            ) {
                return NextResponse.redirect("/");
            }
            url.pathname = `/app${pathname}`;
            return NextResponse.rewrite(url);
        } else if (
            hostname === "localhost:3000" ||
            hostname === "refacciones.info"
        ) {
            url.pathname = `/`;
            return NextResponse.rewrite(url);
        }else if (
            hostname === "aire.localhost:3000" ||
            hostname === "aire.refacciones.info"
        ) {
            url.pathname = `/aire`;
            return NextResponse.rewrite(url);
        } else if (
            hostname === "pantallas.localhost:3000" ||
            hostname === "pantallas.refacciones.info"
        ) {
            url.pathname = `/pantallas`;
            return NextResponse.rewrite(url);
        }else if (
            hostname === "boilers.localhost:3000" ||
            hostname === "boilers.refacciones.info"
        ) {
            url.pathname = `/boilers`;
            return NextResponse.rewrite(url);
        }else if (
            hostname === "plomero.localhost:3000" ||
            hostname === "plomero.refacciones.info"
        ) {
            url.pathname = `/plomero`;
            return NextResponse.rewrite(url);
        }   else if (
            hostname === "secadoras.localhost:3000" ||
            hostname === "secadoras.refacciones.info"
        ) {
            url.pathname = `/secadoras`;
            return NextResponse.rewrite(url);
        } else if (
            hostname === "refrigeradores.localhost:3000" ||
            hostname === "refrigeradores.refacciones.info"
        ) {
            url.pathname = `/refrigeradores`;
            return NextResponse.rewrite(url);
        } else if (
            hostname === "bombas.localhost:3000" ||
            hostname === "bombas.refacciones.info"
        ) {
            url.pathname = `/bombas`;
            return NextResponse.rewrite(url);
        } else if (
            hostname === "electricista.localhost:3000" ||
            hostname === "electricista.refacciones.info"
        ) {
            url.pathname = `/electricista`;
            return NextResponse.rewrite(url);
        } else if (
            hostname === "herrero.localhost:3000" ||
            hostname === "herrero.refacciones.info"
        ) {
            url.pathname = `/herrero`;
            return NextResponse.rewrite(url);
        } else {
            url.pathname = `/`;
            return NextResponse.rewrite(url);
        }
    }
}
