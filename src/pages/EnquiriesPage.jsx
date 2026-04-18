export function EnquiriesPage() {
  return (
    <section className="page-section enquiries-page">
      <div className="enquiries-header">
        <div className="page-heading">
          <h2>My Enquiries (By Subject)</h2>
          <p>
            You&apos;re viewing enquiries limited to your course categories.
            <span className="enquiries-chip">Handwriting</span>
          </p>
        </div>
        <button className="enquiries-ghost-button" type="button">
          &larr; All Enquiries
        </button>
      </div>

      <div className="enquiries-metrics-grid">
        <article className="enquiry-metric-card enquiry-metric-card-primary">
          <div className="enquiry-metric-title">Total Enquiries</div>
          <strong>0</strong>
          <div className="enquiry-metric-bottom">
            <span>
              <b>0</b>
              This Month
            </span>
            <span>
              <b>0</b>
              Not Interested
            </span>
            <span>
              <b>0</b>
              Last Month
            </span>
          </div>
        </article>

        <article className="enquiry-metric-card">
          <div className="enquiry-metric-title">Today&apos;s Followup</div>
          <strong>0</strong>
          <div className="enquiry-metric-bottom">
            <span>
              <b>0</b>
              Due
            </span>
            <span>
              <b>0</b>
              This Month
            </span>
          </div>
        </article>

        <article className="enquiry-metric-card">
          <div className="enquiry-metric-title">Today&apos;s Enquiries</div>
          <strong>0</strong>
          <div className="enquiry-metric-bottom">
            <span>
              <b>0</b>
              Yesterday Enq
            </span>
            <span>
              <b>0</b>
              This Week Enq
            </span>
          </div>
        </article>

        <article className="enquiry-metric-card">
          <div className="enquiry-metric-title">Enquiries by Source</div>
          <p className="enquiry-no-data">No data</p>
        </article>
      </div>

      <div className="table-card enquiries-table-card">
        <div className="enquiries-table-head">
          <h3>Enquiries</h3>
          <div className="enquiries-table-actions">
            <label className="enquiries-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search name, email or mobile"
                aria-label="Search enquiries"
              />
            </label>
            <button type="button" className="enquiries-link-button">
              Share Link
            </button>
            <button type="button" className="enquiries-outline-button">
              Export
            </button>
            <button type="button" className="enquiries-primary-button">
              + Add Enquiry
            </button>
          </div>
        </div>

        <div className="enquiries-table-wrap">
          <table className="enquiries-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" aria-label="Select all enquiries" />
                </th>
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
              <tr className="enquiries-empty-row">
                <td colSpan={8}>No enquiries match the current filter/search.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="enquiries-table-footer">
          <label>
            Rows per page:
            <select defaultValue="25">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </label>
          <p>Showing 0-0 of 0</p>
          <div className="enquiries-pagination">
            <button type="button" disabled>
              &lsaquo;
            </button>
            <button type="button" className="enquiries-page-active">
              1
            </button>
            <button type="button" disabled>
              &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
