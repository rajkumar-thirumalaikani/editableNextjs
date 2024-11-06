import React from 'react';
import { Database } from 'lucide-react';

const DataCard = ({ title, bgColor = 'bg-gray-50' }) => (
  <div className={`${bgColor} p-4 rounded-lg shadow-sm`}>
    {bgColor === 'bg-gray-50' && (
      <Database className="w-6 h-6 text-gray-400 mb-2" />
    )}
    <p className="text-gray-600 text-md font-extralight">
      {title}
    </p>
  </div>
);
const FlatTablesDataCard = ({ title ,bgColor}) => (
  <div className={`${bgColor} px-8 py-6 rounded-lg shadow-sm`}>
    <p className="text-gray-600 text-md  font-extralight text-center">
      {title}
    </p>
  </div>
);
const DataSection = () => {
  const referenceData = [
    'Customer Master',
    'Region Master',
    'Product Master',
    'Material Master',
    'Vendor Master',
    'Employee Master',
    'Inventory Master',
    'GL Account Master',
    'Store Master'
  ];

  const flatTables = [
    'Price Lists',
    'Contracts',
    'Project',
    'Subscriptions',
    'Discounts',
    'Claims',
    'Campaigns',
    'Tickets'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-[4fr,3fr] gap-4">
        {/* Reference Data Section */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Reference data
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {referenceData.map((title) => (
              <DataCard key={title} title={title} />
            ))}
          </div>
        </div>

        {/* Flat Tables Section */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Flat tables
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {flatTables.map((title) => (
              <FlatTablesDataCard
                key={title}
                title={title}
                bgColor="bg-green-50"
              />
            ))}
          </div>
        </div>
      </div>


      {/* Watch Demo Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg text-lg font-medium hover:bg-emerald-600 transition-colors">
          Watch demo
        </button>
      </div>
    </div>
  );
};

export default DataSection;