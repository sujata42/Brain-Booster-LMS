export function CreateExaminationPage() {
  const qbItems = [
    "We ......happy?",
    "what is your.... school?",
    "She ......my friend.",
    "Grammar(5marks) I ..... a boy.",
    "Colour of sky is",
    "Plural of book is"
  ];

  return (
    <section className="page-section exam-create-page">
      <article className="exam-card">
        <div className="exam-step-row">
          <span className="exam-step-badge">1</span>
          <h2>Create Examination</h2>
          <button type="button" className="exam-quick-btn">
            Quick Create
          </button>
          <p>Tips: /mcq /tf /short . Ctrl/⌘+Enter new . Ctrl/⌘+D duplicate</p>
        </div>

        <div className="exam-form-grid">
          <label className="span-2">
            Examination Title <b>*</b>
            <input type="text" defaultValue="Quick Test 2026-04-16 12:34" />
          </label>
          <label>
            Preset
            <select defaultValue="">
              <option value="">Choose...</option>
              <option>Default</option>
            </select>
          </label>

          <label>
            Duration (min) <b>*</b>
            <input type="number" defaultValue="60" />
          </label>
          <label>
            Start At
            <input type="text" placeholder="mm/dd/yyyy --:-- --" />
          </label>
          <label>
            End At
            <input type="text" placeholder="mm/dd/yyyy --:-- --" />
          </label>

          <label>
            Release Mode <b>*</b>
            <select defaultValue="AFTER_END">
              <option>AFTER_END</option>
              <option>INSTANT</option>
              <option>AFTER_REVIEW</option>
            </select>
          </label>
          <label>
            Attempt Limit
            <input type="number" defaultValue="1" />
          </label>
          <label>
            Negative Marking
            <span className="exam-checkbox-line">
              <input type="checkbox" />
              Enable
            </span>
          </label>

          <label className="span-3">
            Description
            <textarea rows={2} placeholder="Optional notes or student instructions" />
          </label>
        </div>
      </article>

      <article className="exam-card">
        <h3>Result & Grades</h3>
        <div className="exam-grade-grid">
          <div className="exam-grade-left">
            <label>
              Pass Percent
              <div className="exam-inline-input">
                <input type="text" placeholder="e.g. 40" />
                <span>%</span>
              </div>
            </label>
            <small>Optional. If set, result shows PASS/FAIL.</small>
          </div>
          <div className="exam-grade-right">
            <p>Define up to 5 grade bands (highest first). First band with min ≤ percent wins.</p>
            {[1, 2, 3, 4, 5].map((n) => (
              <div className="exam-grade-row" key={n}>
                <input type="text" placeholder={`Grade ${n} min %`} />
                <input type="text" placeholder={`Grade ${n} text`} />
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="exam-create-two-col">
        <section className="exam-card">
          <div className="exam-split-head">
            <h3>Assign To</h3>
            <span>Eligibility preview</span>
          </div>
          <label>
            Batches
            <input type="text" placeholder="Search batches..." />
          </label>
          <label>
            Courses
            <input type="text" placeholder="Search courses..." />
          </label>
        </section>

        <section className="exam-card">
          <div className="exam-split-head">
            <h3>Allowlist (who can join)</h3>
            <div className="exam-mini-btn-group">
              <button type="button">Import from Enquiries</button>
              <button type="button">Bulk paste</button>
            </div>
          </div>
          <p>Add specific people now: first/last/phone/DOB. (Optional — batches/courses still apply)</p>
          <div className="exam-allow-head">
            <span>First</span>
            <span>Last</span>
            <span>Phone</span>
            <span>DOB</span>
          </div>
          <button type="button" className="exam-add-row-btn">
            + Add Row
          </button>
        </section>
      </article>

      <article className="exam-card">
        <div className="exam-split-head">
          <h3>Question Bank</h3>
          <button type="button" className="exam-link-btn">
            Open full bank
          </button>
        </div>
        <div className="exam-qb-filter">
          <input type="text" placeholder="Filter by tag / difficulty / text" />
          <button type="button">Search</button>
        </div>
        <div className="exam-qb-list">
          {qbItems.map((item) => (
            <article key={item} className="exam-qb-item">
              <strong>{item}</strong>
              <span>MCQ</span>
            </article>
          ))}
        </div>
        <p className="exam-qb-help">Drag a card into the builder area to add it.</p>
      </article>

      <article className="exam-card">
        <div className="exam-step-row exam-step-row-tight">
          <span className="exam-step-badge">2</span>
          <h2>Create Questions</h2>
          <p>Use slash commands: /mcq /tf /short /numeric</p>
        </div>
        <div className="exam-question-actions">
          <button type="button">+ MCQ</button>
          <button type="button">+ True/False</button>
          <button type="button">+ Short Answer</button>
          <button type="button">+ Numeric</button>
          <span>Total: 0</span>
        </div>
      </article>

      <div className="exam-bottom-bar">
        <p>Start now + 60m: fills times quickly</p>
        <p>Save (AJAX): save & stay</p>
        <p>Save & Continue: regular submit</p>
        <div>
          <button type="button" className="exam-bottom-outline">
            Start now + 60m
          </button>
          <button type="button" className="exam-bottom-outline">
            Save (AJAX)
          </button>
          <button type="button" className="exam-bottom-solid">
            Save & Continue
          </button>
        </div>
      </div>
    </section>
  );
}

