import { useMemo, useState } from "react";

const seedEmployees = [
  { id: 1, name: "Rutuja Ahire", role: "Manager", type: "Full Time", email: "rutuja@example.com", phone: "9898001122" },
  { id: 2, name: "Vikram Rahul Takale", role: "Faculty", type: "Full Time", email: "vikram@example.com", phone: "9877002233" },
  { id: 3, name: "Yashvita Shyamlal", role: "Counsellor", type: "Part Time", email: "yashvita@example.com", phone: "9822001199" },
  { id: 4, name: "Kunal Prashik", role: "HR", type: "Full Time", email: "kunal@example.com", phone: "9001221198" },
  { id: 5, name: "Mahesh Dyandeo", role: "Accounts", type: "Full Time", email: "mahesh@example.com", phone: "9022448877" }
];

const employeeTemplate = {
  firstName: "",
  lastName: "",
  role: "Faculty",
  type: "Full Time",
  email: "",
  phone: "",
  address: ""
};

export function EmployeesPage() {
  const [employees, setEmployees] = useState(seedEmployees);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(employeeTemplate);

  const visibleEmployees = useMemo(() => {
    return employees.filter((employee) => {
      if (!query) return true;
      const haystack = `${employee.name} ${employee.role} ${employee.email} ${employee.phone}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
  }, [employees, query]);

  const addEmployee = (event) => {
    event.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim()) return;
    const nextEmployee = {
      id: employees.length + 1,
      name: `${form.firstName.trim()} ${form.lastName.trim()}`,
      role: form.role,
      type: form.type,
      email: form.email || "-",
      phone: form.phone || "-"
    };
    setEmployees((prev) => [nextEmployee, ...prev]);
    setForm(employeeTemplate);
    setIsOpen(false);
  };

  return (
    <section className="page-section hrms-page">
      <section className="hrms-panel">
        <div className="hrms-head">
          <div>
            <h2>Employees</h2>
            <p>Organization employees with quick card view and profile actions.</p>
          </div>
          <div className="hrms-actions">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name / role / contact"
            />
            <button type="button" className="hrms-btn hrms-btn-primary" onClick={() => setIsOpen(true)}>
              + Add Employee
            </button>
          </div>
        </div>

        <div className="hrms-card-grid">
          {visibleEmployees.map((employee) => (
            <article key={employee.id} className="hrms-employee-card">
              <div className="hrms-employee-avatar">{employee.name.slice(0, 1)}</div>
              <h3>{employee.name}</h3>
              <p>{employee.role}</p>
              <span className="hrms-chip">{employee.type}</span>
              <small>{employee.email}</small>
              <small>{employee.phone}</small>
            </article>
          ))}
        </div>
      </section>

      {isOpen && (
        <div className="hrms-drawer-backdrop" role="presentation" onClick={() => setIsOpen(false)}>
          <section className="hrms-drawer" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <header>
              <h3>Add Employee</h3>
            </header>
            <form className="hrms-form-grid" onSubmit={addEmployee}>
              <label>
                First Name *
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(event) => setForm((prev) => ({ ...prev, firstName: event.target.value }))}
                />
              </label>
              <label>
                Last Name *
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(event) => setForm((prev) => ({ ...prev, lastName: event.target.value }))}
                />
              </label>
              <label>
                Role
                <select value={form.role} onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}>
                  <option>Faculty</option>
                  <option>Manager</option>
                  <option>HR</option>
                  <option>Accounts</option>
                  <option>Counsellor</option>
                </select>
              </label>
              <label>
                Employee Type
                <select value={form.type} onChange={(event) => setForm((prev) => ({ ...prev, type: event.target.value }))}>
                  <option>Full Time</option>
                  <option>Part Time</option>
                </select>
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                />
              </label>
              <label>
                Phone
                <input
                  type="text"
                  value={form.phone}
                  onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                />
              </label>
              <label className="hrms-col-2">
                Address
                <textarea
                  rows={3}
                  value={form.address}
                  onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))}
                />
              </label>
              <footer className="hrms-form-actions hrms-col-2">
                <button type="button" className="hrms-btn hrms-btn-light" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="hrms-btn hrms-btn-primary">
                  Submit
                </button>
              </footer>
            </form>
          </section>
        </div>
      )}
    </section>
  );
}

