import { useMemo, useState } from "react";

const statCards = [
  {
    value: "0.00",
    title: "Current Month Expense",
    trend: "0.5%",
    icon: "wallet"
  },
  {
    value: "0.00",
    title: "Last Month Expenses",
    trend: "0.5%",
    icon: "cal"
  },
  {
    value: "200.00",
    title: "Last 3 Months",
    trend: "0.5%",
    icon: "note"
  },
  {
    value: "55,132.00",
    title: "Last 6 Months",
    trend: "0.5%",
    icon: "card"
  }
];

const monthSeries = [
  { month: "May 2025", value: 0 },
  { month: "Jun 2025", value: 0 },
  { month: "Jul 2025", value: 0 },
  { month: "Aug 2025", value: 0 },
  { month: "Sep 2025", value: 2500 },
  { month: "Oct 2025", value: 3000 },
  { month: "Nov 2025", value: 25500 },
  { month: "Dec 2025", value: 26022 },
  { month: "Jan 2026", value: 0 },
  { month: "Feb 2026", value: 0 },
  { month: "Mar 2026", value: 0 },
  { month: "Apr 2026", value: 0 }
];

const expenseRows = [
  { id: 1, title: "colour", date: "28, Feb 2026", category: "Other", amount: 200 },
  { id: 2, title: "ASHOK KALE SIR", date: "30, Dec 2025", category: "Banner", amount: 11760 },
  { id: 3, title: "PARAS JAIN", date: "22, Dec 2025", category: "Rent", amount: 9000 },
  { id: 4, title: "RUTUJA", date: "20, Dec 2025", category: "Salary", amount: 2000 },
  { id: 5, title: "PRAGATI", date: "20, Dec 2025", category: "Salary", amount: 1500 },
  { id: 6, title: "CCTV M", date: "09, Dec 2025", category: "Other", amount: 450 },
  { id: 7, title: "DEC", date: "09, Dec 2025", category: "Light Bill", amount: 1500 },
  { id: 8, title: "BDS PVT.LTD", date: "26, Nov 2025", category: "Other", amount: 10770 },
  { id: 9, title: "VIKRAM ADV", date: "22, Nov 2025", category: "Phamplate", amount: 500 },
  { id: 10, title: "PRAGATI", date: "21, Nov 2025", category: "Salary", amount: 1500 },
  { id: 11, title: "RUTUJA", date: "20, Nov 2025", category: "Salary", amount: 2000 },
  { id: 12, title: "PARAS JAIN", date: "20, Nov 2025", category: "Rent", amount: 9000 },
  { id: 13, title: "LIGHT BILL", date: "15, Nov 2025", category: "Light Bill", amount: 1820 },
  { id: 14, title: "VI BROAD BAND", date: "29, Oct 2025", category: "Wifi broad band", amount: 3132 },
  { id: 15, title: "project", date: "22, Sep 2025", category: "Other", amount: 2300 },
  { id: 16, title: "sms", date: "15, Sep 2025", category: "Other", amount: 590 }
];

function SummaryIcon({ icon }) {
  const common = { width: 17, height: 17, viewBox: "0 0 24 24", "aria-hidden": true };
  if (icon === "cal") {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 3v4M16 3v4M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "note") {
    return (
      <svg {...common}>
        <path d="M8 4h8l4 4v12H8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 4v4h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "card") {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 8h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
      <path d="M10 3h4l7 7-8 8-7-7V7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function RowActionButtons() {
  return (
    <div className="exp-row-actions">
      <button type="button" className="exp-action-edit" aria-label="Edit expense">
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
          <path d="M4 16.5V20h3.5L18 9.5 14.5 6 4 16.5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M13 7.5L16.5 11" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
      <button type="button" className="exp-action-delete" aria-label="Delete expense">
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
          <path d="M5 7h14M9 7V5h6v2M8 7l1 12h6l1-12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function AddExpenseModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="exp-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="exp-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Add Expense"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="exp-modal-head">
          <h3>Add Expense</h3>
          <button type="button" onClick={onClose} aria-label="Close add expense modal">
            x
          </button>
        </div>

        <form className="exp-modal-grid">
          <label>
            Expense Date *
            <input type="text" placeholder="mm/dd/yyyy" />
          </label>
          <label>
            Expense Title *
            <input type="text" />
          </label>

          <label>
            Expense Category *
            <select defaultValue="">
              <option value="" disabled>
                Select Expense Category
              </option>
              <option>Banner</option>
              <option>Light Bill</option>
              <option>Marketing</option>
              <option>Other</option>
              <option>Phamplate</option>
              <option>Rent</option>
              <option>Salary</option>
              <option>Stationary</option>
              <option>Vikram</option>
              <option>Wifi broad band</option>
            </select>
          </label>
          <label>
            Bill/Voucher No.
            <input type="text" />
          </label>

          <label>
            Amount *
            <input type="number" />
          </label>
          <label>
            Description
            <input type="text" />
          </label>

          <label>
            First Name
            <input type="text" defaultValue="Ishan" />
          </label>
          <label>
            Last Name
            <input type="text" defaultValue="Bhokarikar" />
          </label>
        </form>

        <div className="exp-visible-card">
          <h4>Visible for</h4>
          <label className="exp-toggle-row">
            <input type="checkbox" />
            <span>Share with all branches you&apos;re allowed to access</span>
          </label>

          <div className="exp-branch-grid">
            <label>
              <input type="checkbox" />
              Aloknagar (003)
            </label>
            <label>
              <input type="checkbox" />
              Naiknagar (002)
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Shivajinagar (001)
            </label>
            <label>
              <input type="checkbox" />
              X Y Z (004)
            </label>
          </div>
          <p>
            Pick one or more branches. Or turn on "All branches" to include every
            branch you can access.
          </p>
        </div>

        <div className="exp-modal-actions">
          <button type="button" className="exp-btn-light">
            Reset
          </button>
          <button type="button" className="exp-btn-light" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="exp-btn-primary" onClick={onClose}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export function ExpensesPage() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const totalAmount = useMemo(
    () => expenseRows.reduce((sum, row) => sum + row.amount, 0),
    []
  );

  const chartPoints = monthSeries
    .map((point, index) => {
      const x = index * 8;
      const y = 27 - (point.value / 30000) * 23;
      return `${x},${Math.max(4, y).toFixed(2)}`;
    })
    .join(" ");

  return (
    <section className="page-section exp-page">
      <div className="exp-summary-grid">
        {statCards.map((card) => (
          <article key={card.title} className="exp-summary-card">
            <div className="exp-summary-value">{card.value}</div>
            <div className="exp-summary-title">{card.title}</div>
            <div className="exp-summary-footer">
              <span>{`+ ${card.trend}`}</span>
              <button type="button">View All</button>
            </div>
            <div className="exp-summary-icon">
              <SummaryIcon icon={card.icon} />
            </div>
          </article>
        ))}
      </div>

      <section className="exp-chart-card">
        <div className="exp-chart-head">
          <h3>Expense (Last 12 Months)</h3>
          <p>
            <span>Shown: {expenseRows.length}</span>
            <span>{`Total Rs ${totalAmount.toLocaleString("en-IN")}.00`}</span>
          </p>
        </div>

        <div className="exp-chart-grid">
          {[30000, 25000, 20000, 15000, 10000, 5000, 0].map((tick) => (
            <div key={tick} className="exp-grid-line">
              <span>{tick}</span>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 100 30" className="exp-chart-svg" preserveAspectRatio="none">
          <polyline
            points={chartPoints}
            fill="none"
            stroke="#dce6f8"
            strokeWidth="0.35"
          />
          {monthSeries.map((point, index) => {
            const y = 27 - (point.value / 30000) * 23;
            return (
              <circle
                key={point.month}
                cx={index * 8}
                cy={Math.max(4, y).toFixed(2)}
                r="0.45"
                fill="#20c6ed"
              />
            );
          })}
        </svg>

        <div className="exp-month-row">
          {monthSeries.map((point) => (
            <span key={point.month}>{point.month}</span>
          ))}
        </div>
      </section>

      <section className="exp-table-card">
        <div className="exp-table-toolbar">
          <h3>Expenses</h3>
          <input type="text" placeholder="mm/dd/yyyy" />
          <input type="text" placeholder="mm/dd/yyyy" />
          <select defaultValue="All Categories">
            <option>All Categories</option>
            <option>Banner</option>
            <option>Light Bill</option>
            <option>Marketing</option>
            <option>Other</option>
            <option>Phamplate</option>
            <option>Rent</option>
            <option>Salary</option>
            <option>Stationary</option>
            <option>Vikram</option>
            <option>Wifi broad band</option>
          </select>
          <input type="text" placeholder="Search title/notes" />
          <button type="button" className="exp-export-btn">
            Export CSV
          </button>
          <button type="button" className="exp-add-btn" onClick={() => setIsAddOpen(true)}>
            + Add Expense
          </button>
        </div>

        <div className="exp-table-wrap">
          <table className="exp-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Expense Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenseRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.date}</td>
                  <td>
                    <span className={`exp-category-chip exp-cat-${row.category.toLowerCase().replaceAll(" ", "-")}`}>
                      <CategoryIcon />
                      {row.category}
                    </span>
                  </td>
                  <td>{`Rs ${row.amount.toLocaleString("en-IN")}.00`}</td>
                  <td>
                    <RowActionButtons />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AddExpenseModal open={isAddOpen} onClose={() => setIsAddOpen(false)} />
    </section>
  );
}
