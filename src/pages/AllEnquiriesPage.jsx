const sourceRows = [
  { name: "reference", count: 78, tone: "purple" },
  { name: "poll banner", count: 48, tone: "cyan" },
  { name: "leaflats", count: 43, tone: "green" }
];

const enquiryRows = [
  { id: 388, date: "04 Jan 2026", name: "SHITAL MHASKE", mobile: "8668702166", owner: "Rahul Takale", course: "SPOKEN ENGLISH", status: "Admitted", highlight: true },
  { id: 386, date: "02 Jan 2026", name: "NITA BANKAR", mobile: "8149409188", owner: "Rahul Takale", course: "SPOKEN ENGLISH", status: "Positive" },
  { id: 385, date: "01 Jan 2026", name: "SANSKRUTI SAH", mobile: "9905262052", owner: "Rahul Takale", course: "SPOKEN ENGLISH", status: "-" },
  { id: 384, date: "01 Jan 2026", name: "AJAY GAWARE", mobile: "9699545701", owner: "Rahul Takale", course: "SPOKEN ENGLISH", status: "Positive" },
  { id: 383, date: "01 Jan 2026", name: "VAIBHAV DESHMUKH", mobile: "9588630354", owner: "Rahul Takale", course: "SPOKEN ENGLISH", status: "Positive" },
  { id: 382, date: "31 Dec 2025", name: "DURGADEVI RAJUMANE", mobile: "7620517405", owner: "Rahul Takale", course: "SPOKEN ENGLISH", status: "Positive" },
  { id: 381, date: "29 Dec 2025", name: "MANSVI JADHAV", mobile: "8999551226", owner: "Rahul Takale", course: "SPOKEN ENGLISH", status: "Admitted", highlight: true }
];

function MiniIcon({ kind }) {
  if (kind === "share") return <span aria-hidden="true">⤴</span>;
  if (kind === "export") return <span aria-hidden="true">⇩</span>;
  if (kind === "add") return <span aria-hidden="true">＋</span>;
  if (kind === "search") return <span aria-hidden="true">⌕</span>;
  return null;
}

export function AllEnquiriesPage() {
  return (
    <section className="page-section all-enq-page">
      <div className="all-enq-metrics-grid">
        <article className="all-enq-metric all-enq-metric-primary">
          <h3>Total Enquiries</h3>
          <strong>211</strong>
          <div className="all-enq-metric-split">
            <span><b>0</b>This Month</span>
            <span><b>0</b>Not Interested</span>
            <span><b>0</b>Last Month</span>
          </div>
        </article>

        <article className="all-enq-metric">
          <h3>Today&apos;s Followup</h3>
          <strong>0</strong>
          <div className="all-enq-metric-split">
            <span><b>0</b>Due</span>
            <span><b>0</b>This Month</span>
          </div>
        </article>

        <article className="all-enq-metric">
          <h3>Today&apos;s Enquiries</h3>
          <strong>0</strong>
          <div className="all-enq-metric-split">
            <span><b>0</b>Yesterday Enq</span>
            <span><b>0</b>This Week Enq</span>
          </div>
        </article>

        <article className="all-enq-metric all-enq-source-card">
          <h3>Enquiries by Source</h3>
          <div className="all-enq-source-list">
            {sourceRows.map((source) => (
              <div key={source.name} className="all-enq-source-row">
                <span className={`dot ${source.tone}`} />
                <span>{source.name}</span>
                <b>{source.count}</b>
              </div>
            ))}
          </div>
        </article>
      </div>

      <section className="all-enq-table-card">
        <div className="all-enq-head">
          <h2>Enquiries</h2>
          <div className="all-enq-actions">
            <label className="all-enq-search">
              <MiniIcon kind="search" />
              <input type="text" placeholder="Search name, email, mobile or #ID" />
            </label>
            <button type="button" className="all-enq-action-btn">
              <MiniIcon kind="share" /> Share Link
            </button>
            <button type="button" className="all-enq-action-btn">
              <MiniIcon kind="export" /> Export
            </button>
            <button type="button" className="all-enq-action-btn primary">
              <MiniIcon kind="add" /> Add Enquiry
            </button>
          </div>
        </div>

        <div className="all-enq-table-wrap">
          <table className="all-enq-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Profile</th>
                <th>Name &amp; Email</th>
                <th>Mobile</th>
                <th>Lead Owner</th>
                <th>Courses</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {enquiryRows.map((row, idx) => (
                <tr key={row.id} className={row.highlight || idx % 2 === 0 ? "tint" : ""}>
                  <td>#{row.id}</td>
                  <td>{row.date}</td>
                  <td><span className="all-enq-avatar">{idx % 2 === 0 ? "👩" : "👨"}</span></td>
                  <td>{row.name}</td>
                  <td>{row.mobile}</td>
                  <td>
                    <span className="all-enq-owner-avatar">👨</span> {row.owner}
                  </td>
                  <td><span className="all-enq-chip">{row.course}</span></td>
                  <td>
                    {row.status === "-" ? "-" : <span className="all-enq-status">{row.status}</span>}
                  </td>
                  <td>
                    <button type="button" className="icon-btn">↪</button>
                    <button type="button" className="icon-btn fill">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="all-enq-footer">
          <label>
            Rows per page:
            <select defaultValue="25">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </label>
          <p>Showing 1-25 of 211</p>
          <div className="all-enq-pagination">
            <button type="button">‹</button>
            <button type="button" className="active">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">›</button>
          </div>
        </div>
      </section>
    </section>
  );
}
