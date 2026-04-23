import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage.jsx";
import { LoginPage } from "../pages/LoginPage.jsx";
import { RegisterPage } from "../pages/RegisterPage.jsx";
import { ProgramsPage } from "../pages/ProgramsPage.jsx";
import { AllEnquiriesPage } from "../pages/AllEnquiriesPage.jsx";
import { EnquiriesPage } from "../pages/EnquiriesPage.jsx";
import { AdmissionsPage } from "../pages/AdmissionsPage.jsx";
import { MyAdmissionsPage } from "../pages/MyAdmissionsPage.jsx";
import { FeesPage } from "../pages/FeesPage.jsx";
import { BranchTransactionsPage } from "../pages/BranchTransactionsPage.jsx";
import { ExpensesPage } from "../pages/ExpensesPage.jsx";
import { MessagesPage } from "../pages/MessagesPage.jsx";
import { AppLayout } from "../layouts/AppLayout.jsx";
import { AllExaminationsPage } from "../pages/AllExaminationsPage.jsx";
import { CreateExaminationPage } from "../pages/CreateExaminationPage.jsx";
import { QuestionBankPage } from "../pages/QuestionBankPage.jsx";
import { ReviewQueuePage } from "../pages/ReviewQueuePage.jsx";
import { BatchesPage } from "../pages/BatchesPage.jsx";
import { CoursesPage } from "../pages/CoursesPage.jsx";
import { MyBatchesPage } from "../pages/MyBatchesPage.jsx";
import { AttendancePage } from "../pages/AttendancePage.jsx";
import { AttendancePoliciesPage } from "../pages/AttendancePoliciesPage.jsx";
import { EmployeesPage } from "../pages/EmployeesPage.jsx";
import { LeaveManagementPage } from "../pages/LeaveManagementPage.jsx";
import { PayrollPage } from "../pages/PayrollPage.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/all-enquiries" element={<AllEnquiriesPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/enquiries" element={<EnquiriesPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/my-admissions" element={<MyAdmissionsPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route
          path="/branch-transactions"
          element={<BranchTransactionsPage />}
        />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/examinations" element={<AllExaminationsPage />} />
        <Route
          path="/examinations/create"
          element={<CreateExaminationPage />}
        />
        <Route path="/question-bank" element={<QuestionBankPage />} />
        <Route path="/review-queue" element={<ReviewQueuePage />} />
        <Route path="/batches" element={<BatchesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/my-batches" element={<MyBatchesPage />} />
        <Route path="/hrms/attendance" element={<AttendancePage />} />
        <Route path="/hrms/attendance-policies" element={<AttendancePoliciesPage />} />
        <Route path="/hrms/employees" element={<EmployeesPage />} />
        <Route path="/hrms/leave-management" element={<LeaveManagementPage />} />
        <Route path="/hrms/payroll" element={<PayrollPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
