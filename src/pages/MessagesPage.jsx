import { useState } from "react";

const logLines = [
  "[] SMS 919421223903 sent - Hi Ishan this is Test Message",
  "[] SMS 919421223903 failed - Hi Ishan This is test message",
  "[] SMS 919421223903 sent Welcome - Hi Ishan 255 without 91",
  "[] SMS 919421223903 sent Welcome - Hi Ishan 255",
  "[] SMS 919421223903 sent Welcome - Hi Ishan 246",
  "[] SMS 919421223903 failed - ishan 246",
  "[] SMS 919421223903 failed - Hi ishan 2:30",
  "[] SMS 919421223903 failed - Ishan sms",
  "[] SMS 919421223903 sent Welcome - Hi Ishan",
  "[] SMS 919421223903 failed - ISHAN 124141241 {{date}} {{amount}}",
  "[] SMS 919421223903 failed - ISHAN 124141241",
  "[] WHATSAPP 919421223903 failed - ISHAN 124141241",
  "[] WHATSAPP 919421223903 failed - ISHAN 124141241"
];

function SendTab() {
  return (
    <section className="msg-card">
      <div className="msg-section-head">
        <h3>Message Center</h3>
        <p>Pick targets → review → choose channel &amp; template → send</p>
      </div>

      <div className="msg-send-grid">
        <div className="msg-subcard">
          <h4>Select Target</h4>
          <div className="msg-radio-row">
            <label><input type="radio" name="target" defaultChecked /> Enquiry</label>
            <label><input type="radio" name="target" /> Admission</label>
            <label><input type="radio" name="target" /> Upload</label>
          </div>

          <div className="msg-grid-2">
            <label>From date<input type="date" /></label>
            <label>To date<input type="date" /></label>
          </div>

          <label>Status *<select defaultValue=""><option value="" disabled>Select status</option></select></label>

          <div className="msg-grid-3">
            <label>Course<select defaultValue=""><option value="">—</option></select></label>
            <label>Source<select defaultValue=""><option value="">—</option></select></label>
            <label>City<select defaultValue=""><option value="">—</option></select></label>
          </div>

          <div className="msg-btn-row">
            <button type="button" className="msg-btn-light">Reset</button>
            <button type="button" className="msg-btn-primary">GO</button>
          </div>

          <div className="msg-table-box">
            <div className="msg-table-head">
              <strong>Enquiry Campaign</strong>
              <span>Tick to select (row highlights in green)</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Courses</th>
                  <th>Status</th>
                  <th>City</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan={8}>No enquiries found.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="msg-subcard">
          <div className="msg-highlight-head">
            <h4>Add Campaign</h4>
            <p>Review selection → choose channel/template → send</p>
          </div>

          <div className="msg-warning">
            If your account disallows plain text SMS, select a Flow template.
          </div>

          <div className="msg-grid-2">
            <label>Channel<select defaultValue="Both"><option>Both</option><option>SMS</option><option>WhatsApp</option></select></label>
            <label>Template<select defaultValue="new"><option value="new">— New message —</option><option value="welcome">Welcome SMS</option></select></label>
          </div>

          <label>Message<textarea rows={5} defaultValue="Hi {{name}}, ..." /></label>

          <div className="msg-preview-row">
            <button type="button" className="msg-btn-light">Preview</button>
            <span>Vars: {"{{name}} {{date}} {{amount}}"}</span>
          </div>

          <div className="msg-preview-box">
            <strong>Preview</strong>
            <p>—</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TemplatesTab() {
  return (
    <section className="msg-card">
      <div className="msg-section-head">
        <h3>Templates</h3>
      </div>
      <div className="msg-template-form">
        <label>Name<input type="text" defaultValue="Welcome SMS" /></label>
        <div className="msg-grid-2">
          <label>Channel<select defaultValue="SMS"><option>SMS</option><option>WhatsApp</option></select></label>
          <label>MSG91 Template ID / WA template name<input type="text" placeholder="e.g., 123abc456 or wa_template_name" /></label>
        </div>
        <label>Body<textarea rows={6} defaultValue="Hi {{name}}, ..." /></label>
        <div className="msg-btn-row">
          <button type="button" className="msg-btn-primary">Save Template</button>
          <button type="button" className="msg-btn-light">Reset</button>
        </div>
      </div>

      <div className="msg-active-block">
        <h4>Active</h4>
        <div className="msg-active-row">
          <div>
            <strong>"Reminder: Fees pending"</strong>
            <span>sms</span>
            <p>"Reminder: Fees pending - ₹[amount]. Please pay at the earliest."</p>
          </div>
          <div className="msg-btn-row">
            <button type="button" className="msg-btn-light">Edit</button>
            <button type="button" className="msg-btn-light">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogsTab() {
  return (
    <section className="msg-card">
      <div className="msg-section-head msg-section-head-inline">
        <h3>Logs</h3>
        <p>Local DB + Provider</p>
      </div>
      <div className="msg-log-box">
        <h4>Local (DB) — Latest 100</h4>
        <pre>{logLines.join("\n")}</pre>
      </div>
    </section>
  );
}

export function MessagesPage() {
  const [tab, setTab] = useState("send");

  return (
    <section className="page-section msg-page">
      <div className="msg-tabs-row">
        <div className="msg-tabs">
          <button type="button" className={tab === "send" ? "active" : ""} onClick={() => setTab("send")}>Send</button>
          <button type="button" className={tab === "templates" ? "active" : ""} onClick={() => setTab("templates")}>Templates</button>
          <button type="button" className={tab === "logs" ? "active" : ""} onClick={() => setTab("logs")}>Logs</button>
        </div>
        <p className="msg-shortcut">Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to send</p>
      </div>

      {tab === "send" && <SendTab />}
      {tab === "templates" && <TemplatesTab />}
      {tab === "logs" && <LogsTab />}
    </section>
  );
}
