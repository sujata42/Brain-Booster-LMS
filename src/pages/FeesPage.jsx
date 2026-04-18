import { useMemo, useState } from "react";

const statCards = [
  { title: "Today's Collection", value: "0", icon: "↗" },
  { title: "Current Month Collection", value: "0", icon: "💳" },
  { title: "Last Month Collection", value: "0", icon: "🗓" },
  { title: "Total Due's", value: "123,184", icon: "🧾" }
];

const months = ["May 2025", "Jun 2025", "Jul 2025", "Aug 2025", "Sep 2025", "Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026"];

const followups = [
  { id: 1, name: "SHITAL MHASKE", mobile: "8668702166", course: "SPOKEN ENGLISH", batch: "1ST BATCH", owner: "Ishan Bhokarikar", next: "16, Jan 2026", agreed: 1333, paid: 0, due: 1333 },
  { id: 2, name: "MANSVI JADHAV", mobile: "8999551226", course: "SPOKEN ENGLISH", batch: "", owner: "Rahul Takale", next: "-", agreed: 7000, paid: 7000, due: 0 },
  { id: 3, name: "DHANSHREE MAGAR", mobile: "8275388202", course: "SPOKEN ENGLISH", batch: "", owner: "Rahul Takale", next: "28, Jan 2026", agreed: 8000, paid: 2000, due: 6000 },
  { id: 4, name: "AKSHAY NARWADE", mobile: "8668876890", course: "SPOKEN ENGLISH", batch: "", owner: "Rahul Takale", next: "-", agreed: 7500, paid: 7500, due: 0 },
  { id: 5, name: "DIPAK WAGHMARE", mobile: "9665514828", course: "SPOKEN ENGLISH", batch: "", owner: "Rahul Takale", next: "-", agreed: 7500, paid: 7500, due: 0 },
  { id: 6, name: "SUVARANA KOILE", mobile: "9404345268", course: "SPOKEN ENGLISH", batch: "", owner: "Pragati Bhogare", next: "25, Jan 2026", agreed: 6000, paid: 2000, due: 4000 },
  { id: 7, name: "PAVAN NIRFAL", mobile: "8888038242", course: "SPOKEN ENGLISH", batch: "", owner: "Pragati Bhogare", next: "25, Jan 2026", agreed: 7500, paid: 3500, due: 4000 },
  { id: 8, name: "KIRAN GOSAVI", mobile: "8767090067", course: "SPOKEN ENGLISH", batch: "", owner: "Rahul Takale", next: "29, Jan 2026", agreed: 8000, paid: 500, due: 7500 }
];

export function FeesPage() {
  const [exportOpen, setExportOpen] = useState(false);
  const totalPaid = useMemo(() => followups.reduce((s, row) => s + row.paid, 0), []);
  const totalDue = useMemo(() => followups.reduce((s, row) => s + row.due, 0), []);

  return (
    <section className="page-section fees-page">
      <div className="fees-topline">
        <h2>Collect Fees</h2>
        <span>Branch: Shivajinagar</span>
      </div>

      <div className="fees-stats-grid">
        {statCards.map((card) => (
          <article key={card.title} className="fees-stat-card">
            <strong>{card.value}</strong>
            <h3>{card.title}</h3>
            <a href="#">View All →</a>
            <span className="fees-stat-icon">{card.icon}</span>
          </article>
        ))}
      </div>

      <section className="fees-chart-card">
        <div className="fees-chart-head">
          <h3>Collection Revenue</h3>
          <div className="fees-range-tabs">
            <button type="button">7 Days</button>
            <button type="button">Current Month</button>
            <button type="button">Last Month</button>
            <button type="button" className="active">12 Months</button>
          </div>
        </div>
        <div className="fees-grid-lines">
          {[100000, 80000, 60000, 40000, 20000, 0].map((n) => (
            <div key={n}><span>{n}</span></div>
          ))}
        </div>
        <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="fees-chart-svg">
          <polyline points="0,27 8,27 16,27 24,27 32,27 40,16 48,20 56,12 64,27 72,27 80,27 88,27" fill="none" stroke="#dde7f5" strokeWidth="0.7" />
          {[0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88].map((cx, i) => (
            <circle key={months[i]} cx={cx} cy={[27, 27, 27, 27, 27, 16, 20, 12, 25, 27, 27, 27][i]} r="0.55" fill="#19b4ee" />
          ))}
        </svg>
        <div className="fees-month-row">
          {months.map((m) => <span key={m}>{m}</span>)}
        </div>
      </section>

      <section className="fees-table-card">
        <div className="fees-table-head">
          <div>
            <h3>Fee Follow-ups</h3>
            <p><span className="blue-dot">●</span> Due Today: <b>0</b> ( 0 ) <span className="red-dot">●</span> Overdue: <b>33</b> ( 122,251 )</p>
          </div>
          <div className="fees-controls">
            <input type="text" placeholder="Search by name, email, phone" />
            <button type="button" className="search-btn">⌕</button>
            <div className="fees-export-wrap">
              <button type="button" className="export-btn" onClick={() => setExportOpen((v) => !v)}>Export ▾</button>
              {exportOpen ? (
                <div className="fees-export-menu">
                  <button type="button">Export visible as CSV</button>
                  <button type="button">Export visible as PDF</button>
                </div>
              ) : null}
            </div>
            <button type="button" className="today-btn">Today&apos;s Followups</button>
            <button type="button" className="overdue-btn">Overdue</button>
            <button type="button" className="clear-btn">Clear Filters</button>
          </div>
        </div>

        <div className="fees-table-wrap">
          <table className="fees-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Lead Owner</th>
                <th>Next Installment</th>
                <th>Agreed Fee</th>
                <th>Paid Fee</th>
                <th>Due Fee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {followups.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    <strong>{row.name}</strong>
                    <span>{row.mobile}</span>
                  </td>
                  <td><span className="course-pill">{row.course}</span></td>
                  <td>{row.batch ? <span className="batch-pill">{row.batch}</span> : "-"}</td>
                  <td><span className="owner-avatar">👨</span>{row.owner}</td>
                  <td>{row.next}</td>
                  <td>{row.agreed.toLocaleString("en-IN")}</td>
                  <td>{row.paid.toLocaleString("en-IN")}</td>
                  <td className="due-cell">{row.due.toLocaleString("en-IN")}</td>
                  <td>
                    <button type="button" className="dots-btn">⋮</button>
                    <button type="button" className="chat-btn">💬</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={10}>
                  <strong>Total Paid (visible): {totalPaid.toLocaleString("en-IN")}</strong>
                  <strong>Total Due (visible): {totalDue.toLocaleString("en-IN")}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </section>
  );
}
