import Footer from "@src/components/layout/Footer";
import Header from "@src/components/layout/Header";
import DataSection from "@src/components/section/DataSection";
import KeyFeatures from "@src/components/section/KeyFeatures";
import Image from "next/image";

export default function Home() {
  const comparisonData = [
    {
      label: 'Structure',
      writeback: 'Matrix (Pivot table)',
      editable: 'Tables, Type 2 Slowly Changing Dimensions'
    },
    {
      label: 'Edit/Update',
      writeback: 'Measures and Values',
      editable: 'Dimensions and Values'
    },
    {
      label: 'Sample Use cases',
      writeback: 'Forecasting, budgeting',
      editable: 'Dimensions, Price list, vendor list'
    },
    {
      label: 'Data Connectivity',
      writeback: 'Import & Live (Direct query)',
      editable: 'Live (Direct query) only'
    },
    {
      label: 'Other',
      writeback: 'Source & destination tables are different',
      editable: 'Source & destination tables are same'
    }
  ];
  const PowerAppvsEDITablecomparisonData = [
    {
      label: 'Target Persona',
      powerapps: 'Developers',
      editable: 'Business users'
    },
    {
      label: 'Development effort',
      powerapps: 'Low code',
      editable: 'No Code / Self-service'
    },
    {
      label: 'Time to Market',
      powerapps: 'High (weeks)',
      editable: 'Low (minutes)'
    },
    {
      label: 'User Experience / Interface',
      powerapps: 'Form-based and must be configured by usecase',
      editable: 'Excel-like UX'
    },
    {
      label: 'Database Destinations',
      powerapps: 'Best suited for Dataverse / Dynamics ERP',
      editable: 'Best suited for data warehouses / data platforms /data bases'
    },
    {
      label: 'Bulk Edits',
      powerapps: 'Best suited for single edits (insert/updates /delete)',
      editable: 'Best suited for bulk insert / updates and single row or single cell edits'
    },
    {
      label: 'Workflow',
      powerapps: 'Approval workflow has to be coded and complicated to build',
      editable: 'Comprehensive approval workflow (by name, by rule and by look up)'
    },
    {
      label: 'Governance',
      powerapps: 'Granular ACL is complicated and cumbersome to setup',
      editable: 'Integrated and Granular row and column ACL and audit /changelog'
    }
  ];
  const leftLogo = "https://editable.io/wp-content/uploads/editable-writeback-matrix-logo.png"
  const rightLogo = "https://editable.io/wp-content/uploads/cropped-editable-favicon.png"

  return (
    <div>
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pt-20">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span>Self-service </span>
              <span className="text-emerald-500">master/reference</span>
              <span> data management  with approval workflow, audit, and governance</span>
            </h1>
            <p className="max-w-6xl mx-auto text-gray-600 text-lg">
              Manage your master / reference / meta data for your reporting & planning applications.
              This self-service product complements your Master Data Management (MDM) solution.
              Requires minimal setup and help from IT. Available for Power BI and supports data residing
              in Azure SQL, Microsoft Fabric, Data Bricks, Snowflake, Postgres and more.
            </p>
          </div>
          <DataSection />
        </section>
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-100">
          <KeyFeatures />
        </section>
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-600 mb-6">
              EDITable empowers integrated, real-time and collaborative planning (xP&A)
            </h1>
            <p className="max-w-6xl mx-auto text-gray-600 text-lg">
              EDITable ensures that you easily manage master data / reference data supporting your planning applications. Be it products, regions, accounts, cost centers, customers, employees or salaries - keep everything updated to ensure integrity of your plans and forecasts. Supports forward-looking master data that is needed for plans but is not yet created in your tables.
            </p>
          </div>
          <Image
            className="py-10 hidden sm:block overflow-hidden"
            aria-hidden
            src="https://editable.io/wp-content/uploads/editable-integrations.svg"
            alt="File icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional            
          />
          <Image
            className="py-10 sm:hidden overflow-hidden"
            aria-hidden
            src="https://editable.io/wp-content/uploads/editable-integrations-mobile.svg"
            alt="File icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional            
          />
        </section>
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              EDITable webinar
            </h2>

            <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
              <div className="w-full lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
                <img
                  src="https://editable.io/wp-content/uploads/editable-webinar-launching-editable.png"
                  alt="Webinar thumbnail"
                  className="w-full cursor-pointer"
                />
              </div>

              <div className="w-full lg:w-1/2 lg:pl-4 ">
                <p className="text-gray-600 mb-6" >
                  Watch our launch webinar on EDITable, a pioneering no-code live writeback product that empowers business users to create and manage reference data, dimensions, and flat tables.
                </p>
                <div className="flex justify-start ">
                  <button className="px-7 py-3 bg-white border border-black rounded-lg text-gray-700 hover:bg-green-800 hover:text-white transition-colors">
                    Watch replay
                  </button>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <h1 className="text-3xl font-semibold text-center mb-4">Writeback Matrix vs EDITable</h1>
            <p className="text-center text-gray-600 mb-8">
              EDITable provides enhanced capabilities for maintaining flat tables, with support for Type 2 SCD, field-level permissions (columnar ACL) and more. Shown here is a brief comparison of writeback matrix and EDITable.
            </p>

            {/* Desktop version (hidden on mobile) */}
            <div className="hidden sm:block rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-[200px_1fr_1fr] border-b">
                <div className="p-4"></div>
                <div className="p-4 border-x flex items-center gap-2">
                  <img src={leftLogo} alt="Writeback Matrix" className="h-8" />
                  <span className="font-semibold">Writeback Matrix</span>
                </div>
                <div className="p-4 flex items-center gap-2">
                  <img src={rightLogo} alt="EDITable" className="h-9" />
                  <span className="font-semibold">EDITable</span>
                </div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[200px_1fr_1fr] bg-white border-b border-gray-300`}
                >
                  <div className="p-4 font-medium text-gray-700">{row.label}</div>
                  <div className="p-4 border-x">{row.writeback}</div>
                  <div className="p-4 bg-green-50">{row.editable}</div>
                </div>
              ))}
            </div>

            {/* Mobile version (hidden on desktop) */}
            <div className="sm:hidden rounded-lg border border-gray-200 overflow-hidden">
              {/* Headers with logos */}
              <div className="grid grid-cols-2 border-b bg-white">
                <div className="p-4 border-r flex items-center gap-2 justify-center">
                  <img src={leftLogo} alt="Writeback Matrix" className="h-8" />
                  <span className="font-semibold">Writeback Matrix</span>
                </div>
                <div className="p-4 flex items-center gap-2 justify-center">
                  <img src={rightLogo} alt="EDITable" className="h-9" />
                  <span className="font-semibold">EDITable</span>
                </div>
              </div>

              {/* Comparison rows */}
              {comparisonData.map((row, index) => (
                <div key={row.label} className="border-b last:border-b-0">
                  <div className="p-3 text-center font-semibold bg-gray-50 border-b">
                    {row.label}
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r">{row.writeback}</div>
                    <div className="p-4 bg-purple-50">{row.editable}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <h1 className="text-3xl font-semibold text-center mb-4">PowerApps vs. EDITable</h1>
            <p className="text-center text-gray-600 mb-8">
              EDITable is designed for business users with a no-code, Excel-like interface. Shown here is a brief comparison of PowerApps and EDITable.
            </p>


            <div className="max-w-6xl mx-auto p-4 sm:p-6">
              {/* Desktop version (hidden on mobile) */}
              <div className="hidden sm:block rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="grid grid-cols-[250px_1fr_1fr] border-b">
                  <div className="p-6 border-x flex items-center">
                    <span className="font-semibold">Facet</span>
                  </div>
                  <div className="p-6 border-x flex items-center gap-2">
                    <img src={rightLogo} alt="EDITable" className="h-8" />
                    <span className="font-semibold">Power Apps</span>
                  </div>
                  <div className="p-6 flex items-center gap-2">
                    <img src={rightLogo} alt="EDITable" className="h-8" />
                    <span className="font-semibold">EDITable</span>
                  </div>
                </div>

                {PowerAppvsEDITablecomparisonData.map((row, index) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-[250px_1fr_1fr] bg-white border-b border-gray-200`}
                  >
                    <div className="px-6 py-2 font-semibold text-gray-700">{row.label}</div>
                    <div className="px-6 py-2 border-x bg-gray-100">{row.powerapps}</div>
                    <div className="px-6 py-2 bg-violet-50">{row.editable}</div>
                  </div>
                ))}
              </div>

              {/* Mobile version (hidden on desktop) */}
              <div className="sm:hidden rounded-lg border border-gray-200 overflow-hidden">
                {/* Headers with logos */}
                <div className="grid grid-cols-2 border-b bg-white">
                  <div className="p-4 border-r flex items-center gap-2 justify-center">
                    <img src={rightLogo} alt="EDITable" className="h-8" />
                    <span className="font-semibold">Power Apps</span>
                  </div>
                  <div className="p-4 flex items-center gap-2 justify-center">
                    <img src={rightLogo} alt="EDITable" className="h-8" />
                    <span className="font-semibold">EDITable</span>
                  </div>
                </div>

                {/* Comparison rows */}
                {PowerAppvsEDITablecomparisonData.map((row, index) => (
                  <div key={row.label} className="border-b last:border-b-0">
                    <div className="p-3 text-center font-semibold bg-gray-50 border-b">
                      {row.label}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="p-4 border-r">{row.powerapps}</div>
                      <div className="p-4 bg-green-50">{row.editable}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
        <Footer />
    </div>
  );
}
