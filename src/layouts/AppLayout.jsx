import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { to: "/messages", label: "Messages", icon: "messages" },
  { to: "/programs", label: "About Us", icon: "about" },
  { to: "/all-enquiries", label: "All Enquiries", icon: "allEnquiries" },
  { to: "/enquiries", label: "Enquiries", icon: "enquiries" },
  { to: "/admissions", label: "Admissions", icon: "admissions" },
  { to: "/my-admissions", label: "My Admissions", icon: "myAdmissions" },
  { to: "/fees", label: "Fee Management", icon: "fees" },
  { to: "/branch-transactions", label: "Branch Transactions", icon: "branchTx" },
  { to: "/expenses", label: "Expenses", icon: "expenses" }
];

function NavIcon({ icon }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true };
  switch (icon) {
    case "dashboard":
      return (
        <svg {...common}>
          <path d="M12 3l2.4 5.1L20 9l-4 3.8.9 5.2L12 15.2 7.1 18l.9-5.2L4 9l5.6-.9L12 3z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "messages":
      return (
        <svg {...common}>
          <path d="M20 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "about":
      return (
        <svg {...common}>
          <path d="M3 9l9-5 9 5-9 5-9-5zm0 6l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "allEnquiries":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 9h8M8 13h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "enquiries":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 9h8M8 13h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "admissions":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 20a5 5 0 0 1 10 0M16 10h6M19 7v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "myAdmissions":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 20a5 5 0 0 1 10 0M16.5 12l2 2 3-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "fees":
      return (
        <svg {...common}>
          <path d="M7 4h10a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 0 1 2-2zM9 9h6M9 13h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "branchTx":
      return (
        <svg {...common}>
          <path d="M3 7h14M3 7l3-3M3 7l3 3M21 17H7m14 0-3-3m3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "expenses":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 8h6M9 12h6M9 16h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "examinations":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 7h6M9 11h6M9 15h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "list":
      return (
        <svg {...common}>
          <path d="M10 7h10M10 12h10M10 17h10M4 7h.01M4 12h.01M4 17h.01" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "plusSquare":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="7" ry="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 5.5v6.5c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V5.5M5 12v6.5c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V12" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "review":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 8h6M9 12h4M10 16l1.3 1.3L14 14.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "lms":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="12" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 7h4M8 11h4M8 15h4M18 6v12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "batches":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 3v4M16 3v4M3 10h18M18 17h.01" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "courses":
      return (
        <svg {...common}>
          <path d="M4 6a2 2 0 0 1 2-2h12v16H6a2 2 0 0 1-2-2zM18 4v16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "myBatches":
      return (
        <svg {...common}>
          <circle cx="10" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 20a5 5 0 0 1 10 0M17 14l2 2 3-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "hrms":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 18a4.5 4.5 0 0 1 9 0M11.5 18a4.5 4.5 0 0 1 9 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "attendance":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 8h6M9 12h4M10 16l1.3 1.3L14 14.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "attendancePolicies":
      return (
        <svg {...common}>
          <path d="M6 4h9l3 3v13H6zM15 4v4h4M9 12h6M9 16h6M9 8h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "employees":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="9" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M13.5 10h3M13.5 14h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "leave":
      return (
        <svg {...common}>
          <path d="M3 15h18M7 15l2-6h4l2 6M11 9l-1.6-3.2M13 9l3-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "payroll":
      return (
        <svg {...common}>
          <path d="M12 4v16M8 7h6a2 2 0 0 1 0 4H10a2 2 0 0 0 0 4h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "contacts":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="9" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 16c.8-1.4 2-2 3-2s2.2.6 3 2M14 9h3M14 13h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a7 7 0 0 0-1.7-1l-.3-2.6h-4l-.3 2.6a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.3 2.6h4l.3-2.6a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "branches":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="19" cy="7" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="19" cy="17" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6.8 12h4.4M13 12l4.4-5M13 12l4.4 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function ChevronIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        d={open ? "M6 15l6-6 6 6" : "M9 6l6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const userMenuRef = useRef(null);
  const [isExamOpen, setIsExamOpen] = useState(true);
  const [isLmsOpen, setIsLmsOpen] = useState(false);
  const [isHrmsOpen, setIsHrmsOpen] = useState(() =>
    location.pathname.startsWith("/hrms")
  );
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    () => localStorage.getItem("demo_theme") === "dark"
  );
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/messages": "Messages",
    "/programs": "About Us",
    "/all-enquiries": "All Enquiries",
    "/enquiries": "My Enquiries (By Subject)",
    "/admissions": "Admissions",
    "/my-admissions": "My Admissions",
    "/fees": "Fee Management",
    "/branch-transactions": "Branch Transactions",
    "/expenses": "Expenses",
    "/examinations": "All Examinations",
    "/examinations/create": "Create Examination",
    "/question-bank": "Question Bank",
    "/review-queue": "Review Queue",
    "/batches": "Batch Management",
    "/courses": "Courses",
    "/my-batches": "My Batches",
    "/hrms/attendance": "Attendance",
    "/hrms/attendance-policies": "Attendance Policies",
    "/hrms/employees": "Employees",
    "/hrms/leave-management": "Leave Management",
    "/hrms/payroll": "Payroll"
  };

  const headerTitle = pageTitles[location.pathname] ?? "Dashboard";
  const savedUser = localStorage.getItem("demo_auth_user");
  let parsedUser = null;
  try {
    parsedUser = savedUser ? JSON.parse(savedUser) : null;
  } catch {
    parsedUser = null;
  }
  const firstName = parsedUser?.firstName ?? "Demo";
  const lastName = parsedUser?.lastName ?? "User";
  const fullName = `${firstName} ${lastName}`.trim();
  const roleName = parsedUser?.role ?? "Admin";
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  function handleLogout() {
    localStorage.removeItem("demo_auth_token");
    localStorage.removeItem("demo_auth_user");
    setIsUserMenuOpen(false);
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
    localStorage.setItem("demo_theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand">JBB</div>
          <div className="sidebar-card">
            <div className="sidebar-avatar">{initials}</div>
            <h3>{fullName}</h3>
            <span className="sidebar-role">{roleName}</span>
          </div>
          <nav className="nav-list">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                <span className="nav-icon">
                  <NavIcon icon={item.icon} />
                </span>
                <span>{item.label}</span>
              </NavLink>
            ))}

            <div style={{ marginTop: "20px", opacity: 0.7, fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              EXAM TYPE
            </div>
            <button
              type="button"
              className="nav-link"
              style={{ width: "100%", border: 0, background: "transparent", cursor: "pointer", textAlign: "left" }}
              onClick={() => setIsExamOpen((prev) => !prev)}
            >
              <span className="nav-icon">
                <NavIcon icon="examinations" />
              </span>
              <span>Examinations</span>
              <span style={{ marginLeft: "auto" }}>
                <ChevronIcon open={isExamOpen} />
              </span>
            </button>
            {isExamOpen && (
              <>
                <NavLink
                  to="/examinations"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="list" />
                  </span>
                  <span>All Examinations</span>
                </NavLink>
                <NavLink
                  to="/examinations/create"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="plusSquare" />
                  </span>
                  <span>Create Examination</span>
                </NavLink>
                <NavLink
                  to="/question-bank"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="database" />
                  </span>
                  <span>Question Bank</span>
                </NavLink>
                <NavLink
                  to="/review-queue"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="review" />
                  </span>
                  <span>Review Queue</span>
                </NavLink>
              </>
            )}

            <div style={{ marginTop: "18px", opacity: 0.7, fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              LMS
            </div>
            <button
              type="button"
              className="nav-link"
              style={{ width: "100%", border: 0, background: "transparent", cursor: "pointer", textAlign: "left" }}
              onClick={() => setIsLmsOpen((prev) => !prev)}
            >
              <span className="nav-icon">
                <NavIcon icon="lms" />
              </span>
              <span>LMS</span>
              <span style={{ marginLeft: "auto" }}>
                <ChevronIcon open={isLmsOpen} />
              </span>
            </button>
            {isLmsOpen && (
              <>
                <NavLink
                  to="/batches"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="batches" />
                  </span>
                  <span>Batches</span>
                </NavLink>
                <NavLink
                  to="/courses"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="courses" />
                  </span>
                  <span>Courses</span>
                </NavLink>
                <NavLink
                  to="/my-batches"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="myBatches" />
                  </span>
                  <span>My Batches</span>
                </NavLink>
              </>
            )}

            <div style={{ marginTop: "18px", opacity: 0.7, fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              HRMS
            </div>
            <button
              type="button"
              className="nav-link"
              style={{ width: "100%", border: 0, background: "transparent", cursor: "pointer", textAlign: "left" }}
              onClick={() => setIsHrmsOpen((prev) => !prev)}
            >
              <span className="nav-icon">
                <NavIcon icon="hrms" />
              </span>
              <span>HRMS</span>
              <span style={{ marginLeft: "auto" }}>
                <ChevronIcon open={isHrmsOpen} />
              </span>
            </button>
            {isHrmsOpen && (
              <>
                <NavLink
                  to="/hrms/attendance"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="attendance" />
                  </span>
                  <span>Attendance</span>
                </NavLink>
                <NavLink
                  to="/hrms/attendance-policies"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="attendancePolicies" />
                  </span>
                  <span>Attendance Policies</span>
                </NavLink>
                <NavLink
                  to="/hrms/employees"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="employees" />
                  </span>
                  <span>Employees</span>
                </NavLink>
                <NavLink
                  to="/hrms/leave-management"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="leave" />
                  </span>
                  <span>Leave Management</span>
                </NavLink>
                <NavLink
                  to="/hrms/payroll"
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  style={{ paddingLeft: "36px" }}
                >
                  <span className="nav-icon">
                    <NavIcon icon="payroll" />
                  </span>
                  <span>Payroll</span>
                </NavLink>
              </>
            )}

            <div style={{ marginTop: "18px", opacity: 0.7, fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              CRM
            </div>
            <div className="nav-link nav-link-active" style={{ paddingLeft: "12px" }}>
              <span className="nav-icon">
                <NavIcon icon="contacts" />
              </span>
              <span>Contacts</span>
            </div>

            <button
              type="button"
              className="nav-link"
              style={{ width: "100%", border: 0, background: "transparent", cursor: "pointer", textAlign: "left" }}
              onClick={() => setIsSettingsOpen((prev) => !prev)}
            >
              <span className="nav-icon">
                <NavIcon icon="settings" />
              </span>
              <span>Settings</span>
              <span style={{ marginLeft: "auto" }}>
                <ChevronIcon open={isSettingsOpen} />
              </span>
            </button>
            {isSettingsOpen && (
              <>
                <div className="nav-link" style={{ paddingLeft: "36px" }}>
                  <span className="nav-icon">
                    <NavIcon icon="settings" />
                  </span>
                  <span>General Settings</span>
                </div>
                <div className="nav-link" style={{ paddingLeft: "36px" }}>
                  <span className="nav-icon">
                    <NavIcon icon="branches" />
                  </span>
                  <span>Branches</span>
                </div>
              </>
            )}
          </nav>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button className="menu-toggle" type="button" aria-label="Menu">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <h1>{headerTitle}</h1>
          </div>
          <div className="topbar-right">
            <button className="topbar-meta" type="button">
              <span className="topbar-meta-dot" />
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M3 20h18M5 20V9l7-4 7 4v11M9 20v-6h6v6M9 10h.01M15 10h.01"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Shivajinagar</span>
              <span className="topbar-caret">▾</span>
            </button>
            <button className="topbar-icon" type="button" title="Tasks">
              <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                <path
                  d="M9 11l2 2 4-4M7 4h10M6 20h12a1 1 0 001-1V5a1 1 0 00-1-1H6a1 1 0 00-1 1v14a1 1 0 001 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="topbar-icon" type="button" title="WhatsApp">
              <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                <path
                  d="M20 12a8 8 0 10-14.9 4.1L4 20l4-1.1A8 8 0 1020 12zM9 8.8c.3-.7.7-.7 1-.7h.3c.1 0 .3 0 .4.3l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.2-.1.4.2.4.8 1.3 1.9 1.8.9.4 1.2.4 1.4.3l.6-.7c.1-.1.3-.2.5-.1l1.5.7c.2.1.3.2.3.4v.3c0 .3-.2.7-.6.9-.4.2-1.1.5-2 0-1.1-.5-2.5-1.4-3.5-2.8-1-1.4-1-2.6-.7-3.3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="topbar-mini-caret">▾</span>
            </button>
            <button className="topbar-icon" type="button" title="Notifications">
              <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                <path
                  d="M15 17H5c1-1 2-2.2 2-5V9a5 5 0 0110 0v3c0 2.8 1 4 2 5h-4M10 19a2 2 0 004 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="topbar-icon"
              type="button"
              title="Theme"
              onClick={() => setIsDarkTheme((value) => !value)}
            >
              <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                <path
                  d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="topbar-user-wrap" ref={userMenuRef}>
              <button
                className="topbar-user topbar-user-button"
                type="button"
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                aria-expanded={isUserMenuOpen}
                aria-haspopup="menu"
              >
                <div className="topbar-user-avatar">
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path
                      d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>{fullName}</span>
                <span className="topbar-caret">▾</span>
              </button>
              {isUserMenuOpen ? (
                <div className="topbar-user-menu" role="menu">
                  <button
                    type="button"
                    className="topbar-user-menu-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  );
}
