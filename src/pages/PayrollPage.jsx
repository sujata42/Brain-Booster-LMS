import { useMemo, useState } from "react";

const months = ["APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT"];
const payrollRows = [
  { id: 1, name: "Rutuja Ahire", apr: 25, may: 24, jun: 25, jul: 26, aug: 25, sep: 24, oct: 25, active: true },
  { id: 2, name: "Mahesh Dyandeo", apr: 24, may: 25, jun: 24, jul: 25, aug: 24, sep: 25, oct: 24, active: true },
  { id: 3, name: "Vikram Takale", apr: 23, may: 21, jun: 22, jul: 23, aug: 22, sep: 23, oct: 22, active: true },
  { id: 4, name: "Kunal Prashik", apr: 26, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, active: false },
  { id: 5, name: "Yashvita Shyamlal", apr: 20, may: 21, jun: 20, jul: 21, aug: 20, sep: 22, oct: 21, active: true }
];

const payrollTabs = ["All", "Draft", "Generated", "Approved", "Paid"];

export function PayrollPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [year, setYear] = useState("2026");
  const [month, setMonth] = useState("APR");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    return payrollRows.filter((row) => row.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <section className="page-section hrms-page">
      <section className="hrms-panel">
        <div className="hrms-head">
          <div>
            <h2>Payroll</h2>
            <p>Month-wise attendance summary for payroll generation.</p>
          </div>
          <div className="hrms-actions">
            <button type="button" className="hrms-btn hrms-btn-light">
              Attendance Summary
            </button>
            <button type="button" className="hrms-btn hrms-btn-primary">
              + Add Payroll
            </button>
          </div>
        </div>

        <div className="hrms-tab-row">
          {payrollTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={activeTab === tab ? "hrms-tab hrms-tab-active" : "hrms-tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <div className="hrms-tab-fill" />
          <select value={month} onChange={(event) => setMonth(event.target.value)}>
            {months.map((monthLabel) => (
              <option key={monthLabel}>{monthLabel}</option>
            ))}
          </select>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            <option>2026</option>
            <option>2025</option>
          </select>
        </div>

        <div className="hrms-toolbar">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search employee"
          />
          <span className="hrms-chip-muted">Current: {month} {year}</span>
        </div>

        <div className="hrms-table-wrap">
          <table className="hrms-table hrms-table-payroll">
            <thead>
              <tr>
                <th>Name</th>
                {months.map((label) => (
                  <th key={label}>{label}</th>
                ))}
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.apr}</td>
                  <td>{row.may}</td>
                  <td>{row.jun}</td>
                  <td>{row.jul}</td>
                  <td>{row.aug}</td>
                  <td>{row.sep}</td>
                  <td>{row.oct}</td>
                  <td>{row.active ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

