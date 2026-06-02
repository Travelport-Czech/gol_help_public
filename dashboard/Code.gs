const SHEET_NAME = 'implementace'; // ← uprav název záložky

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Golibe Agency Dashboard')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getRows() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  const data = sheet.getDataRange().getValues();

  let headerRow = -1;
  for (let i = 0; i < Math.min(5, data.length); i++) {
    const row = data[i].map(v => String(v).toUpperCase().trim());
    if (row.includes('AGENCY') && row.includes('STATUS')) {
      headerRow = i;
      break;
    }
  }
  if (headerRow === -1) headerRow = 0;

  const headers = data[headerRow].map(v => String(v).toUpperCase().trim());
  const agencyIdx  = headers.indexOf('AGENCY');
  const countryIdx = headers.indexOf('COUNTRY');
  const statusIdx  = headers.indexOf('STATUS');
  const versionIdx = headers.indexOf('VERSION');

  const rows = [];
  for (let i = headerRow + 1; i < data.length; i++) {
    const row = data[i];
    const agency  = String(row[agencyIdx]  || '').trim();
    const country = String(row[countryIdx] || '').trim().replace(/\s+$/, '');
    const status  = String(row[statusIdx]  || '').trim().toLowerCase();
    const version = String(row[versionIdx] || '').trim().toLowerCase();
    if (!agency || agency === '0') continue;
    rows.push({ agency, country, status, version });
  }

  return {
    rows,
    lastUpdated: new Date().toLocaleString('cs-CZ')
  };
}
