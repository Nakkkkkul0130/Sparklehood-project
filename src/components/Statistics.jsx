import { motion } from 'framer-motion'
import { FiTrendingUp, FiAlertCircle, FiAlertTriangle, FiInfo } from 'react-icons/fi'

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    className="card p-4"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="flex items-center space-x-3">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  </motion.div>
)

const Statistics = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <StatCard
        icon={FiTrendingUp}
        title="Total Incidents"
        value={stats.total}
        color="bg-primary-500"
      />
      <StatCard
        icon={FiAlertCircle}
        title="High Severity"
        value={stats.high}
        color="bg-error-500"
      />
      <StatCard
        icon={FiAlertTriangle}
        title="Medium Severity"
        value={stats.medium}
        color="bg-warning-500"
      />
      <StatCard
        icon={FiInfo}
        title="Low Severity"
        value={stats.low}
        color="bg-success-500"
      />
      <StatCard
        icon={FiTrendingUp}
        title="Last 7 Days"
        value={stats.recentIncidents}
        color="bg-secondary-500"
      />
    </div>
  )
}

export default Statistics