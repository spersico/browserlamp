// @refresh reload
import { Links, Meta, Outlet, Scripts } from "solid-start/components";

export default function Root({ Start }) {
  return (
    <Start>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <title>BrowserLamp</title>
          <Links />
        </head>
        <body>
          <Outlet />
          <Scripts />
        </body>
      </html>
    </Start>
  );
}
