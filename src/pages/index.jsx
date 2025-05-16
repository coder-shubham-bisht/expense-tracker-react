import { ExpenseProvider } from "../context/ExpenseContext";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import Dashboard from "../components/Dashboard";

const Index = () => {
  return (
    <ExpenseProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ExpenseProvider>
  );
};

export default Index;
