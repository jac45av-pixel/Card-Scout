export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const { q, appid, minPrice, maxPrice } = req.query;
  if (!appid) { res.status(400).json({ error: 'No App ID' }); return; }

  const ebayUrl = `https://svcs.ebay.com/services/search/FindingService/v1`
    + `?OPERATION-NAME=findItemsAdvanced`
    + `&SERVICE-VERSION=1.0.0`
    + `&SECURITY-APPNAME=${encodeURIComponent(appid)}`
    + `&RESPONSE-DATA-FORMAT=JSON`
    + `&keywords=${encodeURIComponent(q || 'sports card')}`
    + `&outputSelector=PictureURLLarge&outputSelector=SellerInfo`
    + `&paginationInput.entriesPerPage=50`;

  try {
    const r = await fetch(ebayUrl);
    const data = await r.json();
    res.status(200).json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
