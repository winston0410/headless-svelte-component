import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    bundle: false,
    outfile: "./dist/index.js",
  })
  .catch(() => process.exit(1));
