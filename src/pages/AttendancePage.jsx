import { useMemo, useState } from "react";

const attendanceRows = [
  { id: 1, name: "Rutuja Ahire", email: "rutuja@example.com", mobile: "9898001122", shift: "Full Time", inTime: "09:22", outTime: "18:12", status: "Present" },
  { id: 2, name: "Vikram Takale", email: "vikram@example.com", mobile: "9877002233", shift: "Full Time", inTime: "09:36", outTime: "18:40", status: "Late" },
  { id: 3, name: "Yashvita Shyamlal", email: "yashvita@example.com", mobile: "9822001199", shift: "Part Time", inTime: "13:06", outTime: "17:59", status: "Present" },
  { id: 4, name: "Kunal Prashik", email: "kunal@example.com", mobile: "9001221198", shift: "Full Time", inTime: "-", outTime: "-", status: "Leave" },
  { id: 5, name: "Mahesh Dyandeo", email: "mahesh@example.com", mobile: "9022448877", shift: "Full Time", inTime: "09:10", outTime: "18:07", status: "Present" }
];

export function AttendancePage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateValue, setDateValue] = useState("2026-04-23");

  const filteredRows = useMemo(() => {
    return attendanceRows.filter((row) => {
      const matchesQuery =
        !query ||
        row.name.toLowerCase().includes(query.toLowerCase()) ||
        row.email.toLowerCase().includes(query.toLowerCase()) ||
        row.mobile.includes(query);
      const matchesStatus = statusFilter === "All" || row.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  const totals = useMemo(() => {
    return filteredRows.reduce(
      (acc, row) => {
        acc.total += 1;
        if (row.status === "Present") acc.present += 1;
        if (row.status === "Late") acc.late += 1;
        if (row.status === "Leave") acc.leave += 1;
        return acc;
      },
      { total: 0, present: 0, late: 0, leave: 0 }
    );
  }, [filteredRows]);

  return (
    <section className="page-section hrms-page">
      <section className="hrms-panel">
        <div className="hrms-head">
          <div>
            <h2>Employees Attendance</h2>
            <p>Track daily in/out and attendance status by employee.</p>
          </div>
          <div className="hrms-actions">
            <input type="date" value={dateValue} onChange={(event) => setDateValue(event.target.value)} />
            <button type="button" className="hrms-btn hrms-btn-primary">
              + Add Attendance
            </button>
          </div>
        </div>

        <div className="hrms-toolbar">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search employee / mobile / email"
          />
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option>All</option>
            <option>Present</option>
            <option>Late</option>
            <option>Leave</option>
          </select>
          <button type="button" className="hrms-btn hrms-btn-light">
            Export
          </button>
        </div>

        <div className="hrms-stat-strip">
          <span>Total: {totals.total}</span>
          <span>Present: {totals.present}</span>
          <span>Late: {totals.late}</span>
          <span>On Leave: {totals.leave}</span>
        </div>

        <div className="hrms-table-wrap">
          <table className="hrms-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Shift</th>
                <th>In</th>
                <th>Out</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.mobile}</td>
                  <td>{row.shift}</td>
                  <td>{row.inTime}</td>
                  <td>{row.outTime}</td>
                  <td>
                    <span className={`hrms-pill hrms-pill-${row.status.toLowerCase()}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

