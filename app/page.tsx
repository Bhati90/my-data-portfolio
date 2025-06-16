"use client";

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Database, GitBranch, Play, Code, BarChart3, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Terminal, Activity, X, Menu,Zap,Cloud,FileDown, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  AreaChart, Area,Legend
} from 'recharts';


const DataEngineerPortfolio = () => {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [terminalText, setTerminalText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pipeline animation
  const pipelineSteps = [
  { id: 1, name: 'Data Ingestion', status: 'completed', icon: Database },
  { id: 2, name: 'Data Validation', status: 'completed', icon: Activity },
  { id: 3, name: 'Transformation', status: 'active', icon: Zap },
  { id: 4, name: 'Model Training', status: 'pending', icon: Server },
  { id: 5, name: 'Deployment', status: 'pending', icon: Cloud }
];

const domainData = [
  { name: 'AI/ML', value: 40, color: '#3B82F6' },
  { name: 'ETL', value: 25, color: '#10B981' },
  { name: 'DevOps', value: 20, color: '#F59E0B' },
  { name: 'Analytics', value: 15, color: '#EF4444' }
];

const cloudSkills = {
  Azure: [
    'Utility', 'Metastore', 'AccessConnector', 'Databricks', 'Data Lake', 'Warehouses', 'Microsoft Fabric', 'Apache Spark', 'Azure Data Factory', 'Delta Live Tables', 'Synapse'
  ],
  GCP: ['GCS Buckets', 'GCR', 'GKE'],
  AWS: ['S3 Buckets', 'EC2 Instances'],
  General: ['Open to Learn Any Cloud in Detail']
};

const fullSkillsRadar = [
  { skill: 'Python', value: 90 },
  { skill: 'SQL', value: 85 },
  { skill: 'Docker', value: 75 },
  { skill: 'MLflow', value: 80 },
  { skill: 'Tableau', value: 65 },
  { skill: 'Spark', value: 70 }
];

const projectTechEffort = [
  { name: 'Lexify AI', time: 40, tech: 60 },
  { name: 'Anime RecSys', time: 35, tech: 70 },
  { name: 'Phishing Detection', time: 45, tech: 80 }
];

  // Sample data for charts
  const performanceData = [
    { month: 'Jan', throughput: 95, latency: 120, errors: 2 },
    { month: 'Feb', throughput: 98, latency: 110, errors: 1 },
    { month: 'Mar', throughput: 92, latency: 135, errors: 3 },
    { month: 'Apr', throughput: 99, latency: 105, errors: 0 },
    { month: 'May', throughput: 97, latency: 115, errors: 1 },
    { month: 'Jun', throughput: 100, latency: 95, errors: 0 }
  ];

  const skillsData = [
    { name: 'Python', value: 90, color: '#3B82F6' },
    { name: 'SQL', value: 85, color: '#10B981' },
    { name: 'Docker', value: 75, color: '#F59E0B' },
    { name: 'Spark', value: 70, color: '#EF4444' },
    { name: 'MLflow', value: 80, color: '#8B5CF6' }
  ];

  const projectsData = [
    { name: 'Lexify AI', complexity: 85, impact: 90 },
    { name: 'Anime Recommender', complexity: 80, impact: 75 },
    { name: 'Phishing Detection', complexity: 90, impact: 95 }
  ];
const projectTechnologyBreakdown = [
  { name: 'Lexify AI', Python: 40, SQL: 10, Docker: 10, MLflow: 20, Tableau: 0 },
  { name: 'Anime RecSys', Python: 30, SQL: 15, Docker: 10, MLflow: 15, Tableau: 5 },
  { name: 'Phishing Detection', Python: 35, SQL: 20, Docker: 15, MLflow: 20, Tableau: 0 }
];
  // Terminal animation
//   const sqlCommands = [
//     "SELECT * FROM user_data WHERE created_at > '2024-01-01';",
//     "CREATE PIPELINE etl_workflow AS (",
//     "  COPY INTO staging_table FROM s3://data-bucket/",
//     "  TRANSFORM data USING python_udf()",
//     "  LOAD INTO production_table",
//     ");",
//     "SHOW PIPELINE STATUS;"
//   ];

type SQLTab = 'DDL' | 'DML' | 'Advanced' | 'Architecture';

interface SQLExample {
  command: string;
  description: string;
  output: string;
}

interface CommandExamples {
  DDL: SQLExample[];
  DML: SQLExample[];
  Advanced: SQLExample[];
  Architecture: SQLExample[];
}
//   useEffect(() => {
//     let index = 0;
//     let commandIndex = 0;
//     const typeText = () => {
//       if (commandIndex < sqlCommands.length) {
//         if (index < sqlCommands[commandIndex].length) {
//           setTerminalText(prev => prev + sqlCommands[commandIndex][index]);
//           index++;
//         } else {
//           setTimeout(() => {
//             setTerminalText(prev => prev + '\n$ ');
//             commandIndex++;
//             index = 0;
//           }, 1000);
//         }
//       }
//     };

//     const interval = setInterval(typeText, 50);
//     return () => clearInterval(interval);
//   }, []);

//  useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentStep(prev => (prev + 1) % pipelineSteps.length);
//   }, 2000);
//   return () => clearInterval(interval);
// }, []);

const PipelineFlow = () => (
  <div className="relative bg-gray-900 rounded-xl p-8 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
    <h3 className="text-2xl font-bold text-white mb-8 text-center">Data Pipeline Architecture</h3>

    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
      {pipelineSteps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === currentStep;

        const colorClass =
          index < currentStep ? 'bg-green-500' :
          index === currentStep ? 'bg-blue-500 shadow-lg shadow-blue-500/50 scale-110' :
          'bg-gray-600';

        return (
          <div key={step.id} className="flex flex-col items-center relative">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${colorClass}`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-sm mt-2 text-center max-w-20">{step.name}</p>

            {/* Line connector */}
            {index < pipelineSteps.length - 1 && (
              <div
                className="absolute sm:top-8 sm:left-full sm:ml-2 sm:w-20 h-1 sm:h-1 sm:translate-y-[-50%] w-1 h-20 top-full left-1/2 transform -translate-x-1/2"
              >
                <div
                  className={`w-full h-full transition-all duration-500 ${
                    index < currentStep ? 'bg-green-500' : index === currentStep ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>

    {/* Data flow animation */}
    <div className="mt-8 bg-gray-800 rounded-lg p-4">
      <div className="flex items-center justify-between text-sm text-gray-300 flex-wrap gap-2">
        <span>Raw Data: 1.2M records</span>
        <span>→</span>
        <span>Cleaned: 1.18M records</span>
        <span>→</span>
        <span>Transformed: 1.15M records</span>
        <span>→</span>
        <span>Model Ready: 100%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${((currentStep + 1) / pipelineSteps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  </div>
);

//   const SQLTerminal = () => {
//   const [activeTab, setActiveTab] = useState<SQLTab>('DDL');
//   const [output, setOutput] = useState<string[]>([]);
//   const [input, setInput] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);

//   const commandExamples: CommandExamples = {
//     DDL: [
//       { 
//         command: 'CREATE TABLE customers (\n  id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE\n);', 
//         description: 'Creates a table with constraints',
//         output: 'Table "customers" created successfully'
//       },
//       {
//         command: 'ALTER TABLE orders\nADD CONSTRAINT fk_customer\nFOREIGN KEY (customer_id) REFERENCES customers(id);',
//         description: 'Adds foreign key relationship',
//         output: 'Constraint "fk_customer" added to table "orders"'
//       }
//     ],
//     DML: [
//       {
//         command: 'WITH monthly_sales AS (\n  SELECT \n    customer_id,\n    SUM(amount) as total\n  FROM orders\n  GROUP BY customer_id\n)\nSELECT * FROM monthly_sales;',
//         description: 'Common Table Expression (CTE)',
//         output: 'customer_id | total\n-----------|-------\n1001      | 1500\n1002      | 2300'
//       },
//       {
//         command: 'SELECT \n  product_id,\n  SUM(quantity) OVER (PARTITION BY product_id) as total_units\nFROM order_items;',
//         description: 'Window function with PARTITION BY',
//         output: 'product_id | total_units\n-----------|------------\nP100      | 45\nP101      | 32'
//       }
//     ],
//     Advanced: [
//       {
//         command: '-- Star Schema Example\nSELECT \n  f.sales_amount,\n  d.date,\n  p.product_name,\n  c.customer_name\nFROM fact_sales f\nJOIN dim_date d ON f.date_id = d.date_id\nJOIN dim_product p ON f.product_id = p.product_id\nJOIN dim_customer c ON f.customer_id = c.customer_id;',
//         description: 'Star schema query joining fact with dimensions',
//         output: 'sales_amount | date       | product_name | customer_name\n------------|------------|-------------|-------------\n150.00     | 2023-10-15 | Widget Pro  | John Smith'
//       },
//       {
//         command: '-- Medallion Architecture Pipeline\n-- Bronze (raw):\nCREATE TABLE bronze_sales AS\nSELECT * FROM read_json(\'s3://raw/sales/*.json\');\n\n-- Silver (cleaned):\nCREATE TABLE silver_sales AS\nSELECT \n  transaction_id,\n  customer_id,\n  PARSE_DATETIME(timestamp) AS order_time,\n  amount\nFROM bronze_sales\nWHERE amount > 0;\n\n-- Gold (aggregated):\nCREATE TABLE gold_daily_sales AS\nSELECT \n  DATE(order_time) AS day,\n  SUM(amount) AS daily_revenue\nFROM silver_sales\nGROUP BY 1;',
//         description: 'Medallion architecture data pipeline',
//         output: 'Tables created successfully\nbronze_sales → silver_sales → gold_daily_sales'
//       }
//     ],
//     Architecture: [
//       {
//         command: '-- Normalization Example\n-- 1NF: Atomic values\nCREATE TABLE orders_1nf (\n  order_id INT PRIMARY KEY,\n  customer_id INT,\n  order_date DATE\n);\n\n-- 2NF: Remove partial dependencies\nCREATE TABLE order_items_2nf (\n  item_id INT PRIMARY KEY,\n  order_id INT REFERENCES orders_1nf(order_id),\n  product_id INT,\n  quantity INT\n);\n\n-- 3NF: Remove transitive dependencies\nCREATE TABLE customers_3nf (\n  customer_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  zip_code VARCHAR(10)\n);\n\nCREATE TABLE zip_codes (\n  zip_code VARCHAR(10) PRIMARY KEY,\n  city VARCHAR(100),\n  state VARCHAR(50)\n);',
//         description: 'Database normalization (1NF → 3NF)',
//         output: 'Normalized schema created successfully'
//       }
//     ]
//   };

//   const executeCommand = (cmd: string) => {
//     setIsProcessing(true);
//     setInput('');
//     setOutput(prev => [...prev, `$ ${cmd}`, 'Executing...']);

//     // Clear any existing timeout
//     // if (timeoutRef.current) {
//     //   clearTimeout(timeoutRef.current);
//     // }

//     // timeoutRef.current = setTimeout(() => {
//     //   const example = Object.values(commandExamples)
//     //     .flat()
//     //     .find(e => e.command.includes(cmd.split('\n')[0]));

//     //   setOutput(prev => [
//     //     ...prev.slice(0, -1),
//     //     example?.output || '✓ Command executed successfully',
//     //     ''
//     //   ]);
//     //   setIsProcessing(false);
//     // }, 1500);
//   };


//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && input.trim()) {
//       executeCommand(input);
//     }
//   };

//   useEffect(() => {
//     const terminal = document.getElementById('sql-terminal-output');
//     if (terminal) {
//       terminal.scrollTop = terminal.scrollHeight;
//     }
//   }, [output]);

//   return (
//     <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
//       {/* Terminal Header */}
//       <div className="flex items-center bg-gray-800 px-4 py-3 border-b border-gray-700">
//         <div className="flex space-x-2 mr-4">
//           <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//         </div>
        
//         <div className="flex space-x-1 overflow-x-auto py-1 scrollbar-hide">
//           {(Object.keys(commandExamples) as SQLTab[]).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-3 py-1 text-xs rounded-md whitespace-nowrap ${
//                 activeTab === tab
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Terminal Body */}
//       <div className="p-4 font-mono text-sm">
//         {/* Command Examples */}
//         <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {commandExamples[activeTab]?.map((example, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
//             >
//               <div className="p-3 border-b border-gray-700 bg-gray-900/50">
//                 <div className="text-blue-400 text-xs mb-1">{example.description}</div>
//               </div>
//               <div className="p-3">
//                 <pre className="text-gray-300 text-xs overflow-x-auto">{example.command}</pre>
//                 <button
//                   onClick={() => executeCommand(example.command)}
//                   className="mt-2 text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
//                 >
//                   Run Example
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Interactive Terminal */}
//         <div className="bg-black rounded-lg p-3 h-64 flex flex-col">
//           {/* Terminal Output */}
//           <div 
//             id="sql-terminal-output"
//             className="flex-1 overflow-y-auto mb-3 text-green-400 font-mono text-xs space-y-1"
//           >
//             <div>Connected to PostgreSQL 14.5</div>
//             <div>Type "help" for available commands</div>
//             <div>--------------------------------------------------</div>
            
//             {output.map((line, i) => (
//               <div key={i} className={line.startsWith('$') ? 'text-yellow-400' : ''}>
//                 {line}
//               </div>
//             ))}
            
//             <AnimatePresence>
//               {isProcessing && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="inline-flex space-x-1"
//                 >
//                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
//                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
//                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Input Area */}
//           <div className="flex items-start border-t border-gray-700 pt-2">
//             <span className="text-yellow-400 mr-2 mt-1">$</span>
//             <div className="flex-1">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="w-full bg-transparent text-white outline-none font-mono text-xs"
//                 placeholder="Type SQL commands here..."
//                 disabled={isProcessing}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const SQLTerminal = () => {
  const [activeTab, setActiveTab] = useState<SQLTab>('DDL');
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const commandExamples: CommandExamples = {
    DDL: [
      { 
        command: 'CREATE TABLE customers (\n  id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE\n);', 
        description: 'Creates a table with constraints',
        output: 'Table "customers" created successfully'
      },
      {
        command: 'ALTER TABLE orders\nADD CONSTRAINT fk_customer\nFOREIGN KEY (customer_id) REFERENCES customers(id);',
        description: 'Adds foreign key relationship',
        output: 'Constraint "fk_customer" added to table "orders"'
      }
    ],
    DML: [
      {
        command: 'WITH monthly_sales AS (\n  SELECT \n    customer_id,\n    SUM(amount) as total\n  FROM orders\n  GROUP BY customer_id\n)\nSELECT * FROM monthly_sales;',
        description: 'Common Table Expression (CTE)',
        output: 'customer_id | total\n-----------|-------\n1001      | 1500\n1002      | 2300'
      },
      {
        command: 'SELECT \n  product_id,\n  SUM(quantity) OVER (PARTITION BY product_id) as total_units\nFROM order_items;',
        description: 'Window function with PARTITION BY',
        output: 'product_id | total_units\n-----------|------------\nP100      | 45\nP101      | 32'
      }
    ],
    Advanced: [
      {
        command: '-- Star Schema Example\nSELECT \n  f.sales_amount,\n  d.date,\n  p.product_name,\n  c.customer_name\nFROM fact_sales f\nJOIN dim_date d ON f.date_id = d.date_id\nJOIN dim_product p ON f.product_id = p.product_id\nJOIN dim_customer c ON f.customer_id = c.customer_id;',
        description: 'Star schema query joining fact with dimensions',
        output: 'sales_amount | date       | product_name | customer_name\n------------|------------|-------------|-------------\n150.00     | 2023-10-15 | Widget Pro  | John Smith'
      },
      {
        command: '-- Medallion Architecture Pipeline\n-- Bronze (raw):\nCREATE TABLE bronze_sales AS\nSELECT * FROM read_json(\'s3://raw/sales/*.json\');\n\n-- Silver (cleaned):\nCREATE TABLE silver_sales AS\nSELECT \n  transaction_id,\n  customer_id,\n  PARSE_DATETIME(timestamp) AS order_time,\n  amount\nFROM bronze_sales\nWHERE amount > 0;\n\n-- Gold (aggregated):\nCREATE TABLE gold_daily_sales AS\nSELECT \n  DATE(order_time) AS day,\n  SUM(amount) AS daily_revenue\nFROM silver_sales\nGROUP BY 1;',
        description: 'Medallion architecture data pipeline',
        output: 'Tables created successfully\nbronze_sales → silver_sales → gold_daily_sales'
      }
    ],
    Architecture: [
      {
        command: '-- Normalization Example\n-- 1NF: Atomic values\nCREATE TABLE orders_1nf (\n  order_id INT PRIMARY KEY,\n  customer_id INT,\n  order_date DATE\n);\n\n-- 2NF: Remove partial dependencies\nCREATE TABLE order_items_2nf (\n  item_id INT PRIMARY KEY,\n  order_id INT REFERENCES orders_1nf(order_id),\n  product_id INT,\n  quantity INT\n);\n\n-- 3NF: Remove transitive dependencies\nCREATE TABLE customers_3nf (\n  customer_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  zip_code VARCHAR(10)\n);\n\nCREATE TABLE zip_codes (\n  zip_code VARCHAR(10) PRIMARY KEY,\n  city VARCHAR(100),\n  state VARCHAR(50)\n);',
        description: 'Database normalization (1NF → 3NF)',
        output: 'Normalized schema created successfully'
      }
    ]
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) executeCommand(input);
  };

  const executeCommand = (cmd: string) => {
    setIsProcessing(true);
    setInput('');
    setOutput(prev => [...prev, `$ ${cmd}`, 'Executing...']);
    setTimeout(() => {
      const example = Object.values(commandExamples).flat().find(e => e.command.includes(cmd.trim().split('\n')[0]));
      setOutput(prev => [...prev.slice(0, -1), example?.output || '✓ Command executed successfully', '']);
      setIsProcessing(false);
    }, 15);
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
      <div className="flex items-center bg-gray-800 px-4 py-3 border-b border-gray-700">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex space-x-1 overflow-x-auto py-1 scrollbar-hide">
          {(Object.keys(commandExamples) as SQLTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-colors duration-500 ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 font-mono text-sm">
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {commandExamples[activeTab]?.map((example, idx) => (
            <div
              key={example.command}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500"
            >
              <div className="p-3 border-b border-gray-700 bg-gray-900/50">
                <div className="text-blue-400 text-xs mb-1">{example.description}</div>
              </div>
              <div className="p-3">
                <pre className="text-gray-300 text-xs overflow-x-auto whitespace-pre-wrap">{example.command}</pre>
                <button
                  onClick={() => executeCommand(example.command)}
                  className="mt-2 text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
                >
                  Run Example
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-lg p-3 h-64 flex flex-col">
          <div id="sql-terminal-output" className="flex-1 overflow-y-auto mb-3 text-green-400 font-mono text-xs space-y-1">
            <div>Connected to PostgreSQL 14.5</div>
            <div>Type "help" for available commands</div>
            <div>--------------------------------------------------</div>
            {output.map((line, i) => (
              <div key={i} className={line.startsWith('$') ? 'text-yellow-400' : ''}>{line}</div>
            ))}
            {isProcessing && (
              <div className="inline-flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
          </div>

          <div className="flex items-start border-t border-gray-700 pt-2">
            <span className="text-yellow-400 mr-2 mt-1">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-white outline-none font-mono text-xs"
              placeholder="Type SQL commands here..."
              disabled={isProcessing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

  const AnalyticsDashboard = () => (
   
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in motion-safe:transition-all motion-safe:duration-3600 motion-safe:ease-in-out">
{/* Project Domain Pie Chart */}
<div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
  <h4 className="text-xl font-semibold text-white mb-4">Project Domain Distribution</h4>
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={domainData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        label={({ name, value }) => `${name}: ${value}%`}
      >
        {domainData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>

{/* Skill Radar Chart */}
<div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
  <h4 className="text-xl font-semibold text-white mb-4">Skill Strength Radar</h4>
  <ResponsiveContainer width="100%" height={250}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={fullSkillsRadar}>
      <PolarGrid stroke="#444" />
      <PolarAngleAxis dataKey="skill" stroke="#ccc" />
      <PolarRadiusAxis stroke="#ccc" />
      <Radar name="Skill" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
      <Tooltip />
    </RadarChart>
  </ResponsiveContainer>
</div>

{/* Project Time vs Tech Complexity */}
<div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-[1.02] lg:col-span-2">
  <h4 className="text-xl font-semibold text-white mb-4">Project Effort Analysis</h4>
  <ResponsiveContainer width="100%" height={250}>
    <AreaChart data={projectTechEffort}>
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="name" stroke="#ccc" />
      <YAxis stroke="#ccc" />
      <Tooltip />
      <Area type="monotone" dataKey="time" stackId="1" stroke="#3B82F6" fill="#3B82F6" />
      <Area type="monotone" dataKey="tech" stackId="1" stroke="#EF4444" fill="#EF4444" />
    </AreaChart>
  </ResponsiveContainer>
</div>
{/* NEW: Project Technology Usage Bar Chart */}
<div className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-[1.02] lg:col-span-2">
  <h4 className="text-xl font-semibold text-white mb-4">Technology Usage per Project</h4>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={projectTechnologyBreakdown} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="name" stroke="#ccc" />
      <YAxis stroke="#ccc" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Python" stackId="a" fill="#3B82F6" />
      <Bar dataKey="SQL" stackId="a" fill="#10B981" />
      <Bar dataKey="Docker" stackId="a" fill="#F59E0B" />
      <Bar dataKey="MLflow" stackId="a" fill="#8B5CF6" />
      <Bar dataKey="Tableau" stackId="a" fill="#EC4899" />
    </BarChart>
  </ResponsiveContainer>
</div>


</div>
  );

  const  Clouds= () => (
 <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
  <h4 className="text-2xl font-bold text-white mb-6 text-center">Cloud Platform Skills</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Azure - Main large card */}
    <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#007FFF] to-[#0052CC] text-white border border-[#007FFF] rounded-xl p-6 shadow-lg">
      <h5 className="text-xl font-semibold mb-3">Azure</h5>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6 text-sm">
        {["Utility", "Metastore", "AccessConnector", "Databricks", "Data Lake", "Warehouses", "Microsoft Fabric", "Apache Spark", "Azure Data Factory", "Delta Live Tables", "Synapse"].map((service, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Other platforms as individual cards */}
    {[ 
      { platform: 'GCP', services: ['GCS Buckets', 'GCR', 'GKE'], theme: 'from-[#4285F4] to-[#34A853]', border: '#34A853' },
      { platform: 'AWS', services: ['S3 Buckets', 'EC2 Instances'], theme: 'from-[#FF9900] to-[#FF6600]', border: '#FF9900' },
      { platform: 'General', services: ['Open to Learn Any Cloud in Detail'], theme: 'from-gray-700 to-gray-800', border: '#666' }
    ].map(({ platform, services, theme, border }, i) => (
      <div
        key={platform}
        className={`rounded-xl p-4 bg-gradient-to-br ${theme} text-white border`} 
        style={{ borderColor: border }}
      >
        <h5 className="text-lg font-semibold mb-2">{platform}</h5>
        <ul className="space-y-1 text-sm">
          {services.map((service, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
  
<nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-sm border-b border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div className="flex items-center justify-between">
      {/* Logo or name */}
    <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Database className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Kishan Bhati</h1>
          <p className="text-blue-400">Data Engineer</p>
        </div>
        </div>
      {/* Desktop nav */}
      <div className="hidden md:flex gap-4 items-center">
        {[{ id: 'pipeline', label: 'Pipeline', icon: GitBranch },
          { id: 'sql', label: 'SQL Terminal', icon: Terminal },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'clouds', label: 'Clouds', icon: Cloud },
          { id: 'projects', label: 'Projects', icon: Code}].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-3 py-2 border-b-2 transition-colors duration-200 ease-in-out
              ${activeTab === id
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
        <a href="https://www.linkedin.com/in/kishan-bhati-79a667202" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400">
          <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
        </a>
        <a href="/resume.pdf" download className="flex items-center px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded text-white">
          <FileDown className="w-4 h-4 mr-1" /> Resume
        </a>
      </div>

      {/* Hamburger menu icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-4 flex flex-col gap-3">
        {[{ id: 'pipeline', label: 'Pipeline', icon: GitBranch },
          { id: 'sql', label: 'SQL Terminal', icon: Terminal },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'clouds', label: 'Clouds', icon: Cloud },
          { id: 'projects', label: 'Projects', icon: Code }].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => {
              setActiveTab(id);
              setIsMenuOpen(false);
            }}
            className={`flex items-center space-x-2 px-3 py-2 border-b-2 transition-colors duration-200 ease-in-out
              ${activeTab === id
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-white'}`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
        <a href="https://www.linkedin.com/in/kishan-bhati-79a667202" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400">
          <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
        </a>
        <a href="/resume.pdf" download className="flex items-center px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded text-white">
  <FileDown className="w-4 h-4 mr-1" /> Resume
</a>
      </div>
    )}
  </div>
</nav>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Building Robust Data Pipelines & ML Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recent AI & Data Science graduate specializing in ETL workflows, data pipeline automation, 
            and scalable backend systems. Experienced with Python, SQL, Docker, and cloud technologies.
          </p>
        </section>

        {/* Dynamic Content Based on Active Tab */}
        <section className="mb-12">
          {activeTab === 'pipeline' && <PipelineFlow />}
          {activeTab === 'sql' && <SQLTerminal />}
          {activeTab === 'analytics' && <AnalyticsDashboard />}
          {activeTab === 'clouds' && <Clouds />}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Lexify - AI Research Assistant",
                  period: "Jan 2025 - Apr 2025",
                  description: "Built LLM-powered research assistant with ArXiv API integration, Qdrant vector DB for RAG, and comprehensive data pipeline for PDF processing.",
                  tech: ["Python", "LLM", "Vector DB", "API Integration"],
                  color: "from-blue-500 to-purple-600"
                },
                {
                  title: "Anime Recommender System",
                  period: "Apr 2025 - Jun 2025",
                  description: "Developed scalable ML recommendation system with Comet tracking, DVC version control, Jenkins CI/CD, and GCP deployment.",
                  tech: ["ML", "Jenkins", "GCP", "DVC", "Comet"],
                  color: "from-green-500 to-blue-500"
                },
                {
                  title: "Phishing Detection Pipeline",
                  period: "Jun 2025 - Present",
                  description: "Built end-to-end ETL pipeline: Data Ingestion → Validation → Transformation → Training → Deployment with MongoDB and AWS integration.",
                  tech: ["ETL", "MongoDB", "MLflow", "AWS", "Dagshub"],
                  color: "from-red-500 to-orange-500"
                }
              ].map((project, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className={`w-full h-2 bg-gradient-to-r ${project.color} rounded-full mb-4`}></div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-400 text-sm mb-3">{project.period}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Skills Section */}
 <section className="mb-12">
  <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Expertise</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
    {[
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🗃️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Spark', icon: '⚡' },
      { name: 'MLflow', icon: '🔬' },
      { name: 'Tableau', icon: '📊' },
      { name: 'Git', icon: '🔧' },
      { name: 'Azure', icon: '☁️' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'CI/CD', icon: '🚀' },
      { name: 'Grafana', icon: '📈' },
      { name: 'MongoDB', icon: '🍃' },
      {name: 'DSA', icon: '📚' },
    ].map((skill) => (
      <a
        key={skill.name}
        href={`/blogs/${skill.name.toLowerCase()}`}
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
      >
        <div className="text-2xl mb-2">{skill.icon}</div>
        <p className="text-white text-sm font-medium">{skill.name}</p>
      </a>
    ))}
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <span className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              BTM Layout, Bangalore, India
            </span>
          </div>
          <p className="text-gray-400">
            Ready to contribute to real-world ETL workflows and work with cutting-edge data technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DataEngineerPortfolio;