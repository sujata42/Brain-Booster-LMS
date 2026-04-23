import { useState } from "react";

const initialPolicies = [
  { id: 1, name: "Manager Shift", inGrace: "10 min", outGrace: "00 min", halfDayRule: "Late In > 11:30", level: "MANAGER" },
  { id: 2, name: "General Shift", inGrace: "15 min", outGrace: "10 min", halfDayRule: "Late In > 12:15", level: "ALL" },
  { id: 3, name: "Counsellor Shift", inGrace: "05 min", outGrace: "05 min", halfDayRule: "Late In > 11:45", level: "COUNSELLOR" },
  { id: 4, name: "Faculty Shift", inGrace: "00 min", outGrace: "00 min", halfDayRule: "Late In > 10:45", level: "FACULTY" }
];

const blankPolicy = {
  name: "",
  inGrace: "10",
  outGrace: "10",
  halfDayRule: "",
  level: "ALL"
};

export function AttendancePoliciesPage() {
  const [policies, setPolicies] = useState(initialPolicies);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(blankPolicy);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) return;
    const next = {
      id: policies.length + 1,
      name: form.name.trim(),
      inGrace: `${form.inGrace} min`,
      outGrace: `${form.outGrace} min`,
      halfDayRule: form.halfDayRule || "Not configured",
      level: form.level
    };
    setPolicies((prev) => [next, ...prev]);
    setForm(blankPolicy);
    setIsOpen(false);
  };

  return (
    <section className="page-section hrms-page">
      <section className="hrms-panel">
        <div className="hrms-head">
          <div>
            <h2>Attendance Policies</h2>
            <p>Define check-in grace, half-day conditions, and policy levels.</p>
          </div>
          <div className="hrms-actions">
            <button type="button" className="hrms-btn hrms-btn-primary" onClick={() => setIsOpen(true)}>
              + Create Attendance Policy
            </button>
          </div>
        </div>

        <div className="hrms-table-wrap">
          <table className="hrms-table">
            <thead>
              <tr>
                <th>Policy Name</th>
                <th>In Grace</th>
                <th>Out Grace</th>
                <th>Half Day Rule</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy) => (
                <tr key={policy.id}>
                  <td>{policy.name}</td>
                  <td>{policy.inGrace}</td>
                  <td>{policy.outGrace}</td>
                  <td>{policy.halfDayRule}</td>
                  <td>{policy.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {isOpen && (
        <div className="hrms-modal-backdrop" role="presentation" onClick={() => setIsOpen(false)}>
          <section className="hrms-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <header>
              <h3>Create Attendance Policy</h3>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close">
                x
              </button>
            </header>
            <form className="hrms-form-grid" onSubmit={onSubmit}>
              <label>
                Name *
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                />
              </label>
              <label>
                Policy Level
                <select value={form.level} onChange={(event) => setForm((prev) => ({ ...prev, level: event.target.value }))}>
                  <option>ALL</option>
                  <option>MANAGER</option>
                  <option>FACULTY</option>
                  <option>COUNSELLOR</option>
                </select>
              </label>
              <label>
                In Grace (min)
                <input
                  type="number"
                  value={form.inGrace}
                  onChange={(event) => setForm((prev) => ({ ...prev, inGrace: event.target.value }))}
                />
              </label>
              <label>
                Out Grace (min)
                <input
                  type="number"
                  value={form.outGrace}
                  onChange={(event) => setForm((prev) => ({ ...prev, outGrace: event.target.value }))}
                />
              </label>
              <label className="hrms-col-2">
                Half Day Rule
                <input
                  type="text"
                  placeholder="Example: Late In > 11:30"
                  value={form.halfDayRule}
                  onChange={(event) => setForm((prev) => ({ ...prev, halfDayRule: event.target.value }))}
                />
              </label>
              <footer className="hrms-form-actions hrms-col-2">
                <button type="button" className="hrms-btn hrms-btn-light" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="hrms-btn hrms-btn-primary">
                  Save Policy
                </button>
              </footer>
            </form>
          </section>
        </div>
      )}
    </section>
  );
}

