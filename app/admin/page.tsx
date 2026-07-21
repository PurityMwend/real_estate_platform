export default function AdminPage() {
  const stats = [
    { label: "Property Listings", value: 128 },
    { label: "Users", value: 452 },
    { label: "Open Inquiries", value: 36 },
    { label: "Viewing Bookings", value: 14 },
    { label: "Service Requests", value: 9 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-slate-400">A simple overview of operations.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-white/10 bg-navy-light p-4">
            <p className="text-sm text-slate-400">{s.label}</p>
            <p className="mt-2 text-2xl font-bold text-gold-light">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-navy-light p-4">
        <h2 className="text-lg font-semibold text-white">Recent Inquiries</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead>
              <tr className="border-b border-white/10 text-slate-500">
                <th className="py-3 font-medium">Name</th>
                <th className="py-3 font-medium">Property</th>
                <th className="py-3 font-medium">Status</th>
                <th className="py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 text-white font-medium">Jane Wanjiku</td>
                <td>Modern 2BR Apartment</td>
                <td><span className="text-gold">New</span></td>
                <td>2026-07-21</td>
              </tr>
              <tr>
                <td className="py-3 text-white font-medium">David Otieno</td>
                <td>4BR Family House</td>
                <td><span className="text-slate-500">Responded</span></td>
                <td>2026-07-20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}