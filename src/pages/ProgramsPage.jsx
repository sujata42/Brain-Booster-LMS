import { useState } from "react";

function ProgramsListView({ onAdd }) {
  return (
    <>
      <section className="prog-hero">
        <h2>Programs</h2>
        <p>Pick a program to show details to students at reception.</p>
      </section>

      <section className="prog-toolbar">
        <div className="prog-search-row">
          <input type="text" placeholder="Search by title / department" />
          <button type="button" className="prog-search-btn">
            Search
          </button>
        </div>
        <button type="button" className="prog-add-btn" onClick={onAdd}>
          +Add Program
        </button>
      </section>

      <section className="prog-card-grid">
        <article className="prog-card">
          <span className="prog-chip">Program</span>
          <h3>ABACUS / अबॅकस</h3>
          <p>“अंकांशी खेळा, बुद्धीला बळ द्या.”</p>
          <div className="prog-btn-row">
            <button type="button" className="prog-btn-outline-dark">
              View Details
            </button>
            <button type="button" className="prog-btn-outline">
              Brochure
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

function AddProgramForm({ onCancel }) {
  return (
    <>
      <section className="prog-hero">
        <h2>Add Program</h2>
        <p>Enter details students will see on the reception page.</p>
      </section>

      <section className="prog-form-card">
        <form className="prog-form-grid">
          <label className="span-2">
            Title <span className="req">*</span>
            <input type="text" placeholder="e.g., B.Tech -Civil Engineering" />
          </label>
          <label className="span-2">
            Slug <span className="muted">(auto if blank)</span>
            <input type="text" placeholder="btech-civil-engineering" />
            <small>lowercase letters, numbers, hyphens only</small>
          </label>

          <label className="span-2">
            Department
            <input type="text" defaultValue="Civil Engineering" />
          </label>
          <label>
            Duration
            <input type="text" defaultValue="4 Years (8 Semesters)" />
          </label>
          <label>
            Branch
            <select defaultValue="">
              <option value="">— None —</option>
              <option>Shivajinagar</option>
              <option>Hadapsar</option>
            </select>
          </label>

          <label className="span-4">
            Short Tagline
            <input type="text" placeholder="Build the world with strong foundations." />
          </label>

          <label>
            Brochure URL
            <input type="text" placeholder="https://.../brochure.pdf" />
          </label>
          <label>
            Apply URL
            <input type="text" placeholder="https://.../apply" />
          </label>
          <label className="span-2">
            Media Link
            <input type="text" placeholder="https://example.com/video.mp4 or https://youtu.be/ID" />
            <small>Any valid link (MP4, YouTube, Vimeo, etc.).</small>
          </label>

          <label className="span-4">
            Highlights
            <textarea rows={4} placeholder="Experienced faculty, labs, industry exposure" />
          </label>

          <label className="span-2">
            Eligibility
            <textarea rows={4} placeholder="10+2 with PCM/entrance" />
          </label>
          <label className="span-2">
            Fees
            <textarea rows={4} placeholder="As per university norms" />
          </label>

          <label className="span-2">
            Outcomes
            <textarea rows={4} placeholder="Graduate outcomes" />
          </label>
          <label className="span-2">
            Career Paths
            <textarea rows={4} placeholder="Job roles" />
          </label>

          <label className="span-4">
            Curriculum JSON
            <textarea rows={4} placeholder={'[{"term":"Semester 1","items":["..."]}]'} />
            <small>
              {'Example: [{"term":"Semester 1","items":["Mathematics I","Physics","Engineering Graphics"]}]'}
            </small>
          </label>

          <label className="span-4">
            Facilities
            <textarea rows={4} placeholder="Concrete lab, Survey lab, ..." />
          </label>

          <label className="span-2">
            Hero Image URL
            <input type="text" placeholder="https://.../banner.jpg" />
          </label>
          <label>
            Meta Title
            <input type="text" />
          </label>
          <label>
            Status
            <select defaultValue="Published">
              <option>Published</option>
              <option>Draft</option>
            </select>
          </label>

          <label className="span-4">
            Meta Description
            <input type="text" />
          </label>
        </form>

        <div className="prog-form-actions">
          <button type="button" className="prog-btn-outline" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="prog-save-btn">
            Save Program
          </button>
        </div>
      </section>
    </>
  );
}

export function ProgramsPage() {
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <section className="page-section prog-page">
      {!isAddMode ? (
        <ProgramsListView onAdd={() => setIsAddMode(true)} />
      ) : (
        <AddProgramForm onCancel={() => setIsAddMode(false)} />
      )}
    </section>
  );
}
