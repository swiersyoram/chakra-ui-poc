export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function GET(request: Request) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://www.boredapi.com/api/activity").then((res) =>
    res.json(),
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Response.json(res);
}
