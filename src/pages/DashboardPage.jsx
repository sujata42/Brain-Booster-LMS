const summaryCards = [
  {
    title: "Expenses",
    value: "₹0",
    subValue: "₹0.00 last month",
    footer: "₹58,022.00",
    accent: "gold"
  },
  {
    title: "Enquiries",
    value: "0",
    subValue: "0 last month",
    footer: "211",
    accent: "cyan"
  },
  {
    title: "Admissions",
    value: "0",
    subValue: "0 last month",
    footer: "50",
    accent: "gold"
  },
  {
    title: "Batches",
    value: "8",
    subValue: "0 current",
    footer: "incomplete shown",
    accent: "green"
  },
  {
    title: "Collection",
    value: "₹0",
    subValue: "₹0.00 last month",
    footer: "₹217,950.00",
    accent: "pink"
  }
];

const recentActivity = [
  {
    tag: "Admission",
    text: "Admission created for SHITAL MHASKE",
    time: "2026-01-16 15:32:59"
  },
  {
    tag: "Enquiry",
    text: "Enquiry added for SHITAL MHASKE",
    time: "2026-01-04 19:10:26"
  },
  {
    tag: "Admission",
    text: "Admission created for MANSVI JADHAV",
    time: "2026-01-02 21:26:08"
  }
];

const sourceStats = [
  { label: "Reference", value: 78 },
  { label: "Poll banner", value: 48 },
  { label: "Leaflets", value: 43 }
];

export function DashboardPage() {
  return (
    <section className="page-section dashboard-page">
      <div className="dashboard-hero">
        <div className="hero-target-card">
          <div>
            <h3>Target is not set for Apr 2026</h3>
            <div className="hero-badges">
              <span className="hero-pill">-</span>
              <span className="hero-pill">T:0 - A:0</span>
            </div>
          </div>
          <div className="hero-progress-ring">0%</div>
        </div>

        <div className="dashboard-summary-grid">
          {summaryCards.map((card) => (
            <article key={card.title} className="summary-card">
              <div className={`summary-card-icon summary-card-icon-${card.accent}`}>
                {card.title.slice(0, 1)}
              </div>
              <div className="summary-card-body">
                <h3>{card.title}</h3>
                <strong>{card.value}</strong>
                <div className="summary-card-meta">
                  <span>Total</span>
                  <span>{card.subValue}</span>
                </div>
                <div className="summary-card-footer">
                  <div className={`mini-progress mini-progress-${card.accent}`} />
                  <span>{card.footer}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="dashboard-side-stack">
          <div className="clock-card">
            <strong>11:43:54</strong>
            <span className="clock-pill">PM</span>
            <span>Tue, Apr 14, 2026</span>
          </div>

          <div className="table-card birthday-card">
            <div className="panel-header">
              <h3>Birthdays</h3>
              <button className="text-chip">List</button>
            </div>
            <div className="birthday-avatar">SD</div>
            <p className="birthday-empty">No upcoming</p>
            <div className="birthday-controls">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="table-card activity-card">
            <div className="panel-header">
              <h3>Recent Activity</h3>
              <span className="panel-meta">Latest</span>
            </div>
            <div className="activity-list">
              {recentActivity.map((item) => (
                <div key={`${item.tag}-${item.time}`} className="activity-item">
                  <span className={`activity-tag activity-tag-${item.tag.toLowerCase()}`}>
                    {item.tag}
                  </span>
                  <strong>{item.text}</strong>
                  <small>{item.time}</small>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="dashboard-main-grid">
        <div className="table-card">
          <div className="panel-header">
            <h3>Course Enrollment</h3>
            <span className="panel-meta">This Month</span>
          </div>
          <div className="simple-table">
            <div className="simple-table-head">
              <span>Course</span>
              <span>New</span>
              <span>Total</span>
              <span>Status</span>
            </div>
            <div className="simple-table-row">
              <span>SPOKEN ENGLISH</span>
              <span>0</span>
              <span>46</span>
              <span className="status-open">Open</span>
            </div>
            <div className="simple-table-row">
              <span>Abacus level 1</span>
              <span>0</span>
              <span>4</span>
              <span className="status-open">Open</span>
            </div>
          </div>
        </div>

        <div className="table-card">
          <div className="panel-header">
            <h3>Fee: Today&apos;s Collection</h3>
            <button className="text-chip">Export</button>
          </div>
          <div className="empty-panel">No receipts today</div>
        </div>

        <div className="table-card">
          <div className="panel-header">
            <h3>Leads By Source</h3>
            <span className="panel-meta">This Month</span>
          </div>
          <div className="source-list">
            {sourceStats.map((item) => (
              <div key={item.label} className="source-row">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="table-card chart-panel">
          <div className="panel-header">
            <h3>Enquiries vs Admissions</h3>
            <span className="panel-meta">This Year</span>
          </div>
          <div className="fake-chart fake-chart-bars">
            <div className="bar-cluster">
              <div className="bar bar-teal tall" />
              <div className="bar bar-gold short" />
            </div>
            <div className="chart-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
            </div>
          </div>
        </div>

        <div className="table-card chart-panel">
          <div className="panel-header">
            <h3>Branch-wise</h3>
            <span className="panel-meta">This Year</span>
          </div>
          <div className="fake-chart fake-chart-bars">
            <div className="branch-bars">
              <div className="branch-column">
                <div className="bar bar-teal tiny" />
                <div className="bar bar-green tiny" />
                <span>Naiknagar</span>
              </div>
              <div className="branch-column">
                <div className="bar bar-teal huge" />
                <div className="bar bar-green medium" />
                <span>Shivajinagar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="table-card calendar-card">
          <div className="panel-header">
            <h3>Calendar</h3>
            <div className="calendar-actions">
              <button className="text-chip">+ Holiday</button>
              <button className="text-chip">+ Reminder</button>
              <button className="text-chip">Today</button>
            </div>
          </div>
          <div className="calendar-toolbar">
            <div className="calendar-nav">
              <button className="calendar-button">‹</button>
              <button className="calendar-button">›</button>
              <button className="calendar-today">Today</button>
            </div>
            <strong>APRIL 2026</strong>
            <div className="calendar-modes">
              <button className="calendar-mode-active">Month</button>
              <button>Week</button>
              <button>Day</button>
            </div>
          </div>
          <div className="calendar-grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="calendar-head-cell">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, index) => (
              <div key={index} className="calendar-cell">
                {index < 30 ? index + 1 : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
