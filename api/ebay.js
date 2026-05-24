export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || 'sports card';
  const appid = searchParams.get('appid');

  if (!appid) {
    return new Response(JSON.stringify({ error: 'No App ID provided' }), {
      status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const ebayUrl = `https://svcs.ebay.com/services/search/FindingService/v1`
    + `?OPERATION-NAME=findItemsAdvanced`
    + `&SERVICE-VERSION=1.0.0`
    + `&SECURITY-APPNAME=${encodeURIComponent(appid)}`
    + `&RESPONSE-DATA-FORMAT=JSON`
    + `&keywords=${encodeURIComponent(q)}`
    + `&outputSelector=PictureURLLarge&outputSelector=SellerInfo`
    + `&paginationInput.entriesPerPage=50`;

  try {
    const r = await fetch(ebayUrl);
    const data = await r.json();
    return new Response(JSON.stringify(data), {
      status: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch(e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}

export const config = { runtime: 'edge' };
