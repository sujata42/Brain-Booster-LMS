const cards = [
  "We ......happy?",
  "what is your.... school?",
  "She ......my friend.",
  "Grammar(5marks) I ..... a boy.",
  "Colour of sky is",
  "Plural of book is",
  "Choose the Correct Spelling",
  "A person who teaches is a-------",
  "Vocabulary (5marks)"
];

export function QuestionBankPage() {
  return (
    <section className="page-section exam-page">
      <div className="exam-head-row exam-head-row-compact">
        <h2>Question Bank</h2>
        <button type="button" className="exam-outline-btn exam-outline-indigo">
          Back
        </button>
      </div>

      <article className="exam-card">
        <div className="exam-qb-header-row">
          <input type="text" placeholder="Search text / tag / type" />
          <select defaultValue="All Groups">
            <option>All Groups</option>
          </select>
          <button type="button" className="exam-primary-btn">
            Search
          </button>
        </div>

        <div className="exam-qb-grid">
          {cards.map((title) => (
            <article key={title} className="exam-qb-grid-card">
              <span>MCQ</span>
              <p>{title}</p>
              <button type="button" className="exam-outline-btn exam-outline-blue">
                Push to Exam
              </button>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}

