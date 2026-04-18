export function MyAdmissionsPage() {
  return (
    <section className="page-section myadm-page">
      <div className="myadm-head">
        <div>
          <h2>My Admissions</h2>
          <p>
            Admissions only for the courses assigned to you (filtered by selected
            branch).
          </p>
        </div>
        <label className="myadm-search">
          <span aria-hidden="true">⌕</span>
          <input type="text" placeholder="Search by name, mobile, course" />
        </label>
      </div>

      <div className="myadm-table-wrap">
        <table className="myadm-table">
          <thead>
            <tr>
              <th>Admission No</th>
              <th>Student</th>
              <th>Mobile</th>
              <th>Courses</th>
              <th>Batches</th>
              <th>Branch</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7}>No admissions found for the selected branch.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
