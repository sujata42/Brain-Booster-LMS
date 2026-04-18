const myBatchCards = [
  {
    title: "1-NOV-25",
    course: "SPOKEN ENGLISH",
    branch: "Shivajinagar",
    range: "15-11-2025 - 16-03-2026",
    time: "08:30:00 - 09:30:00",
    days: "Mon · Tue · Wed · Thu · Fri · Sat",
    trainers: ["Ishan Bhokarikar", "Rahul Takale", "Rutuja Ahire"],
    students: 1
  },
  {
    title: "SDFSF",
    course: "SPOKEN ENGLISH",
    branch: "Shivajinagar",
    range: "09-10-2025 - 14-10-2025",
    time: "00:00:00 - 13:01:00",
    days: "Mon · Tue · Wed · Thu · Fri",
    trainers: ["Ishan Bhokarikar"],
    students: 1
  },
  {
    title: "German",
    course: "GERMAN",
    branch: "Shivajinagar",
    range: "26-09-2025 - 30-09-2025",
    time: "08:34:00 - 10:35:00",
    days: "Mon · Tue · Wed · Thu · Fri",
    trainers: ["Rahul Takale", "Ishan Bhokarikar"],
    students: 1
  },
  {
    title: "05.00 TO 06.00",
    course: "SPOKEN ENGLISH",
    branch: "Shivajinagar",
    range: "23-09-2025 - 23-01-2026",
    time: "17:00:00 - 18:00:00",
    days: "Mon · Tue · Wed · Thu · Fri · Sat",
    trainers: ["Ishan Bhokarikar", "Rahul Takale", "Rutuja Ahire"],
    students: 1
  },
  {
    title: "NEW 05 TO 06",
    course: "SPOKEN ENGLISH",
    branch: "Shivajinagar",
    range: "10-09-2025 - 13-09-2025",
    time: "17:00:00 - 18:00:00",
    days: "Mon · Tue · Wed · Thu · Fri · Sat",
    trainers: ["Rahul Takale", "Ishan Bhokarikar"],
    students: 0
  }
];

function MyBatchCard({ batch }) {
  return (
    <article className="lms-batch-card">
      <div className="lms-card-head">
        <h3>{batch.title}</h3>
        <span>Incomplete</span>
      </div>
      <div className="lms-chip-row">
        <em>{batch.course}</em>
        <em>{batch.branch}</em>
      </div>
      <div className="lms-chip-row">
        <em>{batch.range}</em>
        <em>{batch.time}</em>
      </div>
      <div className="lms-chip-row">
        <em>{batch.days}</em>
      </div>
      <div className="lms-trainer-row">
        {batch.trainers.map((trainer) => (
          <span key={trainer}>{trainer}</span>
        ))}
      </div>
      <div className="lms-card-foot lms-card-foot-actions">
        <b>{batch.students} Student(s)</b>
        <div className="lms-mini-ring">0%</div>
        <p>Batch Timeline</p>
      </div>
      <div className="lms-action-row">
        <button type="button" className="lms-att-btn">
          Student Attendance
        </button>
        <button type="button" className="lms-detail-btn">
          Details
        </button>
      </div>
    </article>
  );
}

export function MyBatchesPage() {
  return (
    <section className="page-section lms-page">
      <div className="lms-page-head">
        <div>
          <h2>My Batches</h2>
          <p>These are the batches assigned to you. Use search to quickly find one.</p>
        </div>
        <div className="lms-top-controls">
          <input type="text" placeholder="Search by Title / Course / Trainer" />
        </div>
      </div>

      <section className="lms-panel">
        <article className="lms-total-card lms-total-assigned">
          <h3>Total Batches</h3>
          <div>
            <strong>5</strong>
            <span>Assigned to me</span>
          </div>
          <i />
        </article>
        <div className="lms-batch-grid">
          {myBatchCards.map((batch) => (
            <MyBatchCard key={batch.title} batch={batch} />
          ))}
        </div>
      </section>
    </section>
  );
}

