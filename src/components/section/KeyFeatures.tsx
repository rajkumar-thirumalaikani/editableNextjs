import React from 'react';
import { Check } from 'lucide-react';

const FeatureCategory = ({ title, features }) => (
    // <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
    <table className="table-auto w-full border border-gray-600 rounded-xl overflow-hidden">
        <thead>
            <tr className="bg-white">
                <th className="px-4 py-4 text-left">{title}</th>
            </tr>
        </thead>
        <tbody>
            {features.map((feature, index) => (
                <tr key={index} className="bg-green-50">
                    <td className="border px-4 py-4 text-gray-700">
                        <div className="flex justify-between items-center">
                            <span>{feature}</span>
                            <Check className="w-5 h-5 text-emerald-500" />
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    // </div>
);



const KeyFeatures = () => {
    const featureData = {
        'Core Capabilities': [
            'Create a table from CSV/EXCEL',
            'Edit table data (both measures and dimensions)',
            'List of values lookup (from dropdown)',
            'Field validation (email, phones etc.)',
            'Setting default values',
            'Field constraints'
        ],
        'Bulk Edit': [
            'Bulk insert/bulk edit',
            'Find, Search and Replace'
        ],
        'Formatting/Themes': [
            'Layouts, conditional formatting and themes'
        ],
        'Collaboration': [
            'Comments, threads, tasks, notifications'
        ],
        'Data Integration': [
            'Advanced data integration (Webhooks)',
            'Scripting extensions'
        ],
        'Approvals': [
            'Table-level approval (Admin)',
            'Conditional approval (Measure filter)',
            'Row-level approval (Dimension filter)',
            'Save mode (Persist with flag)'
        ],
        'Slowly Changing Dimensions': [
            'SCD Type II support'
        ],
        'Data Platforms and Storage': [
            'Azure SQL, Microsoft Fabric DW, Snowflake, Redshift, Postgres'
        ],
        'Security/Governance': [
            'Audit/Change Log'
        ],
        'Granular user activity permissions': [
            'Create table',
            'Add rows',
            'Delete rows',
            'Edit/Replace rows',
            'Field level view/edit permissions (Columnar ACL)'
        ]
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    {Object.entries(featureData)
                        .slice(0, Math.ceil(Object.keys(featureData).length / 2))
                        .map(([title, features]) => (
                            <FeatureCategory
                                key={title}
                                title={title}
                                features={features}
                            />
                        ))}
                </div>
                <div className="space-y-6">
                    {Object.entries(featureData)
                        .slice(Math.ceil(Object.keys(featureData).length / 2))
                        .map(([title, features]) => (
                            <FeatureCategory
                                key={title}
                                title={title}
                                features={features}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;