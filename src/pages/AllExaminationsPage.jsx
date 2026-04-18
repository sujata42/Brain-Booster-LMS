import { Link } from "react-router-dom";

const rows = [
  {
    id: 1,
    title: "Quick Test 2025-10-16 09:46",
    window: null,
    release: "AFTER_END",
    duration: "60 min",
    attempts: 1
  },
  {
    id: 2,
    title: "ENTRANCE EXAM basic be",
    window: null,
    release: "INSTANT",
    duration: "10 min",
    attempts: 1
  },
  {
    id: 3,
    title: "Quick Test 2025-10-14 04:09",
    window: {
      start: "2025-10-13 04:09:00",
      end: "2025-10-14 05:09:00"
    },
    release: "AFTER_REVIEW",
    duration: "60 min",
    attempts: 10
  },
  {
    id: 4,
    title: "Quick Test 2025-10-09 05:39",
    window: {
      start: "2025-10-09 05:39:00",
      end: "2025-10-09 06:09:00"
    },
    release: "INSTANT",
    duration: "30 min",
    attempts: 5
  }
];

export function AllExaminationsPage() {
  return (
    <section className="page-section exam-page">
      <div className="exam-head-row">
        <h2>Examinations</h2>
        <Link to="/examinations/create" className="exam-primary-btn">
          Create Examination
        </Link>
      </div>

      <article className="exam-card">
        <div className="exam-toolbar">
          <input type="text" placeholder="Search by title..." />
          <p>Tip: type then press Enter</p>
        </div>

        <div className="exam-table-wrap">
          <table className="exam-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Window</th>
                <th>Release</th>
                <th>Duration</th>
                <th>Attempts</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>
                    {row.window ? (
                      <div className="exam-window">
                        <span>Start</span> {row.window.start}
                        <br />
                        <span>End</span> {row.window.end}
                      </div>
                    ) : (
                      <span className="exam-window-none">no</span>
                    )}
                  </td>
                  <td>
                    <span className="exam-release-chip">{row.release}</span>
                  </td>
                  <td>{row.duration}</td>
                  <td>{row.attempts}</td>
                  <td>
                    <div className="exam-actions">
                      <button type="button" className="exam-outline-btn exam-outline-blue">
                        Edit
                      </button>
                      <button type="button" className="exam-outline-btn exam-outline-indigo">
                        Preview
                      </button>
                      <button type="button" className="exam-outline-btn exam-outline-green">
                        Results
                      </button>
                      <button type="button" className="exam-outline-btn exam-outline-red">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

