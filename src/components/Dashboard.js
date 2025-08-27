import React, { useState } from 'react';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getPermissions = (role) => {
    switch (role) {
      case 'مالك':
        return ['overview', 'users', 'reports', 'settings', 'analytics'];
      case 'أدمن':
        return ['overview', 'users', 'reports', 'settings'];
      case 'عميل':
        return ['overview', 'reports'];
      default:
        return ['overview'];
    }
  };

  const permissions = getPermissions(user.role);

  const tabs = [
    { id: 'overview', name: 'نظرة عامة', icon: '📊' },
    { id: 'users', name: 'المستخدمين', icon: '👥' },
    { id: 'reports', name: 'التقارير', icon: '📈' },
    { id: 'settings', name: 'الإعدادات', icon: '⚙️' },
    { id: 'analytics', name: 'التحليلات', icon: '📋' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">إجمالي المستخدمين</h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
              <p className="text-sm text-gray-500 mt-1">+12% من الشهر الماضي</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">المبيعات</h3>
              <p className="text-3xl font-bold text-green-600">$45,678</p>
              <p className="text-sm text-gray-500 mt-1">+8% من الشهر الماضي</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">الطلبات</h3>
              <p className="text-3xl font-bold text-purple-600">892</p>
              <p className="text-sm text-gray-500 mt-1">+15% من الشهر الماضي</p>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">إدارة المستخدمين</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right py-2">الاسم</th>
                      <th className="text-right py-2">البريد الإلكتروني</th>
                      <th className="text-right py-2">الدور</th>
                      <th className="text-right py-2">الحالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">أحمد محمد</td>
                      <td className="py-2">ahmed@example.com</td>
                      <td className="py-2">مدير</td>
                      <td className="py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">نشط</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">فاطمة علي</td>
                      <td className="py-2">fatima@example.com</td>
                      <td className="py-2">موظف</td>
                      <td className="py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">نشط</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">التقارير</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-medium text-gray-800">تقرير المبيعات الشهري</h4>
                  <p className="text-sm text-gray-600 mt-1">آخر تحديث: اليوم</p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-medium text-gray-800">تقرير المستخدمين</h4>
                  <p className="text-sm text-gray-600 mt-1">آخر تحديث: أمس</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">الإعدادات</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم التطبيق</label>
                <input type="text" value="ROHBA" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني للإشعارات</label>
                <input type="email" placeholder="admin@rohba.com" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                حفظ التغييرات
              </button>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">التحليلات المتقدمة</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">نمو المستخدمين</h4>
                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">رسم بياني للنمو</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">توزيع الأدوار</h4>
                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">رسم دائري للأدوار</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>المحتوى غير متوفر</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">ROHBA</h1>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-sm text-gray-700">
                مرحباً، {user.name} ({user.role})
              </span>
              <button
                onClick={onLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition duration-200"
              >
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-lg shadow-sm border p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  permissions.includes(tab.id) && (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-right px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                          activeTab === tab.id
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="ml-2">{tab.icon}</span>
                        {tab.name}
                      </button>
                    </li>
                  )
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
