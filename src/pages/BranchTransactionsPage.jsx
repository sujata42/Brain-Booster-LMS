import { useState } from "react";

const summaryCards = [
  {
    title: "TOTAL CREDIT (FEES)",
    amount: "\u20B90.00",
    badge: "Inflow",
    tone: "credit",
    description: "Sum of all Paid installments in selected period."
  },
  {
    title: "TOTAL EXPENSE (DEBIT)",
    amount: "\u20B90.00",
    badge: "Outflow",
    tone: "expense",
    description: "Sum of all expenses in selected period."
  },
  {
    title: "NET (CREDIT - DEBIT)",
    amount: "\u20B90.00",
    badge: "Surplus",
    tone: "net",
    description: "Positive = more fees collected than expenses."
  }
];

const tableColumns = [
  "#",
  "DATE",
  "TYPE",
  "PARTY / TITLE",
  "SOURCE",
  "PAYMENT MODE / CATEGORY",
  "REF NO",
  "AMOUNT (\u20B9)"
];

function SummaryCard({ title, amount, badge, tone, description }) {
  return (
    <article className="bt-card">
      <div className="bt-card-header">
        <h3>{title}</h3>
        <span>{badge}</span>
      </div>
      <p className={`bt-card-amount bt-card-amount-${tone}`}>{amount}</p>
      <p className="bt-card-description">{description}</p>
    </article>
  );
}

function FilterBar() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="bt-filter-wrap">
      <div className="bt-filter-left">
        <label>
          <span>Month</span>
          <select defaultValue="April">
            <option>April</option>
            <option>March</option>
            <option>February</option>
          </select>
        </label>

        <label>
          <span>Year</span>
          <select defaultValue="2026">
            <option>2026</option>
            <option>2025</option>
          </select>
        </label>

        <div className="bt-period-buttons">
          <button type="button">This Month</button>
          <button type="button">Last Month</button>
        </div>
      </div>

      <div className="bt-filter-right">
        <div className="bt-tabs">
          {[
            { id: "All", label: "All" },
            { id: "Credit", label: "Credit" },
            { id: "Debit", label: "Debit" }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "bt-tab-active" : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bt-search-row">
          <div className="bt-search-box">
            <input type="text" placeholder="Search name, category, ref no" />
            <button type="button" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>
          <button type="button" className="bt-apply-btn">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}

function TransactionsTable() {
  return (
    <section className="bt-table-wrap">
      <div className="bt-table-scroll">
        <table className="bt-table">
          <thead>
            <tr>
              {tableColumns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8}>
                <span>Visible Credit: 0.00</span>
                <span>Visible Expense: 0.00</span>
                <span>Visible Net: 0.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function BranchTransactionsPage() {
  return (
    <section className="page-section bt-page">
      <div className="bt-top">
        <div>
          <h2>Branch Transactions</h2>
          <p>
            Credit (fees) &amp; Debit (expenses) ledger for <strong>All Branches.</strong>
          </p>
        </div>
        <button type="button" className="bt-branch-link">
          Branch: All Branches
        </button>
      </div>

      <div className="bt-cards-grid">
        {summaryCards.map((card) => (
          <SummaryCard key={card.title} {...card} />
        ))}
      </div>

      <FilterBar />
      <TransactionsTable />
    </section>
  );
}
