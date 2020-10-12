/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-const */

// This middleware is global
// removes htm(l?) extension from routes
export default function (context) {
  let { req, redirect, next } = context;
  if (!req) {
    return;
  }
  let url = context.req.originalUrl;
  if (/([^(?:.htm(l?))?]+)(\.htm(l?))/i.test(url)) {
    let newUrl = url.replace(/\.htm(l?)/i, "");
    redirect(newUrl);
  }
}
