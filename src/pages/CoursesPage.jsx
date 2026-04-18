const courseRows = [
  { id: 1, title: "Abacus level 1", subtitle: "Abacus", branch: "Shivajinagar", duration: "3 MONTH", fee: "3,100", students: 4, faculties: 2, batches: 2 },
  { id: 2, title: "GERMAN", subtitle: "German", branch: "Shivajinagar", duration: "3 MONTH", fee: "5,500", students: 0, faculties: 1, batches: 1 },
  { id: 3, title: "HANDWRITING", subtitle: "Handwriting", branch: "Shivajinagar", duration: "2 MONTH", fee: "3,000", students: 5, faculties: 0, batches: 0 },
  { id: 4, title: "SPOKEN ENGLISH", subtitle: "SPOKEN ENGLISH", branch: "Shivajinagar", duration: "4 MONTH", fee: "8,500", students: 105, faculties: 2, batches: 6 }
];

export function CoursesPage() {
  return (
    <section className="page-section lms-page">
      <div className="lms-courses-layout">
        <article className="lms-panel lms-courses-main">
          <div className="lms-courses-head">
            <h2>Courses</h2>
            <div className="lms-top-controls">
              <input type="text" placeholder="Search..." />
              <button type="button" className="lms-btn-light">
                ⌕
              </button>
              <button type="button" className="lms-btn-solid">
                + Add Course
              </button>
            </div>
          </div>

          <div className="lms-courses-table-wrap">
            <table className="lms-courses-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>COURSE NAME</th>
                  <th>BRANCH</th>
                  <th>DURATION</th>
                  <th>FEE</th>
                  <th>STUDENTS</th>
                  <th>FACULTIES</th>
                  <th>BATCHES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {courseRows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                      <strong>{row.title}</strong>
                      <span>{row.subtitle}</span>
                    </td>
                    <td>
                      <em>{row.branch}</em>
                    </td>
                    <td>{row.duration}</td>
                    <td>
                      <b>{row.fee}</b>
                    </td>
                    <td>{row.students}</td>
                    <td>{row.faculties}</td>
                    <td>{row.batches}</td>
                    <td>
                      <button type="button" className="lms-btn-light">
                        ⋮
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="lms-courses-side">
          <article className="lms-active-card">
            <h3>Active Students</h3>
            <strong>114</strong>
            <p>3 Active Courses</p>
          </article>

          <article className="lms-panel lms-popular-card">
            <h3>Popular Courses</h3>
            <div className="lms-donut" />
            <p>SPOKEN ENGLISH: 105 Students</p>
            <p>HANDWRITING: 5 Students</p>
            <p>Abacus level 1: 4 Students</p>
          </article>
        </aside>
      </div>
    </section>
  );
}

