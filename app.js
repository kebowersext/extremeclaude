const columnDefs = [
  { field: "device", headerName: "Device", sortable: true, filter: true, flex: 2 },
  { field: "site", headerName: "Site", sortable: true, filter: true, flex: 1 },
  { field: "status", headerName: "Status", sortable: true, filter: true, flex: 1,
    cellStyle: params => ({
      color: params.value === "Online" ? "#4caf50" :
             params.value === "Offline" ? "#e94560" : "#ff9800",
      fontWeight: "600"
    })
  },
  { field: "ip", headerName: "IP Address", flex: 1 },
  { field: "uptime", headerName: "Uptime", sortable: true, flex: 1 },
  { field: "cpu", headerName: "CPU %", sortable: true, flex: 1,
    cellStyle: params => ({ color: params.value > 80 ? "#e94560" : "#e0e0e0" })
  },
];

const rowData = [
  { device: "Core-Switch-01", site: "HQ",       status: "Online",  ip: "10.0.0.1",   uptime: "42d 3h",  cpu: 24 },
  { device: "AP-Floor2-North", site: "HQ",       status: "Online",  ip: "10.0.1.12",  uptime: "12d 7h",  cpu: 11 },
  { device: "Firewall-Edge",   site: "HQ",       status: "Warning", ip: "10.0.0.254", uptime: "5d 1h",   cpu: 87 },
  { device: "Switch-Branch-A", site: "Branch 1", status: "Online",  ip: "10.1.0.1",   uptime: "30d 0h",  cpu: 33 },
  { device: "AP-Lobby",        site: "Branch 1", status: "Offline", ip: "10.1.0.22",  uptime: "—",       cpu: 0  },
  { device: "Switch-Branch-B", site: "Branch 2", status: "Online",  ip: "10.2.0.1",   uptime: "18d 14h", cpu: 45 },
  { device: "AP-Conf-Room",    site: "Branch 2", status: "Online",  ip: "10.2.0.15",  uptime: "18d 14h", cpu: 8  },
  { device: "Core-Switch-02",  site: "HQ",       status: "Online",  ip: "10.0.0.2",   uptime: "42d 3h",  cpu: 19 },
];

const gridOptions = {
  columnDefs,
  rowData,
  defaultColDef: {
    resizable: true,
  },
  animateRows: true,
};

const container = document.getElementById("grid-container");
agGrid.createGrid(container, gridOptions);

// Search / quick filter
document.getElementById("search").addEventListener("input", e => {
  gridOptions.api.setGridOption("quickFilterText", e.target.value);
});
