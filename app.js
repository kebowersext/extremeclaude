// ── ACTION CARD TOGGLE ───────────────────────────────────────────────────
function toggleAction(card) {
  card.classList.toggle('open');
}

// ── CERTIFICATIONS DATA ──────────────────────────────────────────────────
const certData = [
  { cert: "Extreme Certified Professional in Extreme Switching",         type: "Certification", track: "WIRED - Extreme Switching",       level: "Professional",    name: "Devin Regan",      email: "dregan@stepcg.com",       achieved: "04 Aug 2023", expires: "04 Aug 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Networks Certified Administrator in Extreme Switching", type: "Certification", track: "WIRED - Extreme Switching",       level: "Administrator",   name: "Devin Regan",      email: "dregan@stepcg.com",       achieved: "04 Aug 2023", expires: "04 Aug 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Professional in Solutions Selling 2026",    type: "Certification", track: "SALES - Solutions Selling",       level: "Professional",    name: "Joe Maynard",      email: "jmaynard@stepcg.com",     achieved: "14 Nov 2025", expires: "14 Nov 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Professional in Solutions Design 2026",     type: "Certification", track: "DESIGN - Solutions Design",       level: "Professional",    name: "David Weathers",   email: "dweathers@stepcg.com",    achieved: "17 Nov 2025", expires: "17 Nov 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Professional in Solutions Design 2026",     type: "Certification", track: "DESIGN - Solutions Design",       level: "Professional",    name: "Joe Maynard",      email: "jmaynard@stepcg.com",     achieved: "17 Nov 2025", expires: "17 Nov 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Professional in Solutions Selling 2026",    type: "Certification", track: "SALES - Solutions Selling",       level: "Professional",    name: "Timothy Fugette",  email: "tfugette@stepcg.com",     achieved: "17 Nov 2025", expires: "17 Nov 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Professional in Solutions Selling 2026",    type: "Certification", track: "SALES - Solutions Selling",       level: "Professional",    name: "Chad Nusbaum",     email: "cnusbaum@stepcg.com",     achieved: "17 Nov 2025", expires: "17 Nov 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Associate in Solutions Selling 2026",       type: "Certification", track: "SALES - Solutions Selling",       level: "Associate",       name: "Chad Nusbaum",     email: "cnusbaum@stepcg.com",     achieved: "17 Nov 2025", expires: "17 Nov 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Associate in Solutions Selling 2026",       type: "Certification", track: "DESIGN - Solutions Design",       level: "Associate",       name: "Timothy Fugette",  email: "tfugette@stepcg.com",     achieved: "17 Nov 2025", expires: "17 Nov 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Associate in Solutions Selling 2026",       type: "Certification", track: "SALES - Solutions Selling",       level: "Associate",       name: "David Weathers",   email: "dweathers@stepcg.com",    achieved: "17 Nov 2025", expires: "17 Nov 2026", q4: "",    q1: "",    q2: "Yes" },
  { cert: "Extreme Certified Professional in Extreme Fabric",            type: "Certification", track: "WIRED - Extreme Fabric",         level: "Professional",    name: "Sarah Kim",        email: "skim@stepcg.com",         achieved: "10 Jan 2025", expires: "10 Jan 2027", q4: "",    q1: "",    q2: ""    },
  { cert: "Extreme Networks Certified Administrator in Extreme Fabric",   type: "Certification", track: "WIRED - Extreme Fabric",         level: "Administrator",   name: "Marcus Hill",      email: "mhill@stepcg.com",        achieved: "22 Mar 2025", expires: "22 Mar 2027", q4: "",    q1: "",    q2: ""    },
  { cert: "Extreme Certified Professional in ExtremeWireless Cloud",     type: "Certification", track: "WIRELESS - ExtremeWireless Cloud", level: "Professional",  name: "Lisa Torres",      email: "ltorres@stepcg.com",      achieved: "05 Jun 2025", expires: "05 Jun 2027", q4: "",    q1: "",    q2: ""    },
  { cert: "Extreme Networks Certified Administrator in ExtremeWireless Cloud", type: "Certification", track: "WIRELESS - ExtremeWireless Cloud", level: "Administrator", name: "James Patel", email: "jpatel@stepcg.com",    achieved: "15 Apr 2025", expires: "15 Apr 2027", q4: "",    q1: "",    q2: ""    },
  { cert: "Extreme Certified Professional in ExtremeCloud IQ - Controller", type: "Certification", track: "WIRELESS - ExtremeCloud IQ Controller", level: "Professional", name: "Nina Walsh",  email: "nwalsh@stepcg.com",   achieved: "01 Feb 2025", expires: "01 Feb 2027", q4: "",    q1: "",    q2: ""    },
];

// Populate filter dropdowns dynamically
function populateFilters() {
  const tracks = [...new Set(certData.map(r => r.track))].sort();
  const types  = [...new Set(certData.map(r => r.type))].sort();
  const levels = [...new Set(certData.map(r => r.level))].sort();

  const fill = (id, vals) => {
    const sel = document.getElementById(id);
    vals.forEach(v => { const o = document.createElement('option'); o.value = v; o.text = v; sel.appendChild(o); });
  };
  fill('f-track', tracks);
  fill('f-achievement', types);
  fill('f-competency', levels);
}

// ── AG-GRID SETUP ────────────────────────────────────────────────────────
const columnDefs = [
  { field: 'cert',     headerName: 'Certification',         flex: 3, wrapText: true, autoHeight: true },
  { field: 'type',     headerName: 'Achievement Type',      flex: 1 },
  { field: 'track',    headerName: 'Track',                 flex: 2 },
  { field: 'level',    headerName: 'Competency Level',      flex: 1 },
  { field: 'name',     headerName: 'Contact Name',          flex: 1,
    cellRenderer: p => `<span style="color:#2980b9">${p.value}</span>` },
  { field: 'email',    headerName: 'Contact Email',         flex: 1,
    cellRenderer: p => `<a href="mailto:${p.value}" style="color:#2980b9">${p.value}</a>` },
  { field: 'achieved', headerName: 'Achieved',              flex: 1 },
  { field: 'expires',  headerName: 'Expires',               flex: 1 },
  { field: 'q4',       headerName: 'Expiring In Current Q4 FY2026', flex: 1, cellStyle: { textAlign: 'center' } },
  { field: 'q1',       headerName: 'Expiring In Next Q1 FY2027',    flex: 1, cellStyle: { textAlign: 'center' } },
  { field: 'q2',       headerName: 'Expiring In Q2 FY2027',         flex: 1, cellStyle: { textAlign: 'center' } },
];

let gridApi;

const gridOptions = {
  columnDefs,
  rowData: certData,
  defaultColDef: { resizable: true, sortable: true, filter: false },
  pagination: true,
  paginationPageSize: 10,
  domLayout: 'normal',
  onGridReady(params) { gridApi = params.api; },
};

document.addEventListener('DOMContentLoaded', () => {
  populateFilters();
  const container = document.getElementById('cert-grid');
  agGrid.createGrid(container, gridOptions);
});

// ── FILTER ───────────────────────────────────────────────────────────────
function applyFilters() {
  const period      = document.getElementById('f-period').value;
  const track       = document.getElementById('f-track').value;
  const achievement = document.getElementById('f-achievement').value;
  const competency  = document.getElementById('f-competency').value;

  const filtered = certData.filter(r => {
    if (track       !== 'Show All' && r.track !== track)       return false;
    if (achievement !== 'Show All' && r.type  !== achievement) return false;
    if (competency  !== 'Show All' && r.level !== competency)  return false;
    return true;
  });

  gridApi.setGridOption('rowData', filtered);
}

// ── EXPORT ───────────────────────────────────────────────────────────────
function exportGrid() {
  gridApi.exportDataAsCsv({ fileName: 'certifications.csv' });
}

function exportAll() {
  gridApi.exportDataAsCsv({ fileName: 'all-resellers-certifications.csv', allColumns: true });
}
