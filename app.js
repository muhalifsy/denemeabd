const STORAGE_KEY = "northstar-portfolio-state-v2";

const seedTransactions = [
  { symbol: "TLT", date: "2023-11-02", pcs: 58, price: 86.5, amount: 5017, fee: 1.5, total: 5018.5 },
  { symbol: "TSLA", date: "2023-11-22", pcs: 43, price: 232, amount: 9976, fee: 1.5, total: 9977.5 },
  { symbol: "NVDA", date: "2023-11-24", pcs: 20, price: 483, amount: 9660, fee: 1.5, total: 9661.5, note: "a" },
  { symbol: "GLD", date: "2023-12-08", pcs: 26, price: 186, amount: 4836, fee: 1.5, total: 4837.5 },
  { symbol: "NVDA", date: "2024-02-16", pcs: -13, price: 744, amount: -9672, fee: 1.5, total: -9670.5, note: "a" },
  { symbol: "TSLA", date: "2024-06-05", pcs: 57, price: 174, amount: 9918, fee: 1.5, total: 9919.5 },
  { symbol: "QQQ", date: "2024-08-16", pcs: 10, price: 473, amount: 4730, fee: 1.5, total: 4731.5 },
  { symbol: "MSTR", date: "2024-09-05", pcs: 41, price: 121.9, amount: 4997.9, fee: 1.5, total: 4999.4 },
  { symbol: "SOFI", date: "2024-10-02", pcs: 657, price: 7.6, amount: 4993.2, fee: 1.5, total: 4994.7 },
  { symbol: "AMZN", date: "2024-10-23", pcs: 26, price: 188, amount: 4888, fee: 1.5, total: 4889.5 },
  { symbol: "AMD", date: "2024-12-09", pcs: 37, price: 132, amount: 4884, fee: 1.5, total: 4885.5 },
  { symbol: "SEZL", date: "2025-01-17", pcs: 126, price: 38.33, amount: 4830, fee: 1.5, total: 4831.5, note: "b" },
  { symbol: "CRDO", date: "2025-01-27", pcs: 19, price: 53, amount: 1007, fee: 1.5, total: 1008.5 },
  { symbol: "SEZL", date: "2025-05-22", pcs: -56, price: 103, amount: -5768, fee: 1.5, total: -5766.5, note: "b" },
  { symbol: "NBIS", date: "2025-05-22", pcs: 133, price: 37.5, amount: 4987.5, fee: 1.5, total: 4989 },
  { symbol: "HIMS", date: "2025-06-23", pcs: 114, price: 43.5, amount: 4959, fee: 1.5, total: 4960.5 },
  { symbol: "OSCR", date: "2025-07-11", pcs: 175, price: 14.28, amount: 2499, fee: 1.5, total: 2500.5 },
  { symbol: "OSCR", date: "2025-07-18", pcs: 178, price: 14, amount: 2492, fee: 1.5, total: 2493.5 },
  { symbol: "APP", date: "2025-08-14", pcs: 11, price: 429, amount: 4719, fee: 1.5, total: 4720.5 },
  { symbol: "RKLB", date: "2025-08-18", pcs: 100, price: 45.48, amount: 4548, fee: 1.5, total: 4549.5 },
  { symbol: "SMCI", date: "2025-09-12", pcs: 111, price: 45.03, amount: 4998.33, fee: 1.5, total: 4999.83, note: "d" },
  { symbol: "RBRK", date: "2025-09-15", pcs: 66, price: 75.67, amount: 4994.22, fee: 1.5, total: 4995.72 },
  { symbol: "SLNH", date: "2025-09-25", pcs: 356, price: 2.8, amount: 996.8, fee: 1.5, total: 998.3 },
  { symbol: "RDDT", date: "2025-10-02", pcs: 25, price: 199, amount: 4975, fee: 1.5, total: 4976.5 },
  { symbol: "CCCX", date: "2025-10-06", pcs: 66, price: 14.98, amount: 988.68, fee: 1.5, total: 990.18 },
  { symbol: "IMSR-HOND", date: "2025-10-06", pcs: 53, price: 18.69, amount: 990.57, fee: 1.5, total: 992.07, note: "e" },
  { symbol: "CRWV", date: "2025-10-09", pcs: 26, price: 139, amount: 3614, fee: 1.5, total: 3615.5, note: "c" },
  { symbol: "IOT", date: "2025-10-09", pcs: 24, price: 40, amount: 960, fee: 1.5, total: 961.5 },
  { symbol: "MSTR", date: "2025-10-31", pcs: 79, price: 272.59, amount: 21534.61, fee: 1.5, total: 21536.11 },
  { symbol: "AXON", date: "2025-11-07", pcs: 47, price: 606.2, amount: 28491.4, fee: 1.5, total: 28492.9 },
  { symbol: "CRWV", date: "2025-12-22", pcs: -26, price: 84.1, amount: -2186.6, fee: 1.5, total: -2185.1, note: "c" },
  { symbol: "CRWV", date: "2025-12-23", pcs: 26, price: 83.4, amount: 2168.4, fee: 1.5, total: 2169.9, note: "c" },
  { symbol: "SMCI", date: "2025-12-29", pcs: -111, price: 30.31, amount: -3364.41, fee: 1.5, total: -3362.91, note: "d" },
  { symbol: "SMCI", date: "2025-12-29", pcs: 112, price: 30.02, amount: 3362.24, fee: 1.5, total: 3363.74, note: "d" },
  { symbol: "IMSR-HOND", date: "2025-12-30", pcs: -53, price: 6.02, amount: -319.06, fee: 1.5, total: -317.56, note: "e" },
  { symbol: "HOOD", date: "2026-02-04", pcs: 12, price: 83.21, amount: 998.52, fee: 1.5, total: 1000.02 },
  { symbol: "EOSE", date: "2026-02-13", pcs: 70, price: 10.8, amount: 756, fee: 1.5, total: 757.5 },
  { symbol: "IMSR-HOND", date: "2026-03-30", pcs: 53, price: 5.95, amount: 315.35, fee: 1.5, total: 316.85 },
  { symbol: "IREN", date: "2026-03-31", pcs: 156, price: 32, amount: 4992, fee: 1.5, total: 4993.5 },
];

const elements = {
  seedImageDataButton: document.getElementById("seed-image-data-button"),
  resetDataButton: document.getElementById("reset-data-button"),
  apiKeyInput: document.getElementById("api-key-input"),
  taxRateInput: document.getElementById("tax-rate-input"),
  refreshPricesButton: document.getElementById("refresh-prices-button"),
  statusMessage: document.getElementById("status-message"),
  stats: document.getElementById("stats"),
  positionsBody: document.getElementById("positions-body"),
  ledgerList: document.getElementById("ledger-list"),
  transactionCountPill: document.getElementById("transaction-count-pill"),
  transactionForm: document.getElementById("transaction-form"),
  symbolInput: document.getElementById("symbol-input"),
  sideInput: document.getElementById("side-input"),
  dateInput: document.getElementById("date-input"),
  sharesInput: document.getElementById("shares-input"),
  priceInput: document.getElementById("price-input"),
  feeInput: document.getElementById("fee-input"),
  amountInput: document.getElementById("amount-input"),
  noteInput: document.getElementById("note-input"),
  autofillButton: document.getElementById("autofill-button"),
};

const state = {
  transactions: [],
  positions: [],
  pricesBySymbol: new Map(),
  historicalPriceCache: new Map(),
};

hydrateState();
bindEvents();
rebuildPositions();

function bindEvents() {
  elements.seedImageDataButton.addEventListener("click", () => {
    state.transactions = structuredClone(seedTransactions);
    persistState();
    rebuildPositions();
    setStatus("Gorseldeki veriler baslangic portfoyu olarak yuklendi.");
  });

  elements.resetDataButton.addEventListener("click", () => {
    state.transactions = [];
    state.pricesBySymbol = new Map();
    persistState();
    rebuildPositions();
    setStatus("Tum yerel islem kayitlari temizlendi.");
  });

  elements.transactionForm.addEventListener("submit", handleTransactionSubmit);
  elements.autofillButton.addEventListener("click", autofillTransactionFields);
  elements.refreshPricesButton.addEventListener("click", refreshPrices);
  elements.apiKeyInput.addEventListener("input", persistState);
  elements.taxRateInput.addEventListener("input", () => {
    persistState();
    rebuildPositions();
  });
  elements.priceInput.addEventListener("input", syncAmountField);
  elements.sharesInput.addEventListener("input", syncAmountField);
}

function hydrateState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    state.transactions = Array.isArray(parsed.transactions) ? parsed.transactions : [];
    elements.apiKeyInput.value = parsed.apiKey ?? "";
    elements.taxRateInput.value = parsed.taxRate ?? "0";
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function persistState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      transactions: state.transactions,
      apiKey: elements.apiKeyInput.value.trim(),
      taxRate: elements.taxRateInput.value.trim(),
    }),
  );
}

async function handleTransactionSubmit(event) {
  event.preventDefault();

  const symbol = elements.symbolInput.value.trim().toUpperCase();
  const side = elements.sideInput.value;
  const date = elements.dateInput.value;
  const shares = Number(elements.sharesInput.value);
  const price = Number(elements.priceInput.value);
  const fee = Number(elements.feeInput.value || 0);
  const manualAmount = Number(elements.amountInput.value);
  const note = elements.noteInput.value.trim();

  if (!symbol || !date || !Number.isFinite(shares) || shares <= 0) {
    setStatus("Sembol, tarih ve adet alanlarini doldurman gerekiyor.", true);
    return;
  }

  if (!Number.isFinite(price) || price <= 0) {
    setStatus("Fiyat bilgisi gerekli. Istersen otomatik doldur butonunu kullan.", true);
    return;
  }

  const signedShares = side === "sell" ? -Math.abs(shares) : Math.abs(shares);
  const computedAmount = round2(Math.abs(signedShares) * price);
  const amount = Number.isFinite(manualAmount) && manualAmount > 0 ? manualAmount : computedAmount;
  const signedAmount = side === "sell" ? -Math.abs(amount) : Math.abs(amount);
  const total = round2(signedAmount + fee);

  state.transactions.unshift({
    symbol,
    date,
    pcs: signedShares,
    price,
    amount: signedAmount,
    fee,
    total,
    note,
  });

  persistState();
  rebuildPositions();
  elements.transactionForm.reset();
  elements.feeInput.value = "1.5";
  setStatus(`${symbol} icin yeni islem eklendi.`);
}

async function autofillTransactionFields() {
  const apiKey = elements.apiKeyInput.value.trim();
  const symbol = elements.symbolInput.value.trim().toUpperCase();
  const date = elements.dateInput.value;

  if (!symbol || !date) {
    setStatus("Otomatik doldurma icin once sembol ve tarih gir.", true);
    return;
  }

  if (!apiKey) {
    setStatus("Tarihsel fiyat almak icin Twelve Data API key gerekli.", true);
    return;
  }

  try {
    setStatus(`${symbol} icin ${formatDate(date)} tarihli fiyat getiriliyor...`);
    elements.autofillButton.disabled = true;
    const price = await fetchHistoricalClose(symbol, date, apiKey);
    elements.priceInput.value = String(price);
    syncAmountField();
    setStatus(`${symbol} icin ${formatDate(date)} fiyatı dolduruldu. Istersen elle duzeltebilirsin.`);
  } catch (error) {
    setStatus(error.message || "Tarihsel fiyat alinamadi.", true);
  } finally {
    elements.autofillButton.disabled = false;
  }
}

async function refreshPrices() {
  const apiKey = elements.apiKeyInput.value.trim();
  const symbols = [...new Set(state.positions.map((position) => position.symbol))];

  if (!symbols.length) {
    setStatus("Once islem ekleyelim, sonra fiyat guncelleyelim.", true);
    return;
  }

  if (!apiKey) {
    setStatus("Guncel fiyat icin Twelve Data API key gerekli.", true);
    return;
  }

  try {
    setStatus("Guncel fiyatlar cekiliyor...");
    elements.refreshPricesButton.disabled = true;

    const results = await Promise.all(
      symbols.map(async (symbol) => {
        const url = new URL("https://api.twelvedata.com/quote");
        url.searchParams.set("symbol", symbol);
        url.searchParams.set("interval", "1day");
        url.searchParams.set("apikey", apiKey);

        const response = await fetch(url.toString());
        if (!response.ok) {
          throw new Error(`${symbol} icin servis cevap vermedi.`);
        }

        const payload = await response.json();
        if (payload.status === "error") {
          throw new Error(`${symbol}: ${payload.message || "fiyat alinamadi"}`);
        }

        const rawPrice = payload.close ?? payload.price ?? payload.previous_close;
        const price = Number(rawPrice);
        if (!Number.isFinite(price)) {
          throw new Error(`${symbol} icin fiyat okunamadi.`);
        }

        return [symbol, price];
      }),
    );

    state.pricesBySymbol = new Map(results);
    rebuildPositions();
    setStatus(`Guncel fiyatlar alindi. ${results.length} sembol guncellendi.`);
  } catch (error) {
    setStatus(error.message || "Guncel fiyatlar alinamadi.", true);
  } finally {
    elements.refreshPricesButton.disabled = false;
  }
}

async function fetchHistoricalClose(symbol, date, apiKey) {
  const cacheKey = `${symbol}:${date}`;
  if (state.historicalPriceCache.has(cacheKey)) {
    return state.historicalPriceCache.get(cacheKey);
  }

  const url = new URL("https://api.twelvedata.com/time_series");
  url.searchParams.set("symbol", symbol);
  url.searchParams.set("interval", "1day");
  url.searchParams.set("date", date);
  url.searchParams.set("outputsize", "1");
  url.searchParams.set("apikey", apiKey);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`${symbol} icin tarihsel veri servisi cevap vermedi.`);
  }

  const payload = await response.json();
  if (payload.status === "error") {
    throw new Error(`${symbol}: ${payload.message || "tarihsel veri bulunamadi"}`);
  }

  const series = Array.isArray(payload.values) ? payload.values : [];
  const record = series[0];
  const raw = record?.close ?? record?.price;
  const price = Number(raw);

  if (!Number.isFinite(price)) {
    throw new Error(`${symbol} icin ${formatDate(date)} tarihli kapanis fiyati bulunamadi.`);
  }

  state.historicalPriceCache.set(cacheKey, price);
  return price;
}

function rebuildPositions() {
  state.positions = buildPositions(state.transactions, Number(elements.taxRateInput.value || 0));
  renderStats();
  renderPositions();
  renderLedger();
}

function buildPositions(rows, taxRatePercent) {
  const grouped = new Map();

  for (const row of rows) {
    if (!grouped.has(row.symbol)) {
      grouped.set(row.symbol, []);
    }
    grouped.get(row.symbol).push(row);
  }

  const positions = [];

  for (const [symbol, symbolRows] of grouped.entries()) {
    const sortedRows = [...symbolRows].sort((a, b) => parseDate(a.date) - parseDate(b.date));
    let remainingShares = 0;
    let remainingCost = 0;
    let totalFees = 0;
    let estimatedSellFee = 0;

    for (const row of sortedRows) {
      const fee = Math.abs(Number(row.fee) || 0);
      totalFees += fee;
      estimatedSellFee = Math.max(estimatedSellFee, fee);

      if (row.pcs > 0) {
        remainingShares += row.pcs;
        remainingCost += row.pcs * row.price + fee;
        continue;
      }

      if (row.pcs < 0 && remainingShares > 0) {
        const sellShares = Math.min(Math.abs(row.pcs), remainingShares);
        const averageCost = remainingCost / remainingShares;
        const costRemoved = averageCost * sellShares;
        remainingShares -= sellShares;
        remainingCost -= costRemoved;

        if (remainingShares <= 0.0000001) {
          remainingShares = 0;
          remainingCost = 0;
        }
      }
    }

    if (remainingShares <= 0) {
      continue;
    }

    const averageCost = remainingCost / remainingShares;
    const latestPrice = state.pricesBySymbol.get(symbol) ?? null;
    const marketValue = latestPrice != null ? remainingShares * latestPrice : null;
    const unrealizedPnl = latestPrice != null ? marketValue - remainingCost : null;
    const taxRate = taxRatePercent / 100;
    const perShareTax = latestPrice != null ? Math.max(latestPrice - averageCost, 0) * taxRate : null;
    const effectiveSellPrice = latestPrice != null ? latestPrice - perShareTax : null;
    const breakEvenShares =
      effectiveSellPrice && effectiveSellPrice > 0
        ? Math.min(remainingShares, Math.ceil((remainingCost + estimatedSellFee) / effectiveSellPrice))
        : null;

    positions.push({
      symbol,
      remainingShares,
      averageCost,
      remainingCost,
      totalFees,
      latestPrice,
      marketValue,
      unrealizedPnl,
      breakEvenShares,
      freeSharesLeft: breakEvenShares != null ? Math.max(remainingShares - breakEvenShares, 0) : null,
    });
  }

  return positions.sort((a, b) => b.remainingCost - a.remainingCost);
}

function renderStats() {
  const totalCost = state.positions.reduce((sum, item) => sum + item.remainingCost, 0);
  const totalShares = state.positions.reduce((sum, item) => sum + item.remainingShares, 0);
  const totalValue = state.positions.reduce((sum, item) => sum + (item.marketValue ?? 0), 0);
  const totalPnL = state.positions.reduce((sum, item) => sum + (item.unrealizedPnl ?? 0), 0);

  const cards = [
    ["Aktif Pozisyon", String(state.positions.length)],
    ["Toplam İşlem", String(state.transactions.length)],
    ["Toplam Adet", formatNumber(totalShares)],
    ["Açık Pozisyon Maliyeti", formatCurrency(totalCost)],
    ["Güncel Değer", totalValue ? formatCurrency(totalValue) : "-"],
    ["Gerçekleşmemiş K/Z", totalValue ? formatCurrency(totalPnL) : "-"],
    ["En Büyük Pozisyon", state.positions[0]?.symbol ?? "-"],
    ["Takip Edilen Sembol", String(new Set(state.transactions.map((item) => item.symbol)).size)],
  ];

  elements.stats.innerHTML = cards
    .map(
      ([label, value]) => `
        <article>
          <span>${label}</span>
          <strong>${value}</strong>
        </article>
      `,
    )
    .join("");
}

function renderPositions() {
  if (!state.positions.length) {
    elements.positionsBody.innerHTML = `
      <tr>
        <td colspan="10" class="empty-state">Henüz veri yok.</td>
      </tr>
    `;
    return;
  }

  elements.positionsBody.innerHTML = state.positions
    .map((position) => {
      const pnlClass =
        position.unrealizedPnl == null ? "" : position.unrealizedPnl >= 0 ? "value-positive" : "value-negative";

      return `
        <tr>
          <td>${position.symbol}</td>
          <td>${formatNumber(position.remainingShares)}</td>
          <td>${formatCurrency(position.averageCost)}</td>
          <td>${formatCurrency(position.remainingCost)}</td>
          <td>${formatCurrency(position.totalFees)}</td>
          <td>${position.latestPrice != null ? formatCurrency(position.latestPrice) : "-"}</td>
          <td>${position.marketValue != null ? formatCurrency(position.marketValue) : "-"}</td>
          <td class="${pnlClass}">${position.unrealizedPnl != null ? formatCurrency(position.unrealizedPnl) : "-"}</td>
          <td>${position.breakEvenShares != null ? formatNumber(position.breakEvenShares) : "-"}</td>
          <td>${position.freeSharesLeft != null ? formatNumber(position.freeSharesLeft) : "-"}</td>
        </tr>
      `;
    })
    .join("");
}

function renderLedger() {
  elements.transactionCountPill.textContent = `${state.transactions.length} işlem`;

  if (!state.transactions.length) {
    elements.ledgerList.innerHTML = `<div class="empty-card">Henüz işlem kaydı yok.</div>`;
    return;
  }

  const sorted = [...state.transactions].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  elements.ledgerList.innerHTML = sorted
    .map((row) => {
      const side = row.pcs < 0 ? "sell" : "buy";
      return `
        <article class="ledger-item">
          <div class="ledger-top">
            <div>
              <div class="ledger-symbol">${row.symbol}</div>
              <div class="hint">${formatDate(row.date)}</div>
            </div>
            <span class="badge ${side}">${side === "buy" ? "Alış" : "Satış"}</span>
          </div>
          <div class="ledger-meta">
            <div class="meta-cell">
              <span>Adet</span>
              <strong>${formatNumber(Math.abs(row.pcs))}</strong>
            </div>
            <div class="meta-cell">
              <span>Fiyat</span>
              <strong>${formatCurrency(row.price)}</strong>
            </div>
            <div class="meta-cell">
              <span>Komisyon</span>
              <strong>${formatCurrency(Math.abs(row.fee || 0))}</strong>
            </div>
            <div class="meta-cell">
              <span>Tutar</span>
              <strong>${formatCurrency(Math.abs(row.amount || row.pcs * row.price))}</strong>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function syncAmountField() {
  const shares = Number(elements.sharesInput.value);
  const price = Number(elements.priceInput.value);

  if (!Number.isFinite(shares) || !Number.isFinite(price)) {
    return;
  }

  elements.amountInput.value = String(round2(shares * price));
}

function setStatus(message, isError = false) {
  elements.statusMessage.textContent = message;
  elements.statusMessage.className = `status-message ${isError ? "error" : "info"}`;
}

function parseDate(value) {
  if (!value) {
    return 0;
  }
  return new Date(value).getTime() || 0;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 2,
  }).format(value);
}

function round2(value) {
  return Math.round(value * 100) / 100;
}
