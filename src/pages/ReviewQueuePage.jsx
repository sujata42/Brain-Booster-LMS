import { Link } from "react-router-dom";

export function ReviewQueuePage() {
  return (
    <section className="page-section exam-page">
      <div className="exam-head-row exam-head-row-compact">
        <h2>Manual Review Queue</h2>
        <Link to="/examinations" className="exam-outline-btn exam-outline-indigo">
          Back to Examinations
        </Link>
      </div>

      <article className="exam-card">
        <div className="exam-review-head">
          <span>Candidate</span>
          <span>Phone</span>
          <span>Question (excerpt)</span>
          <span>Type</span>
        </div>
        <div className="exam-review-empty">No items need review.</div>
      </article>
    </section>
  );
}

