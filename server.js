const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp"
};

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendJson(res, 404, { message: "File not found." });
        return;
      }

      sendJson(res, 500, { message: "Failed to read file." });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": Buffer.byteLength(content)
    });
    res.end(content);
  });
}

function resolveRequestPath(urlPath) {
  if (urlPath === "/" || urlPath === "") {
    return path.join(ROOT, "pages", "index.html");
  }

  if (urlPath === "/ui-showcase") {
    return path.join(ROOT, "pages", "ui-showcase.html");
  }

  if (urlPath === "/ui-showcase.html") {
    return path.join(ROOT, "pages", "ui-showcase.html");
  }

  if (urlPath === "/api/health") {
    return null;
  }

  const normalized = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  return path.join(ROOT, normalized);
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const filePath = resolveRequestPath(requestUrl.pathname);

  if (requestUrl.pathname === "/api/health") {
    sendJson(res, 200, { status: "ok", app: "MyPortafolio" });
    return;
  }

  if (!filePath.startsWith(ROOT)) {
    sendJson(res, 403, { message: "Forbidden." });
    return;
  }

  sendFile(res, filePath);
});

server.listen(PORT, HOST, () => {
  console.log(`MyPortafolio running at http://${HOST}:${PORT}`);
});
