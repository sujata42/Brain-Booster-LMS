import { useState } from "react";

const metricCards = [
  {
    title: "Total Admissions",
    value: 50,
    last: 0,
    current: 0,
    tone: "blue",
    icon: "users"
  },
  {
    title: "Pending Admissions",
    value: 3,
    last: 0,
    current: 0,
    tone: "yellow",
    icon: "pulse"
  },
  {
    title: "Cancelled",
    value: 0,
    last: 0,
    current: 0,
    tone: "pink",
    icon: "cancel"
  },
  {
    title: "Today's Admission",
    value: 0,
    last: 0,
    current: 0,
    tone: "green",
    icon: "bag",
    lastLabel: "Yesterday",
    currentLabel: "This Week"
  }
];

const admissionRows = [
  {
    type: "month",
    label: "JANUARY 2026"
  },
  {
    type: "row",
    number: "BB120",
    date: "16-Jan-2026",
    name: "SHITAL MHASKE",
    mobile: "8668702166",
    owner: "Ishan Bhokarikar",
    course: "SPOKEN ENGLISH",
    batch: "1ST BATCH",
    status: "Pending",
    next: "Next: 16-Jan-2026",
    overdue: true
  },
  {
    type: "row",
    number: "BB119",
    date: "02-Jan-2026",
    name: "MANSVI JADHAV",
    mobile: "8999551226",
    owner: "Rahul Takale",
    course: "SPOKEN ENGLISH",
    batch: "-",
    status: "Paid"
  },
  {
    type: "month",
    label: "DECEMBER 2025"
  },
  {
    type: "row",
    number: "BB118",
    date: "29-Dec-2025",
    name: "DHANSHREE MAGAR",
    mobile: "8275388202",
    owner: "Rahul Takale",
    course: "SPOKEN ENGLISH",
    batch: "-",
    status: "Pending",
    next: "Next: 28-Jan-2026",
    overdue: true
  }
];

function AdmissionMetricIcon({ icon }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true };
  if (icon === "users") {
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 19a5 5 0 0 1 10 0M17 8a3 3 0 1 1 0 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "pulse") {
    return (
      <svg {...common}>
        <path d="M3 12h4l2-4 3 8 2-4h7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "cancel") {
    return (
      <svg {...common}>
        <rect x="5" y="5" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M6 8h12l-1 11H7L6 8zM9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonTag({ name }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return <span className="admissions-avatar">{initials}</span>;
}

function ActionIcons() {
  return (
    <div className="admissions-action-icons">
      <button type="button" aria-label="View admission" className="admissions-eye-btn">
        <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
      <button type="button" aria-label="More actions" className="admissions-more-btn">
        <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
          <circle cx="12" cy="5" r="1.8" fill="currentColor" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
          <circle cx="12" cy="19" r="1.8" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}

export function AdmissionsPage() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <section className="page-section admissions-page">
      {!showAddForm ? (
        <>
          <div className="admission-metrics-grid">
            {metricCards.map((card) => (
              <article
                key={card.title}
                className={`admission-metric-card admission-metric-${card.tone}`}
              >
                <div className="admission-metric-head">
                  <span className="admission-metric-icon">
                    <AdmissionMetricIcon icon={card.icon} />
                  </span>
                  <div>
                    <div className="admission-metric-title">{card.title}</div>
                    <strong>{card.value}</strong>
                  </div>
                </div>
                <div className="admission-metric-bottom">
                  <span>
                    <b>{card.last}</b>
                    {card.lastLabel ?? "Last month"}
                  </span>
                  <span>
                    <b>{card.current}</b>
                    {card.currentLabel ?? "This month"}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="table-card admissions-table-card">
            <div className="admissions-toolbar">
              <div className="admissions-toolbar-left">
                <label className="admissions-toolbar-label">
                  Show
                  <select defaultValue="25">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                </label>
                <input type="text" placeholder="Date range" />
                <div className="admissions-search-group">
                  <input
                    type="text"
                    placeholder="Search name, email, phone, branch..."
                  />
                  <button type="button">Go</button>
                </div>
              </div>
              <div className="admissions-toolbar-right">
                <button type="button" className="admissions-reset-btn">
                  Reset
                </button>
                <button type="button" className="admissions-export-btn">
                  Export CSV
                </button>
                <button
                  type="button"
                  className="admissions-add-btn"
                  onClick={() => setShowAddForm(true)}
                >
                  + Add Admission
                </button>
              </div>
            </div>

            <div className="admissions-table-wrap">
              <table className="admissions-table">
                <thead>
                  <tr>
                    <th>Admission No</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Lead Owner</th>
                    <th>Courses</th>
                    <th>Batches</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionRows.map((row) => {
                    if (row.type === "month") {
                      return (
                        <tr key={row.label} className="admissions-month-row">
                          <td colSpan={9}>{row.label}</td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={row.number} className="admission-data-row">
                        <td>{row.number}</td>
                        <td>{row.date}</td>
                        <td>
                          <div className="admission-name-cell">
                            <PersonTag name={row.name} />
                            <div>
                              <div className="admission-name-line">{row.name}</div>
                              {row.overdue ? <span className="admission-overdue">Overdue</span> : <span className="admission-muted">-</span>}
                            </div>
                          </div>
                        </td>
                        <td>{row.mobile}</td>
                        <td>
                          <div className="admission-owner-cell">
                            <PersonTag name={row.owner} />
                            {row.owner}
                          </div>
                        </td>
                        <td>
                          <span className="admission-chip">{row.course}</span>
                        </td>
                        <td>
                          {row.batch === "-" ? <span className="admission-muted">-</span> : <span className="admission-batch-chip">{row.batch}</span>}
                        </td>
                        <td>
                          <div className="admission-status-wrap">
                            <span
                              className={
                                row.status === "Paid"
                                  ? "admissions-status-chip paid"
                                  : "admissions-status-chip"
                              }
                            >
                              {row.status}
                            </span>
                            {row.next ? <small>{row.next}</small> : null}
                          </div>
                        </td>
                        <td>
                          <ActionIcons />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="admissions-table-footer">
              <p>Showing 1 to 25 of 50 entries.</p>
              <div className="admissions-pagination">
                <button type="button" aria-label="Previous page">
                  &lsaquo;
                </button>
                <button type="button" className="active" aria-label="Page 1">
                  1
                </button>
                <button type="button" aria-label="Page 2">
                  2
                </button>
                <button type="button" aria-label="Next page">
                  &rsaquo;
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="admissions-form-header">
            <div className="page-heading">
              <h2>Add New Admission</h2>
              <p>
                Only the marked fields are required. Courses prefill from
                selected enquiry.
              </p>
            </div>
            <button
              type="button"
              className="admissions-list-btn"
              onClick={() => setShowAddForm(false)}
            >
              Admissions List
            </button>
          </div>

          <div className="admission-wizard-tabs">
            <button type="button" className="active">
              <span>STEP 1</span> Personal &amp; Course Seed
            </button>
            <button type="button">
              <span>STEP 2</span> Course Details
            </button>
            <button type="button">
              <span>STEP 3</span> Other &amp; Visibility
            </button>
            <button type="button">
              <span>STEP 4</span> Installments &amp; Summary
            </button>
          </div>

          <div className="admission-summary-pills">
            <span>Offer 0</span>
            <span>Course 0</span>
            <span>Tax 0</span>
            <span>Grand 0</span>
            <span>Addl. 0</span>
            <span>Receive 0.00</span>
          </div>

          <div className="table-card admission-form-card">
            <h3>STEP 1: Personal Details</h3>
            <form className="admission-form-grid">
              <label>
                Branch*
                <select defaultValue="Shivajinagar">
                  <option>Shivajinagar</option>
                  <option>Kothrud</option>
                  <option>Hadapsar</option>
                </select>
                <small>Visibility will be tied to this branch.</small>
              </label>
              <label className="grid-span-3">
                Select Enquiry*
                <input type="text" placeholder="Type name, mobile, or #ID" />
                <small>Pick an item from the list to prefill student &amp; courses.</small>
              </label>

              <label>
                Gender*
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                First name*
                <input type="text" />
              </label>
              <label>
                Middle Name
                <input type="text" />
              </label>
              <label>
                Last name*
                <input type="text" />
              </label>

              <label>
                Phone number*
                <input type="text" />
                <small>10 digits</small>
              </label>
              <label>
                Alternate mobile
                <input type="text" />
              </label>
              <label>
                Email address
                <input type="email" />
              </label>
              <label>
                Alternate Email address
                <input type="email" />
              </label>

              <label>
                Profession
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Student</option>
                  <option>Working Professional</option>
                  <option>Business</option>
                </select>
              </label>
              <label>
                Workplace Name
                <input type="text" />
              </label>
              <label>
                Date of Birth*
                <input type="text" placeholder="mm/dd/yyyy" />
              </label>
              <label>
                Upload Candidate Photo
                <input type="file" />
              </label>

              <label className="grid-span-4">
                Address*
                <textarea rows={3} />
              </label>

              <label>
                City
                <input type="text" />
              </label>
              <label>
                State
                <input type="text" />
              </label>
              <label>
                Pincode
                <input type="text" />
              </label>
              <label>
                Course
                <select defaultValue="">
                  <option value="" disabled>
                    Select Course
                  </option>
                  <option>Spoken English</option>
                  <option>Handwriting</option>
                  <option>Personality Development</option>
                </select>
                <small>Used to pre-fill Step-2 if Enquiry has no courses.</small>
              </label>

              <label>
                Batch
                <select defaultValue="">
                  <option value="" disabled>
                    Select Batch
                  </option>
                  <option>Morning</option>
                  <option>Evening</option>
                </select>
              </label>
              <label>
                Highest Qualification*
                <select defaultValue="">
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option>10th</option>
                  <option>12th</option>
                  <option>Graduate</option>
                </select>
              </label>
              <label>
                Experience (Years)
                <input type="text" />
              </label>
              <label>
                College Name
                <input type="text" />
              </label>

              <label>
                Passout Year
                <input type="text" />
              </label>
              <label>
                Preferred Time
                <select defaultValue="">
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </label>
              <label>
                Batch Time
                <input type="text" placeholder="e.g., 7-9 PM" />
              </label>
              <label>
                Lead Owner*
                <select defaultValue="Ishan Bhokarikar">
                  <option>Ishan Bhokarikar</option>
                  <option>Rahul Takale</option>
                </select>
              </label>

              <label>
                ID Type
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Aadhar</option>
                  <option>PAN</option>
                  <option>Passport</option>
                </select>
              </label>
              <label>
                ID Number
                <input type="text" />
              </label>
              <label>
                Caste
                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>General</option>
                  <option>OBC</option>
                  <option>SC</option>
                  <option>ST</option>
                </select>
              </label>
            </form>
            <div className="admission-form-footer">
              <button type="button">Next</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
