import { useState } from "react";

const batchCards = [
  {
    title: "1-NOV-25",
    course: "SPOKEN ENGLISH",
    range: "15-11-2025 - 16-03-2026",
    branch: "Shivajinagar",
    time: "08:30:00 - 09:30:00",
    days: "Mon · Tue · Wed · Thu · Fri · Sat",
    trainers: ["Ishan Bhokarikar", "Rahul Takale", "Rutuja Ahire"],
    students: 1
  },
  {
    title: "Demo Batch",
    course: "Abacus level 1",
    range: "18-10-2025 - 19-01-2026",
    branch: "Aloknagar",
    time: "12:30:00 - 13:30:00",
    days: "Mon · Tue · Wed · Thu · Fri",
    trainers: ["Ishan Bhokarikar", "Rahul Takale"],
    students: 0
  },
  {
    title: "1ST BATCH",
    course: "SPOKEN ENGLISH",
    range: "10-10-2025 - 14-10-2025",
    branch: "Shivajinagar",
    time: "09:00:00 - 10:00:00",
    days: "Mon · Tue · Wed · Thu · Fri · Sat",
    trainers: ["Rahul Takale"],
    students: 1
  },
  {
    title: "SDFSF",
    course: "SPOKEN ENGLISH",
    range: "09-10-2025 - 14-10-2025",
    branch: "Shivajinagar",
    time: "00:00:00 - 13:01:00",
    days: "Mon · Tue · Wed · Thu · Fri",
    trainers: ["Ishan Bhokarikar"],
    students: 1
  },
  {
    title: "AA ABACUS",
    course: "Abacus level 1",
    range: "05-10-2025 - 12-10-2025",
    branch: "Shivajinagar",
    time: "18:00:00 - 20:00:00",
    days: "Sun · Sat",
    trainers: ["Poonam Gaikwad"],
    students: 0
  },
  {
    title: "German",
    course: "GERMAN",
    range: "26-09-2025 - 30-09-2025",
    branch: "Shivajinagar",
    time: "08:34:00 - 10:35:00",
    days: "Mon · Tue · Wed · Thu · Fri",
    trainers: ["Rahul Takale", "Ishan Bhokarikar"],
    students: 1
  },
  {
    title: "05.00 TO 06.00",
    course: "SPOKEN ENGLISH",
    range: "23-09-2025 - 23-01-2026",
    branch: "Shivajinagar",
    time: "17:00:00 - 18:00:00",
    days: "Mon · Tue · Wed · Thu · Fri · Sat",
    trainers: ["Ishan Bhokarikar", "Rahul Takale", "Rutuja Ahire"],
    students: 1
  },
  {
    title: "SEP- BATCH 07-00 TO 08.00",
    course: "SPOKEN ENGLISH",
    range: "10-09-2025 - 13-09-2025",
    branch: "Shivajinagar",
    time: "19:00:00 - 20:00:00",
    days: "Mon · Tue · Wed · Thu · Fri · Sat",
    trainers: ["Rahul Takale"],
    students: 3
  },
  {
    title: "NEW 05 TO 06",
    course: "SPOKEN ENGLISH",
    range: "10-09-2025 - 13-09-2025",
    branch: "Shivajinagar",
    time: "17:00:00 - 18:00:00",
    days: "Mon · Tue · Wed · Thu · Fri · Sat",
    trainers: ["Rahul Takale", "Ishan Bhokarikar"],
    students: 0
  }
];

function AddBatchModal({ open, onClose, onSubmit }) {
  const initialForm = {
    branch: "",
    title: "",
    course: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    faculties: "",
    isOnline: false
  };
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit() {
    if (!form.branch || !form.title || !form.course) {
      return;
    }

    onSubmit(form);
    setForm(initialForm);
    onClose();
  }

  function handleReset() {
    setForm(initialForm);
  }

  if (!open) return null;

  return (
    <div className="lms-modal-backdrop" role="presentation" onClick={onClose}>
      <section className="lms-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <header>
          <h3>Add Batch</h3>
          <button type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <div className="lms-modal-grid">
          <label>
            Branch *
            <select name="branch" value={form.branch} onChange={handleChange}>
              <option value="">Select Branch</option>
              <option>Shivajinagar</option>
              <option>Aloknagar</option>
            </select>
          </label>
          <label>
            Batch Title *
            <input name="title" type="text" value={form.title} onChange={handleChange} />
          </label>
          <label>
            Course *
            <select name="course" value={form.course} onChange={handleChange}>
              <option value="">Select Course</option>
              <option>SPOKEN ENGLISH</option>
              <option>Abacus level 1</option>
              <option>GERMAN</option>
            </select>
          </label>

          <div className="lms-weekdays">
            <span>Weekdays (classes happen on)</span>
            <div>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <button key={d} type="button" className={["Mon", "Tue", "Wed", "Thu", "Fri"].includes(d) ? "active" : ""}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          <label>
            Start Date *
            <input name="startDate" type="text" placeholder="mm/dd/yyyy" value={form.startDate} onChange={handleChange} />
          </label>
          <label>
            Expected End Date *
            <input name="endDate" type="text" placeholder="mm/dd/yyyy" value={form.endDate} onChange={handleChange} />
          </label>
          <label>
            Start Time *
            <input name="startTime" type="text" placeholder="--:-- --" value={form.startTime} onChange={handleChange} />
          </label>
          <label>
            End Time *
            <input name="endTime" type="text" placeholder="--:-- --" value={form.endTime} onChange={handleChange} />
          </label>

          <label className="span-2">
            Faculties *
            <input name="faculties" type="text" placeholder="Select trainer(s)..." value={form.faculties} onChange={handleChange} />
          </label>

          <label className="lms-toggle-row span-2">
            <input name="isOnline" type="checkbox" checked={form.isOnline} onChange={handleChange} />
            Online batch
          </label>
          <label className="span-2">
            Live Streaming Link
            <input type="text" placeholder="https://" />
          </label>
          <label className="span-2">
            Description
            <textarea rows={4} placeholder="Description" />
          </label>
        </div>

        <footer>
          <button type="button" className="lms-btn-light" onClick={handleReset}>
            Reset
          </button>
          <button type="button" className="lms-btn-solid" onClick={handleSubmit}>
            Submit
          </button>
        </footer>
      </section>
    </div>
  );
}

function BatchCard({ batch }) {
  return (
    <article className="lms-batch-card">
      <div className="lms-card-head">
        <h3>{batch.title}</h3>
        <span>Incomplete</span>
      </div>
      <div className="lms-chip-row">
        <em>{batch.course}</em>
        <em>{batch.range}</em>
      </div>
      <div className="lms-chip-row">
        <em>{batch.branch}</em>
        <em>{batch.time}</em>
      </div>
      <div className="lms-chip-row">
        <em>{batch.days}</em>
        <strong>Offline</strong>
      </div>
      <div className="lms-trainer-row">
        {batch.trainers.map((trainer) => (
          <span key={trainer}>{trainer}</span>
        ))}
      </div>
      <div className="lms-card-foot">
        <b>{batch.students} Student(s)</b>
        <div className="lms-mini-ring">0%</div>
        <p>Batch Timeline</p>
      </div>
    </article>
  );
}

export function BatchesPage() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [batches, setBatches] = useState(batchCards);

  function handleAddBatch(form) {
    const range = `${form.startDate || "-"} - ${form.endDate || "-"}`;
    const time = `${form.startTime || "--:--"} - ${form.endTime || "--:--"}`;
    const trainers = form.faculties
      ? form.faculties.split(",").map((item) => item.trim()).filter(Boolean)
      : ["Trainer"];

    const newBatch = {
      title: form.title,
      course: form.course,
      range,
      branch: form.branch,
      time,
      days: "Mon · Tue · Wed · Thu · Fri",
      trainers,
      students: 0
    };

    setBatches((current) => [newBatch, ...current]);
  }

  return (
    <section className="page-section lms-page">
      <div className="lms-page-head">
        <div>
          <h2>Batch Management</h2>
          <p>Manage, view, or add batches. Each card shows progress, trainers, and schedule.</p>
        </div>
        <div className="lms-top-controls">
          <select defaultValue="All my batches">
            <option>All my batches</option>
          </select>
          <select defaultValue="All Batches">
            <option>All Batches</option>
          </select>
          <input type="text" placeholder="Search by Title or Course" />
          <button type="button" className="lms-btn-solid" onClick={() => setIsAddOpen(true)}>
            + Add Batch
          </button>
        </div>
      </div>

      <section className="lms-panel">
        <article className="lms-total-card">
          <h3>Total Batches</h3>
          <div>
            <strong>{batches.length}</strong>
            <span>My Branches</span>
          </div>
          <i />
        </article>

        <div className="lms-batch-grid">
          {batches.map((batch) => (
            <BatchCard key={`${batch.title}-${batch.range}-${batch.time}`} batch={batch} />
          ))}
        </div>
      </section>

      <AddBatchModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleAddBatch}
      />
    </section>
  );
}
