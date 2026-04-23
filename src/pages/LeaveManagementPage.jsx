import { useMemo, useState } from "react";

const leaveRows = [
  { id: 1, employee: "Rutuja Ahire", from: "18 Apr 2026", to: "19 Apr 2026", reason: "Family Event", type: "Casual Leave", status: "Pending" },
  { id: 2, employee: "Mahesh Dyandeo", from: "12 Apr 2026", to: "12 Apr 2026", reason: "Medical", type: "Sick Leave", status: "Approved" },
  { id: 3, employee: "Vikram Takale", from: "08 Apr 2026", to: "09 Apr 2026", reason: "Personal Work", type: "Casual Leave", status: "Rejected" },
  { id: 4, employee: "Kunal Prashik", from: "04 Apr 2026", to: "04 Apr 2026", reason: "Travel", type: "Loss Of Pay", status: "Cancelled" },
  { id: 5, employee: "Yashvita Shyamlal", from: "01 Apr 2026", to: "02 Apr 2026", reason: "Health", type: "Sick Leave", status: "Approved" }
];

const statusTabs = ["All", "Pending", "Approved", "Rejected", "Cancelled"];
const leaveDraft = { employee: "", from: "", to: "", reason: "", type: "Casual Leave" };

export function LeaveManagementPage() {
  const [rows, setRows] = useState(leaveRows);
  const [activeTab, setActiveTab] = useState("All");
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [draft, setDraft] = useState(leaveDraft);
  const [leaveTypes, setLeaveTypes] = useState(["Casual Leave", "Sick Leave", "Loss Of Pay", "Paid Leave"]);
  const [newType, setNewType] = useState("");

  const visibleRows = useMemo(() => {
    return rows.filter((row) => (activeTab === "All" ? true : row.status === activeTab));
  }, [rows, activeTab]);

  const submitLeave = (event) => {
    event.preventDefault();
    if (!draft.employee || !draft.from || !draft.to) return;
    const next = {
      id: rows.length + 1,
      employee: draft.employee,
      from: draft.from,
      to: draft.to,
      reason: draft.reason || "-",
      type: draft.type,
      status: "Pending"
    };
    setRows((prev) => [next, ...prev]);
    setDraft(leaveDraft);
    setIsLeaveOpen(false);
  };

  const addLeaveType = () => {
    const value = newType.trim();
    if (!value) return;
    if (leaveTypes.includes(value)) return;
    setLeaveTypes((prev) => [...prev, value]);
    setNewType("");
  };

  return (
    <section className="page-section hrms-page">
      <section className="hrms-panel">
        <div className="hrms-head">
          <div>
            <h2>Leaves</h2>
            <p>Review requests by status and create new leave entries.</p>
          </div>
          <div className="hrms-actions">
            <button type="button" className="hrms-btn hrms-btn-light" onClick={() => setIsTypeOpen(true)}>
              Leave Types
            </button>
            <button type="button" className="hrms-btn hrms-btn-primary" onClick={() => setIsLeaveOpen(true)}>
              + Add Leave
            </button>
          </div>
        </div>

        <div className="hrms-tab-row">
          {statusTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={activeTab === tab ? "hrms-tab hrms-tab-active" : "hrms-tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="hrms-table-wrap">
          <table className="hrms-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>From</th>
                <th>To</th>
                <th>Reason</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.employee}</td>
                  <td>{row.from}</td>
                  <td>{row.to}</td>
                  <td>{row.reason}</td>
                  <td>{row.type}</td>
                  <td>
                    <span className={`hrms-pill hrms-pill-${row.status.toLowerCase()}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {isLeaveOpen && (
        <div className="hrms-drawer-backdrop" role="presentation" onClick={() => setIsLeaveOpen(false)}>
          <section className="hrms-drawer" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <header>
              <h3>Add Leave</h3>
            </header>
            <form className="hrms-form-grid" onSubmit={submitLeave}>
              <label>
                Employee Name *
                <input
                  type="text"
                  value={draft.employee}
                  onChange={(event) => setDraft((prev) => ({ ...prev, employee: event.target.value }))}
                />
              </label>
              <label>
                Leave Type
                <select value={draft.type} onChange={(event) => setDraft((prev) => ({ ...prev, type: event.target.value }))}>
                  {leaveTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label>
                From *
                <input
                  type="text"
                  placeholder="dd Mmm yyyy"
                  value={draft.from}
                  onChange={(event) => setDraft((prev) => ({ ...prev, from: event.target.value }))}
                />
              </label>
              <label>
                To *
                <input
                  type="text"
                  placeholder="dd Mmm yyyy"
                  value={draft.to}
                  onChange={(event) => setDraft((prev) => ({ ...prev, to: event.target.value }))}
                />
              </label>
              <label className="hrms-col-2">
                Reason
                <textarea
                  rows={3}
                  value={draft.reason}
                  onChange={(event) => setDraft((prev) => ({ ...prev, reason: event.target.value }))}
                />
              </label>
              <footer className="hrms-form-actions hrms-col-2">
                <button type="button" className="hrms-btn hrms-btn-light" onClick={() => setIsLeaveOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="hrms-btn hrms-btn-primary">
                  Save
                </button>
              </footer>
            </form>
          </section>
        </div>
      )}

      {isTypeOpen && (
        <div className="hrms-modal-backdrop" role="presentation" onClick={() => setIsTypeOpen(false)}>
          <section className="hrms-modal hrms-modal-sm" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <header>
              <h3>Leave Types</h3>
              <button type="button" onClick={() => setIsTypeOpen(false)} aria-label="Close">
                x
              </button>
            </header>
            <div className="hrms-type-list">
              {leaveTypes.map((type) => (
                <div key={type}>{type}</div>
              ))}
            </div>
            <div className="hrms-type-add">
              <input
                type="text"
                placeholder="Add leave type"
                value={newType}
                onChange={(event) => setNewType(event.target.value)}
              />
              <button type="button" className="hrms-btn hrms-btn-primary" onClick={addLeaveType}>
                Add
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

